// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";
// import AppIcon from "../components/AppIcon.jsx";
// import Button from "../components/ui/Button.jsx";

// const teamMembers = [
//   {
//     name: "Arjun Mehta",
//     role: "CEO & Co-founder",
//     description: "Former Amazon executive with 12+ years in e-commerce analytics",
//     image: "https://i.pravatar.cc/400?u=arjun1",
//     linkedin: "#",
//     expertise: ["E-commerce Strategy", "Analytics", "Leadership"],
//   },
//   {
//     name: "Priya Sharma",
//     role: "CTO & Co-founder",
//     description: "Ex-Google engineer specializing in ML and data infrastructure",
//     image: "https://i.pravatar.cc/400?u=priya2",
//     linkedin: "#",
//     expertise: ["Machine Learning", "Data Engineering", "Scalability"],
//   },
//   {
//     name: "Vikash Kumar",
//     role: "Head of Product",
//     description: "Product visionary with experience at Flipkart and Paytm",
//     image: "https://i.pravatar.cc/400?u=vikash1",
//     linkedin: "#",
//     expertise: ["Product Strategy", "UX Design", "Growth"],
//   },
//   {
//     name: "Sneha Gupta",
//     role: "VP of Engineering",
//     description: "Full-stack architect with expertise in distributed systems",
//     image: "https://i.pravatar.cc/400?u=sneha1",
//     linkedin: "#",
//     expertise: ["System Architecture", "Cloud Computing", "DevOps"],
//   },
//   {
//     name: "Rohit Agarwal",
//     role: "Head of Business Development",
//     description: "Strategic partnerships expert with deep marketplace knowledge",
//     image: "https://i.pravatar.cc/400?u=rohit1",
//     linkedin: "#",
//     expertise: ["Partnerships", "Business Strategy", "Market Expansion"],
//   },
// ];

// const milestones = [
//   {
//     year: "2020",
//     title: "The Beginning",
//     description:
//       "Founded with a vision to democratize e-commerce analytics for Indian businesses",
//     icon: "rocket",
//     stats: ["2 Co-founders", "Seed Funding", "Initial Concept"],
//   },
//   {
//     year: "2021",
//     title: "Product Development",
//     description:
//       "Built MVP and onboarded first 100 customers with basic analytics features",
//     icon: "code",
//     stats: ["100 Customers", "MVP Launch", "₹5Cr Revenue"],
//   },
//   {
//     year: "2022",
//     title: "Market Expansion",
//     description:
//       "Integrated with major marketplaces and launched automated repricing engine",
//     icon: "barChart3",
//     stats: ["1K+ Customers", "Multi-marketplace", "₹25Cr Revenue"],
//   },
//   {
//     year: "2023",
//     title: "AI Integration",
//     description:
//       "Introduced ML-powered insights and predictive analytics capabilities",
//     icon: "brain",
//     stats: ["5K+ Customers", "AI Features", "₹100Cr Revenue"],
//   },
//   {
//     year: "2024",
//     title: "Scale & Growth",
//     description:
//       "Expanded to enterprise solutions and launched advanced BI platform",
//     icon: "crown",
//     stats: ["10K+ Customers", "Enterprise Ready", "₹250Cr Revenue"],
//   },
// ];

// const whySpaceway = [
//   {
//     title: "Indian Market Expertise",
//     description:
//       "Deep understanding of the Indian e-commerce ecosystem and regulations.",
//     icon: "flag",
//   },
//   {
//     title: "Marketplace Native",
//     description:
//       "Built for multi-marketplace operations with native integrations.",
//     icon: "store",
//   },
//   {
//     title: "Data-Driven Insights",
//     description: "Advanced analytics and ML models trained on billions of data points.",
//     icon: "barChart3",
//   },
//   {
//     title: "Scalable Architecture",
//     description:
//       "Cloud-native platform designed to handle millions of products seamlessly.",
//     icon: "cloud",
//   },
//   {
//     title: "Customer-Centric",
//     description:
//       "Dedicated support team and continuous improvements based on feedback.",
//     icon: "heart",
//   },
//   {
//     title: "Innovation First",
//     description:
//       "Cutting-edge technology with regular updates and feature releases.",
//     icon: "lightbulb",
//   },
// ];

// export default function About() {
//   return (
//     <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
//         <div className="px-4 mx-auto text-center max-w-7xl">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-6 text-4xl font-bold md:text-6xl"
//           >
//             Transforming{" "}
//             <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
//               E-commerce
//             </span>{" "}
//             in India
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="max-w-4xl mx-auto text-xl text-muted-foreground"
//           >
//             We’re on a mission to empower every Indian business with intelligent
//             e-commerce tools that drive growth, optimize operations, and
//             maximize profitability.
//           </motion.p>

//           {/* Vision / Mission */}
//           <div className="grid gap-8 mt-16 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="p-8 border shadow-xl bg-card border-border rounded-3xl"
//             >
//               <div className="flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-2xl">
//                 <AppIcon name="eye" size={24} className="text-primary" />
//               </div>
//               <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
//               <p className="text-muted-foreground">
//                 To become the leading e-commerce intelligence platform in India,
//                 enabling millions of businesses to compete and thrive through
//                 data-driven insights and automation.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="p-8 border shadow-xl bg-card border-border rounded-3xl"
//             >
//               <div className="flex items-center justify-center w-16 h-16 mb-6 bg-info/10 rounded-2xl">
//                 <AppIcon name="target" size={24} className="text-info" />
//               </div>
//               <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
//               <p className="text-muted-foreground">
//                 To democratize advanced analytics and automation tools for all
//                 Indian businesses, empowering every entrepreneur to grow using
//                 data and AI.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Why Spaceway Section */}
//       <section className="py-20">
//         <div className="px-4 mx-auto text-center max-w-7xl">
//           <h2 className="mb-4 text-4xl font-bold">
//             Why Choose{" "}
//             <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
//               Spaceway
//             </span>
//           </h2>
//           <p className="mb-16 text-xl text-muted-foreground">
//             Built by Indians, for Indian businesses — designed to overcome
//             unique challenges and scale globally.
//           </p>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {whySpaceway.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="p-8 transition-all duration-300 border shadow-xl bg-card border-border rounded-3xl hover:shadow-2xl"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl">
//                   <AppIcon name={item.icon} size={26} className="text-primary" />
//                 </div>
//                 <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="px-4 mx-auto text-center max-w-7xl">
//           <h2 className="mb-4 text-4xl font-bold">
//             Meet Our{" "}
//             <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
//               Team
//             </span>
//           </h2>
//           <p className="mb-12 text-xl text-muted-foreground">
//             Experts from top tech companies united by one vision — to transform
//             Indian e-commerce.
//           </p>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {teamMembers.map((member, i) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="overflow-hidden border shadow-xl bg-card border-border rounded-3xl group"
//               >
//                 <div className="relative">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute transition-all duration-300 opacity-0 bottom-4 right-4 group-hover:opacity-100">
//                     <a
//                       href={member.linkedin}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="p-2 rounded-md bg-primary/20 backdrop-blur-md hover:bg-primary/30"
//                     >
//                       <AppIcon name="linkedin" size={18} className="text-white" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="p-6 text-left">
//                   <h3 className="mb-1 text-lg font-bold">{member.name}</h3>
//                   <p className="mb-3 font-medium text-primary">{member.role}</p>
//                   <p className="mb-4 text-sm text-muted-foreground">
//                     {member.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {member.expertise.map((skill) => (
//                       <span
//                         key={skill}
//                         className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Journey / Timeline */}
//       <section className="py-20">
//         <div className="px-4 mx-auto text-center max-w-7xl">
//           <h2 className="mb-4 text-4xl font-bold">
//             Our{" "}
//             <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
//               Journey
//             </span>
//           </h2>
//           <p className="mb-12 text-xl text-muted-foreground">
//             From humble beginnings to empowering thousands of sellers across
//             India.
//           </p>

//           <div className="relative space-y-12">
//             <div className="absolute hidden w-1 h-full -translate-x-1/2 rounded-full md:block left-1/2 bg-gradient-to-b from-primary to-info" />
//             {milestones.map((m, i) => (
//               <motion.div
//                 key={m.year}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className={`flex flex-col md:flex-row ${
//                   i % 2 ? "md:flex-row-reverse" : ""
//                 } items-center gap-6`}
//               >
//                 <div className="flex-1 p-8 border shadow-xl bg-card border-border rounded-3xl">
//                   <div className="flex items-center gap-4 mb-3">
//                     <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
//                       <AppIcon name={m.icon} size={20} className="text-primary" />
//                     </div>
//                     <h3 className="text-3xl font-bold">{m.year}</h3>
//                   </div>
//                   <h4 className="mb-2 text-xl font-bold">{m.title}</h4>
//                   <p className="mb-4 text-muted-foreground">{m.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {m.stats.map((stat) => (
//                       <span
//                         key={stat}
//                         className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary"
//                       >
//                         {stat}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center text-white bg-gradient-to-r from-primary to-info">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-4 text-4xl font-bold"
//         >
//           Ready to Transform Your Business?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-8 text-xl text-white/90"
//         >
//           Join thousands of successful businesses using Spaceway to grow faster.
//         </motion.p>
//         <div className="flex flex-col justify-center gap-4 sm:flex-row">
//           <Button variant="default" size="lg">
//             Start Free Trial
//           </Button>
//           <Button variant="outline" size="lg">
//             Learn More
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }



import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/ui/Button.jsx';
import AppIcon from '../components/AppIcon.jsx';
import { cn } from '../utils/cn.js'; // Your existing cn

const teamMembers = [
  {
    name: 'Arjun Mehta',
    role: 'CEO & Co-founder',
    description: 'Former Amazon executive with 12+ years in e-commerce analytics',
    image: 'https://i.pravatar.cc/400?u=arjun',
    linkedin: '#',
    expertise: ['E-commerce Strategy', 'Analytics', 'Leadership'],
  },
  {
    name: 'Priya Sharma',
    role: 'CTO & Co-founder',
    description: 'Ex-Google engineer specializing in ML and data infrastructure',
    image: 'https://i.pravatar.cc/400?u=priya2',
    linkedin: '#',
    expertise: ['Machine Learning', 'Data Engineering', 'Scalability'],
  },
  {
    name: 'Vikash Kumar',
    role: 'Head of Product',
    description: 'Product visionary with experience at Flipkart and Paytm',
    image: 'https://i.pravatar.cc/400?u=vikash1',
    linkedin: '#',
    expertise: ['Product Strategy', 'UX Design', 'Growth'],
  },
  {
    name: 'Sneha Gupta',
    role: 'VP of Engineering',
    description: 'Full-stack architect with expertise in distributed systems',
    image: 'https://i.pravatar.cc/400?u=sneha1',
    linkedin: '#',
    expertise: ['System Architecture', 'Cloud Computing', 'DevOps'],
  },
  {
    name: 'Rohit Agarwal',
    role: 'Head of Business Development',
    description: 'Strategic partnerships expert with deep marketplace knowledge',
    image: 'https://i.pravatar.cc/400?u=rohit1',
    linkedin: '#',
    expertise: ['Partnerships', 'Business Strategy', 'Market Expansion'],
  },
];

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Founded with a vision to democratize e-commerce analytics for Indian businesses',
    icon: 'rocket',
    stats: ['2 Co-founders', 'Initial Concept', 'Seed Funding'],
  },
  {
    year: '2021',
    title: 'Product Development',
    description: 'Built MVP and onboarded first 100 customers with basic analytics features',
    icon: 'code',
    stats: ['100 Customers', 'MVP Launch', '₹5Cr Revenue'],
  },
  {
    year: '2022',
    title: 'Market Expansion',
    description: 'Integrated with major marketplaces and launched automated repricing engine',
    icon: 'barChart3',
    stats: ['1K+ Customers', 'Multi-marketplace', '₹25Cr Revenue'],
  },
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Introduced ML-powered insights and predictive analytics capabilities',
    icon: 'brain',
    stats: ['5K+ Customers', 'AI Features', '₹100Cr Revenue'],
  },
  {
    year: '2024',
    title: 'Scale & Growth',
    description: 'Expanded to enterprise solutions and launched advanced BI platform',
    icon: 'award',
    stats: ['10K+ Customers', 'Enterprise Ready', '₹250Cr Revenue'],
  },
];

const whySpaceway = [
  {
    title: 'Indian Market Expertise',
    description: 'Deep understanding of Indian e-commerce ecosystem and regulatory requirements',
    icon: 'flag',
    color: 'warning', // Orange/amber
  },
  {
    title: 'Marketplace Native',
    description: 'Built specifically for multi-marketplace operations with native integrations',
    icon: 'store',
    color: 'primary', // Blue
  },
  {
    title: 'Data-Driven Insights',
    description: 'Advanced analytics and ML models trained on billions of data points',
    icon: 'barChart3',
    color: 'success', // Green
  },
  {
    title: 'Scalable Architecture',
    description: 'Cloud-native platform built to handle millions of products and transactions',
    icon: 'cloud',
    color: 'info', // Purple
  },
  {
    title: 'Customer-Centric',
    description: 'Dedicated support team and continuous feature development based on feedback',
    icon: 'heart',
    color: 'destructive', // Red
  },
  {
    title: 'Innovation First',
    description: 'Cutting-edge technology with regular updates and new feature releases',
    icon: 'lightbulb',
    color: 'warning', // Yellow/amber
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen -mt-20 transition-colors duration-300 bg-background text-foreground">
      {/* <Navigation /> */}
     
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 text-4xl font-bold md:text-6xl"
              >
                <span>Transforming</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  E-commerce
                </span>
                <br />
                <span>in India</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-4xl mx-auto text-xl text-muted-foreground"
              >
                We&apos;re on a mission to empower every Indian business with intelligent e-commerce tools that drive growth, optimize operations, and maximize profitability.
              </motion.p>
            </div>
            {/* Vision & Mission */}
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 glass-card rounded-3xl shadow-professional-xl"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 dark:bg-primary/20 rounded-2xl">
                  <AppIcon name="eye" size={32} className="text-primary" aria-hidden="true" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  To become the leading e-commerce intelligence platform in India, enabling millions of businesses to compete and thrive in the digital marketplace through data-driven insights and automated optimization.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-8 glass-card rounded-3xl shadow-professional-xl"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-info/10 dark:bg-info/20 rounded-2xl">
                  <AppIcon name="target" size={32} className="text-info" aria-hidden="true" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  To democratize advanced e-commerce analytics and automation tools, making them accessible to businesses of all sizes. We believe every entrepreneur deserves enterprise-grade tools to succeed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Why Choose Spaceway */}
        <section className="py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                <span>Why Choose</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  Spaceway
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                Built by Indians, for Indian businesses - understanding unique challenges and opportunities
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whySpaceway.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 transition-all duration-300 glass-card rounded-3xl shadow-professional-xl hover:shadow-professional-2xl"
                >
                  <div className={`w-16 h-16 bg-${item.color}/10 dark:bg-${item.color}/20 rounded-2xl flex items-center justify-center mb-6`}>
                    <AppIcon name={item.icon} size={32} className={`text-${item.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="py-20 bg-muted">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                <span>Meet Our</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  Team
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                Passionate experts from top tech companies, united by a vision to transform Indian e-commerce
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="overflow-hidden transition-all duration-300 glass-card rounded-3xl shadow-professional-xl hover:shadow-professional-2xl group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-foreground/50 to-transparent group-hover:opacity-100" />
                    <a
                      href={member.linkedin}
                      className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg opacity-0 bottom-4 right-4 bg-card/20 backdrop-blur-sm group-hover:opacity-100 hover:bg-card/30"
                      aria-label={`LinkedIn profile for ${member.name}`}
                    >
                      <AppIcon name="linkedin" size={20} className="text-background" />
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="mb-3 font-medium text-primary">
                      {member.role}
                    </p>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Timeline Section */}
        <section className="py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                <span>Our</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  Journey
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                From a small startup to serving thousands of businesses across India
              </p>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute hidden w-1 h-full transform -translate-x-1/2 rounded-full left-1/2 gradient-primary md:block" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={cn(
                      "flex items-center",
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                      "flex-col md:gap-12 gap-6"
                    )}
                  >
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className={cn(
                        "glass-card rounded-3xl p-8 shadow-professional-xl",
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      )}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl">
                            <AppIcon name={milestone.icon} size={24} className="text-primary" aria-hidden="true" />
                          </div>
                          <div className="text-3xl font-bold">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="mb-3 text-2xl font-bold">
                          {milestone.title}
                        </h3>
                        <p className="mb-6 text-muted-foreground">
                          {milestone.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {milestone.stats.map((stat) => (
                            <span
                              key={stat}
                              className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary"
                            >
                              {stat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Timeline Node */}
                    <div className="relative z-10 hidden w-4 h-4 border-4 rounded-full bg-card border-primary md:block" />
                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 gradient-primary text-primary-foreground">
          <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-xl opacity-90"
            >
              Join thousands of successful businesses already using Spaceway to maximize their e-commerce potential
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link to="/demo">
                <Button 
                  size="lg" 
                  variant="default" 
                  iconName="rocket" 
                  iconPosition="right"
                  className="group"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  size="lg" 
                  variant="outline" 
                  iconName="bookOpen" 
                  iconPosition="right"
                  className="group border-primary-foreground/50 hover:border-background hover:bg-background hover:text-foreground"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Navigation from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
// import Button from '../components/ui/Button.jsx';
// import AppIcon from '../components/AppIcon.jsx';
// import { cn } from '../utils/cn.js';

// // ✅ Import team images from src/assets/team
// import Aditya from '../assets/Aditya.jpg';
// import PriyaImg from '../assets/Spacewayy.jpg';
// import VikashImg from '../assets/Spacewayy.jpg';
// import SnehaImg from '../assets/Spacewayy.jpg';
// import RohitImg from '../assets/Spacewayy.jpg';

// const teamMembers = [
//   {
//     name: 'Aditya Raj Singh ',
//     role: 'CEO & Co-founder',
//     description: '4+ years of corporate Experience Core ML and AI Engineer',
//     image: Aditya,
//     linkedin: 'https://www.linkedin.com/in/srajaditya201/',
//     expertise: ['AI','ML','E-commerce Strategy', 'Analytics', 'Leadership'],
//   },
//   {
//     name: 'Deepak Gupta',
//     role: ' Tech Head & Co-founder',
//     description: 'Passionate developer crafting modern, scalable, and visually impressive web applications and data infrastructure',
//     image: PriyaImg,
//     linkedin: '#',
//     expertise: ['React', 'Node.js', 'Tailwind CSS', 'APIs', 'UI/UX', 'ExpressJs','Scalability'],
//   },
//   {
//     name: 'Vinit Raj',
//     role: 'Head of Devops And Data',
//     description: 'Product visionary with experience at Flipkart and Paytm',
//     image: VikashImg,
//     linkedin: '#',
//     expertise: ['Product Strategy', 'DevOps', 'Data Analysis', 'Growth'],
//   },
//   {
//     name: 'Sneha Gupta',
//     role: 'Full Stack Dev & Co-founder',
//     description: 'Full-stack architect with expertise in distributed systems',
//     image: SnehaImg,
//     linkedin: '#',
//     expertise: ['System Architecture', 'Cloud Computing', 'DevOps', 'React', 'Spring Boot'],
//   },
// //   {
// //     name: 'Rohit Agarwal',
// //     role: 'Head of Business Development',
// //     description: 'Strategic partnerships expert with deep marketplace knowledge',
// //     image: RohitImg,
// //     linkedin: '#',
// //     expertise: ['Partnerships', 'Business Strategy', 'Market Expansion'],
// //   },
// ];

// const milestones = [
//   {
//     year: '2020',
//     title: 'The Beginning',
//     description: 'Founded with a vision to democratize e-commerce analytics for Indian businesses',
//     icon: 'rocket',
//     stats: ['2 Co-founders', 'Initial Concept', 'Seed Funding'],
//   },
//   {
//     year: '2021',
//     title: 'Product Development',
//     description: 'Built MVP and onboarded first 100 customers with basic analytics features',
//     icon: 'code',
//     stats: ['100 Customers', 'MVP Launch', '₹5Cr Revenue'],
//   },
//   {
//     year: '2022',
//     title: 'Market Expansion',
//     description: 'Integrated with major marketplaces and launched automated repricing engine',
//     icon: 'barChart3',
//     stats: ['1K+ Customers', 'Multi-marketplace', '₹25Cr Revenue'],
//   },
//   {
//     year: '2023',
//     title: 'AI Integration',
//     description: 'Introduced ML-powered insights and predictive analytics capabilities',
//     icon: 'brain',
//     stats: ['5K+ Customers', 'AI Features', '₹100Cr Revenue'],
//   },
//   {
//     year: '2024',
//     title: 'Scale & Growth',
//     description: 'Expanded to enterprise solutions and launched advanced BI platform',
//     icon: 'award',
//     stats: ['10K+ Customers', 'Enterprise Ready', '₹250Cr Revenue'],
//   },
// ];

// const whySpaceway = [
//   {
//     title: 'Indian Market Expertise',
//     description: 'Deep understanding of Indian e-commerce ecosystem and regulatory requirements',
//     icon: 'flag',
//     color: 'warning',
//   },
//   {
//     title: 'Marketplace Native',
//     description: 'Built specifically for multi-marketplace operations with native integrations',
//     icon: 'store',
//     color: 'primary',
//   },
//   {
//     title: 'Data-Driven Insights',
//     description: 'Advanced analytics and ML models trained on billions of data points',
//     icon: 'barChart3',
//     color: 'success',
//   },
//   {
//     title: 'Scalable Architecture',
//     description: 'Cloud-native platform built to handle millions of products and transactions',
//     icon: 'cloud',
//     color: 'info',
//   },
//   {
//     title: 'Customer-Centric',
//     description: 'Dedicated support team and continuous feature development based on feedback',
//     icon: 'heart',
//     color: 'destructive',
//   },
//   {
//     title: 'Innovation First',
//     description: 'Cutting-edge technology with regular updates and new feature releases',
//     icon: 'lightbulb',
//     color: 'warning',
//   },
// ];

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
//       <Navigation />

//       <div className="pt-20">
//         {/* Hero Section */}
//         <section className="py-20 gradient-hero">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-6 text-4xl font-bold md:text-6xl"
//             >
//               <span>Transforming </span>
//               <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
//                 E-commerce
//               </span>
//               <br />
//               <span>in India</span>
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="max-w-4xl mx-auto text-xl text-muted-foreground"
//             >
//               We&apos;re on a mission to empower every Indian business with intelligent e-commerce tools that drive
//               growth, optimize operations, and maximize profitability.
//             </motion.p>
//           </div>
//         </section>

//         {/* Why Choose Spaceway */}
//         <section className="py-20">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="mb-16 text-center">
//               <h2 className="mb-4 text-4xl font-bold">
//                 <span>Why Choose </span>
//                 <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">Spaceway</span>
//               </h2>
//               <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
//                 Built by Indians, for Indian businesses — understanding unique challenges and opportunities
//               </p>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {whySpaceway.map((item, index) => (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -8, scale: 1.02 }}
//                   className="p-8 transition-all duration-300 glass-card rounded-3xl shadow-professional-xl hover:shadow-professional-2xl"
//                 >
//                   <div
//                     className={`w-16 h-16 bg-${item.color}/10 dark:bg-${item.color}/20 rounded-2xl flex items-center justify-center mb-6`}
//                   >
//                     <AppIcon name={item.icon} size={32} className={`text-${item.color}`} />
//                   </div>
//                   <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
//                   <p className="leading-relaxed text-muted-foreground">{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="py-20 bg-muted">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="mb-16 text-center">
//               <h2 className="mb-4 text-4xl font-bold">
//                 <span>Meet Our </span>
//                 <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">Team</span>
//               </h2>
//               <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
//                 Passionate experts from top tech companies, united by a vision to transform Indian e-commerce
//               </p>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {teamMembers.map((member, index) => (
//                 <motion.div
//                   key={member.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -8, scale: 1.02 }}
//                   className="overflow-hidden transition-all duration-300 glass-card rounded-3xl shadow-professional-xl hover:shadow-professional-2xl group"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={`${member.name}, ${member.role}`}
//                       className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-foreground/50 to-transparent group-hover:opacity-100" />
//                     <a
//                       href={member.linkedin}
//                       className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg opacity-0 bottom-4 right-4 bg-card/20 backdrop-blur-sm group-hover:opacity-100 hover:bg-card/30"
//                       aria-label={`LinkedIn profile for ${member.name}`}
//                     >
//                       <AppIcon name="linkedin" size={20} className="text-background" />
//                     </a>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
//                     <p className="mb-3 font-medium text-primary">{member.role}</p>
//                     <p className="mb-4 text-sm text-muted-foreground">{member.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {member.expertise.map((skill) => (
//                         <span
//                           key={skill}
//                           className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Timeline Section and CTA stay unchanged */}
//         {/* ... (keep your original milestone and CTA code here) ... */}
//       </div>

//       <Footer />
//     </div>
//   );
// }
