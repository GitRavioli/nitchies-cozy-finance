import{c as f,a as i,h as g,d as p,g as v,j as _,k as s,p as q,M as k,T as Q,U as $,V as o,a7 as x,W as r,a1 as m,Y as u}from"./index.b889b889.js";import{u as B,a as S,d as w,c as D,Q as h,b as y}from"./QItem.17fde983.js";import{t as P}from"./db.436217f6.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";var F=f({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const n=i(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(e.tag,{class:n.value},p(a.default))}}),I=f({name:"QCard",props:{...B,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:n}}=v(),t=S(e,n),d=i(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>g(e.tag,{class:d.value},p(a.default))}}),T=f({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:n}}=v(),t=_(q,s);if(t===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(_(k,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const c=i(()=>{const l=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const C=t.isContainer.value===!0?t.containerHeight.value:n.screen.height;return e.styleFn(l,C)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-l+"px":n.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":n.screen.height-l+"px"}}),b=i(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:b.value,style:c.value},p(a.default))}});const H={data(){return{}},methods:{goBack(){this.$router.go(-1)},async clearDatabase(){try{await P.clearTransactions(),this.$q.notify({color:"green",message:"Database cleared successfully.",icon:"check"})}catch(e){this.$q.notify({color:"red",message:"Error clearing database.",icon:"error"}),console.error("Error clearing database:",e)}}}},V={class:"row justify-between items-center q-mb-lg"};function j(e,a,n,t,d,c){return Q(),$(T,{padding:""},{default:o(()=>[x("div",V,[r(m,{flat:"",round:"",icon:"arrow_back",onClick:c.goBack},null,8,["onClick"]),r(w,null,{default:o(()=>a[0]||(a[0]=[u("Settings")])),_:1})]),r(I,{class:"q-mb-md"},{default:o(()=>[r(F,null,{default:o(()=>[r(D,null,{default:o(()=>[r(h,null,{default:o(()=>[r(y,null,{default:o(()=>a[1]||(a[1]=[u("Clear Database")])),_:1}),r(y,{caption:""},{default:o(()=>a[2]||(a[2]=[u("Clear all data stored in your app")])),_:1})]),_:1}),r(h,{side:""},{default:o(()=>[r(m,{flat:"",label:"Clear",color:"negative",onClick:c.clearDatabase},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var M=z(H,[["render",j],["__scopeId","data-v-2867cf24"]]);export{M as default};
