import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqConfig = [
  {
    question: "Do you also offer design services?",
    answer: "Yes! We love doing UI design and occasionally help clients with design tasks. Let us know what you need and we can either help you ourselves or get a designer from our network to collaborate with us on your project."
  },
  {
    question: "How much will my project cost?",
    answer: "You'll be disappointed to hear this, but: it depends! The best way to find out, is to contact me, tell me more about your project and get a free proposal from me."
  },
  {
    question: "Which CMS do you use?",
    answer: "I really enjoy using Sanity.io for its great built-in components and data types. I love that it's headless, schema-based and super extensible."
  },
  {
    question: "Which frameworks do you use?",
    answer: "My go-to frameworks these days are React, Next.js and Node.js. Of course not every project requires a framework and some projects might call for other frameworks than the ones I mentioned. Like most other technical decisions, a framework choice comes with pros and cons that must be evaluated against what your project's goals are."
  },
  {
    question: "What's your hourly rate?",
    answer: "I prefer working on a fixed-price basis. This way, you know exactly what you're getting, how much it's gonna cost you and when it will be delivered. It also incentivizes me to work quickly and deliver your project as fast as possible."
  },
  {
    question: "Do you use TypeScript?",
    answer: "Yes, I build most projects (except super simple ones) in TypeScript. I'm also very comfortable with plain old JavaScript and you can go a long way with good tests, development practices and linting setups."
  }
];

export const FAQSection = () => {
  return (
    <Accordion type="single" collapsible>
      {faqConfig.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};