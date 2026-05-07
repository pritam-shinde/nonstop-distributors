import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { handlerMetaDetails } from "@/constants/seo";
import Banner8Contact from "@/sections/home/Banner8Contact";
import ContactPageLayout from "./ContactPageLayout";
import {
  CONTACT_SUBMISSION_COOKIE,
  isContactSubmissionFresh,
  parseContactSubmission,
} from "@/lib/contactSubmissionCookie";

export const generateMetadata = () => {
  return handlerMetaDetails("contact-us");
};

const Contact = async () => {
  const cookieStore = await cookies();
  const submission = parseContactSubmission(
    cookieStore.get(CONTACT_SUBMISSION_COOKIE)?.value,
  );

  if (isContactSubmissionFresh(submission)) {
    redirect("/contact-us/thank-you");
  }

  return (
    <ContactPageLayout>
      <Banner8Contact />
    </ContactPageLayout>
  );
};

export default Contact;
