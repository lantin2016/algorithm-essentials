"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6033],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),y=i,d=u["".concat(s,".").concat(y)]||u[y]||f[y]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},28831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const a={title:"Game of Life"},l=void 0,o={unversionedId:"array/game-of-life",id:"array/game-of-life",title:"Game of Life",description:"\u63cf\u8ff0",source:"@site/docs/array/game-of-life.md",sourceDirName:"array",slug:"/array/game-of-life",permalink:"/array/game-of-life",draft:!1,tags:[],version:"current",frontMatter:{title:"Game of Life"},sidebar:"docs",previous:{title:"Product of Array Except Self",permalink:"/array/product-of-array-except-self"},next:{title:"Increasing Triplet Subsequence",permalink:"/array/increasing-triplet-subsequence"}},s={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.yg)("p",null,"According to the ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Wikipedia's article"),': "The ',(0,i.yg)("strong",{parentName:"p"},"Game of Life"),", also known simply as ",(0,i.yg)("strong",{parentName:"p"},"Life"),', is a cellular automaton devised by the British mathematician John Horton Conway in 1970."'),(0,i.yg)("p",null,"Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Any live cell with fewer than two live neighbors dies, as if caused by under-population."),(0,i.yg)("li",{parentName:"ol"},"Any live cell with two or three live neighbors lives on to the next generation."),(0,i.yg)("li",{parentName:"ol"},"Any live cell with more than three live neighbors dies, as if by over-population.."),(0,i.yg)("li",{parentName:"ol"},"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.")),(0,i.yg)("p",null,"Write a function to compute the next state (after one update) of the board given its current state."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Follow up"),":"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells."),(0,i.yg)("li",{parentName:"ol"},"In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?")),(0,i.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.yg)("p",null,"\u6700\u7b80\u5355\u7684\u529e\u6cd5\u662f\u65b0\u5efa\u4e00\u4e2a\u77e9\u9635\u4fdd\u5b58\u4e0b\u4e00\u8f6e\u5c40\u9762\u3002"),(0,i.yg)("p",null,"\u4e0d\u8fc7\u672c\u63d0\u8981\u6c42 inplace, \u96be\u5ea6\u5c31\u77ac\u95f4\u589e\u5927\u4e86\u3002\u56e0\u4e3a\u6211\u4eec\u4fee\u6539\u4e00\u4e2a\u4f4d\u7f6e\u7684\u503c\u540e\uff0c\u5b83\u7684\u65e7\u503c\u5c31\u4e22\u5931\u4e86\uff0c\u800c\u5b83\u5468\u56f4\u8fd8\u6709\u90bb\u5c45\u4f9d\u8d56\u5b83\u7684\u65e7\u503c\u3002"),(0,i.yg)("p",null,"\u56e0\u4e3a\u9898\u76ee\u7ed9\u51fa\u7684\u662f\u4e00\u4e2a int \u77e9\u9635\uff0c\u5927\u6709\u7a7a\u95f4\u53ef\u4ee5\u5229\u7528\u3002\u6211\u4eec\u53ef\u4ee5\u6362\u4e00\u79cd\u65b9\u5f0f\u8fdb\u884c\u7f16\u7801\uff0c\u5047\u8bbe\u5bf9\u4e8e\u6bcf\u4e2a\u70b9\uff0c\u503c\u7684\u542b\u4e49\u4e3a\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u72b6\u6001 0 \u548c 1\uff0c\u8868\u793a\u72b6\u6001\u4e0d\u53d8"),(0,i.yg)("li",{parentName:"ul"},"\u72b6\u6001 -1\uff1a\u6d3b\u7ec6\u80de\u8f6c\u4e3a\u6b7b\u7ec6\u80de"),(0,i.yg)("li",{parentName:"ul"},"\u72b6\u6001 2\uff1a\u6b7b\u7ec6\u80de\u8f6c\u4e3a\u6d3b\u7ec6\u80de")),(0,i.yg)("p",null,"\u5f97\u5230\u8fd9\u6837\u4e00\u4e2a\u77e9\u9635\u540e\uff0c\u6700\u540e\u5c06\u6240\u6709\u5927\u4e8e0\u7684\u4f4d\u7f6e\u53d8\u6210\u6d3b\u7ec6\u80de1\uff0c\u5c0f\u4e8e0\u7684\u4f4d\u7f6e\u53d8\u6210\u6b7b\u7ec6\u80de0\uff0c\u5c31\u662f\u6240\u6c42\u7684\u4e0b\u4e00\u8f6e\u5c40\u9762\u4e86\u3002"),(0,i.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"// Game of Life\n// Time complexity: O(mxn), Space complexity: O(1)\npublic class Solution {\n    public void gameOfLife(int[][] board) {\n        final int m = board.length;\n        final int n = board[0].length;\n        // clock wise, start from upper-left corner\n        final int[] dx = new int[] {-1, -1, -1, 0, 1, 1, 1, 0};\n        final int[] dy = new int[] {-1, 0, 1, 1, 1, 0, -1, -1};\n\n        // encode\n        for (int i = 0; i < m; ++i) {\n            for (int j = 0; j < n; ++j) {\n                int live = 0; // number of live neighbors\n                for (int k = 0; k < 8; ++k) {\n                    final int x = i + dx[k];\n                    final int y = j + dy[k];\n                    if (x > -1 && x < m && y > -1 && y < n && Math.abs(board[x][y]) == 1) {\n                        ++live;\n                    }\n                }\n                // Rule 1 or Rule 3\n                if ((board[i][j] == 1) && (live < 2 || live > 3)) {\n                    // -1 signifies the cell is now dead but originally was live.\n                    board[i][j] = -1;\n                }\n                // Rule 4\n                if (board[i][j] == 0 && live == 3) {\n                    // 2 signifies the cell is now live but was originally dead.\n                    board[i][j] = 2;\n                }\n            }\n        }\n\n        // Get the final representation for the newly updated board.\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (board[i][j] > 0) {\n                    board[i][j] = 1;\n                } else {\n                    board[i][j] = 0;\n                }\n            }\n        }\n    }\n}\n")))}f.isMDXComponent=!0}}]);