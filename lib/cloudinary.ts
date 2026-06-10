const cloudinaryBaseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL?.replace(
  /\/+$/,
  ""
);

const isRemoteUrl = (src: string) => /^https?:\/\//i.test(src);

const cloudinaryOverrides: Record<string, string> = {
  "/NAV LOGO.png":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099813/NAV_LOGO_kph0ey.png",
  "/logo.png":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099813/NAV_LOGO_kph0ey.png",
  "/logo 2.png":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099813/NAV_LOGO_kph0ey.png",
  "/ABOUT SDAC.JPG":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099844/ABOUT_SDAC_o2lfg8.jpg",
  "/IMG_1750.jpg":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099839/IMG_1750_fa5mrl.jpg",
  "/CAMPMEETING FLYER.jpg":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099835/CAMPMEETING_FLYER_hdglfg.jpg",
  "/CAMP MEETINF BANNER.jpg":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099830/CAMP_MEETINF_BANNER_bqlpcr.jpg",
  "/CAMPMEETING.jpg":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099827/CAMPMEETING_cqfcnv.jpg",
  "/WEELKLY SERMON BG.jpg":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099554/WEELKLY_SERMON_BG_o7yzen.jpg",
  "/_MG_2211.JPG":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099553/_MG_2211_wuurld.jpg",
  "/_MG_2240.JPG":
    "https://res.cloudinary.com/dgbrwewiy/image/upload/f_auto,q_auto/v1781099550/_MG_2240_ou4g2e.jpg",
};

const encodePath = (path: string) =>
  path
    .replace(/^\/+/, "")
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

export function cloudinaryImage(src?: string) {
  if (!src) {
    return "/placeholder.svg";
  }

  if (cloudinaryOverrides[src]) {
    return cloudinaryOverrides[src];
  }

  if (isRemoteUrl(src) || !cloudinaryBaseUrl) {
    return src;
  }

  return `${cloudinaryBaseUrl}/${encodePath(src)}`;
}
