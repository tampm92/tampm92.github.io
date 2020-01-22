window.__NUXT__=function(e,t,n,a,o,s,i,r,c,l,d,m,u,p,h){return{layout:"default",data:[{},{path:"/en/nuxtjs/convention",section:a,page:{attrs:{title:o,name:n,description:"TP-NuxtJS - Nuxt convention"},body:'<h2 id="directory-structure"><a class="anchor" aria-hidden="true" href="#directory-structure"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Directory Structure</h2><pre><code class="hljs bash">project-folder\n|-assets <span class="hljs-comment">#directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts</span>\n|-components <span class="hljs-comment">#directory contains your Vue.js Components. You can\'t use either asyncData or fetch in these components.</span>\n|-layouts <span class="hljs-comment">#directory includes your application layouts. Layouts are used to change the look and feel of your page.</span>\n|-middleware <span class="hljs-comment">#directory contains your Application Middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layouts).</span>\n|-mixins\n|-modules\n|-pages <span class="hljs-comment">#directory contains your Application Views and Routes. The framework reads all the .vue files inside this directory and creates the application router</span>\n|-plugins <span class="hljs-comment">#directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application. This is the place to register components globally and to inject functions or constants.</span>\n|-shared\n|-static <span class="hljs-comment">#directory is directly mapped to the server root.</span>\n|-store <span class="hljs-comment">#directory contains your Vuex Store files.</span>\n.env\n.env.production\nnuxt.config.json <span class="hljs-comment">#file contains your Nuxt.js custom configuration.</span>\npackage.json <span class="hljs-comment">#file contains your Application dependencies and scripts.</span></code></pre>'}}],error:null,state:{theme:"light",filled:e,visibleAffix:!1,locale:"en",lang:{iso:"en",links:{download:"Download",live_edit:"Live Edit"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:s},homepage:{meta:{title:"tampm - Full-Stack Web Developer",description:s},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:t,links:[{to:"",name:"AWS?"}]},{title:"Services",links:[{to:"/s3-service",name:"S3 Service",contents:[{to:i,name:r},{to:c,name:l}]},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:d,links:[{to:"/serverless",name:d,contents:[{to:m,name:u},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],nodejs:[{title:t,links:[{to:"",name:"Node JS?",contents:[{to:"#basic-setup",name:"Basic Setup"}]},{to:p,name:n}]},{title:h,links:[{to:"/expressjs",name:h}]}],nuxtjs:[{title:t,links:[{to:"",name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:p,name:n}]},{title:"Practices",links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:i,name:r},{to:c,name:l}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]},{title:"Q&A",links:[{to:"/vue-nexttick-what-is-this",name:"Vue.nextTick - What is this?",contents:[{to:m,name:u},{to:"#when-do-you-need-use-it",name:"When do you need use it?"}]}]}],qa:[{title:t,links:[{to:"",name:"Question & Answer"},{to:"/how-custom-domain-with-github-pages",name:"How custom domain with GitHub Pages?",contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]},{to:"/how-can-change-author-email-git-commit",name:"How can I change the author or email of git commit?",contents:[{to:"#my-issue",name:"My issue"},{to:"#my-solution",name:"My solution"}]}]}]},homepage:{index:{attrs:{},body:""},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"I&#39;m a senior web developer with more than 6 years of software development experience.<br>"},what_i_can_do_backend:{attrs:{title:"Backend",fallback:e},body:"I worked with backend system: ASP.NET | Node.js | Python<br>"},what_i_can_do_database:{attrs:{title:"Database",fallback:e},body:"I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis<br>"},what_i_can_do_frontend:{attrs:{title:"Frontend",fallback:e},body:"I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)<br>"},what_i_can_do_more:{attrs:{title:"More things",fallback:e},body:"I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.<br>"},what_i_can_do:{attrs:{title:"What I can do?",fallback:e},body:'What <span class="text-nuxt-lightgreen">I can do</span>?<br>'}},adBlocked:!1,focusMode:!1,awesomeMenu:[{name:"Q&A",to:"qa"},{name:o,to:a},{name:"NodeJS",to:"nodejs"},{name:"AWS",to:"aws"}]},serverRendered:e}}(!0,"Informations","Convention","nuxtjs","NuxtJS","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#add-tailwind-css","Tailwind CSS","#add-bootstrap-vue","Bootstrap","Serverless","#what-is-this","What is this?","/convention","Express JS")