window.__NUXT__=function(e,t,i,s,n,o,a,l,r,m,c,h,p,d,g,u,b,w,f,j,k,_,v,x,y,S,C,V,A,I,J,N,H,M,P,q,z,T,W,B,R,D,G,E,F,L,K,U,O,Q,X,Y){return{layout:"default",data:[{},{slug:"expressjs",path:"/en/nodejs/expressjs",section:C,doc:{attrs:{imgUrl:"https://live.staticflickr.com/65535/49843305938_30e7afd0b4_b.jpg",authors:[{name:"Tam Phan",avatarUrl:"https://live.staticflickr.com/65535/49843962042_1d80277b1b_t.jpg",link:"https://twitter.com/tamphan1992"}],name:V,title:"Expressjs",description:"TP-NodeJS - ExpressJS"},body:'<h2 id="requirements"><a class="anchor" aria-hidden="true" href="#requirements"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Requirements</h2><ul>\n<li>Install <a href="https://nodejs.org/en/">Nodejs</a></li>\n<li>Install <a href="https://yarnpkg.com/lang/en/">Yarn</a></li>\n</ul>\n<h2 id="add-expressjs"><a class="anchor" aria-hidden="true" href="#add-expressjs"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add ExpressJS</h2><pre><code class="hljs bash">yarn add express</code></pre><h2 id="add-app-js-file"><a class="anchor" aria-hidden="true" href="#add-app-js-file"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add app.js file</h2><pre><code class="hljs ts"><span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'express\'</span>)\n<span class="hljs-keyword">const</span> app = express()\n<span class="hljs-keyword">const</span> port = <span class="hljs-number">3000</span>\n\napp.get(<span class="hljs-string">\'/\'</span>, <span class="hljs-function">(<span class="hljs-params">req, res</span>) =&gt;</span> res.send(<span class="hljs-string">\'Hello World!\'</span>))\n\napp.listen(port, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Example app listening on port <span class="hljs-subst">${port}</span>!`</span>))</code></pre><h2 id="running-locally"><a class="anchor" aria-hidden="true" href="#running-locally"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Running locally</h2><pre><code class="hljs bash">node app.js</code></pre>'}}],fetch:[],error:null,state:{filled:!0,visibleAffix:!1,locale:w,lang:{iso:w,headerLinks:[{display:A,name:A,to:"/about"},{display:I,name:I,to:"/portfolios"},{display:J,name:J,to:"/demos"},{display:N,name:N,to:"/blog"}],asideLinkGroups:[{title:"Categories",links:[{display:"TaMy",name:"tamy",to:"/tamy"},{display:"AWS",name:"aws",to:"/aws"},{display:"NuxtJS",name:"nuxtjs",to:"/nuxtjs"},{display:"Github",name:"github",to:"/github"},{display:V,name:C,to:"/nodejs"}]}],text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:H},homepage:{meta:{title:"tampm - Full-Stack Web Developer",description:H},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:o,links:[{to:a,name:"AWS?"},{to:"/s3-service",name:"S3 Service"},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:l,links:[]},{title:r,links:[{to:"/serverless",name:"Serverless",contents:[{to:M,name:P},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],blog:[{id:"recent-posts",title:"Recent Posts",links:[{to:q,name:f},{to:z,name:j},{to:"/github/how-can-change-author-email-git-commit",name:T},{to:"/nuxtjs/pwa",name:"How setup PWA with Nuxtjs?"},{to:"/aws/serverless",name:"Serverless framework"}]},{id:"pin-posts",title:"Pin Posts",links:[{to:z,name:j},{to:q,name:f}]}],"electron-nuxt":[{title:o,links:[{to:a,name:W}]},{title:l,links:[]},{title:r,links:[]}],github:[{title:o,links:[{to:"/",name:"Github?"},{to:"/github-action",name:"Github Action"}]},{title:l,links:[{to:"/how-custom-domain-with-github-pages",name:j,contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]},{to:"/how-can-change-author-email-git-commit",name:T,contents:[{to:"#my-issue",name:"My issue"},{to:"#my-solution",name:"My solution"}]}]},{title:r,links:[{to:"/github-action-pull-and-push-external-private-repository",name:f}]}],nodejs:[{title:o,links:[{to:a,name:"Node JS?",contents:[{to:B,name:R}]},{to:D,name:G}]},{title:l,links:[]},{title:r,links:[{to:"/expressjs",name:"Basic"}]}],nuxtjs:[{title:o,links:[{to:a,name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:D,name:G}]},{title:l,links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:"#add-tailwind-css",name:d},{to:"#add-bootstrap-vue",name:"Bootstrap"}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]},{title:r,links:[]}],template:[{title:o,links:[{to:a,name:W}]},{title:l,links:[]},{title:r,links:[]}],tamy:[{title:o,links:[{to:a,name:"Me"},{to:"/firebase",name:"Google Firebase"}]},{title:l,links:[]},{title:r,links:[]}],vuejs:[{title:o,links:[{to:a,name:"Vue JS?",contents:[{to:B,name:R}]},{to:"/component",name:"Component"},{to:"/watchers",name:"Watchers"},{to:"/parent-child-communication",name:"Parent Child Communication"},{to:"/vue-nexttick-what-is-this",name:"Vue.nextTick - What is this?",contents:[{to:M,name:P},{to:"#when-do-you-need-use-it",name:"When do you need use it?"}]}]},{title:l,links:[]},{title:r,links:[]}]},works:{portfolios:[{id:"urban-sketch",name:"URBAN SKETCH",thumbnail:"/img/portfolios/urban-sketch.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:E,thumbnail:F,description:L,width_thumbnail:e},{name:"MapBox",thumbnail:"/img/technologies/mapbox.png",description:"Maps and location for developers",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/urban-sketch/urban-sketch-1.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-2.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-3.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-4.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-5.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-6.jpg"]},{id:"bangrz",name:"BANGRZ",thumbnail:"/img/portfolios/bangrz.jpg",short_desc:t,technologies:[{name:K,thumbnail:U,description:O,width_thumbnail:m},{name:"Web RTC",thumbnail:"/img/technologies/webrtc.png",description:Q,width_thumbnail:"31px"}],screenshots:["/img/portfolios/screenshots/bangrz/bangrz-1.jpg","/img/portfolios/screenshots/bangrz/bangrz-2.jpg","/img/portfolios/screenshots/bangrz/bangrz-3.jpg","/img/portfolios/screenshots/bangrz/bangrz-4.jpg","/img/portfolios/screenshots/bangrz/bangrz-5.jpg"]},{id:"linkwise",name:"LINKWISE",thumbnail:"/img/portfolios/linkwise.jpg",short_desc:t,technologies:[{name:"Vue Storefront",thumbnail:"/img/technologies/vue-storefront.png",description:"PWA for any eCommerce",width_thumbnail:e},{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:k,thumbnail:_,description:v,width_thumbnail:g}],screenshots:["/img/portfolios/screenshots/linkwise/linkwise-1.jpg","/img/portfolios/screenshots/linkwise/linkwise-2.jpg","/img/portfolios/screenshots/linkwise/linkwise-3.jpg","/img/portfolios/screenshots/linkwise/linkwise-4.jpg","/img/portfolios/screenshots/linkwise/linkwise-5.jpg","/img/portfolios/screenshots/linkwise/linkwise-6.jpg"]},{id:"kaji",name:"KAJI",thumbnail:"/img/portfolios/kaji.jpg",short_desc:X,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:k,thumbnail:_,description:v,width_thumbnail:g},{name:x,thumbnail:y,description:S,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kaji/kaji-1.jpg","/img/portfolios/screenshots/kaji/kaji-2.jpg","/img/portfolios/screenshots/kaji/kaji-3.jpg","/img/portfolios/screenshots/kaji/kaji-4.jpg"]},{id:"kawan-cicil",name:"Kawan Cicil",thumbnail:"/img/portfolios/kawan-cicil.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kawan-cicil/kawan-cicil-1.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-2.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-3.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-4.jpg"]},{id:"licence-manager",name:"Licence Manager",thumbnail:"/img/portfolios/licence-manager.jpg",short_desc:X,technologies:[{name:K,thumbnail:U,description:O,width_thumbnail:m},{name:x,thumbnail:y,description:S,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/licence-manager/licence-manager-1.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-2.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-3.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-4.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-5.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-6.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-7.jpg"]},{id:"maoneng",name:"Maoneng",thumbnail:"/img/portfolios/maoneng.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:h,description:p,width_thumbnail:m},{name:"Netlify",thumbnail:"/img/technologies/netlify.png",description:"The fastest way to build the fastest sites",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/maoneng/maoneng-1.jpg","/img/portfolios/screenshots/maoneng/maoneng-2.jpg","/img/portfolios/screenshots/maoneng/maoneng-3.jpg","/img/portfolios/screenshots/maoneng/maoneng-4.jpg","/img/portfolios/screenshots/maoneng/maoneng-5.jpg"]},{id:"qxc",name:"QXC",thumbnail:"/img/portfolios/qxc.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/qxc/qxc-1.jpg","/img/portfolios/screenshots/qxc/qxc-2.jpg","/img/portfolios/screenshots/qxc/qxc-3.jpg","/img/portfolios/screenshots/qxc/qxc-4.jpg","/img/portfolios/screenshots/qxc/qxc-5.jpg"]},{id:"soccermesh",name:"Soccermesh",thumbnail:"/img/portfolios/soccermesh.jpg",short_desc:t,technologies:[{name:x,thumbnail:y,description:S,width_thumbnail:e},{name:"Knockout JS",thumbnail:"/img/technologies/knockoutjs.png",description:"Declarative Bindings. Easily associate DOM elements with model data using a concise, readable syntax. Automatic UI Refresh",width_thumbnail:e},{name:E,thumbnail:F,description:L,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/soccermesh/soccermesh-1.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-2.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-3.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-4.jpg"]}],demos:[{name:"Nuxt-Isotope-Vuesax",github:"https://github.com/tampm92/tp-demo-nuxt-isotope",website:"https://tp-demo-nuxt-isotope.netlify.app",thumbnail:"/img/demos/nuxt-isotope.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:h,description:p,width_thumbnail:m},{name:"Isotope",thumbnail:"/img/technologies/isotope.png",description:"Filter & sort magical layouts",width_thumbnail:Y},{name:"Vuesax",thumbnail:"/img/technologies/vuesax.png",description:"Vuesax Framework Components for Vuejs",width_thumbnail:e},{name:d,thumbnail:u,description:b,width_thumbnail:e}]},{name:"Nuxt-Dashboard-Firebase",github:"https://github.com/tampm92/tp-demo-nuxt-firebase",website:"https://tp-demo-nuxt-firebase.netlify.app",thumbnail:"/img/demos/nuxt-dashboard-firebase.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:h,description:p,width_thumbnail:m},{name:"Firebase",thumbnail:"/img/technologies/firebase.png",description:"Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.",width_thumbnail:"32px"},{name:"Bootstrap-Vue",thumbnail:"/img/technologies/bootstrap-vue.png",description:Q,width_thumbnail:g}]},{name:"VueJs-Vuetify",github:"https://github.com/tampm92/tp-demo-vuetify",website:"https://tp-demo-vuetify.netlify.app",thumbnail:"/img/demos/Vuejs-vuetify.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:k,thumbnail:_,description:v,width_thumbnail:g}]},{name:"Nuxt-AnimeJs",github:"https://github.com/tampm92/tp-demo-nuxt-animejs",website:"https://tp-demo-nuxt-animejs.netlify.app",thumbnail:"/img/demos/nuxt-animejs.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:h,description:p,width_thumbnail:m},{name:"Anime JS",thumbnail:"/img/technologies/animejs.png",description:"Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects",width_thumbnail:Y},{name:d,thumbnail:u,description:b,width_thumbnail:e}]},{name:"Nuxt-VideoJs",github:"https://github.com/tampm92/tp-demo-nuxt-videojs",website:"https://tp-demo-nuxt-videojs.netlify.app",thumbnail:"/img/demos/nuxt-videojs.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:h,description:p,width_thumbnail:m},{name:"Video JS",thumbnail:"/img/technologies/videojs.png",description:"Make your player yours with the internet's most popular open source video player framework.",width_thumbnail:e},{name:d,thumbnail:u,description:b,width_thumbnail:e}]},{name:"Nuxt-Markdown",github:"https://github.com/tampm92/tampm92.github.io",website:"https://tampm.com",thumbnail:"/img/demos/nuxt-markdown.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:h,description:p,width_thumbnail:m},{name:"Markdown",thumbnail:"/img/technologies/markdown.png",description:"Markdown is a way to style text on the web.",width_thumbnail:e},{name:d,thumbnail:u,description:b,width_thumbnail:e}]}]},adBlocked:!1,focusMode:!1,locales:[{text:"English",locale:w}],homepage:{index:{attrs:{},body:a},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"<p>I&#39;m a senior web developer with more than 6 years of software development experience.</p>\n"},what_i_can_do_backend:{attrs:{title:"Backend"},body:"<p>I worked with backend system: ASP.NET | Node.js | Python</p>\n"},what_i_can_do_database:{attrs:{title:"Database"},body:"<p>I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis</p>\n"},what_i_can_do_frontend:{attrs:{title:"Frontend"},body:"<p>I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)</p>\n"},what_i_can_do_more:{attrs:{title:"More things"},body:"<p>I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.</p>\n"},what_i_can_do:{attrs:{title:"What I can do?"},body:'<p>What <span class="text-nuxt-lightgreen">I can do</span>?</p>\n'}}},serverRendered:!0,routePath:"/nodejs/expressjs"}}("35px","Freelancer frontend","Vue JS","/img/technologies/vuejs.png","Vuejs is a open-source JavaScript framework for building user interfaces and single-page applications","Knowledge","","Awesome","Practices","40px","Nuxt JS","/img/technologies/nuxt.png","Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering","Tailwind CSS","30px","/img/technologies/tailwindcss.png","A utility-first CSS framework for rapidly building custom designs","en","Github-Action pull and push external private repository","How custom domain with GitHub Pages?","Vuetify","/img/technologies/vuetify.png","Vuetify.js is a reusable semantic component framework for Vue.js","Dot Net","/img/technologies/dotnet.png","NET is a developer platform with tools and libraries for building any type of app, including web, mobile, desktop, gaming, IoT, cloud, and microservices.","nodejs","NodeJS","about","portfolios","demos","blog","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#what-is-this","What is this?","/github/github-action-pull-and-push-external-private-repository","/github/how-custom-domain-with-github-pages","How can I change the author or email of git commit?","Template","#basic-setup","Basic Setup","/convention","Convention","Auth0","/img/technologies/auth0.png","Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.","Angular JS","/img/technologies/angular.png","Angular is a JavaScript-based open-source front-end web application framework mainly maintained by Google","WebRTC is a free, open project that enables web browsers with Real-Time Communications (RTC) capabilities via simple JavaScript APIs","Freelancer frontend and backend","80px")