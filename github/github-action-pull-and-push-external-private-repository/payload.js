window.__NUXT__=function(s,n,e,t,a,i,o,l,p,r,c,h,m,g,u,d,b,j,w,f,k,y,_,v,x,S,A,N,C,P,T,I,V,E,H,J,M,R,q,W,z,G,L,O,D,B,F,K,U,$,Q,X){return{layout:"default",data:[{},{slug:"github-action-pull-and-push-external-private-repository",path:"/en/github/github-action-pull-and-push-external-private-repository",section:N,doc:{attrs:{imgUrl:"https://live.staticflickr.com/65535/49843305938_30e7afd0b4_b.jpg",authors:[{name:"Tam Phan",avatarUrl:"https://live.staticflickr.com/65535/49843962042_1d80277b1b_t.jpg",link:"https://twitter.com/tamphan1992"}],name:C,title:g,description:g,date:"2020-05-03T00:00:00.000Z",tags:["github-action","build nodejs","deploy github-page","private repo","git-pull","git-push"]},body:'<h2 id="referents"><a class="anchor" aria-hidden="true" href="#referents"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Referents</h2><ul>\n<li>TP - Github Action: <a href="/tamy/github-action">github-action</a></li>\n<li>For checkout/clone repo: <a href="https://github.com/actions/checkout">actions/checkout</a></li>\n<li>For push repo <a href="https://github.com/peaceiris/actions-gh-pages">peaceiris/actions-gh-pages</a></li>\n</ul>\n<h2 id="full-github-workflow"><a class="anchor" aria-hidden="true" href="#full-github-workflow"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Full github workflow</h2><pre><code class="hljs yml"><span class="hljs-attr">name:</span> <span class="hljs-string">Deploy</span> <span class="hljs-string">GitPage</span>\n\n<span class="hljs-attr">on:</span>\n  <span class="hljs-attr">push:</span>\n    <span class="hljs-attr">branches:</span> <span class="hljs-string">[</span> <span class="hljs-string">master</span> <span class="hljs-string">]</span>\n  <span class="hljs-attr">pull_request:</span>\n    <span class="hljs-attr">branches:</span> <span class="hljs-string">[</span> <span class="hljs-string">master</span> <span class="hljs-string">]</span>\n\n<span class="hljs-attr">jobs:</span>\n  <span class="hljs-attr">deploy:</span>\n    <span class="hljs-attr">runs-on:</span> <span class="hljs-string">ubuntu-latest</span>\n    <span class="hljs-attr">strategy:</span>\n      <span class="hljs-attr">matrix:</span>\n        <span class="hljs-attr">node-version:</span> <span class="hljs-string">[12.x]</span>\n    <span class="hljs-attr">steps:</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Checkout</span> <span class="hljs-string">main</span> <span class="hljs-string">repo</span> <span class="hljs-string">🛎️</span>\n      <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v2</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Checkout</span> <span class="hljs-string">external</span> <span class="hljs-string">repo</span> <span class="hljs-string">🛎️</span>\n      <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v2</span>\n      <span class="hljs-attr">with:</span>\n        <span class="hljs-attr">repository:</span> <span class="hljs-string">other-org/other-repo-clone</span>\n        <span class="hljs-attr">token:</span> <span class="hljs-string">${{</span> <span class="hljs-string">secrets.PERSONAL_TOKEN</span> <span class="hljs-string">}}</span> <span class="hljs-comment"># permission to access to external repositories</span>\n        <span class="hljs-attr">path:</span> <span class="hljs-string">other-repo</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Use</span> <span class="hljs-string">Node.js</span> <span class="hljs-string">${{</span> <span class="hljs-string">matrix.node-version</span> <span class="hljs-string">}}</span>\n      <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/setup-node@v1</span>\n      <span class="hljs-attr">with:</span>\n        <span class="hljs-attr">node-version:</span> <span class="hljs-string">${{</span> <span class="hljs-string">matrix.node-version</span> <span class="hljs-string">}}</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">install</span> <span class="hljs-string">dependencies</span>\n      <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">build...</span>\n      <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">build</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Deploy</span> <span class="hljs-string">🚀</span>\n      <span class="hljs-attr">uses:</span> <span class="hljs-string">peaceiris/actions-gh-pages@v3</span>\n      <span class="hljs-attr">with:</span>\n        <span class="hljs-attr">personal_token:</span> <span class="hljs-string">${{</span> <span class="hljs-string">secrets.PERSONAL_TOKEN</span> <span class="hljs-string">}}</span> <span class="hljs-comment"># permission to access to external repositories</span>\n        <span class="hljs-attr">external_repository:</span> <span class="hljs-string">other-org/other-repo-deploy</span>\n        <span class="hljs-attr">publish_branch:</span> <span class="hljs-string">master</span> <span class="hljs-comment"># A target branch to deploy</span>\n        <span class="hljs-attr">publish_dir:</span> <span class="hljs-string">./dist</span> <span class="hljs-comment"># A target directory to deploy</span></code></pre><h2 id="explaining-example"><a class="anchor" aria-hidden="true" href="#explaining-example"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Explaining example</h2><p><code>name: Deploy GitPage</code>: descriptive workflow name</p>\n<p><code>on</code>: setup GitHub event that triggers the workflow.</p>\n<p><code>jobs:</code>: define jobs run when Github event is happened (Here example is you <code>push</code> or pull <code>request</code>)</p>\n<p><code>jobs.deploy</code>: <code>deploy</code> is job id</p>\n<p><code>runs-on: ubuntu-latest</code>: the type of machine to run the job on.</p>\n<p><code>steps</code>: a job contains a sequence of tasks called steps.</p>\n<p><code>Checkout</code>: Clone repo (<a href="https://github.com/actions/checkout">doc</a>)</p>\n<ul>\n<li>Checkout current repo</li>\n</ul>\n<pre><code class="hljs yml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Checkout</span> <span class="hljs-string">main</span> <span class="hljs-string">repo</span> <span class="hljs-string">🛎️</span>\n  <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v2</span></code></pre><ul>\n<li>Checkout external repo</li>\n</ul>\n<pre><code class="hljs yml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Checkout</span> <span class="hljs-string">external</span> <span class="hljs-string">repo</span> <span class="hljs-string">🛎️</span>\n  <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v2</span>\n  <span class="hljs-attr">with:</span>\n    <span class="hljs-attr">repository:</span> <span class="hljs-string">other-org/other-repo-clone</span>\n    <span class="hljs-attr">token:</span> <span class="hljs-string">${{</span> <span class="hljs-string">secrets.PERSONAL_TOKEN</span> <span class="hljs-string">}}</span> <span class="hljs-comment"># permission to access to external repositories</span>\n    <span class="hljs-attr">path:</span> <span class="hljs-string">other-repo</span></code></pre><p><code>Runs command-line</code> programs using the operating system&#39;s shell. (Example here is install dependencies and build by yarn)</p>\n<pre><code class="hljs yml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">install</span> <span class="hljs-string">dependencies</span>\n  <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span>\n<span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">build...</span>\n  <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">build</span></code></pre><p><code>Deploy</code>: push external repo (<a href="https://github.com/peaceiris/actions-gh-pages">doc</a>)</p>\n<pre><code class="hljs yml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Deploy</span> <span class="hljs-string">🚀</span>\n  <span class="hljs-attr">uses:</span> <span class="hljs-string">peaceiris/actions-gh-pages@v3</span>\n  <span class="hljs-attr">with:</span>\n    <span class="hljs-attr">personal_token:</span> <span class="hljs-string">${{</span> <span class="hljs-string">secrets.PERSONAL_TOKEN</span> <span class="hljs-string">}}</span> <span class="hljs-comment"># permission to access to external repositories</span>\n    <span class="hljs-attr">external_repository:</span> <span class="hljs-string">other-org/other-repo-deploy</span>\n    <span class="hljs-attr">publish_branch:</span> <span class="hljs-string">master</span> <span class="hljs-comment"># A target branch to deploy</span>\n    <span class="hljs-attr">publish_dir:</span> <span class="hljs-string">./dist</span> <span class="hljs-comment"># A target directory to deploy</span></code></pre><p><code>PERSONAL_TOKEN</code>: you need permission to pull/push other repo</p>\n<ul>\n<li>Generate a personal access token (<a href="https://github.com/settings/tokens">here</a>).</li>\n<li>Add it to Secrets as <code>PERSONAL_TOKEN</code></li>\n</ul>\n<pre><code class="hljs txt">1. On GitHub, navigate to the main page of the repository.\n2. Under your repository name, click  Settings.\n3. In the left sidebar, click Secrets.\n4. Type a name for your secret in the `PERSONAL_TOKEN` input box.\n5. Type the value for your secret.\n6. Click Add secret.</code></pre>'}}],fetch:[],error:null,state:{filled:!0,visibleAffix:!1,locale:w,lang:{iso:w,headerLinks:[{display:P,name:P,to:"/about"},{display:T,name:T,to:"/portfolios"},{display:I,name:I,to:"/demos"},{display:V,name:V,to:"/blog"}],asideLinkGroups:[{title:"Categories",links:[{display:"TaMy",name:"tamy",to:"/tamy"},{display:"AWS",name:"aws",to:"/aws"},{display:"NuxtJS",name:"nuxtjs",to:"/nuxtjs"},{display:C,name:N,to:"/github"},{display:"NodeJS",name:"nodejs",to:"/nodejs"}]}],text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:E},homepage:{meta:{title:"tampm - Full-Stack Web Developer",description:E},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:i,links:[{to:o,name:"AWS?"},{to:"/s3-service",name:"S3 Service"},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:l,links:[]},{title:p,links:[{to:"/serverless",name:"Serverless",contents:[{to:H,name:J},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],blog:[{id:"recent-posts",title:"Recent Posts",links:[{to:f,name:g},{to:M,name:k},{to:"/github/how-can-change-author-email-git-commit",name:R},{to:"/nuxtjs/pwa",name:"How setup PWA with Nuxtjs?"},{to:"/aws/serverless",name:"Serverless framework"}]},{id:"pin-posts",title:"Pin Posts",links:[{to:M,name:k},{to:f,name:g}]}],"electron-nuxt":[{title:i,links:[{to:o,name:q}]},{title:l,links:[]},{title:p,links:[]}],github:[{title:i,links:[{to:"/",name:"Github?"},{to:"/github-action",name:"Github Action"}]},{title:l,links:[{to:"/how-custom-domain-with-github-pages",name:k,contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]},{to:"/how-can-change-author-email-git-commit",name:R,contents:[{to:"#my-issue",name:"My issue"},{to:"#my-solution",name:"My solution"}]}]},{title:p,links:[{to:"/github-action-pull-and-push-external-private-repository",name:g}]}],nodejs:[{title:i,links:[{to:o,name:"Node JS?",contents:[{to:W,name:z}]},{to:G,name:L}]},{title:l,links:[]},{title:p,links:[{to:"/expressjs",name:"Basic"}]}],nuxtjs:[{title:i,links:[{to:o,name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:G,name:L}]},{title:l,links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:"#add-tailwind-css",name:u},{to:"#add-bootstrap-vue",name:"Bootstrap"}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]},{title:p,links:[]}],template:[{title:i,links:[{to:o,name:q}]},{title:l,links:[]},{title:p,links:[]}],tamy:[{title:i,links:[{to:o,name:"Me"},{to:"/firebase",name:"Google Firebase"}]},{title:l,links:[]},{title:p,links:[]}],vuejs:[{title:i,links:[{to:o,name:"Vue JS?",contents:[{to:W,name:z}]},{to:"/component",name:"Component"},{to:"/watchers",name:"Watchers"},{to:"/parent-child-communication",name:"Parent Child Communication"},{to:"/vue-nexttick-what-is-this",name:"Vue.nextTick - What is this?",contents:[{to:H,name:J},{to:"#when-do-you-need-use-it",name:"When do you need use it?"}]}]},{title:l,links:[]},{title:p,links:[]}]},works:{portfolios:[{id:"urban-sketch",name:"URBAN SKETCH",thumbnail:"/img/portfolios/urban-sketch.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:O,thumbnail:D,description:B,width_thumbnail:s},{name:"MapBox",thumbnail:"/img/technologies/mapbox.png",description:"Maps and location for developers",width_thumbnail:s}],screenshots:["/img/portfolios/screenshots/urban-sketch/urban-sketch-1.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-2.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-3.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-4.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-5.jpg","/img/portfolios/screenshots/urban-sketch/urban-sketch-6.jpg"]},{id:"bangrz",name:"BANGRZ",thumbnail:"/img/portfolios/bangrz.jpg",short_desc:n,technologies:[{name:F,thumbnail:K,description:U,width_thumbnail:r},{name:"Web RTC",thumbnail:"/img/technologies/webrtc.png",description:$,width_thumbnail:"31px"}],screenshots:["/img/portfolios/screenshots/bangrz/bangrz-1.jpg","/img/portfolios/screenshots/bangrz/bangrz-2.jpg","/img/portfolios/screenshots/bangrz/bangrz-3.jpg","/img/portfolios/screenshots/bangrz/bangrz-4.jpg","/img/portfolios/screenshots/bangrz/bangrz-5.jpg"]},{id:"linkwise",name:"LINKWISE",thumbnail:"/img/portfolios/linkwise.jpg",short_desc:n,technologies:[{name:"Vue Storefront",thumbnail:"/img/technologies/vue-storefront.png",description:"PWA for any eCommerce",width_thumbnail:s},{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:y,thumbnail:_,description:v,width_thumbnail:d}],screenshots:["/img/portfolios/screenshots/linkwise/linkwise-1.jpg","/img/portfolios/screenshots/linkwise/linkwise-2.jpg","/img/portfolios/screenshots/linkwise/linkwise-3.jpg","/img/portfolios/screenshots/linkwise/linkwise-4.jpg","/img/portfolios/screenshots/linkwise/linkwise-5.jpg","/img/portfolios/screenshots/linkwise/linkwise-6.jpg"]},{id:"kaji",name:"KAJI",thumbnail:"/img/portfolios/kaji.jpg",short_desc:Q,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:y,thumbnail:_,description:v,width_thumbnail:d},{name:x,thumbnail:S,description:A,width_thumbnail:s}],screenshots:["/img/portfolios/screenshots/kaji/kaji-1.jpg","/img/portfolios/screenshots/kaji/kaji-2.jpg","/img/portfolios/screenshots/kaji/kaji-3.jpg","/img/portfolios/screenshots/kaji/kaji-4.jpg"]},{id:"kawan-cicil",name:"Kawan Cicil",thumbnail:"/img/portfolios/kawan-cicil.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s}],screenshots:["/img/portfolios/screenshots/kawan-cicil/kawan-cicil-1.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-2.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-3.jpg","/img/portfolios/screenshots/kawan-cicil/kawan-cicil-4.jpg"]},{id:"licence-manager",name:"Licence Manager",thumbnail:"/img/portfolios/licence-manager.jpg",short_desc:Q,technologies:[{name:F,thumbnail:K,description:U,width_thumbnail:r},{name:x,thumbnail:S,description:A,width_thumbnail:s}],screenshots:["/img/portfolios/screenshots/licence-manager/licence-manager-1.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-2.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-3.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-4.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-5.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-6.jpg","/img/portfolios/screenshots/licence-manager/licence-manager-7.jpg"]},{id:"maoneng",name:"Maoneng",thumbnail:"/img/portfolios/maoneng.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:c,thumbnail:h,description:m,width_thumbnail:r},{name:"Netlify",thumbnail:"/img/technologies/netlify.png",description:"The fastest way to build the fastest sites",width_thumbnail:s}],screenshots:["/img/portfolios/screenshots/maoneng/maoneng-1.jpg","/img/portfolios/screenshots/maoneng/maoneng-2.jpg","/img/portfolios/screenshots/maoneng/maoneng-3.jpg","/img/portfolios/screenshots/maoneng/maoneng-4.jpg","/img/portfolios/screenshots/maoneng/maoneng-5.jpg"]},{id:"qxc",name:"QXC",thumbnail:"/img/portfolios/qxc.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s}],screenshots:["/img/portfolios/screenshots/qxc/qxc-1.jpg","/img/portfolios/screenshots/qxc/qxc-2.jpg","/img/portfolios/screenshots/qxc/qxc-3.jpg","/img/portfolios/screenshots/qxc/qxc-4.jpg","/img/portfolios/screenshots/qxc/qxc-5.jpg"]},{id:"soccermesh",name:"Soccermesh",thumbnail:"/img/portfolios/soccermesh.jpg",short_desc:n,technologies:[{name:x,thumbnail:S,description:A,width_thumbnail:s},{name:"Knockout JS",thumbnail:"/img/technologies/knockoutjs.png",description:"Declarative Bindings. Easily associate DOM elements with model data using a concise, readable syntax. Automatic UI Refresh",width_thumbnail:s},{name:O,thumbnail:D,description:B,width_thumbnail:s}],screenshots:["/img/portfolios/screenshots/soccermesh/soccermesh-1.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-2.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-3.jpg","/img/portfolios/screenshots/soccermesh/soccermesh-4.jpg"]}],demos:[{name:"Nuxt-Isotope-Vuesax",github:"https://github.com/tampm92/tp-demo-nuxt-isotope",website:"https://tp-demo-nuxt-isotope.netlify.app",thumbnail:"/img/demos/nuxt-isotope.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:c,thumbnail:h,description:m,width_thumbnail:r},{name:"Isotope",thumbnail:"/img/technologies/isotope.png",description:"Filter & sort magical layouts",width_thumbnail:X},{name:"Vuesax",thumbnail:"/img/technologies/vuesax.png",description:"Vuesax Framework Components for Vuejs",width_thumbnail:s},{name:u,thumbnail:b,description:j,width_thumbnail:s}]},{name:"Nuxt-Dashboard-Firebase",github:"https://github.com/tampm92/tp-demo-nuxt-firebase",website:"https://tp-demo-nuxt-firebase.netlify.app",thumbnail:"/img/demos/nuxt-dashboard-firebase.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:c,thumbnail:h,description:m,width_thumbnail:r},{name:"Firebase",thumbnail:"/img/technologies/firebase.png",description:"Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.",width_thumbnail:"32px"},{name:"Bootstrap-Vue",thumbnail:"/img/technologies/bootstrap-vue.png",description:$,width_thumbnail:d}]},{name:"VueJs-Vuetify",github:"https://github.com/tampm92/tp-demo-vuetify",website:"https://tp-demo-vuetify.netlify.app",thumbnail:"/img/demos/Vuejs-vuetify.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:y,thumbnail:_,description:v,width_thumbnail:d}]},{name:"Nuxt-AnimeJs",github:"https://github.com/tampm92/tp-demo-nuxt-animejs",website:"https://tp-demo-nuxt-animejs.netlify.app",thumbnail:"/img/demos/nuxt-animejs.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:c,thumbnail:h,description:m,width_thumbnail:r},{name:"Anime JS",thumbnail:"/img/technologies/animejs.png",description:"Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects",width_thumbnail:X},{name:u,thumbnail:b,description:j,width_thumbnail:s}]},{name:"Nuxt-VideoJs",github:"https://github.com/tampm92/tp-demo-nuxt-videojs",website:"https://tp-demo-nuxt-videojs.netlify.app",thumbnail:"/img/demos/nuxt-videojs.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:c,thumbnail:h,description:m,width_thumbnail:r},{name:"Video JS",thumbnail:"/img/technologies/videojs.png",description:"Make your player yours with the internet's most popular open source video player framework.",width_thumbnail:s},{name:u,thumbnail:b,description:j,width_thumbnail:s}]},{name:"Nuxt-Markdown",github:"https://github.com/tampm92/tampm92.github.io",website:"https://tampm.com",thumbnail:"/img/demos/nuxt-markdown.jpg",short_desc:n,technologies:[{name:e,thumbnail:t,description:a,width_thumbnail:s},{name:c,thumbnail:h,description:m,width_thumbnail:r},{name:"Markdown",thumbnail:"/img/technologies/markdown.png",description:"Markdown is a way to style text on the web.",width_thumbnail:s},{name:u,thumbnail:b,description:j,width_thumbnail:s}]}]},adBlocked:!1,focusMode:!1,locales:[{text:"English",locale:w}],homepage:{index:{attrs:{},body:o},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"<p>I&#39;m a senior web developer with more than 6 years of software development experience.</p>\n"},what_i_can_do_backend:{attrs:{title:"Backend"},body:"<p>I worked with backend system: ASP.NET | Node.js | Python</p>\n"},what_i_can_do_database:{attrs:{title:"Database"},body:"<p>I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis</p>\n"},what_i_can_do_frontend:{attrs:{title:"Frontend"},body:"<p>I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)</p>\n"},what_i_can_do_more:{attrs:{title:"More things"},body:"<p>I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.</p>\n"},what_i_can_do:{attrs:{title:"What I can do?"},body:'<p>What <span class="text-nuxt-lightgreen">I can do</span>?</p>\n'}}},serverRendered:!0,routePath:f}}("35px","Freelancer frontend","Vue JS","/img/technologies/vuejs.png","Vuejs is a open-source JavaScript framework for building user interfaces and single-page applications","Knowledge","","Awesome","Practices","40px","Nuxt JS","/img/technologies/nuxt.png","Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering","Github-Action pull and push external private repository","Tailwind CSS","30px","/img/technologies/tailwindcss.png","A utility-first CSS framework for rapidly building custom designs","en","/github/github-action-pull-and-push-external-private-repository","How custom domain with GitHub Pages?","Vuetify","/img/technologies/vuetify.png","Vuetify.js is a reusable semantic component framework for Vue.js","Dot Net","/img/technologies/dotnet.png","NET is a developer platform with tools and libraries for building any type of app, including web, mobile, desktop, gaming, IoT, cloud, and microservices.","github","Github","about","portfolios","demos","blog","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#what-is-this","What is this?","/github/how-custom-domain-with-github-pages","How can I change the author or email of git commit?","Template","#basic-setup","Basic Setup","/convention","Convention","Auth0","/img/technologies/auth0.png","Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.","Angular JS","/img/technologies/angular.png","Angular is a JavaScript-based open-source front-end web application framework mainly maintained by Google","WebRTC is a free, open project that enables web browsers with Real-Time Communications (RTC) capabilities via simple JavaScript APIs","Freelancer frontend and backend","80px")