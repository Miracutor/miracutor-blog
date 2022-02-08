import parser from "ua-parser-js";
import mediaQuery from "css-mediaquery";

const useCustomSsrMatchMedia = (userAgent: string) => {
  const deviceType = parser(userAgent).device.type || "desktop";

  const ssrMatchMedia = (query: string) => {
    return {
      matches: mediaQuery.match(query, {
        // The estimated CSS width of the browser.
        width: deviceType === "mobile" ? "0px" : "1024px",
      }),
    };
  };
  return { ssrMatchMedia };
};

export { useCustomSsrMatchMedia };
