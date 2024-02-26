import FileComp from "./_components/FIleComp";
import { Suspense } from "react";
import Blogs from "./_components/Blogs";


export default async function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-14  p-24">
      <div className="flex">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:max-w-5xl before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:max-w-5xl before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      </div>

      <h1 className="mx-auto flex justify-center font-heading items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
        Welcome to my blog
      </h1>

      <p>This is the place where i dump my stuff and let other people know</p>
       <Suspense fallback={<>Loading...</>}>
            <Blogs />
       </Suspense>
       
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       <FileComp />
      </div>
    </main>
  );
}
