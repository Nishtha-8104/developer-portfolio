import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiSocketdotio,
  SiGit,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJest,
  SiPostman,
  SiChakraui,
  SiMui,
  SiJavascript,
  SiApachejmeter,
  SiGithub,
  SiGithubcopilot,
  SiSelenium,
  SiVercel,
  SiRender,
  SiOverleaf,
  SiMocha,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiStreamlit,
  SiC,
  SiCplusplus,
  SiPython,
  SiLangchain,
  SiFigma,
  SiNpm,
} from "react-icons/si";


const aboutStats = [
  { label: "Years of experience", value: "3+" },
  { label: "Technologies mastered", value: "5+" },
  { label: "Companies worked with", value: "15+" },
];

const skillsData = [
  // Programming Languages
  { name: "C", icon: SiC, category: "Programming Languages" },
  { name: "C++", icon: SiCplusplus, category: "Programming Languages" },
  { name: "Python", icon: SiPython, category: "Programming Languages" },

  // Frontend
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, category: "Frontend" },
  { name: "CSS3", icon: SiCss3, category: "Frontend" },

  // Frameworks & UI
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frameworks & UI" },
  { name: "Chakra UI", icon: SiChakraui, category: "Frameworks & UI" },
  { name: "Material UI", icon: SiMui, category: "Frameworks & UI" },

  // Backend
  { name: "JavaScript", icon: SiJavascript, category: "Backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Backend" },
  { name: "Socket.IO", icon: SiSocketdotio, category: "Backend" },

  // Tools & DevOps
  { name: "Git", icon: SiGit, category: "Tools & DevOps" },
  { name: "GitHub", icon: SiGithub, category: "Tools & DevOps" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, category: "Tools & DevOps" },
  { name: "Overleaf", icon: SiOverleaf, category: "Tools & DevOps" },
  {name:"Figma",icon:SiFigma,category:"Tools & DevOps"},
  {name:"NPM",icon:SiNpm,category:"Tools & DevOps"},


  // Testing
  { name: "Jest", icon: SiJest, category: "Testing" },
  { name: "Mocha", icon: SiMocha, category: "Testing" },
  { name: "Postman", icon: SiPostman, category: "Testing" },
  { name: "Selenium", icon: SiSelenium, category: "Testing" },
  { name: "Apache JMeter", icon: SiApachejmeter, category: "Testing" },

  // AI/ML Frameworks
  { name: "LangChain", icon: SiLangchain, category: "AI/ML Frameworks" },
  { name: "TensorFlow", icon: SiTensorflow, category: "AI/ML Frameworks" },
  { name: "scikit-learn", icon: SiScikitlearn, category: "AI/ML Frameworks" },
  { name: "Streamlit", icon: SiStreamlit, category: "AI/ML Frameworks" },
  { name: "Pandas", icon: SiPandas, category: "AI/ML Frameworks" },

  // Hosting
  { name: "Vercel", icon: SiVercel, category: "Hosting" },
  { name: "Render", icon: SiRender, category: "Hosting" },
];

const certifications = [
  {
    title: "Certified Full Stack Developer",
    issuer: "Udemy",
    year: "2023",
    image: "/certifications/Webdev.jpg",
  },
  {
    title: "Certified in Machine Learning A-Z course",
    issuer: "Udemy",
    year: "2025",
    image: "/certifications/ML.jpg",
  },
  {
    title: "Special Mention in WOC-6.o(React)",
    issuer: "Microsoft Student Technical Club",
    year: "2023",
    image: "/certifications/woc'.png",
  },
];


const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Nitika Infotech",
    period: "April 2025 – July 2025",
    description:
      "Completed a 2-month summer internship focused on Machine Learning. Built a sales prediction project using the Apriori Association algorithm to identify product pairs frequently bought together.",
  },
  {
    role: "React Developer – Label Generating Project",
    company: "NHB Ball Roller Ltd, Bilimora, India",
    period: "December 2023",
    description:
      "Developed an automated label generation system using React and Data Matrix for comprehensive product information retrieval, improving efficiency by 30%. Collaborated directly with the Business Unit Head to ensure timely and successful project delivery.",
  },
];


const projects = [
  
  {
    title: "EduNexus",
    description: "Full-stack academic dashboard for students and faculty with login, chat, attendance, notes, and assignment management.",
    image: "/assets/Edunexus.png",
    href: "https://github.com/202201209/G18_EDUNEXUS",
  },
  {
    title: "Real-Time Chat Application",
    description: "Course-specific chat system with Socket.IO for live communication and private messaging.",
    image: "/assets/chatweb.jpg",
    href: "https://github.com/Nishtha-8104/Chat-website",
  },
  {
    title: "Space Organization Database",
    description: "A command-line database system to manage space missions, astronauts, and spacecrafts efficiently using SQL and file operations",
    image: "/assets/dbms.png",
    href: "https://github.com/Nishtha-8104/SpaceOrganizationDatabase",
  },
  {
    title: "IRCTC-Inspired Ticket Booking System",
    description: "Full-stack ticket reservation app with custom login and course-wise seat availability.",
    image: "/assets/irctc.png",
    href: "https://github.com/Nishtha-8104/WoC6.0-react-IRCTC-NishthaPatel",
  },
  {
    title: "ThinkSpec",
    description: "A comprehensive requirements engineering documentation suite, featuring user stories, stakeholder analysis, and detailed specifications in PDF format.",
    image: "/assets/thinkspec.png", 
    href: "https://github.com/Nishtha-8104/ThinkSpec"
  },
  {
    title: "Agentless Patch Validator (SWE-benchlite)",
    description: "Validates and ranks LLM-generated code patches using test regression and reproduction logic.",
    image: "/assets/Agentless.png",
    href: "https://github.com/Nishtha-8104/Agentless",
  },
  
  {
    title: "Automated Recruitment System",
    description: "Resume-based screening, online tests, and bot-led interviews with smart filtering.",
    image: "/assets/HCI.png",
    href: "https://github.com/Nishtha-8104/HCI_LLD",
  },
];

const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (!scrollRef.current) return;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
  };

  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    (acc[skill.category] ?? []).push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);


  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>React</span>
              <span className={styles.pill}>Node.js</span>
              <span className={styles.pill}>PostgreSQL</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Nishtha.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                An experienced full-stack developer passionate about building robust and scalable web applications with seamless user experiences.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:patelnishtha78@gmail.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              I&apos;m an experienced full-stack developer skilled in React, Node.js, Express.js, PostgreSQL, and Socket.IO, building scalable web apps since 2023. I handle the full product cycle—from design and development to automated testing with Jest and Postman. I&apos;ve worked on projects like ticket booking systems,Automated Recruitment, and real-time chat apps, collaborating effectively with cross-functional teams to deliver reliable, user-focused solutions.
            </h2>
            {/* <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
             Scalable Full-Stack Websites with Real-Time and Secure Features
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent
                  ref={scrollRef}
                  className="flex overflow-x-auto scrollbar-hide select-none"
                  onMouseDown={onMouseDown}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onMouseMove={onMouseMove}
                  style={{ scrollBehavior: "smooth" }}
                >
                  {projects.map((project) => (
                    <CarouselItem
                      key={project.title}
                      className="md:basis-1/2 flex-shrink-0"
                    >
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <div className="border-t border-white/5 p-4">
                            <CardTitle className="text-base font-semibold tracking-tight text-foreground">
                              {project.title}
                            </CardTitle>
                            <p className="mt-1 text-sm font-normal tracking-tight text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                        </CardContent>

                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                   {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        <section id="experience" data-scroll-section className="my-64 max-w-5xl mx-auto px-6 sm:px-8 lg:px-0">
            <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-foreground xl:text-4xl">
              Experience👩🏻‍💻
            </h2>
            <div className="flex flex-col space-y-10">
              {experiences.map((exp, idx) => (
                <article
                  key={idx}
                  className="group relative rounded-xl border border-primary/30 bg-background/30 p-8 shadow-lg transition-shadow hover:shadow-primary/50"
                >
                  <h3 className="text-2xl font-semibold text-primary group-hover:text-primary/90">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    {exp.company} &middot; {exp.period}
                  </p>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground">
                    {exp.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" data-scroll-section className="my-64 max-w-6xl mx-auto px-6 sm:px-8 lg:px-0">
      <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-foreground xl:text-4xl">
        Skills & Tech Stack 🚀
      </h2>

          <div className="grid gap-16 md:grid-cols-3">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="rounded-xl border border-primary/30 bg-background/30 p-6 shadow transition duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-6 justify-items-center">
                  {skills.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="flex flex-col items-center space-y-2 cursor-pointer"
                      title={name}
                    >
                      <Icon className="text-primary h-14 w-14" />
                      <span className="text-sm font-medium text-muted-foreground">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          data-scroll-section
          className="my-64 max-w-6xl mx-auto px-6 sm:px-8 lg:px-0"
        >
          <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-foreground xl:text-4xl">
            Certifications 🎓
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map(({ title, issuer, year, image }, idx) => (
              <motion.a
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-secondary/10 p-4 shadow-md transition-shadow hover:shadow-xl"
                title={`${title} by ${issuer}`}
              >
                <div className="flex items-center space-x-3 text-primary mb-4">
                  <Award size={28} />
                  <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                </div>
                <div className="relative h-48 w-full overflow-hidden rounded-lg border border-primary/20 bg-background">
                  <Image
                    src={image}
                    alt={`${title} certificate`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  {issuer} &middot; {year}
                </p>
                {/* <span className="mt-auto inline-block text-sm font-semibold text-primary underline decoration-primary/50 underline-offset-4">
                  View Certificate
                </span> */}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        {/* <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="mailto:patelnishtha78@gmail.com" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section> */}
      </div>
    </Container>
  );
}



function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
