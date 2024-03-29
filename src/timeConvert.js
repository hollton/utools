/**
 * timeConvert [毫秒数转换为天、时、分、秒、毫秒]
 * @param  Number ms [毫秒数，默认 0 ]
 * @param  String unit [最大转换单位，默认 'days'，可选值：'milliseconds'、'seconds'、'minutes'、'hours'、'days'] ]
 * @return Object {
 *  milliseconds: Number, // 毫秒数
 *  seconds: Number, // 秒数
 *  ...,
 *  [`${unit}`]: Number, // 最大单位数
 *  t: String, // 时间拍平，如：'1days2hours3minutes4seconds5milliseconds'
 *  tt: String, // 同t，两位数时间值
 *  t_s: String, // 秒时间拍平，如：'1days2hours3minutes4seconds'
 *  tt_s: String, // 同t_s，两位数时间值
 * }
 */

import isNumber from './isNumber'

const strTime = (time, unit, originStr, double) => (time > 0 ? `${double && time <= 9 ? `0${time}` : time }${unit}` : '') + originStr

const timeConvert = (ms = 0, unit = 'days') => {
    if (!isNumber(ms)) {
        throw new TypeError("Value sent to time-converter must be a number.");
    }

    const units = [
        { key: "milliseconds", mod: 1000 },
        { key: "seconds", mod: 60 },
        { key: "minutes", mod: 60 },
        { key: "hours", mod: 24 },
        { key: "days", mod: 30 },
    ];
    let result = {}, t = '', tt = '', t_s = '', tt_s = '';

    for (let i = 0; i < units.length; i++) {
        const { key, mod } = units[i];
        if (key === unit) {
            result[key] = ms;
            t = strTime(ms, key, t)
            tt = strTime(ms, key, tt, true)
            if (i > 0) {
                t_s = strTime(ms, key, t_s)
                tt_s = strTime(ms, key, tt_s, true)
            }
            break;
        } else {
            const v = ms % mod
            result[key] = v;
            t = strTime(v, key, t)
            tt = strTime(v, key, tt, true)
            if (i > 0) {
                t_s = strTime(v, key, t_s)
                tt_s = strTime(v, key, tt_s, true)
            }
        }
        ms = Math.floor(ms / mod);
    }
    Object.assign(result, {
        t, tt, t_s, tt_s
    })

    return result;
};

export default timeConvert;
