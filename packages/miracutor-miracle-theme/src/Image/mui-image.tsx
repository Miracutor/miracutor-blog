/** mui-image fork
 * The only Material-UI image component to satisfy the Material guidelines for loading images.
 * Original: Copyright (c) 2022 benmneb
 * Fork: Copyright (c) 2022 Miracutor
 * license: ISC
 **/
import React from "react";
import { styled } from "@mui/material/styles";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import CircularProgress from "@mui/material/CircularProgress";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  bgColor?: string;
  className?: string;
  distance?: string | number;
  duration?: number;
  easing?: string;
  errorIcon?: boolean | React.ReactNode;
  fit?:
    | "contain"
    | "cover"
    | "fill"
    | "none"
    | "scale-down"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  iconWrapperClassName?: string;
  iconWrapperStyle?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  position?:
    | "static"
    | "relative"
    | "absolute"
    | "fixed"
    | "sticky"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  shift?: "left" | "right" | "top" | "bottom" | null;
  shiftDuration?: number;
  showLoading?: boolean | React.ReactNode;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
}

const BrokenImageIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.9959.9959 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z" />
  </SvgIcon>
);

const Image = ({
  position = "relative",
  fit = "cover",
  className = "",
  showLoading = false,
  errorIcon = true,
  shift = null,
  distance = 100,
  shiftDuration = null,
  bgColor = "inherit",
  wrapperStyle,
  iconWrapperStyle,
  wrapperClassName = "",
  iconWrapperClassName = "",
  duration = 3000,
  easing = "cubic-bezier(0.7, 0, 0.6, 1)",
  onLoad: onLoadProp,
  onError: onErrorProp,
  ...rest
}: ImageProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLoad = () => {
    setLoaded(true);
    setError(false);
    if (onLoadProp) onLoadProp();
  };

  const handleError = () => {
    setError(true);
    setLoaded(false);
    if (onErrorProp) onErrorProp();
  };

  const shiftStyles = {
    [shift]: loaded ? 0 : distance,
  };

  const MuiImageWrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor,
  });

  const Img = styled("img")({
    "@keyframes materialize": {
      "0%": {
        filter: "saturate(20%) contrast(50%) brightness(120%)",
      },
      "75%": {
        filter: "saturate(60%) contrast(100%) brightness(100%)",
      },
      "100%": {
        filter: "saturate(100%) contrast(100%) brightness(100%)",
      },
    },
    position,
    width: "100%",
    height: "100%",
    objectFit: fit,
    transitionProperty: `${shift ? `${shift}, ` : ""}opacity`,
    transitionDuration: `${
      shift ? `${shiftDuration || duration * 0.3}ms, ` : ""
    }${duration / 2}ms`,
    transitionTimingFunction: easing,
    opacity: loaded ? 1 : 0,
    animation: loaded ? `materialize ${duration}ms 1 ${easing}` : "",
    ...(shift && shiftStyles),
  });

  const MuiImageIconWrapper = styled("div")({
    width: "100%",
    marginLeft: "-100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: loaded ? 0 : 1,
  });

  const showErrorIcon = (typeof errorIcon !== "boolean" && errorIcon) || (
    <BrokenImageIcon style={{ fontSize: 56, color: "#bdbdbd" }} /> // MUI grey[400]
  );

  const loadingIndicator = (typeof showLoading !== "boolean" &&
    showLoading) || <CircularProgress size={56} thickness={6} />;

  return (
    <MuiImageWrapper
      className={`mui-image-wrapper ${wrapperClassName}`}
      style={wrapperStyle}
    >
      <Img
        className={`mui-image-img ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        {...rest}
      />
      {(Boolean(showLoading) || Boolean(errorIcon)) && (
        <MuiImageIconWrapper
          className={`mui-image-iconWrapper ${iconWrapperClassName}`}
          style={iconWrapperStyle}
        >
          {Boolean(errorIcon) && error && showErrorIcon}
          {Boolean(showLoading) && !error && !loaded && loadingIndicator}
        </MuiImageIconWrapper>
      )}
    </MuiImageWrapper>
  );
};

export default Image;