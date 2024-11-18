
basePath = process.env.NEXT_PUBLIC_BASEPATH;

if (!basePath) {
  throw new Error("NEXT_PUBLIC_BASEPATH environment variable is required");
}

var output = undefined;
if (process.env.NODE_ENV === "production") {
  output = "standalone";
}

const nextConfig = {
  basePath,
  assetPrefix: `${basePath}`,
  images:{
    loader:"custom",
    loaderFile:"/loader.js",
  },
  output,
};

module.exports = nextConfig;
