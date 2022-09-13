import { motion } from "framer-motion";
import Container from "../components/ui/container";
import digitalTool from "../assets/images/writing-room-cuate.png";
import aboutList from "../settings/about-list";
import KeepInTouch from "../components/keep-in-touch";
import Typography from "../components/ui/typography";

const About = () => {
  return (
    <div>
      <Container className="mt-16">
        <Typography size="header" className="capitalize text-center">
          About us
        </Typography>
        <Typography size="paragraph" className="mt-3 text-center leading-6">
          Why to join us?
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
          <div className="flex justify-center items-center mt-10 lg:mt-0">
            <motion.img
              alt="about us"
              src={digitalTool}
              className="w-full h-full max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px]"
              initial={{ opacity: 0.7, x: +25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
            />
          </div>
          <div className="flex items-center tracking-wide leading-6">
            <motion.div
              className="w-full max-w-[450px] mx-auto"
              initial={{ opacity: 0.7, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
            >
              <div>
                {aboutList.map((item, index) => (
                  <div key={index} className="mt-8 lg:mt-5">
                    <Typography
                      size="none"
                      className="italic text-[1.2rem] text-gray-700 text-medium"
                    >
                      {`${index + 1}. ${item.title}`}
                    </Typography>
                    <Typography size="paragraph" className="mt-3">
                      {item.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <KeepInTouch />
      </Container>
    </div>
  );
};

export default About;
