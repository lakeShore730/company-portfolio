import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typography from "../ui/typography";

const ServiceCard = (props) => {
  const { Icon, title, description = "", path = "/" } = props.data;
  return (
    <Link to={path}>
      <motion.div
        className="w-full p-8 shadow rounded-md hover:bg-lightPrimary select-none cursor-pointer"
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <div className="p-3 rounded-full bg-darkPrimary inline-block">
          {<Icon size="30" className="text-white" />}
        </div>
        <div className="mt-4">
          <Typography size="subHeader">{title}</Typography>
          <Typography className="tracking-wide leading-7 mt-4">
            {description}
          </Typography>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
