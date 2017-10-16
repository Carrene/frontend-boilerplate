
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { default as HttpClient, Field } from 'restfulpy'

import { BASE_URL } from './settings.js'

class Server extends HttpClient {
  constructor () {
    super(`${BASE_URL}/apiv1`)
  }
}

Field.prototype.createValidator = function (options) {
  options = Object.assign({}, this, options || {})
  let result = {}

  if (!options.optional) {
    result['required'] = required
  }

  if (options.minLength) {
    result['minLength'] = minLength(options.minLength)
  }

  if (options.maxLength) {
    result['maxLength'] = maxLength(options.maxLength)
  }

  if (options.pattern) {
    result['pattern'] = function (value) {
      if (!value || value === '') {
        return true
      }
      return value.match(new RegExp(options.pattern)) !== null
    }
  }
  return result
}

// Creating a single instance of restfulpy-client naming it server!
export default new Server()
