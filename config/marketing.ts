import { Icons } from "@/components/layout/icons";
import { MarketingConfig } from "@/types";
import { time } from "console";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Articles",
      href: "/posts",
    },
  ],
};

export const homeConfig = {
  heading: "From idea to MVP, on time, within budget",
  subHeading: "Custom digital products for business builders and innovators.",
  btnText: "Get started",
  btnURL: "/pricing",
  featureBtnText: "Contact sales",
  featureBtnUrl: "#booking",
};

export const featuresConfig = {
  description:
    "We bring ideas to market fast.",
  features: [
    {
      title: "Fully functional MVP in as fast as 8 weeks",
      description:
        "Plan confidently, knowing your timeline is set from day one.",
      icons: [Icons.proportions, Icons.syringe, Icons.draftingCompass],
    },
    {
      title: "In budget, starting at 5K",
      description:
        "No surprises, just clear, upfront costs for hassle-free planning.",
      icons: [Icons.boxes, Icons.ganttChart, Icons.target],
    },
  ],
  extraValue:
    "Full Stack Tech also offers 24/7 Support to meet your organization's response needs",
};

export const ideasConfig = {
  description: "What do you want to build?",
  project: [
    {
      title: "An e-commerce store",
      budget: "15k",
      timeline: "8 weeks",
    },
    {
      title: "An AI powered learning management system",
      budget: "25k",
      timeline: "12 weeks",
    },
  {
    title: "An AI powered supply chain management system",
    budget: "50k",
    timeline: "18 weeks",
  },
  ]
}

export const bookingConfig = {
  title: "Get Started",
  subtitle: "Let's figure out how to build this product together.",
};
