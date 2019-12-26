window.__NUXT__=function(e,t,a,n,o,i,s,r,c,l,d){return{layout:"default",data:[{},{path:"/en/aws/s3-service",section:"aws",page:{attrs:{title:"AWS",name:"S3 Services",description:"TP AWS for S3 service"},body:'<h2 id="what-is-this"><a class="anchor" aria-hidden="true" href="#what-is-this"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What is this</h2><p><img src="https://s3.amazonaws.com/awscomputeblogmedia/fanout-S3-usecase-diagram.png" alt="AWS S3"></p>\n<p>Amazon Simple Storage Service (S3) is a storage that can be maintained and accessed over the Internet. Amazon S3 provides the web service which can be used to store and retrieve unlimited amount of data. The same can be done programmatically using Amazon-provided APIs.</p>\n<h2 id="what-is-an-amazon-s3-bucket"><a class="anchor" aria-hidden="true" href="#what-is-an-amazon-s3-bucket"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What is an Amazon S3 Bucket</h2><p>S3 in Amazon has two primary entities called buckets and objects. Objects are stored inside buckets. Also, it does have a flat hierarchy, not like the one you would find in a file system. But in an organization, a file system is needed in an ordered fashion, and that’s why AWS S3 introduced a file system which seems like a traditional one.</p>\n<h2 id="getting-started-with-amazon-s3"><a class="anchor" aria-hidden="true" href="#getting-started-with-amazon-s3"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Getting started with Amazon S3</h2><ul>\n<li>Set up and log into your AWS account (<a href="https://aws.amazon.com/console/">AWS account</a>)</li>\n<li>Create a bucket (<a href="https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">create an S3 bucket</a>)</li>\n<li>Start building with AWS (<a href="https://docs.aws.amazon.com/AmazonS3/latest/gsg/GetStartedWithS3.html">Getting Started Guide</a>)</li>\n</ul>\n'}}],error:null,state:{theme:"light",filled:e,visibleAffix:!1,locale:"en",lang:{iso:"en",links:{download:"Download",live_edit:"Live Edit"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:a},homepage:{meta:{title:"Full-Stack Web Developer",description:a},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:t,links:[{to:"",name:"AWS?"}]},{title:"Services",links:[{to:"/s3-service",name:"S3 Service",contents:[{to:n,name:o},{to:i,name:s}]},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:r,links:[{to:"/serverless",name:r,contents:[{to:"#what-is-this",name:"What is this?"},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],nuxtjs:[{title:t,links:[{to:"",name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:c,name:l}]},{title:"Practices",links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:n,name:o},{to:i,name:s}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]}],nodejs:[{title:t,links:[{to:"",name:"Node JS?",contents:[{to:"#basic-setup",name:"Basic Setup"}]},{to:c,name:l}]},{title:d,links:[{to:"/expressjs",name:d}]}],qa:[{title:t,links:[{to:"",name:"Question & Answer"},{to:"/how-custom-domain-with-github-pages",name:"How custom domain with GitHub Pages?",contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]}]}]},homepage:{index:{attrs:{},body:""},what_i_can_do_database:{attrs:{title:"Database",fallback:e},body:"I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis<br>"},what_i_can_do_backend:{attrs:{title:"Backend",fallback:e},body:"I worked with backend system: ASP.NET | Node.js | Python<br>"},what_i_can_do_frontend:{attrs:{title:"Frontend",fallback:e},body:"I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)<br>"},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"I&#39;m a senior web developer with more than 6 years of software development experience.<br>"},what_i_can_do_more:{attrs:{title:"More things",fallback:e},body:"I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.<br>"},what_i_can_do:{attrs:{title:"What I can do?",fallback:e},body:'What <span class="text-nuxt-lightgreen">I can do</span>?<br>'}},adBlocked:!1,focusMode:!1,awesomeMenu:[{name:"Q&A",to:"qa"},{name:"NuxtJS",to:"nuxtjs"},{name:"NodeJS",to:"nodejs"},{name:"AWS",to:"aws"}]},serverRendered:e}}(!0,"Informations","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#add-tailwind-css","Tailwind CSS","#add-bootstrap-vue","Bootstrap","Serverless","/convention","Convention","Express JS")