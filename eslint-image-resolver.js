/** @format */

const extensions = [".png", ".jpg"];

function getPathInfo(file) {
  const index = file.lastIndexOf(".");
  if (index < 1) {
    return undefined;
  }
  return {
    path: file.slice(0, index),
    extension: file.slice(index),
  };
}

module.exports = {
  interface: "import/resolver",
  interfaceVersion: 2,
  resolve: (source) => {
    const pathInfo = getPathInfo(source);
    if (!pathInfo || !extensions.includes(pathInfo.extension)) {
      return { found: false };
    }

    return { found: false };
  },
};
