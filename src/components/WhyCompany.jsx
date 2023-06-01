export default function WhyCompany({ company }) {
  return (
    <section className="whyCompany min-h-[80vh] flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold mb-[3%] ">
        What I love about {company}{" "}
      </h2>
      <h3 className="mb-[10%]">
        Here are some facts that I really like about {company}
      </h3>
      <div className="list w-[100%]">
        <ol className="w-[80%] m-auto">
          <li className="py-[5%]">
            <h4 className="font-bold mb-[3%]">
              1. {company} helps people and businesses thrive
            </h4>
            <p>
              {company}'s solutions aim to help businesses streamline their
              operations, improve productivity, and enhance their relationships
              with customers and employees.
            </p>
          </li>
          <li className="py-[5%]">
            <h4 className="font-bold mb-[3%]">
              2. {company} helps people and businesses thrive
            </h4>
            <p>
              {company}'s solutions aim to help businesses streamline their
              operations, improve productivity, and enhance their relationships
              with customers and employees.
            </p>
          </li>
          <li className="py-[5%]">
            <h4 className="font-bold mb-[3%]">
              3. {company} helps people and businesses thrive
            </h4>
            <p>
              {company}'s solutions aim to help businesses streamline their
              operations, improve productivity, and enhance their relationships
              with customers and employees.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
