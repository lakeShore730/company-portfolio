import { motion } from "framer-motion";
import Typography from "../ui/typography";

const Achievement = (props) => {
  const { Icon, title, description = "" } = props;

  return (
    <motion.div
      className="flex items-center px-5 py-10 rounded-md shadow hover:bg-secondary hover:text-black"
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
    >
      <div className="rounded-full overflow-hidden">
        <Icon size={45} className="p-2 bg-darkSecondary text-gray-900" />
      </div>
      <div className="ml-5">
        <Typography type="subHeader">{title}</Typography>
        <Typography className="mt-2">{description}</Typography>
      </div>
    </motion.div>
  );
};

export default Achievement;
