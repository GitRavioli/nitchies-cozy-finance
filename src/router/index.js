import { route } from 'quasar/wrappers'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes' // Correct import for routes
import { auth } from '../boot/firebase'; // Adjust path as needed
import { onAuthStateChanged } from 'firebase/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,  // Make sure this is an array of routes
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  // Navigation Guard with async check
  Router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    
    // Ensure the navigation guard is returning a promise
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (requiresAuth && !user) {
          // Redirect to login if authentication is required and the user is not logged in
          next("/login");
        } else {
          // Proceed to the next route
          next();
        }
        resolve(); // Resolve the promise once the check is done
      });
    });
  });

  return Router;
});
