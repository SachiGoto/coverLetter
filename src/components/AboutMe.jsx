import placeholder from "../assets/placeholder.jpg";
export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="text-3xl font-extrabold">About Me</h2>
      <div>
        <ul>
          <l1 className="">
            <div>
              <time>2016</time>
              <h3>Lorem</h3>
              <p>dakjgkdl;ajkel;jkg;jakefjak</p>
            </div>
            <div>
              <time>2020</time>
              <h3>Lorem</h3>
              <p>dakjgkdl;ajkel;jkg;jakefjak</p>
            </div>
            <div>
              <time>2023</time>
              <h3>Lorem</h3>
              <p>dakjgkdl;ajkel;jkg;jakefjak</p>
            </div>
          </l1>
        </ul>
      </div>

      <div className="flex justify-center">
        <img src={placeholder} alt="" />
      </div>
    </section>
  );
}
