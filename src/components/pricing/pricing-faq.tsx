import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PRICING_FAQS = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will apply at your next billing date.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual Enterprise plans. All payments are securely processed through Stripe.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Yes! All paid plans come with a 14-day free trial. No credit card is required to start your trial. You'll have full access to all features during the trial period.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "When your trial ends, you can choose to subscribe to a paid plan or continue with our Free plan. Your data will be preserved, but you may lose access to premium features if you don't upgrade.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer:
      "Yes, we offer special pricing for qualified nonprofit organizations, educational institutions, and open-source projects. Contact our sales team to learn more about eligibility and discounts.",
  },
  {
    question: "How does per-user pricing work?",
    answer:
      "You only pay for active team members who have access to your workspace. Guest users and viewers may have different pricing depending on your plan. You can add or remove users at any time, and billing adjusts accordingly.",
  },
  {
    question: "What's included in Enterprise support?",
    answer:
      "Enterprise customers receive 24/7 priority support, a dedicated account manager, custom onboarding and training sessions, and an SLA guarantee of 99.99% uptime. We also offer on-premise deployment options for Enterprise clients.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings. You'll continue to have access to your paid features until the end of your current billing period. We don't offer refunds for partial months.",
  },
];

const PricingFaq: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Everything you need to know about our pricing and plans.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="multiple" className="w-full">
          {PRICING_FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-sm md:text-base lg:text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PricingFaq;
