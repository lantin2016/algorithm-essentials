"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1602],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),g=i,y=m["".concat(p,".").concat(g)]||m[g]||c[g]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(96540),t(15680));const a={title:"Bitwise AND of Numbers Range"},o=void 0,l={unversionedId:"bitwise-operations/bitwise-and-of-numbers-range",id:"bitwise-operations/bitwise-and-of-numbers-range",title:"Bitwise AND of Numbers Range",description:"\u63cf\u8ff0",source:"@site/docs/bitwise-operations/bitwise-and-of-numbers-range.md",sourceDirName:"bitwise-operations",slug:"/bitwise-operations/bitwise-and-of-numbers-range",permalink:"/bitwise-operations/bitwise-and-of-numbers-range",draft:!1,tags:[],version:"current",frontMatter:{title:"Bitwise AND of Numbers Range"},sidebar:"docs",previous:{title:"Maximum Product of Word Lengths",permalink:"/bitwise-operations/maximum-product-of-word-lengths"},next:{title:"Power of Three",permalink:"/simulation/power-of-three"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1",id:"\u89e3\u6cd5-1",level:3},{value:"\u89e3\u6cd5 2",id:"\u89e3\u6cd5-2",level:3}],u={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.yg)("p",null,"Given a range ",(0,i.yg)("inlineCode",{parentName:"p"},"[m, n]")," where ",(0,i.yg)("inlineCode",{parentName:"p"},"0 <= m <= n <= 2147483647"),", return the bitwise AND of all numbers in this range, inclusive."),(0,i.yg)("p",null,"For example, given the range ",(0,i.yg)("inlineCode",{parentName:"p"},"[5, 7]"),", you should return ",(0,i.yg)("inlineCode",{parentName:"p"},"4"),"."),(0,i.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.yg)("p",null,"\u6700\u7b80\u5355\u7684\u89e3\u6cd5\uff0c\u904d\u5386\u6240\u6709\u6570\uff0c\u4e0d\u65ad\u8fdb\u884c\u6309\u4f4d\u4e0e\uff0c\u65f6\u95f4\u590d\u6742\u5ea6",(0,i.yg)("inlineCode",{parentName:"p"},"O(n)"),"\u3002\u8fd9\u4e2a\u505a\u6cd5\u592a\u6162\uff0c\u4e0d\u53ef\u63a5\u53d7\u3002"),(0,i.yg)("p",null,"\u5148\u89c2\u5bdf ",(0,i.yg)("inlineCode",{parentName:"p"},"[5,7]"),"\u8fd9\u4e2a\u4f8b\u5b50\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"5,6,7"),"\u7684\u4e8c\u8fdb\u5236\u5982\u4e0b\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"101\n110\n111\n")),(0,i.yg)("p",null,"\u4e09\u4e2a\u6570\u6309\u4f4d\u4e0e\u540e\u7ed3\u679c\u4e3a 0\uff0c\u4ed4\u7ec6\u89c2\u5bdf\u8fd9\u4e2a\u8fc7\u7a0b\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\uff0c\u6700\u540e\u7684\u7ed3\u679c\u662f\u8be5\u8303\u56f4\u5185\u6240\u6709\u6570\u7684\u5de6\u8fb9\u7684\u5171\u540c\u90e8\u5206\uff0c\u5373\u516c\u5171\u5de6\u8fb9\u9996\u90e8(left header)\u3002"),(0,i.yg)("p",null,"\u6211\u4eec\u518d\u4e3e\u4e00\u4e2a\u66f4\u5927\u7684\u4f8b\u5b50\u6765\u611f\u53d7\u4e00\u4e0b\uff0c\u4f8b\u5982",(0,i.yg)("inlineCode",{parentName:"p"},"[26,30]"),"\uff0c\u8fd9\u4e9b\u6570\u7684\u4e8c\u8fdb\u5236\u5982\u4e0b\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"11010\n11011\n11100\n11101\n11110\n")),(0,i.yg)("p",null,"\u6700\u540e\u7684\u7ed3\u679c\u662f",(0,i.yg)("inlineCode",{parentName:"p"},"11000"),"\uff0c\u679c\u7136\u662f\u516c\u5171\u5de6\u8fb9\u9996\u90e8\u3002"),(0,i.yg)("p",null,"\u53d1\u73b0\u4e86\u89c4\u5f8b\u540e\uff0c\u8fd9\u9898\u5c31\u7b80\u5355\u4e86\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5199\u4ee3\u7801\u627e\u5230\u516c\u5171\u5de6\u8fb9\u9996\u90e8\u5373\u53ef\u3002"),(0,i.yg)("h3",{id:"\u89e3\u6cd5-1"},"\u89e3\u6cd5 1"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"// Bitwise AND of Numbers Range\n// Time Complexity: O(log n), Space Complexity: O(1)\npublic class Solution {\n    public int rangeBitwiseAnd(int m, int n) {\n        int mask = Integer.MAX_VALUE;\n\n        while ((m & mask) != (n & mask)) {\n            mask = mask << 1;\n        }\n        return m & mask;\n    }\n}\n")),(0,i.yg)("h3",{id:"\u89e3\u6cd5-2"},"\u89e3\u6cd5 2"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"// Bitwise AND of Numbers Range\n// Time Complexity: O(log n), Space Complexity: O(1)\npublic class Solution {\n    public int rangeBitwiseAnd(int m, int n) {\n        while (n > m) {\n            n &= n - 1;\n        }\n        return m & n;\n    }\n}\n")))}c.isMDXComponent=!0}}]);