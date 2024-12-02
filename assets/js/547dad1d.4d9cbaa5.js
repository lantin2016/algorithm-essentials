"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1053],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,d=u["".concat(s,".").concat(y)]||u[y]||f[y]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const i={title:"\u7b80\u4ecb"},l=void 0,a={unversionedId:"linked-list/fast-slow-pointers",id:"linked-list/fast-slow-pointers",title:"\u7b80\u4ecb",description:"\u5728\u5355\u94fe\u8868\u7684\u9898\u76ee\u91cc\uff0c\u5feb\u6162\u6307\u9488\u662f\u7ecf\u5e38\u7528\u5230\u7684\u4e00\u4e2a\u6280\u5de7\u3002\u6240\u8c13\u5feb\u6162\u6307\u9488\uff0c\u5c31\u662f\u4e24\u4e2a\u6307\u9488\u540c\u5411\u800c\u884c\uff0c\u4e00\u5feb\u4e00\u6162\u3002\u6709\u4e24\u79cd\u5e38\u89c1\u5f62\u5f0f\uff1a",source:"@site/docs/linked-list/fast-slow-pointers.md",sourceDirName:"linked-list",slug:"/linked-list/fast-slow-pointers",permalink:"/linked-list/fast-slow-pointers",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"docs",previous:{title:"\u5355\u94fe\u8868",permalink:"/linked-list/"},next:{title:"Linked List Cycle",permalink:"/linked-list/linked-list-cycle"}},s={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u5728\u5355\u94fe\u8868\u7684\u9898\u76ee\u91cc\uff0c",(0,o.yg)("strong",{parentName:"p"},"\u5feb\u6162\u6307\u9488"),"\u662f\u7ecf\u5e38\u7528\u5230\u7684\u4e00\u4e2a\u6280\u5de7\u3002\u6240\u8c13\u5feb\u6162\u6307\u9488\uff0c\u5c31\u662f\u4e24\u4e2a\u6307\u9488\u540c\u5411\u800c\u884c\uff0c\u4e00\u5feb\u4e00\u6162\u3002\u6709\u4e24\u79cd\u5e38\u89c1\u5f62\u5f0f\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4e24\u4e2a\u6307\u9488\u540c\u65f6\u51fa\u53d1\uff0c\u6162\u6307\u9488\u6bcf\u6b21\u8d70\u4e00\u6b65\uff0c\u5feb\u6307\u9488\u6bcf\u6b21\u8d70\u4e24\u6b65"),(0,o.yg)("li",{parentName:"ul"},"\u4e24\u4e2a\u6307\u9488\u4e0d\u662f\u540c\u65f6\u51fa\u53d1\uff0c\u5feb\u6307\u9488\u5148\u51fa\u53d1\uff0c\u6162\u6307\u9488\u540e\u51fa\u53d1")))}f.isMDXComponent=!0}}]);