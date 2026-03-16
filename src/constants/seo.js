const metaDetails = {
  home: {
    title: "FMCG Distributors in Nagpur - Nonstop Distributors",
    description:
      "Nonstop Distributors is a trusted FMCG distributor in Nagpur offering reliable supply, quality products, and smooth distribution services for retailers.",
    canonical: "https://www.nonstopdistributors.com/",
  },

  services: {
    title: "FMCG Distribution Services in Nagpur - Nonstop Distributors",
    description:
      "Nonstop Distributors offers reliable FMCG distribution services in Nagpur including retail coverage, logistics, supply chain, and e-commerce distribution.",
    canonical: "https://www.nonstopdistributors.com/services/",
  },

  "about-us": {
    title: "About Us - Nonstop Distributors Nagpur",
    description:
      "Nonstop Distributors is a trusted FMCG distributor in Nagpur delivering reliable supply, strong retail connections, and efficient distribution services.",
    canonical: "https://www.nonstopdistributors.com/about-us/",
  },

  "contact-us": {
    title: "Contact FMCG Distributors in Nagpur - Nonstop Distributor",
    description:
      "Reach out to Nonstop Distributors for professional FMCG distribution services in Nagpur including retail coverage, logistics, and supply chain support.",
    canonical: "https://www.nonstopdistributors.com/contact-us/",
  },

  "terms-and-conditions": {
    title: "Terms & Conditions - Nonstop Distributors",
    description:
      "Review the Terms and Conditions of Nonstop Distributors outlining website use, legal responsibilities, and policies for visitors using our site.",
    canonical: "https://www.nonstopdistributors.com/terms-and-conditions/",
  },

  "privacy-policy": {
    title: "Privacy Policy - Nonstop Distributors",
    description:
      "Read the Privacy Policy of Nonstop Distributors to learn how we collect, use, and protect your personal information when using our website and services.",
    canonical: "https://www.nonstopdistributors.com/privacy-policy/",
  },

  blog: {
    title: "Blog | Insights on Distribution, Logistics & Supply Chain",
    description:
      "Explore insights, trends, and expert knowledge on distribution, logistics, and supply chain management to help your business grow and scale efficiently.",
    canonical: "https://www.nonstopdistributors.com/blog/",
  },

  careers: {
    title: "FMCG Careers in Nagpur - Nonstop Distributors",
    description:
      "Join Nonstop Distributors and build your career in FMCG distribution. Explore opportunities in sales, logistics, supply chain, and retail distribution.",
    canonical: "https://www.nonstopdistributors.com/careers/",
  },

  "our-team": {
    title: "Our Team | NonStop Distributors",
    description:
      "Meet the team behind NonStop Distributors. Our experienced professionals drive efficient distribution, logistics, and supply chain operations across regions.",
    canonical: "https://www.nonstopdistributors.com/our-team/",
  },

  partners: {
    title: "Our FMCG Brand Partners - Nonstop Distributors",
    description:
      "Nonstop Distributors collaborates with FMCG brands and partners to provide efficient distribution, retail coverage, and supply chain support.",
    canonical: "https://www.nonstopdistributors.com/partners/",
  },

  "not-found": {
    title: "Page Not Found | NonStop Distributors",
    description:
      "The page you are looking for does not exist. Explore NonStop Distributors services or return to the homepage.",
    canonical: "https://www.nonstopdistributors.com/404",
    robots: "noindex, nofollow",
  },
};

export function handlerMetaDetails(key) {
  const data = metaDetails[key];

  if (!data) {
    return {
      title: "Nonstop Distribution",
      description: "Default meta description",
      alternates: { canonical: "https://www.nonstopdistributors.com/" },
      robots: "noindex, nofollow",
      openGraph: {
        title: "Nonstop Distribution",
        description: "Default Open Graph description",
        type: "website",
        url: "https://www.nonstopdistributors.com/",
      },
      twitter: {
        title: "Nonstop Distribution",
        description: "Default Twitter description",
        card: "summary_large_image",
      },
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: data.canonical,
    },
    robots: data.robots || "index, follow",
    openGraph: {
      title: data.og_title || data.title,
      description: data.og_description || data.description,
      type: data.og_type || "website",
      url: data.og_url || data.canonical,
      ...(data.og_image ? { images: [data.og_image] } : {}),
    },
    twitter: {
      title: data.twitter_title || data.title,
      description: data.twitter_description || data.description,
      card: data.twitter_card || "summary_large_image",
      ...(data.twitter_site ? { site: data.twitter_site } : {}),
    },
  };
}
