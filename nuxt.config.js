export default {
  target: "static",

  head: {
    title: "dis web studio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["@nuxt/content"],

  content: {},

  build: {}
};
