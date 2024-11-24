import { createStore } from 'vuex'
import { studentA } from './student.js'

export default createStore({
  modules: {
    student:studentA
  },
})
