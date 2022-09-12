"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,b=p["".concat(u,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),u=r(7094),s=r(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,r;const{lazy:l,block:p,defaultValue:f,values:b,groupId:v,className:m}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const j=null===f?f:null!=(t=null!=f?f:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?t:y[0].props.value;if(null!==j&&!k.some((e=>e.value===j)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:x}=(0,u.U)(),[O,S]=(0,a.useState)(j),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=g[v];null!=e&&e!==O&&k.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,r=w.indexOf(t),n=k[r].value;n!==O&&(T(t),S(n),null!=v&&x(v,String(n)))},N=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;r=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;r=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},m)},k.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:N,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},7113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={title:"Sudoku Solver"},u=void 0,s={unversionedId:"dfs/sudoku-solver",id:"dfs/sudoku-solver",title:"Sudoku Solver",description:"\u63cf\u8ff0",source:"@site/docs/dfs/sudoku-solver.md",sourceDirName:"dfs",slug:"/dfs/sudoku-solver",permalink:"/dfs/sudoku-solver",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dfs/sudoku-solver.md",tags:[],version:"current",frontMatter:{title:"Sudoku Solver"},sidebar:"someSidebar",previous:{title:"Generate Parentheses",permalink:"/dfs/generate-parentheses"},next:{title:"Word Search",permalink:"/dfs/word-search"}},d={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Write a program to solve a Sudoku puzzle by filling the empty cells."),(0,a.kt)("p",null,"Empty cells are indicated by the character ",(0,a.kt)("inlineCode",{parentName:"p"},"'.'"),"."),(0,a.kt)("p",null,"You may assume that there will be only one unique solution."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A sudoku puzzle...",src:r(4595).Z,width:"250",height:"250"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"...and its solution numbers marked in red",src:r(9833).Z,width:"250",height:"250"})),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u65e0\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(o.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Sudoku Solver\n// \u65f6\u95f4\u590d\u6742\u5ea6O(9^4)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void solveSudoku(char[][] board) {\n        _solveSudoku(board);\n    }\n    private static boolean _solveSudoku(char[][] board) {\n        for (int i = 0; i < 9; ++i)\n            for (int j = 0; j < 9; ++j) {\n                if (board[i][j] == '.') {\n                    for (int k = 0; k < 9; ++k) {\n                        board[i][j] = Character.forDigit(k+1, 10);\n                        if (isValid(board, i, j) && _solveSudoku(board))\n                            return true;\n                        board[i][j] = '.';\n                    }\n                    return false;\n                }\n            }\n        return true;\n    }\n    // \u68c0\u67e5 (x, y) \u662f\u5426\u5408\u6cd5\n    private static boolean isValid(char[][] board, int x, int y) {\n        int i, j;\n        for (i = 0; i < 9; i++) // \u68c0\u67e5 y \u5217\n            if (i != x && board[i][y] == board[x][y])\n                return false;\n        for (j = 0; j < 9; j++) // \u68c0\u67e5 x \u884c\n            if (j != y && board[x][j] == board[x][y])\n                return false;\n        for (i = 3 * (x / 3); i < 3 * (x / 3 + 1); i++)\n            for (j = 3 * (y / 3); j < 3 * (y / 3 + 1); j++)\n                if ((i != x || j != y) && board[i][j] == board[x][y])\n                    return false;\n        return true;\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Sudoku Solver\n// \u65f6\u95f4\u590d\u6742\u5ea6O(9^4)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void solveSudoku(vector<vector<char> > &board) {\n        _solveSudoku(board);\n    }\nprivate:\n    bool _solveSudoku(vector<vector<char> > &board) {\n        for (int i = 0; i < 9; ++i)\n            for (int j = 0; j < 9; ++j) {\n                if (board[i][j] == '.') {\n                    for (int k = 0; k < 9; ++k) {\n                        board[i][j] = '1' + k;\n                        if (isValid(board, i, j) && _solveSudoku(board))\n                            return true;\n                        board[i][j] = '.';\n                    }\n                    return false;\n                }\n            }\n        return true;\n    }\n    // \u68c0\u67e5 (x, y) \u662f\u5426\u5408\u6cd5\n    bool isValid(const vector<vector<char> > &board, int x, int y) {\n        int i, j;\n        for (i = 0; i < 9; i++) // \u68c0\u67e5 y \u5217\n            if (i != x && board[i][y] == board[x][y])\n                return false;\n        for (j = 0; j < 9; j++) // \u68c0\u67e5 x \u884c\n            if (j != y && board[x][j] == board[x][y])\n                return false;\n        for (i = 3 * (x / 3); i < 3 * (x / 3 + 1); i++)\n            for (j = 3 * (y / 3); j < 3 * (y / 3 + 1); j++)\n                if ((i != x || j != y) && board[i][j] == board[x][y])\n                    return false;\n        return true;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/array/valid-sudoku"},"Valid Sudoku"))))}f.isMDXComponent=!0},9833:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sudoku-solution-8418729eec48946e2fc1a8cc496315fd.png"},4595:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sudoku-df7352bbd4eec64ecdc08d82aeae2435.png"}}]);