const PokemonDetail = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="p-4 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mb-4 h-30 w-50 object-contain mx-auto"
        />
        <p>
          <strong>Height:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight}
        </p>

        <p className="mt-4 font-semibold">Abilities:</p>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map((a) => (
            <li key={a.ability.name}>{a.ability.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default PokemonDetail;
