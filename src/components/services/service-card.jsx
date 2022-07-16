import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { Icon, title, description = "", path = "/" } = props.data;
  return (
    <Link to={path}>
      <motion.div
        className="w-full p-8 bg-[#fcfcfc] rounded-2xl hover:bg-primary text-gray-600 select-none cursor-pointer hover:text-slate-100"
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <div className="p-3 rounded-full bg-primary inline-block">
          {<Icon size="30" className="text-slate-100" />}
        </div>
        <div className="mt-4">
          <h1 className="text-md font-semibold">{title}</h1>
          <p className="text-[0.89rem] leading-6 mt-4">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
