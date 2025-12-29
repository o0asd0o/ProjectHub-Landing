import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mb-8 md:mb-16 flex flex-col items-center px-4 md:px-6 lg:px-0">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold py-6 md:py-10">
        FAQ
      </h1>
      <div className="w-full max-w-[900px]">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-sm md:text-base lg:text-lg hover:no-underline">
              What is ProjectHub?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
              ProjectHub is an all-in-one project management platform designed
              to help teams collaborate, track progress, and deliver projects on
              time. With features like task management, real-time updates, and
              powerful analytics, ProjectHub empowers teams of all sizes to work
              smarter and achieve their goals faster.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-sm md:text-base lg:text-lg hover:no-underline">
              How do I sign up for ProjectHub?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
              You can sign up for ProjectHub by visiting our website and
              clicking on the &quot;Sign Up&quot; button. Follow the
              instructions to create your account and get started
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-sm md:text-base lg:text-lg hover:no-underline">
              Is there a trial available?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
              Yes! We offer a 14-day free trial with full access to all
              features. No credit card required to get started. Simply sign up
              and explore everything ProjectHub has to offer. If you love it,
              you can upgrade to a paid plan anytime during or after your trial.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-sm md:text-base lg:text-lg hover:no-underline">
              Can I manage multiple projects with ProjectHub?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
              Absolutely! ProjectHub is built for teams juggling multiple
              projects. You can create unlimited projects, organize them into
              workspaces, and easily switch between them. Our dashboard gives
              you a bird&apos;s-eye view of all your projects so nothing falls
              through the cracks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-sm md:text-base lg:text-lg hover:no-underline">
              How does the collaboration feature work?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
              ProjectHub&apos;s collaboration feature allows team members to
              communicate through comments, share files, and update tasks in
              real-time. You can also use the integrated chat function to keep
              in touch with your team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
