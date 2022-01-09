import { MovieCharacter } from "./character.types";

export async function get(characterId: string): Promise<MovieCharacter> {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/people/${characterId}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
