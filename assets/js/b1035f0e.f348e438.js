"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4331],{15680:(e,n,t)=>{t.d(n,{xA:()=>A,yg:()=>f});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},A=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,A=u(e,["components","mdxType","originalType","parentName"]),g=m(t),c=i,f=g["".concat(l,".").concat(c)]||g[c]||p[c]||a;return t?r.createElement(f,o(o({ref:n},A),{},{components:t})):r.createElement(f,o({ref:n},A))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[g]="string"==typeof e?e:i,o[1]=u;for(var m=2;m<a;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},78209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var r=t(58168),i=(t(96540),t(15680));const a={title:"Range Sum Query 2D - Immutable"},o=void 0,u={unversionedId:"dp/range-sum-query-2d-immutable",id:"dp/range-sum-query-2d-immutable",title:"Range Sum Query 2D - Immutable",description:"\u63cf\u8ff0",source:"@site/docs/dp/range-sum-query-2d-immutable.md",sourceDirName:"dp",slug:"/dp/range-sum-query-2d-immutable",permalink:"/dp/range-sum-query-2d-immutable",draft:!1,tags:[],version:"current",frontMatter:{title:"Range Sum Query 2D - Immutable"},sidebar:"docs",previous:{title:"Range Sum Query - Immutable",permalink:"/dp/range-sum-query-immutable"},next:{title:"Frog Jump",permalink:"/dp/frog-jump"}},l={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],A={toc:m},g="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,r.A)({},A,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.yg)("p",null,"Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner ",(0,i.yg)("inlineCode",{parentName:"p"},"(row1, col1)")," and lower right corner ",(0,i.yg)("inlineCode",{parentName:"p"},"(row2, col2)"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.",src:t(91986).A,width:"151",height:"151"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example"),":"),(0,i.yg)("p",null,"Given ",(0,i.yg)("inlineCode",{parentName:"p"},"matrix = ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"[\n  [3, 0, 1, 4, 2],\n  [5, 6, 3, 2, 1],\n  [1, 2, 0, 1, 5],\n  [4, 1, 0, 1, 7],\n  [1, 0, 3, 0, 5]\n]\n\nsumRegion(2, 1, 4, 3) -> 8\nsumRegion(1, 1, 2, 2) -> 11\nsumRegion(1, 2, 2, 4) -> 12\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You may assume that the matrix does not change."),(0,i.yg)("li",{parentName:"ul"},"There are many calls to sumRegion function."),(0,i.yg)("li",{parentName:"ul"},"You may assume that row1 \u2264 row2 and col1 \u2264 col2.")),(0,i.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.yg)("p",null,"\u601d\u8def\u8ddf\u4e00\u7ef4\u7684\u7c7b\u4f3c\uff0c\u5efa\u7acb\u4e00\u4e2a\u7d2f\u52a0\u548c\u77e9\u9635\u3002\u4ee4\u72b6\u6001",(0,i.yg)("inlineCode",{parentName:"p"},"f[i][j]"),"\u8868\u793a\u4ece(0,0)\u5230(i,j)\u7684\u5b50\u77e9\u9635\u7684\u548c\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"f[i][j] = f[i-1][j] + rowSum")),(0,i.yg)("p",null,"\u5176\u4e2d ",(0,i.yg)("inlineCode",{parentName:"p"},"rowSum")," \u662f\u77e9\u9635",(0,i.yg)("inlineCode",{parentName:"p"},"matrix[i][0]"),"\u5230",(0,i.yg)("inlineCode",{parentName:"p"},"matrix[i][j]"),"\u8fd9\u4e00\u884c\u7684\u548c\u3002"),(0,i.yg)("p",null,"\u6709\u4e86",(0,i.yg)("inlineCode",{parentName:"p"},"f[i][j]"),"\uff0c \u5219"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"sumRange(i1,j1,i2,j2) = f[i2][j2] + f[i1-1][j1-1] - f[i1-1][j2]-f[i2][j1-1]")),(0,i.yg)("p",null,"\u5c06\u8f85\u52a9\u77e9\u9635",(0,i.yg)("inlineCode",{parentName:"p"},"f[i][j]"),"\u7684\u884c\u6570\u548c\u5217\u6570\u589e 1\uff0c\u53ef\u4ee5\u7b80\u5316\u5bf9\u77e9\u9635\u8fb9\u754c\u7684\u5904\u7406\u3002"),(0,i.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"// Range Sum Query 2D - Immutable\npublic class NumMatrix {\n    // Time Complexity: O(n*m), Space Complexity: O(1)\n    public NumMatrix(int[][] matrix) {\n        final int m = matrix.length;\n        final int n = matrix.length > 0 ? matrix[0].length : 0;\n        this.f = new int[m + 1][n + 1];\n\n        for (int i = 1; i < m + 1; ++i) {\n            int rowSum = 0;\n            for (int j = 1; j < n + 1; ++j) {\n                f[i][j] += rowSum + matrix[i-1][j-1];\n                if (i > 1) {\n                    f[i][j] += f[i-1][j];\n                }\n                rowSum += matrix[i-1][j-1];\n            }\n        }\n    }\n\n    // Time Complexity: O(1), Space Complexity: O(1)\n    public int sumRegion(int row1, int col1, int row2, int col2) {\n        return f[row2 + 1][col2 + 1] + f[row1][col1] -\n                f[row1][col2 + 1] - f[row2 + 1][col1];\n    }\n    private final int[][] f;\n}\n")),(0,i.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/dp/range-sum-query-immutable"},"Range Sum Query - Immutable")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/binary-tree/segment-tree/range-sum-query-mutable"},"Range Sum Query - Mmutable"))))}p.isMDXComponent=!0},91986:(e,n,t)=>{t.d(n,{A:()=>r});const r="data:image/png;base64,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"}}]);