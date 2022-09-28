export default {
  head: {
    title: `The Best Investment | One place for many global shipping carriers`,
    link: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: `/static/favicon.svg`,
      },
    ],
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: `The Best Investment | One place for many global shipping carriers`,
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: `The Best Investment | One place for many global shipping carriers`,
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: `The Best Investment | One place for many global shipping carriers`,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: `The Best Investment | One place for many global shipping carriers`,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "One place for many global shipping carriers, and your first choice finding the best shipping company.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `/the-best-investment/favicon.svg`,
      },
      {
        hid: "description",
        name: "description",
        content:
          "One place for many global shipping carriers, and your first choice finding the best shipping company.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: `The Best Investment, Shipping, site, web, service, charge, dhl, fedex, ups, aramex, zajil, samsa, carriers, بريدكس , شحن , موقع, خدمات شحن, أفضل سعر شحن`,
      },
      {
        name: "author",
        content: `The Best Investment | Mohamed Tarek`,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `/the-best-investment/favicon.svg`,
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: `the-best-investment`,
      },
      {
        hid: "og:title",
        name: "og:title",
        content: `the-best-investment | One place for many global shipping carriers`,
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "One place for many global shipping carriers, and your first choice finding the best shipping company.",
      },
    ],
  },
  generate: {
    subFolders: false,
  },
  mode: "universal",
  target: "server",
  server: {
    port: 8080,
    host: "0.0.0.0",
  },
  components: {
    dirs: ["~/components", "~/components/home"],
  },
  css: ["~/assets/css/main.scss"],
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxtjs/pwa", "nuxt-i18n"],
  bootstrapVue: {
    icons: false,
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [
      "FormPlugin",
      "FormInputPlugin",
      "FormGroupPlugin",
      "InputGroupPlugin",
      "FormTextareaPlugin",
      "SpinnerPlugin",
    ],
    directivePlugins: [],
  },
  plugins: [
    { src: "~plugins/aos", ssr: false },
    { src: "~plugins/inline-svg", ssr: false },
    { src: "~plugins/number-animation", ssr: false },
  ],

  i18n: {
    lazy: true,
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
      {
        name: "Arabic",
        code: "ar",
        iso: "ar-EG",
        file: "ar.json",
      },
    ],
    langDir: "lang/",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      onlyOnRoot: true, // recommended
    },
  },
  build: {
    publicPath: "/nuxt/",
    babel: {
      compact: true,
    },

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true,
      },
    },

    pwa: {
      manifest: {
        lang: "en",
      },
    },
  },
};
