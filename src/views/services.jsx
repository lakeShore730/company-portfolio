import { motion } from "framer-motion";
import Container from "../components/ui/container";
import serviceList from "../settings/service-list";
import ServiceCard from "../components/services/service-card";
import KeepInTouch from "../components/keep-in-touch";

const Services = () => {
  return (
    <div>
      <Container className="mt-16">
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
      </Container>

      <motion.div
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <Container className="mt-16">
          <KeepInTouch />
        </Container>
      </motion.div>
    </div>
  );
};

export default Services;
