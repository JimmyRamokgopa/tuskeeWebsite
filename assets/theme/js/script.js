!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/website-builder/blogger.html">best website builder for bloggers</a> Mobirise v5.6.13 <a href="https://mobirise.com/website-builder/restaurant.html">website builder for restaurants</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();

(function(a){function u(b){b=a(b);var c=b.attr("ID")+"-carousel";b.find(".carousel").attr("id",c);b.find(".carousel-controls a").attr("href","#"+c);b.find(".carousel-indicators li").attr("data-target","#"+c);a(b).find(".carousel-item:first").addClass("active")}function v(b){b=a(b);var c=b.find(".carousel-item").length,d=b.find(".carousel-inner").attr("data-visible");c<d&&(d=c);b.find(".carousel-inner").attr("class","carousel-inner slides"+d);b.find(".clonedCol").remove();b.find(".carousel-item .col-md-12").each(function(){2>
d?a(this).attr("class","col-md-12"):"5"==d?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/d)});b.find(".carousel-item").each(function(){for(var b=a(this),c=1;c<d;c++){b=b.next();b.length||(b=a(this).siblings(":first"));var n=b.index();b.find(".col-md-12:first").clone().addClass("cloneditem-"+c).addClass("clonedCol").attr("data-cloned-index",n).appendTo(a(this).children().eq(0))}})}function w(b){0!==a(b).find(".nav-tabs").length&&a(b).outerFind('section[id^="tabs"]').each(function(){var b=
a(this).attr("id"),d=a(this).find(".nav-tabs .nav-item"),f=a(this).find(".tab-pane");f.removeClass("active").eq(0).addClass("active");d.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active");f.each(function(){a(this).attr("id",b+"_tab"+a(this).index())});d.each(function(){a(this).find("a").attr("href","#"+b+"_tab"+a(this).index())})})}var h=a("html").hasClass("is-builder");a.extend(a.easing,{easeInOutCubic:function(a,c,d,f,e){return 1>(c/=e/2)?f/2*c*c*c+d:f/2*((c-=2)*
c*c+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};a.fn.scrollEnd=function(b,c){a(this).scroll(function(){var d=a(this);d.data("scrollTimeout")&&clearTimeout(d.data("scrollTimeout"));d.data("scrollTimeout",setTimeout(b,c))})};a.fn.footerReveal=function(){function b(){!e&&c.outerHeight()<=f.outerHeight()?(c.css({"z-index":-999,position:"fixed",bottom:0}),c.css({width:d.outerWidth()}),d.css({"margin-bottom":c.outerHeight()})):(c.css({"z-index":"",position:"",bottom:""}),c.css({width:""}),
d.css({"margin-bottom":""}))}var c=a(this),d=c.prev(),f=a(window),e=!!document.documentMode;b();f.on("load resize",function(){b()});return this};(function(a,c){var d=function(a,b,c){var d;return function(){var h=this,k=arguments;d?clearTimeout(d):c&&a.apply(h,k);d=setTimeout(function(){c||a.apply(h,k);d=null},b||100)}};jQuery.fn[c]=function(a){return a?this.bind("resize",d(a)):this.trigger(c)}})(jQuery,"smartresize");a.isMobile=function(b){var c=[],d={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",
opera:"Opera Mini",ios:"iPhone|iPad|iPod"};b="undefined"==a.type(b)?"*":b.toLowerCase();"*"==b?c=a.map(d,function(a){return a}):b in d&&c.push(d[b]);return(b=!(!c.find(function(a){return"iPhone|iPod|iPad"===a})||!(navigator.userAgent.match(/(iPad)/)||"MacIntel"===navigator.platform&&"undefined"!==typeof navigator.standalone)))?b:!(!c.length||!navigator.userAgent.match(new RegExp(c.join("|"),"i")))};var x=function(){var b=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),
c=b[0],d=parseInt(window.innerHeight/2,10),c=parseInt((window.getComputedStyle?getComputedStyle(c,null):c.currentStyle).height,10);b.remove();return c==d}();a(function(){function b(){a(this).css("height",9*a(this).parent().width()/16)}function c(b,c,d){setTimeout(function(){c?a(b).outerFind(".mbr-parallax-background."+d+" > > *").css("background-image",'url("'+c+'")'):a(b).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}function d(a){outerFind(a,"[data-bg-video]").forEach(function(a){var b=
a.getAttribute("data-bg-video");if(b){var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),d=a.querySelector(".mbr-background-video-preview")||document.createElement("div");d.classList.add("mbr-background-video-preview");d.style.display="none";d.style.backgroundSize="cover";d.style.backgroundPosition="center";a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(d);
if(c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtu\.?be/g.test(c[3])){c[6]=c[6].replace("shorts","embed");var b="http"+("https:"===location.protocol?"s":"")+":",b=b+("//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg"),k=new Image;k.onload=function(){if(120===(k.naturalWidth||k.width)){var b=k.src.split("/").pop();switch(b){case "maxresdefault.jpg":k.src=k.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":k.src=k.src.replace(b,"hqdefault.jpg");break;default:h&&(d.style.backgroundImage=
'url("images/no-video.jpg")',d.style.display="block")}}else d.style.backgroundImage='url("'+k.src+'")',d.style.display="block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();var e=document.createElement("div"),f=document.createElement("div"),l=document.createElement("div"),g=document.createElement("div");g.classList.add("mbr-video-foreground");g.appendChild(e);l.appendChild(g);f.appendChild(l);e.classList.add("mbr-background-video");a.childNodes[1].before(f);
b=new YouTubePlayer(e,{modestBranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1});f.style.overflow="hidden";f.style.position="absolute";f.style.width="100%";f.style.height="100%";f.style.top="0";f.style.left="0";l.style.background="#000";l.style.top="0";l.style.right="0";l.style.bottom="0";l.style.left="0";g.style.position="absolute";g.style.top="0";g.style.left="0";g.style.width="100%";g.style.height="100%";g.style.pointerEvents="none";
e.style.marginTop="0";e.style.maxWidth="initial";e.style.transitionProperty="opacity";e.style.transitionDuration="1000ms";e.style.pointerEvents="none";e.style.position="absolute";e.style.top="0";e.style.left="0";e.style.width="100%";e.style.height="100%";e.parentNode.style.overflow="hidden";e.style.transform="scale(1.2)";b.load(c[6],!0);b.play();b.loadPlaylist();b.setLoop(!0);b.mute();var l=window.outerWidth,g=window.outerHeight,n=b._opts.width/b._opts.height,e=l,f=Math.ceil(e/n);Math.ceil(-((f-g)/
2));f<g&&(f=g,e=Math.ceil(f*n),Math.ceil(-((e-l)/2)));b.setSize(e,f)};k.setAttribute("src",b)}else{if(c&&/vimeo/g.test(c[3])){var e=new XMLHttpRequest;e.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0);e.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);d.style.backgroundImage='url("'+a[0].thumbnail_large+'")';d.style.display="block"}else h&&(d.style.backgroundImage='url("images/no-video.jpg")',d.style.display=
"block")};e.send();e=null;a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();e=document.createElement("div");e.classList.add("mbr-background-video");a.childNodes[1].before(e);b=new Vimeo.Player(e,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0,controls:!1});e=b.element.parentNode;e.style.overflow="hidden";b.element.style.pointerEvents="none";b.element.style.marginLeft="-"+(b.element.scrollWidth-e.scrollWidth)/2+"px";b.element.style.minHeight=
"100vh";b.element.style.minWidth="177.77vh"}}else if(h)d.style.backgroundImage='url("images/video-placeholder.jpg")',d.style.display="block";else if(!h){var e=document.createElement("video"),f=document.createElement("source");e.append(f);a.childNodes[1].before(e);f.src=b;e.autoplay=!0;e.loop=!0;e.muted=!0;e.setAttribute("muted","");e.playsinline=!0;e.setAttribute("playsinline","");e.style.position="absolute";e.style.left="50%";e.style.top="50%";e.style.bottom="0";e.style.right="0";e.style.minWidth=
"100%";e.style.minHeight="100%";e.style.transform="translateX(-50%) translateY(-50%)";b="";a.querySelector(".mbr-fallback-image")&&(b=window.getComputedStyle(a.querySelector(".mbr-fallback-image")).backgroundImage,b=b.match(/\((.*?)\)/)[1].replace(/('|")/g,""),e.setAttribute("poster",b));e.parentNode.style.overflow="hidden"}}})}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":"removeClass";
a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,c){var e=[b,b];e[c>b?0:1]=c;a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,e)&&(b=e[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):x||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",
function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(b)});a(document).on("add.cards changeParameter.cards",function(c){var e=a(c.target).outerFind(".mbr-section--16by9");e.length?e.attr("data-16by9","true").each(b):a(c.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&(a(window).on("update.parallax",
function(b){setTimeout(function(){var b=a(".mbr-parallax-background");b.jarallax("coverImage");b.jarallax("clipContainer");b.jarallax("onScroll")},0)}),h?(a(document).on("add.cards",function(b){c(b.target);a(window).trigger("update.parallax")}),a(document).on("changeParameter.cards",function(b,e,d,f){if("bg"===e||"li1"===e||"li2"===e||"li3"===e)switch(a(b.target).jarallax("destroy").css("position",""),a(b.target).find(".mbr-background-video-preview").remove(),a(b.target).find(".mbr-background-video").remove(),
a(b.target).find(".mbr-background-video-wrapper").remove(),a(b.target).find(".mbr-fallback-image").remove(),f){case "type":!0===d.parallax&&c(b.target);break;case "value":"image"===d.type&&!0===d.parallax&&c(b.target);break;case "parallax":!0===d.parallax&&c(b.target)}/^li1/.test(e)&&c(b.target,d,"img1");/^li2/.test(e)&&c(b.target,d,"img2");/^li3/.test(e)&&c(b.target,d,"img3");a(window).trigger("update.parallax")})):c(document.body),a(window).on("shown.bs.tab",function(b){a(window).trigger("update.parallax")}));
var f,e,n=0,g=null,m=!a.isMobile();a(window).scroll(function(){e&&clearTimeout(e);var b=a(window).scrollTop(),c=b<=n||m;n=b;if(g){var d=b>g.breakPoint;c?d!=g.fixed&&(m?(g.fixed=d,a(g.elm).toggleClass("is-fixed")):e=setTimeout(function(){g.fixed=d;a(g.elm).toggleClass("is-fixed")},40)):(g.fixed=!1,a(g.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(b){f&&clearTimeout(f);f=setTimeout(function(){g&&(g.fixed=!1,a(g.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){g=
{breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()});if(h)a(document).on("add.cards",function(a){d(a.target)});else d(document.body);
a(document).on("changeParameter.cards",function(b,c,e,f){if("bg"===c)switch(f){case "type":a(b.target).find(".mbr-background-video-preview").remove();"video"===e.type&&d(b.target);break;case "value":"video"===e.type&&(a(b.target).find(".mbr-background-video-preview").remove(),d(b.target))}});h||a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();h||a(document).click(function(b){try{var c=b.target;if(!a(c).parents().hasClass("carousel")){do if(c.hash){var e=
/#bottom|#top/g.test(c.hash);a(e?"body":c.hash).each(function(){b.preventDefault();var e=a(c).parents().hasClass("navbar-fixed-top")?60:0,e="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-e;a(this).hasClass("panel-collapse")||a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:e},800,"easeInOutCubic")});break}while(c=c.parentNode)}}catch(d){}});a(".cols-same-height .mbr-figure").each(function(){function b(){e.css({width:"",maxWidth:"",marginLeft:""});
if(g&&f){var a=g/f;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var n=d.height()/d.width();n>a&&(a=100*(n-a)/a,e.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),e=c.children("img"),d=c.parent(),f=e[0].width,g=e[0].height;e.one("load",function(){f=e[0].width;g=e[0].height;b()});a(window).on("resize",b);b()})});if(!h){if(a.fn.socialLikes)a(document).on("add.cards",function(b){a(b.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(b,
d,f){999<f&&a(".social-likes__counter",b.target).html(Math.floor(f/1E3)+"k")}).socialLikes({initHtml:!1})});a(document).on("add.cards",function(b){a(b.target).hasClass("mbr-reveal")&&a(b.target).footerReveal()});a(document).ready(function(){if(a.isMobile()){var b=this.querySelectorAll("section[data-bg-video]");[].forEach.call(b,function(a){(a=a.querySelector(".mbr-fallback-image"))&&a.classList.remove("disabled")})}else if(a("input[name=animation]").length){var c=function(a){if("none"!==a.parents(".carousel-item").css("display"))return!1;
var b=a.parents(".carousel-item").parent();if(b.find(".carousel-item.active .hidden.animated").lenght)return!1;if(1<b.attr("data-visible")){b=b.attr("data-visible");if(a.parents().is(".cloneditem-"+(b-1))&&a.parents(".cloneditem-"+(b-1)).attr("data-cloned-index")>=b)return!0;a.removeClass("animated hidden");return!1}return!0},d=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};a("input[name=animation]").remove();var f=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal-content")}).not(function(){return a(this).parents().is("form")&&
a(this).is("li")}).addClass("hidden animated"),b=a(window);b.on("scroll resize",function(){var b=document.documentElement.scrollTop||document.body.scrollTop,h=b+window.innerHeight-50;a.each(f,function(){var f=a(this),m=f[0],k=m.offsetHeight,m=d(m);if((m+k>=b&&m<=h||c(f))&&f.hasClass("hidden"))f.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){f.removeClass("animated fadeInUp")})})});b.trigger("scroll")}});a(".nav-dropdown").length&&
a(".nav-dropdown").swipe({swipeLeft:function(b,c,d,f,e){a(".navbar-close").click()}})}a(document).ready(function(){if(a(".mbr-arrow-up").length){var b=a("#scrollToTop"),c=a("body,html"),d=a(window);b.css("display","none");d.scroll(function(){0<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(){c.animate({scrollTop:0},400);return!1})}});if(!h)a(".mbr-arrow").on("click",function(b){b=a(b.target).closest("section").next();b.hasClass("engine")&&(b=b.closest("section").next());b=b.offset();
a("html, body").stop().animate({scrollTop:b.top},800,"linear")});if(a("nav.navbar").length){var p=a("nav.navbar").height();a(".mbr-after-navbar.mbr-fullscreen").css("padding-top",p+"px")}if(!h&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))a(document).on("add.cards",function(b){var c=a(b.target);if(c.hasClass("mbr-fullscreen"))a(window).on("load resize",function(){c.css("height","auto");c.outerHeight()<=a(window).height()&&c.css("height","1px")});
if(c.hasClass("mbr-slider")||c.hasClass("mbr-gallery"))c.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",width:"30px"}),c.hasClass("mbr-slider")&&c.find(".full-screen .slider-fullscreen-image").css("height","1px")});a(document).ready(function(){if(!h){var b=function(b){var d=a(b).parents("section").find("iframe"),f=1<d.length?d[1]:d[0],e=a(f).attr("src"),d=a(b).parents("section").find(a(b).attr("data-modal"));b.parents("section").css("z-index","5000");d.find("iframe, video").click(function(a){a.stopPropagation()});
if(e){if(-1!==e.indexOf("youtu")&&f.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==e.indexOf("vimeo")){var h=new Vimeo.Player(a(f));h.play()}}else(d=a(f).parents("section").find("video")[0])&&d.play&&d.play();a(b).parents("section").find(a(b).attr("data-modal")).css("display","table").click(function(){if(e)-1!==e.indexOf("youtu")&&f.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==e.indexOf("vimeo")&&h.pause();else{var d=
a(f).parents("section").find("video")[0];d&&d.pause&&d.pause()}a(this).css("display","none").off("click");b.parents("section").css("z-index","0")})};a(".modalWindow-video iframe").each(function(){var b=a(this).attr("data-src");a(this).removeAttr("data-src");var d=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);if(-1!==b.indexOf("youtu"))a(this).attr("src","https://youtube.com/embed/"+
d[6]+"?rel=0&enablejsapi=1");else if(-1!==b.indexOf("vimeo"))a(this).attr("src","https://player.vimeo.com/video/"+d[6]+"?autoplay=0&loop=0");else if(/\.(mp4|webm|ogg|ogv|m4a|m4v)$/.test(b)){d=document.createElement("video");d.onloadeddata=function(a){a.target.style.height=a.target.videoHeight>a.target.videoWidth?window.innerHeight-.2*window.innerHeight+"px":"100%"};var f=a(this).parents("section").find("img")[0];f&&d.setAttribute("poster",f.src);d.setAttribute("controls","");d.setAttribute("playsinline",
"");d.setAttribute("loop","");d.setAttribute("src",b);a(this).css("display","none");d.style.width="100%";a(this).after(d)}});a("[data-modal]").click(function(){b(a(this))})}});if(!h&&!a.isMobile()){var p=a("section.menu"),y=a(window).width();!p.find(".navbar").hasClass("collapsed")&&991<y&&(p.find("ul.navbar-nav li.dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}),p.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){a(this).hasClass("open")||
a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}))}a.fn.outerFind=function(a){return this.find(a).addBack(a)};h||("undefined"===typeof window.initClientPlugin&&0!=a(document.body).find(".clients").length&&(window.initClientPlugin=!0,a(document.body).find(".clients").each(function(b,c){a(this).attr("data-isinit")||(u(a(this)),v(a(this)))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=a(document.body).find("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=
!0,a("section.popup-btn-cards .card-wrapper").each(function(b,c){a(this).addClass("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=a(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,a(".testimonials-slider").each(function(){u(this)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,a(document).ready(function(){0!=a(".accordionStyles").length&&a('.accordionStyles .card-header a[role="button"]').each(function(){a(this).hasClass("collapsed")||
a(this).addClass("collapsed")})}),a('.accordionStyles .card-header a[role="button"]').click(function(){var b=a(this).closest(".accordionStyles").attr("id");a(this).closest(".card").find(".panel-collapse").hasClass("collapsing")||(-1!=b.indexOf("toggle")?a(this).hasClass("collapsed")?a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up"):a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down"):-1!=b.indexOf("accordion")&&(a(this).closest(".accordionStyles ").children(".card").each(function(){a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")}),
a(this).hasClass("collapsed")&&a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))})),"undefined"===typeof window.initTabsPlugin&&(window.initTabsPlugin=!0,w(document.body)),0!=a(".mbr-slider.carousel").length&&a(".mbr-slider.carousel").each(function(){var b=a(this),c=b.find(".carousel-control"),d=b.find(".carousel-indicators li");b.on("slide.bs.carousel",function(){c.bind("click",function(a){a.stopPropagation();a.preventDefault()});d.bind("click",function(a){a.stopPropagation();
a.preventDefault()});b.carousel({keyboard:!1})}).on("slid.bs.carousel",function(){c.unbind("click");d.unbind("click");b.carousel({keyboard:!0});1<b.find(".carousel-item.active").length&&(b.find(".carousel-item.active").eq(1).removeClass("active"),b.find(".carousel-control li.active").eq(1).removeClass("active"))})}));if(h)a(document).on("add.cards",function(b){a(b.target).find(".form-with-styler").length&&(b=a(b.target).find(".form-with-styler"),a(b).find('select:not("[multiple]")').each(function(){a(this).styler()}),
a(b).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")}),a(b).find("input[type=date]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(b).find("input[type=time]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"H:i",datepicker:!1})}))});else a("section .form-with-styler").each(function(){a(this).find('select:not("[multiple]")').each(function(){a(this).styler()});
a(this).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")});var b;b=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i)?!0:!1;!b&&a(this).datetimepicker&&(a(this).find("input[type=date]").each(function(){a(this).datetimepicker({format:"Y-m-d",
timepicker:!1})}),a(this).find("input[type=time]").each(function(){a(this).datetimepicker({format:"H:i",datepicker:!1})}))});a(document).on("change",'input[type="range"]',function(b){a(b.target).parents(".form-group").find(".value")[0].innerHTML=b.target.value});a(document).ready(function(){var b=a(".animated-elements1"),c=a(".animated-elements2"),d=a(".animated-elements3"),f=a(".animated-elements4"),e=a(".animated-elements5"),h=a(".animated-elements6"),g=a(window).width(),m=a(window).height();a(document).on("mousemove",
function(k){k=event.clientX;var p=event.clientY,l=0,q=0,r=0,t=0,l=g/2-k,q=m/2-p,r=g/2+k,t=m/2+p;a(b).css({transform:"translateX("+r/8+"px) translateY("+q/8+"px)"});a(c).css({transform:"translateX("+l/24+"px) translateY("+q/24+"px)"});a(d).css({transform:"translateX("+l/8+"px) translateY("+t/8+"px)"});a(f).css({transform:"translateX("+l/24+"px) translateY("+t/24+"px)"});a(e).css({transform:"translateX("+r/24+"px) translateY("+t/24+"px)"});a(h).css({transform:"translateX("+r/8+"px) translateY("+q/8+
"px)"})})})})(jQuery);
