import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mb-16 flex flex-col items-center">
      <h1 className="text-center text-[46px] font-bold py-10">FAQ</h1>
      <div className="w-full max-w-[900px]">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is ProjectHub?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              itaque dignissimos animi consequatur excepturi accusamus deleniti
              cum nobis, assumenda, quos ad eum. Deleniti, suscipit? Alias
              impedit ad veniam laboriosam recusandae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I sign up for ProjectHub?
            </AccordionTrigger>
            <AccordionContent>
              You can sign up for ProjectHub by visiting our website and
              clicking on the &quot;Sign Up&quot; button. Follow the
              instructions to create your account and get started
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a trial available?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              dolores reiciendis culpa praesentium quo, voluptates provident
              hic, ipsa assumenda quibusdam magni beatae odio, ex accusamus.
              Dolores consequatur obcaecati eos unde!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I manage multiple projects with ProjectHub?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              dolores reiciendis culpa praesentium quo, voluptates provident
              hic, ipsa assumenda quibusdam magni beatae odio, ex accusamus.
              Dolores consequatur obcaecati eos unde!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How does the collaboration feature work?
            </AccordionTrigger>
            <AccordionContent>
              ProjectHub&apos;s collaboration feature allows team members to
              communicate through comments, share files, and update tasks in
              real-time. You can also use the integrated chat function t okeep
              in touch with your team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
