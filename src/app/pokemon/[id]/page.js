const generateStaticParams = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await res.json();

  const params = data.results.map((_, index) => ({
    id: (index + 1).toString(),
  }));

  return params;
};

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
          className="mb-4 h-32 w-32 object-contain mx-auto"
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

export { generateStaticParams };
export default PokemonDetail;
