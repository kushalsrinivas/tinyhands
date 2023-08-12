import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        <div className="h-32 lg:w-full min-[850px]:w-full bg flex text-center align-middle justify-center font-bold p-8 text-black">
          <h1 className="text-5xl">Tiny Hands</h1>
        </div>
        <div className="hero">
          <div className="hero-container">
            <div className="text-white text-center flex flex-col gap-5 h-full justify-center align-middle">
              <h1 className="lg:text-7xl text-5xl ">Paint Your Way To Fun</h1>
              <p className="text-white lg:text-2xl text-xl w-1/2 text-center mx-auto">
                Let your kids unleash their creativity with our coaster and
                glass bottle painting workshop for ages 5-13.
              </p>
              <div>
                <button className="  py-2 px-3  text-black bg rounded-md">
                  Register Now !
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto w-screen p-10 text-center bg-yellow-300">
          <div className="flex flex-col gap-10">
            <h1 className="text-7xl text-black">About Us</h1>
            <p className="lg:text-2xl text-sm text-center w-3/4 text-black mx-auto">
              At tiny hands, we specialize in creating a fun and engaging
              environment for kids aged 5 to 13 years. Located in Bengaluru, KA,
              our workshops focus on coaster painting and glass bottle painting,
              allowing children to explore their creativity and develop new
              skills. Our experienced instructors provide step-by-step guidance,
              ensuring that each child feels supported and inspired throughout
              the creative process. Join us at tiny hands and let your childs
              imagination soar!
            </p>
          </div>
        </div>
        <div className="h-auto w-screen p-10 bg-prime text-black text-center">
          <div className="flex flex-col">
            <div>
              <h1 className="text-7xl text-black">Our Services</h1>
            </div>
            <div className="flex lg:flex-row flex-col items-center">
              <div className="card flex flex-col gap-5 p-5">
                <div className="card-img "></div>
                <div className="text-5xl">
                  <h1>Glass Painting Workshop</h1>
                </div>
                <div className="text-sm">
                  Let your child unleash their creativity with our coaster
                  painting workshop, designed for kids between the ages of 5 and
                  13. Our experienced instructors will guide them through the
                  process, ensuring a fun and educational experience.
                </div>
                <button className="  py-2 px-3  text-black bg rounded-md">
                  Register Now !
                </button>
              </div>

              <div className="card flex flex-col gap-5 p-5">
                <div className="card-img "></div>
                <div className="text-5xl">
                  <h1>Shoe Painting Workshop</h1>
                </div>
                <div className="text-sm">
                  Looking for twice the fun? Sign up for our combo workshop and
                  let your child experience the joy of both coaster and glass
                  bottle painting. Suitable for kids aged 5 to 13, our workshop
                  promises a unique and engaging learning experience unlike any
                  other!
                </div>
                <button className="  py-2 px-3  text-black bg rounded-md">
                  Register Now !
                </button>
              </div>

              <div className="card flex flex-col gap-5 p-5">
                <div className="card-img "></div>
                <div className="text-5xl">
                  <h1>Coaster Painting Workshop</h1>
                </div>
                <div className="text-sm">
                  Watch your childs imagination come to life as they transform
                  plain glass bottles into works of art! Our glass bottle
                  painting workshop is perfect for kids aged 5 to 13. Our
                  instructors will provide all necessary materials and guidance
                  for a fun and productive session
                </div>
                <button className="  py-2 px-3  text-black bg rounded-md">
                  Register Now !
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 w-screen bg flex text-center align-middle justify-center font-bold p-8 text-black">
          <h1 className="text-5xl">Tiny Hands</h1>
        </div>
      </div>
    </>
  );
}
