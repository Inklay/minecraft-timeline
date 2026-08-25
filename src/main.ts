import { mount } from 'svelte'
import './app.css'
import 'normalize.css'
// @ts-expect-error Svelte component modules are provided by the Svelte/Vite plugin.
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
