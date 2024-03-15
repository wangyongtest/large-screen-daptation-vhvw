/*
 * @Author: wy
 * @Date: 2024-03-10 22:10:01
 * @LastEditors:
 * @LastEditTime: 2024-03-10 22:10:11
 * @Description: 描述:
 */
// Echarts图表字体、间距自适应
export const fitChartSize = (size: number, defalteWidth = 1920) => {
  let clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return size;
  let scale = clientWidth / defalteWidth;
  return Number((size * scale).toFixed(3));
};
