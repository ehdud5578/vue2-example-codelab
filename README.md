# vue2-example-codelab

## vuetify 설치

vue cli add를 통한 Plugin 시 불필요한 파일이 많이 생겨 수동설치로 진행.

> [Vutify Install Guide for Webpack](https://vuetifyjs.com/en/getting-started/installation/#webpack-install)

```bash

yarn add vuetify@^2.6.0

yarn add -D sass@~1.32.0 sass-loader@^10.0.0 vue-cli-plugin-vuetify@~2.5.8 vuetify-loader@^1.7.0

```

`vue.config.js`

```js
// options add
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
});
```

`public/index.html`

```html
<!-- head 태그 내 append -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
/>
```

`plugins/vuetify.js`

```js
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({});
```

`main.js`

```js
import vuetify from './plugins/vuetify';

new Vue({
  router,
  store,
  vuetify, // add
  render: (h) => h(App),
}).$mount('#app');
```

### @mdi/font 적용

[Icon Search and Install](https://vuetifyjs.com/en/features/icon-fonts/#material-design-icons)

`public/index.html`

```html
<!-- append head 태그 -->
<link
  href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
  rel="stylesheet"
/>
```

`plugins/vuetify.js`

```js
export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
```

## vscode-extension-vetur

설치

설치후 > open user setting open

route 태그에 대한 커스텀 블럭 처리..

```json
{
  "vetur.grammar.customBlocks": {
    "docs": "md",
    "i18n": "json",
    "route": "json"
  }
}
```

작성 후

Vetur: Generate grammar from `vetur.grammar.customBlocks`

실행

##
