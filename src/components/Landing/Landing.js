import "./Landing.css";
import React from "react";
// import Logo from "../../assets/images/Logo.png"
// import Logo from "../../assets/images/bicep.png"
import Logo from "../../assets/images/muscle.png";
import banner from "../../assets/images/banner.png";
// import fitness from "../../assets/images/matthew-sichkaruk-saHd7qc-AMk-unsplash.jpg";
const Landing = () => {
  return (
    // <div>
    //   <section className="bg">
    //     <div className="row">
    //       <nav className="navbar navbar-expand-lg navbar-light pt-3 nav-style">
    //         <div className="container">
    //           <a className="navbar-brand" href="#">
    //             <img className="logo-style" src={Logo} />
    //           </a>
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarNavAltMarkup"
    //             aria-controls="navbarNavAltMarkup"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon" />
    //           </button>
    //           <div
    //             className="collapse navbar-collapse ps-5"
    //             id="navbarNavAltMarkup"
    //           >
    //             <div className="navbar-nav ">
    //               <a className="nav-link active" aria-current="page" href="#">
    //                 Home
    //               </a>
    //               <a className="nav-link" href="#">
    //                 Excercise
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </nav>
    //       <div className="col-6 col-center">

    //                 <div className="info-box">
    //                   <h6 className="sub-title">Fitness Club</h6>
    //                   <h1 className="title">Sweet Smile And Repeat</h1>
    //                   <p className="description">Check out the most effective excercise personalized to
    //                     you</p>
    //                     <button  type="button" className="btn btn-danger">Explor Excercise</button>
    //                 </div>
    //               </div>

    //       <div className="col-6 margin-0">
    //         <img className="img-style" src={banner} />
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark pt-3 nav-style">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo-style" src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse ps-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Excercise
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-center">
              <div className="info-box">
                <h6 className="sub-title">Fitness Club</h6>
                <h1 className="title">Sweet Smile And Repeat</h1>
                <p className="description">
                  Check out the most effective excercise personalized to you
                </p>
                <button type="button" className="btn btn-danger btn-style">
                  Explor Excercise
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 display-none margin-0">
            <img className="img-style" src={banner} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
