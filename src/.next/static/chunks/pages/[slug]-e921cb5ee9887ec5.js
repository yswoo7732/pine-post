(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1587:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return c(7982)}])},455:function(d,b,a){"use strict";var e=a(5893),f=a(2899),c=a(9008),g=a.n(c);b.Z=function(a){var b;return(0,e.jsxs)(g(),{children:[(0,e.jsx)("title",{children:null!==(b=a.title)&& void 0!==b?b:"\uD22C\uC790 \uCF58\uD150\uCE20"}),(0,e.jsx)("meta",{charSet:"UTF-8"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, viewport-fit=cover"}),(0,e.jsx)("meta",{name:"description",content:a.description}),(0,e.jsx)("meta",{property:"og:type",content:a.type}),(0,e.jsx)("meta",{property:"og:title",content:a.title}),(0,e.jsx)("meta",{property:"og:description",content:a.description}),(0,e.jsx)("meta",{property:"og:url",content:a.url}),f.CONFIG.lang&&(0,e.jsx)("meta",{property:"og:locale",content:f.CONFIG.lang}),a.image&&(0,e.jsx)("meta",{property:"og:image",content:a.image}),(0,e.jsx)("meta",{name:"twitter:title",content:a.title}),(0,e.jsx)("meta",{name:"twitter:description",content:a.description}),(0,e.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),a.image&&(0,e.jsx)("meta",{name:"twitter:image",content:a.image}),"Post"===a.type&&(0,e.jsx)(e.Fragment,{})]})}},1407:function(d,c,a){"use strict";a.d(c,{Bk:function(){return e},YG:function(){return f}});var b=a(825);(0,b.OP)();var e=(0,b.OP)()?"hamcpine://share?&what=web&value=".concat(document.location.origin):"",f="https://pine.onelink.me/vnSX/zp4sz8vu"},4886:function(c,a,b){"use strict";b.d(a,{E:function(){return d}});var d={scheme:function(){return["scheme"]},posts:function(){return["posts"]},recommend:function(){return["recommend"]},tags:function(){return["tags"]},categories:function(){return["categories"]},filter:function(a){return["filter",a]},post:function(a){return["post",a]},block:function(a){return["block",a]}}},825:function(c,a,b){"use strict";function d(){return!!window.navigator.userAgent.match(/PINE/)}b.d(a,{OP:function(){return d}})},7982:function(n,d,a){"use strict";a.r(d),a.d(d,{"__N_SSP":function(){return O},default:function(){return P}});var e,f,o,p=a(1799),q=a(5893),r=a(7294),s=a(1163),t=a(4886),u=a(6492),b=a(7568),g=a(4051),c=a.n(g),v=(e=(0,b.Z)(c().mark(function a(b){var d;return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("/api/getPagesData?id=".concat(b));case 3:if((d=a.sent).ok){a.next=6;break}throw Error("HTTP error! Status: ".concat(d.status));case 6:return a.next=8,d.json();case 8:return a.abrupt("return",a.sent);case 11:a.prev=11,a.t0=a.catch(0),console.error("Error in getPagesData:",a.t0);case 14:case"end":return a.stop()}},a,null,[[0,11]])})),function(a){return e.apply(this,arguments)}),w=(f=(0,b.Z)(c().mark(function a(b){var d;return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("/api/getBlocksData?id=".concat(b));case 3:if((d=a.sent).ok){a.next=6;break}throw Error("HTTP error! Status: ".concat(d.status));case 6:return a.next=8,d.json();case 8:return a.abrupt("return",a.sent);case 11:a.prev=11,a.t0=a.catch(0),console.error("Error in getBlocksData:",a.t0);case 14:case"end":return a.stop()}},a,null,[[0,11]])})),function(a){return f.apply(this,arguments)});(0,b.Z)(c().mark(function a(){var b;return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("getCategory index"),a.prev=1,a.next=4,fetch("/api/getCategoryData");case 4:if(b=a.sent,console.log(b),b.ok){a.next=8;break}throw Error("HTTP error! Status: ".concat(b.status));case 8:return a.next=10,b.json();case 10:return a.abrupt("return",a.sent);case 13:a.prev=13,a.t0=a.catch(1),console.error("Error in getCategory:",a.t0);case 16:case"end":return a.stop()}},a,null,[[1,13]])}));var x=function(){var a=(0,s.useRouter)().query.id;return(0,u.a)({queryKey:t.E.post(a),queryFn:function(){return v(a)}}).data},y=function(){var a=(0,s.useRouter)().query.id;return(0,u.a)({queryKey:t.E.block(a),queryFn:function(){return w(a)}}).data},z=a(455),A=a(2899),B=a(7297),h=a(1664),C=a.n(h),i=a(5675),D=a.n(i),j=a(6999),E=a.n(j),F=a(825),G={getAccessToken:function(a){/Android/i.test(window.navigator.userAgent)?window.AosConnector.getAccessToken("callbackAccessToken"):/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.getAccessToken.postMessage("callbackAccessToken"),window.callbackAccessToken=function(b){a(b)}},setUrlAfterAccOpen:function(){var a=document.location.href;/Android/i.test(window.navigator.userAgent)&&window.AosConnector.setUrlAfterAccountOpening("".concat(a)),/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.setUrlAfterAccountOpening.postMessage("".concat(a))},setTitleBar:function(a){/Android/i.test(window.navigator.userAgent)?window.AosConnector.setTitleBar(a):/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.setTitleBar.postMessage(a)},setTitleBarWithColor:function(b,c){var a=JSON.stringify({title:b,bgColor:c});/Android/i.test(window.navigator.userAgent)?window.AosConnector.setTitleBarWithColor(a):/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.setTitleBarWithColor.postMessage(a)},onResponseError:function(b){var a=JSON.stringify(b);/Android/i.test(window.navigator.userAgent)&&window.AosConnector.onResponseError(a),/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.onResponseError.postMessage(a)},sendAppsFlyerLog:function(a,b){/Android/i.test(window.navigator.userAgent)&&window.AosConnector.sendAppsFlyerLog(a,b),/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.sendAppsFlyerLog.postMessage(a+"+"+b)},requestExitMenu:function(){/Android/i.test(window.navigator.userAgent)?window.AosConnector.requestExitMenu():/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.requestExitMenu.postMessage("")},useGoback:function(a){/Android/i.test(window.navigator.userAgent)?window.AosConnector.useGoBack(a):/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.useGoBack.postMessage(a)},shareContents:function(a){/Android/i.test(window.navigator.userAgent)?window.AosConnector.shareContents(a):/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.shareContents.postMessage(a)},hideTitleBar:function(){/Android/i.test(window.navigator.userAgent)&&window.AosConnector.hideTitleBar(),/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.hideTitleBar.postMessage("")},showInvestmentCheck:function(a){/Android/i.test(window.navigator.userAgent)?window.AosConnector.showInvestmentCheck(a):/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&window.webkit.messageHandlers.showInvestmentCheck.postMessage(a)}},k=a(2545);function l(){var a=(0,B.Z)(["\nposition: relative;\npadding: 1rem 0;\nwidth: 100%;\nheight: 100%;\n  & > span {\n    position: unset !important;\n    & .autoImage {\n      object-fit: contain !important;\n      position: relative !important;\n      height: auto !important;\n    }\n"]);return l=function(){return a},a}var H=k.Z.figure(l()),I=function(b){var a=b.text;return a?a.map(function(c,d){var a=c.annotations,e=a.bold,f=a.code,g=a.color,h=a.italic,i=a.strikethrough,j=a.underline,b=c.text;return(0,q.jsx)("span",{className:[e?"font-bold":"font-medium",f?E().code:"",h?"italic":"",i?"strikethrough":"",j?"underline":"",E()["".concat(g)],].join(" "),children:b.link?(0,q.jsx)("a",{href:b.link.url,children:b.content}):b.content},d)}):null},J=function(d){var b,c,e=d.type,a=d[e];return a?"numbered_list_item"===a.children[0].type?(0,q.jsx)("ol",{children:null===(c=a.children)|| void 0===c?void 0:c.map(function(a){return K(a)})}):(0,q.jsx)("ul",{children:null===(b=a.children)|| void 0===b?void 0:b.map(function(a){return K(a)})}):null},K=function(b){var d,i=b.type,c=b.id,a=b[i];switch(i){case"paragraph":return a.rich_text.length>0?(0,q.jsx)("p",{className:"mb-2 text-base font-medium",children:(0,q.jsx)(I,{text:a.rich_text})}):(0,q.jsx)("br",{});case"heading_1":return(0,q.jsx)("h1",{className:"mt-12 mb-5",children:(0,q.jsx)(I,{text:a.rich_text})});case"heading_2":return(0,q.jsx)("h2",{className:"mt-1 mb-2",children:(0,q.jsx)(I,{text:a.rich_text})});case"heading_3":return(0,q.jsx)("h3",{className:"mt-1 mb-2",children:(0,q.jsx)(I,{text:a.rich_text})});case"bulleted_list":return(0,q.jsx)("ul",{children:null===(t=a.children)|| void 0===t?void 0:t.map(function(a){return K(a)})});case"numbered_list":return(0,q.jsx)("ol",{children:null===(u=a.children)|| void 0===u?void 0:u.map(function(a){return K(a)})});case"bulleted_list_item":case"numbered_list_item":return(0,q.jsxs)("li",{children:[(0,q.jsx)(I,{text:a.rich_text}),!!a.children&&J(b)]},b.id);case"to_do":return(0,q.jsx)("div",{children:(0,q.jsxs)("label",{htmlFor:c,children:[(0,q.jsx)("input",{type:"checkbox",id:c,defaultChecked:a.checked})," ",(0,q.jsx)(I,{text:a.rich_text})]})});case"toggle":return(0,q.jsxs)("details",{children:[(0,q.jsx)("summary",{children:(0,q.jsx)(I,{text:a.rich_text})}),null===(v=b.children)|| void 0===v?void 0:v.map(function(a){return(0,q.jsx)(r.Fragment,{children:K(a)},a.id)})]});case"child_page":return(0,q.jsxs)("div",{className:E().childPage,children:[(0,q.jsx)("strong",{children:a.title}),null===(w=b.children)|| void 0===w?void 0:w.map(function(a){return K(a)})]});case"image":var t,u,v,w,e,n="external"===a.type?a.external.url:a.file.url,f=a.caption?null===(e=a.caption[0])|| void 0===e?void 0:e.plain_text:"";return(0,q.jsxs)(H,{children:[(0,q.jsx)(D(),{src:n,alt:f,className:"autoImage",layout:"fill",unoptimized:!0,priority:!0,placeholder:"blur",blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAFUCAQAAAAJsv8dAAABs0lEQVR42u3QMREAAAgEIL9/RrNoCDcPIpCe4iACBQoUKBCBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUKBAgQIFChSIQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFChQoECBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUCACBQoUKFCgQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFPjFAtP2eaPnAr3uAAAAAElFTkSuQmCC"}),f&&(0,q.jsx)("figcaption",{className:"text-sm font-normal text-neutral-70",children:f})]});case"divider":return(0,q.jsx)("hr",{className:"mt-2 mb-7 h-[2px] bg-neutral-30"},c);case"quote":return(0,q.jsx)("blockquote",{className:"border-l-4 border-l-black pl-2 font-medium",children:(0,q.jsx)(I,{text:null===(x=a.rich_text)|| void 0===x?void 0:x.map(function(a){return a})})},c);case"callout":return(0,q.jsx)("div",{className:E().pre,children:(0,q.jsx)(I,{text:null===(y=a.rich_text)|| void 0===y?void 0:y.map(function(a){return a})})});case"file":var x,y,g,j="external"===a.type?a.external.url:a.file.url,k=j.split("/"),o=k[k.length-1],l=a.caption?null===(g=a.caption[0])|| void 0===g?void 0:g.plain_text:"";return(0,q.jsxs)("figure",{children:[(0,q.jsxs)("div",{className:E().file,children:["\uD83D\uDCCE"," ",(0,q.jsx)(C(),{href:j,passHref:!0,legacyBehavior:!0,children:(0,q.jsx)("a",{onClick:function(){(0,F.OP)()&&G.sendAppsFlyerLog("af_content_view",{af_action_type:"link",af_content_id:j})},children:o.split("?")[0]})})]}),l&&(0,q.jsx)("figcaption",{children:l})]});case"bookmark":var m=a.url;return(0,q.jsx)("a",{href:m,target:"_brank",className:E().bookmark,children:m});case"table":return(0,q.jsx)("table",{className:E().table,children:(0,q.jsx)("tbody",{children:null===(z=b.children)|| void 0===z?void 0:z.map(function(d,e){var b,c,f=a.has_column_header&&0==e?"th":"td";return(0,q.jsx)("tr",{children:null===(b=d.table_row)|| void 0===b?void 0:null===(c=b.cells)|| void 0===c?void 0:c.map(function(a,b){return(0,q.jsx)(f,{children:(0,q.jsx)(I,{text:a})},"".concat(a.plain_text,"-").concat(b))})},d.id)})})});case"column_list":return(0,q.jsx)("div",{className:E().row,children:null===(A=b.children)|| void 0===A?void 0:A.map(function(a){return K(a)})});case"column":return(0,q.jsx)("div",{children:null===(B=b.children)|| void 0===B?void 0:B.map(function(a){return K(a)})});case"video":var z,A,B,h,p="external"===a.type?a.external.url:a.file.url,s=a.caption?null===(h=a.caption[0])|| void 0===h?void 0:h.plain_text:"";return(0,q.jsx)("div",{className:"mb-5 text-base font-medium min-w-full min-h-0 pb-[56.25%] relative",children:(0,q.jsx)("iframe",{src:p,title:s,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},frameBorder:"0",allowFullScreen:!0})});case"code":return(0,q.jsx)("div",{className:"my-5",children:(0,q.jsx)("span",{className:"font-medium text-xs text-neutral-70",children:null===(d=a.rich_text)|| void 0===d?void 0:d.map(function(a){return a.plain_text})})});default:return}},L=function(a){var c=a.onClick,b=a.text;return(0,q.jsx)("button",{className:" bg-neutral-100 text-center text-neutral-10 h-15 rounded-[10px] min-w-full active:bg-neutral-90",onClick:c,children:null!=b?b:"\uB354 \uB9CE\uC740 \uCEE8\uD150\uCE20 \uBCF4\uAE30"})},m=a(7484),M=a.n(m),N=a(1407),O=!0,P=function(n){var b,c,d,e,f,g,h,i,j,k,o=n.pid,a=x(),l=y(),v=(0,s.useRouter)(),m=null==a?void 0:null===(b=a.properties)|| void 0===b?void 0:b.Tags.multi_select.map(function(a){return{id:a.id,name:a.name}}),t=null!==(k=A.CONFIG.ogImageGenerateURL)&& void 0!==k?k:"".concat(A.CONFIG.ogImageGenerateURL,"/").concat(encodeURIComponent(""),".png"),u={title:(null==a?void 0:a.properties.Name.title[0].plain_text)||"",image:(null===(c=null==a?void 0:a.properties.thumbnail.files)|| void 0===c?void 0:null===(d=c[0])|| void 0===d?void 0:null===(e=d.file)|| void 0===e?void 0:e.url)||(null===(f=null==a?void 0:a.properties.thumbnail.files)|| void 0===f?void 0:null===(g=f[0])|| void 0===g?void 0:g.name)||t,description:(null===(h=null==a?void 0:a.properties.description.rich_text[0])|| void 0===h?void 0:h.plain_text)||A.CONFIG.blog.description,type:"website",url:"".concat(A.CONFIG.link,"/").concat(null==a?void 0:a.properties.slug.rich_text[0].plain_text,"?id=").concat(o)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(z.Z,(0,p.Z)({},u)),a&&(0,q.jsx)("article",{children:(0,q.jsxs)("div",{className:"p-container px-container",children:[(0,q.jsx)("h1",{className:"py-2",children:null==a?void 0:a.properties.Name.title[0].plain_text}),(0,q.jsx)("p",{className:"text-neutral-60 my-2 text-sm font-normal",children:M()((null==a?void 0:a.last_edited_time)||(null==a?void 0:a.created_time)).format("YYYY-MM-DD")}),(0,q.jsx)("section",{children:l&&(null==l?void 0:null===(i=l.results)|| void 0===i?void 0:i.map(function(a){return(0,q.jsx)(r.Fragment,{children:K(a)},a.id)}))}),(0,q.jsxs)("section",{className:"pb-32",children:[(0,q.jsx)("div",{className:"flex gap-2 mb-8 flex-wrap",children:m&&(null==m?void 0:m.map(function(a,b){return(0,F.OP)()&&(0,q.jsx)("button",{className:"font-medium text-neutral-60 border-solid border border-neutral-20 rounded-2xl py-1 px-3 active:bg-neutral-100 active:text-neutral-10",onClick:function(){v.push("/feed?id=".concat(a.name,"&property=Tags&title=").concat(a.name)),G.sendAppsFlyerLog("af_content_view",{af_action_type:"tag",af_content_id:"".concat(a.name)})},children:a.name},b)}))}),a.properties.button_link.rich_text.length>0&&(0,q.jsx)(L,{onClick:function(){(0,F.OP)()?(G.sendAppsFlyerLog("af_content_view",{af_action_type:"button",af_content_id:a.properties.button_link.rich_text[0].plain_text}),window.location.href=a.properties.button_link.rich_text[0].plain_text):window.location.href=N.YG},text:null===(j=a.properties.button_name.rich_text[0])|| void 0===j?void 0:j.plain_text})]})]})})]})}},2899:function(a,d,b){"use strict";var c={blog:{title:"\uC624\uB298\uB3C4 \uD589\uBCF5\uD55C \uD22C\uC790! \uD30C\uC778 \uD1A1\uD1A1",description:"\uC624\uB298\uB3C4 \uD589\uBCF5\uD55C \uD22C\uC790! \uD30C\uC778 PINE \uD1A1\uD1A1"},link:b(3454).env.SITE_URL||"https://post.pine.fund",since:2023,lang:"ko-KR",ogImageGenerateURL:"https://kr.object.fin-ncloudstorage.com/mkt/pine_toktok_og_1200.png",revalidateTime:1200};a.exports={CONFIG:c}},6999:function(a){a.exports={container:"post_container__wfh5c",name:"post_name__VR6_g",back:"post_back__qcUHA",bold:"post_bold__L_Aqp",code:"post_code__LgCH9",italic:"post_italic__YeZBg",pre:"post_pre__k2Sog",code_block:"post_code_block__gMmFH",file:"post_file__W2GkG",strikethrough:"post_strikethrough__ShGn5",underline:"post_underline__MSG24",bookmark:"post_bookmark__Fdvck",table:"post_table__n_qOr",row:"post_row__LSxz_",childPage:"post_childPage__P2Fc4",callout:"post_callout__sgzkI",callout__content:"post_callout__content__3C0Dg","semantic-string":"post_semantic-string__6fEBn","callout-link":"post_callout-link__792tr",blue:"post_blue__qALyK",blue_background:"post_blue_background__4Yihm",brown:"post_brown__BlsW7",brown_background:"post_brown_background__Fq1d7",gray:"post_gray__wDylT",gray_background:"post_gray_background__zTHXb",green:"post_green__9i6_J",green_background:"post_green_background__rov9I",orange:"post_orange__Sv7_d",orange_background:"post_orange_background__3U2Bk",pink:"post_pink__0ZUDC",pink_background:"post_pink_background__DY8DC",purple:"post_purple__l7iCH",purple_background:"post_purple_background__hJgDO",red:"post_red__dr_qy",red_background:"post_red_background__AHf7h",yellow:"post_yellow__z92ZE",yellow_background:"post_yellow_background__gDsqb"}}},function(a){a.O(0,[675,296,242,774,888,179],function(){var b;return a(a.s=1587)}),_N_E=a.O()}])