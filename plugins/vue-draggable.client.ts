import { VueDraggableNext } from "vue-draggable-next";

export default defineNuxtPlugin((nuxtApp) => {
  // Register the VueDraggableNext plugin
  nuxtApp.vueApp.component("draggable", VueDraggableNext);
});
