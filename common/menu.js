import WORDS from "common/words/menu";
import PATHS from "./paths";

export const TOP_MENU = [
  { path: PATHS.MAIL_LIST, isPrivate: true, text: WORDS.my_emails },
  {
    isDropdown: true,
    options: [
      { text: WORDS.guest_post, path: PATHS.GUEST_POST },
      { text: WORDS.link_building, path: PATHS.LINK_BUILDING },
      { text: WORDS.broken_link, path: PATHS.BROKEN_LINK },
    ],
    text: WORDS.outreach,
  },
  { path: PATHS.EMAIL_FINDER, isMenuItem: true, text: WORDS.email_finder },
  { path: PATHS.EMAIL_VERIFER, isMenuItem: true, text: WORDS.email_verifer },
];

export const BOTTOM_MENU = [
  {
    text: WORDS.about_us,
    path: PATHS.ABOUT_US,
  },
  {
    text: WORDS.blog,
    path: "/",
  },
  {
    text: WORDS.privacy_policy,
    path: PATHS.PRIVACY_POLICY,
  },
  {
    text: WORDS.terms_conditions,
    path: PATHS.TERMS_CONDITIONS,
  },

  {
    text: WORDS.pricing,
    path: PATHS.PRICING,
  },
];
