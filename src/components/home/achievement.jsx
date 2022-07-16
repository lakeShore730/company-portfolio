import { motion } from "framer-motion";

const Achievement = (props) => {
  const { Icon, title, description = "" } = props;

  return (
    <motion.div
      className="flex items-center px-5 py-10 rounded-lg text-gray-600 bg-[#fcfcfc] hover:bg-primary hover:text-slate-100"
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
    >
      <div className="rounded-full overflow-hidden">
        <Icon size={50} className="bg-primary p-2 text-slate-100" />
      </div>
      <div className="ml-5">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm font-medium mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Achievement;
