import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

const options = {
  theme: {
    light: true,
    themes: {
      light: {
        primary: "#119DA4",
        accent: "3D87E4",
        secondary: "#171b34",
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
};

export default new Vuetify(options);
