/**
 * bytesToSize [Byte字节转 ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']]
 * @param  {[Number]} bytes 字节数，默认0
 * @param  {[Number]} bit 小数点位数，默认2
 * @param  {[Number]} index 指定转换单位，默认自动计算
 * @return {[String]} size 转换后的数值，带单位
 */

import numRound from "./numRound";

const SIZES = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
const SIZE_UNIT = 1024;

const bytesToSize = (bytes = 0, bit = 2, index) => {
  if (bytes === 0) return "0 B";
  const i = index ? index : Math.floor(Math.log(bytes) / Math.log(SIZE_UNIT));
  return `${numRound(bytes / SIZE_UNIT ** i, bit)} ${SIZES[i]}`;
};

export default bytesToSize;
