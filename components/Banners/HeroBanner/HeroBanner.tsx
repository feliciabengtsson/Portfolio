import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      aria-labelledby="introduction"
      className="content-part"
      id="introduction"
    >
      <div id="presentation">
        <div id="profile-wrapper">
          <Image
            src="/assets/images/profile.jpg"
            width={500}
            height={500}
            id="profile-picture"
            alt="Profile picture"
          />
        </div>
        <p className="presentation-text">Hej mitt namn är</p>
        <h1>
          <span>.</span>Felicia Bengtsson
        </h1>
        <p className="presentation-text">
          -Frontend-utvecklare och digital artist-
        </p>
      </div>
    </section>
  );
}
