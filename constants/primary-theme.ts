const PRIMARY_THEME_COLORS = {
  primary: "#003767" as string,
  secondary: "#001330" as string,
  tertiary: "#ffd700" as string,
  textWhite: "text-white" as string,
};

const FONTS = {
  paragraph: 'text-xs sm:text-sm lg:text-base xl:text-lg' as string,
};

const INNER_WRAPPER = {
    container: 'relative flex flex-col space-y-[20px] overflow-x-hidden sm:px-[50px] sm:space-y-[4vw] xl:space-y-[2vw] py-[8vw] sm:py-[5vw] 2xl:py-[4vw]' as string
};

Object.freeze(PRIMARY_THEME_COLORS);
Object.freeze(FONTS);
Object.freeze(INNER_WRAPPER);

export { PRIMARY_THEME_COLORS, FONTS, INNER_WRAPPER };
