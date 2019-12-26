window.__NUXT__=function(e,s,a,n,t,o,i,r,l,c,h){return{layout:"default",data:[{},{path:"/en/aws/serverless",section:"aws",page:{attrs:{title:"AWS",name:a,description:"TP AWS for Serverless"},body:'<h2 id="what-is-this"><a class="anchor" aria-hidden="true" href="#what-is-this"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What is this</h2><blockquote>\n<p>Serverless application, in a nutshell, is a code without a Server to provision or manage.</p>\n</blockquote>\n<p>Serverless is the native architecture of the cloud that enables you to shift more of your operational responsibilities to AWS, increasing your agility and innovation. Serverless allows you to build and run applications and services without thinking about servers. It eliminates infrastructure management tasks such as server or cluster provisioning, patching, operating system maintenance, and capacity provisioning. You can build them for nearly any type of application or backend service, and everything required to run and scale your application with high availability is handled for you.</p>\n<h2 id="why-build-a-serverless-application"><a class="anchor" aria-hidden="true" href="#why-build-a-serverless-application"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Why build a serverless application</h2><p>Building a serverless application allows you to focus on your application code instead of managing and operating infrastructure. You do not have to think about provisioning or configuring servers since AWS handles all of this for you. This reduces your infrastructure management burden and helps you get faster time-to-market.</p>\n<p>Building a serverless application offers you four main benefits:</p>\n<ul>\n<li><strong>No server management:</strong> There is no need to provision or maintain any servers. There is no software or runtime to install, maintain, or administer</li>\n<li><strong>Flexible scaling:</strong> Your application can be scaled automatically or by adjusting its capacity through toggling the units of consumption (e.g. throughput, memory) rather than units of individual servers.</li>\n<li><strong>High availability:</strong> Serverless applications have built-in availability and fault tolerance. You do not need to architect for these capabilities since the services running the application provide them by default.</li>\n<li><strong>No idle capacity:</strong> You do not have to pay for idle capacity. There is no need to pre- or over-provision capacity for things like compute and storage. For example, there is no charge when your code is not running.</li>\n</ul>\n<h2 id="how-do-i-build-a-serverless-application"><a class="anchor" aria-hidden="true" href="#how-do-i-build-a-serverless-application"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>How do I build a serverless application</h2><p>You can build a serverless web application by using several AWS services together. Each service is fully managed and does not require you to provision or manage servers. You only need to configure them together and upload your application code to AWS Lambda, a serverless compute service.</p>\n<p><img src="https://d1.awsstatic.com/Test%20Images/Kate%20Test%20Images/Serverless_Web_App_LP_assets-12.da876b91b6451199d3582b6cc81dc17ff7e5791f.png" alt="Example Serverless Application Architecture"></p>\n<h2 id="serverless-framework"><a class="anchor" aria-hidden="true" href="#serverless-framework"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Serverless framework</h2><h3 id="what-is-this-"><a class="anchor" aria-hidden="true" href="#what-is-this-"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What is this?</h3><p>The complete solution for building &amp; operating serverless applications</p>\n<h3 id="tutorial"><a class="anchor" aria-hidden="true" href="#tutorial"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Tutorial</h3><blockquote>\n<p>Document from <a href="https://serverless.com/framework/docs/providers/aws/guide/quick-start/">serverless framework</a></p>\n</blockquote>\n<ol>\n<li>Requirements</li>\n</ol>\n<ul>\n<li>Install <a href="https://nodejs.org/en/">Nodejs</a></li>\n<li>Install <a href="https://www.python.org/">Python</a></li>\n<li>Install <a href="https://aws.amazon.com/cli/">AWS CLI</a></li>\n</ul>\n<ol start="2">\n<li>Installing Serverless Module</li>\n</ol>\n<ul>\n<li>The Serverless framework is an NPM module. To install it, type the following command into Terminal:</li>\n</ul>\n<pre><code class="hljs bash">npm install -g serverless</code></pre><ol start="3">\n<li>A sample project</li>\n</ol>\n<ul>\n<li>Run the following command.</li>\n</ul>\n<pre><code class="hljs bash">serverless create --template aws-nodejs --path my-service</code></pre><ul>\n<li>This creates a new serverless project using the built-in Node.js template and named as <code>my-service</code>.</li>\n<li>Give your Lambda function a try by using the invoke command.</li>\n</ul>\n<pre><code class="hljs bash"><span class="hljs-built_in">cd</span> my-service\nsls invoke <span class="hljs-built_in">local</span> -f hello</code></pre><ul>\n<li>You should get a response:</li>\n</ul>\n<pre><code class="hljs json">{\n  <span class="hljs-attr">"statusCode"</span>: <span class="hljs-number">200</span>,\n  <span class="hljs-attr">"body"</span>: <span class="hljs-string">"{\\"message\\":\\"Go Serverless v1.0! Your function executed successfully!\\",\\"input\\":\\"\\"}"</span>\n}</code></pre><p>So far, you created a Serverless project using a Node.js sample template. Then you invoked the hello function on your local machine.</p>\n<p>Now that everything is working locally, it’s time to deploy to the cloud.</p>\n<h3 id="create-a-service-account-in-aws"><a class="anchor" aria-hidden="true" href="#create-a-service-account-in-aws"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Create a service account in AWS</h3><p>Serverless needs access keys in order to perform actions within your AWS account. So you need to create a service account with a set of access keys.</p>\n<p>Perform the following steps within the AWS console:</p>\n<ul>\n<li>Go to IAM</li>\n<li>On the left, select the Users tab</li>\n<li>Click the Add user button</li>\n<li>For the User name, type serverless</li>\n<li>Next to Access type, check the box for Programmatic access</li>\n<li>Click the Next: Permissions button</li>\n</ul>\n<p>Using the Add user wizard, you begin the process of creating a service account named serverless. You also select Programmatic access, which generates access keys for you.</p>\n<p>Continue with the next section of the Add User wizard.</p>\n<ul>\n<li>On the Set permissions for serverless page, click Attach existing policies directly</li>\n<li>Type AdministratorAccess in the search filter</li>\n<li>Check the box next to the AdministratorAccess policy</li>\n<li>Click the Next: Review button</li>\n<li>On the Review page, click the Create user button</li>\n<li>Click the Download .csv button</li>\n<li>Click Close</li>\n</ul>\n<p>You grant admin privileges to your service account by attaching the AdministratorAccess policy. Once the account is created, you download a CSV file containing the access keys. This is the only chance you get to download these keys.</p>\n<blockquote>\n<p>Note: In a production environment, you should tailor down access to least privilege. This tutorial uses a blanket admin access policy to keep things simple. Be sure to detach this policy when you’re done.</p>\n</blockquote>\n<h3 id="configure-a-local-aws-profile"><a class="anchor" aria-hidden="true" href="#configure-a-local-aws-profile"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Configure a local AWS profile</h3><p>Now that you have a set of access keys, you can save them inside an AWS profile on your local Mac. Later, you will refer to this profile name in the Serverless configuration file.</p>\n<p>Note: It’s a good practice to use AWS profiles so you don’t accidentally deploy infrastructure to the wrong AWS account.</p>\n<p>Create a local AWS profile named serverless:</p>\n<pre><code class="hljs bash">aws configure --profile serverless</code></pre><p>You will be prompted with a series of questions. Refer to the downloaded CSV file when filling out the Access and Secret Access keys:</p>\n<pre><code class="hljs bash">AWS Access Key ID [None]: ABCEDFGHIJ123NOPQRST\nAWS Secret Access Key [None]: 1122330099aaBBccDDeeFFggHHiiJJkk//LLmmOO\nDefault region name [None]: us-east-1\nDefault output format [None]: json</code></pre><p>Test out your AWS profile with this command:</p>\n<pre><code class="hljs bash">aws s3 ls --profile serverless</code></pre><p>You should see a list of S3 buckets in your AWS account.</p>\n<h3 id="deploy-serverless-to-aws"><a class="anchor" aria-hidden="true" href="#deploy-serverless-to-aws"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Deploy Serverless to AWS</h3><p>Now that you have a local AWS profile, you can deploy your Serverless app to AWS.</p>\n<p>Update serverless.yml with the following:</p>\n<pre><code class="hljs yml"><span class="hljs-attr">service:</span> <span class="hljs-string">serverless-tutorial</span>  <span class="hljs-comment"># 1</span>\n<span class="hljs-attr">provider:</span>\n  <span class="hljs-attr">name:</span> <span class="hljs-string">aws</span>\n  <span class="hljs-attr">runtime:</span> <span class="hljs-string">nodejs8.10</span>\n  <span class="hljs-attr">profile:</span> <span class="hljs-string">serverless</span>  <span class="hljs-comment"># 2</span>\n<span class="hljs-attr">functions:</span>\n  <span class="hljs-attr">hello:</span>\n    <span class="hljs-attr">handler:</span> <span class="hljs-string">handler.hello</span></code></pre><p>You are making two changes:</p>\n<ul>\n<li>You rename the service to serverless-tutorial. A service is like a project.</li>\n<li>You specify the local AWS profile you created in the previous section.</li>\n</ul>\n<p>Deploy the app to AWS with the following command:</p>\n<pre><code class="hljs bash">sls deploy</code></pre><p>You should see the following output:</p>\n<pre><code class="hljs bash">Serverless: Creating Stack...\nServerless: Checking Stack create progress... ..... \nServerless: Stack create finished... \nServerless: Packaging service... \n...\n...</code></pre><p>To make sure that everything is working, invoke your lambda function from the command line:</p>\n<pre><code class="hljs bash">sls invoke -f hello</code></pre><p>You should see the following response:</p>\n<pre><code class="hljs json">{\n  <span class="hljs-attr">"statusCode"</span>: <span class="hljs-number">200</span>,\n  <span class="hljs-attr">"body"</span>: <span class="hljs-string">"{\\"message\\":\\"Go Serverless v1.0! Your function executed successfully!\\",\\"input\\":{}}"</span>\n}</code></pre><h3 id="create-an-http-endpoint"><a class="anchor" aria-hidden="true" href="#create-an-http-endpoint"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Create an HTTP endpoint</h3><p>Up until this point, you’ve been invoking your Lambda from the command line. In this section, you’re going to use API Gateway to create a client-facing REST API layer.</p>\n<p>The Serverless framework makes it easy to add a new endpoint. Just add a few lines to your serverless.yml file:</p>\n<pre><code class="hljs bash">service: serverless-tutorial\nprovider:\n  name: aws\n  runtime: nodejs4.3\n  profile: serverless\n<span class="hljs-built_in">functions</span>:\n  hello:\n    handler: handler.hello\n    events:  <span class="hljs-comment"># 1</span>\n      - http:  <span class="hljs-comment"># 2</span>\n          method: get  <span class="hljs-comment"># 3</span>\n          path: hello  <span class="hljs-comment"># 4</span></code></pre><p>Deploy your updated configuration to AWS:</p>\n<pre><code class="hljs bash">sls deploy</code></pre><p>The output now shows a URL endpoint</p>\n<pre><code class="hljs bash">...\nendpoints:\nGET - https://abcd1234ef.execute-api.us-east-1.amazonaws.com/dev/hello</code></pre><p>Paste this URL into a browser, and you should see the following:</p>\n<pre><code class="hljs json">{\n  "message":"Go Serverless v1.0! Your function executed successfully!",\n  "input":{\n    "resource":"/hello",\n    "path":"/hello",\n    "httpMethod":"GET",\n    ...\n    "body":null,\n    "isBase64Encoded":false\n  }\n}</code></pre>'}}],error:null,state:{theme:"light",filled:e,visibleAffix:!1,locale:"en",lang:{iso:"en",links:{download:"Download",live_edit:"Live Edit"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:'Search ("/" to focus)',version:"Version"},meta:{title:"TP Website",description:n},homepage:{meta:{title:"Full-Stack Web Developer",description:n},welcome:{hire_me:"Hire me",connect_me:"Connect me"}}},menu:{aws:[{title:s,links:[{to:"",name:"AWS?"}]},{title:"Services",links:[{to:"/s3-service",name:"S3 Service",contents:[{to:t,name:o},{to:i,name:r}]},{to:"/lambda-service",name:"Lambda Service",contents:[{to:"#best-practices-of-lambda-function",name:"Best practices"},{to:"#when-not-to-use-aws-lambda",name:"When not to use"},{to:"#limitations-of-aws-lambda",name:"Limitations"}]}]},{title:a,links:[{to:"/serverless",name:a,contents:[{to:"#what-is-this",name:"What is this?"},{to:"#why-build-a-serverless-application",name:"Why build a serverless application?"},{to:"#how-do-i-build-a-serverless-application",name:"How do I build a serverless application?"},{to:"#serverless-framework",name:"Serverless framework tutorial"}]}]}],nuxtjs:[{title:s,links:[{to:"",name:"Nuxt JS?",contents:[{to:"#schema",name:"Schema"}]},{to:l,name:c}]},{title:"Practices",links:[{to:"/basic-setup",name:"Basic setup",contents:[{to:t,name:o},{to:i,name:r}]},{to:"/pwa",name:"PWA",contents:[{to:"#how-setup-with-nuxtjs",name:"How setup with NuxtJS?"},{to:"#splash-screens",name:"Splash Screens"},{to:"#pwa-asset-generator",name:"PWA asset generator"}]}]}],nodejs:[{title:s,links:[{to:"",name:"Node JS?",contents:[{to:"#basic-setup",name:"Basic Setup"}]},{to:l,name:c}]},{title:h,links:[{to:"/expressjs",name:h}]}],qa:[{title:s,links:[{to:"",name:"Question & Answer"},{to:"/how-custom-domain-with-github-pages",name:"How custom domain with GitHub Pages?",contents:[{to:"#add-custom-domain-on-github",name:"Config on Github"},{to:"#update-dns-provider-example-godaddy-",name:"Update DNS provider"}]}]}]},homepage:{index:{attrs:{},body:""},what_i_can_do_database:{attrs:{title:"Database",fallback:e},body:"I worked with RDBMS: SQL Server | Postgresql | Mysql) or NoSQL (MongoDb | Firebase | Redis<br>"},what_i_can_do_backend:{attrs:{title:"Backend",fallback:e},body:"I worked with backend system: ASP.NET | Node.js | Python<br>"},what_i_can_do_frontend:{attrs:{title:"Frontend",fallback:e},body:"I&#39;m quite fullstack on web development. I can work on dilligent frontend stuffs (HTML5 | CSS3 | AngularJs | Vue.JS)<br>"},welcome:{attrs:{title:"Hi, I'm <span class=\"text-nuxt-lightgreen\">Tam</span>.<br>I'm full-stack web developer.<br>"},body:"I&#39;m a senior web developer with more than 6 years of software development experience.<br>"},what_i_can_do_more:{attrs:{title:"More things",fallback:e},body:"I&#39;m comfortable with both Windows &amp; Linux (any distros) as well as up-to-date best tools &amp; practices for a web ninja: Continuous Integration &amp; Continuous Deployment, Docker, Chef, Puppet, Ansible. In my free time, I would love playing around with ETL, data scraping or doing machine learning stuffs.<br>"},what_i_can_do:{attrs:{title:"What I can do?",fallback:e},body:'What <span class="text-nuxt-lightgreen">I can do</span>?<br>'}},adBlocked:!1,focusMode:!1,awesomeMenu:[{name:"Q&A",to:"qa"},{name:"NuxtJS",to:"nuxtjs"},{name:"NodeJS",to:"nodejs"},{name:"AWS",to:"aws"}]},serverRendered:e}}(!0,"Informations","Serverless","Hi, I'm Tam. I'm a freelancer and full-stack web developer from Vietnam","#add-tailwind-css","Tailwind CSS","#add-bootstrap-vue","Bootstrap","/convention","Convention","Express JS")