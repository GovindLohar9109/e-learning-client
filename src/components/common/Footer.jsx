export default function Footer() {
  return (
    <>
      <footer className="my-4 w-100 h-100 mt-2">
        <div className="container-fluid bg-dark text-white py-4">
          <div className="row text-center justify-content-evenly">

            {/* About Us */}
            <div className="col-lg-2 col-md-6 col-sm-8 mb-3">
              <h5 className="fw-bold">About Us</h5>
              <p className="small">
                We provide high-quality online courses to help students learn new
                skills, build confidence, and achieve success.
              </p>
            </div>

            {/* Category */}
            <div className="col-lg-2 col-md-6 col-sm-8 mb-3">
              <h5 className="fw-bold">Categories</h5>
              <p className="small">
                Web Development, Data Science, Programming, Cloud Computing, and
                many more.
              </p>
            </div>

            {/* Contact Us */}
            <div className="col-lg-2 col-md-6 col-sm-8 mb-3">
              <h5 className="fw-bold">Contact Us</h5>
              <p className="small mb-1">Email: info@ischool.com</p>
              <p className="small mb-1">Phone: +91 91090 24482</p>
              <p className="small">Udaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>

        {/* Moving Text / Marquee */}
        <div className="bg-dark text-white py-2 mt-3">
          <marquee behavior="scroll" direction="left" style={{ fontSize: "1.2rem" }}>
            🎓 Welcome to <span className="text-warning fw-bold">iSchool</span> — Learn, Build, and Grow!
          </marquee>
        </div>
      </footer>
    </>
  );
}
