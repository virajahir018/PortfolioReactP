import "./App.css";
import I from "./assets/viraj.jpg"
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            VIRAJ AHIR
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon                    "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 gap-5">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">

            <div className="col-lg-6">
              <span className="badge bg-info px-3 py-2 mb-3">
                Welcome To My Portfolio
              </span>

              <h1 className="display-2 fw-bold text-white">
                Viraj Ahir
              </h1>

              <h3 className="text-info mt-3">
                React Developer
              </h3>

              <p className="text-light mt-4 fs-5">
                I create modern, responsive and user-friendly
                websites using React JS, Bootstrap and JavaScript.
              </p>

              <div className="mt-4">
                <a href="#projects" className="btn btn-info btn-lg me-3">
                  View Projects
                </a>

                <button className="btn btn-outline-light btn-lg">
                  Download CV
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={I}
                alt=""
                className="profile-img"
              />
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fs-1">About Me</h2>

          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-nbabzALNlDPDlC0Kx6z_RLGGly8n2NAMQ&s"
                alt=""
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-lg-6">
              <h3>React Developer</h3>

              <p>
                Passionate front-end developer creating
                modern and responsive web applications.
              </p>

              <p>
                Skilled in React JS, Bootstrap,
                JavaScript, HTML, CSS and jQuery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills py-5">
        <div className="container">

          <h2 className="text-center mb-5">
            My Skills
          </h2>

          <div className="row text-center">

            <div className="col-md-3">
              <div className="skill-box">
                <h4>HTML</h4>
                <p>100%</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="skill-box">
                <h4>CSS</h4>
                <p>100%</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="skill-box">
                <h4>JavaScript</h4>
                <p>100%</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="skill-box">
                <h4>React</h4>
                <p>100%</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="projects" className="project-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fs-1">My Projects</h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt=""
                />

                <div className="card-body">
                  <h5>E-Commerce Website</h5>
                  <p>
                    React + Bootstrap shopping website.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt=""
                />

                <div className="card-body">
                  <h5>Admin Dashboard</h5>
                  <p>
                    Modern Bootstrap dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiSmAsCrfCutLlShOKa0H1hG_fmXqetUwzUg&s"
                  className="card-img-top"
                  alt=""
                />

                <div className="card-body">
                  <h5>Portfolio Website</h5>
                  <p>
                    Responsive React Portfolio.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fs-1">
            Contact Me
          </h2>

          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="form-control mb-3"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="form-control mb-3"
            ></textarea>

            <button className="btn btn-secondary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-dark text-white text-center p-3">
        © 2026 Utsav Bavishi | React Portfolio
      </footer>
    </>
  );
}

export default App;