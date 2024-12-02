"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4730],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[d]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19365:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(96540),a=r(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:r,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:r},n)}},4865:(e,n,r)=>{r.d(n,{A:()=>p});var t=r(58168),a=r(96540),l=r(20053),o=r(92303),u=r(31682),i=r(86976),s=r(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:n,block:r,defaultValue:o,values:d,groupId:p,className:f}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??m.map((e=>{let{props:{value:n,label:r,attributes:t}}=e;return{value:n,label:r,attributes:t}})),y=(0,u.X)(b,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,i.x)(),[k,j]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.a_)();if(null!=p){const e=h[p];null!=e&&e!==k&&b.some((n=>n.value===e))&&j(e)}const T=e=>{const n=e.currentTarget,r=O.indexOf(n),t=b[r].value;t!==k&&(w(n),j(t),null!=p&&g(p,String(t)))},E=e=>{let n=null;switch(e.key){case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;n=O[r]??O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;n=O[r]??O[O.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},f)},b.map((e=>{let{value:n,label:r,attributes:o}=e;return a.createElement("li",(0,t.A)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>O.push(e),onKeyDown:E,onFocus:T,onClick:T},o,{className:(0,l.A)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":k===n})}),r??n)}))),n?(0,a.cloneElement)(m.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},m.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function p(e){const n=(0,o.A)();return a.createElement(d,(0,t.A)({key:String(n)},e))}},72342:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var t=r(58168),a=(r(96540),r(15680)),l=r(4865),o=r(19365);const u={title:"Valid Sudoku"},i=void 0,s={unversionedId:"array/valid-sudoku",id:"array/valid-sudoku",title:"Valid Sudoku",description:"\u63cf\u8ff0",source:"@site/docs/array/valid-sudoku.md",sourceDirName:"array",slug:"/array/valid-sudoku",permalink:"/en/array/valid-sudoku",draft:!1,tags:[],version:"current",frontMatter:{title:"Valid Sudoku"},sidebar:"docs",previous:{title:"Permutation Sequence",permalink:"/en/array/permutation-sequence"},next:{title:"Rotate Image",permalink:"/en/array/rotate-image"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:d},f="wrapper";function m(e){let{components:n,...u}=e;return(0,a.yg)(f,(0,t.A)({},p,u,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules ",(0,a.yg)("a",{parentName:"p",href:"http://sudoku.com.au/TheRules.aspx"},"http://sudoku.com.au/TheRules.aspx")," ."),(0,a.yg)("p",null,"The Sudoku board could be partially filled, where empty cells are filled with the character ",(0,a.yg)("inlineCode",{parentName:"p"},"'.'"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Valid Sudoku",src:r(77667).A,width:"250",height:"250"})),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u7ec6\u8282\u5b9e\u73b0\u9898\u3002"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Valid Sudoku\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        boolean[] used = new boolean[9];\n\n        for (int i = 0; i < 9; ++i) {\n            Arrays.fill(used, false);\n\n            for (int j = 0; j < 9; ++j) // \u68c0\u67e5\u884c\n                if (!check(board[i][j], used))\n                    return false;\n\n            Arrays.fill(used, false);\n\n            for (int j = 0; j < 9; ++j) // \u68c0\u67e5\u5217\n                if (!check(board[j][i], used))\n                    return false;\n        }\n\n        for (int r = 0; r < 3; ++r) // \u68c0\u67e5 9 \u4e2a\u5b50\u683c\u5b50\n            for (int c = 0; c < 3; ++c) {\n                Arrays.fill(used, false);\n\n                for (int i = r * 3; i < r * 3 + 3; ++i)\n                    for (int j = c * 3; j < c * 3 + 3; ++j)\n                        if (!check(board[i][j], used))\n                            return false;\n            }\n\n        return true;\n    }\n\n    private static boolean check(char ch, boolean[] used) {\n        if (ch == '.') return true;\n\n        if (used[ch - '1']) return false;\n\n        return used[ch - '1'] = true;\n    }\n};\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Valid Sudoku\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool isValidSudoku(const vector<vector<char>>& board) {\n        bool used[9];\n\n        for (int i = 0; i < 9; ++i) {\n            fill(used, used + 9, false);\n\n            for (int j = 0; j < 9; ++j) // \u68c0\u67e5\u884c\n                if (!check(board[i][j], used))\n                    return false;\n\n            fill(used, used + 9, false);\n\n            for (int j = 0; j < 9; ++j) // \u68c0\u67e5\u5217\n                if (!check(board[j][i], used))\n                    return false;\n        }\n\n        for (int r = 0; r < 3; ++r) // \u68c0\u67e5 9 \u4e2a\u5b50\u683c\u5b50\n            for (int c = 0; c < 3; ++c) {\n                fill(used, used + 9, false);\n\n                for (int i = r * 3; i < r * 3 + 3; ++i)\n                    for (int j = c * 3; j < c * 3 + 3; ++j)\n                        if (!check(board[i][j], used))\n                            return false;\n            }\n\n        return true;\n    }\n\n    bool check(char ch, bool used[9]) {\n        if (ch == '.') return true;\n\n        if (used[ch - '1']) return false;\n\n        return used[ch - '1'] = true;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/dfs/sudoku-solver"},"Sudoku Solver"))))}m.isMDXComponent=!0},77667:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sudoku-df7352bbd4eec64ecdc08d82aeae2435.png"}}]);