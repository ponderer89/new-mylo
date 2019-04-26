import { init } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import * as models from './models'

export const createStore = () =>
  init({
    plugins: [immerPlugin()],
    models
  })

const store = createStore()

export default store
