module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./source"],
        alias: { "~": "./source" },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  ],
};
