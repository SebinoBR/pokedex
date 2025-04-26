import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../services/api';

function PokemonDetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonByName(name);
      setPokemon(data);
    }
    fetchData();
  }, [name]);

  if (!pokemon) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img
          src={pokemon.sprites?.other?.['official-artwork']?.front_default}
          alt={pokemon.name}
        />
        <h2>{pokemon.name}</h2>
        
          <p><strong>Height:</strong> {pokemon.height}</p>
          <p><strong>Weight:</strong> {pokemon.weight}</p>
          <p>
            <strong>Types:</strong><br />
            {pokemon.types.map((typeInfo) => (
              <span key={typeInfo.slot} className="type-badge">{typeInfo.type.name}</span>
            ))}
          </p>
          <p>
            <strong>Abilities:</strong><br />
            {pokemon.abilities.map((abilityInfo) => (
              <div key={abilityInfo.slot || abilityInfo.ability.name}>{abilityInfo.ability.name}</div>
            ))}
          </p>
        
      </div>
    </div>
  );
}

export default PokemonDetailPage;
