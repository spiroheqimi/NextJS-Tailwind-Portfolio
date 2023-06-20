import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="top-0 w-screen h-screen overflow-hidden bg-background-color">
        <div className="flex mx-14 my-10 lg:px-10 xl:px-20 lg:pt-36 pt-12">
          <div className="xl:w-3/5 w-full flex flex-col justify-center text-left text-white lg:pl-2 ">
            <h1 className="md:text-2xl text-lg"> Hello, My name is Spiro </h1>
            <h1 className="md:text-3xl text-xl">
              I am a <span className="text-violet-600">Front-End Developer</span>
            </h1>

            <p className="md:text-md text-sm pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              nulla repudiandae sed iure ratione deleniti eaque qui error nihil
              asperiores, nisi possimus beatae necessitatibus animi cupiditate
              numquam laborum alias molestiae.
            </p>

            <div className="flex items-start gap-5 py-4">
              <button>
                <Link href="https://github.com/spiroheqimi">
                  <ion-icon name="logo-github"></ion-icon>
                </Link>
              </button>
              <button>
                <Link href="https://www.linkedin.com/in/spiro-heqimi-b80295236/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </Link>
              </button>
            </div>
            <div className="py-4">
              <button className="bg-violet-700 text-xl text-white px-8 py-3 rounded-full hover:scale-105 duration-100">
                Download CV
              </button>
            </div>
          </div>

          <div className=" flex items-center justify-center xl:w-2/5 max-xl:hidden xl:mx-20">
            <h1 className="text-white"> hello </h1>
          </div>
        </div>
      </main>

      <section className="top-0 w-screen h-screen overflow-hidden bg-background-color">
        <div className="flex mx-14 my-10 lg:px-10 xl:px-20">
          <div className="h-full w-full flex flex-col items-center justify-start text-white ">
            <h1 className="md:text-2xl text-lg top-0"> My Projects </h1>
            <div className="flex pt-16 gap-4">
              <div className="bg-white ">div</div>
              <div className="bg-white ">div</div>
              <div className="bg-white ">div</div>
              <div className="bg-white ">div</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*
 * Breakpoints
 * Costumize the breakpoint from tailwind | small change to 400 from 640 | Can do that on tailwind config file
 * Second section
 * I want to add languages
 * I want to add project cards
 * Download CV button needs onclick donwload
 *
 *
 *
 *
 *
 * flex mx-14 my-10 lg:px-10 xl:px-20 lg:pt-28 pt-12  | spacing
 */
