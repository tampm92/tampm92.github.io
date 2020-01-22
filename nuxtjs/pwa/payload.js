window.__NUXT__=function(s,e,n,a,t,o,i,l,r,c,p,h,d,m,u){return{layout:"default",data:[{},{path:"/en/nuxtjs/pwa",section:n,page:{attrs:{title:a,name:"PWA",description:"TP-NuxtJS - for Nuxt PWA (Progressive Web Apps), Splash Screens, PWA asset generator"},body:'<h2 id="what-is-this"><a class="anchor" aria-hidden="true" href="#what-is-this"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What is this</h2><p>Progressive Web Apps (PWA) are reliable, fast, and engaging, although there are many things that can take a PWA from a baseline to exemplary experience.</p>\n<h2 id="how-setup-with-nuxtjs"><a class="anchor" aria-hidden="true" href="#how-setup-with-nuxtjs"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>How setup with NuxtJS</h2><blockquote>\n<p>We will use <a href="https://pwa.nuxtjs.org/">Nuxt PWA</a></p>\n</blockquote>\n<p>Install lib:</p>\n<pre><code class="hljs js">yarn add @nuxtjs/pwa <span class="hljs-comment">//or npm i @nuxtjs/pwa</span></code></pre><p>Update your <code>nuxt.config.js</code> file:</p>\n<pre><code class="hljs ts">{\n    modules: [\n        <span class="hljs-string">\'@nuxtjs/pwa\'</span>,\n    ],\n    pwa: {\n        manifest: {\n            name: <span class="hljs-string">\'TP-Demo Nuxt\'</span>,\n            short_name: <span class="hljs-string">\'TP\'</span>,\n            lang: <span class="hljs-string">\'en\'</span>,\n            description: <span class="hljs-string">\'TP-Demo Nuxt\'</span>,\n            theme_color: <span class="hljs-string">\'#00C58E\'</span>,\n            background_color: <span class="hljs-string">\'#000\'</span>,\n            ogImage: <span class="hljs-string">`https://live.staticflickr.com/65535/48992121062_769c357412_o.png`</span>\n        },\n    }\n}</code></pre><p>Ensure <code>static</code> dir exists and optionally create <code>static/icon.png</code>.</p>\n<blockquote>\n<p>Recommended to be square png and &gt;= <code>512x512px</code></p>\n</blockquote>\n<p>Add this to <code>.gitignore</code>:</p>\n<pre><code class="hljs bash">sw.*</code></pre><p>PWA module is a collection of smaller modules that are designed to magically work out of the box together</p>\n<ul>\n<li><a href="https://pwa.nuxtjs.org/modules/workbox.html"><strong>Workbox</strong></a> - Registers a service worker for offline caching.</li>\n<li><a href="https://pwa.nuxtjs.org/modules/manifest.html"><strong>Manifest</strong></a> - Automatically generate <code>manifest.json</code> file.</li>\n<li><a href="https://pwa.nuxtjs.org/modules/meta.html"><strong>Meta</strong></a> - Automatically adds SEO friendly meta data with manifest integration.</li>\n<li><a href="https://pwa.nuxtjs.org/modules/icon.html"><strong>Icon</strong></a> - Automatically generates app icons with different sizes.</li>\n<li><a href="https://pwa.nuxtjs.org/modules/onesignal.html"><strong>OneSignal</strong></a> - Free background push notifications using OneSignal.</li>\n</ul>\n<h2 id="splash-screens"><a class="anchor" aria-hidden="true" href="#splash-screens"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Splash Screens</h2><p>Assuming a user installed your PWA on their home screen, the default behaviour is to show a white screen until the PWA is ready. This doesn’t feel very nice for the user and adding a custom splash screen makes your PWA feel more like a native app.</p>\n<p>Chrome for Android automatically shows your custom splash screen so long as you meet the following requirements in your web app manifest:</p>\n<ul>\n<li>The name property is set to the name of your PWA.</li>\n<li>The background_color property is set to a valid CSS color value.</li>\n<li>The icons array specifies an icon that is at least 512px by 512px.</li>\n<li>The icon exists and is a PNG.</li>\n</ul>\n<p>On Android this works ok, however, iOS does not support a similar method of automatically showing a splash screen. Instead you need to provide splash screens tailored for each iOS device using the <code>&lt;link rel=&quot;apple-touch-startup-image&quot; /&gt;</code> HTML meta tag.</p>\n<p>iOS will display those screens when your PWA is being opened as well as when it&#39;s in the background.</p>\n<p>You need to create a splash screen image for each and every resolution on <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/launch-screen/#static-launch-screen-images-not-recommended">Apple’s Launch Screen Guidelines</a> and add an HTML tag with media attribute for each device resolution and orientation 🙀! Unfortunately, this requirement is not documented on <a href="https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html">Safari Web Content Guide</a> sufficiently.</p>\n<p>Example link tag for just one resolution &amp; orientation pair</p>\n<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"apple-touch-startup-image"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/splash/apple-splash-2048-2732.png"</span>\n<span class="hljs-attr">media</span>=<span class="hljs-string">"(device-width: 1024px) and (device-height: 1366px)\nand (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"</span>&gt;</span></code></pre><blockquote>\n<p>💡 Creating icon and splash screen images for all the platforms, maintaining sizes and quality for all and adding HTML tags for each image can be overwhelming. So, why not automate it? 🤖 =&gt; We will use <a href="https://github.com/onderceylan/pwa-asset-generator">pwa-asset-generator</a>.</p>\n</blockquote>\n<h3 id="pwa-asset-generator"><a class="anchor" aria-hidden="true" href="#pwa-asset-generator"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>PWA asset generator</h3><ol>\n<li>Feature</li>\n</ol>\n<ul>\n<li>Generates both icons and splash screens with optional --icon-only --splash-only --landscape-only and --portrait-only flags ✨</li>\n<li>Updates your manifest.json and index.html files automatically for declaring generated image assets 🙌</li>\n</ul>\n<ol start="2">\n<li>Install</li>\n</ol>\n<pre><code class="hljs bash">npm install --global pwa-asset-generator</code></pre><ol start="3">\n<li>Using</li>\n</ol>\n<ul>\n<li>On terminal go to folder include icon</li>\n<li>Create <code>./src/index.html</code> file</li>\n<li>Create <code>./src/mainfest.json</code> file with content</li>\n</ul>\n<pre><code class="hljs bash">{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"My Progressive Web Application"</span>,\n  <span class="hljs-string">"short_name"</span>: <span class="hljs-string">"Progressive"</span>,\n  <span class="hljs-string">"start_url"</span>: <span class="hljs-string">"/?home=true"</span>,\n  <span class="hljs-string">"icons"</span>: [\n  ],\n  <span class="hljs-string">"theme_color"</span>: <span class="hljs-string">"#000000"</span>,\n  <span class="hljs-string">"background_color"</span>: <span class="hljs-string">"#FFFFFF"</span>,\n  <span class="hljs-string">"display"</span>: <span class="hljs-string">"fullscreen"</span>,\n  <span class="hljs-string">"orientation"</span>: <span class="hljs-string">"portrait"</span>\n}</code></pre><ul>\n<li>Run command to generate pwa asset</li>\n</ul>\n<pre><code class="hljs bash">pwa-asset-generator  ./icon.png --background <span class="hljs-string">"#ffffff"</span>\n--scrape <span class="hljs-literal">false</span> -i ./src/index.html -m ./src/manifest.json</code></pre><blockquote>\n<p>More options <a href="https://github.com/onderceylan/pwa-asset-generator#usage">here</a>.</p>\n</blockquote>\n<div class="Alert Alert--orange">\n<b>Warning:</b> On my laptop (Macbook pro) with NodeJS v12, I can\'t run `pwa-asset-generator` command. Instead I use below command:\n\n<pre><code class="hljs bash">/usr/<span class="hljs-built_in">local</span>/Cellar/node/12.10.0/bin/pwa-asset-generator ./icon.png\n--background <span class="hljs-string">"#ffffff"</span> --scrape <span class="hljs-literal">false</span> -i ./src/index.html -m ./src/manifest.json</code></pre></div>\n\n<ul>\n<li>Now you can use <code>images generated</code> to copy to <code>static folder</code> of project</li>\n<li>And you will use content in <code>src/index.html</code> and <code>src/manifest.json</code> to update your <code>nuxt.config.js</code> file</li>\n</ul>\n<p>Example</p>\n<pre><code class="hljs ts">meta: [\n    { name: <span class="hljs-string">\'mobile-web-app-capable\'</span>, content: <span class="hljs-string">\'yes\'</span> },\n    { name: <span class="hljs-string">\'apple-touch-fullscreen\'</span>, content: <span class="hljs-string">\'yes\'</span> },\n    { name: <span class="hljs-string">\'apple-mobile-web-app-capable\'</span>, content: <span class="hljs-string">\'yes\'</span> },\n    { name: <span class="hljs-string">\'apple-mobile-web-app-status-bar-style\'</span>, content: <span class="hljs-string">\'default\'</span> }\n],\nlink: [\n    { rel: <span class="hljs-string">\'icon\'</span>, <span class="hljs-keyword">type</span>: <span class="hljs-string">\'image/x-icon\'</span>, href: <span class="hljs-string">\'/favicon.ico\'</span> },\n    <span class="hljs-comment">// apple</span>\n    { rel:<span class="hljs-string">\'apple-touch-icon\'</span>, sizes:<span class="hljs-string">\'180x180\'</span>, href:<span class="hljs-string">\'/icons/apple-icon-180.png\'</span> },\n    { rel:<span class="hljs-string">\'apple-touch-icon\'</span>, sizes:<span class="hljs-string">\'167x167\'</span>, href:<span class="hljs-string">\'/icons/apple-icon-167.png\'</span> },\n    { rel:<span class="hljs-string">\'apple-touch-icon\'</span>, sizes:<span class="hljs-string">\'152x152\'</span>, href:<span class="hljs-string">\'/icons/apple-icon-152.png\'</span> },\n    { rel:<span class="hljs-string">\'apple-touch-icon\'</span>, sizes:<span class="hljs-string">\'120x120\'</span>, href:<span class="hljs-string">\'/icons/apple-icon-120.png\'</span> },\n    {\n    rel:<span class="hljs-string">\'apple-touch-startup-image\'</span>, href:<span class="hljs-string">\'/splash/apple-splash-2048-2732.png\'</span>,\n    media:<span class="hljs-string">\'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\'</span>\n    },\n    ...\n    {\n    rel:<span class="hljs-string">\'apple-touch-startup-image\'</span>, href:<span class="hljs-string">\'/splash/apple-splash-1136-640.png\'</span>,\n    media:<span class="hljs-string">\'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\'</span>\n    },\n]</code></pre>'}}],error:null,state:{theme:"light",filled:s,visibleAffix:!1,locale:"en",lang:{iso:"en",links:{download:"Download",live_edit:"Live Edit"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:t},homepage:{meta:{title:"tampm - Full-Stack Web Developer",description:t},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:e,links:[{to:"",name:"AWS?"}]},{title:"Services",links:[{to:"/s3-service",name:"S3 Service",contents:[{to:o,name:i},{to:l,name:r}]},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:c,links:[{to:"/serverless",name:c,contents:[{to:p,name:h},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],nodejs:[{title:e,links:[{to:"",name:"Node JS?",contents:[{to:"#basic-setup",name:"Basic Setup"}]},{to:d,name:m}]},{title:u,links:[{to:"/expressjs",name:u}]}],nuxtjs:[{title:e,links:[{to:"",name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:d,name:m}]},{title:"Practices",links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:o,name:i},{to:l,name:r}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]},{title:"Q&A",links:[{to:"/vue-nexttick-what-is-this",name:"Vue.nextTick - What is this?",contents:[{to:p,name:h},{to:"#when-do-you-need-use-it",name:"When do you need use it?"}]}]}],qa:[{title:e,links:[{to:"",name:"Question & Answer"},{to:"/how-custom-domain-with-github-pages",name:"How custom domain with GitHub Pages?",contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]},{to:"/how-can-change-author-email-git-commit",name:"How can I change the author or email of git commit?",contents:[{to:"#my-issue",name:"My issue"},{to:"#my-solution",name:"My solution"}]}]}]},homepage:{index:{attrs:{},body:""},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"I&#39;m a senior web developer with more than 6 years of software development experience.<br>"},what_i_can_do_backend:{attrs:{title:"Backend",fallback:s},body:"I worked with backend system: ASP.NET | Node.js | Python<br>"},what_i_can_do_database:{attrs:{title:"Database",fallback:s},body:"I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis<br>"},what_i_can_do_frontend:{attrs:{title:"Frontend",fallback:s},body:"I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)<br>"},what_i_can_do_more:{attrs:{title:"More things",fallback:s},body:"I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.<br>"},what_i_can_do:{attrs:{title:"What I can do?",fallback:s},body:'What <span class="text-nuxt-lightgreen">I can do</span>?<br>'}},adBlocked:!1,focusMode:!1,awesomeMenu:[{name:"Q&A",to:"qa"},{name:a,to:n},{name:"NodeJS",to:"nodejs"},{name:"AWS",to:"aws"}]},serverRendered:s}}(!0,"Informations","nuxtjs","NuxtJS","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#add-tailwind-css","Tailwind CSS","#add-bootstrap-vue","Bootstrap","Serverless","#what-is-this","What is this?","/convention","Convention","Express JS")