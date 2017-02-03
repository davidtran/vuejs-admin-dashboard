import App from './components/App.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Messaging from './components/Messaging/Messaging.vue'
import Customize from './components/UIKits/Customize/Customize.vue'
import Components from './components/UIKits/Components/Components.vue'
import CardPage from './components/UIKits/CardPage.vue'
import FormPage from './components/UIKits/FormPage.vue'
import Table from './components/UIKits/Table/Table.vue'
import IconPage from './components/UIKits/IconPage/IconPage.vue'
import PriceTablePage from './components/UIKits/PriceTablePage.vue'
import ChartPage from './components/UIKits/ChartPage.vue'
import ExampleFormPage from './components/Example/ExampleFormPage.vue'
import ExampleProfilePage from './components/Example/ExampleProfilePage.vue'
import ExampleSearchPage from './components/Example/ExampleSearchPage.vue'
import ExampleLoginPage from './components/Example/ExampleLoginPage.vue'
import ExampleRegisterPage from './components/Example/ExampleRegisterPage.vue'

export default [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/app',
    component: App,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: '/messaging',
        component: Messaging,
        name: 'Messaging'
      },
      {
        path: '/customize',
        component: Customize,
        name: 'Customize'
      },
      {
        path: '/components',
        component: Components,
        name: 'Components'
      },
      {
        path: '/card',
        component: CardPage,
        name: 'Card'
      },
      {
        path: '/form',
        component: FormPage,
        name: 'Form'
      },
      {
        path: '/table',
        component: Table,
        name: 'Table'
      },
      {
        path: '/icon',
        component: IconPage,
        name: 'Icon'
      },
      {
        path: '/price-table',
        component: PriceTablePage,
        name: 'Price Table'
      },
      {
        path: '/chart',
        component: ChartPage,
        name: 'Chart'
      },
      {
        path: '/example-form',
        component: ExampleFormPage
      },
      {
        path: '/example-profile',
        component: ExampleProfilePage
      },
      {
        path: '/example-search',
        component: ExampleSearchPage
      }
    ]
  },
  {
    path: '/login',
    component: ExampleLoginPage
  },
  {
    path: '/register',
    component: ExampleRegisterPage
  }

]
