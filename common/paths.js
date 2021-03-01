const { NEXT_PUBLIC_ROOT_DOMAIN } = process.env;

const PATHS = {
  HOMEPAGE: "/",
  PROFILE: "/profile",
  SIGN_IN: "/sign-in",
  SIGN_OUT: "/sign-out",
  SIGN_UP: "/sign-up",
  VERIFY: "/verify",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  GUEST_POST: "/guest-post",
  LINK_BUILDING: "/link-building",
  BROKEN_LINK: "/broken-link",
  EMAIL_FINDER: "/email-finder",
  EMAIL_VERIFER: "/email-verifer",
  ABOUT_US: "/about-us",
  OUT_SOLUTIONS: "/our-solutions",
  BLOG: "/blog",
  TERMS_CONDITIONS: "/terms-conditions",
  CHOOSE_TEMPLATE: "/choose-template",
  COOPERATION_FINDER: "/cooperation-finder",
  DIRECT_EXCHANGE: "/direct-exchange",
  CHOOSE_KEYWORDS: "/choose-keywords",
  EXCHANGE_TEMPLATE: "/exchange-template",
  TEST_TEMPLATE: "/test-template",
  CREATE_NEW_TEMPLATE: "/new-template",
  PRIVACY_POLICY: "/privacy-policy",
  UNSUBSCRIBERS_LIST: "/unsubscribers-list",
  PRICING: "/pricing",
  ARTICLE: "/article",
  NOT_FOUND: "/404",
  MAIL_LIST: "/mailing",
  MAIL_SINGLE: "/mailing/email",
  TEST_EMAILS: "/test-emails",
  ADD_KEYWORD: "/add-keyword",
  ADD_LABEL: "/add-label",
  STATISTICS: "/statistics",
  COOPERATION_SUCCESS: "/cooperation-success",
  PAYMENT_DETAILS: "/payment-details",
};
const getAbsolutePaths = () => {
  const paths = {};
  for (const prop in PATHS) {
    paths[prop] = `${NEXT_PUBLIC_ROOT_DOMAIN}${PATHS[prop]}`;
  }
  return paths;
};

export default getAbsolutePaths();
