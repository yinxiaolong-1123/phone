const path = require("path");
const isOnline = process.env.API_ENV === "online";

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#ff9900',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./node_modules/"),
        "@": path.resolve(__dirname, "./src"),
        api: path.resolve("./src/api"),
        common: path.resolve("./src/common"),
        components: path.resolve("./src/components"),
        config: path.resolve("./src/config"),
        router: path.resolve("./src/router"),
        store: path.resolve("./src/store"),
        assets: path.resolve("./src/assets"),
        eventBus: path.resolve("./src/eventBus"),
        views: path.resolve("./src/views"),
        mixins: path.resolve("./src/mixins"),
      },
    },
  },
  devServer: {
    proxy: {
      "/api/long/": {
        changeOrigin: true,
        target: isOnline
          ? "http://localhost:4000"
          : "http://localhost:4000",
      }
    },
  },
};