export default function HeroBanner() {
  return (
    <section
      aria-labelledby="introduction"
      className="content-part"
      id="introduction"
    >
      <div id="presentation">
        <div id="profile-wrapper">
          <img
            src="images/1724068043447.jpg"
            rel="profile picture"
            id="profile-picture"
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
