import landingImage from "../assets/images/landing-image.webp";

const Landing = ({ landingRef }) => {
  return (
    <section
      ref={landingRef}
      id="Landing"
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        width: "100vw",
        height: "94vh",
        backgroundImage: `url(${landingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0 15px",
      }}
    >
      {/* <div className="mb-4">
                <div className='d-flex'><i className="align-self-start fa-sharp fa-solid fa-quote-left text-light"></i><p className="quote-text align-self-end text-light my-0 ms-2">{quote}</p></div>
                <p className="quote-text text-light text-end">- {author}</p>
            </div> */}
    </section>
  );
};

export default Landing;
