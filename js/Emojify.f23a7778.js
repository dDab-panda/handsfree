(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Emojify"],{"45e0":function(e,t,a){},"5ad7":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{staticClass:"col-12 col-lg-4"},[a("v-card",[a("v-card-title",[e._v("YouTube 360")]),a("v-card-text",[a("p",[e._v("This demo explores the "),a("code",[e._v("handsfree.head.morphs")]),e._v(" properties to match an emoji to your face!")]),a("h3",{staticClass:"mb-3"},[e._v("How to use")]),a("p",[e._v("Create different emojis by making different faces: 😐 🙂 😮 😲 😉 😡 ")])])],1)],1),a("v-col",{staticClass:"col-12 col-lg-8"},[a("v-card",[a("v-card-text",[a("h1",{style:e.emojiStyles,attrs:{id:"emoji"}},[e._v(e._s(e.emoji))])])],1)],1)],1)],1)},r=[],n=(a("99af"),{data:function(){return{headPOV:[],emoji:"😀"}},computed:{emojiStyles:function(){return"transform: perspective(1000px) rotateX(".concat(this.headPOV[0],"rad) rotateY(").concat(this.headPOV[1],"rad) rotateZ(").concat(this.headPOV[2],"rad)")}},mounted:function(){var e=this;window.Handsfree.disable("vertScroll"),window.Handsfree.use("emojify",(function(t,a){e.$set(e.headPOV,0,-a.head.rotation[0]),e.$set(e.headPOV,1,a.head.rotation[1]),e.$set(e.headPOV,2,-a.head.rotation[2]);var o=a.head.morphs,r="😐",n=.25,i=.65,s=.8,d=o[0]>i&&o[1]>i,c=o[0]>s&&o[1]<s||o[0]<s&&o[1]>s,f=o[0]<i&&o[0]<i,l=o[2]>s&&o[5]>s||o[3]>s&&o[4]>s,h=o[2]>n&&o[3]>n,u=o[4]>n&&o[5]>n,v=o[8]>s&&o[9]<s||o[8]<s&&o[9]>s;l&&f&&!v&&(r="🤨"),h&&(r="😡"),o[6]>n&&(r="😮"),u&&o[6]>n&&(r="😲"),d&&(r="🙂"),d&&u&&(r="😀"),v&&(d||c)&&(r="😉"),e.emoji=r}))},beforeDestroy:function(){window.Handsfree.disable("emojify"),window.Handsfree.enable("vertScroll")}}),i=n,s=(a("f2a1"),a("2877")),d=a("6544"),c=a.n(d),f=a("b0af"),l=a("99d9"),h=a("62ad"),u=a("a523"),v=a("0fd9"),m=Object(s["a"])(i,o,r,!1,null,"2fe67390",null);t["default"]=m.exports;c()(m,{VCard:f["a"],VCardText:l["b"],VCardTitle:l["c"],VCol:h["a"],VContainer:u["a"],VRow:v["a"]})},f2a1:function(e,t,a){"use strict";var o=a("45e0"),r=a.n(o);r.a}}]);
//# sourceMappingURL=Emojify.f23a7778.js.map