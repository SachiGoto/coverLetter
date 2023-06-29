import placeholder from "../assets/placeholder.jpg";
import Fade from "react-reveal/Fade";
export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="about-me min-h-[80vh] flex flex-col justify-center"
    >
      <h2 className="text-3xl font-extrabold mb-[10%]">About Me</h2>
      <div className="aboutMeContainer flex flex-col justify-center md:flex-row">
        <div className="timeLine md:w-[45%] py-[10%] px-[5%] flex items-center">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <Fade left>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="flex flex-col items-center justify-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  <span>Full Stack Devloper </span>
                  <a href="https://silverponies.ca/"> Silver Ponies</a>{" "}
                </h3>
                <time className="block mb-2 text-sm font-normal">
                  Since November, 2022
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Latest
                  </span>
                </time>

                <p className="mb-4 text-base font-normal content-start">
                  Developing and customizing e-commerce sites. <br></br>
                  Working closely with clients to translate requirements into
                  landing pages, templates and functionality
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Freelance Full-Stack Developer
                </h3>
                <time className="block mb-2 text-sm font-normal ">
                  Since June 2022
                </time>
                <p className="text-base font-normal">
                  Building and maintaining websites for clients such as &nbsp;
                  <a
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800"
                    href="https://reusables.com/"
                    rel="noreferrer"
                  >
                    Reusables
                  </a>
                  , &nbsp;
                  <a
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800"
                    href="https://organolinen.ca/"
                    rel="noreferrer"
                  >
                    Organo Linen
                  </a>
                  &nbsp; and &nbsp;
                  <a
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800"
                    href="https://willemsberryfarm.ca/"
                    rel="noreferrer"
                  >
                    Willems Berry Farm
                  </a>
                  . Implementing custom CMS features based on user requirements,
                  as well as integrating third-party apps for analytics and
                  geolocation funnels.
                </p>
              </li>

              {/* <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.2
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li> */}
              <a
                href="/skills"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-[10%]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Download Resume
              </a>
            </Fade>
          </ol>
        </div>

        <div className="md:w-[50%] mt-[10%] md:mt-[0%] md:px-[5%] flex flex-col md:justify-center">
          <Fade right cascade>
            <div className="flex justify-center sachiPhoto z-10  ">
              <img
                src="https://res.cloudinary.com/vanarts-webdev/image/upload/v1658547253/headshot_f95dae7b38.jpg"
                alt="Sachi Goto Headshot"
                className="w-[60%] md:w-[100%]"
              />
            </div>
            <div className="sachiAsPerson py-[20%] px-[10%]  mt-[-5%] md:mt-[10%] md:pt-[5%]">
              <h3 className="text-xl font-semibold my-[3%]">Sachi</h3>
              <h4 className="font-semibold mb-[3%]">
                Leveraging technology to drive sustainability and solve social
                challenges
              </h4>
              <p className="">
                Full Stack Developer with professional experience meeting
                critical deadlines at web agency. Specializing in web
                development, I possess the skills to efficiently liaise with
                development teams, clients, and non-technical stakeholders to
                successfully deliver clean, maintainable and user-friendly web
                applications.
              </p>

              <h4 className="font-semibold my-[3%]">
                Besides coding, I enjoy...
              </h4>
              <p className="">
                exploring new coffee shops and restaurants in town! I love
                playing tennis and baking! I care about sustainability and
                practice zero waste lifestyle.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
