'use client'
import Link from "next/link";
import Image from "next/image";
import projectimg from "./public/project-img.jpg";


export default function Home() {
  let projects = [
    {
      id: 1,
      name: "Project 1",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/about",
    },
    {
      id: 2,
      name: "Project 2",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/about",
    },
    {
      id: 3,
      name: "Project 3",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/about",
    },
    {
      id: 4,
      name: "Project 4",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/about",
    },
  ];

  /* Want to use array of objects */

  return (
    <>
      <main className="top-0 w-screen h-screen overflow-hidden bg-background-color">
        <div className="flex mx-14 my-10 lg:px-10 xl:px-20 lg:pt-36 pt-12">
          <div className="xl:w-3/5 w-full flex flex-col justify-center text-left text-white lg:pl-2 ">
            <h1 className="md:text-2xl text-lg"> Hello, My name is Spiro </h1>
            <h1 className="md:text-3xl text-xl">
              I am a
              <span className="text-violet-600"> Front-End Developer</span>
            </h1>

            <p className="md:text-md text-sm pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              nulla repudiandae sed iure ratione deleniti eaque qui error nihil
              asperiores, nisi possimus beatae necessitatibus animi cupiditate
              numquam laborum alias molestiae.
            </p>

            <div className="flex items-start gap-5 py-4">
              <button >
                <Link href="https://github.com/spiroheqimi">
                  <ion-icon name="logo-github"></ion-icon>
                </Link>
              </button>
              <button >
                <Link href="https://www.linkedin.com/in/spiro-heqimi-b80295236/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </Link>
              </button>
            </div>
            <div className="py-4">
              <button className="bg-violet-700 text-xl text-white px-8 py-3 rounded-full hover:scale-105 duration-200">
                Download CV
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center xl:w-2/5 max-xl:hidden xl:mx-10">
            <Image
              className="rounded-xl "
              src={projectimg}
              width={800}
              height={800}
              alt="project 1"
            />
          </div>
        </div>
      </main>

      <section className="top-0 w-screen h-full overflow-hidden bg-background-color">
        <div className="flex mx-14 my-10 lg:px-10 xl:px-20">
          <div className="w-full flex flex-col items-center justify-start text-white ">
            <h1 className="md:text-2xl text-lg top-0"> My Projects </h1>
            <div className="h-full w-full flex flex-wrap pt-16 pl-14">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="flex flex-col bg-secondary-color text-black w-96 h-128  rounded-xl overflow-hidden m-10 cursor-pointer hover:shadow-lg hover:shadow-violet-900 duration-300"
                  onClick={ () => ( window.open(proj.link) )}
                >
                  <Image
                    src={projectimg}
                    width={500}
                    height={500}
                    alt={proj.name}
                  />
                  <div className="h-full flex flex-col justify-between items-center gap-5 p-5">
                    <h1> {proj.name} </h1>
                    <p> {proj.par} </p>
                    <button className="bg-violet-600 rounded-3xl w-24 py-2 text-white ">
                      Visit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*
 * Breakpoints - Done /ish
 * I want to add programming languages
 * I want to add project cards
 * Download CV button needs onclick donwload
 * I want to add a button "View more" and it will show the rest of the projects if any | maybe i need Promises for that 
 * Contant Form | Not necessary but I want to know the functionality
 * Project 1 Login/Register | Can try database just to know how to connect stuff
 * Project 2 more into responsive/animations 
 * 
 * 
 * flex mx-14 my-10 lg:px-10 xl:px-20 lg:pt-28 pt-12  | spacing
 */
