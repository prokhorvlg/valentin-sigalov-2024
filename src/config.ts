import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.valentinsigalov.com/", // replace this with your deployed domain
  author: "Valentin Sigalov",
  desc: "Software engineer based in Philadelphia, PA.",
  title: "Valentin Sigalov",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 9,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/prokhorvlg",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/valentin-sigalov/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:valentinsigalov@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
