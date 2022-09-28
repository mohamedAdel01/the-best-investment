import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
Vue.use(AOS.init({ duration: 1200, delay: 0, once: true }));
