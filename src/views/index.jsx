import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/ui/container";
import serviceList from "../settings/service-list";
import ServiceCard from "../components/services/service-card";
import aboutUs from "../assets/images/about-us.png";
import communicationWeb from "../assets/images/home-communication.png";
import Achievement from "../components/home/achievement";
import Button from "../components/ui/button";
import Typography from "../components/ui/typography";
import achievementList from "../settings/achievement-list";

const Home = () => {
  return (
    <div>
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 min-h-[calc(100vh-52px)]">
            <div className="flex items-center justify-center text-center lg:justify-start lg:text-left">
              <motion.div
                className="w-full max-w-[400px]"
                initial={{ opacity: 0.7, x: +25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >
                <Typography size="subHeader" className="italic">
                  Grow your business with
                </Typography>

                <Typography
                  size="header"
                  type="darkPrimary"
                  className="capitalize mt-1"
                >
                  Artificial Intelligence
                </Typography>

                <Typography className="capitalize mt-5 leading-6 tracking-wide">
                  get closer look how the AI improves in business. get closer
                  look how the AI improves in business. look how the AI improves
                  in business.
                </Typography>
                <Link to="/contact">
                  <Button className="font-semibold bg-primary text-white mt-8 hover:bg-darkPrimary">
                    Get in touch
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="flex items-center justify-center">
              <motion.img
                src={communicationWeb}
                alt="ai"
                className="w-full max-w-[300px] md:max-w-[500px]"
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

      <Container className="mt-16">
        <Typography size="header" className="capitalize text-center">
          our services
        </Typography>
        <Typography className="mt-3 text-center leading-6">
          Our goal is to deliver excellent services
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mt-10">
          {[...serviceList].splice(0, 3).map((item) => (
            <ServiceCard data={item} key={item.id} />
          ))}
        </div>
      </Container>

      <Container className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
        <div className="flex justify-center items-center lg:justify-start">
          <div>
            <motion.img
              alt="about us"
              src={aboutUs}
              className="w-full"
              initial={{ opacity: 0.7, x: +25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
            />
          </div>
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
              <Typography size="header" className="capitalize mt-16 lg:mt-0">
                About Us
              </Typography>

              <Typography
                size="paragraph"
                className="mt-3 tracking-wide leading-7"
              >
                Dummy text is also used to demonstrate the appearance of
                different typefaces and layouts, and in general the content of
                dummy text is nonsensical. used to demonstrate the appearance of
                different typefaces and layouts, and in general the content of
                dummy text is nonsensical. Dummy text is also used to
                demonstrate the appearance of different typefaces and layouts,
                and in general the content of dummy text is nonsensical. used to
                dummy text is nonsensical. Dummy text is also used to
                demonstrate the appearance of different typefaces and layouts,
                and in general the content of dummy text is nonsensical. used to
              </Typography>

              <div className="mt-5">
                <Link to="/about">
                  <Button className="bg-primary text-white mt-5 hover:bg-darkPrimary">
                    Explore more
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <Container className="mt-16">
        <Typography size="header" className="capitalize text-center lg:mt-0">
          Achievement
        </Typography>
        <Typography className="mt-3 text-center leading-6">
          Just know about some of our great achievement
        </Typography>
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
      </Container>
    </div>
  );
};

export default Home;
