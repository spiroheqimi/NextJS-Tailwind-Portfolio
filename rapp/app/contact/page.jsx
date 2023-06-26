import Link from "next/link"

export default function page() {
  return (
    <div className="top-0 w-screen h-screen bg-background-color">
      <div className="w-full h-full flex items-center justify-between gap-10 px-28 ">
        <div className="w-full flex flex-col justify-center items-start text-mytext-color space-y-10 px-20">
          <p className="md:text-6xl"> Get in Touch </p>
          <p className="md:text-2xl"> spiroheqimi92@gmail.com</p>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, ullam tempora adipisci illo accusantium minima molestiae, perferendis asperiores architecto ad eaque consequatur, voluptatem dolorem unde dolores ut nisi culpa iste.</p>
          <div className="z-0 flex items-start gap-5">
              
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

        </div>

        <div className="flex flex-col w-full pt-20">
          <form action="/" method="post" >
            <div className="w-144 flex flex-col space-y-5">
              <label htmlFor="" className="text-mytext-color text-xl"> Name </label>
              <input type="text" className="py-2 rounded-lg border-4 border-black" required/>
              <label htmlFor="" className="text-mytext-color text-xl"> Email  </label>
              <input type="text" className="py-2 rounded-lg border-4 border-black" required/>
              <label htmlFor="" className="text-mytext-color text-xl"> Message </label>
              <textarea name="" className="py-2 rounded-lg border-4 border-black" id="" cols="30" rows="6"> </textarea>
            </div>
            <button type="submit" className="bg-violet-800 my-8 px-6 py-3 rounded-3xl text-white"> Submit </button>
          </form>
        </div>
      </div>
    </div>
  )
}
