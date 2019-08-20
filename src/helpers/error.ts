import { AxiosError } from './error';
import { AxiosError } from './../types/index'
import { AxiosRequestConfig, AxiosResponse } from './../types'
import { request } from 'http'
import { config } from 'shelljs'
import { prototype } from 'stream'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request: any,
    response: AxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true
    // Set the prototype explicitly
    Object.setPrototypeOf(this.isAxiosError, AxiosError.prototype)
  }

  export function createError(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request: any,
    response: AxiosResponse
  ) {
    const error = new AxiosError(message, config, code, request, response)

    return error
  }
}
