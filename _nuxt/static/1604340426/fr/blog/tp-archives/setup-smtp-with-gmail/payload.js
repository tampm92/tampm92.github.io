__NUXT_JSONP__("/fr/blog/tp-archives/setup-smtp-with-gmail", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak){ak._id=k;ak.name=B;ak.alternativeText=f;ak.caption=f;ak.hash=C;ak.ext=a;ak.mime=b;ak.size=D;ak.width=E;ak.height=g;ak.url=F;ak.formats={thumbnail:{name:G,hash:H,ext:a,mime:b,width:I,height:J,size:K,path:d,url:L},medium:{name:M,hash:N,ext:a,mime:b,width:O,height:P,size:Q,path:d,url:R},small:{name:S,hash:T,ext:a,mime:b,width:g,height:U,size:V,path:d,url:W}};ak.provider=p;ak.related=[X,Y,Z,_,$,aa,ab,e];ak.createdAt=ac;ak.updatedAt=ad;ak.__v=c;ak.id=k;return {data:[{links:{recent_posts:[{isPublished:n,isPin:s,_id:e,slug:o,name:h,publishedDate:t,createdAt:i,updatedAt:u,__v:c,author:{_id:j,name:"tampm",displayName:"Tam Phan",createdAt:v,updatedAt:"2020-09-22T18:18:55.815Z",__v:c,cover:{_id:w,name:"tp-600.jpg",alternativeText:f,caption:f,hash:"tp_600_736fcf4df9",ext:a,mime:b,size:14.12,width:x,height:x,url:"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Ftp_600_736fcf4df9.jpg",formats:{thumbnail:{name:"thumbnail_tp-600.jpg",hash:"thumbnail_tp_600_736fcf4df9",ext:a,mime:b,width:y,height:y,size:3.55,path:d,url:"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumbnail_tp_600_736fcf4df9.jpg"},small:{name:"small_tp-600.jpg",hash:"small_tp_600_736fcf4df9",ext:a,mime:b,width:g,height:g,size:11.89,path:d,url:"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fsmall_tp_600_736fcf4df9.jpg"}},provider:p,related:[j],createdAt:"2020-09-22T18:18:51.943Z",updatedAt:"2020-09-22T18:18:55.778Z",__v:c,id:w},published_at:v,id:j},category:{position:1,_id:q,slug:z,name:"TP Archives",description:"My Notes",createdAt:A,updatedAt:"2020-09-29T22:01:52.504Z",__v:c,published_at:A,id:q},cover:{_id:k,name:B,alternativeText:f,caption:f,hash:C,ext:a,mime:b,size:D,width:E,height:g,url:F,formats:{thumbnail:{name:G,hash:H,ext:a,mime:b,width:I,height:J,size:K,path:d,url:L},medium:{name:M,hash:N,ext:a,mime:b,width:O,height:P,size:Q,path:d,url:R},small:{name:S,hash:T,ext:a,mime:b,width:g,height:U,size:V,path:d,url:W}},provider:p,related:[X,Y,Z,_,$,aa,ab,e],createdAt:ac,updatedAt:ad,__v:c,id:k},published_at:i,trans_posts:[{lang:ae,_id:l,name:h,shortDescription:af,description:ag,content:ah,slug:ai,createdAt:m,updatedAt:aj,__v:c,post:e,published_at:m,id:l}],id:e,path:"\u002Fblog\u002Ftp-archives\u002Fsetup-smtp-with-gmail"}]}},{cate:z,slug:o,page:{lang:ae,_id:l,name:h,shortDescription:af,description:ag,content:ah,slug:ai,createdAt:m,updatedAt:aj,__v:c,post:{isPublished:n,isPin:s,_id:e,slug:o,name:h,publishedDate:t,createdAt:i,updatedAt:u,__v:c,author:j,category:q,cover:ak,published_at:i,id:e},published_at:m,id:l,html:"\u003Ch2 id=\"Google's-Gmail-SMTP-server\"\u003EGoogle's Gmail SMTP server\u003C\u002Fh2\u003E\n\u003Cp\u003EGoogle's Gmail SMTP server is a free SMTP service which anyone who has a Gmail account can use to send emails. You can use it with personal emails, or even with your website if you are sending emails for things such as contact forms, newsletter blasts, or notifications.\u003C\u002Fp\u003E\n\u003Cp\u003ETo use Gmail's SMTP server, you will need the following settings for your outgoing emails:\u003C\u002Fp\u003E\n\u003Cp\u003EOutgoing Mail (SMTP) Server: smtp.gmail.com\nUse Authentication: Yes\nUse Secure Connection: Yes (TLS or SSL depending on your mail client\u002Fwebsite SMTP plugin)\nUsername: your Gmail account (e.g. user@gmail.com)\nPassword: your Gmail password (you need to setup an application specific password for this to work -&gt; read tutorial below)\nPort: 465 (SSL required) or 587 (TLS required)\u003C\u002Fp\u003E\n\u003Ch2 id=\"Setup-step-Google-application-password\"\u003ESetup step Google application password\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003E\n\u003Cp\u003EAccess to \u003Ca href=\"https:\u002F\u002Fmyaccount.google.com\u002F\"\u003Ehttps:\u002F\u002Fmyaccount.google.com\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003EChoose \u003Ccode\u003ESecurity\u003C\u002Fcode\u003E (on left menu) -&gt; \u003Ccode\u003E2-Step Verification\u003C\u002Fcode\u003E -&gt; Turn on it\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49883835451_2d2216b04e_o.png\" alt=\"alt\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003EPage to \u003Ccode\u003ESecurity page\u003C\u002Fcode\u003E -&gt; \u003Ccode\u003EApp passwords\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49884144917_0ba4d599f2_o.jpg\" alt=\"alt\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003EIn \u003Ccode\u003ESelect app\u003C\u002Fcode\u003E options -&gt; choose \u003Ccode\u003EOrther\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49883835406_207bed155a_o.png\" alt=\"alt\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnter app name -&gt; click \u003Ccode\u003EGENERATE\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49884144782_7feaa31a54_o.png\" alt=\"alt\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E👌 DONE. Now you can copy this password and use it.\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49884144637_f36b788439_o.png\" alt=\"alt\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"What-is-Gmail's-daily-limit-on-sending-email\"\u003EWhat is Gmail's daily limit on sending email\u003C\u002Fh2\u003E\n\u003Cp\u003EYou can send emails to a maximum of 500 recipients per day through the Gmail website. If you are a Google Apps for Work user, your daily limit is 10000 email recipients per day.\u003C\u002Fp\u003E\n",toc:[{id:"Google's-Gmail-SMTP-server",depth:r,text:"Google's Gmail SMTP server"},{id:"Setup-step-Google-application-password",depth:r,text:"Setup step Google application password"},{id:"What-is-Gmail's-daily-limit-on-sending-email",depth:r,text:"What is Gmail's daily limit on sending email"}],langFallback:n},cover:ak}],fetch:[],mutations:[]}}(".jpg","image\u002Fjpeg",0,null,"5f747640f6957a0acfcf1f29","",500,"Setup SMTP With Gmail","2020-09-30T12:12:48.654Z","5f6a400fcc83ce0b0400810e","5f6b751a4a83ec1e8be4c135","5f7476bbf6957a0acfcf1f2b","2020-09-30T12:14:51.017Z",true,"setup-smtp-with-gmail","aws-s3","5f73aebe0050ab1560f4727d",2,false,"2020-10-05","2020-09-30T12:12:48.782Z","2020-09-22T18:18:55.730Z","5f6a400bcc83ce0b0400810d",600,156,"tp-archives","2020-09-29T22:01:34.160Z","thumb-blog.jpg","thumb_blog_91373f41ff",116.31,1000,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumb_blog_91373f41ff.jpg","thumbnail_thumb-blog.jpg","thumbnail_thumb_blog_91373f41ff",245,123,9.4,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fthumbnail_thumb_blog_91373f41ff.jpg","medium_thumb-blog.jpg","medium_thumb_blog_91373f41ff",750,375,68.23,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fmedium_thumb_blog_91373f41ff.jpg","small_thumb-blog.jpg","small_thumb_blog_91373f41ff",250,33.62,"https:\u002F\u002Ftp-website-bucket.s3.eu-west-3.amazonaws.com\u002Fsmall_thumb_blog_91373f41ff.jpg","5f6b3771c065060f7779c837","5f6b378cc065060f7779c838","5f6b63430e35901435e1968d","5f7395c80050ab1560f47271","5f739ec40050ab1560f47274","5f739f4d0050ab1560f47277","5f73a1020050ab1560f4727a","2020-09-23T16:17:30.161Z","2020-11-02T18:06:07.852Z","en","Setup SMTP with Gmail for app or backend server","Google's Gmail SMTP server is a free SMTP service which anyone who has a Gmail account can use to send emails. You can use it with personal emails, or even with your website if you are sending emails for things such as contact forms, newsletter blasts, or notifications.","## Google's Gmail SMTP server\n\nGoogle's Gmail SMTP server is a free SMTP service which anyone who has a Gmail account can use to send emails. You can use it with personal emails, or even with your website if you are sending emails for things such as contact forms, newsletter blasts, or notifications.\n\nTo use Gmail's SMTP server, you will need the following settings for your outgoing emails:\n\nOutgoing Mail (SMTP) Server: smtp.gmail.com\nUse Authentication: Yes\nUse Secure Connection: Yes (TLS or SSL depending on your mail client\u002Fwebsite SMTP plugin)\nUsername: your Gmail account (e.g. user@gmail.com)\nPassword: your Gmail password (you need to setup an application specific password for this to work -\u003E read tutorial below)\nPort: 465 (SSL required) or 587 (TLS required)\n\n## Setup step Google application password\n\n1. Access to [https:\u002F\u002Fmyaccount.google.com\u002F](https:\u002F\u002Fmyaccount.google.com\u002F)\n2. Choose `Security` (on left menu) -\u003E `2-Step Verification` -\u003E Turn on it\n\n   ![alt](https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49883835451_2d2216b04e_o.png)\n\n3. Page to `Security page` -\u003E `App passwords`\n\n   ![alt](https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49884144917_0ba4d599f2_o.jpg)\n\n4. In `Select app` options -\u003E choose `Orther`\n\n   ![alt](https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49883835406_207bed155a_o.png)\n\n5. Enter app name -\u003E click `GENERATE`\n\n   ![alt](https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49884144782_7feaa31a54_o.png)\n\n6. 👌 DONE. Now you can copy this password and use it.\n\n   ![alt](https:\u002F\u002Flive.staticflickr.com\u002F65535\u002F49884144637_f36b788439_o.png)\n\n## What is Gmail's daily limit on sending email\n\nYou can send emails to a maximum of 500 recipients per day through the Gmail website. If you are a Google Apps for Work user, your daily limit is 10000 email recipients per day.","setup-smtp-with-gmail-en","2020-09-30T12:14:51.061Z",{})));