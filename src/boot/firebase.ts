import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCyeGQB_nObxWMYPxIUbCp09Slv933ogXY',
  authDomain: 'quasar-project-c858f.firebaseapp.com',
  projectId: 'quasar-project-c858f',
  storageBucket: 'quasar-project-c858f.appspot.com',
  messagingSenderId: '1096580598574',
  appId: '1:1096580598574:web:0d21165ae82f6cd37b88bf'
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export default boot(({ app }) => {
  app.config.globalProperties.$firebaseAuth = auth
})

export { auth }
