module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/recipes/" : "",
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
};
