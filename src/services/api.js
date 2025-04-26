const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemons(limit = 18, offset = 0) {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data;
}

export async function getPokemonByName(name) {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  const data = await response.json();
  return data;
}
