(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{206:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。")]),t._v(" "),a("p",[t._v("结合 Vue 的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步组件"),a("OutboundLink")],1),t._v("和 Webpack 的"),a("a",{attrs:{href:"https://doc.webpack-china.org/guides/code-splitting",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码分割功能"),a("OutboundLink")],1),t._v("，轻松实现路由组件的懒加载。如：")]),t._v(" "),t._m(1),a("br"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),a("p",[a("strong",[t._v("这里注意一下该写法只支持 "),a("code",[t._v("vue-loader at least v13.0.0+")]),t._v("理由 "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/231",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin/issues/231"),a("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("当然这样写会有一些副作用。由于")]),t._v(" "),t._m(10),t._v(" "),a("p",[a("code",[t._v("@/views/下的 .vue")]),t._v(" 文件都会被打包。不管你是否被依赖。所以这样就产生了一个副作用，就是会多打包一些可能永远都用不到 js 代码。当然这只会增加 dist 文件的大小，但不会对线上代码产生任何的副作用。"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/292",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关 issue"),a("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("babel")]),t._v(" 的 "),a("code",[t._v("plugins")]),t._v(" "),a("a",{attrs:{href:"https://github.com/airbnb/babel-plugin-dynamic-import-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-dynamic-import-node"),a("OutboundLink")],1),t._v("。它只做一件事就是将所有的"),a("code",[t._v("import()")]),t._v("转化为"),a("code",[t._v("require()")]),t._v("，这样就可以用这个插件将所有异步组件都用同步的方式引入，并结合 "),a("a",{attrs:{href:"https://babeljs.io/docs/usage/babelrc/#env-option",target:"_blank",rel:"noopener noreferrer"}},[t._v("BABEL_ENV"),a("OutboundLink")],1),t._v(" 这个"),a("code",[t._v("babel")]),t._v("环境变量，让它只作用于开发环境下，在开发环境中将所有"),a("code",[t._v("import()")]),t._v("转化为"),a("code",[t._v("require()")]),t._v("，这种方案解决了之前重复打包的问题，同时对代码的侵入性也很小，你平时写路由的时候只需要按照官方"),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("路由懒加载的方式就可以了，其它的都交给"),a("code",[t._v("bable")]),t._v("来处理，当你不想用这个方案的时候，也只要将它从"),a("code",[t._v("babel")]),t._v(" 的 "),a("code",[t._v("plugins")]),t._v("中移除就可以了。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),a("p",[t._v("之后就大功告成了，路由只要像平时一样写就可以了。")]),t._v(" "),t._m(18),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/727",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码改动"),a("OutboundLink")],1)]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("webpack4 已经出了，大幅提高了打包和编译速度，之后可能完全不需要搞这么复杂了。再多的页面热更新都能很快，完全就不需要前面提到的解决方案了。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"路由懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 路由懒加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("当你觉得你的页面热更新速度慢的时候，才需要往下看 ↓")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"区分开发与生产环境-该方案已淘汰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区分开发与生产环境-该方案已淘汰","aria-hidden":"true"}},[this._v("#")]),this._v(" 区分开发与生产环境 [该方案已淘汰]")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当你的项目页面越来越多之后，在开发环境之中使用 "),s("code",[this._v("lazy-loading")]),this._v(" 会变得不太合适，每次更改代码触发热更新都会变得非常的慢。所以建议只在生产环境之中使用路由懒加载功能。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("开发环境：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" file "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/views/'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" file "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// vue-loader at least v13.0.0+")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("生产环境：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" file "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/views/'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" file "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"淘汰原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#淘汰原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 淘汰原因")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Every module that could potentially be requested on an import() call is included. For example, import(./locale/${language}.json) will cause every .json file in the ./locale directory to be bundled into the new chunk. At run time, when the variable language has been computed, any file like english.json or german.json will be available for consumption.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("用户自己可以根据业务情况来衡量一下是否采用本方案，如果你的项目页面不超过几十个，本地开发热更新速度你还能接受的话，可以直接所有环境下都是用懒加载避免此副作用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"新方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 新方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("具体代码：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先在"),s("code",[this._v("package.json")]),this._v("中增加"),s("code",[this._v("BABEL_ENV")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[this._v('"dev"')]),s("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v('"cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"')]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("接着在"),a("code",[t._v(".babelrc")]),t._v("只能加入"),a("code",[t._v("babel-plugin-dynamic-import-node")]),t._v("这个"),a("code",[t._v("plugins")]),t._v("，并让它只有在"),a("code",[t._v("development")]),t._v("模式中才生效。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"env"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"development"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"dynamic-import-node"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/views/login/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"改进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改进","aria-hidden":"true"}},[this._v("#")]),this._v(" 改进")])}],!1,null,null,null);n.options.__file="lazy-loading.md";s.default=n.exports}}]);