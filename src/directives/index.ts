import registerTest from "./testDirective.ts";
import registerChartResize from "./elementResize.ts";

export default function registerDirectives(app: any) {
  registerTest(app);
  registerChartResize(app);
}
