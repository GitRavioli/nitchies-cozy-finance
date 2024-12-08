import{d as c}from"./db.436217f6.js";import{T as d,a6 as l,a7 as r,ae as m,J as n,af as u,ag as i,a8 as p,ah as y}from"./index.b7569ce5.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const v={data(){return{transactionType:"",amount:"",category:"",date:"",recurringName:"",recurringAmount:"",recurrenceType:"",recurrenceDate:"",recurrenceDay:"",transactionReceipt:null}},methods:{async handleSubmit(){console.log("Transaction Data:",{type:this.transactionType,amount:this.amount,category:this.category,date:this.date});try{console.log("Submitting transaction:",{type:this.transactionType,amount:parseFloat(this.amount),category:this.category,date:this.date}),await c.transactions.add({type:this.transactionType,amount:parseFloat(this.amount),category:this.category,date:this.date}),this.clearForm(),this.transactionReceipt={type:this.transactionType,amount:parseFloat(this.amount),category:this.category,date:this.date}}catch(a){alert("Error adding transaction: "+a)}},async handleRecurring(){console.log("Recurring Income Data:",{name:this.recurringName,amount:this.recurringAmount,recurrenceType:this.recurrenceType,recurrenceDateOrDay:this.recurrenceType==="weekly"?this.recurrenceDay:this.recurrenceDate});try{let a=this.recurrenceType==="weekly"?this.recurrenceDay:this.recurrenceDate;await c.recurring.add({name:this.recurringName,amount:parseFloat(this.recurringAmount),recurrenceType:this.recurrenceType,recurrenceDateOrDay:a}),this.clearRecurringForm(),alert(`Recurring income added: ${this.recurringName} - $${this.recurringAmount}, ${this.recurrenceType} on ${a}`)}catch(a){alert("Error adding recurring income: "+a)}},clearForm(){this.amount="",this.category="",this.date=""},clearRecurringForm(){this.recurringName="",this.recurringAmount="",this.recurrenceDate="",this.recurrenceDay=""}}},f={class:"finance-page"},b={class:"transaction-forms"},T={class:"form-section"},h={class:"form-group"},D={class:"form-group"},R={class:"form-group"},S={class:"form-group"},A={class:"recurring-section"},k={class:"form-group"},V={class:"form-group"},w={class:"form-group"},F={key:0,class:"form-group"},N={key:1,class:"form-group"};function U(a,e,x,E,o,s){return d(),l("div",f,[e[28]||(e[28]=r("header",{class:"header"},[r("h1",{class:"title"},"Manage Your Finances"),r("p",{class:"subtitle"},"Easily record and manage your income and expenses with ease and elegance.")],-1)),r("div",b,[r("section",T,[e[18]||(e[18]=r("h2",null,"Add Income or Expense",-1)),r("form",{onSubmit:e[4]||(e[4]=m((...t)=>s.handleSubmit&&s.handleSubmit(...t),["prevent"])),class:"finance-form"},[r("div",h,[e[12]||(e[12]=r("label",{for:"type"},"Type",-1)),n(r("select",{id:"type","onUpdate:modelValue":e[0]||(e[0]=t=>o.transactionType=t),class:"form-control",required:""},e[11]||(e[11]=[r("option",{value:"income"},"Income",-1),r("option",{value:"expense"},"Expense",-1)]),512),[[u,o.transactionType]])]),r("div",D,[e[13]||(e[13]=r("label",{for:"amount"},"Amount",-1)),n(r("input",{id:"amount",type:"number","onUpdate:modelValue":e[1]||(e[1]=t=>o.amount=t),placeholder:"Enter amount",class:"form-control",required:""},null,512),[[i,o.amount]])]),r("div",R,[e[15]||(e[15]=r("label",{for:"category"},"Category",-1)),n(r("select",{id:"category","onUpdate:modelValue":e[2]||(e[2]=t=>o.category=t),class:"form-control",required:""},e[14]||(e[14]=[p('<option value="Rent" data-v-00ddeeb8>Rent</option><option value="Salary" data-v-00ddeeb8>Salary</option><option value="Groceries" data-v-00ddeeb8>Groceries</option><option value="Utilities" data-v-00ddeeb8>Utilities</option><option value="Entertainment" data-v-00ddeeb8>Entertainment</option><option value="Other" data-v-00ddeeb8>Other</option>',6)]),512),[[u,o.category]])]),r("div",S,[e[16]||(e[16]=r("label",{for:"date"},"Date",-1)),n(r("input",{id:"date",type:"date","onUpdate:modelValue":e[3]||(e[3]=t=>o.date=t),class:"form-control",required:""},null,512),[[i,o.date]])]),e[17]||(e[17]=r("button",{type:"submit",class:"btn-submit"},"Add Transaction",-1))],32)]),r("section",A,[e[27]||(e[27]=r("h2",null,"Recurring Income",-1)),r("form",{onSubmit:e[10]||(e[10]=m((...t)=>s.handleRecurring&&s.handleRecurring(...t),["prevent"])),class:"recurring-form"},[r("div",k,[e[19]||(e[19]=r("label",{for:"recurring-name"},"Name",-1)),n(r("input",{id:"recurring-name",type:"text","onUpdate:modelValue":e[5]||(e[5]=t=>o.recurringName=t),placeholder:"e.g., Salary",class:"form-control",required:""},null,512),[[i,o.recurringName]])]),r("div",V,[e[20]||(e[20]=r("label",{for:"recurring-amount"},"Amount",-1)),n(r("input",{id:"recurring-amount",type:"number","onUpdate:modelValue":e[6]||(e[6]=t=>o.recurringAmount=t),placeholder:"Enter amount",class:"form-control",required:""},null,512),[[i,o.recurringAmount]])]),r("div",w,[e[22]||(e[22]=r("label",{for:"recurrence-type"},"Recurrence Type",-1)),n(r("select",{id:"recurrence-type","onUpdate:modelValue":e[7]||(e[7]=t=>o.recurrenceType=t),class:"form-control",required:""},e[21]||(e[21]=[r("option",{value:"weekly"},"Weekly",-1),r("option",{value:"monthly"},"Monthly",-1)]),512),[[u,o.recurrenceType]])]),o.recurrenceType==="weekly"?(d(),l("div",F,[e[24]||(e[24]=r("label",{for:"day-of-week"},"Day of the Week",-1)),n(r("select",{id:"day-of-week","onUpdate:modelValue":e[8]||(e[8]=t=>o.recurrenceDay=t),class:"form-control",required:""},e[23]||(e[23]=[p('<option value="Monday" data-v-00ddeeb8>Monday</option><option value="Tuesday" data-v-00ddeeb8>Tuesday</option><option value="Wednesday" data-v-00ddeeb8>Wednesday</option><option value="Thursday" data-v-00ddeeb8>Thursday</option><option value="Friday" data-v-00ddeeb8>Friday</option><option value="Saturday" data-v-00ddeeb8>Saturday</option><option value="Sunday" data-v-00ddeeb8>Sunday</option>',7)]),512),[[u,o.recurrenceDay]])])):y("",!0),o.recurrenceType==="monthly"?(d(),l("div",N,[e[25]||(e[25]=r("label",{for:"recurrence-date"},"Recurrence Date",-1)),n(r("input",{id:"recurrence-date",type:"date","onUpdate:modelValue":e[9]||(e[9]=t=>o.recurrenceDate=t),class:"form-control",required:""},null,512),[[i,o.recurrenceDate]])])):y("",!0),e[26]||(e[26]=r("button",{type:"submit",class:"btn-submit"},"Add Recurring Income",-1))],32)])])])}var O=g(v,[["render",U],["__scopeId","data-v-00ddeeb8"]]);export{O as default};