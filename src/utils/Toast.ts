import { Notify } from 'quasar'

const NOTIFY_TIMEOUT = 1000

export const Toast = (message, type) => {
  Notify.create({
    type,
    message,
    position: 'bottom',
    timeout: NOTIFY_TIMEOUT
  })
}
