import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'
import { buildURL } from '../helpers/url'
import { AxiosPromise, AxiosRequestConfig } from '../types'
import xhr from './xhr'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { header = {}, data } = config
  return processHeaders(header, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
export * from './types'
export default axios
