import SEO from "../../components/seo";
import Button from "../../components/button";
import RightWelcomeImage from "../../assets/registerGraphic1.svg";
import LeftWelcomeImage from "../../assets/registerGraphic2.svg";
import { useMediaQuery } from "react-responsive";
import { BiRegistered } from "react-icons/bi";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, DataType } from "./schema";
import { createUser } from "../../redux/user/userApi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const title = "Sign up - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const inputFlex = "flex flex-col gap-2";

const Register = () => {
  const showLeftImage = useMediaQuery({ query: "(min-width: 990px)" });
  const { currentUser, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<DataType> = (data) => {
    dispatch(createUser(data));
  };

  useEffect(() => {
    const printError = () => console.log("Error...", error);
    const printUser = () => console.log("User...", currentUser);

    error && printError();
    currentUser && printUser();
  }, [error, currentUser]);

  return (
    <main className="w-full min-h-screen flex pt-44 pb-5 md:pt-20 md:pb-0 bg-secondary-400">
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <section className="w-full flex-1 px-5 flex items-center">
        <div
          className="container mx-auto px-5 py-5 rounded-2xl relative flex items-center
          z-10 shadow-2xl bg-white"
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 py-5 flex flex-col gap-5"
            >
              <h1 className="text-4xl font-bold text-center">
                Register <span className="text-accent-500">here</span>
              </h1>
              <div className={`${inputFlex}`}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.name && (
                  <p className="text-error">{errors.name?.message}</p>
                )}
              </div>
              <div className={`${inputFlex}`}>
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
              <div className={`${inputFlex}`}>
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
              <div className={`${inputFlex}`}>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.confirmPassword && (
                  <p className="text-error">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
              <div className={`${inputFlex}`}>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  {...register("phone")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.phone && (
                  <p className="text-error">{errors.phone?.message}</p>
                )}
              </div>
              <div className={`${inputFlex}`}>
                <input
                  type="text"
                  placeholder="Enter your address"
                  {...register("address")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.address && (
                  <p className="text-error">{errors.address?.message}</p>
                )}
              </div>
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
