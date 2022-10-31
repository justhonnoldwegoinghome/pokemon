import Head from "next/head";
import Link from "next/link";

export default function Pokemon({
  name,
  frontViewUrl,
}: {
  name: string;
  frontViewUrl: string;
}) {
  const className = `container mx-auto relative min-h-screen p-12 flex justify-center items-center ${
    name === "lugia"
      ? "bg-blue"
      : name === "ho-oh"
      ? "bg-orange-400"
      : name === "mew"
      ? "bg-pink-400"
      : "bg-fuchsia-400"
  } `;
  return (
    <>
      <Head>
        <title>{`${name} SSG`}</title>
      </Head>

      <div className={className}>
        <img src={frontViewUrl} alt={name} />
        <Link
          href="/"
          className="absolute top-4 right-4 p-4 bg-slate-100 rounded"
        >
          Back
        </Link>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "lugia" } },
      { params: { name: "ho-oh" } },
      { params: { name: "mew" } },
      { params: { name: "mewtwo" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const name = params["name"];

  console.log("getStaticProps called for", name);

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonData = await response.json();

  return {
    props: {
      name: pokemonData["name"],
      frontViewUrl:
        pokemonData["sprites"]["other"]["dream_world"]["front_default"],
    },
  };
}
