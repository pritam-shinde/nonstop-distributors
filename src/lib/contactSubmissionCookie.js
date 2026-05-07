export const CONTACT_SUBMISSION_COOKIE = "contact_submission";
export const CONTACT_SUBMISSION_MAX_AGE = 60 * 5;

export function serializeContactSubmission(payload) {
  return JSON.stringify({
    fullname: payload.fullname || "",
    companyname: payload.companyname || "",
    email: payload.email || "",
    phonenumber: payload.phonenumber || "",
    enquiryType: payload.enquiryType || "",
    subject: payload.subject || "",
    submittedAt: new Date().toISOString(),
  });
}

export function parseContactSubmission(value) {
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function isContactSubmissionFresh(submission) {
  if (!submission?.submittedAt) return false;

  const submittedAt = new Date(submission.submittedAt).getTime();
  if (Number.isNaN(submittedAt)) return false;

  return Date.now() - submittedAt < CONTACT_SUBMISSION_MAX_AGE * 1000;
}
