window.__NUXT__=function(e,s,t,i,n,o,a,l,c,r,h,m,p,d,u,g,b,w,f,j,k,v,y,_,x,S,C,V,I,A,H,M,z,N,P,J,T,B,q,W,R,D,G,L,F,U,E,K,O,Q,X){return{layout:"default",data:[{},{slug:"basic-setup",path:"/en/nuxtjs/basic-setup",section:C,doc:{attrs:{imgUrl:"https://live.staticflickr.com/65535/49843305938_30e7afd0b4_b.jpg",authors:[{name:"Tam Phan",avatarUrl:"https://live.staticflickr.com/65535/49843962042_1d80277b1b_t.jpg",link:"https://twitter.com/tamphan1992"}],name:V,title:I,description:"TP-NuxtJS - Setup nuxt with bootstrap OR tailwind css"},body:'<h2 id="requirements"><a class="anchor" aria-hidden="true" href="#requirements"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Requirements</h2><ul>\n<li>Install <a href="https://nodejs.org/en/">Nodejs</a></li>\n<li>Install <a href="https://yarnpkg.com/lang/en/">Yarn</a></li>\n</ul>\n<h2 id="referents"><a class="anchor" aria-hidden="true" href="#referents"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Referents</h2><ul>\n<li><a href="https://github.com/nuxt-community/style-resources-module">Style Resources Module</a></li>\n<li><a href="https://bootstrap-vue.js.org/docs/">Bootstrap Vue</a></li>\n<li><a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a></li>\n</ul>\n<h2 id="start-project"><a class="anchor" aria-hidden="true" href="#start-project"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Start project</h2><pre><code class="hljs bash"><span class="hljs-comment"># create project</span>\nyarn create nuxt-app &lt;project-name&gt;\n<span class="hljs-comment"># run project in dev env</span>\nyarn run dev</code></pre><h2 id="setup-project-use-scss"><a class="anchor" aria-hidden="true" href="#setup-project-use-scss"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup project use scss</h2><ul>\n<li>Install libs:</li>\n</ul>\n<pre><code class="hljs bash">yarn add sass-loader node-sass @nuxtjs/style-resources</code></pre><ul>\n<li><p>Create files in folder <code>assets/scss</code></p>\n<ul>\n<li><code>global.scss</code> (include css code global)</li>\n<li><code>_variables.scss</code> (<a href="https://css-tricks.com/difference-between-types-of-css-variables/">more</a>)</li>\n<li><code>_mixins.scss</code> (<a href="https://css-tricks.com/custom-user-mixins/">more</a>)</li>\n</ul>\n</li>\n<li><p>Update file <code>nuxt.config.js</code></p>\n</li>\n</ul>\n<pre><code class="hljs ts">loading: {\n    color: <span class="hljs-string">\'#00C58E\'</span>,\n    height: <span class="hljs-string">\'5px\'</span>,\n    duration: <span class="hljs-number">10000</span>\n},\ncss: [\n    <span class="hljs-string">\'~/assets/scss/global.scss\'</span>,\n],\nmodules: [\n    <span class="hljs-string">\'@nuxtjs/style-resources\'</span>,\n],\nstyleResources: {\n    scss: [\n      <span class="hljs-string">\'~/assets/scss/_variables.scss\'</span>,\n      <span class="hljs-string">\'~/assets/scss/_mixins.scss\'</span>,\n    ]\n}</code></pre><h2 id="add-tailwind-css"><a class="anchor" aria-hidden="true" href="#add-tailwind-css"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add Tailwind CSS</h2><ul>\n<li>Install libs:</li>\n</ul>\n<pre><code class="hljs bash">yarn add sass-loader node-sass @nuxtjs/style-resources\nyarn add @nuxtjs/tailwindcss</code></pre><ul>\n<li>Create file <code>assets/scss/tailwind.scss</code> with content</li>\n</ul>\n<pre><code class="hljs css"><span class="hljs-keyword">@import</span> <span class="hljs-string">\'tailwindcss/base\'</span>;\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'tailwindcss/components\'</span>;\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'tailwindcss/utilities\'</span>;</code></pre><ul>\n<li>Create file <code>tailwind.config.js</code> with content</li>\n</ul>\n<pre><code class="hljs ts"><span class="hljs-built_in">module</span>.exports = {\n    theme: {},\n    variants: {},\n    plugins: []\n}</code></pre><ul>\n<li>Update file <code>nuxt.config.js</code></li>\n</ul>\n<pre><code class="hljs ts">css: [\n    <span class="hljs-string">\'~/assets/scss/tailwind.scss\'</span>,\n    <span class="hljs-string">\'~/assets/scss/global.scss\'</span>,\n],\nbuild: {\n    extend (config, ctx) {\n    },\n    postcss: {\n        plugins: {\n            tailwindcss: {\n                configPath: <span class="hljs-string">\'~/tailwind.config.js\'</span>,\n                cssPath: <span class="hljs-string">\'~/assets/scss/tailwind.scss\'</span>\n            }\n        },\n    }\n}</code></pre><h2 id="add-bootstrap-vue"><a class="anchor" aria-hidden="true" href="#add-bootstrap-vue"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add Bootstrap-Vue</h2><ul>\n<li>Install libs</li>\n</ul>\n<pre><code class="hljs bash">yarn add bootstrap-vue</code></pre><ul>\n<li>Udpdate file <code>nuxt.config.js</code></li>\n</ul>\n<pre><code class="hljs ts">modules: [\n    <span class="hljs-string">\'@nuxtjs/style-resources\'</span>,\n    <span class="hljs-string">\'bootstrap-vue/nuxt\'</span>,\n]</code></pre>'}}],fetch:[],error:null,state:{filled:!0,visibleAffix:!1,locale:g,lang:{iso:g,headerLinks:[{display:A,name:A,to:"/about"},{display:H,name:H,to:"/portfolios"},{display:M,name:M,to:"/demos"},{display:z,name:z,to:"/blog"}],asideLinkGroups:[{title:"Categories",links:[{display:"TaMy",name:"tamy",to:"/tamy"},{display:"AWS",name:"aws",to:"/aws"},{display:V,name:C,to:"/nuxtjs"},{display:"Github",name:"github",to:"/github"},{display:"NodeJS",name:"nodejs",to:"/nodejs"}]}],text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:N},homepage:{meta:{title:"tampm - Full-Stack Web Developer",description:N},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{blog:[{id:"recent-posts",title:"Recent Posts",links:[{to:P,name:b},{to:J,name:w},{to:"/github/how-can-change-author-email-git-commit",name:T},{to:"/nuxtjs/pwa",name:"How setup PWA with Nuxtjs?"},{to:"/aws/serverless",name:"Serverless framework"}]},{id:"pin-posts",title:"Pin Posts",links:[{to:J,name:w},{to:P,name:b}]}],aws:[{title:o,links:[{to:a,name:"AWS?"},{to:"/s3-service",name:"S3 Service"},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:l,links:[]},{title:c,links:[{to:"/serverless",name:"Serverless",contents:[{to:B,name:q},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],github:[{title:o,links:[{to:"/",name:"Github?"},{to:"/github-action",name:"Github Action"}]},{title:l,links:[{to:"/how-custom-domain-with-github-pages",name:w,contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]},{to:"/how-can-change-author-email-git-commit",name:T,contents:[{to:"#my-issue",name:"My issue"},{to:"#my-solution",name:"My solution"}]}]},{title:c,links:[{to:"/github-action-pull-and-push-external-private-repository",name:b}]}],nodejs:[{title:o,links:[{to:a,name:"Node JS?",contents:[{to:W,name:R}]},{to:D,name:G}]},{title:l,links:[]},{title:c,links:[{to:"/expressjs",name:"Basic"}]}],tamy:[{title:o,links:[{to:a,name:"Me"},{to:"/firebase",name:"Google Firebase"}]},{title:l,links:[]},{title:c,links:[]}],nuxtjs:[{title:o,links:[{to:a,name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:D,name:G}]},{title:l,links:[{to:"/basic-setup",name:I,contents:[{to:"#add-tailwind-css",name:d},{to:"#add-bootstrap-vue",name:"Bootstrap"}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]},{title:c,links:[]}],template:[{title:o,links:[{to:a,name:"Template"}]},{title:l,links:[]},{title:c,links:[]}],vuejs:[{title:o,links:[{to:a,name:"Vue JS?",contents:[{to:W,name:R}]},{to:"/component",name:"Component"},{to:"/watchers",name:"Watchers"},{to:"/parent-child-communication",name:"Parent Child Communication"},{to:"/vue-nexttick-what-is-this",name:"Vue.nextTick - What is this?",contents:[{to:B,name:q},{to:"#when-do-you-need-use-it",name:"When do you need use it?"}]}]},{title:l,links:[]},{title:c,links:[]}]},works:{portfolios:[{id:"urban-sketch",name:"URBAN SKETCH",thumbnail:"/img/portfolios/urban-sketch.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:L,thumbnail:F,description:U,width_thumbnail:e},{name:"MapBox",thumbnail:"/img/technologies/mapbox.png",description:"Maps and location for developers",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/urban-sketch/urban-sketch-1.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-2.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-3.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-4.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-5.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-6.jpg"]},{id:"bangrz",name:"BANGRZ",thumbnail:"/img/portfolios/bangrz.jpg",short_desc:s,technologies:[{name:E,thumbnail:K,description:O,width_thumbnail:r},{name:"Web RTC",thumbnail:"/img/technologies/webrtc.png",description:Q,width_thumbnail:"31px"}],screenshots:["/img/portfolios/screenshots/bangrz/bangrz-1.jpg","/img/portfolios/screenshots/bangrz/bangrz-2.jpg","/img/portfolios/screenshots/bangrz/bangrz-3.jpg","/img/portfolios/screenshots/bangrz/bangrz-4.jpg","/img/portfolios/screenshots/bangrz/bangrz-5.jpg"]},{id:"linkwise",name:"LINKWISE",thumbnail:"/img/portfolios/linkwise.jpg",short_desc:s,technologies:[{name:"Vue Storefront",thumbnail:"/img/technologies/vue-storefront.png",description:"PWA for any eCommerce",width_thumbnail:e},{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:f,thumbnail:j,description:k,width_thumbnail:u}],screenshots:["/img/portfolios/screenshots/linkwise/linkwise-1.jpg","/img/portfolios/screenshots/linkwise/linkwise-2.jpg","/img/portfolios/screenshots/linkwise/linkwise-3.jpg","/img/portfolios/screenshots/linkwise/linkwise-4.jpg","/img/portfolios/screenshots/linkwise/linkwise-5.jpg","/img/portfolios/screenshots/linkwise/linkwise-6.jpg"]},{id:"kaji",name:"KAJI",thumbnail:"/img/portfolios/kaji.jpg",short_desc:X,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:f,thumbnail:j,description:k,width_thumbnail:u},{name:v,thumbnail:y,description:_,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kaji/kaji-1.jpg","/img/portfolios/screenshots/kaji/kaji-2.jpg","/img/portfolios/screenshots/kaji/kaji-3.jpg","/img/portfolios/screenshots/kaji/kaji-4.jpg"]},{id:"kawan-cicil",name:"Kawan Cicil",thumbnail:"/img/portfolios/kawan-cicil.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kawan-cicil/kawan-cicil-1.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-2.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-3.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-4.jpg"]},{id:"licence-manager",name:"Licence Manager",thumbnail:"/img/portfolios/licence-manager.jpg",short_desc:X,technologies:[{name:E,thumbnail:K,description:O,width_thumbnail:r},{name:v,thumbnail:y,description:_,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/licence-manager/licence-manager-1.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-2.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-3.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-4.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-5.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-6.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-7.jpg"]},{id:"maoneng",name:"Maoneng",thumbnail:"/img/portfolios/maoneng.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:h,thumbnail:m,description:p,width_thumbnail:r},{name:"Netlify",thumbnail:"/img/technologies/netlify.png",description:"The fastest way to build the fastest sites",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/maoneng/maoneng-1.jpg","/img/portfolios/screenshots/maoneng/maoneng-2.jpg","/img/portfolios/screenshots/maoneng/maoneng-3.jpg","/img/portfolios/screenshots/maoneng/maoneng-4.jpg","/img/portfolios/screenshots/maoneng/maoneng-5.jpg"]},{id:"qxc",name:"QXC",thumbnail:"/img/portfolios/qxc.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/qxc/qxc-1.jpg","/img/portfolios/screenshots/qxc/qxc-2.jpg","/img/portfolios/screenshots/qxc/qxc-3.jpg","/img/portfolios/screenshots/qxc/qxc-4.jpg","/img/portfolios/screenshots/qxc/qxc-5.jpg"]},{id:"soccermesh",name:"Soccermesh",thumbnail:"/img/portfolios/soccermesh.jpg",short_desc:s,technologies:[{name:v,thumbnail:y,description:_,width_thumbnail:e},{name:"Knockout JS",thumbnail:"/img/technologies/knockoutjs.png",description:"Declarative Bindings. Easily associate DOM elements with model data using a concise, readable syntax. Automatic UI Refresh",width_thumbnail:e},{name:L,thumbnail:F,description:U,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/soccermesh/soccermesh-1.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-2.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-3.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-4.jpg"]}],demos:[{name:"Nuxt-Dashboard-Firebase",github:"https://github.com/tampm92/tp-demo-nuxt-firebase",website:"https://tp-demo-nuxt-firebase.netlify.app",thumbnail:"/img/demos/nuxt-dashboard-firebase.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:h,thumbnail:m,description:p,width_thumbnail:r},{name:"Firebase",thumbnail:"/img/technologies/firebase.png",description:"Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.",width_thumbnail:"32px"},{name:"Bootstrap-Vue",thumbnail:"/img/technologies/bootstrap-vue.png",description:Q,width_thumbnail:u}]},{name:"VueJs-Vuetify",github:"https://github.com/tampm92/tp-demo-vuetify",website:"https://tp-demo-vuetify.netlify.app",thumbnail:"/img/demos/Vuejs-vuetify.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:f,thumbnail:j,description:k,width_thumbnail:u}]},{name:"Nuxt-AnimeJs",github:"https://github.com/tampm92/tp-demo-nuxt-animejs",website:"https://tp-demo-nuxt-animejs.netlify.app",thumbnail:"/img/demos/nuxt-animejs.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:h,thumbnail:m,description:p,width_thumbnail:r},{name:"Anime JS",thumbnail:"/img/technologies/animejs.png",description:"Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects",width_thumbnail:"80px"},{name:d,thumbnail:x,description:S,width_thumbnail:e}]},{name:"Nuxt-VideoJs",github:"https://github.com/tampm92/tp-demo-nuxt-videojs",website:"https://tp-demo-nuxt-videojs.netlify.app",thumbnail:"/img/demos/nuxt-videojs.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:h,thumbnail:m,description:p,width_thumbnail:r},{name:"Video JS",thumbnail:"/img/technologies/videojs.png",description:"Make your player yours with the internet's most popular open source video player framework.",width_thumbnail:e},{name:d,thumbnail:x,description:S,width_thumbnail:e}]},{name:"Nuxt-Markdown",github:"https://github.com/tampm92/tampm92.github.io",website:"https://tampm.com",thumbnail:"/img/demos/nuxt-markdown.jpg",short_desc:s,technologies:[{name:t,thumbnail:i,description:n,width_thumbnail:e},{name:h,thumbnail:m,description:p,width_thumbnail:r},{name:"Markdown",thumbnail:"/img/technologies/markdown.png",description:"Markdown is a way to style text on the web.",width_thumbnail:e},{name:d,thumbnail:x,description:S,width_thumbnail:e}]}]},adBlocked:!1,focusMode:!1,locales:[{text:"English",locale:g}],homepage:{index:{attrs:{},body:a},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"<p>I&#39;m a senior web developer with more than 6 years of software development experience.</p>\n"},what_i_can_do_backend:{attrs:{title:"Backend"},body:"<p>I worked with backend system: ASP.NET | Node.js | Python</p>\n"},what_i_can_do_database:{attrs:{title:"Database"},body:"<p>I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis</p>\n"},what_i_can_do_frontend:{attrs:{title:"Frontend"},body:"<p>I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)</p>\n"},what_i_can_do_more:{attrs:{title:"More things"},body:"<p>I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.</p>\n"},what_i_can_do:{attrs:{title:"What I can do?"},body:'<p>What <span class="text-nuxt-lightgreen">I can do</span>?</p>\n'}}},serverRendered:!0,routePath:"/nuxtjs/basic-setup"}}("35px","Freelancer frontend","Vue JS","/img/technologies/vuejs.png","Vuejs is a open-source JavaScript framework for building user interfaces and single-page applications","Knowledge","","Awesome","Practices","40px","Nuxt JS","/img/technologies/nuxt.png","Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering","Tailwind CSS","30px","en","Github-Action pull and push external private repository","How custom domain with GitHub Pages?","Vuetify","/img/technologies/vuetify.png","Vuetify.js is a reusable semantic component framework for Vue.js","Dot Net","/img/technologies/dotnet.png","NET is a developer platform with tools and libraries for building any type of app, including web, mobile, desktop, gaming, IoT, cloud, and microservices.","/img/technologies/tailwindcss.png","A utility-first CSS framework for rapidly building custom designs","nuxtjs","NuxtJS","Basic setup","about","portfolios","demos","blog","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","/github/github-action-pull-and-push-external-private-repository","/github/how-custom-domain-with-github-pages","How can I change the author or email of git commit?","#what-is-this","What is this?","#basic-setup","Basic Setup","/convention","Convention","Auth0","/img/technologies/auth0.png","Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.","Angular JS","/img/technologies/angular.png","Angular is a JavaScript-based open-source front-end web application framework mainly maintained by Google","WebRTC is a free, open project that enables web browsers with Real-Time Communications (RTC) capabilities via simple JavaScript APIs","Freelancer frontend and backend")