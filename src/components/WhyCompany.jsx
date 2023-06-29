
import Fade from "react-reveal/Fade";
export default function WhyCompany({ company }) {
  return (
    <section
      id="whyCompany"
      className="whyCompany min-h-[80vh] mt-[10%] flex flex-col justify-center mb-[10%]"
    >
      <h2 className="text-3xl font-extrabold mb-[3%] ">
        What I love about {company}{" "}
      </h2>
      <h3 className="">
        Here are some facts that I really like about {company}
      </h3>
      <div className="list w-[100%]">
        <ol className="w-[90%] m-auto">
          <Fade bottom>
            <li className="my-[5%] py-[5%] px-[7%] max-w-[650px] m-auto shadow-lg bg-white rounded-md">
              <h4 className="font-bold mb-[3%]">
                1. {company} mission is all about improving healthcare systems
                and people's well being.
              </h4>
              <p>
                {company}'s solutions strive to foster collaboration with
                practitioners, aiming to enhance healthcare systems while
                improving relationships with patients and fellow healthcare
                professionals.　I'm thrilled to work for a company that is making real life changing impact on people's lives!
              </p>
            </li>
          </Fade>

          <Fade bottom>
            <li className="my-[5%]  py-[5%] px-[7%]  max-w-[650px] m-auto shadow-lg bg-white rounded-md">
              <h4 className="font-bold mb-[3%]">
                2. {company} applies its mission of helping people get better to
                its employees
              </h4>
              <p>
                {company} has collective focus on health. {company} cares about
                the people they work with and their growth. Love the fact that
                Fullscript offers mentorship and fullschool to its empoyeers to
                help them grow.　I'm excited to learn and grow with the company!
              </p>
            </li>
          </Fade>
          <Fade bottom>
            <li className="my-[5%] py-[5%] px-[7%]  max-w-[650px] shadow-lg m-auto bg-white rounded-md">
              <h4 className="font-bold mb-[3%]">
                3. {company} cares about environment
              </h4>
              <p>
                {company}'s mission does't stop at helping people get better.{" "}
                {company} also cares about the environment. {company} is
                committed to reducing its environmental impact and improving the
                health of the planet. I'm passionate about the environment and I  love the fact that I can work for a company that cares about the environment as much as I do!
              </p>
            </li>
          </Fade>
        </ol>
      </div>
    </section>
  );
}
