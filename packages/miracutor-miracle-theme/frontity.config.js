const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin");

export const webpack = ({ config, mode }) => {
  if (mode === "production") {
    config.plugins.push(
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: true,
      })
    );
  }
};
