import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [quizAnswer, setQuizAnswer] = useState([]);
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");

  const [abilities, setAbilities] = useState([]);

  const [showFirstAnswer, setShowFirstAnswer] = useState(0);

  const handleQuizAnswers = () => {
    setShowFirstAnswer((prev) => prev + 4);
    setShowLastAnswer((prev) => prev + 4);
  };

  const [showLastAnswer, setShowLastAnswer] = useState(4);

  const [displayedPokemon, setDisplayedPokemon] = useState([]);

  console.log();

  useEffect(() => {
    const fetchPokemonData = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/type");
      const data = await resp.json();

      setQuizAnswer(data.results);
    };

    fetchPokemonData();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await resp.json();
      const randomPokemon = Math.floor(Math.random() * data.results.length);
      setDisplayedPokemon(data.results);
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const fetchAbilities = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await resp.json();

      setFrontImg(data.sprites.back_default);
      setBackImg(data.sprites.front_default);
      setAbilities(data.abilities);
    };
    fetchAbilities();
  }, []);

  return (
    <>
      <h1 className=" text-[#E8EDFF] text-4xl mb-20 text-center mt-9">
        PokeTypes
      </h1>

      <p className=" text-3xl text-white mb-7">
        Guess the type of this pokemon
      </p>

      <div className="flex flex-col">
        <div className="bg-[#191626] p-6 rounded-2xl">
          {displayedPokemon.slice(0, 1).map((pokemon) => (
            <div>
              <div className="flex">
                {" "}
                <div>
                  <img src={frontImg} className="w-[192px]" />
                </div>
                <div>
                  <img src={backImg} className="w-[192px]" />
                </div>
              </div>

              <h2 className="mt-6 text-[#D3CAF8] text-3xl text-start">
                {pokemon.name}
              </h2>
              <div>
                <p className=" text-2xl font-normal font-[Roboto Mono] text-[#D5CFEB] mt-4">
                  Abilities
                </p>
                <div className="flex gap-4 py-5">
                  {abilities.map((item) => (
                    <p className=" bg-[#342e59] text-[#E7E4E4] py-1 px-5 text-xl mt-3 rounded-md ">
                      {item.ability.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-4">
          <div></div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-3 mb-16">
            {quizAnswer.slice(showFirstAnswer, showLastAnswer).map((answer) => (
              <div className="hover:bg-[#2f2850] py-3 px-11 gap-4 bg-[#191626] text-center rounded-md ">
                <p
                  className=" text-xl font-normal font-[Roboto Mono] text-white cursor-pointer"
                  onClick={handleQuizAnswers}
                >
                  {answer.name[0].toUpperCase() + answer.name.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
