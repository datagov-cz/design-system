---
title: Usage with Vue.js
---

```shell
npm install @gov-design-system-ce/vue
```

To integrate `@gov-design-system-ce/vue` into a [Vue.js](https://vuejs.org/) application, edit `src/main.js` to include:

```javascript
import { applyPolyfills, defineCustomElements } from "@gov-design-system-ce/components/dist/loader";
Vue.config.ignoredElements = [/gov-\w*/];
applyPolyfills().then(() => {
    defineCustomElements(window);
});

new Vue({
    render: h => h(App)
}).$mount("#app");
```

More information on [StencilJS](https://stenciljs.com/docs/vue) website.
