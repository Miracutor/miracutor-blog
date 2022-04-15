import parser from "ua-parser-js";
import mediaQuery from "css-mediaquery";
import useInView from "@frontity/hooks/use-in-view";
import Box from "@mui/material/Box";

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

const WrapInView = ({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return <Box ref={ref}>{inView ? children : fallback || null}</Box>;
};

// A function to check if the path is listing post with same tags or categories.
const isListing = (path: string): { isTag: boolean; isCategory: boolean } => {
  const pathArray = path.split("/");
  if (pathArray[1] === "tag") {
    return { isTag: true, isCategory: false };
  }
  if (pathArray[1] === "category") {
    return { isTag: false, isCategory: true };
  }
  return { isTag: false, isCategory: false };
};

export { useCustomSsrMatchMedia, WrapInView, isListing };
