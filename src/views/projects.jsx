import Navbar from "../components/navbar/navbar";
import Container from "../components/ui/container";
import Footer from "../components/footer";
import projectList from "../settings/project-list";
import ProjectCard from "../components/projects/project-card";

const Projects = () => {
  return (
    <div>
      <div>
        <Container>
          <Navbar />
          <div className="py-16">
            <h1 className="capitalize font-semibold text-center text-2xl text-gray-600">
              Our Projects
            </h1>
            <p className="mt-3 text-md text-gray-600 text-center leading-6">
              Explore some of our projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 mt-8">
              {projectList.map((item) => (
                <ProjectCard data={item} key={item.id} />
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-16 bg-[#fcfcfc]">
        <Container>
          <Footer className="py-8" />
        </Container>
      </div>
    </div>
  );
};

export default Projects;
