import {
  BiLogoGoogleCloud,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaAngular,
  FaAws,
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaRProject,
  FaReact,
  FaUnity,
} from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
import {
  SiAxios,
  SiExpress,
  SiFlask,
  SiJest,
  SiKeras,
  SiNextdotjs,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { SlGraph } from "react-icons/sl";
import { TbBrandThreejs } from "react-icons/tb";

const iconSize = 75;

export const frontendSkills = [
  { icon: <FaHtml5 size={iconSize} />, name: "HTML" },
  { icon: <FaCss3 size={iconSize} />, name: "CSS" },
  { icon: <BiLogoJavascript size={iconSize} />, name: "Javascript" },
  { icon: <BiLogoTypescript size={iconSize} />, name: "Typescript" },
  { icon: <FaReact size={iconSize} />, name: "React" },
  { icon: <SiNextdotjs size={iconSize} />, name: "Next.js" },
  { icon: <FaAngular size={iconSize} />, name: "Angular" },
  { icon: <SiJest size={iconSize} />, name: "Jest" },
  { icon: <TbBrandThreejs size={iconSize} />, name: "Three.js" },
  { icon: <FiFramer size={iconSize} />, name: "Framer Motion" },
  { icon: <SiTailwindcss size={iconSize} />, name: "Tailwind" },
  { icon: <FaGitAlt size={iconSize} />, name: "Git" },
];

export const backendSkills = [
  { icon: <FaPython size={iconSize} />, name: "Python" },
  { icon: <BiLogoTypescript size={iconSize} />, name: "Typescript" },
  { icon: <SiAxios size={iconSize} />, name: "Axios" },
  { icon: <CgCPlusPlus size={iconSize} />, name: "C++" },
  { icon: <GrMysql size={iconSize} />, name: "MySQL" },
  { icon: <SiPostgresql size={iconSize} />, name: "PostgreSQL" },
  { icon: <FaNodeJs size={iconSize} />, name: "Node.js" },
  { icon: <SiExpress size={iconSize} />, name: "Express" },
  { icon: <SiFlask size={iconSize} />, name: "Flask" },
  { icon: <FaDocker size={iconSize} />, name: "Docker" },
  { icon: <FaAws size={iconSize} />, name: "AWS" },
  { icon: <BiLogoGoogleCloud size={iconSize} />, name: "Google Cloud" },
];

export const machineLearningSkills = [
  { icon: <FaPython size={iconSize} />, name: "Python" },
  { icon: <CgCPlusPlus size={iconSize} />, name: "C++" },
  { icon: <SiTensorflow size={iconSize} />, name: "TensorFlow" },
  { icon: <SiPytorch size={iconSize} />, name: "PyTorch" },
  { icon: <SiScikitlearn size={iconSize} />, name: "Scikit-Learn" },
  { icon: <SiKeras size={iconSize} />, name: "Keras" },
  { icon: <SlGraph size={iconSize} />, name: "Matplotlib" },
  { icon: <SiPandas size={iconSize} />, name: "Pandas" },
  { icon: <FaRProject size={iconSize} />, name: "R (langugage)" },
  { icon: <FaAws size={iconSize} />, name: "AWS" },
  { icon: <BiLogoGoogleCloud size={iconSize} />, name: "Google Cloud" },
  { icon: <FaUnity size={iconSize} />, name: "Unity3D (RL)" },
];

export const projects = [
  {
    title: "Athena",
    label: "Learning Platform",
    githubUrl: "https://github.com/redayzarra/Athena",
    demoUrl: "https://athena-rdz.vercel.app/",
    image: "/images/projects/Athena.webp",
    videoUrl: "",
  },
  {
    title: "KnightVision",
    label: "chess bot",
    githubUrl: "https://github.com/redayzarra/KnightVision",
    demoUrl: "",
    image: "/images/projects/ChessBot.webp",
    videoUrl: "",
  },
  {
    title: "AutoPilot",
    label: "Drone App",
    githubUrl: "https://github.com/redayzarra/AutoPilot",
    demoUrl: "",
    image: "/images/projects/AutoPilot.webp",
    videoUrl: "https://www.youtube.com/watch?v=4i84SMtRef0",
  },
  {
    title: "CodeTrack",
    label: "Issue Tracker",
    githubUrl: "https://github.com/redayzarra/CodeTrack",
    demoUrl: "https://codetrack-rdz.vercel.app/",
    image: "/images/projects/CodeTrack.webp",
    videoUrl: "",
  },
  // {
  //   title: "GameHub",
  //   label: "Game Store",
  //   githubUrl: "https://github.com/redayzarra/GameHub",
  //   demoUrl: "https://game-hub-flame-two.vercel.app/",
  //   image: "/images/projects/GameHub.webp",
  //   videoUrl: "",
  // },
  {
    title: "PocketTrader",
    label: "Trading Bot",
    githubUrl: "https://github.com/redayzarra/PocketTrader",
    demoUrl: "",
    image: "/images/projects/PocketTrader.webp",
    videoUrl: "",
  },
  {
    title: "Homespace",
    label: "apnea detection",
    githubUrl: "https://github.com/redayzarra/SleepApneaDetection",
    demoUrl: "",
    image: "/images/projects/SleepApnea.webp",
    videoUrl: "",
  },
  // {
  //   title: "Traffic Signs",
  //   label: "MACHINE LEARNING",
  //   githubUrl: "https://github.com/redayzarra/CNN_TrafficSigns",
  //   demoUrl: "",
  //   image: "/images/projects/TrafficSigns.webp",
  //   videoUrl: "",
  // },
];
