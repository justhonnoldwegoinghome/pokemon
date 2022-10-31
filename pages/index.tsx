import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <div className="container mx-auto h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl m-8">Battle of the birds</h1>

        <section className="flex gap-4">
          <div>
            <div className="p-4 bg-blue rounded flex flex-col gap-4 justify-center">
              <h2 className="text-center text-xl">Lugia</h2>
              <p className="text-sm text-white">Guardian of the seas</p>
            </div>
            <div className="flex gap-8 justify-center">
              <Link
                href="/ssr/pokemon/lugia"
                className="text-xs p-2 m-2 border rounded-full"
              >
                SSR
              </Link>
              <Link
                href="/ssg/pokemon/lugia"
                className="text-xs p-2 m-2 border rounded-full"
              >
                SSG
              </Link>
            </div>
          </div>
          <div>
            <div className="p-4 bg-orange-400 rounded flex flex-col gap-4 justify-center">
              <h2 className="text-center text-xl">Ho-Oh</h2>
              <p className="text-sm text-white">Guardian of the skies</p>
            </div>
            <div className="flex gap-8 justify-center">
              <Link
                href="/ssr/pokemon/ho-oh"
                className="text-xs p-2 m-2 border rounded-full"
              >
                SSR
              </Link>
              <Link
                href="/ssg/pokemon/ho-oh"
                className="text-xs p-2 m-2 border rounded-full"
              >
                SSG
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
