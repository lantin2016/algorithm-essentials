"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3326],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>f});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||s;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(58168),i=(t(96540),t(15680));const s={title:"Missing Element in Sorted Array"},a=void 0,o={unversionedId:"search/missing-element-in-sorted-array",id:"search/missing-element-in-sorted-array",title:"Missing Element in Sorted Array",description:"",source:"@site/docs/search/missing-element-in-sorted-array.md",sourceDirName:"search",slug:"/search/missing-element-in-sorted-array",permalink:"/en/search/missing-element-in-sorted-array",draft:!1,tags:[],version:"current",frontMatter:{title:"Missing Element in Sorted Array"}},c={},l=[],m={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"// https://www.cnblogs.com/cnoodle/p/13193731.html\nclass Solution {\n    public int missingElement(int[] nums, int k) {\n        int start = 0;\n        int end = nums.length - 1;\n        int missing = nums[end] - nums[start] - (end - start);\n        // corner case\n        if (k > missing) {\n            return nums[end] + (k - missing);\n        }\n\n        // normal case\n        while (start + 1 < end) {\n            int mid = start + (end - start) / 2;\n            missing = nums[mid] - nums[start] - (mid - start);\n            if (missing < k) {\n                k -= missing;\n                start = mid;\n            } else {\n                end = mid;\n            }\n        }\n        return nums[start] + k;\n    }\n}\n")))}p.isMDXComponent=!0}}]);