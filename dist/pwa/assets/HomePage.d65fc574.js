import{$ as n,a6 as r,a7 as i,a8 as l,a9 as d,T as _,aa as u,ab as e,Z as o,W as m,a1 as p}from"./index.11fcf130.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const x={data(){return{totalIncome:5e3,totalExpenses:1500,recurringIncome:2e3,user:null}},created(){n(d,async a=>{if(a){const s=r(i,"users",a.uid),c=await l(s);c.exists()?this.user={...a,nickname:c.data().nickname}:console.log("No such document!")}else this.user=null})}},g={class:"homepage"},y={class:"header q-pa-md"},f={class:"title text-center text-h4 text-md-h3 text-lg-h2 text-xl-h1"},v={class:"subtitle text-center text-body2 text-md-body1 text-lg-body1"},b={class:"summary-section"},k={class:"summary-cards"},I={class:"card"},S={class:"card-value"},T={class:"card"},B={class:"card-value"},D={class:"card"},E={class:"card-value"},F={class:"actions-section"};function N(a,s,c,W,t,$){return _(),u("div",g,[e("header",y,[e("h1",f,o(t.user?`Welcome back, ${t.user.nickname||"Guest"}!`:"Welcome to the Cozy Finance Tracker"),1),e("p",v,o(t.user?"Keep track of your finances with ease.":"Login or Sign Up to take control of your finances, one cozy step at a time."),1)]),e("section",b,[s[3]||(s[3]=e("h2",{class:"section-title"},"Financial Summary",-1)),e("div",k,[e("div",I,[s[0]||(s[0]=e("h3",{class:"card-title"},"Total Income",-1)),e("p",S,"$"+o(t.totalIncome),1)]),e("div",T,[s[1]||(s[1]=e("h3",{class:"card-title"},"Total Expenses",-1)),e("p",B,"$"+o(t.totalExpenses),1)]),e("div",D,[s[2]||(s[2]=e("h3",{class:"card-title"},"Recurring Monthly Income",-1)),e("p",E,"$"+o(t.recurringIncome),1)])])]),e("section",F,[m(p,{to:{name:"Finance"},label:"Go to Finance Tracker",class:"action-btn"})])])}var C=h(x,[["render",N],["__scopeId","data-v-340a732b"]]);export{C as default};
