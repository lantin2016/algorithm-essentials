"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={title:"\u7b80\u4ecb"},l=void 0,a={unversionedId:"linked-list/fast-slow-pointers",id:"linked-list/fast-slow-pointers",title:"\u7b80\u4ecb",description:"\u5728\u5355\u94fe\u8868\u7684\u9898\u76ee\u91cc\uff0c\u5feb\u6162\u6307\u9488\u662f\u7ecf\u5e38\u7528\u5230\u7684\u4e00\u4e2a\u6280\u5de7\u3002\u6240\u8c13\u5feb\u6162\u6307\u9488\uff0c\u5c31\u662f\u4e24\u4e2a\u6307\u9488\u540c\u5411\u800c\u884c\uff0c\u4e00\u5feb\u4e00\u6162\u3002\u6709\u4e24\u79cd\u5e38\u89c1\u5f62\u5f0f\uff1a",source:"@site/docs/linked-list/fast-slow-pointers.md",sourceDirName:"linked-list",slug:"/linked-list/fast-slow-pointers",permalink:"/linked-list/fast-slow-pointers",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linked-list/fast-slow-pointers.md",tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"someSidebar",previous:{title:"\u8282\u70b9\u5b9a\u4e49",permalink:"/linked-list/"},next:{title:"Linked List Cycle",permalink:"/linked-list/linked-list-cycle"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u5355\u94fe\u8868\u7684\u9898\u76ee\u91cc\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5feb\u6162\u6307\u9488"),"\u662f\u7ecf\u5e38\u7528\u5230\u7684\u4e00\u4e2a\u6280\u5de7\u3002\u6240\u8c13\u5feb\u6162\u6307\u9488\uff0c\u5c31\u662f\u4e24\u4e2a\u6307\u9488\u540c\u5411\u800c\u884c\uff0c\u4e00\u5feb\u4e00\u6162\u3002\u6709\u4e24\u79cd\u5e38\u89c1\u5f62\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6307\u9488\u540c\u65f6\u51fa\u53d1\uff0c\u6162\u6307\u9488\u6bcf\u6b21\u8d70\u4e00\u6b65\uff0c\u5feb\u6307\u9488\u6bcf\u6b21\u8d70\u4e24\u6b65"),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6307\u9488\u4e0d\u662f\u540c\u65f6\u51fa\u53d1\uff0c\u5feb\u6307\u9488\u5148\u51fa\u53d1\uff0c\u6162\u6307\u9488\u540e\u51fa\u53d1")))}u.isMDXComponent=!0}}]);