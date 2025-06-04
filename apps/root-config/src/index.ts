import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';

const routes = constructRoutes(document.querySelector('#single-spa-layout') as HTMLElement);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* @vite-ignore */ name);
  },
});

constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);
start();
