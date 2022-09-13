import Container from "../components/ui/container";
import Navbar from "../components/navbar/navbar";
import CopyRight from "../components/copy-right";
import Footer from "../components/footer";
import { ChevronUp } from "react-feather";

const AppLayout = (props) => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <div className="bg-primary">
        <Container>
          <Navbar />
        </Container>
      </div>

      <div>{props.children}</div>
      <div className="mt-16 bg-[#fcfcfc]">
        <Container>
          <Footer className="py-8" />
        </Container>
      </div>

      <div className="bg-[#f6f6f6]">
        <Container>
          <CopyRight />
        </Container>
      </div>

      <div className="fixed bottom-[50px] right-[20px]">
        <button
          className="z-50 bg-secondary rounded-full p-[3px] hover:bg-darkSecondary"
          onClick={scrollToTop}
        >
          <ChevronUp size={22} className="text-gary-900" />
        </button>
      </div>
    </div>
  );
};

export default AppLayout;
