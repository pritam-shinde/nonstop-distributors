const metaDetails = {
  home: {
    title: "NonStop Distributors | FMCG Distribution & Supply Chain Solutions",
    description:
      "NonStop Distributors provides reliable FMCG distribution, logistics, and supply chain solutions across metropolitan and tier-2 and tier-3 markets with efficient delivery and strong infrastructure.",
    canonical: "https://nonstop-distributors.vercel.app/",
  },

  services: {
    title: "Our Services | Distribution, Logistics & Supply Chain Solutions",
    description:
      "Explore our full-scale distribution, logistics, and supply chain services designed to ensure timely delivery, product integrity, and seamless market reach across regions.",
    canonical: "https://nonstop-distributors.vercel.app/services/",
  },

  "about-us": {
    title: "About Us | NonStop Distributors",
    description:
      "Learn about NonStop Distributors, our mission, infrastructure, and commitment to delivering efficient distribution and supply chain solutions across diverse markets.",
    canonical: "https://nonstop-distributors.vercel.app/about-us/",
  },

  "contact-us": {
    title: "Contact Us | NonStop Distributors",
    description:
      "Get in touch with NonStop Distributors for reliable distribution and logistics services. Reach out to our team for business inquiries and partnerships.",
    canonical: "https://nonstop-distributors.vercel.app/contact-us/",
  },

  "terms-and-conditions": {
    title: "Terms and Conditions | NonStop Distributors",
    description:
      "Read the terms and conditions governing the use of NonStop Distributors website and services, including policies, responsibilities, and legal guidelines.",
    canonical: "https://nonstop-distributors.vercel.app/terms-and-conditions/",
  },

  "privacy-policy": {
    title: "Privacy Policy | NonStop Distributors",
    description:
      "Understand how NonStop Distributors collects, uses, and protects your personal information in accordance with our privacy policy.",
    canonical: "https://nonstop-distributors.vercel.app/privacy-policy/",
  },

  blog: {
    title: "Blog | Insights on Distribution, Logistics & Supply Chain",
    description:
      "Explore insights, trends, and expert knowledge on distribution, logistics, and supply chain management to help your business grow and scale efficiently.",
    canonical: "https://nonstop-distributors.vercel.app/blog/",
  },

  careers: {
    title: "Careers | Join NonStop Distributors",
    description:
      "Join NonStop Distributors and build your career in distribution, logistics, and supply chain. Explore opportunities to grow with a dynamic and driven team.",
    canonical: "https://nonstop-distributors.vercel.app/careers/",
  },

  "our-team": {
    title: "Our Team | NonStop Distributors",
    description:
      "Meet the team behind NonStop Distributors. Our experienced professionals drive efficient distribution, logistics, and supply chain operations across regions.",
    canonical: "https://nonstop-distributors.vercel.app/our-team/",
  },

  "not-found": {
    title: "Page Not Found | NonStop Distributors",
    description:
      "The page you are looking for does not exist. Explore NonStop Distributors services or return to the homepage.",
    canonical: "https://nonstop-distributors.vercel.app/404/",
  },
};

export function handlerMetaDetails(key) {
  const data = metaDetails[key];

  if (!data) {
    return {
      title: "Nonstop Distribution",
      description: "Default meta description",
      alternates: { canonical: "https://nonstop-distributors.vercel.app/" },
      robots: "noindex, nofollow",
      openGraph: {
        title: "Nonstop Distribution",
        description: "Default Open Graph description",
        type: "website",
        url: "https://nonstop-distributors.vercel.app/",
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
    robots: data.robots || "noindex, nofollow",
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
