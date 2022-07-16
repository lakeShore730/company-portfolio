import Navbar from "../components/navbar/navbar";
import Container from "../components/ui/container";
import Button from "../components/ui/button";
import Logo from "../components/logo";
import { motion } from "framer-motion";
import goal from "../assets/images/goal.png";
import Footer from "../components/footer";
import TeamMemberSwiper from "../components/about/team-member-swiper";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>
        <Container>
          <Navbar />
          <div>
            <div className="w-full h-auto min-h-[calc(100vh-360px)] lg:min-h-[calc(100vh-70px)] py-10 lg:py-0 flex items-center justify-center">
              <motion.div
                className="w-full max-w-[500px]"
                initial={{ scale: 0.9, opacity: 0.3 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                }}
              >
                <div>
                  <h1 className="capitalize font-semibold text-md text-gray-700">
                    change your whole business through AI
                  </h1>
                  <h1 className="capitalize font-semibold text-3xl text-gray-700 mt-3">
                    Ready to help you
                  </h1>
                  <p className="capitalize mt-5 text-sm text-gray-600 leading-6">
                    Dummy text is also used to demonstrate the appearance of
                    different typefaces and layouts, and in general the content
                    of dummy text is nonsensical.
                  </p>

                  <Link to="/contact">
                    <Button className="bg-primary text-slate-100 mt-5 hover:bg-[#61045f]">
                      Keep in Touch
                    </Button>
                  </Link>
                </div>
              </motion.div>
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
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            <div className="flex justify-center items-center mt-20 lg:mt-0">
              <motion.img
                alt="about us"
                src={goal}
                className="w-full h-full max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px]"
                initial={{ opacity: 0.7, x: +25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              />
            </div>
            <div className="flex items-center">
              <motion.div
                className="w-full max-w-[450px] mx-auto"
                initial={{ opacity: 0.7, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >
                <h1 className="capitalize font-semibold text-2xl text-gray-600 mt-32 lg:mt-0">
                  Why to join us?
                </h1>
                <div>
                  <div className="mt-4">
                    <h1 className="text-gray-600 text-sm font-semibold">
                      1. A well plan
                    </h1>
                    <p className="text-[0.85rem] text-gray-600">
                      Dummy text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical. used to demonstrate
                      the appearance of different typefaces and layouts, and in
                      general the content of dummy text is nonsensical.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-600 text-sm font-semibold">
                      2. A well plan
                    </h1>
                    <p className="text-[0.85rem] text-gray-600">
                      Dummy text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical. used to demonstrate
                      the appearance of different typefaces and layouts, and in
                      general the content of dummy text is nonsensical.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-600 text-sm font-semibold">
                      3. A well plan
                    </h1>
                    <p className="text-[0.85rem] text-gray-600">
                      Dummy text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical. used to demonstrate
                      the appearance of different typefaces and layouts, and in
                      general the content of dummy text is nonsensical.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-600 text-sm font-semibold">
                      4. A well plan
                    </h1>
                    <p className="text-[0.85rem] text-gray-600">
                      Dummy text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical. used to demonstrate
                      the appearance of different typefaces and layouts, and in
                      general the content of dummy text is nonsensical.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-600 text-sm font-semibold">
                      5. A well plan
                    </h1>
                    <p className="text-[0.85rem] text-gray-600">
                      Dummy text is also used to demonstrate the appearance of
                      different typefaces and layouts, and in general the
                      content of dummy text is nonsensical. used to demonstrate
                      the appearance of different typefaces and layouts, and in
                      general the content of dummy text is nonsensical.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-16">
        <Container>
          <h1 className="capitalize font-semibold text-2xl text-center text-gray-600 mt-32 lg:mt-0">
            Our Members
          </h1>
          <p className="text-center text-md mt-3 font-samibold text-gray-600">
            Our team members' details
          </p>
          <div className="mt-8">
            <TeamMemberSwiper />
          </div>
        </Container>
      </div>

      <div className="py-10 bg-[#F9F9F9]">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default About;
