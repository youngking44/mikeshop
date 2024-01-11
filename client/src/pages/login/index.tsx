import SEO from "../../components/seo";
import Button from "../../components/button";
import RightWelcomeImage from "../../assets/registerGraphic1.svg";
import LeftWelcomeImage from "../../assets/registerGraphic2.svg";
import { useMediaQuery } from "react-responsive";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, LoginDataType } from "./schema";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loginUser } from "../../redux/user/userApi";
import LoginIcon from "./LoginIcon";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";

//Meta Data
const title = "Login - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const inputFlex = "flex flex-col gap-2";

const Login = () => {
  const showLeftImage = useMediaQuery({ query: "(min-width: 990px)" });
  const { loading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginDataType> = (data) => {
    dispatch(loginUser(data));

    if (error) return;
    navigate("/");
  };

  return (
    <main className="w-full min-h-screen relative flex pt-44 pb-5 md:pt-20 md:pb-0 bg-secondary-400">
      {loading && <Loader />}
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <section className="w-full flex-1 px-5 flex items-center">
        <div
          className="container mx-auto px-5 py-10 rounded-2xl relative flex items-center
          z-10 shadow-2xl bg-white"
        >
          <LoginIcon />
          <div className="w-[1000px] mx-auto flex gap-16 items-center">
            <div className="hidden md:block">
              <img
                src={RightWelcomeImage}
                width={200}
                alt="Welcome svg image"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 py-5 flex flex-col gap-5"
            >
              <h1 className="text-4xl mb-5 font-bold text-center">
                Login <span className="text-accent-500">here</span>
              </h1>
              <div className={`${inputFlex} ${!errors.email && "mb-5"}`}>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.email && (
                  <p className="text-error">{errors.email?.message}</p>
                )}
              </div>
              <div className={`${inputFlex} ${!errors.password && "mb-5"}`}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.password && (
                  <p className="text-error">{errors.password?.message}</p>
                )}
              </div>
              <Button type="submit" rounded={true} bg="bg-accent-500">
                Login
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

export default Login;
