window.__NUXT__=function(e,t,s,n,i,a,o,l,r,c,m,h,p,d,g,u,b,w,f,j,v,k,y,x,_,S,A,I,V,q,C,H,J,M,P,N,z,T,W,R,E,B,D,L,G,O,F,K,U,Q,X,Y){return{layout:"default",data:[{},{path:"/en/vuejs/index",section:q,page:{attrs:{title:g,name:"Introduction",description:"TP-VueJS - VueJS is a progressive framework for building user interfaces."},body:'<blockquote>\n<p><a href="https://vuejs.org/">VueJS</a> is a progressive framework for building user interfaces. Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>\n</blockquote>\n<h2 id="basic-setup"><a class="anchor" aria-hidden="true" href="#basic-setup"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Basic setup</h2><h3 id="requirements"><a class="anchor" aria-hidden="true" href="#requirements"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Requirements</h3><ul>\n<li>Install <a href="https://nodejs.org/en/">Nodejs</a></li>\n<li>Install <a href="https://yarnpkg.com/lang/en/">Yarn</a></li>\n</ul>\n<h3 id="setup-with-browser"><a class="anchor" aria-hidden="true" href="#setup-with-browser"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup with browser</h3><ul>\n<li>Add vue lib to index.html file:</li>\n</ul>\n<pre><code class="hljs html"><span class="hljs-comment">&lt;!-- development version, includes helpful console warnings --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-comment">&lt;!-- production version, optimized for size and speed --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre><ul>\n<li>Add a simple code:</li>\n</ul>\n<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>\n  {{ message }}\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">\n<span class="hljs-keyword">var</span> app = <span class="hljs-keyword">new</span> Vue({\n  el: <span class="hljs-string">\'#app\'</span>,\n  data: {\n    message: <span class="hljs-string">\'Hello Vue!\'</span>\n  }\n})\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre><blockquote>\n<p>Go to browser and see result</p>\n</blockquote>\n<h3 id="setup-with-vue-cli"><a class="anchor" aria-hidden="true" href="#setup-with-vue-cli"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup with Vue CLI</h3><blockquote>\n<p><a href="https://cli.vuejs.org/">Vue CLI</a> is Standard Tooling for Vue.js Development</p>\n</blockquote>\n<ul>\n<li>Install:</li>\n</ul>\n<pre><code class="hljs bash">npm install -g @vue/cli\n<span class="hljs-comment"># OR</span>\nyarn global add @vue/cli</code></pre><ul>\n<li>Create a project:</li>\n</ul>\n<pre><code class="hljs bash">vue create my-project\n<span class="hljs-comment"># OR</span>\nvue ui</code></pre>'}}],error:null,state:{theme:"light",filled:a,visibleAffix:!1,locale:"en",lang:{iso:"en",links:{download:"Download",live_edit:"Live Edit"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:C},homepage:{meta:{title:"tampm - Full-Stack Web Developer",description:C},welcome:{hire_me:"Hire me",connect_me:"Connect me"}},asideMenu:[{title:"CATEGORIES",links:[{name:u,to:"qa"},{name:H,to:"nuxtjs"},{name:g,to:q},{name:J,to:"nodejs"},{name:"AWS",to:"aws"}]}]},menu:{nodejs:[{title:r,links:[{to:o,name:"Node JS?",contents:[{to:b,name:w}]},{to:f,name:j}]},{title:"Express JS",links:[{to:"/expressjs",name:"Basic"}]}],nuxtjs:[{title:r,links:[{to:o,name:M,contents:[{to:"#schema",name:"Schema"}]},{to:f,name:j}]},{title:v,links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:P,name:c},{to:N,name:z}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]},{title:u,links:[{to:"/vue-nexttick-what-is-this",name:"Vue.nextTick - What is this?",contents:[{to:T,name:W},{to:"#when-do-you-need-use-it",name:"When do you need use it?"}]}]}],qa:[{title:"Posts",links:[{to:o,name:"Question & Answer"},{to:"/how-custom-domain-with-github-pages",name:R,contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]},{to:"/how-can-change-author-email-git-commit",name:E,contents:[{to:"#my-issue",name:"My issue"},{to:"#my-solution",name:"My solution"}]}]}],aws:[{title:r,links:[{to:o,name:"AWS?"}]},{title:"Services",links:[{to:"/s3-service",name:"S3 Service",contents:[{to:P,name:c},{to:N,name:z}]},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:B,links:[{to:"/serverless",name:B,contents:[{to:T,name:W},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],vuejs:[{title:r,links:[{to:o,name:M,contents:[{to:b,name:w}]}]},{title:v,links:[{to:D,name:L}]}],firebase:[{title:r,links:[{to:o,name:"Firebase?",contents:[{to:b,name:w}]},{to:f,name:j}]},{title:v,links:[{to:D,name:L}]}]},works:{portfolios:[{id:"urban-sketch",name:"URBAN SKETCH",thumbnail:"/img/portfolios/urban-sketch.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:G,thumbnail:O,description:F,width_thumbnail:e},{name:"MapBox",thumbnail:"/img/technologies/mapbox.png",description:"Maps and location for developers",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/urban-sketch/urban-sketch-1.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-2.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-3.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-4.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-5.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-6.jpg"]},{id:"bangrz",name:"BANGRZ",thumbnail:"/img/portfolios/bangrz.jpg",short_desc:t,technologies:[{name:K,thumbnail:U,description:Q,width_thumbnail:l},{name:"Web RTC",thumbnail:"/img/technologies/webrtc.png",description:X,width_thumbnail:"31px"}],screenshots:["/img/portfolios/screenshots/bangrz/bangrz-1.jpg","/img/portfolios/screenshots/bangrz/bangrz-2.jpg","/img/portfolios/screenshots/bangrz/bangrz-3.jpg","/img/portfolios/screenshots/bangrz/bangrz-4.jpg","/img/portfolios/screenshots/bangrz/bangrz-5.jpg"]},{id:"linkwise",name:"LINKWISE",thumbnail:"/img/portfolios/linkwise.jpg",short_desc:t,technologies:[{name:"Vue Storefront",thumbnail:"/img/technologies/vue-storefront.png",description:"PWA for any eCommerce",width_thumbnail:e},{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:k,thumbnail:y,description:x,width_thumbnail:d}],screenshots:["/img/portfolios/screenshots/linkwise/linkwise-1.jpg","/img/portfolios/screenshots/linkwise/linkwise-2.jpg","/img/portfolios/screenshots/linkwise/linkwise-3.jpg","/img/portfolios/screenshots/linkwise/linkwise-4.jpg","/img/portfolios/screenshots/linkwise/linkwise-5.jpg","/img/portfolios/screenshots/linkwise/linkwise-6.jpg"]},{id:"kaji",name:"KAJI",thumbnail:"/img/portfolios/kaji.jpg",short_desc:Y,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:k,thumbnail:y,description:x,width_thumbnail:d},{name:_,thumbnail:S,description:A,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kaji/kaji-1.jpg","/img/portfolios/screenshots/kaji/kaji-2.jpg","/img/portfolios/screenshots/kaji/kaji-3.jpg","/img/portfolios/screenshots/kaji/kaji-4.jpg"]},{id:"kawan-cicil",name:"Kawan Cicil",thumbnail:"/img/portfolios/kawan-cicil.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kawan-cicil/kawan-cicil-1.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-2.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-3.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-4.jpg"]},{id:"licence-manager",name:"Licence Manager",thumbnail:"/img/portfolios/licence-manager.jpg",short_desc:Y,technologies:[{name:K,thumbnail:U,description:Q,width_thumbnail:l},{name:_,thumbnail:S,description:A,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/licence-manager/licence-manager-1.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-2.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-3.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-4.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-5.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-6.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-7.jpg"]},{id:"maoneng",name:"Maoneng",thumbnail:"/img/portfolios/maoneng.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:m,thumbnail:h,description:p,width_thumbnail:l},{name:"Netlify",thumbnail:"/img/technologies/netlify.png",description:"The fastest way to build the fastest sites",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/maoneng/maoneng-1.jpg","/img/portfolios/screenshots/maoneng/maoneng-2.jpg","/img/portfolios/screenshots/maoneng/maoneng-3.jpg","/img/portfolios/screenshots/maoneng/maoneng-4.jpg","/img/portfolios/screenshots/maoneng/maoneng-5.jpg"]},{id:"qxc",name:"QXC",thumbnail:"/img/portfolios/qxc.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/qxc/qxc-1.jpg","/img/portfolios/screenshots/qxc/qxc-2.jpg","/img/portfolios/screenshots/qxc/qxc-3.jpg","/img/portfolios/screenshots/qxc/qxc-4.jpg","/img/portfolios/screenshots/qxc/qxc-5.jpg"]},{id:"soccermesh",name:"Soccermesh",thumbnail:"/img/portfolios/soccermesh.jpg",short_desc:t,technologies:[{name:_,thumbnail:S,description:A,width_thumbnail:e},{name:"Knockout JS",thumbnail:"/img/technologies/knockoutjs.png",description:"Declarative Bindings. Easily associate DOM elements with model data using a concise, readable syntax. Automatic UI Refresh",width_thumbnail:e},{name:G,thumbnail:O,description:F,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/soccermesh/soccermesh-1.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-2.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-3.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-4.jpg"]}],demos:[{name:"Nuxt-Dashboard-Firebase",github:"https://github.com/tampm92/tp-demo-nuxt-firebase",website:"https://tp-demo-nuxt-firebase.netlify.com",thumbnail:"/img/demos/nuxt-dashboard-firebase.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:m,thumbnail:h,description:p,width_thumbnail:l},{name:"Firebase",thumbnail:"/img/technologies/firebase.png",description:"Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.",width_thumbnail:"32px"},{name:"Bootstrap-Vue",thumbnail:"/img/technologies/bootstrap-vue.png",description:X,width_thumbnail:d}]},{name:"VueJs-Vuetify",github:"https://github.com/tampm92/tp-demo-vuetify",website:"https://tp-demo-vuetify.netlify.com",thumbnail:"/img/demos/Vuejs-vuetify.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:k,thumbnail:y,description:x,width_thumbnail:d}]},{name:"Nuxt-AnimeJs",github:"https://github.com/tampm92/tp-demo-nuxt-animejs",website:"https://tp-demo-nuxt-animejs.netlify.com",thumbnail:"/img/demos/nuxt-animejs.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:m,thumbnail:h,description:p,width_thumbnail:l},{name:"Anime JS",thumbnail:"/img/technologies/animejs.png",description:"Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects",width_thumbnail:"80px"},{name:c,thumbnail:I,description:V,width_thumbnail:e}]},{name:"Nuxt-VideoJs",github:"https://github.com/tampm92/tp-demo-nuxt-videojs",website:"https://tp-demo-nuxt-videojs.netlify.com",thumbnail:"/img/demos/nuxt-videojs.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:m,thumbnail:h,description:p,width_thumbnail:l},{name:"Video JS",thumbnail:"/img/technologies/videojs.png",description:"Make your player yours with the internet's most popular open source video player framework.",width_thumbnail:e},{name:c,thumbnail:I,description:V,width_thumbnail:e}]},{name:"Nuxt-Markdown",github:"https://github.com/tampm92/tampm92.github.io",website:"https://tampm.com",thumbnail:"/img/demos/nuxt-markdown.jpg",short_desc:t,technologies:[{name:s,thumbnail:n,description:i,width_thumbnail:e},{name:m,thumbnail:h,description:p,width_thumbnail:l},{name:"Markdown",thumbnail:"/img/technologies/markdown.png",description:"Markdown is a way to style text on the web.",width_thumbnail:e},{name:c,thumbnail:I,description:V,width_thumbnail:e}]}]},adBlocked:!1,focusMode:!1,homepage:{index:{attrs:{},body:o},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"<p>I&#39;m a senior web developer with more than 6 years of software development experience.</p>\n"},what_i_can_do_backend:{attrs:{title:"Backend",fallback:a},body:"<p>I worked with backend system: ASP.NET | Node.js | Python</p>\n"},what_i_can_do_database:{attrs:{title:"Database",fallback:a},body:"<p>I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis</p>\n"},what_i_can_do_frontend:{attrs:{title:"Frontend",fallback:a},body:"<p>I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)</p>\n"},what_i_can_do_more:{attrs:{title:"More things",fallback:a},body:"<p>I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.</p>\n"},what_i_can_do:{attrs:{title:"What I can do?",fallback:a},body:'<p>What <span class="text-nuxt-lightgreen">I can do</span>?</p>\n'}},blogpage:{categories:{attrs:{title:"Categories",links:[{name:u,to:"/qa"},{name:H,to:"/nuxtjs"},{name:g,to:"/vuejs"},{name:J,to:"/nodejs"},{name:"AWS",to:"/aws"}],fallback:a},body:o},index:{attrs:{title:"Pin Posts",fallback:a},body:'<div class="w-full mb-16">\n    <div class="bg-white shadow-xl border">\n        <div class="px-4 py-4 md:px-10">\n            <h1 class="font-bold text-lg">\n                Splash Screens\n            </h1>\n            <p class="py-4">\n                Assuming a user installed your PWA on their home screen, the default behaviour is to show a white screen until the PWA is ready. This doesn’t feel very nice for the user and adding a custom splash screen makes your PWA feel more like a native app.\n            </p>\n            <div class="flex flex-wrap">\n            <a href="/nuxtjs/pwa#splash-screens" class="text-blue-700 px-4 py-2 border-2 border-dashed hover:bg-gray-200">\n                READE MORE\n            </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="w-full mb-16">\n    <div class="bg-white shadow-xl border">\n        <div class="px-4 py-4 md:px-10">\n            <h1 class="font-bold text-lg">\n                How custom domain with GitHub Pages?\n            </h1>\n            <p class="py-4">\n                On GitHub, navigate to your site\'s repository.\n                Under your repository name, click Settings.\n                Under "Custom domain", type your custom domain, then click Save. This will create a commit that adds a CNAME file in the root of your publishing source.\n            </p>\n            <div class="flex flex-wrap">\n            <a href="/qa/how-custom-domain-with-github-pages" class="text-blue-700 px-4 py-2 border-2 border-dashed hover:bg-gray-200">\n                READE MORE\n            </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="w-full mb-16">\n    <div class="bg-white shadow-xl border">\n        <div class="px-4 py-4 md:px-10">\n            <h1 class="font-bold text-lg">\n                How can I change the author or email of git commit?\n            </h1>\n            <p class="py-4">\n                I was writing a some repository when I was working in my old company, and committing the changes to Git with company\'s email. After I quit my job, I want change author infomations of git old commits. How can I do it?\n            </p>\n            <div class="flex flex-wrap">\n            <a href="/qa/how-can-change-author-email-git-commit" class="text-blue-700 px-4 py-2 border-2 border-dashed hover:bg-gray-200">\n                READE MORE\n            </a>\n            </div>\n        </div>\n    </div>\n</div>\n'},recent_posts:{attrs:{title:"Recent Posts",links:[{name:R,to:"/qa/how-custom-domain-with-github-pages"},{name:E,to:"/qa/how-can-change-author-email-git-commit"},{name:"How setup PWA with Nuxtjs?",to:"/nuxtjs/pwa"},{name:"Serverless framework",to:"/aws/serverless"}],fallback:a},body:o}}},serverRendered:a}}("35px","Freelancer frontend","Vue JS","/img/technologies/vuejs.png","Vuejs is a open-source JavaScript framework for building user interfaces and single-page applications",!0,"","40px","Knowledge","Tailwind CSS","Nuxt JS","/img/technologies/nuxt.png","Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering","30px","VueJS","Q&A","#basic-setup","Basic Setup","/convention","Convention","Practices","Vuetify","/img/technologies/vuetify.png","Vuetify.js is a reusable semantic component framework for Vue.js","Dot Net","/img/technologies/dotnet.png","NET is a developer platform with tools and libraries for building any type of app, including web, mobile, desktop, gaming, IoT, cloud, and microservices.","/img/technologies/tailwindcss.png","A utility-first CSS framework for rapidly building custom designs","vuejs","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","NuxtJS","NodeJS","Nuxt JS?","#add-tailwind-css","#add-bootstrap-vue","Bootstrap","#what-is-this","What is this?","How custom domain with GitHub Pages?","How can I change the author or email of git commit?","Serverless","/component","Component","Auth0","/img/technologies/auth0.png","Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.","Angular JS","/img/technologies/angular.png","Angular is a JavaScript-based open-source front-end web application framework mainly maintained by Google","WebRTC is a free, open project that enables web browsers with Real-Time Communications (RTC) capabilities via simple JavaScript APIs","Freelancer frontend and backend")