
const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          eyad: {
            main: "#64748B",
          },

          favColor: {
            main: "rgb(247,247,247)",
          },
        }
      : {
          // palette values for dark mode
          eyad: {
            main: "teal",
          },

          favColor: {
            main: null,
          },
        }),
  },
});


export default getDesignTokens;