import { moderateScale } from "./dimensions";

export const FontSize = {
  xs: moderateScale(10),
  sm: moderateScale(12),
  md: moderateScale(14),
  lg: moderateScale(16),
  xl: moderateScale(18),
  xxl: moderateScale(22),
  title: moderateScale(26),
  huge: moderateScale(32),
} as const;
