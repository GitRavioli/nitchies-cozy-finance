import{ai as p,aj as u,a0 as m,T as g,a6 as f,a7 as e,ae as v,J as i,ag as n,Y as l,W as w,V as _}from"./index.b7569ce5.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const c={data(){return{email:"",password:""}},methods:{async handleLogin(){try{await p(u,this.email,this.password),this.$router.push("/")}catch(r){console.error("Login error:",r.message),alert("Failed to log in. Please check your credentials.")}}}},L={class:"login-page"},b={class:"container"},k={class:"form-group"},x={class:"form-group"},h={class:"note"};function V(r,s,E,B,t,a){const d=m("router-link");return g(),f("div",L,[e("div",b,[s[8]||(s[8]=e("h1",{class:"title"},"Welcome Back!",-1)),s[9]||(s[9]=e("p",{class:"subtitle"},"Let\u2019s revisit your cozy journey.",-1)),e("form",{onSubmit:s[2]||(s[2]=v((...o)=>a.handleLogin&&a.handleLogin(...o),["prevent"])),class:"form"},[e("div",k,[s[3]||(s[3]=e("label",{for:"email"},"Email",-1)),i(e("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=o=>t.email=o),type:"email",placeholder:"Enter your email",class:"input",required:""},null,512),[[n,t.email]])]),e("div",x,[s[4]||(s[4]=e("label",{for:"password"},"Password",-1)),i(e("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>t.password=o),type:"password",placeholder:"Enter your password",class:"input",required:""},null,512),[[n,t.password]])]),s[5]||(s[5]=e("button",{type:"submit",class:"btn"},"Log In",-1))],32),e("p",h,[s[7]||(s[7]=l(" Don\u2019t have an account? ")),w(d,{to:{name:"SignUp"},class:"link"},{default:_(()=>s[6]||(s[6]=[l("Sign up here")])),_:1})])])])}var P=y(c,[["render",V],["__scopeId","data-v-ca780a84"]]);export{P as default};
