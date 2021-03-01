import { THEME } from "common";

export const formatBreakpoints = (breakpoints) => {
  const arrayOfValues = Object.values(breakpoints);
  const arrayOfKeys = Object.keys(breakpoints);
  let formattedBps = [];
  arrayOfValues.forEach(({ min, max }, index) => {
    let singleBp = {};
    singleBp.min = min ? Number(min.substring(0, min.length - 2)) : null;
    singleBp.max = max ? Number(max.substring(0, max.length - 2)) : null;
    singleBp.key = arrayOfKeys[index];
    formattedBps.push(singleBp);
  });

  return formattedBps;
};

export const getPathByBreakpoint = ({ breakpoint, srcSet }) => {
  switch (breakpoint) {
    case THEME.medias.xs.key:
      return srcSet.xs;
    case THEME.medias.sm.key:
      return srcSet.sm;
    case THEME.medias.md.key:
      return srcSet.md;
    case THEME.medias.lg.key:
      return srcSet.lg;
    case THEME.medias.xl.key:
      return srcSet.xl;
    default:
      return null;
  }
};

const common = {
  formatBreakpoints,
  getPathByBreakpoint,
};

export default common;
