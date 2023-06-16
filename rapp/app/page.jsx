export default function Home() {
  return (
    <div>
      <div className="z-[-1] absolute top-0 right-0 w-screen h-screen overflow-hidden bg-background-color">
        <div className="h-full flex m-10">
          <div className="md:w-3/5 w-full flex flex-col justify-center gap-3 text-left text-white md:pl-28 md:pr-64 px-10">
              <h1 className="md:text-3xl text-xl"> Hello, my name is Spiro Heqimi </h1>
              <h1 className="md:text-4xl text-2xl"> I am a <span className="text-violet-600"> Front-End Developer </span>  </h1>

              <p className="md:text-md text-sm pt-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla repudiandae sed 
                iure ratione deleniti eaque qui error nihil asperiores, nisi possimus beatae necessitatibus 
                animi cupiditate numquam laborum alias molestiae. 
              </p>     

            <div className="flex items-start gap-5 py-4">
              <button> <ion-icon name="logo-github"></ion-icon> </button>
              <button> <ion-icon name="logo-linkedin"></ion-icon> </button>
            </div>
            <div> 
              <button className="bg-violet-700 text-xl text-white px-8 py-3 rounded-full hover:scale-105 duration-100"> Download CV </button>
            </div>
          </div>
          <div className="bg-blue-200 md:w-2/5 px-20  md:visible hidden ">
            <h1 className="text-black text-2xl"> Picture </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
