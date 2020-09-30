(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{558:function(t,e,r){var content=r(565);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("3aa9fea8",content,!0,{sourceMap:!1})},564:function(t,e,r){"use strict";var n=r(558);r.n(n).a},565:function(t,e,r){(e=r(47)(!1)).push([t.i,".lazy-loaded[data-v-a24f0924]{opacity:1}",""]),t.exports=e},580:function(t,e,r){"use strict";r.r(e);var n={components:{},props:{links:{type:Object,default:function(){return[]}}},data:function(){return{current:0,setInter:null,showNav:!1}},computed:{postCategories:function(){return this.$i18n.t("postCategories")}},methods:{}},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block"},[r("div",{staticClass:"h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"},[r("nav",{staticClass:"pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:max-h-(screen-24)",class:{hidden:!t.showNav}},[r("div",{attrs:{id:"postCategories"}},[r("h3",{staticClass:"flex items-center uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"},[r("span",[t._v(t._s(t.$t("blog.post_categories")))])]),t._v(" "),r("ul",{staticClass:"pb-6 pl-2"},t._l(t.postCategories,(function(e,n){return r("li",{key:n,staticClass:"text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[r("NuxtLink",{staticClass:"p-2 pl-2 flex rounded hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear",attrs:{"exact-active-class":"text-nuxt-lightgreen bg-green-100 dark:bg-green-800 dark:text-white",to:t.localePath("/blog/"+e.slug)}},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)})),0)]),t._v(" "),t._l(t.links,(function(e,n){return r("div",{key:"links-"+n},[r("h3",{staticClass:"flex items-center uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"},[r("span",[t._v(t._s(t.$t("blog."+n)))])]),t._v(" "),r("ul",{staticClass:"pb-6 pl-2"},t._l(e,(function(link,e){return r("li",{key:e,staticClass:"text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[r("NuxtLink",{staticClass:"p-2 pl-2 flex rounded hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear",attrs:{"exact-active-class":"text-nuxt-lightgreen bg-green-100 dark:bg-green-800 dark:text-white",to:t.localePath(link.path)}},[t._v("\n              "+t._s(link.name)+"\n            ")])],1)})),0)])}))],2)])])}),[],!1,null,"16fe4272",null);e.default=component.exports},581:function(t,e,r){"use strict";r.r(e);var n={props:{post:{type:Object,required:!0}},methods:{formatDateByLocale:function(t){var e=this.$i18n.locale||"en";return new Date(t).toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}}},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"light:bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear",attrs:{to:t.localePath({name:"blog-cate-slug",params:{cate:t.post.category.slug,slug:t.post.slug}})}},[r("div",{staticClass:"w-full lg:w-2/3 flex flex-col justify-between pr-4"},[r("div",{staticClass:"mb-2"},[r("h2",{staticClass:"mb-4 inline-block leading-tight light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-semibold text-2xl md:text-3xl transition-colors duration-300 ease-linear"},[t._v("\n        "+t._s(t.post.name)+"\n      ")]),t._v(" "),r("div",{staticClass:"mb-4"},[r("p",{staticClass:"truncate-multiline-3 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n          "+t._s(t.post.description)+"\n        ")])])]),t._v(" "),r("div",{staticClass:"flex flex-col lg:flex-row text-sm"},[r("div",{staticClass:"mb-4 lg:mb-0 flex items-center"},[r("span",{staticClass:"flex items-center mr-4"},[r("img",{staticClass:"inline-block h-6 w-6 rounded-full mr-2",attrs:{src:t.$parser.image(t.post.author.cover,"thumbnail"),alt:""}}),t._v(" "),r("span",{staticClass:"leading-none last:mr-0 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"},[t._v("\n            "+t._s(t.post.author.displayName)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"flex w-full lg:w-auto items-center justify-between leading-none"},[r("span",{staticClass:"hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n          •\n        ")]),t._v(" "),r("span",{staticClass:"light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n          "+t._s(t.formatDateByLocale(t.post.publishedDate))+"\n        ")])])])]),t._v(" "),r("div",{staticClass:"w-full lg:w-1/3 mb-6 lg:mb-0 rounded overflow-hidden"},[r("AppImage",{attrs:{src:t.$parser.image(t.post.cover,"medium"),ratio:"16:8"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppImage:r(583).default})},583:function(t,e,r){"use strict";r.r(e);r(63);var n={props:{src:{type:String,default:null},alt:{type:String,default:null},ratio:{type:String,default:null},sizes:{type:String,default:null}},data:function(){return{show:!1,loaded:!1}},computed:{intristicRatio:function(){if(this.ratio){var t=this.ratio.split(":");return t[1]/t[0]}return 0},intristicRatioStyle:function(){return{"padding-bottom":"".concat(100*this.intristicRatio,"%")}}},methods:{lazyLoadImage:function(t,e){var r=this;t&&(this.show=!0,this.$nextTick((function(){var t=r.$refs.img;t.addEventListener("load",(function(){t.classList.add("lazy-loaded"),r.loaded=!0})),t.addEventListener("error",(function(){t.classList.add("lazy-load-error")}))})))}}},l=(r(564),r(5)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.lazyLoadImage,throttle:250,once:!0},expression:"{\n    callback: lazyLoadImage,\n    throttle: 250,\n    once: true\n  }"}],staticClass:"overflow-hidden relative light:bg-light-surface dark:bg-dark-surface",style:[t.intristicRatioStyle]},[r("div"),t._v(" "),[t.show?r("img",{ref:"img",staticClass:"w-full opacity-0 transition-opacity duration-500",class:[t.ratio&&"absolute top-0 left-0"],attrs:{src:t.src,alt:t.alt}}):t._e()]],2)}),[],!1,null,"a24f0924",null);e.default=component.exports},645:function(t,e,r){"use strict";r.r(e);r(75),r(19);var n=r(3),l={layout:"blog",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.$services,e.next=3,n.Post.getAll({isPublished:!0,_sort:"publishedDate:DESC",_start:0,_limit:10});case 3:return l=(l=e.sent).filter((function(t){return!(!t.trans_posts||0===t.trans_posts.length)})).map((function(t){return t.path="/blog/".concat(t.category.slug,"/").concat(t.slug),t})),e.next=7,n.Post.getAll({isPin:!0,isPublished:!0,_sort:"publishedDate:DESC"});case 7:return o=(o=e.sent).filter((function(t){return!(!t.trans_posts||0===t.trans_posts.length)})).map((function(t){return t.path="/blog/".concat(t.category.slug,"/").concat(t.slug),t})),c=o.map((function(t){var e={},n=t.trans_posts.find((function(t){return t.slug===r.i18n.locale}));return n?(e=n).langFallback=!1:(n=t.trans_posts.find((function(t){return t.slug===r.i18n.defaultLocale})))?(e=n).langFallback=!0:(e=t.trans_posts[0]).langFallback=!0,Object.assign({},e,{slug:t.slug,publishedDate:t.publishedDate,author:t.author,category:t.category,cover:t.cover})})),e.abrupt("return",{transPinPosts:c,links:{recent_posts:l}});case 11:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t("blog.meta.title"),t=this.$t("blog.meta.description");return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t}]}}},o=r(5),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow-nuxt"},[r("div",{staticClass:"container mx-auto px-4 lg:flex pb-12"},[r("TheMobileAsideNavNewDocs",{attrs:{links:t.links}}),t._v(" "),r("TheAsideNavNewDocs",{staticClass:"hidden lg:block",attrs:{links:t.links}}),t._v(" "),r("div",{staticClass:"min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 pt-8"},[r("h3",{staticClass:"text-xl xl:text-4xl text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-bold leading-relaxed mb-6 text-center"},[t._v("\n        "+t._s(t.$i18n.t("blog.top_posts"))+"\n      ")]),t._v(" "),t._l(t.transPinPosts,(function(t,e){return r("BlogpostPreviewItem",{key:e,attrs:{post:t}})}))],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheMobileAsideNavNewDocs:r(225).default,TheAsideNavNewDocs:r(580).default,BlogpostPreviewItem:r(581).default})}}]);