import { createSSRApp } from 'vue';
import App from './App.vue';
import * as Pinia from 'pinia';

//1.为应用创建“pinia根存储”
import { createPinia } from 'pinia';  ////////

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'    /////////

// const app = createApp(App);
// app.use(createPinia());
// app.mount('#app');



//创建pinia实例
const pinia = createPinia();
//使用持久化存储插件
pinia.use(piniaPluginPersistedstate);




// export default pinia
// pinina-plugin-persistedstate添加后不会默认地起作用
//需要手动配置





// import persist from 'pinia-plugin-persistedstate'
// pinia.use(persist)

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  return {
    app,
  };
}
