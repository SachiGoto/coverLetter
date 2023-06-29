// import { Carousel, IconButton } from "@material-tailwind/react";
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects min-h-[80vh] w-[80%] flex flex-col m-auto mt-[10%]"
    >
      <h2 className="text-3xl font-extrabold mb-[10%]">Projects</h2>
      <Fade bottom>
        <div className="slideshow">
          <Carousel
            className="projectBg rounded-xl shadow-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                // color="black"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-4 mt-7 hidden md:block text-black"
              >
                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 !right-4 mt-7 hidden md:block text-black circles"
              >
                <ArrowRightIcon strokeWidth={2} className=" w-6 h-6" />
              </IconButton>
            )}
          >
            <div>
              <div className="mt-5">
                <h3 className="font-bold text-xl text-black-700">
                  Sustainable Hub
                </h3>
                <p className="py-[1%] text-black-700 md:w-[80%] lg:w-[60%] m-auto">
                  This app is designed to help people live a more sustainable
                  lifestyle by providing suggestions for sustainable activities
                  in their daily lives.
                </p>
                <p className="pt-[1%] text-black-700">
                  Tech Stack: React | | Tailwind | Node.js | MongoDB |
                  Passport.js{" "}
                </p>
                <button className="font-sans bg-blue-500 hover:bg-blue-400 hover:rounded-full font-bold py-2 px-4 rounded m-[3%]">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                    href="https://sustainable-hub-backend.herokuapp.com"
                  >
                    Visit
                  </a>
                </button>
                <button className="font-sans text-black bg-white-500 hover:bg-blue-200 font-bold py-2 px-4 rounded-full m-[3%]">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-black"
                    href="https://github.com/SachiGoto/Sustainable-Hub"
                  >
                    Code
                  </a>
                </button>
              </div>

              <img
                src="https://media.giphy.com/media/NoV0M0idoTUfv1AGYW/giphy.gif"
                alt="image 1"
                className="w-rounded-xl pb-[15%] md:pb-[10%] mx-auto  "
              />
            </div>
            <div>
              <div className="mt-5">
                <h3 className="font-bold text-xl text-black-700">
                  Lost And Found In Vancouver
                </h3>
                <p className="py-[1%] text-black-700 md:w-[80%] lg:w-[60%] m-auto">
                  This web app is for reporting lost items. It has CRUD
                  operations which allows users to create a post, upload an
                  image of a found item and edit the item after it’s posted as
                  well as deactivate the pos
                </p>
                <p className="pt-[1%] text-black-700">
                  Tech Stack: Angular | Node.js | MongoDB | Cloudinary
                </p>
                <button className="font-sans bg-blue-500 hover:bg-blue-400 hover:rounded-full font-bold py-2 px-4 rounded m-[3%]">
                  <a
                    className="text-black"
                    href="https://lost-and-found.sachigoto.me"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                </button>
                <button className="font-sans text-black bg-white-500 hover:bg-blue-200 font-bold py-2 px-4 rounded-full m-[3%] ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-black"
                    href="https://lost-and-found.sachigoto.me"
                  >
                    Code
                  </a>
                </button>
              </div>

              <img
                src="https://camo.githubusercontent.com/0042e9b8495a31d088c4d462981b339f123d627c3af9309cfe888d2a07c34e6a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4b55537a68474f716a6a396c7367614f50382f67697068792e676966"
                alt="image 1"
                className="rounded-xl pb-[15%] md:pb-[10%] mx-auto"
              />
            </div>
            <div>
              <div className="mt-5">
                <h3 className="font-bold text-xl text-black-700">Tech Meets</h3>
                <p className="py-[1%] text-black-700 md:w-[80%] lg:w-[60%] m-auto">
                  This app help people in tech find all the tech meetup events
                  in Vancouver! This is my current team project that I'm
                  building with other developers!
                </p>
                <p className="pt-[1%] text-black-700">
                  Tech Stack: Next.js | Mantine | Google API | PostgressSL
                </p>
                <p className="text-sm pt-[1%] text-red-600">
                  *This app is working in progress
                </p>
                <button
                  className="font-sans bg-blue-500 hover:bg-blue-400 hover:rounded-full font-bold py-2 px-4 rounded m-[3%] pointer-events-none opacity-50"
                  disabled
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-gray-300"
                    href="https://sustainable-hub-backend.herokuapp.com"
                  >
                    Visit
                  </a>
                </button>
                <button className="font-sans text-black bg-white-500 hover:bg-blue-200 font-bold py-2 px-4 rounded-full m-[3%] ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/van-squad/map-t3"
                  >
                    Code
                  </a>
                </button>
              </div>

              <img
                src="https://res.cloudinary.com/vanarts-webdev/image/upload/v1687988107/project_gdou5y.png"
                alt="image 1"
                className=" rounded-xl pb-[15%] md:pb-[10%] mx-auto "
              />
            </div>
          </Carousel>
        </div>
      </Fade>
    </section>
  );
}
