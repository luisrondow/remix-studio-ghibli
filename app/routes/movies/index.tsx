import { Form, LoaderFunction, useLoaderData, Link } from "remix";

import * as MoviesService from "~/api/movies";
import { Movie } from "~/api/movies/movies.types";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");

  return MoviesService.get(title);
};

export default function Movies() {
  const movies = useLoaderData<Movie[]>();

  return (
    <div className="p-16 font-sans">
      <h1 className="text-5xl font-bold text-center">
        Studio Ghibli Collection
      </h1>

      <Form method="get" className="py-8">
        <label className="font-bold">
          Search{" "}
          <input
            type="text"
            name="title"
            placeholder="Type a title..."
            className="border-2 rounded py-2 px-3"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go!
        </button>
      </Form>

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            title={movie.title}
            to={movie.id}
            className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer"
            prefetch="intent"
          >
            <div>{movie.title}</div>
            <img src={movie.image} alt={movie.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
