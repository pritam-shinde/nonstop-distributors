const metaDetails = {
  home: {
    title: "Nonstop Distribution | Trusted FMCG & Goods Distributor in India",
    description:
      "Nonstop Distribution is a reliable goods and FMCG distribution company in India, ensuring efficient supply chain management, timely deliveries, and strong market reach across the city.",
    canonical: "https://homesteadexperts.com/",
  },

  "about-us": {
    title: "About Nonstop Distribution | Reliable Goods Distributor in India",
    description:
      "Learn about Nonstop Distribution, a trusted Indian distribution company delivering excellence in FMCG, consumer goods, and supply chain operations with a commitment to growth and reliability.",
    canonical: "https://homesteadexperts.com/about/",
  },

  "contact-us": {
    title: "Contact Nonstop Distribution | FMCG & Goods Distribution Partner",
    description:
      "Looking for a dependable goods distribution partner in India? Contact Nonstop Distribution for efficient FMCG distribution, logistics support, and business collaboration.",
    canonical: "https://homesteadexperts.com/contact/",
  },

  services: {
    title: "Distribution Services | FMCG & Goods Supply Chain Solutions",
    description:
      "Discover Nonstop Distribution’s services including FMCG distribution, inventory management, logistics coordination, and last-mile delivery solutions across the city.",
    canonical: "https://homesteadexperts.com/services/",
  },

  "not-found": {
    title: "Page Not Found | Nonstop Distribution",
    description:
      "The page you’re looking for doesn’t exist. Visit the Nonstop Distribution homepage to explore our FMCG and goods distribution services in India.",
    canonical: "https://homesteadexperts.com/404/",
  },
};

export function handlerMetaDetails(key) {
    const data = metaDetails[key];

    if (!data) {
        return {
            title: "Nonstop Distribution",
            description: "Default meta description",
            alternates: { canonical: "https://homesteadexperts.com/" },
            robots: "index, follow",
            openGraph: {
                title: "Nonstop Distribution",
                description: "Default Open Graph description",
                type: "website",
                url: "https://homesteadexperts.com/",
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