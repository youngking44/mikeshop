import SEO from "../../components/seo";
import Button from "../../components/button";
import RightWelcomeImage from "../../assets/registerGraphic1.svg";
import LeftWelcomeImage from "../../assets/registerGraphic2.svg";

const title = "Sign up - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const Register = () => {
  return (
    <main className="w-full h-screen pt-20  bg-gray-200">
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <section
        className="w-full h-full relative flex justify-center items-center before:content-{} 
      before:w-60 before:h-56 before:absolute before:top-0 before:left-0 before:bg-blue-400
      after:content-{} after:w-60 after:h-56 after:absolute after:bottom-0 after:right-0 after:bg-blue-400"
      >
        <div className="w-[calc(100%-200px)] h-[calc(100%-100px)] px-5 flex gap-7 items-center rounded-2xl z-10 shadow-2xl bg-white">
          <div>
            <img src={RightWelcomeImage} width={200} alt="Welcome svg image" />
          </div>
          <form className="w-[650px] py-5 flex flex-col gap-5">
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
          <div>
            <img src={LeftWelcomeImage} width={200} alt="Welcome svg image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
