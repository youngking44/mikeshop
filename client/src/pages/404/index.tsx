import { Link } from "react-router-dom";
import Button from "../../components/button";
import Container from "../../components/container";

const PageNotFound = () => {
  return (
    <main className="w-full bg-secondary-200">
      <Container>
        <section className="w-full h-screen pt-20">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-md px-5 py-10 text-center bg-white shadow-lg">
              <h1 className="text-[80px] font-bold">
                4<span className="text-accent-400">0</span>4
              </h1>
              <span className="text-2xl font-bold">OOPs! PAGE NOT FOUND</span>
              <p>Sorry, the page you're looking for does not exist.</p>
              <div className="mt-5">
                <Link to="/">
                  <Button type="button" size="small" bg="bg-accent-400">
                    Go Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default PageNotFound;
