(this["webpackJsonputd-faq-chatbot"]=this["webpackJsonputd-faq-chatbot"]||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),a=s.n(r),i=s(24),c=s.n(i),o=(s(35),s(36),s(3)),u=s(4),d=s(6),h=s(5),l=s(25),j=s.n(l),p=s(9),b=s.n(p),f=s(12),m=s(55),O=s(21),v=s(10),w=s(8),x=(s(46),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={currentCosinSim:"",currentQuestion:"",currentAnswer:"",index:0,showAnswer:!1,answeredQuestion:!1},e.toggleShowAnswer=function(){e.setState({showAnswer:!e.state.showAnswer})},e.handleAnsweredQuestion=function(){var t=e.state,s=t.currentQuestion,n=t.currentAnswer;e.props.handleAnsweredQuestion(s,n),e.setState({showAnswer:!1,answeredQuestion:!0})},e.handleIndexIncrement=function(){e.state.index!=e.props.questions.response.length-1&&e.updateCurrentQuestion(e.state.index+1)},e.handleIndexDecrement=function(){0!=e.state.index&&e.updateCurrentQuestion(e.state.index-1)},e.updateCurrentQuestion=function(t){var s=e.props.questions.response;e.setState({index:t,currentCosinSim:s[t][0],currentQuestion:s[t][1],currentAnswer:s[t][2],showAnswer:!1})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.updateCurrentQuestion(0)}},{key:"render",value:function(){var e=this.state,t=e.currentAnswer,s=e.currentCosinSim,a=e.currentQuestion,i=e.index,c=e.showAnswer,o=e.answeredQuestion,u=this.props.questions.response;return Object(n.jsx)(r.Fragment,{children:o?Object(n.jsx)("div",{children:"I'm happy to have assisted you!"}):Object(n.jsxs)("div",{className:"card-wrapper",children:[Object(n.jsxs)("div",{className:"direction-wrapper",children:[Object(n.jsx)(v.a,{className:0==i?"grey left-arrow":"left-arrow",onClick:this.handleIndexDecrement,icon:w.a}),Object(n.jsx)(v.a,{className:i==u.length-1?"grey right-arrow":"right-arrow",onClick:this.handleIndexIncrement,icon:w.b})]}),Object(n.jsxs)("div",{className:"text-response",children:[Object(n.jsx)("b",{children:"Cosin Similarity:"})," ",s]}),Object(n.jsxs)("div",{className:"text-response",children:[Object(n.jsx)("b",{children:"Question:"})," ",a]}),c?Object(n.jsxs)("div",{className:"text-response",children:[Object(n.jsx)("b",{children:"Answer:"})," ",t]}):"",Object(n.jsx)(O.a,{variant:"outline-dark show-answer-button",onClick:this.toggleShowAnswer,children:"Answer"}),Object(n.jsx)("div",{children:c?Object(n.jsx)(O.a,{variant:"outline-success show-answer-button",onClick:this.handleAnsweredQuestion,children:"This Answers My Question"}):""})]})})}}]),s}(r.Component)),g=(s(47),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={questions:[],isLoaded:!1},e.updateUserModel=function(){var t=e.props.steps,s=t.name,n=t.type;t.question;e.props.handleName(s.message),e.props.handleUserType(n.message)},e.handleAnsweredQuestion=function(t,s){var n=e.props.steps,r=n.name,a=n.type,i=n.question;e.props.handleQuestionsAnswered(i.message,t,s),e.postRecentlyAsked(r.message,a.message,i.message,t,s)},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getIntentsFromDB(),this.updateUserModel()}},{key:"postRecentlyAsked",value:function(){var e=Object(f.a)(b.a.mark((function e(t,s,n,r,a){var i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("HTTP CALL: postRecentlyAsked"),i="https://utd-faq-chatbot.herokuapp.com",e.next=4,fetch(i+"/recentlyAsked/"+s,{method:"DELETE"}).then((function(e){return e.json({message:"Recieved"})}));case 4:return e.sent,c={user:t,userType:s,questionData:{userQuestion:n,faqQuestion:r,faqAnswer:a}},e.next=8,fetch(i+"/recentlyAsked/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json({message:"Recieved"})}));case 8:e.sent;case 9:case"end":return e.stop()}}),e)})));return function(t,s,n,r,a){return e.apply(this,arguments)}}()},{key:"getIntentsFromDB",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,s,n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("HTTP CALL: getQuestionQuery"),"https://utd-faq-chatbot.herokuapp.com",e.next=4,fetch("https://utd-faq-chatbot.herokuapp.com/question/"+this.props.steps.question.message).then((function(e){return e.json({message:"Recieved"})})).then((function(e){return n.setState({questions:JSON.parse(JSON.stringify(e)),isLoaded:!0}),localStorage.setItem("query",JSON.parse(JSON.stringify(e))),e.status}),(function(e){return console.log("error"),n.setState({error:e}),e.status}));case 4:return t=e.sent,e.next=7,t;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.questions,s=e.isLoaded;return Object(n.jsx)(r.Fragment,{children:s?Object(n.jsx)("div",{className:"dark normal-font-size",children:Object(n.jsx)(x,{questions:t,handleAnsweredQuestion:this.handleAnsweredQuestion,userType:this.props.steps.type.message})}):Object(n.jsx)(m.a,{animation:"border",variant:"dark",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),s}(r.Component)),y=(s(48),r.Component,function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)(r.Fragment,{children:Object(n.jsx)("div",{className:"chatbot-wrapper",children:Object(n.jsx)(j.a,{width:"500px",steps:[{id:"1",message:"Hello, what's your name?",trigger:"name"},{id:"name",user:!0,trigger:"3"},{id:"3",message:"Hi {previousValue}, are you faculty or student?",trigger:"type"},{id:"type",user:!0,trigger:"4"},{id:"4",message:"Good to know!",trigger:"5"},{id:"5",message:"Ask me any question about UTD (ex: How do I apply to UTD?)",trigger:"question"},{id:"question",user:!0,trigger:"question_component"},{id:"question_component",component:Object(n.jsx)(g,{updateQuestions:this.props.updateQuestions,handleName:this.props.handleName,handleUserType:this.props.handleUserType,handleQuestionsAnswered:this.props.handleQuestionsAnswered}),trigger:"10"},{id:"10",message:"Do you have another question?",delay:15e3,trigger:"loop_question"},{id:"loop_question",options:[{value:1,label:"Yes, another question.",trigger:"another question"},{value:2,label:"No, I'm good.",trigger:"exit"}]},{id:"another question",message:"No problem! What other question may you have?",trigger:"question"},{id:"exit",message:"Thanks for using UTD Chatbot!",end:!0}]})})})}}]),s}(r.Component)),q=(s(49),s(50),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props,t=e.name,s=e.userType,a=e.questionData;return Object(n.jsx)(r.Fragment,{children:Object(n.jsxs)("div",{className:"user-model-wrapper card-border",children:[Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:"USER MODEL"})}),Object(n.jsxs)("div",{children:["Name: ",t]}),Object(n.jsxs)("div",{children:["User Type: ",s]}),Object(n.jsxs)("div",{children:["Question: ",a.question?a.question.message:""]}),Object(n.jsxs)("div",{children:["Matched FAQ Question: ",a?a.faqQuestion:""]}),Object(n.jsxs)("div",{children:["Matched FAQ Answer: ",a?a.faqAnswer:""]})]})})}}]),s}(r.Component)),A=(s(51),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)(r.Fragment,{children:Object(n.jsxs)("div",{className:"current-scraped-sites-wraper card-border",children:[Object(n.jsx)(v.a,{className:"refresh-button",onClick:this.refreshComponent,icon:w.c}),Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:"Current Scraped Sites"})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://utdallas.edu/covid/response/faq/",children:"https://utdallas.edu/covid/response/faq/"})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://registrar.utdallas.edu/faq/",children:"https://registrar.utdallas.edu/faq/"})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://www.utdallas.edu/counseling/faq/index.html",children:"https://www.utdallas.edu/counseling/faq/index.html"})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://www.utdallas.edu/housing/faq/",children:"https://www.utdallas.edu/housing/faq/"})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://www.utdallas.edu/services/transit/parkfaq/",children:"https://www.utdallas.edu/services/transit/parkfaq/"})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://cs.utdallas.edu/admissions/admissions-faq/",children:"https://cs.utdallas.edu/admissions/admissions-faq/"})})]})})}}]),s}(r.Component)),k=(s(52),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={showStudent:!1,showFaculty:!1,showRefresh:!1,refreshTime:""},e.toggleShowStudent=function(){e.setState({showStudent:!e.state.showStudent})},e.toggleShowFaculty=function(){e.setState({showFaculty:!e.state.showFaculty})},e.refreshComponent=function(){e.getRecentlyAsked("faculty"),e.getRecentlyAsked("student"),e.setState({showRefresh:!0,refreshTime:new Date})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getRecentlyAsked("student"),this.getRecentlyAsked("faculty")}},{key:"getRecentlyAsked",value:function(){var e=Object(f.a)(b.a.mark((function e(t){var s,n,r=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("HTTP CALL: getRecentlyAsked"),"https://utd-faq-chatbot.herokuapp.com",e.next=4,fetch("https://utd-faq-chatbot.herokuapp.com/recentlyAsked/"+t).then((function(e){return e.json({message:"Recieved"})})).then((function(e){if(0!==e.length){var t=e[0],s=t.questionData,n=t.user,a=t.userType,i=t.date;"FACULTY"===a?r.setState({faculty:{user:n,userType:a,date:i,questionData:s}}):r.setState({student:{user:n,userType:a,date:i,questionData:s}})}}),(function(e){return console.log("error"),r.setState({error:e}),e.status}));case 4:return s=e.sent,e.next=7,s;case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.showStudent,s=e.showFaculty,a=e.student,i=e.faculty,c=e.showRefresh,o=e.refreshTime;return Object(n.jsx)(r.Fragment,{children:Object(n.jsxs)("div",{className:"recently-asked-wrapper card-border",children:[Object(n.jsx)(v.a,{className:"refresh-button",onClick:this.refreshComponent,icon:w.c}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Recently asked by student:"})," "]}),t&&a?Object(n.jsxs)("div",{className:"show-recent-wrapper",children:[Object(n.jsxs)("div",{children:["Name: ",a.user]}),Object(n.jsxs)("div",{children:["Date: ",a.date]}),Object(n.jsxs)("div",{children:["user_Q: ",a.questionData.userQuestion]}),Object(n.jsxs)("div",{children:["Q: ",a.questionData.faqQuestion]}),Object(n.jsxs)("div",{children:["A: ",a.questionData.faqAnswer]})]}):"",Object(n.jsx)(O.a,{variant:"outline-light normal-text-size",onClick:this.toggleShowStudent,children:"SHOW"}),Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:"Recently asked by faculty: "})}),s&&i?Object(n.jsxs)("div",{className:"show-recent-wrapper",children:[Object(n.jsxs)("div",{children:["Name: ",i.user]}),Object(n.jsxs)("div",{children:["Date: ",i.date]}),Object(n.jsxs)("div",{children:["user_Q: ",i.questionData.userQuestion]}),Object(n.jsxs)("div",{children:["Q: ",i.questionData.faqQuestion]}),Object(n.jsxs)("div",{children:["A: ",i.questionData.faqAnswer]})]}):"",Object(n.jsx)(O.a,{variant:"outline-light normal-text-size",onClick:this.toggleShowFaculty,children:"SHOW"}),c?Object(n.jsxs)("div",{className:"refresh-message",children:["Refreshed ",o.toString()]}):""]})})}}]),s}(r.Component)),Q=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={questions:[],name:"",userType:"",questionData:{}},e.handleName=function(t){e.setState({name:t})},e.handleUserType=function(t){e.setState({userType:t})},e.handleQuestionsAnswered=function(t,s,n){e.setState({questionData:{question:t,faqQuestion:s,faqAnswer:n}})},e.updateQuestions=function(t){e.setState({questions:t})},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this.state,t=e.name,s=e.userType,a=e.questionData;return Object(n.jsx)(r.Fragment,{children:Object(n.jsxs)("div",{className:"home-wrapper",children:[Object(n.jsx)(y,{updateQuestions:this.updateQuestions,handleName:this.handleName,handleUserType:this.handleUserType,handleQuestionsAnswered:this.handleQuestionsAnswered}),Object(n.jsxs)("div",{children:[Object(n.jsx)(k,{}),Object(n.jsx)(q,{name:t,userType:s,questionData:a}),Object(n.jsx)(A,{})]})]})})}}]),s}(r.Component);var S=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(Q,{})})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),a(e),i(e)}))};s(53);c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),C()}},[[54,1,2]]]);
//# sourceMappingURL=main.8576d5fb.chunk.js.map