import Container from "../../../components/container";
import homeGraphic1 from "../../../assets/homeGraphic1.png";
import homeGraphic3 from "../../../assets/homeGraphic3.png";
import { useMediaQuery } from "react-responsive";

const circle = `w-52 h-52 rounded-full  relative flex justify-center items-center bg-white 
  before:content-{} before:absolute before:top-2 before:right-2 before:bottom-2 before:left-2
  before:rounded-full before:border-4 before:border-dashed before:border-black`;

const Hero = () => {
  const mobileView = useMediaQuery({ query: "(max-width: 500px)" });
  const hideText = useMediaQuery({ query: "(max-width: 1175px)" });
  const showText = useMediaQuery({ query: "(min-width: 1176px)" });
  const showTextQuery = mobileView || showText ? true : false;

  return (
    <section className="w-full pt-32 pb-5">
      <Container>
        <div
          className={`w-full h-72 px-5 flex items-center ${
            mobileView ? "gap-4" : "gap-8"
          } bg-secondary-500`}
        >
          <div>
            <img src={homeGraphic1} alt="homeGraphic1" />
          </div>
          <div
            className={`flex-1 flex items-center ${
              hideText ? "justify-center" : "justify-between"
            }`}
          >
            {showTextQuery && (
              <p className=" text-white text-xl md:text-3xl">
                <span className="text-pink-500">HOT</span> SALES <br /> WEEK
              </p>
            )}
            {!mobileView && (
              <div className={`${circle}`}>
                <p className="text-3xl font-bold opacity-80">
                  50% <br />
                  OFF
                </p>
              </div>
            )}
            {!hideText && (
              <p className="text-white text-3xl">
                A NEW <span className="text-pink-500">GREAT LOOK</span> <br />
                <span className="text-[#867EBC]"> FOR NEW SEASON</span>
              </p>
            )}
          </div>
          {!mobileView && (
            <div>
              <img src={homeGraphic3} alt="homeGraphic3" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
