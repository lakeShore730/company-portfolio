import Container from "../components/ui/container";
import Navbar from "../components/navbar/navbar";
import serviceList from "../settings/service-list";
import ServiceCard from "../components/services/service-card";
import aboutUs from "../assets/images/about-us.png";
import { Link } from "react-router-dom";
import aiBoostImg from "../assets/images/ai_boosting.png";
import Achievement from "../components/home/achievement";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Button from "../components/ui/button";
import achievementList from "../settings/achievement-list";

const Home = () => {
  return (
    <div>
      <div
      // className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
      >
        <Container>
          <Navbar />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-10 min-h-[100vh] lg:min-h-[calc(100vh-70px)] mt-5 lg:mt-0">
            <div className="flex items-center justify-center text-center lg:justify-start lg:text-left">
              <motion.div
                className="w-full max-w-[400px] lg:mt-0"
                initial={{ opacity: 0.7, x: +25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >
                <h1 className="capitalize font-semibold text-md text-gray-700">
                  grow your business with
                </h1>
                <h1 className="capitalize font-semibold text-3xl text-gray-700 mt-3">
                  Artificial Intelligence
                </h1>
                <h1 className="capitalize mt-5 text-sm text-gray-600 leading-6">
                  get closer look how the AI improves in business. get closer
                  look how the AI improves in business. look how the AI improves
                  in business.
                </h1>
                <Link to="/contact">
                  <Button className="bg-primary text-slate-100 mt-5 hover:bg-[#61045f]">
                    Get in touch
                  </Button>
                </Link>
              </motion.div>
            </div>
            <div className="flex items-center justify-center">
              <motion.img
                src={aiBoostImg}
                alt="ai"
                className="w-full max-w-[300px] md:max-w-[400px]"
                initial={{ opacity: 0.7, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              />
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container className="pt-32 pb-16">
          <h1 className="capitalize font-semibold text-center text-2xl text-gray-600">
            our services
          </h1>
          <p className="mt-3 text-md text-gray-600 text-center leading-6">
            Our goal is to deliver excellent services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 mt-8">
            {[...serviceList].splice(0, 3).map((item) => (
              <ServiceCard data={item} key={item.id} />
            ))}
          </div>
        </Container>
      </div>
      <div>
        <Container className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            <div className="flex justify-center items-center lg:justify-start">
              <motion.img
                alt="about us"
                src={aboutUs}
                className="w-full h-full max-w-[270px] max-h-[270px] md:max-w-[350px] md:max-h-[350px]"
                initial={{ opacity: 0.7, x: +25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              />
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0.7, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >
                <div className="w-full max-w-[400px]">
                  <h1 className="capitalize font-semibold text-2xl text-gray-600 mt-32 lg:mt-0">
                    About Us
                  </h1>

                  <p className="mt-4 text-sm text-gray-600 leading-6">
                    Dummy text is also used to demonstrate the appearance of
                    different typefaces and layouts, and in general the content
                    of dummy text is nonsensical. used to demonstrate the
                    appearance of different typefaces and layouts, and in
                    general the content of dummy text is nonsensical. Dummy text
                    is also used to demonstrate the appearance of different
                    typefaces and layouts, and in general the content of dummy
                    text is nonsensical. used to demonstrate the appearance of
                    different typefaces and layouts, and in general the content
                    of dummy text is nonsensical. Dummy text is also used to
                    demonstrate the appearance of different typefaces and
                    layouts, and in general the content of dummy text is
                    nonsensical. used to demonstrate the appearance of different
                    typefaces and layouts, and in general the content of dummy
                    text is nonsensical.
                  </p>

                  <div className="mt-5">
                    <Link to="/about">
                      <Button className="bg-primary text-slate-100 mt-5 hover:bg-[#61045f]">
                        Explore more
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container className="py-16">
          <div>
            <h1 className="capitalize font-semibold text-2xl text-center text-gray-600 mt-16 lg:mt-0">
              Achievement
            </h1>
            <p className="mt-3 text-md text-gray-600 text-center leading-6">
              Just know about some of our great achievement
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8 mt-10">
              {achievementList.map((data) => (
                <Achievement
                  key={data.id}
                  Icon={data.Icon}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-16 bg-[#fcfcfc]">
        <Container>
          <Footer className="py-8" />
        </Container>
      </div>
    </div>
  );
};

export default Home;
