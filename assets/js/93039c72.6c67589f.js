"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5746],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>c});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),k=l(t),c=s,u=k["".concat(i,".").concat(c)]||k[c]||N[c]||r;return t?n.createElement(u,p(p({ref:a},o),{},{components:t})):n.createElement(u,p({ref:a},o))}));function c(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=k;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m.mdxType="string"==typeof e?e:s,p[1]=m;for(var l=2;l<r;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7242:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>N,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const r={title:"\u7b80\u4ecb"},p=void 0,m={unversionedId:"sorting/radix-sort/README",id:"sorting/radix-sort/README",title:"\u7b80\u4ecb",description:"\u57fa\u6570\u6392\u5e8f\u662f\u4e00\u79cd\u975e\u6bd4\u8f83\u6392\u5e8f\u7b97\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(n)\u3002\u5b83\u7684\u4e3b\u8981\u601d\u8def\u662f\uff0c",source:"@site/docs/sorting/radix-sort/README.md",sourceDirName:"sorting/radix-sort",slug:"/sorting/radix-sort/",permalink:"/sorting/radix-sort/",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/radix-sort/README.md",tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"someSidebar",previous:{title:"H-Index",permalink:"/sorting/counting-sort/h-index"},next:{title:"Maximum Gap",permalink:"/sorting/radix-sort/maximum-gap"}},i={},l=[],o={toc:l};function N(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u57fa\u6570\u6392\u5e8f"),"\u662f\u4e00\u79cd\u975e\u6bd4\u8f83\u6392\u5e8f\u7b97\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662f",(0,s.kt)("inlineCode",{parentName:"p"},"O(n)"),"\u3002\u5b83\u7684\u4e3b\u8981\u601d\u8def\u662f\uff0c"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u5f85\u6392\u5e8f\u6574\u6570\uff08\u6ce8\u610f\uff0c\u5fc5\u987b\u662f\u975e\u8d1f\u6574\u6570\uff09\u7edf\u4e00\u4e3a\u4f4d\u6570\u76f8\u540c\u7684\u6574\u6570\uff0c\u4f4d\u6570\u8f83\u5c11\u7684\u524d\u9762\u8865\u96f6\u3002\u4e00\u822c\u7528 10 \u8fdb\u5236\uff0c\u4e5f\u53ef\u4ee5\u7528 16 \u8fdb\u5236\u751a\u81f3 2 \u8fdb\u5236\u3002\u6240\u4ee5\u524d\u63d0\u662f\u80fd\u591f\u627e\u5230\u6700\u5927\u503c\uff0c\u5f97\u5230\u6700\u957f\u7684\u4f4d\u6570\uff0c\u8bbe",(0,s.kt)("inlineCode",{parentName:"li"},"k"),"\u8fdb\u5236\u4e0b\u6700\u957f\u4e3a\u4f4d\u6570\u4e3a",(0,s.kt)("inlineCode",{parentName:"li"},"d"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u4ece\u6700\u4f4e\u4f4d\u5f00\u59cb\uff0c\u4f9d\u6b21\u8fdb\u884c\u4e00\u6b21",(0,s.kt)("strong",{parentName:"li"},"\u7a33\u5b9a\u6392\u5e8f"),"\u3002\u8fd9\u6837\u4ece\u6700\u4f4e\u4f4d\u4e00\u76f4\u5230\u6700\u9ad8\u4f4d\u6392\u5e8f\u5b8c\u6210\u4ee5\u540e\uff0c\u6574\u4e2a\u5e8f\u5217\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a\u6709\u5e8f\u5e8f\u5217\u3002")),(0,s.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6709\u4e00\u4e2a\u6574\u6570\u5e8f\u5217\uff0c0, 123, 45, 386, 106\uff0c\u4e0b\u9762\u662f\u6392\u5e8f\u8fc7\u7a0b\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u6392\u5e8f\uff0c\u4e2a\u4f4d\uff0c00",(0,s.kt)("strong",{parentName:"li"},"0")," 12",(0,s.kt)("strong",{parentName:"li"},"3")," 04",(0,s.kt)("strong",{parentName:"li"},"5")," 38",(0,s.kt)("strong",{parentName:"li"},"6")," 10",(0,s.kt)("strong",{parentName:"li"},"6"),"\uff0c\u65e0\u4efb\u4f55\u53d8\u5316"),(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b21\u6392\u5e8f\uff0c\u5341\u4f4d\uff0c0",(0,s.kt)("strong",{parentName:"li"},"0"),"0 1",(0,s.kt)("strong",{parentName:"li"},"0"),"6 1",(0,s.kt)("strong",{parentName:"li"},"2"),"3 0",(0,s.kt)("strong",{parentName:"li"},"4"),"5 3",(0,s.kt)("strong",{parentName:"li"},"8"),"6"),(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b21\u6392\u5e8f\uff0c\u767e\u4f4d\uff0c",(0,s.kt)("strong",{parentName:"li"},"0"),"00 ",(0,s.kt)("strong",{parentName:"li"},"0"),"45 ",(0,s.kt)("strong",{parentName:"li"},"1"),"06 ",(0,s.kt)("strong",{parentName:"li"},"1"),"23 ",(0,s.kt)("strong",{parentName:"li"},"3"),"86")),(0,s.kt)("p",null,"\u6700\u7ec8\u7ed3\u679c\uff0c0, 45, 106, 123, 386, \u6392\u5e8f\u5b8c\u6210\u3002"),(0,s.kt)("p",null,"\u4e3a\u4ec0\u4e48\u540c\u4e00\u6570\u4f4d\u7684\u6392\u5e8f\u5b50\u7a0b\u5e8f\u8981\u7528\u7a33\u5b9a\u6392\u5e8f\uff1f\u56e0\u4e3a\u7a33\u5b9a\u6392\u5e8f\u80fd\u5c06\u4e0a\u4e00\u6b21\u6392\u5e8f\u7684\u6210\u679c\u4fdd\u7559\u4e0b\u6765\u3002\u4f8b\u5982\u5341\u4f4d\u6570\u7684\u6392\u5e8f\u8fc7\u7a0b\u80fd\u4fdd\u7559\u4e2a\u4f4d\u6570\u7684\u6392\u5e8f\u6210\u679c\uff0c\u767e\u4f4d\u6570\u7684\u6392\u5e8f\u8fc7\u7a0b\u80fd\u4fdd\u7559\u5341\u4f4d\u6570\u7684\u6392\u5e8f\u6210\u679c\u3002"),(0,s.kt)("p",null,"\u80fd\u4e0d\u80fd\u7528 2 \u8fdb\u5236\uff1f\u80fd\uff0c\u53ef\u4ee5\u628a\u5f85\u6392\u5e8f\u5e8f\u5217\u4e2d\u7684\u6bcf\u4e2a\u6574\u6570\u90fd\u770b\u6210\u662f 01 \u7ec4\u6210\u7684\u4e8c\u8fdb\u5236\u6570\u503c\u3002\u90a3\u8fd9\u6837\u7684\u8bdd\uff0c\u5c82\u4e0d\u662f\u4efb\u610f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u5e8f\u5217\u90fd\u53ef\u4ee5\u7528\u57fa\u6570\u6392\u5e8f\u7b97\u6cd5\uff1f\u7406\u8bba\u4e0a\u662f\u7684\uff0c\u5047\u8bbe\u5f85\u6392\u5e8f\u5e8f\u5217\u4e2d\u6700\u5927\u6574\u6570\u4e3a",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"6")),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^64-1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"6")))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),"\uff0c\u5219\u6700\u5927\u4f4d\u6570",(0,s.kt)("inlineCode",{parentName:"p"},"d=64"),"\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"O(64n)"),"\u3002\u53ef\u89c1\u4efb\u610f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u5e8f\u5217\u90fd\u53ef\u4ee5\u5728\u7ebf\u6027\u65f6\u95f4\u5185\u5b8c\u6210\u6392\u5e8f\u3002"),(0,s.kt)("p",null,"\u65e2\u7136\u4efb\u610f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u5e8f\u5217\u90fd\u53ef\u4ee5\u5728\u7ebf\u6027\u65f6\u95f4\u5185\u5b8c\u6210\u6392\u5e8f\uff0c\u90a3\u4e48\u57fa\u4e8e\u6bd4\u8f83\u6392\u5e8f\u7684\u7b97\u6cd5\u6709\u4ec0\u4e48\u610f\u4e49\u5462\uff1f\u57fa\u4e8e\u6bd4\u8f83\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662f",(0,s.kt)("inlineCode",{parentName:"p"},"O(nlogn)"),"\uff0c\u770b\u8d77\u6765\u6bd4",(0,s.kt)("inlineCode",{parentName:"p"},"O(64n)"),"\u6162\uff0c\u4ed4\u7ec6\u4e00\u60f3\uff0c\u5176\u5b9e\u4e0d\u662f\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"O(nlogn)"),"\u53ea\u6709\u5f53\u5e8f\u5217\u975e\u5e38\u957f\uff0c\u8fbe\u5230",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"64"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{64}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"64"))))))))))))),"\u4e2a\u5143\u7d20\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u4e0e",(0,s.kt)("inlineCode",{parentName:"p"},"O(64n)"),"\u76f8\u7b49\uff0c\u56e0\u6b64\uff0c64 \u8fd9\u4e2a\u5e38\u6570\u7cfb\u6570\u592a\u5927\u4e86\uff0c\u5927\u90e8\u5206\u65f6\u5019\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"\u8fdc\u8fdc\u5c0f\u4e8e",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"64"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{64}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"64"))))))))))))),"\uff0c\u57fa\u4e8e\u6bd4\u8f83\u7684\u6392\u5e8f\u7b97\u6cd5\u8fd8\u662f\u6bd4",(0,s.kt)("inlineCode",{parentName:"p"},"O(64n)"),"\u5feb\u7684\u3002"),(0,s.kt)("p",null,"\u5f53\u4f7f\u7528 2 \u8fdb\u5236\u65f6\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"k=2"),"\u6700\u5c0f\uff0c\u4f4d\u6570",(0,s.kt)("inlineCode",{parentName:"p"},"d"),"\u6700\u5927\uff0c\u65f6\u95f4\u590d\u6742\u5ea6",(0,s.kt)("inlineCode",{parentName:"p"},"O(nd)"),"\u4f1a\u53d8\u5927\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,s.kt)("inlineCode",{parentName:"p"},"O(n+k)"),"\u4f1a\u53d8\u5c0f\u3002\u5f53\u7528\u6700\u5927\u503c\u4f5c\u4e3a\u57fa\u6570\u65f6\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"k=maxV"),"\u6700\u5927\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"d=1"),"\u6700\u5c0f\uff0c\u6b64\u65f6\u65f6\u95f4\u590d\u6742\u5ea6",(0,s.kt)("inlineCode",{parentName:"p"},"O(nd)"),"\u53d8\u5c0f\uff0c\u4f46\u662f\u7a7a\u95f4\u590d\u6742\u5ea6",(0,s.kt)("inlineCode",{parentName:"p"},"O(n+k)"),"\u4f1a\u6025\u5267\u589e\u5927\uff0c\u6b64\u65f6",(0,s.kt)("strong",{parentName:"p"},"\u57fa\u6570\u6392\u5e8f\u9000\u5316\u6210\u4e86\u8ba1\u6570\u6392\u5e8f"),"\u3002"))}N.isMDXComponent=!0}}]);