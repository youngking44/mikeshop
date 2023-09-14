import React from "react";
import Container from "../../../components/container";
import homeGraphic1 from "../../../assets/homeGraphic1.png";
import homeGraphic2 from "../../../assets/homeGraphic2.png";
import homeGraphic3 from "../../../assets/homeGraphic3.png";

const circle = `w-52 h-52 rounded-full  relative flex justify-center items-center bg-white 
            before:content-{} before:absolute before:top-2 before:right-2 before:bottom-2 before:left-2
            before:rounded-full before:border-4 before:border-dashed before:border-black`;

const Hero = () => {
  return (
    <section className="w-full h-screen pt-32">
      <Container>
        <div className="w-full h-72 px-5 flex items-center gap-8 test">
          <div>
            <img src={homeGraphic1} alt="homeGraphic1" />
          </div>
          <div className="flex-1 flex justify-between items-center">
            <p className="text-white text-3xl">
              <span className="text-pink-500">HOT</span> SALES <br /> WEEK
            </p>
            <div className={`${circle}`}>
              <p className="text-3xl font-bold opacity-80">
                50% <br />
                OFF
              </p>
            </div>
            <p className="text-white text-3xl">
              A NEW <span className="text-pink-500">GREAT LOOK</span> <br />
              <span className="text-[#867EBC]"> FOR NEW SEASON</span>
            </p>
          </div>
          <div>
            <img src={homeGraphic3} alt="homeGraphic3" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
