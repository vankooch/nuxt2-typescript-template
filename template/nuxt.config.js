const webpack = require("webpack");

module.exports = {
  env: {
    baseUrl: "http://localhost:3000"
  },

  head: {
    titleTemplate: "%s",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      },
      {
        name: "msapplication-TileColor",
        content: "#ffffff"
      },
      {
        name: "msapplication-TileImage",
        content: "/favicon/ms-icon-144x144.png"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],

    link: [
      {
        rel: "manifest",
        href: "/favicon/manifest.json"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon/favicon.ico"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicon/apple-icon-57x57.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicon/apple-icon-76x76.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon/apple-icon-114x114.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon/apple-icon-120x120.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon/apple-icon-152x152.png"
      },
      {
        rel: "icon",
        type: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-icon-180x180.png"
      }
    ]
  },

  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss"
  ],

  modules: [
    // Using package name
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],

  plugins: ["~/plugins/bootstrap.js"],

  build: {
    vendor: ["jquery", "bootstrap"],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    extend(config) {}
  },

  // Generate static version
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: false,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: false,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  }
};
