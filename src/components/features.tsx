import {
  BriefcaseBusiness,
  Clock,
  Settings,
  Sheet,
  Users,
  Workflow,
} from "lucide-react";
import React from "react";

const FEATURES = [
  {
    title: "Kanban view",
    icon: <Sheet className="text-white" />,
    text: `Stay informed and make data-driven decisions. Get real-time
              insiges into campaign performance. Monitor open rates,
              click-through rates, convesions, and revenue generated.`,
  },
  {
    title: "Improve collaboration",
    icon: <Users className="text-white" fill="white" />,
    text: `Boost teamwork with tools for seamless communication and task 
              management. Share files, track discussions, and stay aligned to
              achive project goals efficiently.`,
  },
  {
    title: "Delivery projects on time, every time",
    icon: <Clock className="text-white" />,
    text: `Ensure timely projec completion with features for deadline tracking, and progress monitoring. 
              Keep your team on schedule and meet every deadline with confidence.`,
  },
  {
    title: "Butler Automation",
    icon: <Settings className="text-white" />,
    text: `Streamline your workflow with Butler Automation. Automate repetitve tasks, set up 
              custom triggers, and Butler handle the heavy liftling, team can focus on what really matters`,
  },
  {
    title: "Workflows",
    icon: <Workflow className="text-white" />,
    text: `Optimize processes with customizable workflows. Define and automate project steps to ensure consistency, 
              improve efficiency, and keep your team aligned from start to finish.`,
  },
  {
    title: "Enterprise",
    icon: <BriefcaseBusiness className="text-white" />,
    text: `Empower large teams with robust project management features tailored for enterprise needs. 
              Ensure scalability, security, and compliance while streamlinig workflows.`,
  },
];

const Features: React.FC = () => {
  return (
    <div className="flex w-full bg-[#f9f9f9] items-center flex-col pb-8 md:pb-16">
      <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-0">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold py-6 md:py-10">
          Features and Benefits
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {FEATURES.map((item) => (
            <div className="bg-white rounded-xl p-6 md:p-8" key={item.title}>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 items-start sm:items-center">
                <div className="bg-[#3b68ff] p-3 md:p-5 rounded-full flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                  {item.title}
                </span>
              </div>
              <p className="mt-4 md:mt-5 text-sm md:text-md text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
