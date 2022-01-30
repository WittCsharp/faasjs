import {
  Dispatch, SetStateAction,
  useEffect, useState
} from 'react'
import { getClient } from '@faasjs/react'

export type FaasDataWrapperProps<T = any> = {
  dataSource?: T
  faasData?: {
    action: string
    params?: Record<string, any>
    data?: T
    setData?: Dispatch<SetStateAction<T>>
  }
  render?: (args: {
    data: T
  }) => JSX.Element
  fallback?: JSX.Element
}

export function FaasDataWrapper<T = any> ({
  dataSource,
  faasData,
  render,
  fallback,
}: FaasDataWrapperProps<T>) {
  const [data, setData] = useState<T>()

  useEffect(() => {
    if (!faasData) return

    getClient()
      .faas(faasData.action, faasData.params)
      .then(res => {
        if (faasData.setData)
          faasData.setData(res.data as T)
        else
          setData(res.data as T)
      })
  }, [JSON.stringify([faasData?.action, faasData?.params])])

  if (dataSource) return render({ data: dataSource })

  if (!data && !faasData.data) return fallback || null

  return render({ data: faasData.data || data })
}