import { handlerMetaDetails } from "@/constants/seo";
import FAQSection from "@/components/FAQSection";
import NewsLetter from "@/components/NewsLetter";
import ScriptsLoader from "@/components/ScriptsLoader";

export const generateMetadata = () => {
  return handlerMetaDetails("faq");
};

const faqData = [
  {
    question: "What kind of businesses do you usually work with?",
    answer: "From your neighbourhood kirana store to supermarkets, hotels, cafes, restaurants, and wholesalers, if your business runs on FMCG products, you're exactly who we work with."
  },
  {
    question: "Can I place bulk orders for my retail store?",
    answer: "Yes, and that's honestly where we do our best work. Whether you need weekly restocking or a one-time large order, Nonstop Distributors make sure products reach you on time without the usual back-and-forth."
  },
  {
    question: "Do you help new brands enter the local market?",
    answer: "We do, and we enjoy it. Getting a new brand off the ground is tough: finding the right retailers, building trust, getting shelf space. Nonstop Distributors helped brands in Nagpur do exactly that through our existing network, so you don't have to start from scratch."
  },
  {
    question: "How quickly can orders be delivered?",
    answer: "We won't give you a number we can't back up; delivery depends on where you are and how large the order is. What we can promise is that we don't sit on orders. Once it's placed, we move."
  },
  {
    question: "Do you only supply products in Nagpur?",
    answer: "Nagpur is our home base, but we serve businesses across Maharashtra too. If you're nearby or elsewhere in the state, reach out, and we'll figure out the logistics together."
  },
  {
    question: "What types of products can I source through your distribution network?",
    answer: "We deal in multiple FMCG categories, including groceries, beverages, snacks, personal care products, household essentials, and other fast-moving consumer goods."
  },
  {
    question: "Can restaurants and cafes partner with your company?",
    answer: "Many of our current partners run restaurants and cafes, and it works really well. You've got enough on your plate running the kitchen; the last thing you need is to worry about whether your supplies will show up."
  },
  {
    question: "Why should I choose a local FMCG distributor instead of ordering from multiple vendors?",
    answer: "Ask anyone who's dealt with three or four vendors at once, and it's a mess. Wrong quantities, missed deliveries, nobody to call when something goes wrong. One distributor means one relationship, one call, and a lot fewer headaches."
  },
  {
    question: "Do you offer long-term supply partnerships for growing businesses?",
    answer: "Yes, and that's genuinely what Nonstop Distributors are here for. A one-time order is fine, but what we really want is to be the distributor you call without thinking twice, month after month, as your business gets bigger."
  },
  {
    question: "How can I get started with Nonstop Distributors?",
    answer: "Send us a message on our website, or call us and just tell us what you need. No forms to fill out, no long process. We'll have a quick chat, understand your requirements, and go from there."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

const FAQPage = () => {
  return (
    <>
      <script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/distributor-img/faq-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2">
              HELP <span className="fw-bold read-more-btn"> SUPPORT</span>
            </p>
            <h1 className="">Frequently Asked Questions</h1>
            <div>
              <p style={{ marginBottom: "0px" }}>
                Have questions about our distribution network, services, or how we partner <br /> with brands and retailers? Find the answers here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <div style={{ background: "#0E222A", paddingTop: "80px", paddingBottom: "80px" }}>
        <FAQSection faqData={faqData} title="Frequently Asked Questions" />
      </div>

      <NewsLetter />
      <ScriptsLoader />
    </>
  );
};

export default FAQPage;
