export default function ContactBanner() {
  return (
    <section
      aria-labelledby="contact-form"
      className="content-part"
      id="contact-page"
    >
      <h2 className="section-title">Let&apos;s connect!</h2>
      <div id="contact-wrapper">
        <div id="contact-information">
          <p id="contact-description">
            Tveka inte att kontakta mig direkt via formuläret nedan, eller
            connecta med mig på någon av mina sociala plattformar.
          </p>
          <div className="social-media">
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/felicia-bengtsson/"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a aria-label="Github" href="https://github.com/feliciabengtsson">
              <i className="bi bi-github"></i>
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/tarawenscorner/"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div id="contact-form">
          <form>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Namn"
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Skriv ditt meddelande här..."
              required
            ></textarea>
            <button id="send-button" type="submit">
              Skicka
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
