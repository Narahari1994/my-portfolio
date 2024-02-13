import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 text-xl leading-loose">
            Hello, Myself V.Narahari, I completed my Bsc Mathematics in
            Ambedhkar open university Ananthapur in 2019. After graduation i
            took sometime to prepare for the competitive exams, how ever after
            seeing the oppertunities in software industry, i decided to shift my
            career. I began to explore courses to build neccessary skills and I
            came across a programm called NXTWave CCBP4.0. After joining the
            programm I developed skills in Html, Css, Javascript and React.
            After learning neccessary skills with CCBP NXTWave. I developed Menu
            application and Reviews application and Tours application using
            react. I would like to make a career in IT industry and want to
            explore my skills in react.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
