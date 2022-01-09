import { LoaderFunction, Outlet, useLoaderData } from "remix";
import invariant from "tiny-invariant";

import * as MoviesService from "~/api/movies";
import { Movie } from "~/api/movies/movies.types";
import CharacterList from "~/components/CharacterList";
import MovieBanner from "~/components/MovieBanner";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "expected params.id");

  const movie = await MoviesService.getById(params.id);

  return movie;
};

export default function Movie() {
  const movie = useLoaderData<Movie>();

  return (
    <div>
      <MovieBanner title={movie.title} movie_banner={movie.movie_banner} />

      <div className="p-10">
        <p>{movie.description}</p>

        <div className="flex py-5 space-x-5">
          <CharacterList characters={movie.characters} />

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
