import Image from "next/image";

export default function Projects() {
  return (
    <section
      aria-labelledby="project-gallery"
      className="content-part"
      id="project-gallery"
    >
      <h2 className="section-title">Projekt</h2>
      <div id="projects">
        <div className="project-part">
          <div className="image-wrap">
            <a className="image-part" href="https://lalles-friends.vercel.app/">
              <Image
                className="project-image"
                src="/assets/images/lalles-vanner.png"
                width={500}
                height={500}
                alt="Utklipp från huvudsidan från Lalles Vänner"
              />
            </a>
          </div>
          <div className="project-description">
            <h3 className="portfolio-title">Lalles Vänner</h3>
            <span className="filter-projects">HTML & CSS</span>
            <h4 className="portfolio-under-title">
              Hemsida till ett jazzband från Varberg.
            </h4>
            <p className="portfolio-description">
              Mitt första projekt som skapades under vår första kurs &quot;HTML
              & CSS&quot;. Här har jag testat på enklare funktioner så som hover
              och navigering. Hemsidan utfördes åt en kund och är ett pågående
              projekt.
            </p>
          </div>
        </div>
        <div className="project-part">
          <div className="image-wrap">
            <a className="image-part" href="how.html">
              <Image
                className="project-image"
                src="/assets/images/Howl-ux.png"
                width={500}
                height={500}
                alt="Utklipp från huvudsidan från How"
              />
            </a>
          </div>
          <div className="project-description">
            <h3 className="portfolio-title">How</h3>
            <span className="filter-projects">UX- & UI-design</span>
            <h4 className="portfolio-under-title">
              En interaktiv brädspelsplattform för lärande. (grupparbete)
            </h4>
            <p className="portfolio-description">
              Grupprojekt under kursen &quot;UX- och UI- design&quot; där vi
              utförde en hel ux-process under en månad. Klicka vidare för mer
              djupgåede läsning samt inspelad demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
