import React from "react";
import { connect } from "frontity";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCustomSsrMatchMedia } from "../utils";

type Props = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any;
};

export const MobileContext = React.createContext(false);

const MobileProvider = ({ children, state }: Props) => {
  const { ssrMatchMedia } = useCustomSsrMatchMedia(state.theme.userAgent);
  const fetchMobileStatus = () =>
    useMediaQuery("(max-width:768px)", { ssrMatchMedia });

  return (
    <MobileContext.Provider value={fetchMobileStatus()}>
      {children}
    </MobileContext.Provider>
  );
};

export default connect(MobileProvider);
