
export const BASE_URL = process.env.NODE_ENV === 'production'
  ? `${window.location.protocol}//${window.location.hostname}` : 'http://localhost:8081'

export const SOCKET_HOST = process.env.NODE_ENV === 'production'
  ? `wss://${window.location.hostname}/ws` : 'ws://localhost:8090/ws'
