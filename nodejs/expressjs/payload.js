window.__NUXT__=function(e,s,a,t,n,o,i,r,l,c,d,p,h){return{layout:"default",data:[{},{path:"/en/nodejs/expressjs",section:a,page:{attrs:{title:t,name:"Expressjs",description:"TP ExpressJS"},body:'<h2 id="requirements"><a class="anchor" aria-hidden="true" href="#requirements"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Requirements</h2><ul>\n<li>Install <a href="https://nodejs.org/en/">Nodejs</a></li>\n<li>Install <a href="https://yarnpkg.com/lang/en/">Yarn</a></li>\n</ul>\n<h2 id="add-expressjs"><a class="anchor" aria-hidden="true" href="#add-expressjs"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add ExpressJS</h2><pre><code class="hljs bash">yarn add express</code></pre><h2 id="add-app-js-file"><a class="anchor" aria-hidden="true" href="#add-app-js-file"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Add app.js file</h2><pre><code class="hljs ts"><span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'express\'</span>)\n<span class="hljs-keyword">const</span> app = express()\n<span class="hljs-keyword">const</span> port = <span class="hljs-number">3000</span>\n\napp.get(<span class="hljs-string">\'/\'</span>, <span class="hljs-function">(<span class="hljs-params">req, res</span>) =&gt;</span> res.send(<span class="hljs-string">\'Hello World!\'</span>))\n\napp.listen(port, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Example app listening on port <span class="hljs-subst">${port}</span>!`</span>))</code></pre><h2 id="running-locally"><a class="anchor" aria-hidden="true" href="#running-locally"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Running locally</h2><pre><code class="hljs bash">node app.js</code></pre>'}}],error:null,state:{theme:"light",filled:e,visibleAffix:!1,locale:"en",lang:{iso:"en",links:{download:"Download",live_edit:"Live Edit"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:n},homepage:{meta:{title:"Full-Stack Web Developer",description:n},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:s,links:[{to:"",name:"AWS?"}]},{title:"Services",links:[{to:"/s3-service",name:"S3 Service",contents:[{to:o,name:i},{to:r,name:l}]},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:c,links:[{to:"/serverless",name:c,contents:[{to:"#what-is-this",name:"What is this?"},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],nodejs:[{title:s,links:[{to:"",name:"Node JS?",contents:[{to:"#basic-setup",name:"Basic Setup"}]},{to:d,name:p}]},{title:h,links:[{to:"/expressjs",name:h}]}],nuxtjs:[{title:s,links:[{to:"",name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:d,name:p}]},{title:"Practices",links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:o,name:i},{to:r,name:l}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]}],qa:[{title:s,links:[{to:"",name:"Question & Answer"},{to:"/how-custom-domain-with-github-pages",name:"How custom domain with GitHub Pages?",contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]}]}]},homepage:{index:{attrs:{},body:""},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"I&#39;m a senior web developer with more than 6 years of software development experience.<br>"},what_i_can_do_backend:{attrs:{title:"Backend",fallback:e},body:"I worked with backend system: ASP.NET | Node.js | Python<br>"},what_i_can_do_database:{attrs:{title:"Database",fallback:e},body:"I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis<br>"},what_i_can_do_more:{attrs:{title:"More things",fallback:e},body:"I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.<br>"},what_i_can_do_frontend:{attrs:{title:"Frontend",fallback:e},body:"I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)<br>"},what_i_can_do:{attrs:{title:"What I can do?",fallback:e},body:'What <span class="text-nuxt-lightgreen">I can do</span>?<br>'}},adBlocked:!1,focusMode:!1,awesomeMenu:[{name:"Q&A",to:"qa"},{name:"NuxtJS",to:"nuxtjs"},{name:t,to:a},{name:"AWS",to:"aws"}]},serverRendered:e}}(!0,"Informations","nodejs","NodeJS","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#add-tailwind-css","Tailwind CSS","#add-bootstrap-vue","Bootstrap","Serverless","/convention","Convention","Express JS")