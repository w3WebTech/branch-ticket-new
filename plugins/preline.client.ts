import "preline/preline";
import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default (nuxtApp:any) => {
  nuxtApp.hook("page:finish", () => {
    window.HSStaticMethods.autoInit();
  });
};