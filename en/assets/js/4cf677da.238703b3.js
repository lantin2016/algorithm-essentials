"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7947],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>y});var n=t(96540);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=s,y=c["".concat(o,".").concat(g)]||c[g]||u[g]||r;return t?n.createElement(y,m(m({ref:a},i),{},{components:t})):n.createElement(y,m({ref:a},i))}));function y(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=g;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[c]="string"==typeof e?e:s,m[1]=l;for(var p=2;p<r;p++)m[p]=t[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>m});var n=t(96540),s=t(20053);const r={tabItem:"tabItem_Ymn6"};function m(e){let{children:a,hidden:t,className:m}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,m),hidden:t},a)}},4865:(e,a,t)=>{t.d(a,{A:()=>u});var n=t(58168),s=t(96540),r=t(20053),m=t(92303),l=t(31682),o=t(86976),p=t(23104);const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:a,block:t,defaultValue:m,values:c,groupId:u,className:g}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??y.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),h=(0,l.X)(N,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const d=null===m?m:m??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==d&&!N.some((e=>e.value===d)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,o.x)(),[b,w]=(0,s.useState)(d),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.a_)();if(null!=u){const e=v[u];null!=e&&e!==b&&N.some((a=>a.value===e))&&w(e)}const x=e=>{const a=e.currentTarget,t=O.indexOf(a),n=N[t].value;n!==b&&(T(a),w(n),null!=u&&f(u,String(n)))},j=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}a?.focus()};return s.createElement("div",{className:(0,r.A)("tabs-container",i.tabList)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},g)},N.map((e=>{let{value:a,label:t,attributes:m}=e;return s.createElement("li",(0,n.A)({role:"tab",tabIndex:b===a?0:-1,"aria-selected":b===a,key:a,ref:e=>O.push(e),onKeyDown:j,onFocus:x,onClick:x},m,{className:(0,r.A)("tabs__item",i.tabItem,m?.className,{"tabs__item--active":b===a})}),t??a)}))),a?(0,s.cloneElement)(y.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==b})))))}function u(e){const a=(0,m.A)();return s.createElement(c,(0,n.A)({key:String(a)},e))}},42817:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=t(58168),s=(t(96540),t(15680)),r=t(4865),m=t(19365);const l={title:"Most Stones Removed with Same Row or Column"},o=void 0,p={unversionedId:"graph/ufs/most-stones-removed-with-same-row-or-column",id:"graph/ufs/most-stones-removed-with-same-row-or-column",title:"Most Stones Removed with Same Row or Column",description:"\u63cf\u8ff0",source:"@site/docs/graph/ufs/most-stones-removed-with-same-row-or-column.md",sourceDirName:"graph/ufs",slug:"/graph/ufs/most-stones-removed-with-same-row-or-column",permalink:"/en/graph/ufs/most-stones-removed-with-same-row-or-column",draft:!1,tags:[],version:"current",frontMatter:{title:"Most Stones Removed with Same Row or Column"},sidebar:"docs",previous:{title:"Number of Islands",permalink:"/en/graph/ufs/number-of-islands"},next:{title:"Sentence Similarity II",permalink:"/en/graph/ufs/sentence-similarity-ii"}},i={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],u={toc:c},g="wrapper";function y(e){let{components:a,...t}=e;return(0,s.yg)(g,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.yg)("p",null,"TODO"),(0,s.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.yg)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5178\u578b\u7684\u5e76\u67e5\u96c6\u95ee\u9898\uff0c\u5148\u628a ",(0,s.yg)("inlineCode",{parentName:"p"},"class DSU")," \u6a21\u7248\u6284\u4e00\u904d\uff0c\u63a5\u4e0b\u6765\u6838\u5fc3\u903b\u8f91\u53ea\u9700\u8981\u51e0\u884c\uff1a\u628a\u6240\u6709\u7684\u77f3\u5934\u66b4\u529b\u4e24\u4e24\u7ec4\u5408\uff0c\u5982\u679c\u4e8c\u8005\u5728\u540c\u4e00\u884c\u6216\u8005\u540c\u4e00\u5217\uff0c\u5219\u5408\u5e76\uff0c\u56e0\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"O"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"N"),(0,s.yg)("mn",{parentName:"msup"},"2")),(0,s.yg)("mo",{parentName:"mrow"},"\xd7"),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mrow",{parentName:"msup"},(0,s.yg)("mi",{parentName:"mrow"},"log"),(0,s.yg)("mo",{parentName:"mrow"},"\u2061")),(0,s.yg)("mo",{parentName:"msup"},"\u2217")),(0,s.yg)("mi",{parentName:"mrow"},"N"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N^2 \\times \\log^* N)")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1.023em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mop"},(0,s.yg)("span",{parentName:"span",className:"mop"},"lo",(0,s.yg)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.773em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.1473em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mbin mtight"},"\u2217")))))))),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,s.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.yg)(r.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.yg)(m.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// TODO\n"))),(0,s.yg)(m.A,{value:"cpp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-cpp"},"class DSU {\n// Plese copy from https://algorithm-essentials.soulmachine.me/graph/ufs/#union-by-rank\n};\n\n// Most Stones Removed with Same Row or Column\n// Time complexity: O(N^2*log*N)\n// Space complexity: O(N)\nclass Solution {\npublic:\n    int removeStones(const vector<vector<int>>& stones) {\n        const int N = stones.size();\n        DSU dsu(N);\n        int result = 0;\n        for (int i = 0; i < N; i++) {\n            for (int j = i+1; j < N; j++) {\n                if (shareSameRowOrColumn(stones[i], stones[j]))\n                    result += dsu.merge(i, j);\n            }\n        }\n        return result;\n    }\nprivate:\n    bool shareSameRowOrColumn(const vector<int>& a, const vector<int>& b) {\n        return a[0] == b[0] || a[1] == b[1];\n    }\n};\n")))))}y.isMDXComponent=!0}}]);