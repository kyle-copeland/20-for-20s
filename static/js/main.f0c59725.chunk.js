(window["webpackJsonp20-for-20s"]=window["webpackJsonp20-for-20s"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(6),r=a.n(o),i=(a(12),a(13),a(14),a(4)),c=(a(15),a(16),{October:[{date:"Oct 1 2019",description:"Fall Session Kick-Off!"},{date:"Oct 8 2019",description:"The Sermon of the King",podcast:"https://realitycarpinteria.com/sermons/the-sermon-and-summons-of-the-king/"},{date:"Oct 13 2019",description:"\ud83c\udf74 Church Picnic",location:"William Mason Park",time:"10:30 AM",moreInfo:"https://gracefellowshipchurch.org/event/grace-all-church-picnic/5710"},{date:"Oct 15 2019",description:"God's Good News",podcast:"https://realitycarpinteria.com/sermons/gods-good-news-for-the-unexpected-and-undeserving/"},{date:"Oct 22 2019",description:"Salt and Light",podcast:"https://realitycarpinteria.com/sermons/what-is-it-to-be-salt-and-light/"},{date:"Oct 29 2019",description:"\ud83c\udf83 Halloween Event",details:"Bring a pumpkin for carving"}],November:[{date:"Nov 5 2019",description:"How to Discuss"},{date:"Nov 12 2019",description:"God's Law",podcast:"https://realitycarpinteria.com/sermons/getting-the-story-of-gods-law-right/"},{date:"Nov 19 2019",location:"TBD",description:"\ud83e\udd83 Friendsgiving!",time:"TBD"}],December:[{date:"Dec 3rd 2019",description:"The Lord's Prayer",podcast:"https://realitycarpinteria.com/sermons/the-lords-prayer/"},{date:"Dec 10 2019",description:"Forgiving Others",podcast:"https://realitycarpinteria.com/sermons/forgiving-others-part-2/"},{date:"Dec 17 2019",location:"TBD",description:"\ud83c\udf85 Christmas Event!",time:"TBD"}],January:[{date:"Jan 7 2020",description:"Fasting",podcast:"https://realitycarpinteria.com/sermons/the-reward-of-fasting/"},{date:"Jan 14 2020",description:"Problem with Treasure",podcast:"https://realitycarpinteria.com/sermons/the-problem-with-treasure/"},{date:"Jan 21 2020",description:"The Ruthless Elimination of Hurry",podcast:"https://podcasts.apple.com/us/podcast/the-ruthless-elimination-of-hurry/id84246334?i=1000455322506"},{date:"Jan 28 2020",description:"The Case for a Digital Asceticism",podcast:"https://podcasts.apple.com/us/podcast/the-case-for-a-digital-asceticism/id84246334?i=1000456631843"}],February:[{date:"Feb 4 2020",description:"Social Event"},{date:"Feb 11 2020",description:"Jesus' Call to Community",podcast:"https://podcasts.apple.com/us/podcast/jesus-call-to-community/id84246334?i=1000444537520"},{date:"Feb 18 2020",description:"Family",podcast:"https://podcasts.apple.com/us/podcast/one-of-jesus-most-radical-ideas-family/id84246334?i=1000445079106"},{date:"Feb 25 2020",description:"Community in a Culture of Contempt",podcast:"https://podcasts.apple.com/us/podcast/a-community-of-honor-in-a-culture-of-contempt/id84246334?i=1000445600520"}],March:[{date:"Mar 3rd 2020",description:"Socail Event"},{date:"Mar 10 2020",description:"God & Sexuality",podcast:"https://podcasts.apple.com/us/podcast/god-sexuality/id84246334?i=1000431575429"},{date:"Mar 17 2020",description:"Sexual Formation",podcast:"https://podcasts.apple.com/us/podcast/sexual-formation/id84246334?i=1000432299261"},{date:"Mar 24 2020",description:"Singleness",podcast:"https://podcasts.apple.com/us/podcast/singleness/id84246334?i=1000432917152"},{date:"Mar 31 2020",description:"Marriage",podcast:"https://podcasts.apple.com/us/podcast/marriage/id84246334?i=1000432749772"}],April:[{date:"Apr 7 2020",description:"Social Event"},{date:"Apr 14 2020",description:"This Cultural Moment - Part 1"},{date:"Apr 21 2020",description:"This Cultural Moment - Part 2"},{date:"Apr 28 2020",description:"This Cultural Moment - Part 3"}],May:[{date:"May 5 2020",description:"Social Event"},{date:"May 12 2020",description:"This Cultural Moment - Part 4"},{date:"May 19 2020",description:"This Cultural Moment - Part 5"},{date:"May 26 2020",description:"Year-End Party"}]}),l=a(2),d=function(e){var t=e.date,a=e.location,n=e.description,o=e.time,r=e.podcast,i=e.moreInfo,c=e.details,l=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(new Date(t));return s.a.createElement("li",{className:"Event"},s.a.createElement("div",{className:"Event-start"},s.a.createElement("h4",{className:"Event-date u-no-margin"},l),s.a.createElement("p",{className:"Event-time u-no-margin"},o||"6:30pm")),s.a.createElement("div",{className:"Event-main"},s.a.createElement("p",{className:"Event-description u-no-margin"},n),c&&s.a.createElement("p",{className:"Event-details u-no-margin"},c),s.a.createElement("p",{className:"Event-location u-no-margin"},a||"26 Burning Tree, Newport Beach"),r&&s.a.createElement("a",{className:"Event-podcast u-no-margin",href:r},"Podcast"),i&&s.a.createElement("a",{className:"Event-moreInfo u-no-margin",href:i},"More Info")))},m=function(e){var t=e.events;return Object.keys(t).map((function(e){return s.a.createElement("div",{key:e},s.a.createElement("h3",{className:"Month"},e),s.a.createElement("ul",{className:"Events"},t[e].map((function(e){return s.a.createElement(d,Object.assign({},e,{key:e.date}))}))))}))},p={},u={};Object.keys(c).forEach((function(e){var t=Date.now();c[e].forEach((function(a){var n=new Date(a.date);n.setDate(n.getDate()+1),n.getTime()>t?u[e]=u[e]?[].concat(Object(i.a)(u[e]),[a]):[a]:p[e]=p[e]?[].concat(Object(i.a)(p[e]),[a]):[a]}))}));var h=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{className:"App-logo",alt:"20 for 20s",src:"/logo.png"})),s.a.createElement("main",null,s.a.createElement("div",{className:"Panel"},s.a.createElement("p",{className:"Panel-text"},"Pursuing ",s.a.createElement("span",{className:"u-highlight"},"community")," in ",s.a.createElement("span",{className:"u-highlight"},"the way")," of ",s.a.createElement("span",{className:"u-highlight"},"Jesus")),s.a.createElement("img",{alt:"leaves",className:"Panel-image",src:"/leaves.jpg"})),s.a.createElement("div",{className:"Banner"},s.a.createElement("div",{className:"Banner-fade"}),s.a.createElement("p",{className:"Banner-text"},"Our goal is to provide a context for meaningful connections around good food and thoughtful, life-giving conversations. ",s.a.createElement("a",{href:"#about-us"},"Learn more."))),s.a.createElement("h2",null,"Schedule"),s.a.createElement(l.d,null,s.a.createElement(l.b,null,s.a.createElement(l.a,null,s.a.createElement("h3",null,"Upcoming Events")),s.a.createElement(l.a,null,s.a.createElement("h3",null,"Past Events"))),s.a.createElement(l.c,null,s.a.createElement(m,{events:u})),s.a.createElement(l.c,null,s.a.createElement(m,{events:p}))),s.a.createElement("div",{className:"Banner Banner--about-us"},s.a.createElement("div",{className:"Banner-fade"}),s.a.createElement("p",{className:"Banner-text"},"About 20 for 20's")),s.a.createElement("div",{className:"AboutUs"},s.a.createElement("h2",{id:"about-us"},"What\u2019s this all about?"),s.a.createElement("p",null,"Simply put, our tagline says we\u2019re about, \u201cPursuing Community in the Way of Jesus\u201d."),s.a.createElement("p",null,"What that means for us is that we desire to create a place and a context to gather together as young adults to explore what it means to live the \u201cgood life\u201d properly understood. Jesus said, \u201cI came so that they may have life and have it abundantly\u201d.  20 for 20\u2019s seeks to engage in a series of sincere and thoughtful discussions as we explore this \u2018way\u2019 of Jesus."),s.a.createElement("h2",null,"What our gatherings look like"),s.a.createElement("p",null,"Our gatherings are pretty simple. We meet in a lovely home, we gather around a table/s and enjoy a good meal together and we discuss what we\u2019re thinking and learning about over the last week. Our discussions are based around podcasts we listen to during the week on our own time."),s.a.createElement("p",null,"We want our gatherings to be about authentic community, that is, real conversations\u2026honest, transparent, and a place where substantive friendships can be built and flourish.  We want to talk about the stuff of life, deal with hard questions we may have all in a safe environment as we seek to work it out together."),s.a.createElement("p",null,"If all this sounds interesting and inviting to you, we would love for you to join us!"),s.a.createElement("h2",null,"When does this all happen?"),s.a.createElement("p",null,"Tuesday evenings from 6:30 to around 9:00"),s.a.createElement("h2",null,"Where do we meet?"),s.a.createElement("p",null,"We are currently meeting in a home in Newport Beach (Big Canyon) at 26 Burning Tree, Newport Beach, CA 92660 (The Vance home).")),s.a.createElement("div",{className:"Banner Banner--contact"},s.a.createElement("div",{className:"Banner-fade"}),s.a.createElement("p",{className:"Banner-text"},"Interested? ","","We'd love to have you. Email us at ",s.a.createElement("a",{href:"mailto:20s@gracefellowshipchurch.org"},"20s@gracefellowshipchurch.com")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f0c59725.chunk.js.map