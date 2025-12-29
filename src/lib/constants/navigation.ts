/**
 * Navigation links used in header and footer
 */

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Main navigation links for header
 */
export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Learn", href: "/learn" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
];

/**
 * Footer navigation sections
 */
export interface FooterSection {
  title: string;
  items: string[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    items: [
      "Product tour",
      "Pricing",
      "Templates",
      "Apps & Integrations",
      "Task management",
      "Wrike Status",
      "Gantt charts",
      "Security",
      "API",
    ],
  },
  {
    title: "Solutions",
    items: [
      "All Teams",
      "Marketing",
      "Creative",
      "Project Management",
      "Product Development",
      "Business Operations",
      "Professional Services",
      "Students",
    ],
  },
  {
    title: "Resources",
    items: [
      "Help Center",
      "Community",
      "Webinars",
      "Interactive Training",
      "Support",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Careers",
      "ProjectHub",
      "Our Customers",
      "Blog",
      "Events",
      "Newsroom",
      "Partner Program",
      "User Conference",
      "Contact Us",
    ],
  },
  {
    title: "Platform",
    items: [
      "Platform Overview",
      "Integrations",
      "Extensions",
      "App Building",
      "AI",
      "Connected Data",
      "See More",
    ],
  },
];

/**
 * Social media links
 */
export interface SocialLink {
  name: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "twitter", href: "https://twitter.com/projecthub" },
  { name: "linkedin", href: "https://linkedin.com/company/projecthub" },
  { name: "facebook", href: "https://facebook.com/projecthub" },
  { name: "instagram", href: "https://instagram.com/projecthub" },
];
