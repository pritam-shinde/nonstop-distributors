import { Montserrat, Merriweather } from "next/font/google";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Configure fonts
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700", "800"], // Regular, Bold, ExtraBold
    variable: "--font-montserrat",
    display: "swap",
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["700"], // Bold only (for subheads)
    variable: "--font-merriweather",
    display: "swap",
});

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nonstop Distributors",
    url: "https://nonstopdistributors.com/",
    logo: "https://nonstopdistributors.com/assets/distributor-img/nonstop-distributor-light.png",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 89566 41833",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "Marathi", "Hindi"],
    },
    sameAs: [
        "https://www.facebook.com/people/NonStop-Distributors/61584965491773/",
        "https://www.instagram.com/nonstopdistributors/",
        "https://www.linkedin.com/company/nonstop-distributors/",
        "https://x.com/NonstopDistrib/",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* SiteSchema */}
                <script
                    id="site-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />

                {/* favicons */}
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* <meta
          name="description"
          content="Nonstop Distributors provides trusted distribution services, connecting businesses with certified specialists across all distribution fields."
        /> */}

                {/* vendor CSS */}
                <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/vendors/bootstrap-select/bootstrap-select.min.css" />
                <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
                <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
                <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
                <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
                <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
                <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
                <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.css" />
                <link rel="stylesheet" href="/assets/vendors/procounsel-icons/style.css" />
                <link rel="stylesheet" href="/assets/vendors/slick/slick.css" />
                <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css" />

                {/* template styles */}
                <link rel="stylesheet" href="/assets/css/procounsel-dark.css" />
                <link rel="stylesheet" href="/assets/css/procounsel.css" />
            </head>
            <body className={`${montserrat.variable} ${merriweather.variable} custom-cursor`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}