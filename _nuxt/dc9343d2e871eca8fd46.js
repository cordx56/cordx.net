(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(t,e,n){var content=n(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("6535bff9",content,!0,{sourceMap:!1})},187:function(t,e,n){"use strict";var r=n(181);n.n(r).a},188:function(t,e,n){(e=n(41)(!1)).push([t.i,"h1{font-size:1.5rem}",""]),t.exports=e},198:function(t,e,n){"use strict";n.r(e);var r=n(186),l={components:{VueQrcode:n.n(r).a},methods:{qrflip:function(){this.$refs.iconimg.classList.toggle("hidden"),this.$refs.iconqr.$el.classList.toggle("hidden")}}},o=n(21),c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{on:{click:this.qrflip}},[e("img",{ref:"iconimg",staticClass:"mx-auto",attrs:{src:"https://github.com/cordx56.png"}}),this._v(" "),e("vue-qrcode",{ref:"iconqr",staticClass:"mx-auto hidden",attrs:{value:"https://cordx.net/"}})],1)}),[],!1,null,null,null).exports,h=n(38),d=n.n(h),f={data:function(){return{ghdata:{}}},mounted:function(){var t=this;d.a.get("https://api.github.com/users/cordx56").then((function(e){t.ghdata=e.data})).catch((function(t){window.alert(t)}))}},v={components:{Icon:c,Profile:Object(o.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.ghdata.name))]),this._v(" "),e("h5",[this._v(this._s(this.ghdata.login))])])}),[],!1,null,null,null).exports,Links:Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"inline-block bg-transparent hover:bg-teal-600 text-teal-700 hover:text-white px-6 py-2 mx-4 my-2 border border-teal-600 rounded",attrs:{href:"https://cordx.net/",target:"_blank"}},[this._v("\n    Portfolio\n  ")]),this._v(" "),e("a",{staticClass:"inline-block bg-transparent hover:bg-gray-700 text-gray-700 hover:text-white px-6 py-2 mx-4 my-2 border border-gray-700 rounded",attrs:{href:"https://github.com/cordx56",target:"_blank"}},[this._v("\n    GitHub\n  ")])])}],!1,null,null,null).exports}},m=(n(187),Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container flex flex-wrap justify-center items-center mx-auto min-h-screen"},[e("div",{staticClass:"w-full md:w-1/3 lg:w-1/4"},[e("icon")],1),this._v(" "),e("div",{staticClass:"w-full md:w-2/3 lg:w-3/4 p-4"},[e("profile"),this._v(" "),e("h1",{staticClass:"title"},[this._v("\n      meishi\n    ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n      digital Meishi webpage\n    ")]),this._v(" "),e("links")],1)])}),[],!1,null,null,null));e.default=m.exports}}]);