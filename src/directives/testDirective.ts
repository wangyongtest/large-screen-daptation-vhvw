export default function (app: any) {
  app.directive("test", {
    mounted(el: any) {
      console.log(el);
      el.style.color = "red";
    },
  });
}
