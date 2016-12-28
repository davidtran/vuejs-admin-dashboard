import App from './components/App.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Messaging from './components/Messaging/Messaging.vue'
import Customize from './components/UIKits/Customize/Customize.vue'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/messaging',
        component: Messaging
      },
      {
        path: '/customize',
        component: Customize
      }
    ]
  }

]
