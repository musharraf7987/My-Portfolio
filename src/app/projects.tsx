"use client";
import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "@/components";
import Link from "next/link";
import { useState } from "react";

interface ProjectImage {
  url: string;
  alt: string;
}

interface Technology {
  name: string;
  color?: string;
}

interface Project {
  id: string;
  img: string;
  title: string;
  desc: string;
  longDesc?: string;
  technologies?: Technology[];
  images?: ProjectImage[];
  demoLink?: string;
  githubLink?: string;
  duration?: string;
  category: ("web" | "mobile" | "fullstack" | "ai")[];  // Changed to array
}

export const PROJECTS: Project[] = [
  {
    id: "career-bridge",
    img: "/image/careerbridge (5).png",
    title: "CareerBridge: Connecting Talent",
    desc: "CareerBridge is a Next.js-powered job platform offering advanced search, personalized recommendations, and application tracking.",
    longDesc: "CareerBridge is an innovative job platform that connects job seekers with exciting opportunities. Built with Next.js and React, it offers a seamless user experience with advanced search, personalized recommendations, and application tracking. The platform integrates modern UI components, data visualization, and interactive maps. It utilizes Redux for state management and React Slick for carousels. CareerBridge empowers job seekers to discover and apply for positions while helping employers efficiently manage hiring.",
    technologies: [
      { name: "Next.js", color: "green" },
      { name: "Bootsrap", color: "blue" },
      { name: "Redux-toolkit", color: "green" },
      { name: "AOS", color: "blue" },
      { name: "Chart.js", color: "green" },
    ],
    category: ["web"],
    duration: "Aug 2024 - Nov 2024",
    images: [
      { url: "/image/careerbridge (3).png", alt: "Landing Page 1" },
      { url: "/image/careerbridge (4).png", alt: "Lanind Page 2" },
      { url: "/image/careerbridge (5).png", alt: "Lanind Page 3" },
      { url: "/image/careerbridge1.png", alt: "Lanind Page mobile" },
      { url: "/image/careerbridge1 (1).png", alt: "Lanind Page mobile" },
    ],
    demoLink: "https://careerbridgebyusaid.vercel.app",
  },
  {
    id: "time-monitoring",
    img: "/image/productiviti.webp",
    title: "Time Monitoring Application",
    desc: "Productiviti is a workforce productivity and employee monitoring platform offering real-time activity logging and analytics.",
    longDesc: "Productiviti is a comprehensive solution designed to enhance workforce productivity through advanced monitoring and analytics. It provides real-time tracking of employee activities, delivering data-driven insights to optimize team performance. Key features include automated attendance tracking, enterprise asset management, and customizable monitoring parameters to meet diverse organizational needs. The platform offers both user-specific and business-wide analytics, allowing for a unified view of productivity metrics. With options for custom branding and flexible deployment, Productiviti caters to businesses seeking to improve efficiency and maintain compliance in today's dynamic work environments. ",
    technologies: [
      { name: "React.js", color: "blue" },
      { name: "Prime React", color: "purple" },
      { name: "Typescript", color: "purple" },
      { name: "Chart.js", color: "purple" },
      { name: "formik", color: "purple" },
      { name: "Primeflex", color: "purple" },
    ],
    category: ["web", 'fullstack'],
    duration: "Feb 2024 - Sept 2024",
    images: [
      { url: "/image/productiviti.webp", alt: "Dashboard" },
      { url: "/image/productiviti1.webp", alt: "Screenshots" },
      { url: "/image/productiviti2.webp", alt: "table" },
      { url: "/image/productiviti3.webp", alt: "Permissions" },
      { url: "/image/productiviti4.webp", alt: "App Usage" },
      { url: "/image/productiviti5.jpg", alt: "Table" },
      { url: "/image/productiviti6.jpg", alt: "Table" },
    ],
  },
  {
    id: "time-monitoring-mobile",
    img: "/image/productivitimobile.jpg",
    title: "Time Monitoring Mobile",
    desc: "Productiviti's mobile app provides real-time employee activity analytics for productivity optimization.",
    longDesc: "The Productiviti mobile application offers on-the-go access to comprehensive workforce productivity analytics. Users can monitor active versus idle time, track absenteeism, and review activity reports across various intervals—hourly, weekly, monthly, quarterly, and yearly. The app also provides insights into active applications used by employees, facilitating informed decisions to enhance team performance. Designed for simplicity and efficiency, the mobile app ensures that managers and team leaders can stay connected to key productivity metrics anytime, anywhere.",
    technologies: [
      { name: "React Native", color: "blue" },
      { name: "Expo", color: "purple" },
      { name: "Native Wind", color: "purple" },
      { name: "Native Base", color: "purple" },
      { name: "Context API", color: "purple" },
      { name: "Jest", color: "purple" },
    ],
    category: ["mobile"],
    duration : "Aug 2024 - Oct 2024",
    images: [
      { url: "/image/productivitimobile.jpg", alt: "mobile" },
      { url: "/image/productivitimobile1.jpg", alt: "mobile" },
      { url: "/image/productivitimobile6.png", alt: "mobile" },
      { url: "/image/productivitimobile2.jpg", alt: "mobile" },
      { url: "/image/productivitimobile4.jpg", alt: "mobile" },
    ]
  },
  {
    id: "productiviti-marketing",
    img: "/image/productiviti-web (7).png",
    title: "Productiviti Marketing Web",
    desc: "The Productiviti marketing website showcases the platform’s features, benefits, and solutions, guiding businesses toward productivity optimization.",
    longDesc: "The Productiviti marketing website serves as an engaging and informative platform designed to highlight the core offerings of the Productiviti solution. It provides a visually appealing and user-friendly interface to communicate the platform's benefits, such as real-time workforce monitoring, analytics, and productivity optimization. \n \n This website aims to attract potential customers by showcasing key features through interactive visuals, testimonials, and case studies. It also simplifies navigation for businesses seeking information about the platform, pricing, and support. With clear calls-to-action and well-structured content, the marketing site effectively bridges the gap between the product and its target audience.",
    technologies: [
      { name: "Next js", color: "blue" },
      { name: "SEO", color: "blue" },
      { name: "Prime React", color: "purple" },
      { name: "Formik", color: "purple" },
      { name: "next-auth", color: "purple" },
      { name: "primeflex", color: "purple" },
      { name: "yup", color: "purple" },
    ],
    category: ["web"],
    duration : "May 2024 - Jul 2024",
    images: [
      { url: "/image/productiviti-web (7).png", alt: "marketing website" },
      { url: "/image/productiviti-web (4).png", alt: "marketing website" },
      { url: "/image/productiviti-web (5).png", alt: "marketing website" },
      { url: "/image/productiviti-web (3).png", alt: "marketing website" },
      { url: "/image/productiviti-web (6).png", alt: "marketing website" },
      { url: "/image/productiviti-web (2).png", alt: "marketing website" },

    ]
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All" 
  ? PROJECTS 
  : PROJECTS.filter(project => 
      project.category.some(cat => 
        cat.toLowerCase() === activeCategory.toLowerCase()
      )
    );

  return (
    <section className="py-28 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto mb-20 text-center">
        <Typography 
          variant="h2" 
          color="blue-gray" 
          className="mb-4 text-4xl font-bold tracking-tight"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-6/12 text-lg"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Showcasing my journey through various technologies and solutions. 
          Each project represents a unique challenge and innovative solution.
        </Typography>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {["All", "Web", "Mobile", "Fullstack", "AI"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all
                border ${
                  activeCategory === category 
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="group relative h-full">
            <Link href={`/${project.id}`} className="block h-full">
              <div className="h-full transform transition-all duration-300 hover:-translate-y-2">
                <ProjectCard {...project} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}