import { createApp } from 'vue';
import App from './App';
import './css/global.css';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';

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
