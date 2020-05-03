window.__NUXT__=function(e,t,i,s,n,o,a,l,r,h,m,c,p,d,u,g,b,w,f,j,y,k,v,_,S,x,A,H,C,I,T,N,P,M,V,q,z,J,G,D,W,B,R,E,F,L,U,O,K,Q){return{layout:"default",data:[{},{slug:"how-custom-domain-with-github-pages",path:"/en/tamy/how-custom-domain-with-github-pages",section:H,doc:{attrs:{imgUrl:"https://live.staticflickr.com/65535/49843305938_30e7afd0b4_b.jpg",authors:[{name:"Tam Phan",avatarUrl:"https://live.staticflickr.com/65535/49843962042_1d80277b1b_t.jpg",link:"https://twitter.com/tamphan1992"}],name:C,title:m,description:m,date:"2020-02-02T00:00:00.000Z",tags:["github","github-page","custom domain"]},body:'<h2 id="what-is-this"><a class="anchor" aria-hidden="true" href="#what-is-this"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What is this</h2><ul>\n<li>GitHub Pages is websites for you and your projects.</li>\n<li>Hosted directly from your GitHub repository. Just edit, push, and your changes are live.</li>\n</ul>\n<h2 id="ready-to-get-started"><a class="anchor" aria-hidden="true" href="#ready-to-get-started"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Ready to get started</h2><ol>\n<li>Create a repository named username.github.io, where username is your username (or organization name) on GitHub.</li>\n</ol>\n<blockquote>\n<p>If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.</p>\n</blockquote>\n<ol start="2">\n<li>Clone the repository</li>\n<li>Create an <code>index.html</code> file</li>\n</ol>\n<pre><code class="hljs html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">"X-UA-Compatible"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"ie=edge"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>TP hello word<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n    TP hello word\n<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></pre><ol start="4">\n<li><p>Add, commit, and push your changes</p>\n</li>\n<li><p>Go to <code>username.github.io</code> on browser</p>\n</li>\n</ol>\n<h2 id="how-custom-domain-with-github-pages-"><a class="anchor" aria-hidden="true" href="#how-custom-domain-with-github-pages-"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>How custom domain with GitHub Pages?</h2><h3 id="add-custom-domain-on-github"><a class="anchor" aria-hidden="true" href="#add-custom-domain-on-github"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add custom domain on github</h3><ul>\n<li>On GitHub, navigate to your site&#39;s repository.</li>\n<li>Under your repository name, click  Settings.</li>\n<li>Under &quot;Custom domain&quot;, type your custom domain, then click Save. This will create a commit that adds a CNAME file in the root of your publishing source. (OR go to your editor and in the repository of your website create a new file named “CNAME” in the root of your directory.)</li>\n</ul>\n<h3 id="update-dns-provider-example-godaddy-"><a class="anchor" aria-hidden="true" href="#update-dns-provider-example-godaddy-"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Update DNS provider (example GoDaddy)</h3><ol>\n<li>On the home page of your account the in Domain Manager “Menu Domains” Go to all domains and select Use My Domains in Next Steps Colums.</li>\n<li>Within the DNS management page you will need to make five changes:</li>\n</ol>\n<ul>\n<li>In the Type “A” row update the IP address to: 185.199.108.153 (this will point your custom domain to GitHub’s server over HTTPS)</li>\n<li>In the CNAME row with Name “www” input your gh-pages website (username.github.io)</li>\n<li>At the bottom click the “ADD” button and make 3 more Type “A” rows with the IP addresses of: 185.199.109.153, 185.199.110.153, 185.199.111.153</li>\n</ul>\n<p><img src="https://hackernoon.com/hn-images/1*oq7Vd8uwsQKLIu7S0zeW1Q.png" alt="A records GitHub Pages"></p>\n<ol start="3">\n<li>You can confirm that your DNS is set-up correctly by using the dig command in your terminal with your custom domain.</li>\n</ol>\n<pre><code class="hljs bash">$ dig username.github.io +noall +answer\n&gt; username.github.io     3600    IN A     185.199.108.153\n&gt; username.github.io     3600    IN A     185.199.109.153\n&gt; username.github.io     3600    IN A     185.199.110.153\n&gt; username.github.io     3600    IN A     185.199.111.153</code></pre><ol start="4">\n<li>Optionally, to enable HTTPS encryption for your site, select Enforce HTTPS. It can take up to 24 hours before this option is available. For more information, see &quot;Securing your GitHub Pages site with HTTPS.&quot;</li>\n</ol>\n<p><img src="https://help.github.com/assets/images/help/pages/enforce-https-custom-domains.png" alt="enforce-https-custom-domains"></p>\n<blockquote>\n<p>If you use a static site generator to build your site locally and push the generated files to GitHub, pull the commit that added the CNAME file to your local repository. For more information, see <a href="https://help.github.com/en/articles/troubleshooting-custom-domains-and-github-pages#cname-errors">Troubleshooting custom domains and GitHub Pages</a></p>\n</blockquote>\n'}}],fetch:[],error:null,state:{filled:!0,visibleAffix:!1,locale:b,lang:{iso:b,headerLinks:[{display:I,name:I,to:"/about"},{display:T,name:T,to:"/portfolios"},{display:N,name:N,to:"/demos"},{display:P,name:P,to:"/blog"}],asideLinkGroups:[{title:"Categories",links:[{display:C,name:H,to:"/tamy"},{display:"NuxtJS",name:"nuxtjs",to:"/nuxtjs"},{display:"VueJS",name:"vuejs",to:"/vuejs"},{display:"NodeJS",name:"nodejs",to:"/nodejs"},{display:"AWS",name:"aws",to:"/aws"}]}],text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:M},homepage:{meta:{title:"tampm - Full-Stack Web Developer",description:M},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{nodejs:[{title:l,links:[{to:o,name:"Node JS?",contents:[{to:V,name:q}]},{to:z,name:J}]},{title:r,links:[]},{title:h,links:[{to:"/expressjs",name:"Basic"}]}],nuxtjs:[{title:l,links:[{to:o,name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:z,name:J}]},{title:r,links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:"#add-tailwind-css",name:u},{to:"#add-bootstrap-vue",name:"Bootstrap"}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]},{title:h,links:[{to:"/vue-nexttick-what-is-this",name:"Vue.nextTick - What is this?",contents:[{to:G,name:D},{to:"#when-do-you-need-use-it",name:"When do you need use it?"}]}]}],tamy:[{title:l,links:[{to:o,name:"Me"},{to:"/github-action",name:"Github Action"},{to:"/firebase",name:"Google Firebase"}]},{title:r,links:[{to:"/how-custom-domain-with-github-pages",name:m,contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]},{to:"/how-can-change-author-email-git-commit",name:W,contents:[{to:"#my-issue",name:"My issue"},{to:"#my-solution",name:"My solution"}]}]},{title:h,links:[{to:"/github-action-pull-and-push-external-private-repository",name:w}]}],blog:[{id:"recent-posts",title:"Recent Posts",links:[{to:B,name:w},{to:f,name:m},{to:"/tamy/how-can-change-author-email-git-commit",name:W},{to:"/nuxtjs/pwa",name:"How setup PWA with Nuxtjs?"},{to:"/aws/serverless",name:"Serverless framework"}]},{id:"pin-posts",title:"Pin Posts",links:[{to:f,name:m},{to:B,name:w}]}],template:[{title:l,links:[{to:o,name:"Template"}]},{title:r,links:[]},{title:h,links:[]}],vuejs:[{title:l,links:[{to:o,name:"Vue JS?",contents:[{to:V,name:q}]}]},{title:r,links:[]},{title:h,links:[{to:"/component",name:"Component"}]}],aws:[{title:l,links:[{to:o,name:"AWS?"},{to:"/s3-service",name:"S3 Service"},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:r,links:[]},{title:h,links:[{to:"/serverless",name:"Serverless",contents:[{to:G,name:D},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}]},works:{portfolios:[{id:"urban-sketch",name:"URBAN SKETCH",thumbnail:"/img/portfolios/urban-sketch.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:R,thumbnail:E,description:F,width_thumbnail:e},{name:"MapBox",thumbnail:"/img/technologies/mapbox.png",description:"Maps and location for developers",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/urban-sketch/urban-sketch-1.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-2.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-3.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-4.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-5.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-6.jpg"]},{id:"bangrz",name:"BANGRZ",thumbnail:"/img/portfolios/bangrz.jpg",short_desc:t,technologies:[{name:L,thumbnail:U,description:O,width_thumbnail:a},{name:"Web RTC",thumbnail:"/img/technologies/webrtc.png",description:K,width_thumbnail:"31px"}],screenshots:["/img/portfolios/screenshots/bangrz/bangrz-1.jpg","/img/portfolios/screenshots/bangrz/bangrz-2.jpg","/img/portfolios/screenshots/bangrz/bangrz-3.jpg","/img/portfolios/screenshots/bangrz/bangrz-4.jpg","/img/portfolios/screenshots/bangrz/bangrz-5.jpg"]},{id:"linkwise",name:"LINKWISE",thumbnail:"/img/portfolios/linkwise.jpg",short_desc:t,technologies:[{name:"Vue Storefront",thumbnail:"/img/technologies/vue-storefront.png",description:"PWA for any eCommerce",width_thumbnail:e},{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:j,thumbnail:y,description:k,width_thumbnail:g}],screenshots:["/img/portfolios/screenshots/linkwise/linkwise-1.jpg","/img/portfolios/screenshots/linkwise/linkwise-2.jpg","/img/portfolios/screenshots/linkwise/linkwise-3.jpg","/img/portfolios/screenshots/linkwise/linkwise-4.jpg","/img/portfolios/screenshots/linkwise/linkwise-5.jpg","/img/portfolios/screenshots/linkwise/linkwise-6.jpg"]},{id:"kaji",name:"KAJI",thumbnail:"/img/portfolios/kaji.jpg",short_desc:Q,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:j,thumbnail:y,description:k,width_thumbnail:g},{name:v,thumbnail:_,description:S,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kaji/kaji-1.jpg","/img/portfolios/screenshots/kaji/kaji-2.jpg","/img/portfolios/screenshots/kaji/kaji-3.jpg","/img/portfolios/screenshots/kaji/kaji-4.jpg"]},{id:"kawan-cicil",name:"Kawan Cicil",thumbnail:"/img/portfolios/kawan-cicil.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/kawan-cicil/kawan-cicil-1.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-2.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-3.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-4.jpg"]},{id:"licence-manager",name:"Licence Manager",thumbnail:"/img/portfolios/licence-manager.jpg",short_desc:Q,technologies:[{name:L,thumbnail:U,description:O,width_thumbnail:a},{name:v,thumbnail:_,description:S,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/licence-manager/licence-manager-1.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-2.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-3.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-4.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-5.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-6.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-7.jpg"]},{id:"maoneng",name:"Maoneng",thumbnail:"/img/portfolios/maoneng.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:p,description:d,width_thumbnail:a},{name:"Netlify",thumbnail:"/img/technologies/netlify.png",description:"The fastest way to build the fastest sites",width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/maoneng/maoneng-1.jpg","/img/portfolios/screenshots/maoneng/maoneng-2.jpg","/img/portfolios/screenshots/maoneng/maoneng-3.jpg","/img/portfolios/screenshots/maoneng/maoneng-4.jpg","/img/portfolios/screenshots/maoneng/maoneng-5.jpg"]},{id:"qxc",name:"QXC",thumbnail:"/img/portfolios/qxc.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/qxc/qxc-1.jpg","/img/portfolios/screenshots/qxc/qxc-2.jpg","/img/portfolios/screenshots/qxc/qxc-3.jpg","/img/portfolios/screenshots/qxc/qxc-4.jpg","/img/portfolios/screenshots/qxc/qxc-5.jpg"]},{id:"soccermesh",name:"Soccermesh",thumbnail:"/img/portfolios/soccermesh.jpg",short_desc:t,technologies:[{name:v,thumbnail:_,description:S,width_thumbnail:e},{name:"Knockout JS",thumbnail:"/img/technologies/knockoutjs.png",description:"Declarative Bindings. Easily associate DOM elements with model data using a concise, readable syntax. Automatic UI Refresh",width_thumbnail:e},{name:R,thumbnail:E,description:F,width_thumbnail:e}],screenshots:["/img/portfolios/screenshots/soccermesh/soccermesh-1.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-2.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-3.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-4.jpg"]}],demos:[{name:"Nuxt-Dashboard-Firebase",github:"https://github.com/tampm92/tp-demo-nuxt-firebase",website:"https://tp-demo-nuxt-firebase.netlify.app",thumbnail:"/img/demos/nuxt-dashboard-firebase.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:p,description:d,width_thumbnail:a},{name:"Firebase",thumbnail:"/img/technologies/firebase.png",description:"Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.",width_thumbnail:"32px"},{name:"Bootstrap-Vue",thumbnail:"/img/technologies/bootstrap-vue.png",description:K,width_thumbnail:g}]},{name:"VueJs-Vuetify",github:"https://github.com/tampm92/tp-demo-vuetify",website:"https://tp-demo-vuetify.netlify.app",thumbnail:"/img/demos/Vuejs-vuetify.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:j,thumbnail:y,description:k,width_thumbnail:g}]},{name:"Nuxt-AnimeJs",github:"https://github.com/tampm92/tp-demo-nuxt-animejs",website:"https://tp-demo-nuxt-animejs.netlify.app",thumbnail:"/img/demos/nuxt-animejs.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:p,description:d,width_thumbnail:a},{name:"Anime JS",thumbnail:"/img/technologies/animejs.png",description:"Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects",width_thumbnail:"80px"},{name:u,thumbnail:x,description:A,width_thumbnail:e}]},{name:"Nuxt-VideoJs",github:"https://github.com/tampm92/tp-demo-nuxt-videojs",website:"https://tp-demo-nuxt-videojs.netlify.app",thumbnail:"/img/demos/nuxt-videojs.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:p,description:d,width_thumbnail:a},{name:"Video JS",thumbnail:"/img/technologies/videojs.png",description:"Make your player yours with the internet's most popular open source video player framework.",width_thumbnail:e},{name:u,thumbnail:x,description:A,width_thumbnail:e}]},{name:"Nuxt-Markdown",github:"https://github.com/tampm92/tampm92.github.io",website:"https://tampm.com",thumbnail:"/img/demos/nuxt-markdown.jpg",short_desc:t,technologies:[{name:i,thumbnail:s,description:n,width_thumbnail:e},{name:c,thumbnail:p,description:d,width_thumbnail:a},{name:"Markdown",thumbnail:"/img/technologies/markdown.png",description:"Markdown is a way to style text on the web.",width_thumbnail:e},{name:u,thumbnail:x,description:A,width_thumbnail:e}]}]},adBlocked:!1,focusMode:!1,locales:[{text:"English",locale:b}],homepage:{index:{attrs:{},body:o},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"<p>I&#39;m a senior web developer with more than 6 years of software development experience.</p>\n"},what_i_can_do_backend:{attrs:{title:"Backend"},body:"<p>I worked with backend system: ASP.NET | Node.js | Python</p>\n"},what_i_can_do_database:{attrs:{title:"Database"},body:"<p>I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis</p>\n"},what_i_can_do_frontend:{attrs:{title:"Frontend"},body:"<p>I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)</p>\n"},what_i_can_do_more:{attrs:{title:"More things"},body:"<p>I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.</p>\n"},what_i_can_do:{attrs:{title:"What I can do?"},body:'<p>What <span class="text-nuxt-lightgreen">I can do</span>?</p>\n'}}},serverRendered:!0,routePath:f}}("35px","Freelancer frontend","Vue JS","/img/technologies/vuejs.png","Vuejs is a open-source JavaScript framework for building user interfaces and single-page applications","","40px","Knowledge","Awesome","Practices","How custom domain with GitHub Pages?","Nuxt JS","/img/technologies/nuxt.png","Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering","Tailwind CSS","30px","en","Github-Action pull and push external private repository","/tamy/how-custom-domain-with-github-pages","Vuetify","/img/technologies/vuetify.png","Vuetify.js is a reusable semantic component framework for Vue.js","Dot Net","/img/technologies/dotnet.png","NET is a developer platform with tools and libraries for building any type of app, including web, mobile, desktop, gaming, IoT, cloud, and microservices.","/img/technologies/tailwindcss.png","A utility-first CSS framework for rapidly building custom designs","tamy","TaMy","about","portfolios","demos","blog","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#basic-setup","Basic Setup","/convention","Convention","#what-is-this","What is this?","How can I change the author or email of git commit?","/tamy/github-action-pull-and-push-external-private-repository","Auth0","/img/technologies/auth0.png","Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.","Angular JS","/img/technologies/angular.png","Angular is a JavaScript-based open-source front-end web application framework mainly maintained by Google","WebRTC is a free, open project that enables web browsers with Real-Time Communications (RTC) capabilities via simple JavaScript APIs","Freelancer frontend and backend")