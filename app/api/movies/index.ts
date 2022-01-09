import { Movie } from "./movies.types";

export async function get(title?: string | null) {
  const response = await fetch("https://ghibliapi.herokuapp.com/films/");

  const movies: Movie[] = await response.json();

  return title
    ? movies.filter((movie) =>
        movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      )
    : movies;
}

export async function getById(movieId: string) {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${movieId}`
  );

  const movie: Movie = await response.json();

  const characters = await Promise.all(
    movie.people
      .filter((url) => Boolean(url.split("/people/")[1]))
      .map((url) => fetch(url).then((res) => res.json()))
  );

  return { ...movie, characters };
}
