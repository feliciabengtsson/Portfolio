export default function AboutBanner() {
  return (
    <section aria-labelledby="about" className="content-part" id="about">
      <h2 className="section-title">About & Skills</h2>
      <div id="about-text-wrapper">
        <p id="about-text">
          Driven by creativity, curiosity and passion with a vast interest of
          how we implement design in the digital world. I have a back-ground in
          object conservation where I&apos;ve worked with problem solving,
          ethical di-lemmas and visual interpretations. I am also a digital
          artist where I use the digital media to express my creativity and
          passions.
        </p>
      </div>
      <div id="skill-container">
        <div className="skill-wrapper">
          <span className="skills">HTML & CSS</span>
        </div>
        <div className="skill-wrapper">
          <span className="skills">UX- & UI design</span>
        </div>
        <div className="skill-wrapper">
          <span className="skills">JavaScript</span>
        </div>
      </div>
    </section>
  );
}
