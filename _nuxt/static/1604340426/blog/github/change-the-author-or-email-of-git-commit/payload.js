__NUXT_JSONP__("/blog/github/change-the-author-or-email-of-git-commit", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX){aW._id=h;aW.name=x;aW.alternativeText=e;aW.caption=e;aW.hash=y;aW.ext=a;aW.mime=b;aW.size=z;aW.width=A;aW.height=f;aW.url=B;aW.formats={thumbnail:{name:C,hash:D,ext:a,mime:b,width:E,height:F,size:G,path:d,url:H},medium:{name:I,hash:J,ext:a,mime:b,width:K,height:L,size:M,path:d,url:N},small:{name:O,hash:P,ext:a,mime:b,width:f,height:Q,size:R,path:d,url:S}};aW.provider=i;aW.related=[T,t,u,v,k,r,U,V];aW.createdAt=W;aW.updatedAt=X;aW.__v=c;aW.id=h;return {data:[{links:{recent_posts:[{isPublished:q,isPin:q,_id:r,slug:"github-page",name:ay,publishedDate:"2020-10-03",createdAt:az,updatedAt:"2020-09-29T20:58:35.865Z",__v:c,author:{_id:g,name:Z,displayName:_,createdAt:l,updatedAt:$,__v:c,cover:{_id:m,name:aa,alternativeText:e,caption:e,hash:ab,ext:a,mime:b,size:ac,width:n,height:n,url:ad,formats:{thumbnail:{name:ae,hash:af,ext:a,mime:b,width:o,height:o,size:ag,path:d,url:ah},small:{name:ai,hash:aj,ext:a,mime:b,width:f,height:f,size:ak,path:d,url:al}},provider:i,related:[g],createdAt:am,updatedAt:an,__v:c,id:m},published_at:l,id:g},category:{position:s,_id:j,slug:w,name:ao,description:ap,createdAt:p,updatedAt:aq,__v:c,published_at:p,id:j},cover:{_id:h,name:x,alternativeText:e,caption:e,hash:y,ext:a,mime:b,size:z,width:A,height:f,url:B,formats:{thumbnail:{name:C,hash:D,ext:a,mime:b,width:E,height:F,size:G,path:d,url:H},medium:{name:I,hash:J,ext:a,mime:b,width:K,height:L,size:M,path:d,url:N},small:{name:O,hash:P,ext:a,mime:b,width:f,height:Q,size:R,path:d,url:S}},provider:i,related:[T,t,u,v,k,r,U,V],createdAt:W,updatedAt:X,__v:c,id:h},published_at:az,trans_posts:[{lang:Y,_id:aA,name:ay,content:"## Referents\n\n- [TP GitHub](https:\u002F\u002Ftampm.com\u002Fblog\u002Fgithub)\n- [GitHub Page](https:\u002F\u002Fpages.github.com\u002F)\n\n## What is this\n\n- GitHub Pages is websites for you and your projects.\n- Hosted directly from your GitHub repository. Just edit, push, and your changes are live.\n\n## Ready to get started\n\n1. Create a repository named username.github.io, where username is your username (or organization name) on GitHub.\n\n\u003E If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.\n\n2. Clone the repository\n3. Create an `index.html` file\n\n```html\n\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"en\"\u003E\n\u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\n    \u003Ctitle\u003ETP hello word\u003C\u002Ftitle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n    TP hello word\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n```\n\n4. Add, commit, and push your changes\n\n5. Go to `username.github.io` on browser\n\n## How custom domain with GitHub Pages?\n\n### Add custom domain on github\n\n- On GitHub, navigate to your site's repository.\n- Under your repository name, click  Settings.\n- Under \"Custom domain\", type your custom domain, then click Save. This will create a commit that adds a CNAME file in the root of your publishing source. (OR go to your editor and in the repository of your website create a new file named “CNAME” in the root of your directory.)\n\n### Update DNS provider (example GoDaddy)\n\n1. On the home page of your account the in Domain Manager “Menu Domains” Go to all domains and select Use My Domains in Next Steps Colums.\n2. Within the DNS management page you will need to make five changes:\n\n- In the Type “A” row update the IP address to: 185.199.108.153 (this will point your custom domain to GitHub’s server over HTTPS)\n- In the CNAME row with Name “www” input your gh-pages website (username.github.io)\n- At the bottom click the “ADD” button and make 3 more Type “A” rows with the IP addresses of: 185.199.109.153, 185.199.110.153, 185.199.111.153\n\n![A records GitHub Pages](https:\u002F\u002Fhackernoon.com\u002Fhn-images\u002F1*oq7Vd8uwsQKLIu7S0zeW1Q.png)\n\n3. You can confirm that your DNS is set-up correctly by using the dig command in your terminal with your custom domain.\n\n```bash\n$ dig username.github.io +noall +answer\n\u003E username.github.io     3600    IN A     185.199.108.153\n\u003E username.github.io     3600    IN A     185.199.109.153\n\u003E username.github.io     3600    IN A     185.199.110.153\n\u003E username.github.io     3600    IN A     185.199.111.153\n```\n\n4. Optionally, to enable HTTPS encryption for your site, select Enforce HTTPS. It can take up to 24 hours before this option is available. For more information, see \"Securing your GitHub Pages site with HTTPS.\"\n\n![enforce-https-custom-domains](https:\u002F\u002Fhelp.github.com\u002Fassets\u002Fimages\u002Fhelp\u002Fpages\u002Fenforce-https-custom-domains.png)\n\n\u003E If you use a static site generator to build your site locally and push the generated files to GitHub, pull the commit that added the CNAME file to your local repository. For more information, see [Troubleshooting custom domains and GitHub Pages](https:\u002F\u002Fhelp.github.com\u002Fen\u002Farticles\u002Ftroubleshooting-custom-domains-and-github-pages#cname-errors)",shortDescription:aB,description:aB,slug:"github-page-en",createdAt:aC,updatedAt:"2020-09-29T20:58:35.831Z",__v:c,post:r,published_at:aC,id:aA}],id:r,path:"\u002Fblog\u002Fgithub\u002Fgithub-page"},{isPublished:q,isPin:ar,_id:k,slug:ax,name:as,publishedDate:aD,createdAt:at,updatedAt:aE,__v:c,author:{_id:g,name:Z,displayName:_,createdAt:l,updatedAt:$,__v:c,cover:{_id:m,name:aa,alternativeText:e,caption:e,hash:ab,ext:a,mime:b,size:ac,width:n,height:n,url:ad,formats:{thumbnail:{name:ae,hash:af,ext:a,mime:b,width:o,height:o,size:ag,path:d,url:ah},small:{name:ai,hash:aj,ext:a,mime:b,width:f,height:f,size:ak,path:d,url:al}},provider:i,related:[g],createdAt:am,updatedAt:an,__v:c,id:m},published_at:l,id:g},category:{position:s,_id:j,slug:w,name:ao,description:ap,createdAt:p,updatedAt:aq,__v:c,published_at:p,id:j},cover:{_id:h,name:x,alternativeText:e,caption:e,hash:y,ext:a,mime:b,size:z,width:A,height:f,url:B,formats:{thumbnail:{name:C,hash:D,ext:a,mime:b,width:E,height:F,size:G,path:d,url:H},medium:{name:I,hash:J,ext:a,mime:b,width:K,height:L,size:M,path:d,url:N},small:{name:O,hash:P,ext:a,mime:b,width:f,height:Q,size:R,path:d,url:S}},provider:i,related:[T,t,u,v,k,r,U,V],createdAt:W,updatedAt:X,__v:c,id:h},published_at:at,trans_posts:[{lang:Y,_id:au,name:as,content:aF,shortDescription:av,description:av,slug:aG,createdAt:aw,updatedAt:aH,__v:c,post:k,published_at:aw,id:au}],id:k,path:"\u002Fblog\u002Fgithub\u002Fchange-the-author-or-email-of-git-commit"},{isPublished:q,isPin:ar,_id:v,slug:"github-action-pull-and-push-external-private-repository",name:aI,publishedDate:"2020-10-01",createdAt:aJ,updatedAt:"2020-09-29T20:15:04.945Z",__v:c,author:{_id:g,name:Z,displayName:_,createdAt:l,updatedAt:$,__v:c,cover:{_id:m,name:aa,alternativeText:e,caption:e,hash:ab,ext:a,mime:b,size:ac,width:n,height:n,url:ad,formats:{thumbnail:{name:ae,hash:af,ext:a,mime:b,width:o,height:o,size:ag,path:d,url:ah},small:{name:ai,hash:aj,ext:a,mime:b,width:f,height:f,size:ak,path:d,url:al}},provider:i,related:[g],createdAt:am,updatedAt:an,__v:c,id:m},published_at:l,id:g},category:{position:s,_id:j,slug:w,name:ao,description:ap,createdAt:p,updatedAt:aq,__v:c,published_at:p,id:j},cover:{_id:h,name:x,alternativeText:e,caption:e,hash:y,ext:a,mime:b,size:z,width:A,height:f,url:B,formats:{thumbnail:{name:C,hash:D,ext:a,mime:b,width:E,height:F,size:G,path:d,url:H},medium:{name:I,hash:J,ext:a,mime:b,width:K,height:L,size:M,path:d,url:N},small:{name:O,hash:P,ext:a,mime:b,width:f,height:Q,size:R,path:d,url:S}},provider:i,related:[T,t,u,v,k,r,U,V],createdAt:W,updatedAt:X,__v:c,id:h},published_at:aJ,trans_posts:[{lang:Y,_id:aK,name:aI,content:"## Referents\n\n- [TP GitHub](https:\u002F\u002Ftampm.com\u002Fblog\u002Fgithub)\n- For checkout\u002Fclone repo: [actions\u002Fcheckout](https:\u002F\u002Fgithub.com\u002Factions\u002Fcheckout)\n- For push repo [peaceiris\u002Factions-gh-pages](https:\u002F\u002Fgithub.com\u002Fpeaceiris\u002Factions-gh-pages)\n\n## Full github workflow\n\n```yml\nname: Deploy GitPage\n\non:\n  push:\n    branches: [ master ]\n  pull_request:\n    branches: [ master ]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [12.x]\n    steps:\n    - name: Checkout main repo 🛎️\n      uses: actions\u002Fcheckout@v2\n    - name: Checkout external repo 🛎️\n      uses: actions\u002Fcheckout@v2\n      with:\n        repository: other-org\u002Fother-repo-clone\n        token: ${{ secrets.PERSONAL_TOKEN }} # permission to access to external repositories\n        path: other-repo\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions\u002Fsetup-node@v1\n      with:\n        node-version: ${{ matrix.node-version }}\n    - name: install dependencies\n      run: yarn\n    - name: build...\n      run: yarn build\n    - name: Deploy 🚀\n      uses: peaceiris\u002Factions-gh-pages@v3\n      with:\n        personal_token: ${{ secrets.PERSONAL_TOKEN }} # permission to access to external repositories\n        external_repository: other-org\u002Fother-repo-deploy\n        publish_branch: master # A target branch to deploy\n        publish_dir: .\u002Fdist # A target directory to deploy\n```\n\n## Explaining example\n\n`name: Deploy GitPage`: descriptive workflow name\n\n`on`: setup GitHub event that triggers the workflow.\n\n`jobs:`: define jobs run when Github event is happened (Here example is you `push` or pull `request`)\n\n`jobs.deploy`: `deploy` is job id\n\n`runs-on: ubuntu-latest`: the type of machine to run the job on.\n\n`steps`: a job contains a sequence of tasks called steps.\n\n`Checkout`: Clone repo ([doc](https:\u002F\u002Fgithub.com\u002Factions\u002Fcheckout))\n\n- Checkout current repo\n\n```yml\n- name: Checkout main repo 🛎️\n  uses: actions\u002Fcheckout@v2\n```\n\n- Checkout external repo\n\n```yml\n- name: Checkout external repo 🛎️\n  uses: actions\u002Fcheckout@v2\n  with:\n    repository: other-org\u002Fother-repo-clone\n    token: ${{ secrets.PERSONAL_TOKEN }} # permission to access to external repositories\n    path: other-repo\n```\n\n`Runs command-line` programs using the operating system's shell. (Example here is install dependencies and build by yarn)\n\n```yml\n- name: install dependencies\n  run: yarn\n- name: build...\n  run: yarn build\n```\n\n`Deploy`: push external repo ([doc](https:\u002F\u002Fgithub.com\u002Fpeaceiris\u002Factions-gh-pages))\n\n```yml\n- name: Deploy 🚀\n  uses: peaceiris\u002Factions-gh-pages@v3\n  with:\n    personal_token: ${{ secrets.PERSONAL_TOKEN }} # permission to access to external repositories\n    external_repository: other-org\u002Fother-repo-deploy\n    publish_branch: master # A target branch to deploy\n    publish_dir: .\u002Fdist # A target directory to deploy\n```\n\n`PERSONAL_TOKEN`: you need permission to pull\u002Fpush other repo\n\n- Generate a personal access token ([here](https:\u002F\u002Fgithub.com\u002Fsettings\u002Ftokens)).\n- Add it to Secrets as `PERSONAL_TOKEN`\n\n```txt\n1. On GitHub, navigate to the main page of the repository.\n2. Under your repository name, click  Settings.\n3. In the left sidebar, click Secrets.\n4. Type a name for your secret in the `PERSONAL_TOKEN` input box.\n5. Type the value for your secret.\n6. Click Add secret.\n```\n",slug:"github-action-pull-and-push-external-private-repository-en",createdAt:aL,updatedAt:"2020-09-29T20:19:07.433Z",__v:c,post:v,description:aM,shortDescription:aM,published_at:aL,id:aK}],id:v,path:"\u002Fblog\u002Fgithub\u002Fgithub-action-pull-and-push-external-private-repository"},{isPublished:q,isPin:q,_id:u,slug:"github-action",name:aN,publishedDate:"2020-09-29",createdAt:aO,updatedAt:"2020-09-29T20:01:16.590Z",__v:c,author:{_id:g,name:Z,displayName:_,createdAt:l,updatedAt:$,__v:c,cover:{_id:m,name:aa,alternativeText:e,caption:e,hash:ab,ext:a,mime:b,size:ac,width:n,height:n,url:ad,formats:{thumbnail:{name:ae,hash:af,ext:a,mime:b,width:o,height:o,size:ag,path:d,url:ah},small:{name:ai,hash:aj,ext:a,mime:b,width:f,height:f,size:ak,path:d,url:al}},provider:i,related:[g],createdAt:am,updatedAt:an,__v:c,id:m},published_at:l,id:g},category:{position:s,_id:j,slug:w,name:ao,description:ap,createdAt:p,updatedAt:aq,__v:c,published_at:p,id:j},cover:{_id:h,name:x,alternativeText:e,caption:e,hash:y,ext:a,mime:b,size:z,width:A,height:f,url:B,formats:{thumbnail:{name:C,hash:D,ext:a,mime:b,width:E,height:F,size:G,path:d,url:H},medium:{name:I,hash:J,ext:a,mime:b,width:K,height:L,size:M,path:d,url:N},small:{name:O,hash:P,ext:a,mime:b,width:f,height:Q,size:R,path:d,url:S}},provider:i,related:[T,t,u,v,k,r,U,V],createdAt:W,updatedAt:X,__v:c,id:h},published_at:aO,trans_posts:[{lang:Y,_id:aP,name:aN,description:"GitHub Actions enables you to create custom software development life cycle (SDLC) workflows directly in your GitHub repository. Workflows run in Linux, macOS, Windows, and containers on GitHub-hosted machines, called 'runners'. Alternatively, you can also host your own runners to run workflows on machines you own or manage.",shortDescription:"GitHub Actions enables you to create custom software development life cycle (SDLC) workflows directly in your GitHub repository",content:"## Referents\n\n- [TP GitHub](https:\u002F\u002Ftampm.com\u002Fblog\u002Fgithub)\n- [Github Actions](https:\u002F\u002Fhelp.github.com\u002Fen\u002Factions)\n- [workflow-syntax-for-github-actions](https:\u002F\u002Fhelp.github.com\u002Fen\u002Factions\u002Freference\u002Fworkflow-syntax-for-github-actions)\n\n## Introduction\n\n- GitHub Actions enables you to create custom software development life cycle (SDLC) workflows directly in your GitHub repository.\n- Workflows run in Linux, macOS, Windows, and containers on GitHub-hosted machines, called 'runners'. Alternatively, you can also host your own runners to run workflows on machines you own or manage. For more information see, [\"About self-hosted runners.\"](https:\u002F\u002Fhelp.github.com\u002Fen\u002Factions\u002Fautomating-your-workflow-with-github-actions\u002Fabout-self-hosted-runners)\n\n\u003E [Full document](https:\u002F\u002Fhelp.github.com\u002Fen\u002Factions)\n\n## Using\n\n### Starting with preconfigured `workflow templates`\n\nIf you haven't already added a workflow to your repository, you'll see a list of workflow templates to choose from.\n\n1. On GitHub, navigate to the main page of the repository.\n2. Under your repository name, click Actions.\n3. Under the name of the template you'd like to use, click Set up this workflow.\n\n\u003E Full [automation templates](https:\u002F\u002Fgithub.com\u002Factions\u002Fstarter-workflows\u002Ftree\u002Fmaster\u002Fci)\n\n#### Browsing actions in the workflow editor\n\n1. In your repository, browse to the workflow file you want to edit.\n2. In the upper right corner of the file view, to open the workflow editor, click `pencil icon`.\n3. To the right of the editor, use the GitHub Marketplace sidebar to browse actions.\n4. You can find the same actions on search box.\n5. Under \"Installation\", click `copy icon` to copy the workflow syntax.\n6. Paste the syntax as a new step in your workflow.\n\n\u003E If the action requires you to provide variables, set them in your workflow. For information on what variables an action might require, see the action's full listing in the GitHub Marketplace.\n\n### Not use `workflow templates`\n\nAt a high level, these are the steps to add a workflow file. You can find specific configuration examples in the sections that follow.\n\n1. At the root of your repository, create a directory named .github\u002Fworkflows to store your workflow files.\n2. In .github\u002Fworkflows, add a .yml or .yaml file for your workflow. For example, .github\u002Fworkflows\u002Fcontinuous-integration-workflow.yml.\n3. Use the \"Workflow syntax for GitHub Actions\" reference documentation to choose events to trigger an action, add actions, and customize your workflow.\n4. Commit your changes in the workflow file to the branch where you want your workflow to run.\n\nWorkflow file example\n\n```yml\nname: Greet Everyone\n# This workflow is triggered on pushes to the repository.\non: [push]\n\njobs:\n  build:\n    # Job name is Greeting\n    name: Greeting\n    # This job runs on Linux\n    runs-on: ubuntu-latest\n    steps:\n      # This step uses GitHub's hello-world-javascript-action: https:\u002F\u002Fgithub.com\u002Factions\u002Fhello-world-javascript-action\n      - name: Hello world\n        uses: actions\u002Fhello-world-javascript-action@v1\n        with:\n          who-to-greet: 'Mona the Octocat'\n        id: hello\n      # This step prints an output (time) from the previous step's action.\n      - name: Echo the greeting's time\n        run: echo 'The time was ${{ steps.hello.outputs.time }}.'\n```\n\n## Workflow syntax for GitHub Actions\n\nWorkflow files use YAML syntax, and must have either a .yml or .yaml file extension\n\n### `name`\n\nThe name of your workflow. GitHub displays the names of your workflows on your repository's actions page. If you omit name, GitHub sets it to the workflow file path relative to the root of the repository.\n\n### `on`\n\nRequired The name of the GitHub event that triggers the workflow. You can provide a single event string, array of events, array of event types, or an event configuration map that schedules a workflow or restricts the execution of a workflow to specific files, tags, or branch changes. For a list of available events, see [\"Events that trigger workflows.\"](https:\u002F\u002Fhelp.github.com\u002Fen\u002Farticles\u002Fevents-that-trigger-workflows)\n\n### `env`\n\nA map of environment variables that are available to all jobs and steps in the workflow. You can also set environment variables that are only available to a job or step.\n\n### `job`\n\nA workflow run is made up of one or more jobs. Jobs run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the jobs.\u003Cjob_id\u003E.needs keyword.\n\n### `jobs.\u003Cjob_id\u003E`\n\nEach job must have an id to associate with the job. The key job_id is a string and its value is a map of the job's configuration data. You must replace \u003Cjob_id\u003E with a string that is unique to the jobs object. The \u003Cjob_id\u003E must start with a letter or _ and contain only alphanumeric characters, -, or _.\n\n### `jobs.\u003Cjob_id\u003E.name`\n\nThe name of the job displayed on GitHub.\n\n### `jobs.\u003Cjob_id\u003E.needs`\n\nIdentifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it are skipped unless the jobs use a conditional statement that causes the job to continue.\n\n### `jobs.\u003Cjob_id\u003E.runs-on`\n\nRequired The type of machine to run the job on. The machine can be either a GitHub-hosted runner, or a self-hosted runner.\n\n- YAML workflow label\n\n```yml\nWindows Server 2019: `windows-latest` or `windows-2019`\nUbuntu 18.04: `ubuntu-latest` or `ubuntu-18.04`\nUbuntu 16.04: `ubuntu-16.04`\nmacOS Catalina 10.15: `macos-latest` or `macos-10.15`\n```\n\n### `jobs.\u003Cjob_id\u003E.strategy`\n\nA strategy creates a build matrix for your jobs. You can define different variations of an environment to run each job in.\n\n### `jobs.\u003Cjob_id\u003E.strategy.matrix`\n\nYou can define a matrix of different job configurations. A matrix allows you to create multiple jobs by performing variable substitution in a single job definition.\n\nExample\n\n```yml\nstrategy:\n  matrix:\n    node: [6, 8, 10]\nsteps:\n  # Configures the node version used on GitHub-hosted runners\n  - uses: actions\u002Fsetup-node@v1\n    with:\n      # The Node.js version to configure\n      node-version: ${{ matrix.node }}\n```\n\n### `jobs.\u003Cjob_id\u003E.env`\n\nA map of environment variables that are available to all steps in the job.\n\n### `jobs.\u003Cjob_id\u003E.steps`\n\nA job contains a sequence of tasks called steps. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. GitHub provides built-in steps to set up and complete a job.\n\n### `jobs.\u003Cjob_id\u003E.steps.id`\n\nA unique identifier for the step. You can use the id to reference the step in contexts.\n\n### `jobs.\u003Cjob_id\u003E.steps.name`\n\nA name for your step to display on GitHub.\n\n### `jobs.\u003Cjob_id\u003E.steps.uses`\n\nSelects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a published Docker container image.\n\nExample\n\n```yml\nsteps:\n  - name: My first step\n  # Uses the master branch of a public repository\n    uses: actions\u002Fheroku@master\n  # use a specific version tag of a public repository\n  - name: My second step\n    uses: actions\u002Faws@v2.0.1\n  # The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.\n  - name: Check out repository\n    uses: actions\u002Fcheckout@v2\n  - name: Use local my-action\n    uses: .\u002F.github\u002Factions\u002Fmy-action\n```\n\n[More information](https:\u002F\u002Fhelp.github.com\u002Fen\u002Factions\u002Freference\u002Fworkflow-syntax-for-github-actions#jobsjob_idstepsuses)\n\n### `jobs.\u003Cjob_id\u003E.steps.run`\n\nRuns command-line programs using the operating system's shell. If you do not provide a name, the step name will default to the text specified in the `run` command.\n\nExample\n\n```yml\nsteps:\n  # A single-line command\n  - name: Install Dependencies\n    run: npm install\n  # A multi-line command\n  - name: Clean install dependencies and build\n    run: |\n      npm ci\n      npm run build\n  # Using the `working-directory` keyword, you can specify the working directory of where to run the command.\n  - name: Clean temp directory\n    run: rm -rf *\n    working-directory: .\u002Ftemp\n```\n\n[More information](https:\u002F\u002Fhelp.github.com\u002Fen\u002Factions\u002Freference\u002Fworkflow-syntax-for-github-actions#jobsjob_idstepsrun)\n\n### `jobs.\u003Cjob_id\u003E.steps.with`\n\nA map of the input parameters defined by the action. Each input parameter is a key\u002Fvalue pair. Input parameters are set as environment variables. The variable is prefixed with INPUT_ and converted to upper case.\n\nExample\n\nDefines the three input parameters (first_name, middle_name, and last_name) defined by the hello_world action. These input variables will be accessible to the hello-world action as INPUT_FIRST_NAME, INPUT_MIDDLE_NAME, and INPUT_LAST_NAME environment variables.\n\n```yml\njobs:\n  my_first_job:\n    steps:\n      - name: My first step\n        uses: actions\u002Fhello_world@master\n        with:\n          first_name: Mona\n          middle_name: The\n          last_name: Octocat\n```\n\n### `jobs.\u003Cjob_id\u003E.steps.env`\n\nSets environment variables for steps to use in the runner environment. You can also set environment variables for the entire workflow or a job.\n\n## Using actions from GitHub Marketplace\n\nYou can discover new actions from the workflow editor on GitHub, and from the [GitHub Marketplace page](https:\u002F\u002Fgithub.com\u002Fmarketplace\u002Factions\u002F).\n",slug:"github-action-en",createdAt:aQ,updatedAt:"2020-09-29T20:16:47.025Z",__v:c,post:u,published_at:aQ,id:aP}],id:u,path:"\u002Fblog\u002Fgithub\u002Fgithub-action"},{isPublished:q,isPin:q,_id:t,slug:"github-starter",name:aR,publishedDate:"2020-09-01",createdAt:aS,updatedAt:"2020-09-29T16:57:24.568Z",__v:c,author:{_id:g,name:Z,displayName:_,createdAt:l,updatedAt:$,__v:c,cover:{_id:m,name:aa,alternativeText:e,caption:e,hash:ab,ext:a,mime:b,size:ac,width:n,height:n,url:ad,formats:{thumbnail:{name:ae,hash:af,ext:a,mime:b,width:o,height:o,size:ag,path:d,url:ah},small:{name:ai,hash:aj,ext:a,mime:b,width:f,height:f,size:ak,path:d,url:al}},provider:i,related:[g],createdAt:am,updatedAt:an,__v:c,id:m},published_at:l,id:g},category:{position:s,_id:j,slug:w,name:ao,description:ap,createdAt:p,updatedAt:aq,__v:c,published_at:p,id:j},cover:{_id:h,name:x,alternativeText:e,caption:e,hash:y,ext:a,mime:b,size:z,width:A,height:f,url:B,formats:{thumbnail:{name:C,hash:D,ext:a,mime:b,width:E,height:F,size:G,path:d,url:H},medium:{name:I,hash:J,ext:a,mime:b,width:K,height:L,size:M,path:d,url:N},small:{name:O,hash:P,ext:a,mime:b,width:f,height:Q,size:R,path:d,url:S}},provider:i,related:[T,t,u,v,k,r,U,V],createdAt:W,updatedAt:X,__v:c,id:h},published_at:aS,trans_posts:[{lang:Y,_id:aT,name:aR,shortDescription:aU,description:aU,slug:"github-starter-en",createdAt:aV,updatedAt:"2020-09-29T18:08:21.293Z",__v:c,post:t,content:"\u003E At the heart of GitHub is an open source version control system (VCS) called Git. Git is responsible for everything GitHub-related that happens locally on your computer.\n\n## Referents\n\n- [Github quickstart](https:\u002F\u002Fdocs.github.com\u002Fen\u002Ffree-pro-team@latest\u002Fgithub\u002Fgetting-started-with-github\u002Fquickstart)\n\n## Signing up for a new GitHub account\n\n- Go to [GitHub's Pricing page](https:\u002F\u002Fgithub.com\u002Fpricing).\n- Read the information about the different products and subscriptions that GitHub offers, then click the upgrade button under the subscription you'd like to choose.\n- Follow the prompts to create your personal account or organization.\n\n## Setting up Git\n\n- [Download and install the latest version of Git.](https:\u002F\u002Fgit-scm.com\u002Fdownloads)\n- [Set your username in Git.](https:\u002F\u002Fdocs.github.com\u002Fen\u002Ffree-pro-team@latest\u002Farticles\u002Fsetting-your-username-in-git)\n- [Set your commit email address in Git.](https:\u002F\u002Fdocs.github.com\u002Fen\u002Ffree-pro-team@latest\u002Farticles\u002Fsetting-your-commit-email-address)",published_at:aV,id:aT}],id:t,path:"\u002Fblog\u002Fgithub\u002Fgithub-starter"}]}},{cate:w,slug:ax,page:{lang:Y,_id:au,name:as,content:aF,shortDescription:av,description:av,slug:aG,createdAt:aw,updatedAt:aH,__v:c,post:{isPublished:q,isPin:ar,_id:k,slug:ax,name:as,publishedDate:aD,createdAt:at,updatedAt:aE,__v:c,author:g,category:j,cover:aW,published_at:at,id:k},published_at:aw,id:au,html:"\u003Ch2 id=\"Referents\"\u003EReferents\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Ftampm.com\u002Fblog\u002Fgithub\"\u003ETP GitHub\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"What-is-this\"\u003EWhat is this\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002F\"\u003EGit\u003C\u002Fa\u003E is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"My-issue\"\u003EMy issue\u003C\u002Fh2\u003E\n\u003Cp\u003EI was writing a some repository when I was working in my old company, and committing the changes to Git with company's email. After I quit my job, I want change \u003Cstrong\u003Eauthor infomations\u003C\u002Fstrong\u003E of git old commits. How can I do it?\u003C\u002Fp\u003E\n\u003Ch2 id=\"My-solution\"\u003EMy solution\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003EOpen terminal\u003C\u002Fli\u003E\n\u003Cli\u003EChange dir to you repository\u003C\u002Fli\u003E\n\u003Cli\u003ECopy below script to a text editor and \u003Cstrong\u003Echange\u003C\u002Fstrong\u003E variables (OLD_EMAIL, NEW_NAME, NEW_EMAIL) with your new informations\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cpre class=\"nuxt-content-highlight hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-meta\"\u003E#!\u002Fbin\u002Fsh\u003C\u002Fspan\u003E\n\ngit filter-branch --env-filter \u003Cspan class=\"hljs-string\"\u003E&#x27;\n\nOLD_EMAIL=&quot;your-old-email@example.com&quot;\nNEW_NAME=&quot;Your Correct Name&quot;\nNEW_EMAIL=&quot;your-correct-email@example.com&quot;\n\nif [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]\nthen\n    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;\n    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;\nfi\nif [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]\nthen\n    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;\n    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;\nfi\n&#x27;\u003C\u002Fspan\u003E --tag-name-filter cat -- --branches --tags\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col start=\"4\"\u003E\n\u003Cli\u003ECopy the text after edit to terminal\u003C\u002Fli\u003E\n\u003Cli\u003EPress \u003Cstrong\u003EEnter\u003C\u002Fstrong\u003E to run the script\u003C\u002Fli\u003E\n\u003Cli\u003EReview the new Git history for errors.\u003C\u002Fli\u003E\n\u003Cli\u003EPush the corrected history to Git\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cpre class=\"nuxt-content-highlight hljs\"\u003E\u003Ccode\u003Egit push --force --tags origin \u003Cspan class=\"hljs-string\"\u003E&#x27;refs\u002Fheads\u002F*&#x27;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",toc:[{id:aX,depth:s,text:aX},{id:"What-is-this",depth:s,text:"What is this"},{id:"My-issue",depth:s,text:"My issue"},{id:"My-solution",depth:s,text:"My solution"}],langFallback:ar},cover:aW}],fetch:[],mutations:[]}}(".jpg","image\u002Fjpeg",0,null,"",500,"5f6a400fcc83ce0b0400810e","5f6b751a4a83ec1e8be4c135","aws-s3","5f6a3defcc83ce0b0400810c","5f739ec40050ab1560f47274","2020-09-22T18:18:55.730Z","5f6a400bcc83ce0b0400810d",600,156,"2020-09-22T18:09:51.879Z",true,"5f739f4d0050ab1560f47277",2,"5f6b378cc065060f7779c838","5f6b63430e35901435e1968d","5f7395c80050ab1560f47271","github","thumb-blog.jpg","thumb_blog_91373f41ff",116.31,1000,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumb_blog_91373f41ff.jpg","thumbnail_thumb-blog.jpg","thumbnail_thumb_blog_91373f41ff",245,123,9.4,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumbnail_thumb_blog_91373f41ff.jpg","medium_thumb-blog.jpg","medium_thumb_blog_91373f41ff",750,375,68.23,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fmedium_thumb_blog_91373f41ff.jpg","small_thumb-blog.jpg","small_thumb_blog_91373f41ff",250,33.62,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fsmall_thumb_blog_91373f41ff.jpg","5f6b3771c065060f7779c837","5f73a1020050ab1560f4727a","5f747640f6957a0acfcf1f29","2020-09-23T16:17:30.161Z","2020-11-02T18:06:07.852Z","en","tampm","Tam Phan","2020-09-22T18:18:55.815Z","tp-600.jpg","tp_600_736fcf4df9",14.12,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Ftp_600_736fcf4df9.jpg","thumbnail_tp-600.jpg","thumbnail_tp_600_736fcf4df9",3.55,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumbnail_tp_600_736fcf4df9.jpg","small_tp-600.jpg","small_tp_600_736fcf4df9",11.89,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fsmall_tp_600_736fcf4df9.jpg","2020-09-22T18:18:51.943Z","2020-09-22T18:18:55.778Z","Github","GitHub brings together the world's largest community of developers to discover, share, and build better software.","2020-09-29T16:57:24.598Z",false,"Change the author or email of git commit","2020-09-29T20:53:24.021Z","5f739f190050ab1560f47276","How can I change the author or email of git commit?","2020-09-29T20:54:49.056Z","change-the-author-or-email-of-git-commit","Github Page","2020-09-29T20:55:41.290Z","5f739fd50050ab1560f47279","How custom domain with GitHub Pages?","2020-09-29T20:57:57.519Z","2020-10-02","2020-09-29T20:53:24.134Z","## Referents\n\n- [TP GitHub](https:\u002F\u002Ftampm.com\u002Fblog\u002Fgithub)\n\n## What is this\n\n- [Git](https:\u002F\u002Fgit-scm.com\u002F) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.\n\n## My issue\n\nI was writing a some repository when I was working in my old company, and committing the changes to Git with company's email. After I quit my job, I want change **author infomations** of git old commits. How can I do it?\n\n## My solution\n\n1. Open terminal\n2. Change dir to you repository\n3. Copy below script to a text editor and **change** variables (OLD_EMAIL, NEW_NAME, NEW_EMAIL) with your new informations\n\n```bash\n#!\u002Fbin\u002Fsh\n\ngit filter-branch --env-filter '\n\nOLD_EMAIL=\"your-old-email@example.com\"\nNEW_NAME=\"Your Correct Name\"\nNEW_EMAIL=\"your-correct-email@example.com\"\n\nif [ \"$GIT_COMMITTER_EMAIL\" = \"$OLD_EMAIL\" ]\nthen\n    export GIT_COMMITTER_NAME=\"$CORRECT_NAME\"\n    export GIT_COMMITTER_EMAIL=\"$CORRECT_EMAIL\"\nfi\nif [ \"$GIT_AUTHOR_EMAIL\" = \"$OLD_EMAIL\" ]\nthen\n    export GIT_AUTHOR_NAME=\"$CORRECT_NAME\"\n    export GIT_AUTHOR_EMAIL=\"$CORRECT_EMAIL\"\nfi\n' --tag-name-filter cat -- --branches --tags\n```\n\n4. Copy the text after edit to terminal\n5. Press **Enter** to run the script\n6. Review the new Git history for errors.\n7. Push the corrected history to Git\n\n```bash\ngit push --force --tags origin 'refs\u002Fheads\u002F*'\n```\n","change-the-author-or-email-of-git-commit-en","2020-09-29T20:54:49.312Z","Github Action pull and push external private repository","2020-09-29T20:15:04.838Z","5f7396260050ab1560f47273","2020-09-29T20:16:38.706Z","How to pull and push external private repository with Github-Action","Github Action","2020-09-23T15:01:23.509Z","5f7392490050ab1560f47270","2020-09-29T20:00:09.531Z","Github starter","2020-09-23T11:54:52.392Z","5f6b37fcc065060f7779c83a","At a high level, GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code","2020-09-23T11:56:44.167Z",{},"Referents")));