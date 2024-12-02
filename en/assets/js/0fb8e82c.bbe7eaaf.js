"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5929],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,y=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const i={title:"Power of Two"},a=void 0,l={unversionedId:"bitwise-operations/power-of-two",id:"bitwise-operations/power-of-two",title:"Power of Two",description:"\u63cf\u8ff0",source:"@site/docs/bitwise-operations/power-of-two.md",sourceDirName:"bitwise-operations",slug:"/bitwise-operations/power-of-two",permalink:"/en/bitwise-operations/power-of-two",draft:!1,tags:[],version:"current",frontMatter:{title:"Power of Two"},sidebar:"docs",previous:{title:"Single Number III",permalink:"/en/bitwise-operations/single-number-iii"},next:{title:"Missing Number",permalink:"/en/bitwise-operations/missing-number"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.yg)("p",null,"Given an integer, write a function to determine if it is a power of two."),(0,o.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,o.yg)("p",null,"\u5982\u679c\u662f 2 \u7684\u5e42\uff0c\u5219\u4e8c\u8fdb\u5236\u7684\u6240\u6709\u4f4d\u4e2d\uff0c\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a 1\u3002"),(0,o.yg)("p",null,'\u53ef\u4ee5\u590d\u7528 "Number of 1 Bits" \u4e2d\u7684\u51fd\u6570\uff0c\u8ba1\u7b97\u51fa 1 \u7684\u4e2a\u6570\uff0c\u5982\u679c\u4e3a 1\uff0c\u5219\u8fd4\u56de true, \u4e0d\u4e3a 1\uff0c\u8fd4\u56de false\u3002'),(0,o.yg)("p",null,"\u8fd8\u6709\u66f4\u5de7\u5999\u7684\u529e\u6cd5\u3002\u5982\u679c\u4e00\u4e2a\u6570\u662f 2 \u7684\u5e42\uff0c\u5219\u5b83\u7684\u4e8c\u8fdb\u5236\u6700\u9ad8\u4f4d\u5fc5\u7136\u4e3a 1\uff0c\u5176\u4f59\u4e3a 0\uff0c\u6b64\u65f6\u5982\u679c\u6211\u4eec\u51cf 1 \u7684\u8bdd\uff0c\u6700\u9ad8\u4f4d\u964d\u4e3a 0\uff0c\u5176\u4f59\u4f4d\u53d8\u4e3a 1\uff0c\u5982\u679c\u628a\u4e24\u4e2a\u6570\u6309\u4f4d\u4e0e\uff0c\u7ed3\u679c\u5fc5\u7136\u4e3a 0\u3002"),(0,o.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"// Power of Two\n// Time Complexity: O(1), Space Complexity: O(1)\npublic class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n > 0 && (n & (n-1)) == 0;\n    }\n}\n")))}f.isMDXComponent=!0}}]);