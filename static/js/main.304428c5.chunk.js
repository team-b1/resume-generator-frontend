(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){e.exports=a(441)},441:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),i=a(30),l=a(36),u=a(44),s=a(37),m=a(11),p="UPDATE_INFO_FIELD",d="ADD_EDUCATION",E="REMOVE_EDUCATION",f="UPDATE_EDUCATION",g="ADD_WORK",h="REMOVE_WORK",b="UPDATE_WORK",v="LOAD_USER_DATA",j="USER_DATA_RECEIVED",O="USER_DATA_FAILED",x="PUSH_USER_DATA",y="PUSH_USER_DATA_SUCCESS",w="PUSH_USER_DATA_FAIL";var C={company:"",companyLocation:"",curPosition:!1,start:"",end:"",position:"",description:""},k={school:"",degree:"",major:"",minor:"",start:"",end:"",gpa:""},N={firstName:"",lastName:"",locations:"",email:"",phoneNumber:"",website:"",education:[],work:[]};var A="UPDATE_LOGIN_FIELD",W="LOGIN",U="LOGIN_SUCCESS",D="LOGIN_FAIL";var S=a(120),_=a.n(S);a(271),a(273);_.a.initializeApp({apiKey:"AIzaSyA5mbA7usPKmj1obz5hK-69Yy1XP2X_zjg",authDomain:"resume-generator-754e7.firebaseapp.com",databaseURL:"https://resume-generator-754e7.firebaseio.com",projectId:"resume-generator-754e7",storageBucket:"resume-generator-754e7.appspot.com",messagingSenderId:"398049642940"});var I=_.a,L={email:"",password:"",failed:!1,success:!1,error:""};var R="UPDATE_SIGNUP_FIELD";var T={email:"",password:"",terms:""};var G=Object(i.c)({info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=e.education,n=e.work;switch(t.type){case p:return Object(m.a)({},e,Object(s.a)({},t.name,t.value));case d:return Object(m.a)({},e,{education:[].concat(Object(u.a)(a),[Object(m.a)({},k)])});case E:return Object(m.a)({},e,{education:[].concat(Object(u.a)(a.slice(0,t.id)),Object(u.a)(a.slice(t.id+1)))});case f:return Object(m.a)({},e,{education:[].concat(Object(u.a)(a.slice(0,t.id)),[Object(m.a)({},a[t.id],Object(s.a)({},t.name,t.value))],Object(u.a)(a.slice(t.id+1)))});case g:return Object(m.a)({},e,{work:[].concat(Object(u.a)(n),[Object(m.a)({},C)])});case h:return Object(m.a)({},e,{work:[].concat(Object(u.a)(n.slice(0,t.id)),Object(u.a)(n.slice(t.id+1)))});case b:return Object(m.a)({},e,{work:[].concat(Object(u.a)(n.slice(0,t.id)),[Object(m.a)({},n[t.id],Object(s.a)({},t.name,t.value))],Object(u.a)(n.slice(t.id+1)))});case j:return Object(m.a)({},t.data);case O:return e;case y:return Object(m.a)({},e,{pushed:!0});case w:default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return console.log(Object(m.a)({},e,Object(s.a)({},t.name,t.value))),Object(m.a)({},e,Object(s.a)({},t.name,t.value));case U:return console.log("Login Succeeded"),Object(m.a)({},e,{success:!0,failed:!1});case D:return console.log("Login Fail"),{email:"",password:"",failed:!0,error:t.error};default:return e}},signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return console.log(Object(m.a)({},e,Object(s.a)({},t.name,t.value))),Object(m.a)({},e,Object(s.a)({},t.name,t.value));default:return e}}}),P=a(71),F=a(24),q=a.n(F),z="UPDATE_INFO_FIELD",K="GENERATE_RESUME_FAIL";var M=a(19),B=a(178),H=a.n(B),J=q.a.mark(ne),V=q.a.mark(re),X=q.a.mark(oe),Y=q.a.mark(ie),Q=q.a.mark(ue),Z=q.a.mark(se),$=q.a.mark(de),ee=q.a.mark(Ee),te=q.a.mark(fe);function ae(e){return I.auth().signInWithEmailAndPassword(e.email,e.password)}function ne(e){var t;return q.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),a.prev=1,a.next=4,Object(M.d)(function(e){return e.login});case 4:return t=a.sent,a.next=7,Object(M.b)(ae,t);case 7:return a.sent,a.next=10,Object(M.c)({type:v});case 10:return a.next=12,Object(M.c)({type:U});case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(1),console.log(a.t0),a.next=19,Object(M.c)({type:D,error:a.t0});case 19:case"end":return a.stop()}},J,null,[[1,14]])}function re(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(W,ne);case 2:case"end":return e.stop()}},V)}function ce(e){return I.firestore().collection("user_info").doc(e).get()}function oe(e){var t;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.b)(ce,I.auth().currentUser.uid);case 3:return t=e.sent,e.next=6,Object(M.c)({type:j,data:t.data()});case 6:e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.next=13,Object(M.c)({type:O,error:e.t0});case 13:case"end":return e.stop()}},X,null,[[0,8]])}function ie(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(v,oe);case 2:case"end":return e.stop()}},Y)}function le(e,t){return I.firestore().collection("user_info").doc(e).set(t)}function ue(e){var t;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.d)(function(e){return e.info});case 3:return t=e.sent,e.next=6,Object(M.b)(le,I.auth().currentUser.uid,t);case 6:return e.sent,e.next=9,Object(M.c)({type:v});case 9:return e.next=11,Object(M.c)({type:y});case 11:e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.next=18,Object(M.c)({type:w,error:e.t0});case 18:case"end":return e.stop()}},Q,null,[[0,13]])}function se(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(x,ue);case 2:case"end":return e.stop()}},Z)}function me(e){return H.a.post("https://resume-generator-b1.herokuapp.com/",e,{responseType:"arraybuffer",headers:{"Content-Type":"application/json",Accept:"application/pdf"}})}function pe(e){var t=e.work.map(function(e){return"### "+e.company+"\n\n"+e.start+" to "+e.end+"\n\n"+e.position+", "+e.companyLocation+"\n\n"+e.description}).reduce(function(e,t){return e+t+"\n\n"},""),a=e.education.map(function(e){return"### "+e.school+"\n\n"+e.start+" to "+e.end+"\n\n"+e.major+" "+e.degree+"\n\nGPA: "+e.gpa}).reduce(function(e,t){return e+t+"\n\n"},"");return{Addr:"Location: "+e.locations,Name:e.firstName+" "+e.lastName,Cellphone:"Phone: "+e.phoneNumber,Email:"Email: "+e.email,Work:t,School:a}}function de(e){var t,a,n,r,c;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.d)(function(e){return e.info});case 3:return t=e.sent,a=pe(t),console.log(JSON.stringify(a)),e.next=8,Object(M.b)(me,a);case 8:n=e.sent,console.log(n),r=window.URL.createObjectURL(new Blob([n.data])),(c=document.createElement("a")).href=r,c.setAttribute("download","resume.pdf"),document.body.appendChild(c),c.click(),c.parentNode.removeChild(c),e.next=24;break;case 19:return e.prev=19,e.t0=e.catch(0),console.log(e.t0),e.next=24,Object(M.c)({type:K,error:e.t0});case 24:case"end":return e.stop()}},$,null,[[0,19]])}function Ee(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(z,de);case 2:case"end":return e.stop()}},ee)}function fe(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([re(),ie(),se(),Ee()]);case 2:case"end":return e.stop()}},te)}var ge=a(179),he=a(180),be=a(187),ve=a(181),je=a(188),Oe=a(54),xe=a(57),ye=a(47),we=a(15),Ce=a.n(we),ke=a(4),Ne=a.n(ke),Ae=a(32),We=a(25),Ue=a.n(We),De=a(34),Se=a.n(De),_e=a(35),Ie=a.n(_e),Le=a(31),Re=a.n(Le),Te=Object(xe.d)(function(e){var t=e.classes,a=e.history,n=Object(ye.a)(e,["classes","history"]);return n.pushed&&a.push("/user"),I.auth().currentUser||a.push("/login"),r.a.createElement("div",null,r.a.createElement(Se.a,{position:"static"},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,{variant:"h6",color:"inherit",className:t.grow},"Resume Generator"))),r.a.createElement("form",{autocomplete:"on",className:t.grow},r.a.createElement(Ne.a,{container:!0,spacing:0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement("h2",null," Personal ")),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"First Name",name:"firstName",type:"text",value:n.firstName,onChange:n.onChange,required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Last Name",name:"lastName",type:"text",value:n.lastName,onChange:n.onChange,required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Location",name:"locations",type:"text",value:n.locations,onChange:n.onChange})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Email",name:"email",type:"email",value:n.email,onChange:n.onChange,required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Phone Number",name:"phoneNumber",value:n.phoneNumber,onChange:n.onChange})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Website",name:"website",value:n.website,onChange:n.onChange})),r.a.createElement("h2",null," Education "),n.education.map(function(e,t){return r.a.createElement(Ne.a,{container:!0,spacing:0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Name",name:"school",type:"text",value:e.school,onChange:function(e){return n.updateEducation(t,e)},required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Degree",name:"degree",type:"text",value:e.degree,onChange:function(e){return n.updateEducation(t,e)},required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Major",name:"major",type:"text",value:e.major,onChange:function(e){return n.updateEducation(t,e)},required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Minor",name:"minor",type:"text",value:e.minor,onChange:function(e){return n.updateEducation(t,e)}})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Start Date",name:"start",type:"text",value:e.start,onChange:function(e){return n.updateEducation(t,e)},required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"End Date",name:"end",type:"text",value:e.end,onChange:function(e){return n.updateEducation(t,e)}})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"GPA",name:"gpa",type:"number",value:e.gpa,onChange:function(e){return n.updateEducation(t,e)}})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",color:"secondary",onClick:function(){return n.removeEducation(t)}},"Remove Education")))}),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",color:"primary",onClick:n.addEducation},"Add Education")),r.a.createElement("h2",null," Experience "),n.work.map(function(e,t){return r.a.createElement(Ne.a,{container:!0,spacing:0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Company",name:"company",type:"text",value:e.company,onChange:function(e){return n.updateWork(t,e)},required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Company Location",name:"companyLocation",type:"text",value:e.companyLocation,onChange:function(e){return n.updateWork(t,e)}})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Position",name:"position",type:"text",value:e.position,onChange:function(e){return n.updateWork(t,e)},required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Start Date",name:"start",type:"text",value:e.start,onChange:function(e){return n.updateWork(t,e)},required:!0})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"End Date",name:"end",type:"text",value:e.end,onChange:function(e){return n.updateWork(t,e)}})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ce.a,{fullWidth:!0,label:"Description",name:"description",type:"textarea",multiline:!0,value:e.description,onChange:function(e){return n.updateWork(t,e)}})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",color:"secondary",onClick:function(){return n.removeWork(t)}},"Remove Work")))}),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",color:"primary",onClick:n.addWork},"Add Work")),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",onClick:n.pushUserData},"Update Data")))))}),Ge=Object(Ae.withStyles)(function(e){return{grow:{flexGrow:1},paper:{flexGrow:1,marginTop:5*e.spacing.unit,margin:"auto",padding:2*e.spacing.unit}}})(Object(l.b)(function(e){return console.log(e.info),Object(m.a)({},e.info)},function(e){return{onChange:function(t){var a,n;e((a=t.target.name,n=t.target.value,{type:p,name:a,value:n}))},addEducation:function(){e({type:d})},removeEducation:function(t){e(function(e){return{type:E,id:e}}(t))},updateEducation:function(t,a){e(function(e,t,a){return{type:f,id:e,name:t,value:a}}(t,a.target.name,a.target.value))},addWork:function(){e({type:g})},removeWork:function(t){e(function(e){return{type:h,id:e}}(t))},updateWork:function(t,a){e(function(e,t,a){return{type:b,id:e,name:t,value:a}}(t,a.target.name,a.target.value))},pushUserData:function(){e({type:x})}}})(Te)),Pe=a(40),Fe=a.n(Pe),qe=Object(xe.d)(function(e){var t=e.history,a=e.classes;return r.a.createElement("div",null,r.a.createElement(Se.a,{position:"static"},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,{variant:"h6",color:"inherit",className:a.grow},"Resume Generator"))),r.a.createElement(Fe.a,{className:a.root},r.a.createElement(Ne.a,{container:!0,spacing:24,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{size:"large",variant:"contained",color:"primary",onClick:function(){t.push("/login")}},"Login")),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{size:"large",variant:"contained",color:"primary",onClick:function(){t.push("/signup")}},"Sign Up")))))}),ze=Object(Ae.withStyles)(function(e){return{root:{flexGrow:1,marginTop:5*e.spacing.unit},grow:{flexGrow:1},button:{margin:e.spacing.unit}}})(qe),Ke=Object(xe.d)(function(e){var t=e.classes,a=Object(ye.a)(e,["classes"]);return a.success&&a.history.push("/user"),r.a.createElement("div",null,r.a.createElement(Se.a,{position:"static"},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,{variant:"h6",color:"inherit",className:t.grow},"Resume Generator"))),a.failed&&r.a.createElement("h1",null,"Failed to Login: ",a.error.message),r.a.createElement("form",{autocomplete:"on"},r.a.createElement(Fe.a,{className:t.paper},r.a.createElement(Ne.a,{container:!0,spacing:0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:6},r.a.createElement(Ce.a,{name:"email",label:"Email",margin:"normal",value:a.email,onChange:a.onChange})),r.a.createElement(Ne.a,{item:!0,xs:6},r.a.createElement(Ce.a,{name:"password",label:"Password",margin:"normal",type:"password",value:a.password,onChange:a.onChange})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",color:"primary",onClick:a.login},"Login"))))))}),Me=Object(Ae.withStyles)(function(e){return{grow:{flexGrow:1},paper:{flexGrow:1,marginTop:5*e.spacing.unit,margin:"auto",padding:2*e.spacing.unit}}})(Object(l.b)(function(e){return Object(m.a)({},e.login)},function(e){return{onChange:function(t){var a,n;e((a=t.target.name,n=t.target.value,{type:A,name:a,value:n}))},login:function(){e({type:W})}}})(Ke)),Be=Object(xe.d)(function(e){var t=e.classes,a=e.history,n=Object(ye.a)(e,["classes","history"]);return r.a.createElement("div",null,r.a.createElement(Se.a,{position:"static"},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,{variant:"h6",color:"inherit",className:t.grow},"Resume Generator"))),n.failed&&r.a.createElement("h1",null,"Failed to Login: ",n.error.message),r.a.createElement("form",{autocomplete:"on"},r.a.createElement(Fe.a,{className:t.paper},r.a.createElement(Ne.a,{container:!0,spacing:0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:6},r.a.createElement(Ce.a,{name:"email",label:"Email",margin:"normal",value:n.email,onChange:n.onChange})),r.a.createElement(Ne.a,{item:!0,xs:6},r.a.createElement(Ce.a,{name:"password",label:"Password",margin:"normal",type:"password",value:n.password,onChange:n.onChange})),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",color:"primary",onClick:function(){return a.push("/login")}},"Sign Up"))))))}),He=Object(Ae.withStyles)(function(e){return{grow:{flexGrow:1},paper:{flexGrow:1,marginTop:5*e.spacing.unit,margin:"auto",padding:2*e.spacing.unit}}})(Object(l.b)(function(e){return Object(m.a)({},e)},function(e){return{onChange:function(t){var a,n;e((a=t.target.name,n=t.target.value,{type:R,name:a,value:n}))}}})(Be)),Je=Object(xe.d)(function(e){var t=e.classes,a=e.history,n=Object(ye.a)(e,["classes","history"]);return console.log(I.auth().currentUser),I.auth().currentUser||a.push("/login"),r.a.createElement("div",null,r.a.createElement(Se.a,{position:"static"},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,{variant:"h6",color:"inherit",className:t.grow},"Resume Generator"))),r.a.createElement(Fe.a,{className:t.root},r.a.createElement(Ne.a,{container:!0,spacing:24,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement("h1",null,"Welcome ",n.firstName,"!")),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",onClick:function(){a.push("/info")}},"User Data")),r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(Ue.a,{variant:"contained",onClick:function(){a.push("/generate")}},"Generate Resume")))))}),Ve=Object(Ae.withStyles)(function(e){return{root:{flexGrow:1,marginTop:5*e.spacing.unit}}})(Object(l.b)(function(e){return Object(m.a)({},e.info)},function(e){return{}})(Je)),Xe=a(183),Ye=a.n(Xe),Qe=a(184),Ze=a.n(Qe),$e=a(185),et=a.n($e),tt=a(186),at=a.n(tt),nt=Object(xe.d)(function(e){var t=e.classes,a=e.history,n=Object(ye.a)(e,["classes","history"]);return console.log(I.auth().currentUser),I.auth().currentUser||a.push("/login"),r.a.createElement("div",null,r.a.createElement(Se.a,{position:"static"},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,{variant:"h6",color:"inherit",className:t.grow},"Resume Generator"))),r.a.createElement(Ne.a,{container:!0,spacing:0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement("h1",null,"Select a Resume Template"),r.a.createElement(Ye.a,{className:t.card},r.a.createElement(Ze.a,{title:"Template 1",subheader:"Simple"}),r.a.createElement(et.a,null,r.a.createElement(at.a,{className:t.media,image:"/static/thumb1.png"}),r.a.createElement(Ne.a,{container:!0,spacing:0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(Ue.a,{variant:"contained",onClick:function(){return n.generateResume(1)}},"Select"))))))}),rt=Object(Ae.withStyles)(function(e){return{card:{maxWidth:400},media:{height:0,paddingTop:"56.25%"}}})(Object(l.b)(function(e){return Object(m.a)({},e.info)},function(e){return{generateResume:function(t){e({type:z,template:t})}}})(nt)),ct=function(e){function t(){return Object(ge.a)(this,t),Object(be.a)(this,Object(ve.a)(t).apply(this,arguments))}return Object(je.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(xe.a,{path:"/",exact:!0,component:ze}),r.a.createElement(xe.a,{path:"/signup",component:He}),r.a.createElement(xe.a,{path:"/login",component:Me}),r.a.createElement(xe.a,{path:"/info",component:Ge}),r.a.createElement(xe.a,{path:"/user",component:Ve}),r.a.createElement(xe.a,{path:"/generate",component:rt})))}}]),t}(n.Component),ot=Object(P.a)(),it=Object(i.e)(G,Object(i.a)(ot));ot.run(fe),o.a.render(r.a.createElement(l.a,{store:it},r.a.createElement(ct,null)),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.304428c5.chunk.js.map