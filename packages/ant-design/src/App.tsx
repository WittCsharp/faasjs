import { ConfigProvider, message, notification } from 'antd'
import type { ConfigProviderProps } from 'antd/es/config-provider'
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs'
import type { StyleProviderProps } from '@ant-design/cssinjs/lib/StyleContext'
import { useEffect, useMemo } from 'react'
import type { MessageInstance } from 'antd/es/message/interface'
import type { NotificationInstance } from 'antd/es/notification/interface'
import { type ModalProps, type setModalProps, useModal } from './Modal'
import { type DrawerProps, type setDrawerProps, useDrawer } from './Drawer'
import { BrowserRouter, useLocation } from 'react-router-dom'
import type { BrowserRouterProps } from 'react-router-dom'
import { ErrorBoundary, type ErrorBoundaryProps } from './ErrorBoundary'
import {
  ConfigProvider as FaasConfigProvider,
  type ConfigProviderProps as FaasConfigProviderProps,
} from './Config'
import { createSplitedContext } from '@faasjs/react'

export interface AppProps {
  children: React.ReactNode
  /** https://ant.design/docs/react/compatible-style#styleprovider */
  styleProviderProps?: StyleProviderProps
  /** https://ant.design/components/config-provider/#API */
  configProviderProps?: ConfigProviderProps
  /** https://reactrouter.com/en/router-components/browser-router */
  browserRouterProps?: BrowserRouterProps
  /** https://faasjs.com/doc/ant-design/#errorboundary */
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
  /** https://faasjs.com/doc/ant-design/#configprovider */
  faasConfigProviderProps?: Omit<FaasConfigProviderProps, 'children'>
}

export interface useAppProps {
  message: MessageInstance
  notification: NotificationInstance
  modalProps: ModalProps
  setModalProps: setModalProps
  drawerProps: DrawerProps
  setDrawerProps: setDrawerProps
}

const AppContext = createSplitedContext<useAppProps>({
  message: {} as MessageInstance,
  notification: {} as NotificationInstance,
  modalProps: {},
  setModalProps: () => void 0,
  drawerProps: {},
  setDrawerProps: () => void 0,
})

function RoutesApp(props: {
  children: React.ReactNode
}) {
  const location = useLocation()
  const { drawerProps, setDrawerProps, modalProps, setModalProps } = useApp()

  useEffect(() => {
    console.debug('location', location)

    if (drawerProps.open) setDrawerProps({ open: false })

    if (modalProps.open) setModalProps({ open: false })
  }, [location])

  return <>{props.children}</>
}

/**
 * App component with Ant Design & FaasJS
 *
 * - Based on Ant Design's [ConfigProvider](https://ant.design/components/config-provider/) and [StyleProvider](https://ant.design/components/style-provider/).
 * - Integrated Ant Design's [Message](https://ant.design/components/message/) and [Notification](https://ant.design/components/notification/).
 * - Based on FaasJS's [ConfigProvider](https://faasjs.com/doc/ant-design/#configprovider).
 * - Integrated FaasJS's [Modal](https://faasjs.com/doc/ant-design/#usemodal), [Drawer](https://faasjs.com/doc/ant-design/#usedrawer) and [ErrorBoundary](https://faasjs.com/doc/ant-design/#errorboundary).
 * - Integrated React Router's [BrowserRouter](https://reactrouter.com/en/router-components/browser-router).
 *
 * @example
 * ```tsx
 * import { App } from '@faasjs/ant-design'
 *
 * export default function () {
 *   return (
 *     <App
 *      styleProviderProps={{}} // https://ant.design/docs/react/compatible-style#styleprovider
 *      configProviderProps={{}} // https://ant.design/components/config-provider/#API
 *      browserRouterProps={{}} // https://reactrouter.com/en/router-components/browser-router
 *      errorBoundaryProps={{}} // https://faasjs.com/doc/ant-design/#errorboundary
 *      faasConfigProviderProps={{}} // https://faasjs.com/doc/ant-design/#configprovider
 *     >
 *       <div>content</div>
 *     </App>
 *   )
 * ```
 */
export function App(props: AppProps) {
  const [messageApi, messageContextHolder] = message.useMessage()
  const [notificationApi, notificationContextHolder] =
    notification.useNotification()
  const { modal, modalProps, setModalProps } = useModal()
  const { drawer, drawerProps, setDrawerProps } = useDrawer()

  const styleProviderProps = useMemo(
    () => ({
      ...props.styleProviderProps,
      hashPriority: 'high' as const,
      transformers: [legacyLogicalPropertiesTransformer],
    }),
    [props.styleProviderProps]
  )

  return (
    <StyleProvider {...styleProviderProps}>
      <ConfigProvider {...props.configProviderProps}>
        <AppContext.Provider
          value={{
            message: messageApi,
            notification: notificationApi,
            drawerProps,
            setDrawerProps,
            modalProps,
            setModalProps,
          }}
        >
          <FaasConfigProvider {...props.faasConfigProviderProps}>
            <ErrorBoundary {...props.errorBoundaryProps}>
              <BrowserRouter {...props.browserRouterProps}>
                {messageContextHolder}
                {notificationContextHolder}
                {modal}
                {drawer}
                <RoutesApp>{props.children}</RoutesApp>
              </BrowserRouter>
            </ErrorBoundary>
          </FaasConfigProvider>
        </AppContext.Provider>
      </ConfigProvider>
    </StyleProvider>
  )
}

/**
 * Get app context.
 *
 * ```ts
 * import { useApp } from '@faasjs/ant-design'
 *
 * const { message, notification, setModalProps, setDrawerProps } = useApp()
 * ```
 */
export const useApp = AppContext.use

App.useApp = useApp
App.whyDidYouRender = true
