"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Search a 2D Matrix II"},l=void 0,o={unversionedId:"search/search-a-2d-matrix-ii",id:"search/search-a-2d-matrix-ii",title:"Search a 2D Matrix II",description:"\u63cf\u8ff0",source:"@site/docs/search/search-a-2d-matrix-ii.md",sourceDirName:"search",slug:"/search/search-a-2d-matrix-ii",permalink:"/search/search-a-2d-matrix-ii",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/search/search-a-2d-matrix-ii.md",tags:[],version:"current",frontMatter:{title:"Search a 2D Matrix II"},sidebar:"someSidebar",previous:{title:"Search a 2D Matrix",permalink:"/search/search-a-2d-matrix"},next:{title:"Find Minimum in Rotated Sorted Array",permalink:"/search/find-minimum-in-rotated-sorted-array"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Write an efficient algorithm that searches for a value in an ",(0,a.kt)("inlineCode",{parentName:"p"},"m x n")," matrix. This matrix has the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integers in each row are sorted in ascending from left to right."),(0,a.kt)("li",{parentName:"ul"},"Integers in each column are sorted in ascending from top to bottom.")),(0,a.kt)("p",null,"For example,"),(0,a.kt)("p",null,"Consider the following matrix:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[\n  [1,   4,  7, 11, 15],\n  [2,   5,  8, 12, 19],\n  [3,   6,  9, 16, 22],\n  [10, 13, 14, 17, 24],\n  [18, 21, 23, 26, 30]\n]\n")),(0,a.kt)("p",null,"Given target = ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Given target = ",(0,a.kt)("inlineCode",{parentName:"p"},"20"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u4ece\u53f3\u4e0a\u89d2\u5f00\u59cb, \u6bd4\u8f83",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix[i][j]"),"\u7684\u503c\u3002\u5982\u679c\u5c0f\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", \u5219\u8be5\u884c\u4e0d\u53ef\u80fd\u6709\u6b64\u6570, \u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"i++"),"; \u5982\u679c\u5927\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", \u5219\u8be5\u5217\u4e0d\u53ef\u80fd\u6709\u6b64\u6570, \u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"j--"),"\u3002\u9047\u5230\u8fb9\u754c\u5219\u8868\u660e\u8be5\u77e9\u9635\u4e0d\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Search a 2D Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m + n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        if(matrix.length==0 || matrix[0].length==0) return false;\n\n        int i = 0;\n        int j = matrix[0].length-1;\n        while(i < matrix.length && j >= 0) {\n            final int x = matrix[i][j];\n            if(target == x) {\n                return true;\n            } else if (x < target) {\n                ++i;\n            } else {\n                --j;\n            }\n        }\n        return false;\n    }\n}\n")),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/search/search-a-2d-matrix"},"Search a 2D Matrix"))))}m.isMDXComponent=!0}}]);