"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[175],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,m=u["".concat(l,".").concat(f)]||u[f]||g[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const o={title:"Longest Repeating Substring"},a=void 0,s={unversionedId:"search/longest-repeating-substring",id:"search/longest-repeating-substring",title:"Longest Repeating Substring",description:"",source:"@site/docs/search/longest-repeating-substring.md",sourceDirName:"search",slug:"/search/longest-repeating-substring",permalink:"/search/longest-repeating-substring",draft:!1,tags:[],version:"current",frontMatter:{title:"Longest Repeating Substring"}},l={},c=[],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"// https://blog.csdn.net/qq_46105170/article/details/119441171\nclass Solution {\n public:\n  using UL = unsigned long;\n  int longestRepeatingSubstring(string s) {\n    int n = s.size(), l = 1, r = n - 1;\n    if (l > r) return 0;\n    UL P = 131;\n    auto check = [&](int len) {\n      unordered_set<UL> st;\n      UL pow = 1, ha = 0;\n      for (int i = 0; i < len; i++) {\n        pow = pow * P;\n        ha = ha * P + s[i];\n      }\n      st.insert(ha);\n      for (int i = len; i < n; i++) {\n        ha = ha * P + s[i];\n        ha -= pow * s[i - len];\n        if (st.count(ha)) return true;\n        st.insert(ha);\n      }\n\n      return false;\n    };\n\n    while (l < r) {\n      int mid = l + (r - l + 1 >> 1);\n      if (check(mid))\n        l = mid;\n      else\n        r = mid - 1;\n    }\n\n    return check(l) ? l : 0;\n  }\n};\n")))}g.isMDXComponent=!0}}]);