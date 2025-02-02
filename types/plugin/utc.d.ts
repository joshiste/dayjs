import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs' {
  interface Dayjs {
    
    utc(): Dayjs
    
    local(): Dayjs

    isUTC(): boolean
  }

  export function utc(config?: ConfigType, format?: string): Dayjs
}
