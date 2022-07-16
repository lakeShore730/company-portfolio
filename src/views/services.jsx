import Navbar from "../components/navbar/navbar";
import Container from "../components/ui/container";
import serviceList from "../settings/service-list";
import ServiceCard from "../components/services/service-card";
import Footer from "../components/footer";
import Logo from "../components/logo";
import { motion } from "framer-motion";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";
// import lightBackground from "../assets/background/light-background-flip-3.png";

const Services = () => {
  return (
    <div>
      <div>
        <Container>
          <Navbar />
          <div className="py-16">
            <h1 className="capitalize font-semibold text-center text-2xl text-gray-600">
              our services
            </h1>
            <p className="mt-3 text-md text-gray-600 text-center leading-6">
              Our goal is to deliver excellent services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 mt-8">
              {serviceList.map((item) => (
                <ServiceCard data={item} key={item.id} />
              ))}
            </div>
          </div>
        </Container>
      </div>

      <motion.div
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <div className="py-10 lg:py-16">
          <Container>
            <div className="flex items-center">
              <hr className="grow" />
              <div className="grow-0 border border-indigo-100 w-[70px] h-[70px] flex justify-center items-center rounded-full overflow-hidden mx-1">
                <Logo width="50px" height="50px" />
              </div>
              <hr className="grow" />
            </div>
            <div className="w-full max-w-lg mx-auto">
              <p className="text-center text-primary font-semibold text-xl mt-3">
                Lake Shore
              </p>
              <p className="text-center text-gray-600 mt-5 text-sm font-samibold leading-6">
                Dummy text is also used to demonstrate the appearance of
                different typefaces and layouts.
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button className="bg-primary text-slate-100 mt-5 hover:bg-[#61045f]">
                    Keep in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </motion.div>

      <div className="mt-16 bg-[#fcfcfc]">
        <Container>
          <Footer className="py-8" />
        </Container>
      </div>
    </div>
  );
};

export default Services;
