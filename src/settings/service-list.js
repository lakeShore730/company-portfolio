import { CloudDrizzle, Cpu, Wind } from "react-feather";

const serviceList = [
  {
    id: "machine-learning",
    title: "Machine Learning",
    Icon: Wind,
    path: "/services",
    description: `Extracts meaningful insights from raw data to quickly solve complex, 
    data-rich business problems.`,
  },
  {
    id: "automation",
    title: "Automation",
    Icon: Cpu,
    path: "/services",
    description: `Automate the easy stuff. Focus on the complex problems.`,
  },
  {
    id: "web-development",
    title: "Web development",
    Icon: CloudDrizzle,
    path: "/services",
    description: `Where mind the design meet to create what you want. `,
  },
];

export default serviceList;
