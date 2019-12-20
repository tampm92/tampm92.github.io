window.__NUXT__=function(s,e,n,a,t,i,l,o,c,r,d){return{layout:"default",data:[{},{path:"/en/nuxtjs/basic-setup",section:n,page:{attrs:{title:a,name:t,description:"Setup nuxt with bootstrap OR tailwind css"},body:'<h2 id="prepare"><a class="anchor" aria-hidden="true" href="#prepare"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Prepare</h2><ul>\n<li>Install <a href="https://nodejs.org/en/">Nodejs</a></li>\n<li>Install <a href="https://yarnpkg.com/lang/en/">Yarn</a></li>\n</ul>\n<h2 id="referents"><a class="anchor" aria-hidden="true" href="#referents"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Referents</h2><ul>\n<li><a href="https://github.com/nuxt-community/style-resources-module">Style Resources Module</a></li>\n<li><a href="https://bootstrap-vue.js.org/docs/">Bootstrap Vue</a></li>\n<li><a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a></li>\n</ul>\n<h2 id="start-project"><a class="anchor" aria-hidden="true" href="#start-project"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Start project</h2><pre><code class="hljs bash"><span class="hljs-comment"># create project</span>\nyarn create nuxt-app &lt;project-name&gt;\n<span class="hljs-comment"># run project in dev env</span>\nyarn run dev</code></pre><h2 id="setup-project-use-scss"><a class="anchor" aria-hidden="true" href="#setup-project-use-scss"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup project use scss</h2><ul>\n<li>Install libs:</li>\n</ul>\n<pre><code class="hljs bash">yarn add sass-loader node-sass @nuxtjs/style-resources</code></pre><ul>\n<li><p>Create files in folder <code>assets/scss</code></p>\n<ul>\n<li><code>global.scss</code> (include css code global)</li>\n<li><code>_variables.scss</code> (<a href="https://css-tricks.com/difference-between-types-of-css-variables/">more</a>)</li>\n<li><code>_mixins.scss</code> (<a href="https://css-tricks.com/custom-user-mixins/">more</a>)</li>\n</ul>\n</li>\n<li><p>Update file <code>nuxt.config.js</code></p>\n</li>\n</ul>\n<pre><code class="hljs ts">loading: {\n    color: <span class="hljs-string">\'#00C58E\'</span>,\n    height: <span class="hljs-string">\'5px\'</span>,\n    duration: <span class="hljs-number">10000</span>\n},\ncss: [\n    <span class="hljs-string">\'~/assets/scss/global.scss\'</span>,\n],\nmodules: [\n    <span class="hljs-string">\'@nuxtjs/style-resources\'</span>,\n],\nstyleResources: {\n    scss: [\n      <span class="hljs-string">\'~/assets/scss/_variables.scss\'</span>,\n      <span class="hljs-string">\'~/assets/scss/_mixins.scss\'</span>,\n    ]\n}</code></pre><h2 id="add-tailwind-css"><a class="anchor" aria-hidden="true" href="#add-tailwind-css"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add Tailwind CSS</h2><ul>\n<li>Install libs:</li>\n</ul>\n<pre><code class="hljs bash">yarn add sass-loader node-sass @nuxtjs/style-resources\nyarn add @nuxtjs/tailwindcss</code></pre><ul>\n<li>Create file <code>assets/scss/tailwind.scss</code> with content</li>\n</ul>\n<pre><code class="hljs css"><span class="hljs-keyword">@import</span> <span class="hljs-string">\'tailwindcss/base\'</span>;\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'tailwindcss/components\'</span>;\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'tailwindcss/utilities\'</span>;</code></pre><ul>\n<li>Create file <code>tailwind.config.js</code> with content</li>\n</ul>\n<pre><code class="hljs ts"><span class="hljs-built_in">module</span>.exports = {\n    theme: {},\n    variants: {},\n    plugins: []\n}</code></pre><ul>\n<li>Update file <code>nuxt.config.js</code></li>\n</ul>\n<pre><code class="hljs ts">css: [\n    <span class="hljs-string">\'~/assets/scss/tailwind.scss\'</span>,\n    <span class="hljs-string">\'~/assets/scss/global.scss\'</span>,\n],\nbuild: {\n    extend (config, ctx) {\n    },\n    postcss: {\n        plugins: {\n            tailwindcss: {\n                configPath: <span class="hljs-string">\'~/tailwind.config.js\'</span>,\n                cssPath: <span class="hljs-string">\'~/assets/scss/tailwind.scss\'</span>\n            }\n        },\n    }\n}</code></pre><h2 id="add-bootstrap-vue"><a class="anchor" aria-hidden="true" href="#add-bootstrap-vue"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add Bootstrap-Vue</h2><ul>\n<li>Install libs</li>\n</ul>\n<pre><code class="hljs bash">yarn add bootstrap-vue</code></pre><ul>\n<li>Udpdate file <code>nuxt.config.js</code></li>\n</ul>\n<pre><code class="hljs ts">modules: [\n    <span class="hljs-string">\'@nuxtjs/style-resources\'</span>,\n    <span class="hljs-string">\'bootstrap-vue/nuxt\'</span>,\n]</code></pre>'}}],error:null,state:{theme:"light",filled:s,visibleAffix:!1,locale:"en",lang:{iso:"en",links:{download:"Download",live_edit:"Live Edit"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:i},homepage:{meta:{title:"Full-Stack Web Developer",description:i},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:e,links:[{to:"",name:"AWS?"}]},{title:l,links:[{to:"/services",name:l}]},{title:o,links:[{to:"/serverless",name:o}]}],nuxtjs:[{title:e,links:[{to:"",name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:c,name:r}]},{title:"Practices",links:[{to:"/basic-setup",name:t,contents:[{to:"#add-tailwind-css",name:"Tailwind CSS"},{to:"#add-bootstrap-vue",name:"Bootstrap"}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]}],nodejs:[{title:e,links:[{to:"",name:"Node JS?",contents:[{to:"#install",name:"Install"}]},{to:c,name:r}]},{title:d,links:[{to:"/expressjs",name:d}]}]},homepage:{index:{attrs:{},body:""},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"I&#39;m a senior web developer with more than 6 years of software development experience.<br>"},what_i_can_do_backend:{attrs:{title:"Backend",fallback:s},body:"I worked with backend system: ASP.NET | Node.js | Python<br>"},what_i_can_do_database:{attrs:{title:"Database",fallback:s},body:"I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis<br>"},what_i_can_do_more:{attrs:{title:"More things",fallback:s},body:"I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.<br>"},what_i_can_do_frontend:{attrs:{title:"Frontend",fallback:s},body:"I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)<br>"},what_i_can_do:{attrs:{title:"What I can do?",fallback:s},body:'What <span class="text-nuxt-lightgreen">I can do</span>?<br>'}},adBlocked:!1,focusMode:!1,awesomeMenu:[{name:a,to:n},{name:"NodeJS",to:"nodejs"},{name:"AWS",to:"aws"}]},serverRendered:s}}(!0,"Informations","nuxtjs","NuxtJS","Basic setup","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","Services","Serverless","/convention","Convention","Express JS")