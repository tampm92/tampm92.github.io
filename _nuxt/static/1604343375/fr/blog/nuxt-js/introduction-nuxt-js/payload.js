__NUXT_JSONP__("/fr/blog/nuxt-js/introduction-nuxt-js", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO){aL._id=j;aL.name=v;aL.alternativeText=e;aL.caption=e;aL.hash=w;aL.ext=a;aL.mime=b;aL.size=x;aL.width=y;aL.height=f;aL.url=z;aL.formats={thumbnail:{name:A,hash:B,ext:a,mime:b,width:C,height:D,size:E,path:d,url:F},medium:{name:G,hash:H,ext:a,mime:b,width:I,height:J,size:K,path:d,url:L},small:{name:M,hash:N,ext:a,mime:b,width:f,height:O,size:P,path:d,url:Q}};aL.provider=l;aL.related=[h,R,S,T,U,V,n,W,k];aL.createdAt=X;aL.updatedAt=Y;aL.__v=c;aL.id=j;return {data:[{links:{recent_posts:[{isPublished:i,isPin:i,_id:k,name:az,slug:"nuxt-js-pwa",publishedDate:"2020-11-02",published_at:"2020-11-02T18:43:05.845Z",createdAt:"2020-11-02T18:39:05.489Z",updatedAt:"2020-11-02T18:43:06.162Z",__v:c,author:{_id:g,name:ac,displayName:ad,createdAt:o,updatedAt:ae,__v:c,cover:{_id:p,name:af,alternativeText:e,caption:e,hash:ag,ext:a,mime:b,size:ah,width:q,height:q,url:ai,formats:{thumbnail:{name:aj,hash:ak,ext:a,mime:b,width:r,height:r,size:al,path:d,url:am},small:{name:an,hash:ao,ext:a,mime:b,width:f,height:f,size:ap,path:d,url:aq}},provider:l,related:[g],createdAt:ar,updatedAt:as,__v:c,id:p},published_at:o,id:g},category:{position:at,_id:m,slug:u,name:au,description:t,createdAt:s,updatedAt:av,__v:c,published_at:s,id:m},cover:{_id:j,name:v,alternativeText:e,caption:e,hash:w,ext:a,mime:b,size:x,width:y,height:f,url:z,formats:{thumbnail:{name:A,hash:B,ext:a,mime:b,width:C,height:D,size:E,path:d,url:F},medium:{name:G,hash:H,ext:a,mime:b,width:I,height:J,size:K,path:d,url:L},small:{name:M,hash:N,ext:a,mime:b,width:f,height:O,size:P,path:d,url:Q}},provider:l,related:[h,R,S,T,U,V,n,W,k],createdAt:X,updatedAt:Y,__v:c,id:j},trans_posts:[{lang:Z,_id:aA,name:az,content:"## What is this\n\nProgressive Web Apps (PWA) are reliable, fast, and engaging, although there are many things that can take a PWA from a baseline to exemplary experience.\n\n## How setup with NuxtJS\n\n\u003E We will use [Nuxt PWA](https:\u002F\u002Fpwa.nuxtjs.org\u002F)\n\nInstall lib:\n\n```js\nyarn add @nuxtjs\u002Fpwa \u002F\u002For npm i @nuxtjs\u002Fpwa\n```\n\nUpdate your `nuxt.config.js` file:\n\n```ts\n{\n    modules: [\n        '@nuxtjs\u002Fpwa',\n    ],\n    pwa: {\n        manifest: {\n            name: 'TP-Demo Nuxt',\n            short_name: 'TP',\n            lang: 'en',\n            description: 'TP-Demo Nuxt',\n            theme_color: '#00C58E',\n            background_color: '#000',\n            ogImage: `https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F48992121062_769c357412_o.png`\n        },\n    }\n}\n```\n\nEnsure `static` dir exists and optionally create `static\u002Ficon.png`.\n\n\u003E Recommended to be square png and \u003E= `512x512px`\n\nAdd this to `.gitignore`:\n\n```bash\nsw.*\n```\n\nPWA module is a collection of smaller modules that are designed to magically work out of the box together\n\n- [**Workbox**](https:\u002F\u002Fpwa.nuxtjs.org\u002Fmodules\u002Fworkbox.html) - Registers a service worker for offline caching.\n- [**Manifest**](https:\u002F\u002Fpwa.nuxtjs.org\u002Fmodules\u002Fmanifest.html) - Automatically generate `manifest.json` file.\n- [**Meta**](https:\u002F\u002Fpwa.nuxtjs.org\u002Fmodules\u002Fmeta.html) - Automatically adds SEO friendly meta data with manifest integration.\n- [**Icon**](https:\u002F\u002Fpwa.nuxtjs.org\u002Fmodules\u002Ficon.html) - Automatically generates app icons with different sizes.\n- [**OneSignal**](https:\u002F\u002Fpwa.nuxtjs.org\u002Fmodules\u002Fonesignal.html) - Free background push notifications using OneSignal.\n\n## Splash Screens\n\nAssuming a user installed your PWA on their home screen, the default behaviour is to show a white screen until the PWA is ready. This doesn’t feel very nice for the user and adding a custom splash screen makes your PWA feel more like a native app.\n\nChrome for Android automatically shows your custom splash screen so long as you meet the following requirements in your web app manifest:\n\n- The name property is set to the name of your PWA.\n- The background_color property is set to a valid CSS color value.\n- The icons array specifies an icon that is at least 512px by 512px.\n- The icon exists and is a PNG.\n\nOn Android this works ok, however, iOS does not support a similar method of automatically showing a splash screen. Instead you need to provide splash screens tailored for each iOS device using the `\u003Clink rel=\"apple-touch-startup-image\" \u002F\u003E` HTML meta tag.\n\niOS will display those screens when your PWA is being opened as well as when it's in the background.\n\nYou need to create a splash screen image for each and every resolution on [Apple’s Launch Screen Guidelines](https:\u002F\u002Fdeveloper.apple.com\u002Fdesign\u002Fhuman-interface-guidelines\u002Fios\u002Ficons-and-images\u002Flaunch-screen\u002F#static-launch-screen-images-not-recommended) and add an HTML tag with media attribute for each device resolution and orientation 🙀! Unfortunately, this requirement is not documented on [Safari Web Content Guide](https:\u002F\u002Fdeveloper.apple.com\u002Flibrary\u002Farchive\u002Fdocumentation\u002FAppleApplications\u002FReference\u002FSafariWebContent\u002FConfiguringWebApplications\u002FConfiguringWebApplications.html) sufficiently.\n\nExample link tag for just one resolution & orientation pair\n\n```html\n\u003Clink rel=\"apple-touch-startup-image\" href=\"\u002Fsplash\u002Fapple-splash-2048-2732.png\"\nmedia=\"(device-width: 1024px) and (device-height: 1366px)\nand (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\u003E\n```\n\n\u003E 💡 Creating icon and splash screen images for all the platforms, maintaining sizes and quality for all and adding HTML tags for each image can be overwhelming. So, why not automate it? 🤖 =\u003E We will use [pwa-asset-generator](https:\u002F\u002Fgithub.com\u002Fonderceylan\u002Fpwa-asset-generator).\n\n### PWA asset generator\n\n1. Feature\n\n- Generates both icons and splash screens with optional --icon-only --splash-only --landscape-only and --portrait-only flags ✨\n- Updates your manifest.json and index.html files automatically for declaring generated image assets 🙌\n\n2. Install\n\n```bash\nnpm install --global pwa-asset-generator\n```\n\n3. Using\n- On terminal go to folder include icon\n- Create `.\u002Fsrc\u002Findex.html` file\n- Create `.\u002Fsrc\u002Fmainfest.json` file with content\n\n```bash\n{\n  \"name\": \"My Progressive Web Application\",\n  \"short_name\": \"Progressive\",\n  \"start_url\": \"\u002F?home=true\",\n  \"icons\": [\n  ],\n  \"theme_color\": \"#000000\",\n  \"background_color\": \"#FFFFFF\",\n  \"display\": \"fullscreen\",\n  \"orientation\": \"portrait\"\n}\n```\n\n- Run command to generate pwa asset\n\n```bash\npwa-asset-generator  .\u002Ficon.png --background \"#ffffff\"\n--scrape false -i .\u002Fsrc\u002Findex.html -m .\u002Fsrc\u002Fmanifest.json\n```\n\n\u003E More options [here](https:\u002F\u002Fgithub.com\u002Fonderceylan\u002Fpwa-asset-generator#usage).\n\n\u003Cdiv class=\"Alert Alert--orange\"\u003E\n\u003Cb\u003EWarning:\u003C\u002Fb\u003E On my laptop (Macbook pro) with NodeJS v12, I can't run `pwa-asset-generator` command. Instead I use below command:\n\n```bash\n\u002Fusr\u002Flocal\u002FCellar\u002Fnode\u002F12.10.0\u002Fbin\u002Fpwa-asset-generator .\u002Ficon.png\n--background \"#ffffff\" --scrape false -i .\u002Fsrc\u002Findex.html -m .\u002Fsrc\u002Fmanifest.json\n```\n\n\u003C\u002Fdiv\u003E\n\n- Now you can use `images generated` to copy to `static folder` of project\n- And you will use content in `src\u002Findex.html` and `src\u002Fmanifest.json` to update your `nuxt.config.js` file\n\nExample\n\n```ts\nmeta: [\n    { name: 'mobile-web-app-capable', content: 'yes' },\n    { name: 'apple-touch-fullscreen', content: 'yes' },\n    { name: 'apple-mobile-web-app-capable', content: 'yes' },\n    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }\n],\nlink: [\n    { rel: 'icon', type: 'image\u002Fx-icon', href: '\u002Ffavicon.ico' },\n    \u002F\u002F apple\n    { rel:'apple-touch-icon', sizes:'180x180', href:'\u002Ficons\u002Fapple-icon-180.png' },\n    { rel:'apple-touch-icon', sizes:'167x167', href:'\u002Ficons\u002Fapple-icon-167.png' },\n    { rel:'apple-touch-icon', sizes:'152x152', href:'\u002Ficons\u002Fapple-icon-152.png' },\n    { rel:'apple-touch-icon', sizes:'120x120', href:'\u002Ficons\u002Fapple-icon-120.png' },\n    {\n    rel:'apple-touch-startup-image', href:'\u002Fsplash\u002Fapple-splash-2048-2732.png',\n    media:'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'\n    },\n    ...\n    {\n    rel:'apple-touch-startup-image', href:'\u002Fsplash\u002Fapple-splash-1136-640.png',\n    media:'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'\n    },\n]\n```\n",shortDescription:"Nuxt PWA (Progressive Web Apps), Splash Screens, PWA asset generator.",description:"Nuxt PWA (Progressive Web Apps), Splash Screens, PWA asset generator",published_at:"2020-11-02T18:43:36.581Z",slug:"nuxt-js-pwa-en",createdAt:"2020-11-02T18:43:13.566Z",updatedAt:"2020-11-02T18:53:03.396Z",__v:c,post:k,id:aA}],id:k,path:"\u002Fblog\u002Fnuxt-js\u002Fnuxt-js-pwa"},{isPublished:i,isPin:false,_id:n,slug:"nuxt-js-basic-setup",name:aB,publishedDate:"2020-10-05",createdAt:aC,updatedAt:aw,__v:c,author:{_id:g,name:ac,displayName:ad,createdAt:o,updatedAt:ae,__v:c,cover:{_id:p,name:af,alternativeText:e,caption:e,hash:ag,ext:a,mime:b,size:ah,width:q,height:q,url:ai,formats:{thumbnail:{name:aj,hash:ak,ext:a,mime:b,width:r,height:r,size:al,path:d,url:am},small:{name:an,hash:ao,ext:a,mime:b,width:f,height:f,size:ap,path:d,url:aq}},provider:l,related:[g],createdAt:ar,updatedAt:as,__v:c,id:p},published_at:o,id:g},category:{position:at,_id:m,slug:u,name:au,description:t,createdAt:s,updatedAt:av,__v:c,published_at:s,id:m},cover:{_id:j,name:v,alternativeText:e,caption:e,hash:w,ext:a,mime:b,size:x,width:y,height:f,url:z,formats:{thumbnail:{name:A,hash:B,ext:a,mime:b,width:C,height:D,size:E,path:d,url:F},medium:{name:G,hash:H,ext:a,mime:b,width:I,height:J,size:K,path:d,url:L},small:{name:M,hash:N,ext:a,mime:b,width:f,height:O,size:P,path:d,url:Q}},provider:l,related:[h,R,S,T,U,V,n,W,k],createdAt:X,updatedAt:Y,__v:c,id:j},published_at:aC,trans_posts:[{lang:Z,_id:aD,name:aB,content:"## Requirements\n\n- Install [Nodejs](https:\u002F\u002Fnodejs.org\u002Fen\u002F)\n- Install [Yarn](https:\u002F\u002Fyarnpkg.com\u002Flang\u002Fen\u002F)\n\n## Referents\n\n- [Bootstrap Vue](https:\u002F\u002Fbootstrap-vue.js.org\u002Fdocs\u002F)\n- [Nuxt TailwindCSS](https:\u002F\u002Ftailwindcss.nuxtjs.org\u002F)\n\n## Start project \n\n### A new project\n\n```bash\n# create project\n# remember choose BootstrapVue or TailwindCSS\nyarn create nuxt-app \u003Cproject-name\u003E\n```\n\n### Exist project\n\n- Install [`@nuxtjs\u002Ftailwindcss`](https:\u002F\u002Ftailwindcss.nuxtjs.org\u002Fsetup)\n\n```bash\nyarn add --dev @nuxtjs\u002Ftailwindcss\n```\n\n```js\n# \u002Fnuxt.config.js\nexport default {\n  buildModules: ['@nuxtjs\u002Ftailwindcss']\n}\n```\n\n\u003E More detail [here](https:\u002F\u002Ftailwindcss.nuxtjs.org\u002Fsetup)\n\n- OR install [bootstrap-vue](https:\u002F\u002Fbootstrap-vue.org\u002Fdocs#nuxtjs-module)\n\n```bash\nyarn add bootstrap-vue\n```\n\n```js\n# \u002Fnuxt.config.js\nmodule.exports = {\n  modules: ['bootstrap-vue\u002Fnuxt']\n}\n```\n\u003E More detail [here](https:\u002F\u002Fbootstrap-vue.org\u002Fdocs#nuxtjs-module)\n\n## Setup project use SCSS\n\n- Install libs:\n\n```bash\nyarn add sass-loader node-sass\n```\n\n- Create files in folder `assets\u002Fscss`\n  \n  + `main.scss`\n\n- Update file `nuxt.config.js`\n\n```js\nloading: { color: '#41B883' },\ncss: ['@\u002Fassets\u002Fcss\u002Fmain.scss']\n```",shortDescription:aE,description:aE,createdAt:aF,updatedAt:"2020-09-29T21:21:51.116Z",__v:c,slug:"nuxt-js-basic-setup-en",post:n,published_at:aF,id:aD}],id:n,path:"\u002Fblog\u002Fnuxt-js\u002Fnuxt-js-basic-setup"},{isPublished:i,isPin:i,_id:h,slug:ax,name:_,publishedDate:aG,createdAt:$,updatedAt:aw,__v:c,author:{_id:g,name:ac,displayName:ad,createdAt:o,updatedAt:ae,__v:c,cover:{_id:p,name:af,alternativeText:e,caption:e,hash:ag,ext:a,mime:b,size:ah,width:q,height:q,url:ai,formats:{thumbnail:{name:aj,hash:ak,ext:a,mime:b,width:r,height:r,size:al,path:d,url:am},small:{name:an,hash:ao,ext:a,mime:b,width:f,height:f,size:ap,path:d,url:aq}},provider:l,related:[g],createdAt:ar,updatedAt:as,__v:c,id:p},published_at:o,id:g},category:{position:at,_id:m,slug:u,name:au,description:t,createdAt:s,updatedAt:av,__v:c,published_at:s,id:m},cover:{_id:j,name:v,alternativeText:e,caption:e,hash:w,ext:a,mime:b,size:x,width:y,height:f,url:z,formats:{thumbnail:{name:A,hash:B,ext:a,mime:b,width:C,height:D,size:E,path:d,url:F},medium:{name:G,hash:H,ext:a,mime:b,width:I,height:J,size:K,path:d,url:L},small:{name:M,hash:N,ext:a,mime:b,width:f,height:O,size:P,path:d,url:Q}},provider:l,related:[h,R,S,T,U,V,n,W,k],createdAt:X,updatedAt:Y,__v:c,id:j},published_at:$,trans_posts:[{lang:Z,_id:aa,name:_,shortDescription:aH,description:t,slug:aI,createdAt:ab,updatedAt:aJ,__v:c,post:h,content:aK,published_at:ab,id:aa}],id:h,path:"\u002Fblog\u002Fnuxt-js\u002Fintroduction-nuxt-js"}]}},{cate:u,slug:ax,page:{lang:Z,_id:aa,name:_,shortDescription:aH,description:t,slug:aI,createdAt:ab,updatedAt:aJ,__v:c,post:{isPublished:i,isPin:i,_id:h,slug:ax,name:_,publishedDate:aG,createdAt:$,updatedAt:aw,__v:c,author:g,category:m,cover:aL,published_at:$,id:h},content:aK,published_at:ab,id:aa,html:"\u003Cblockquote\u003E\n\u003Cp\u003ENuxt is a progressive framework based on Vue.js to create modern web applications. It is based on Vue.js official libraries (vue, vue-router and vuex) and powerful development tools (webpack, Babel and PostCSS). Nuxt goal is to make web development powerful and performant with a great developer experience in mind.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"Referents\"\u003EReferents\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fguides\u002Fget-started\u002Finstallation\"\u003ENuxt JS installation\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"Schema\"\u003ESchema\u003C\u002Fh2\u003E\n\u003Cp\u003EThis schema shows what is called by Nuxt.js when the server is called or when the user navigates through the app via \u003Ccode\u003E&lt;nuxt-link&gt;\u003C\u002Fcode\u003E:\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fnuxtjs.org\u002Fguides\u002Fnuxt-lifecycle.png\" alt=\"nuxt-schema\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"Features\"\u003EFeatures\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003EWrite Vue Files (\u003Ccode\u003E*.vue\u003C\u002Fcode\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003EAutomatic Code Splitting\u003C\u002Fli\u003E\n\u003Cli\u003EServer-Side Rendering\u003C\u002Fli\u003E\n\u003Cli\u003EPowerful Routing System with Asynchronous Data\u003C\u002Fli\u003E\n\u003Cli\u003EStatic File Serving\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003EES2015+\u003C\u002Fcode\u003E Transpilation\u003C\u002Fli\u003E\n\u003Cli\u003EBundling and minifying of your JS &amp; CSS\u003C\u002Fli\u003E\n\u003Cli\u003EManaging \u003Ccode\u003E&lt;head&gt;\u003C\u002Fcode\u003E element (\u003Ccode\u003E&lt;title&gt;\u003C\u002Fcode\u003E, \u003Ccode\u003E&lt;meta&gt;\u003C\u002Fcode\u003E, etc.)\u003C\u002Fli\u003E\n\u003Cli\u003EPre-processor: Sass, Less, Stylus, etc.\u003C\u002Fli\u003E\n\u003Cli\u003EHTTP\u002F2 push headers ready\u003C\u002Fli\u003E\n\u003Cli\u003EExtending with Modular architecture\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n",toc:[{id:aM,depth:ay,text:aM},{id:aN,depth:ay,text:aN},{id:aO,depth:ay,text:aO}],langFallback:i},cover:aL}],fetch:[],mutations:[]}}(".jpg","image\u002Fjpeg",0,null,"",500,"5f6a400fcc83ce0b0400810e","5f6b3771c065060f7779c837",true,"5f6b751a4a83ec1e8be4c135","5fa05249c8cb2d1a0ab71def","aws-s3","5f6a49081c06200ef09cf5ab","5f73a1020050ab1560f4727a","2020-09-22T18:18:55.730Z","5f6a400bcc83ce0b0400810d",600,156,"2020-09-22T18:57:12.379Z","Nuxt is a progressive framework based on Vue.js to create modern web applications. It is based on Vue.js official libraries (vue, vue-router and vuex) and powerful development tools (webpack, Babel and PostCSS). Nuxt goal is to make web development powerful and performant with a great developer experience in mind.","nuxt-js","thumb-blog.jpg","thumb_blog_91373f41ff",116.31,1000,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumb_blog_91373f41ff.jpg","thumbnail_thumb-blog.jpg","thumbnail_thumb_blog_91373f41ff",245,123,9.4,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumbnail_thumb_blog_91373f41ff.jpg","medium_thumb-blog.jpg","medium_thumb_blog_91373f41ff",750,375,68.23,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fmedium_thumb_blog_91373f41ff.jpg","small_thumb-blog.jpg","small_thumb_blog_91373f41ff",250,33.62,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fsmall_thumb_blog_91373f41ff.jpg","5f6b378cc065060f7779c838","5f6b63430e35901435e1968d","5f7395c80050ab1560f47271","5f739ec40050ab1560f47274","5f739f4d0050ab1560f47277","5f747640f6957a0acfcf1f29","2020-09-23T16:17:30.161Z","2020-11-02T18:39:05.600Z","en","Introduction Nuxt JS","2020-09-23T11:54:25.816Z","5f6b37d4c065060f7779c839","2020-09-23T11:56:04.623Z","tampm","Tam Phan","2020-09-22T18:18:55.815Z","tp-600.jpg","tp_600_736fcf4df9",14.12,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Ftp_600_736fcf4df9.jpg","thumbnail_tp-600.jpg","thumbnail_tp_600_736fcf4df9",3.55,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumbnail_tp_600_736fcf4df9.jpg","small_tp-600.jpg","small_tp_600_736fcf4df9",11.89,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fsmall_tp_600_736fcf4df9.jpg","2020-09-22T18:18:51.943Z","2020-09-22T18:18:55.778Z",3,"Nuxt JS","2020-09-29T22:02:14.216Z","2020-09-29T22:02:14.187Z","introduction-nuxt-js",2,"Nuxt JS PWA","5fa05341c8cb2d1a0ab71df1","Nuxt JS Basic Setup","2020-09-29T21:02:58.081Z","5f73a54f0050ab1560f4727c","Setup a nuxtjs project with BootstrapVue OR Tailwind CSS","2020-09-29T21:21:19.483Z","2020-09-30","Nuxt is a progressive framework based on Vue.js.","introduction-nuxt-js-en","2020-09-29T19:53:25.235Z","\u003E Nuxt is a progressive framework based on Vue.js to create modern web applications. It is based on Vue.js official libraries (vue, vue-router and vuex) and powerful development tools (webpack, Babel and PostCSS). Nuxt goal is to make web development powerful and performant with a great developer experience in mind.\n\n## Referents\n\n- [Nuxt JS installation](https:\u002F\u002Fnuxtjs.org\u002Fguides\u002Fget-started\u002Finstallation)\n\n## Schema\n\nThis schema shows what is called by Nuxt.js when the server is called or when the user navigates through the app via `\u003Cnuxt-link\u003E`:\n\n![nuxt-schema](https:\u002F\u002Fnuxtjs.org\u002Fguides\u002Fnuxt-lifecycle.png)\n\n## Features\n\n- Write Vue Files (`*.vue`)\n- Automatic Code Splitting\n- Server-Side Rendering\n- Powerful Routing System with Asynchronous Data\n- Static File Serving\n- `ES2015+` Transpilation\n- Bundling and minifying of your JS & CSS\n- Managing `\u003Chead\u003E` element (`\u003Ctitle\u003E`, `\u003Cmeta\u003E`, etc.)\n- Pre-processor: Sass, Less, Stylus, etc.\n- HTTP\u002F2 push headers ready\n- Extending with Modular architecture\n",{},"Referents","Schema","Features")));