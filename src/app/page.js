"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await res.json();

      setPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  const filtered = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-8">
      <h1 className="text-4xl font-sans text-center mb-6">Pokemon Search</h1>

      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full border border-blue-300 rounded p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((pokemon, index) => (
            <Link key={pokemon.name} href={`/pokemon/${index + 1}`}>
              <div className="bg-white p-4 rounded shadow hover:bg-blue-200 transition text-center">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                  className="mx-auto mb-2 h-40"
                />
                <p className="capitalize font-sans text-lg">{pokemon.name}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full">No Pokemon found.</p>
        )}
      </div>
    </main>
  );
};

export default HomePage;
