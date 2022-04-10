import { createApp } from 'vue';
import App from './App';
import './css/global.css';
import StylesApp from 'styles/StylesApp';
const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#vue-app');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
