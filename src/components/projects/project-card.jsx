import { motion } from "framer-motion";
import Typography from "../ui/typography";

const ProjectCard = (props) => {
  const { Icon, title, description = "", path = "/" } = props.data;
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <motion.div
        className="w-full p-8 shadow rounded-md hover:bg-lightPrimary select-none cursor-pointer hover:text-white"
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
          <Typography className="leading-6 mt-4">{description}</Typography>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
