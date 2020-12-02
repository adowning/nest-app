export interface AuthConfig {
  header: string
}
export interface Config {
  auth: AuthConfig
  smUrl: string
  smTimeout: number
  smApiKey: string
}
export const config: Config = {
  auth: {
    header: 'super-secret',
  },
  smTimeout: 3000,
  smUrl: 'https://api.servicemonster.net/v1',
  smApiKey: 'Basic NGM4T1JQbk86Q2ppVU1ydHZxZVg0TVN0MA==',
}
