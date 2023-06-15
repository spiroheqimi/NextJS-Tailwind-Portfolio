export default function Home() {
  return (
    <div>
      <div className="z-[-1] absolute top-0 right-0 w-screen h-screen overflow-hidden bg-violet-600">
        <div className=" bg-violet-300 h-full  flex m-10">
          <div className="bg-red-100 w-3/5 flex flex-col justify-center gap-10 text-left pl-20 pr-64 text-black">
              <h1 className="text-2xl "> My name is Spiro Heqimi </h1>
              <h1 className="text-2xl "> I am a Front-End Developer </h1>

              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla repudiandae sed 
                iure ratione deleniti eaque qui error nihil asperiores, nisi possimus beatae necessitatibus 
                animi cupiditate numquam laborum alias molestiae. 
              </p>     

            <div className="flex items-start gap-5">
              <button> <ion-icon size="large" color="black" name="logo-github"></ion-icon> </button>
              <button> <ion-icon size="large" color="black" name="logo-linkedin"></ion-icon> </button>
            </div>
          </div>
          <div className="bg-blue-200 w-2/5 px-20 flex flex-col justify-center">
            <h1 className="text-black text-2xl"> Picture </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
