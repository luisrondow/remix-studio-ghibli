import { Link } from "remix";
import { Movie } from "~/api/movies/movies.types";

export default function MovieBanner(
  props: Pick<Movie, "title" | "movie_banner">
) {
  const { title, movie_banner } = props;

  return (
    <div>
      <div className="w-full h-96 overflow-hidden relative">
        <div className="w-full h-full flex flex-col absolute justify-between items-start">
          <Link
            to="/movies"
            className="text-white p-5 text-2xl hover:underline"
          >
            Go Back
          </Link>
          <div className="bg-slate-700/60 p-5">
            <div className="text-6xl font-bold text-white">{title}</div>
          </div>
        </div>

        <img
          src={movie_banner}
          className="w-full h-auto"
          style={{ marginTop: -100 }}
        />
      </div>
    </div>
  );
}
