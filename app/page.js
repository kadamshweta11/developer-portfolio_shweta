// "use client";
// import { personalData } from "@/utils/data/personal-data";
// import AboutSection from "./components/homepage/about";
// // import Blog from "./components/homepage/blog";
// // import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();

//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//   return filtered;
// };

// export default async function Home() {
//   const blogs = await getData();

//   return (
//     <div suppressHydrationWarning >
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       {/* <Blog blogs={blogs} /> */}
//       {/* <ContactSection /> */}
//     </div>
//   )
// };

"use client";
import { personalData } from "@/utils/data/personal-data";
import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled where needed
const HeroSection = dynamic(() => import("./components/homepage/hero-section"));
const AboutSection = dynamic(() => import("./components/homepage/about"));
const Experience = dynamic(() => import("./components/homepage/experience"));
const Skills = dynamic(() => import("./components/homepage/skills"));
const Projects = dynamic(() => import("./components/homepage/projects"));
const Education = dynamic(
  () => import("./components/homepage/education"),
  { ssr: false } // Disable SSR if it contains client-side only code
);

async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </div>
  )
}