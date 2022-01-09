import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";

import * as CharacterService from "~/api/character";
import { MovieCharacter } from "~/api/character/character.types";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "params.id is required");

  return CharacterService.get(params.id);
};

export default function Character() {
  const character = useLoaderData<MovieCharacter>();

  return (
    <div className="mb-3">
      <div className="text-3xl mb-2">Character Details</div>
      <div className="p-4 rounded shadow-lg border">
        <div className="text-gray-700 font-bold text-xl mb-2">
          {character.name}
        </div>
        <ul className="py-2">
          <li>Gender: {character.gender}</li>
          <li>Age: {character.age}</li>
          <li>Eye Color: {character.eye_color}</li>
          <li>Hair Color: {character.hair_color}</li>
        </ul>
      </div>
    </div>
  );
}
