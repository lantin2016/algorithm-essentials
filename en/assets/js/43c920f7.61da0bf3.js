"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3123],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(58168),r=n(96540),l=n(20053),i=n(92303),o=n(31682),s=n(86976),u=n(23104);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:d}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.X)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,s.x)(),[x,N]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.a_)();if(null!=m){const e=v[m];null!=e&&e!==x&&g.some((t=>t.value===e))&&N(e)}const A=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==x&&(w(t),N(a),null!=m&&h(m,String(a)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.A)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},d)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:A,onClick:A},i,{className:(0,l.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.A)();return r.createElement(c,(0,a.A)({key:String(t)},e))}},34153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),l=n(4865),i=n(19365);const o={title:"Sparse Matrix Multiplication"},s=void 0,u={unversionedId:"simulation/sparse-matrix-multiplication",id:"simulation/sparse-matrix-multiplication",title:"Sparse Matrix Multiplication",description:"\u63cf\u8ff0",source:"@site/docs/simulation/sparse-matrix-multiplication.md",sourceDirName:"simulation",slug:"/simulation/sparse-matrix-multiplication",permalink:"/en/simulation/sparse-matrix-multiplication",draft:!1,tags:[],version:"current",frontMatter:{title:"Sparse Matrix Multiplication"},sidebar:"docs",previous:{title:"Max Points on a Line",permalink:"/en/simulation/max-points-on-a-line"},next:{title:"Last Stone Weight",permalink:"/en/simulation/last-stone-weight"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:c},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Given two sparse matrices ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"B"),", return the result of ",(0,r.yg)("inlineCode",{parentName:"p"},"AB"),"."),(0,r.yg)("p",null,"You may assume that ",(0,r.yg)("inlineCode",{parentName:"p"},"A"),"'s column number is equal to ",(0,r.yg)("inlineCode",{parentName:"p"},"B"),"'s row number."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"A = [\n  [ 1, 0, 0],\n  [-1, 0, 3]\n]\n\nB = [\n  [ 7, 0, 0 ],\n  [ 0, 0, 0 ],\n  [ 0, 0, 1 ]\n]\n\n     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |\nAB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |\n                  | 0 0 1 |\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Constraints"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"1 <= A.length, B.length <= 100")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"1 <= A[i].length, B[i].length <= 100")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-100 <= A[i][j], B[i][j] <= 100"))),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Sparse Matrix Multiplication\n// Time Complexity: O(m*n*p), Space Complexity: O(1)\npublic class Solution {\n    public int[][] multiply(int[][] A, int[][] B) {\n        int m = A.length, n = A[0].length, p = B[0].length;\n        int[][] C = new int[m][p];\n\n        for(int i = 0; i < m; i++) {\n            for(int k = 0; k < n; k++) {\n                if (A[i][k] != 0) {\n                    for (int j = 0; j < p; j++) {\n                        if (B[k][j] != 0) C[i][j] += A[i][k] * B[k][j];\n                    }\n                }\n            }\n        }\n        return C;\n    }\n}\n"))),(0,r.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))))}y.isMDXComponent=!0}}]);