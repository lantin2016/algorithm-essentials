"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6430],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9748:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={title:"\u7b80\u4ecb"},a=void 0,l={unversionedId:"binary-tree/recursion/README",id:"binary-tree/recursion/README",title:"\u7b80\u4ecb",description:"\u4e8c\u53c9\u6811\u662f\u4e00\u4e2a\u9012\u5f52\u7684\u6570\u636e\u7ed3\u6784\uff0c\u56e0\u6b64\u662f\u4e00\u4e2a\u7528\u6765\u8003\u5bdf\u9012\u5f52\u601d\u7ef4\u80fd\u529b\u7684\u7edd\u4f73\u6570\u636e\u7ed3\u6784\u3002",source:"@site/docs/binary-tree/recursion/README.md",sourceDirName:"binary-tree/recursion",slug:"/binary-tree/recursion/",permalink:"/binary-tree/recursion/",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/README.md",tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"someSidebar",previous:{title:"Kth Smallest Element in a BST",permalink:"/binary-tree/bst/kth-smallest-element-in-a-bst"},next:{title:"Minimum Depth of Binary Tree",permalink:"/binary-tree/recursion/minimum-depth-of-binary-tree"}},c={},s=[],p={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e8c\u53c9\u6811\u662f\u4e00\u4e2a\u9012\u5f52\u7684\u6570\u636e\u7ed3\u6784\uff0c\u56e0\u6b64\u662f\u4e00\u4e2a\u7528\u6765\u8003\u5bdf\u9012\u5f52\u601d\u7ef4\u80fd\u529b\u7684\u7edd\u4f73\u6570\u636e\u7ed3\u6784\u3002"),(0,o.kt)("p",null,"\u9012\u5f52\u4e00\u5b9a\u662f\u6df1\u641c\uff08\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/dfs/dfs-summary"},"\u6df1\u641c\u4e0e\u9012\u5f52\u7684\u533a\u522b"),"\uff09\uff0c\u7531\u4e8e\u5728\u4e8c\u53c9\u6811\u4e0a\uff0c\u9012\u5f52\u7684\u5473\u9053\u66f4\u6d53\u4e9b\uff0c\u56e0\u6b64\u672c\u8282\u7528\u201c\u4e8c\u53c9\u6811\u7684\u9012\u5f52\u201d\u4f5c\u4e3a\u6807\u9898\uff0c\u800c\u4e0d\u662f\u201c\u4e8c\u53c9\u6811\u7684\u6df1\u641c\u201d\uff0c\u5c3d\u7ba1\u672c\u8282\u6240\u6709\u7684\u7b97\u6cd5\u90fd\u5c5e\u4e8e\u6df1\u641c\u3002"),(0,o.kt)("p",null,"\u4e8c\u53c9\u6811\u7684\u5148\u5e8f\u3001\u4e2d\u5e8f\u3001\u540e\u5e8f\u904d\u5386\u90fd\u53ef\u4ee5\u770b\u505a\u662f DFS\uff0c\u6b64\u5916\u8fd8\u6709\u5176\u4ed6\u987a\u5e8f\u7684\u6df1\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u5171\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"3!=6"),"\u79cd\u3002\u5176\u4ed6 3 \u79cd\u987a\u5e8f\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"root->r->l\uff0cr->root->l, r->l->root"),"\u3002"))}u.isMDXComponent=!0}}]);