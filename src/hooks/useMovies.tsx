// ./src/hooks/useMovies.ts
import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://ghibliapi.herokuapp.com/films`);
  const json = await result.json();
  return json;
}

export function useMovies() {
  return useQuery(["id"], fetchData);
}
