import { motion } from "framer-motion";
import Container from "../components/ui/container";
import projectList from "../settings/project-list";
import ProjectCard from "../components/projects/project-card";
import KeepInTouch from "../components/keep-in-touch";
import Typography from "../components/ui/typography";

const Projects = () => {
  return (
    <div>
      <Container>
        <div className="mt-16">
          <Typography size="header" className="capitalize text-center">
            Our Projects
          </Typography>
          <Typography className="mt-3 text-center leading-6">
            Explore some of our projects
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 mt-8">
            {projectList.map((item) => (
              <ProjectCard data={item} key={item.id} />
            ))}
          </div>
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

export default Projects;
