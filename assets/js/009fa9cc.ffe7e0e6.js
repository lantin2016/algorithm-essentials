"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8030],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),o=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(m.Provider,{value:n},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),y=o(t),g=a,c=y["".concat(m,".").concat(g)]||y[g]||s[g]||i;return t?r.createElement(c,l(l({ref:n},p),{},{components:t})):r.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var u={};for(var m in n)hasOwnProperty.call(n,m)&&(u[m]=n[m]);u.originalType=e,u[y]="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},95916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var r=t(58168),a=(t(96540),t(15680));const i={title:"Range Sum Query - Immutable"},l=void 0,u={unversionedId:"dp/range-sum-query-immutable",id:"dp/range-sum-query-immutable",title:"Range Sum Query - Immutable",description:"\u63cf\u8ff0",source:"@site/docs/dp/range-sum-query-immutable.md",sourceDirName:"dp",slug:"/dp/range-sum-query-immutable",permalink:"/dp/range-sum-query-immutable",draft:!1,tags:[],version:"current",frontMatter:{title:"Range Sum Query - Immutable"},sidebar:"docs",previous:{title:"House Robber III",permalink:"/dp/house-robber-iii"},next:{title:"Range Sum Query 2D - Immutable",permalink:"/dp/range-sum-query-2d-immutable"}},m={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:o},y="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given an integer array ",(0,a.yg)("inlineCode",{parentName:"p"},"nums"),", find the sum of the elements between indices ",(0,a.yg)("inlineCode",{parentName:"p"},"i")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"j")," (",(0,a.yg)("inlineCode",{parentName:"p"},"i \u2264 j"),"), inclusive."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example"),":"),(0,a.yg)("p",null,"Given ",(0,a.yg)("inlineCode",{parentName:"p"},"nums = [-2, 0, 3, -5, 2, -1]")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sumRange(0, 2) -> 1\nsumRange(2, 5) -> -1\nsumRange(0, 5) -> -3\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You may assume that the array does not change."),(0,a.yg)("li",{parentName:"ul"},"There are many calls to sumRange function.")),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u4ee4\u72b6\u6001",(0,a.yg)("inlineCode",{parentName:"p"},"f[i]"),"\u4e3a0\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"i"),"\u5143\u7d20\u4e4b\u95f4\u7684\u548c\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"f[i] = f[i-1] + nums[i]"),"\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"f[i]"),"\u672c\u8d28\u4e0a\u662f\u7d2f\u52a0\u548c\uff0c\u6709\u4e86",(0,a.yg)("inlineCode",{parentName:"p"},"f[i]"),"\uff0c\u5219\u8303\u56f4","[i,j]","\u4e4b\u95f4\u7684\u548c\u7b49\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"f[j] - f[i-1]"),"\u3002"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Range Sum Query - Immutable\npublic class NumArray {\n    // Time Complexity: O(n), Space Complexity: O(1)\n    public NumArray(int[] nums) {\n        this.f = new int[nums.length];\n        int sum = 0;\n        for (int i = 0; i < nums.length; ++i) {\n            sum += nums[i];\n            f[i] = sum;\n        }\n    }\n\n    // Time Complexity: O(1), Space Complexity: O(1)\n    public int sumRange(int i, int j) {\n        return f[j] - (i == 0 ? 0 : f[i - 1]);\n    }\n    private final int[] f;\n}\n")),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dp/range-sum-query-2d-immutable"},"Range Sum Query 2D - Immutable")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/binary-tree/segment-tree/range-sum-query-mutable"},"Range Sum Query - Mmutable"))))}s.isMDXComponent=!0}}]);