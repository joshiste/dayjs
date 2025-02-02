import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {
  export function max(dayjs: Dayjs[]): Dayjs
  export function max(...dayjs: Dayjs[]): Dayjs
  export function min(dayjs: Dayjs[]): Dayjs
  export function min(...dayjs: Dayjs[]): Dayjs
}
