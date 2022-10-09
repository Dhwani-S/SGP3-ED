
import React from "react";
import "./About.css";
import { Button, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/purely_dhwani";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionContainer">

        <div>
          <div className="about-left">


            {/* <span>
              We have successfully dispatched more than 10k orders nationally and internationally.
            </span> */}
          </div>
          <div className="aboutSectionContainer2">
            <div class="container">

              <div class="testimonials-box">


                <div class="testimonial">

                  <div class="testimonial-card">

                    <img src="../../../images/testimonial-1.jpg" alt="alan doe" class="testimonial-banner" width="80" height="80" />

                    <p class="testimonial-name">Dhrutika Mistry</p>

                    <p class="testimonial-title">Founder of <i>'Brand'</i></p>

                    <img src="../../../images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26" />

                    <p class="testimonial-desc">
                      I have always been passionate about running this business about jewelry and clothing.
                      And by Gods' grace, I was able to do so...
                    </p>


                    <div id="visit">

                      <Button onClick={visitInstagram} color="primary">
                        <Avatar
                          style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                          src="https://thumbs.dreamstime.com/b/red-dress-mannequin-illustration-white-background-red-dress-mannequin-illustration-white-background-216081943.jpg"
                          alt="BrandName"
                        />
                        <InstagramIcon />
                        Visit Instagram
                      </Button>
                    </div>

                  </div>


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Testimonial.css";
// import { Avatar } from "@material-ui/core";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// const PreviousBtn = (props) => {
//   console.log(props);
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
//     </div>
//   );
// };
// const NextBtn = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
//     </div>
//   );
// };
// const Testimonial = () => {
//   return (
//     <div
//       className="testimonial"
//       style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
//     >
//       <div style={{ width: "50%", textAlign: "center" }}>
//         <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
//         <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
//           <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
//           <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
//           <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
//         </Slider>
//       </div>
//     </div>
//   );
// };

// const Card = ({ img }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         textAlign: "center",
//         color: "gray",
//       }}
//     >
//       <Avatar
//         imgProps={{ style: { borderRadius: "50%" } }}
//         src={img}
//         style={{
//           width: 120,
//           height: 120,
//           border: "1px solid lightgray",
//           padding: 7,
//           marginBottom: 20,
//         }}
//       />
//       <p>
//         Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
//         Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
//         tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
//         fringilla massa. Etiam hendrerit dolor eget rutrum
//       </p>
//       <p style={{ fontStyle: "italic", marginTop: 25 }}>
//         <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
//         Media Analyst
//       </p>
//     </div>
//   );
// };

// export default Testimonial;