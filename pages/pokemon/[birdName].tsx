import Head from "next/head";
import Link from "next/link";

export default function Pokemon({
  name,
  frontViewUrl,
}: {
  name: string;
  height: number;
  weight: number;
  frontViewUrl: string;
}) {
  const className = `container mx-auto relative min-h-screen p-12 ${
    name === "lugia" ? "bg-blue" : "bg-orange-400"
  } flex justify-center items-center`;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <div className={className}>
        <img src={frontViewUrl} alt="bird" />
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
      { params: { birdName: "lugia" } },
      { params: { birdName: "ho-oh" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const birdName = params["birdName"];

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${birdName}`);
  const birdData = await response.json();

  return {
    props: {
      name: birdData["name"],
      frontViewUrl:
        birdData["sprites"]["other"]["dream_world"]["front_default"],
    },
  };
}
