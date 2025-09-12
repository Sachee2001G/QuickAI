import logo from "./logo.png";
import icon from "./icon.svg";
import gradientBackground from "./gradient-background.jpg";
import user_group from "./user-group.png";
import star_icon from "./star-icon.svg";
import star_dull_icon from "./star-dull-icon.svg";
import profile_img_1 from "./profile-img-1.png";
import arrow_icon from "./arrow-icon.svg";
import {
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
  FileAudio,
  FileVideo,
  FileArchive,
} from "lucide-react";
import ai_gen_img_1 from "./ai-gen-img-1.png";
import ai_gen_img_2 from "./ai-gen-img-2.png";
import ai_gen_img_3 from "./ai-gen-img-3.png";

export const assets = {
  logo,
  icon,
  gradientBackground,
  user_group,
  star_icon,
  star_dull_icon,
  profile_img_1,
  arrow_icon,
  ai_gen_img_1,
  ai_gen_img_2,
  ai_gen_img_3,
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
  FileAudio,
  FileVideo,
  FileArchive,
};

export const AiToolsData = [
  {
    title: "Article Writer",
    description: "Generate high-quality articles in seconds.",
    icon: SquarePen,
    bg: { from: "from-purple-500", to: "to-pink-500" },
    path: "/ai/article-writer",
  },
  {
    title: "Blog Title Generator",
    description: "Create catchy blog titles effortlessly.",
    icon: Hash,
    bg: { from: "from-green-500", to: "to-blue-500" },
    path: "/ai/blog-title-generator",
  },
  {
    title: "AI Image Creator",
    description: "Generate stunning images from text prompts.",
    icon: Image,
    bg: { from: "from-yellow-500", to: "to-red-500" },
    path: "/ai/image-creator",
  },
  {
    title: "Background Remover AI",
    description: "Remove backgrounds from images seamlessly.",
    icon: Eraser,
    bg: { from: "from-pink-500", to: "to-purple-500" },
    path: "/ai/background-remover",
  },
  {
    title: "Object Remover AI ",
    description: "Easily remove unwanted objects from images.",
    icon: Scissors,
    bg: { from: "from-blue-500", to: "to-green-500" },
    path: "/ai/object-remover",
  },
  {
    title: "Resume Reviewer AI",
    description: "Get feedback on your resume and improve it.",
    icon: FileText,
    bg: { from: "from-indigo-500", to: "to-blue-500" },
    path: "/ai/resume-reviewer",
  },
];

export const dummyTestimonialData = [
  {
    image: assets.profile_img_1,
    name: "John Doe",
    role: "Content Writer",
    title: "Revolutionized My Writing Process",
    content:
      "This AI tool has completely transformed the way I write articles. It's fast, efficient, and produces high-quality content that resonates with my audience.",
    rating: 5,
  },
  {
    image: assets.profile_img_2,
    name: "Jane Smith",
    role: "Graphic Designer",
    title: "A Game Changer for Design Projects",
    content:
      "This AI tool has significantly improved my design workflow. It's intuitive, fast, and delivers stunning visuals that align perfectly with my creative vision.",
    rating: 4,
  },
];

export const dummyCreationData = [
  {
    id: 1,
    user_id: 101,
    prompt: "Write a short poem about the sun.",
    content:
      "The sun awakens / painting skies with golden fire / day begins anew.",
    type: "text",
    publish: true,
    likes: 42,
    created_at: "2025-09-01T10:15:00Z",
    updated_at: "2025-09-01T10:30:00Z",
  },
  {
    id: 2,
    user_id: 102,
    prompt: "Generate a futuristic city image.",
    content: "https://example.com/images/futuristic-city.png",
    type: "image",
    publish: false,
    likes: 17,
    created_at: "2025-09-05T14:00:00Z",
    updated_at: "2025-09-05T14:10:00Z",
  },
  {
    id: 3,
    user_id: 103,
    prompt: "Create a motivational quote.",
    content: "Success is built on small efforts repeated daily.",
    type: "text",
    publish: true,
    likes: 89,
    created_at: "2025-09-10T08:45:00Z",
    updated_at: "2025-09-10T09:00:00Z",
  },
];
