import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'
import { SmAccount } from 'src/serviceMonster/sm-account.model'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'
import { isEmpty } from 'class-validator'

export type SMResponse = {
  count: number
  items: [any]
}
const config: AxiosRequestConfig = {
  baseURL: 'https://api.servicemonster.net/v1',
  headers: {
    Authorization: 'Basic NGM4T1JQbk86Q2ppVU1ydHZxZVg0TVN0MA==',
    'Content-Type': 'application/json',
  },
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter),
    { threshold: 2 * 1000 },
  ),
  // transformRequest: [
  //   (data, headers) => {
  //     return data
  //   },
  // ],
  // transformResponse: [
  //   (data) => {
  //     let j = {}
  //     if (typeof data === 'string') {
  //       try {
  //         j = JSON.parse(data)
  //         return j
  //       } catch (e) {
  //         // console.log(e, ' ', typeof data)
  //         return data
  //       }
  //     } else {
  //       return data
  //     }
  //   },
  // ],
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance
  private handleResponse: any
  protected handleError: any
  public constructor() {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        // perform a task before the request is sent
        // console.log('Request was sent')
        return config
      },
      (error) => {
        // handle the error
        console.log('error error danger man')
        return Promise.reject(error)
      },
    )
    this._initializeResponseInterceptor()
    this.handleResponse = ({ data }: AxiosResponse) => {
      // return data
      // return { count: data.count, items: data.items }
      this.handleError = (error: any) => Promise.reject(error)
    }
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    )
  }

  //   private _handleResponse = ({ data }: AxiosResponse) => {return {count: data.count , items: data.items}

  //    _handleError = (error: any) => Promise.reject(error)
}
