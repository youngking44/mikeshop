import SEO from "../../components/seo";
import Button from "../../components/button";
import RightWelcomeImage from "../../assets/registerGraphic1.svg";
import LeftWelcomeImage from "../../assets/registerGraphic2.svg";
import { useMediaQuery } from "react-responsive";
import { BiRegistered } from "react-icons/bi";

const title = "Sign up - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const Register = () => {
  const showLeftImage = useMediaQuery({ query: "(min-width: 990px)" });
  const adjustWidth = useMediaQuery({ query: "(min-width: 525px)" });
  return (
    <main className="w-full h-screen pt-20  bg-gray-200">
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <section
        className="w-full h-full relative flex justify-center items-center before:content-{} 
        before:w-60 before:h-56 before:absolute before:top-0 before:left-0 before:bg-blue-400
        after:content-{} after:w-60 after:h-56 after:absolute after:bottom-0 after:right-0 
        after:bg-blue-500"
      >
        <div
          className={`${
            adjustWidth ? "w-[calc(100%-200px)]" : "w-[calc(100%-40px)]"
          } md:h-[calc(100%-100px)] px-5 pt-5 pb-10 rounded-2xl relative flex items-center
          z-10 shadow-2xl bg-white`}
        >
          <div
            className="md:hidden w-36 h-36 pt-6 rounded-full flex justify-center absolute top-0 
            left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1] bg-white"
          >
            <BiRegistered size={70} color="#f97316" />
          </div>
          <div className="w-[1000px] mx-auto flex gap-16 items-center">
            <div className="hidden md:block">
              <img
                src={RightWelcomeImage}
                width={200}
                alt="Welcome svg image"
              />
            </div>
            <form className="flex-1 py-5 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center">
                Register <span className="text-accent-500">here</span>
              </h1>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-b-2 outline-none focus-visible:border-b-black"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="border-b-2 outline-none focus-visible:border-b-black"
              />
              <input
                type="text"
                placeholder="Enter your password"
                className="border-b-2 outline-none focus-visible:border-b-black"
              />
              <input
                type="text"
                placeholder="Enter your phone"
                className="border-b-2 outline-none focus-visible:border-b-black"
              />
              <input
                type="text"
                placeholder="Enter your address"
                className="border-b-2 outline-none focus-visible:border-b-black"
              />
              <Button type="submit" rounded={true} bg="bg-accent-500">
                Register
              </Button>
            </form>
            {showLeftImage && (
              <div>
                <img
                  src={LeftWelcomeImage}
                  width={200}
                  alt="Welcome svg image"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
