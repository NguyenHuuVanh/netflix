/**
 * Netflix Image Assets Management System
 * 
 * This file provides centralized import and usage of all image assets in the Netflix project.
 * All images are organized by categories and can be imported as objects for easy access.
 * 
 * Usage Examples:
 * import { AccountAvatars, BackgroundImages } from './components/images';
 * 
 * <img src={AccountAvatars.Popular.blue} alt="Blue Avatar" />
 * <img src={AccountAvatars.Others.avatar01} alt="Avatar 1" />
 * <div style={{ backgroundImage: `url(${BackgroundImages.register})` }} />
 */

// ========================
// ACCOUNT AVATAR IMAGES - POPULAR
// ========================
import PopularAngryMan from '../../assets/images/AccountAvatar/popular/Name=angryman.png';
import PopularBlue from '../../assets/images/AccountAvatar/popular/Name=blue.png';
import PopularChicken from '../../assets/images/AccountAvatar/popular/Name=chicken.png';
import PopularDarkBlue from '../../assets/images/AccountAvatar/popular/Name=dark blue.png';
import PopularFluffyBlue from '../../assets/images/AccountAvatar/popular/Name=fluffyblue.png';
import PopularFluffyGrey from '../../assets/images/AccountAvatar/popular/Name=fluffygrey.png';
import PopularFluffyRed from '../../assets/images/AccountAvatar/popular/Name=fluffyred.png';
import PopularFluffyYellow from '../../assets/images/AccountAvatar/popular/Name=fluffyyellow.png';
import PopularGreen from '../../assets/images/AccountAvatar/popular/Name=green.png';
import PopularKids from '../../assets/images/AccountAvatar/popular/Name=kids.png';
import PopularPanda from '../../assets/images/AccountAvatar/popular/Name=panda.png';
import PopularPink from '../../assets/images/AccountAvatar/popular/Name=pink.png';
import PopularPurple from '../../assets/images/AccountAvatar/popular/Name=purple.png';
import PopularRed from '../../assets/images/AccountAvatar/popular/Name=red.png';
import PopularYellow from '../../assets/images/AccountAvatar/popular/Name=yellow.png';
import PopularZombi from '../../assets/images/AccountAvatar/popular/Name=zombi.png';

// ========================
// ACCOUNT AVATAR IMAGES - OTHERS (First 50 for performance)
// ========================
import Avatar01 from '../../assets/images/AccountAvatar/others/Name=01.png';
import Avatar02 from '../../assets/images/AccountAvatar/others/Name=02.png';
import Avatar03 from '../../assets/images/AccountAvatar/others/Name=03.png';
import Avatar04 from '../../assets/images/AccountAvatar/others/Name=04.png';
import Avatar05 from '../../assets/images/AccountAvatar/others/Name=05.png';
import Avatar06 from '../../assets/images/AccountAvatar/others/Name=06.png';
import Avatar07 from '../../assets/images/AccountAvatar/others/Name=07.png';
import Avatar08 from '../../assets/images/AccountAvatar/others/Name=08.png';
import Avatar09 from '../../assets/images/AccountAvatar/others/Name=09.png';
import Avatar10 from '../../assets/images/AccountAvatar/others/Name=10.png';
import Avatar11 from '../../assets/images/AccountAvatar/others/Name=11.png';
import Avatar12 from '../../assets/images/AccountAvatar/others/Name=12.png';
import Avatar13 from '../../assets/images/AccountAvatar/others/Name=13.png';
import Avatar14 from '../../assets/images/AccountAvatar/others/Name=14.png';
import Avatar15 from '../../assets/images/AccountAvatar/others/Name=15.png';
import Avatar16 from '../../assets/images/AccountAvatar/others/Name=16.png';
import Avatar17 from '../../assets/images/AccountAvatar/others/Name=17.png';
import Avatar18 from '../../assets/images/AccountAvatar/others/Name=18.png';
import Avatar19 from '../../assets/images/AccountAvatar/others/Name=19.png';
import Avatar20 from '../../assets/images/AccountAvatar/others/Name=20.png';
import Avatar21 from '../../assets/images/AccountAvatar/others/Name=21.png';
import Avatar22 from '../../assets/images/AccountAvatar/others/Name=22.png';
import Avatar23 from '../../assets/images/AccountAvatar/others/Name=23.png';
import Avatar24 from '../../assets/images/AccountAvatar/others/Name=24.png';
import Avatar25 from '../../assets/images/AccountAvatar/others/Name=25.png';
import Avatar26 from '../../assets/images/AccountAvatar/others/Name=26.png';
import Avatar27 from '../../assets/images/AccountAvatar/others/Name=27.png';
import Avatar28 from '../../assets/images/AccountAvatar/others/Name=28.png';
import Avatar29 from '../../assets/images/AccountAvatar/others/Name=29.png';
import Avatar30 from '../../assets/images/AccountAvatar/others/Name=30.png';
import Avatar31 from '../../assets/images/AccountAvatar/others/Name=31.png';
import Avatar32 from '../../assets/images/AccountAvatar/others/Name=32.png';
import Avatar33 from '../../assets/images/AccountAvatar/others/Name=33.png';
import Avatar34 from '../../assets/images/AccountAvatar/others/Name=34.png';
import Avatar35 from '../../assets/images/AccountAvatar/others/Name=35.png';
import Avatar36 from '../../assets/images/AccountAvatar/others/Name=36.png';
import Avatar37 from '../../assets/images/AccountAvatar/others/Name=37.png';
import Avatar38 from '../../assets/images/AccountAvatar/others/Name=38.png';
import Avatar39 from '../../assets/images/AccountAvatar/others/Name=39.png';
import Avatar40 from '../../assets/images/AccountAvatar/others/Name=40.png';
import Avatar41 from '../../assets/images/AccountAvatar/others/Name=41.png';
import Avatar42 from '../../assets/images/AccountAvatar/others/Name=42.png';
import Avatar43 from '../../assets/images/AccountAvatar/others/Name=43.png';
import Avatar44 from '../../assets/images/AccountAvatar/others/Name=44.png';
import Avatar45 from '../../assets/images/AccountAvatar/others/Name=45.png';
import Avatar46 from '../../assets/images/AccountAvatar/others/Name=46.png';
import Avatar47 from '../../assets/images/AccountAvatar/others/Name=47.png';
import Avatar48 from '../../assets/images/AccountAvatar/others/Name=48.png';
import Avatar49 from '../../assets/images/AccountAvatar/others/Name=49.png';
import Avatar50 from '../../assets/images/AccountAvatar/others/Name=50.png';

// ========================
// BACKGROUND IMAGES
// ========================
import RegisterBackground from '../../assets/images/bg-regester/bg1.jpg';

// ========================
// GROUPED EXPORTS FOR ORGANIZED ACCESS
// ========================

// Popular Account Avatars (16 avatars)
export const PopularAvatars = {
  angryMan: PopularAngryMan,
  blue: PopularBlue,
  chicken: PopularChicken,
  darkBlue: PopularDarkBlue,
  fluffyBlue: PopularFluffyBlue,
  fluffyGrey: PopularFluffyGrey,
  fluffyRed: PopularFluffyRed,
  fluffyYellow: PopularFluffyYellow,
  green: PopularGreen,
  kids: PopularKids,
  panda: PopularPanda,
  pink: PopularPink,
  purple: PopularPurple,
  red: PopularRed,
  yellow: PopularYellow,
  zombi: PopularZombi,
} as const;

// Other Account Avatars (First 50 for performance)
export const OtherAvatars = {
  avatar01: Avatar01,
  avatar02: Avatar02,
  avatar03: Avatar03,
  avatar04: Avatar04,
  avatar05: Avatar05,
  avatar06: Avatar06,
  avatar07: Avatar07,
  avatar08: Avatar08,
  avatar09: Avatar09,
  avatar10: Avatar10,
  avatar11: Avatar11,
  avatar12: Avatar12,
  avatar13: Avatar13,
  avatar14: Avatar14,
  avatar15: Avatar15,
  avatar16: Avatar16,
  avatar17: Avatar17,
  avatar18: Avatar18,
  avatar19: Avatar19,
  avatar20: Avatar20,
  avatar21: Avatar21,
  avatar22: Avatar22,
  avatar23: Avatar23,
  avatar24: Avatar24,
  avatar25: Avatar25,
  avatar26: Avatar26,
  avatar27: Avatar27,
  avatar28: Avatar28,
  avatar29: Avatar29,
  avatar30: Avatar30,
  avatar31: Avatar31,
  avatar32: Avatar32,
  avatar33: Avatar33,
  avatar34: Avatar34,
  avatar35: Avatar35,
  avatar36: Avatar36,
  avatar37: Avatar37,
  avatar38: Avatar38,
  avatar39: Avatar39,
  avatar40: Avatar40,
  avatar41: Avatar41,
  avatar42: Avatar42,
  avatar43: Avatar43,
  avatar44: Avatar44,
  avatar45: Avatar45,
  avatar46: Avatar46,
  avatar47: Avatar47,
  avatar48: Avatar48,
  avatar49: Avatar49,
  avatar50: Avatar50,
} as const;

// Combined Account Avatars
export const AccountAvatars = {
  Popular: PopularAvatars,
  Others: OtherAvatars,
} as const;

// Background Images
export const BackgroundImages = {
  register: RegisterBackground,
} as const;

// ========================
// ALL IMAGES COMBINED
// ========================
export const AllImages = {
  Avatars: AccountAvatars,
  Backgrounds: BackgroundImages,
} as const;

// ========================
// UTILITY FUNCTIONS
// ========================

// Get random popular avatar
export const getRandomPopularAvatar = (): string => {
  const avatars = Object.values(PopularAvatars);
  return avatars[Math.floor(Math.random() * avatars.length)];
};

// Get random other avatar
export const getRandomOtherAvatar = (): string => {
  const avatars = Object.values(OtherAvatars);
  return avatars[Math.floor(Math.random() * avatars.length)];
};

// Get random avatar from any category
export const getRandomAvatar = (): string => {
  const allAvatars = [...Object.values(PopularAvatars), ...Object.values(OtherAvatars)];
  return allAvatars[Math.floor(Math.random() * allAvatars.length)];
};

// Get avatar by ID (for other avatars)
export const getAvatarById = (id: number): string | null => {
  if (id < 1 || id > 50) return null;
  const key = `avatar${id.toString().padStart(2, '0')}` as keyof typeof OtherAvatars;
  return OtherAvatars[key] || null;
};

// Get popular avatar by name
export const getPopularAvatarByName = (name: keyof typeof PopularAvatars): string => {
  return PopularAvatars[name];
};

// ========================
// TYPE DEFINITIONS
// ========================
export type PopularAvatarName = keyof typeof PopularAvatars;
export type OtherAvatarName = keyof typeof OtherAvatars;
export type BackgroundImageName = keyof typeof BackgroundImages;

export type ImageAssets = {
  Avatars: {
    Popular: typeof PopularAvatars;
    Others: typeof OtherAvatars;
  };
  Backgrounds: typeof BackgroundImages;
};

// ========================
// INDIVIDUAL EXPORTS
// ========================

// Export individual popular avatars
export {
  PopularAngryMan,
  PopularBlue,
  PopularChicken,
  PopularDarkBlue,
  PopularFluffyBlue,
  PopularFluffyGrey,
  PopularFluffyRed,
  PopularFluffyYellow,
  PopularGreen,
  PopularKids,
  PopularPanda,
  PopularPink,
  PopularPurple,
  PopularRed,
  PopularYellow,
  PopularZombi,
};

// Export individual other avatars (first 10 for demonstration)
export {
  Avatar01,
  Avatar02,
  Avatar03,
  Avatar04,
  Avatar05,
  Avatar06,
  Avatar07,
  Avatar08,
  Avatar09,
  Avatar10,
};

// Export background images
export {
  RegisterBackground,
};
