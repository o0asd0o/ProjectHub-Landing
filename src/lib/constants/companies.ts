/**
 * Company/partner logo data used throughout the site
 * for trusted companies sections and integration showcases
 */

export interface Company {
  name: string;
  logo: string;
}

export interface MarqueeCompany extends Company {
  width: number;
}

/**
 * Primary trusted companies displayed in major sections
 */
export const TRUSTED_COMPANIES: Company[] = [
  { name: "Apple", logo: "/companies/apple.png" },
  { name: "Samsung", logo: "/companies/samsung.png" },
  { name: "Shell", logo: "/companies/shell.png" },
  { name: "Ford", logo: "/companies/ford.png" },
  { name: "Verizon", logo: "/companies/verizon.png" },
  { name: "Citigroup", logo: "/companies/citigroup.png" },
];

/**
 * Extended list for trustees/partners marquee section on home page
 * Includes width for marquee display sizing
 */
export const PARTNER_COMPANIES: MarqueeCompany[] = [
  { name: "Ford", logo: "/companies/ford.png", width: 85 },
  { name: "Shell", logo: "/companies/shell.png", width: 50 },
  { name: "Apple", logo: "/companies/apple.png", width: 40 },
  { name: "Volkswagen", logo: "/companies/volkswagon.png", width: 40 },
  { name: "CNPC", logo: "/companies/cnpc.png", width: 40 },
  { name: "Phillips 66", logo: "/companies/phillips66.png", width: 40 },
  { name: "Huawei", logo: "/companies/huawei.png", width: 42 },
  { name: "Sinopec", logo: "/companies/sinopec.png", width: 42 },
];

/**
 * Integration partners for product page
 */
export const INTEGRATION_PARTNERS: Company[] = [
  { name: "Apple", logo: "/companies/apple.png" },
  { name: "Samsung", logo: "/companies/samsung.png" },
  { name: "Shell", logo: "/companies/shell.png" },
  { name: "Ford", logo: "/companies/ford.png" },
  { name: "Huawei", logo: "/companies/huawei.png" },
  { name: "Honda", logo: "/companies/honda.png" },
];
