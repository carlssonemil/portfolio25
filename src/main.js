import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { router } from './router.js'
import { init as initPlausibleAnalytics } from '@plausible-analytics/tracker'

const app = createApp(App)

app.use(router)
app.mount('#app')

initPlausibleAnalytics({
  domain: 'emilcarlsson.se',
})
