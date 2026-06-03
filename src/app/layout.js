import { Montserrat, Merriweather } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

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
    "@graph": [
        {
            "@type": "LocalBusiness",
            "name": "Nonstop Distributors",
            "url": "https://www.nonstopdistributors.com/",
            "description": "Nonstop Distributors offers reliable FMCG distribution services in Nagpur including retail coverage, logistics, supply chain, and e-commerce distribution.",
            "telephone": "8956641833",
            "logo": "https://www.nonstopdistributors.com/assets/distributor-img/nonstop-distributor-light.png",
            "@id": "https://www.nonstopdistributors.com/contact-us/",
            "image": "https://www.nonstopdistributors.com/assets/distributor-img/why-choose-nonstop-distributor.jpg",
            "identifier": [
                "https://www.google.com/search?q=NONSTOP+DISTRIBUTORS&oq=NONSTOP+DISTRIBUTORS&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYPNIBBzg0NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&sei=6zYZatfVHtKA1e8PytDcgQs"
            ],
            "alternateName": [
                "Distribution Services",
                "FMCG Distributors",
                "Logistics & Supply Chain",
                "Logistics and Supply Chain Management",
                "E Commerce Distribution",
                "E Commerce Distribution Business"
            ],
            "hasMap": "https://maps.app.goo.gl/1iv3UuhDnzHutmpd6",
            "currenciesAccepted": "INR",
            "priceRange": "₹₹",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "97 Crown Society, Chinchbhavan, Wardha Rd, near Bhawan's School",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "postalCode": "440005",
                "addressCountry": "IN"
            },
            "openingHours": [
                "Mon 10:00-19:00",
                "Tus 10:00-19:00",
                "Wed 10:00-19:00",
                "Thurs 10:00-19:00",
                "Fri 10:00-19:00",
                "Sat 10:00-19:00"
            ],
            "disambiguatingDescription": "Nonstop Distributors is a leading FMCG distribution company based in Nagpur, Maharashtra, specializing in connecting premium consumer brands with major retail and sales channels across Central India. With expertise in food, beverages, personal care, household essentials, and stationery categories, the company focuses on efficient supply chain management, strong retailer relationships, and market expansion strategies. Nonstop Distributors partners with trusted brands to ensure seamless product availability, operational excellence, and sustainable business growth.",
            "mainEntityOfPage": "https://www.nonstopdistributors.com/",
            "sameAs": [
                "https://maps.app.goo.gl/1iv3UuhDnzHutmpd6",
                "https://www.facebook.com/people/Nonstop-Distributors/61584965491773/",
                "https://www.instagram.com/nonstopdistributors/",
                "https://www.linkedin.com/company/nonstop-distributors/",
                "https://x.com/NonstopDistrib/"
            ],
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.072836,
                "longitude": 79.06571
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "5"
            },
            "areaServed": [
                "IN",
                "MH",
                "Nagpur"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "FMCG products distributors",
                "@id": "https://www.nonstopdistributors.com/contact-us/",
                "additionalType": "FMCG distributor services",
                "url": "https://www.nonstopdistributors.com/services/",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": [
                            {
                                "@type": "Service",
                                "name": "Distribution Partner",
                                "@id": "https://www.nonstopdistributors.com/partners/",
                                "url": "https://www.nonstopdistributors.com/partners/",
                                "description": "Nonstop Distributors collaborates with FMCG brands and partners to provide efficient distribution, retail coverage, and supply chain support."
                            },
                            {
                                "@type": "WebSite",
                                "publisher": {
                                    "@id": "https://maps.app.goo.gl/1iv3UuhDnzHutmpd6"
                                },
                                "name": "Nonstop Distributors",
                                "@id": "https://www.nonstopdistributors.com/",
                                "url": "https://www.nonstopdistributors.com/",
                                "keywords": [
                                    "FMCG distributor in Nagpur",
                                    "Supply Solutions",
                                    "Full-Scale Distribution",
                                    "Logistics & Supply Chain",
                                    "Retail Coverage Services",
                                    "E-commerce Distribution",
                                    "FMCG distribution partner"
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="google-site-verification"
                    content="_yVgwCQ3UWp_ThlNfpLoGVWqvZXg9wmLZlb00TcgJIw"
                />
                <meta
                    name="dmca-site-verification"
                    content="T3BmN2FQRzhuVWJualVHbENDUHBFYlU5UzREa1lMU09acVd6QjJsTmdQdz01"
                />
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
                {/* <!-- Google Tag Manager --> */}
                <Script id="gtm-script" strategy="lazyOnload">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WSX2Q6XK');`}
                </Script>
                {/* <!-- End Google Tag Manager --> */}
            </head>
            <body className={`${montserrat.variable} ${merriweather.variable} custom-cursor`}>
                {/* <!-- Google Tag Manager (noscript) --> */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WSX2Q6XK"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* <!-- End Google Tag Manager (noscript) --> */}
                
                {/* Ga4 */}
                <GoogleAnalytics gaId="G-JL2XDJ14FE" />

                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
