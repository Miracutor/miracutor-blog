export const webpack = ({ config }) => {
    config.resolve.alias["react"] = "preact/compat";
    config.resolve.alias["react-dom/test-utils"] = "preact/test-utils";
    config.resolve.alias["react-dom"] = "preact/compat";
    config.resolve.alias["react/jsx-runtime"] = "preact/jsx-runtime";
  };