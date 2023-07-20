import {
  FaasBrowserClient, Options, FaasBrowserClientAction
} from '@faasjs/browser'
import 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $faas: FaasBrowserClientAction
  }
}

export type {
  FaasBrowserClient, Options, Response, ResponseHeaders, ResponseError
} from '@faasjs/browser'

export type FaasVuePluginOptions = {
  domain: string
  options?: Options
}

export const FaasVuePlugin = {
  install (app: any, options: FaasVuePluginOptions): void {
    const client = new FaasBrowserClient(options.domain, options.options)

    app.config.globalProperties.$faas = client.action
  }
}
