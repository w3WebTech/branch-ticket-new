// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/preline.client.ts"],
 
};
