"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7281],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>c});var t=n(96540);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function m(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},m=Object.keys(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},o=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},N=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,m=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),g=i(n),N=s,c=g["".concat(l,".").concat(N)]||g[N]||y[N]||m;return n?t.createElement(c,p(p({ref:a},o),{},{components:n})):t.createElement(c,p({ref:a},o))}));function c(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=n.length,p=new Array(m);p[0]=N;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[g]="string"==typeof e?e:s,p[1]=r;for(var i=2;i<m;i++)p[i]=n[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}N.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>p});var t=n(96540),s=n(20053);const m={tabItem:"tabItem_Ymn6"};function p(e){let{children:a,hidden:n,className:p}=e;return t.createElement("div",{role:"tabpanel",className:(0,s.A)(m.tabItem,p),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>y});var t=n(58168),s=n(96540),m=n(20053),p=n(92303),r=n(31682),l=n(86976),i=n(23104);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){const{lazy:a,block:n,defaultValue:p,values:g,groupId:y,className:N}=e,c=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),u=g??c.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),d=(0,r.X)(u,((e,a)=>e.value===a.value));if(d.length>0)throw new Error(`Docusaurus error: Duplicate values "${d.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??c.find((e=>e.props.default))?.props.value??c[0].props.value;if(null!==h&&!u.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${u.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,l.x)(),[v,w]=(0,s.useState)(h),k=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.a_)();if(null!=y){const e=f[y];null!=e&&e!==v&&u.some((a=>a.value===e))&&w(e)}const j=e=>{const a=e.currentTarget,n=k.indexOf(a),t=u[n].value;t!==v&&(C(a),w(t),null!=y&&b(y,String(t)))},x=e=>{let a=null;switch(e.key){case"ArrowRight":{const n=k.indexOf(e.currentTarget)+1;a=k[n]??k[0];break}case"ArrowLeft":{const n=k.indexOf(e.currentTarget)-1;a=k[n]??k[k.length-1];break}}a?.focus()};return s.createElement("div",{className:(0,m.A)("tabs-container",o.tabList)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("tabs",{"tabs--block":n},N)},u.map((e=>{let{value:a,label:n,attributes:p}=e;return s.createElement("li",(0,t.A)({role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,key:a,ref:e=>k.push(e),onKeyDown:x,onFocus:j,onClick:j},p,{className:(0,m.A)("tabs__item",o.tabItem,p?.className,{"tabs__item--active":v===a})}),n??a)}))),a?(0,s.cloneElement)(c.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},c.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==v})))))}function y(e){const a=(0,p.A)();return s.createElement(g,(0,t.A)({key:String(a)},e))}},57648:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var t=n(58168),s=(n(96540),n(15680)),m=n(4865),p=n(19365);const r={title:"Perfect Squares"},l=void 0,i={unversionedId:"dp/knapsack-problem/perfect-squares",id:"dp/knapsack-problem/perfect-squares",title:"Perfect Squares",description:"\u95ee\u9898\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/perfect-squares.md",sourceDirName:"dp/knapsack-problem",slug:"/dp/knapsack-problem/perfect-squares",permalink:"/en/dp/knapsack-problem/perfect-squares",draft:!1,tags:[],version:"current",frontMatter:{title:"Perfect Squares"},sidebar:"docs",previous:{title:"Coin Change II",permalink:"/en/dp/knapsack-problem/coin-change-ii"},next:{title:"Combination Sum IV",permalink:"/en/dp/knapsack-problem/combination-sum-iv"}},o={},g=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],y={toc:g},N="wrapper";function c(e){let{components:a,...n}=e;return(0,s.yg)(N,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,s.yg)("p",null,"Given an integer ",(0,s.yg)("inlineCode",{parentName:"p"},"n"),", return the least number of perfect square numbers that sum to ",(0,s.yg)("inlineCode",{parentName:"p"},"n"),"."),(0,s.yg)("p",null,"A ",(0,s.yg)("strong",{parentName:"p"},"perfect square")," is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example 1"),":"),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"Input"),": n = 12",(0,s.yg)("br",{parentName:"p"}),"\n",(0,s.yg)("strong",{parentName:"p"},"Output"),": 3",(0,s.yg)("br",{parentName:"p"}),"\n",(0,s.yg)("strong",{parentName:"p"},"Explanation"),": 12 = 4 + 4 + 4")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example 2"),":"),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"Input"),": n = 13",(0,s.yg)("br",{parentName:"p"}),"\n",(0,s.yg)("strong",{parentName:"p"},"Output"),": 2",(0,s.yg)("br",{parentName:"p"}),"\n",(0,s.yg)("strong",{parentName:"p"},"Explanation"),": 13 = 4 + 9")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Constraints"),":"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"1 <= n <= ",(0,s.yg)("span",{parentName:"li",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mn",{parentName:"mrow"},"1"),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mn",{parentName:"msup"},"0"),(0,s.yg)("mn",{parentName:"msup"},"4"))),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^4")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},"1"),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord"},"0"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"4")))))))))))))),(0,s.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.yg)("p",null,"\u5148\u5224\u65ad\u672c\u9898\u662f\u5426\u6ee1\u8db3\u52a8\u89c4\u7684\u4e24\u4e2a\u6761\u4ef6\uff0c"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,s.yg)("inlineCode",{parentName:"li"},"n=12")," \u8fd9\u4e2a\u95ee\u9898\uff0c\u5b83\u7684\u6700\u4f18\u89e3\u662f",(0,s.yg)("inlineCode",{parentName:"li"},"12 = 4 + 4 + 4"),"\uff0c\u90a3\u4e48 ",(0,s.yg)("inlineCode",{parentName:"li"},"n=8")," \u8fd9\u4e2a\u5b50\u95ee\u9898\u7684\u7b54\u6848\u5c31\u662f",(0,s.yg)("inlineCode",{parentName:"li"},"n=12"),"\u7684\u7b54\u6848\u51cf1\uff0c\u53732\uff0c\u53ef\u89c1\u7236\u95ee\u9898\u7684\u6700\u4f18\u89e3\u5305\u542b\u4e86\u5b50\u95ee\u9898\u7684\u6700\u4f18\u89e3\uff0c\u56e0\u6b64\u672c\u9898\u5177\u6709\u6700\u4f18\u5b50\u7ed3\u6784\u7684\u6027\u8d28\u3002"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"n=12"),"\u4f9d\u8d56",(0,s.yg)("inlineCode",{parentName:"li"},"n=4"),"\u8fd9\u4e2a\u5b50\u95ee\u9898\uff0c",(0,s.yg)("inlineCode",{parentName:"li"},"n=8"),"\u4e5f\u4f9d\u8d56",(0,s.yg)("inlineCode",{parentName:"li"},"n=4"),"\u8fd9\u4e2a\u5b50\u95ee\u9898\uff0c\u56e0\u6b64\u672c\u9898\u5177\u6709\u91cd\u53e0\u5b50\u95ee\u9898\u7684\u6027\u8d28\u3002")),(0,s.yg)("p",null,"\u53ef\u89c1\u672c\u9898\u6ee1\u8db3\u52a8\u6001\u89c4\u5212\u7684\u4e24\u4e2a\u6761\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u6765\u89e3\u51b3\u672c\u9898\u3002"),(0,s.yg)("p",null,"\u7531\u4e8e\u5e73\u65b9\u6570\u53ef\u4ee5\u4f7f\u7528\u65e0\u9650\u6b21\uff0c\u672c\u9898\u662f\u4e00\u4e2a\u5b8c\u5168\u80cc\u5305\u95ee\u9898\uff0c\u4ee4",(0,s.yg)("inlineCode",{parentName:"p"},"f(j)"),"\u8868\u793a\u51d1\u51fa\u603b\u548c",(0,s.yg)("inlineCode",{parentName:"p"},"j"),"\u6240\u9700\u8981\u7684\u5e73\u65b9\u6570\u7684\u6700\u5c11\u4e2a\u6570\uff0c\u53ef\u5f97\u52a8\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a\uff1a"),(0,s.yg)("div",{className:"math math-display"},(0,s.yg)("span",{parentName:"div",className:"katex-display"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"f"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("mi",{parentName:"mrow"},"j"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.yg)("mo",{parentName:"mrow"},"="),(0,s.yg)("mrow",{parentName:"mrow"},(0,s.yg)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.yg)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,s.yg)("mtr",{parentName:"mtable"},(0,s.yg)("mtd",{parentName:"mtr"},(0,s.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.yg)("mn",{parentName:"mstyle"},"0"))),(0,s.yg)("mtd",{parentName:"mtr"},(0,s.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.yg)("mrow",{parentName:"mstyle"},(0,s.yg)("mi",{parentName:"mrow"},"j"),(0,s.yg)("mo",{parentName:"mrow"},"="),(0,s.yg)("mn",{parentName:"mrow"},"0"))))),(0,s.yg)("mtr",{parentName:"mtable"},(0,s.yg)("mtd",{parentName:"mtr"},(0,s.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.yg)("mrow",{parentName:"mstyle"},(0,s.yg)("mi",{parentName:"mrow"},"min"),(0,s.yg)("mo",{parentName:"mrow"},"\u2061"),(0,s.yg)("mrow",{parentName:"mrow"},(0,s.yg)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.yg)("mi",{parentName:"mrow"},"f"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("mi",{parentName:"mrow"},"j"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,s.yg)("mi",{parentName:"mrow"},"f"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("mi",{parentName:"mrow"},"j"),(0,s.yg)("mo",{parentName:"mrow"},"\u2212"),(0,s.yg)("mi",{parentName:"mrow"},"i"),(0,s.yg)("mo",{parentName:"mrow"},"\u2217"),(0,s.yg)("mi",{parentName:"mrow"},"i"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.yg)("mo",{parentName:"mrow"},"+"),(0,s.yg)("mn",{parentName:"mrow"},"1"),(0,s.yg)("mo",{parentName:"mrow",fence:"true"},"}"))))),(0,s.yg)("mtd",{parentName:"mtr"},(0,s.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.yg)("mrow",{parentName:"mstyle"},(0,s.yg)("mn",{parentName:"mrow"},"1"),(0,s.yg)("mo",{parentName:"mrow"},"\u2264"),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"i"),(0,s.yg)("mn",{parentName:"msup"},"2")),(0,s.yg)("mo",{parentName:"mrow"},"\u2264"),(0,s.yg)("mi",{parentName:"mrow"},"n")))))))),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(j)=\\begin{cases} 0 & j=0 \\\\ \\min\\left\\{f(j),f(j-i*i)+1\\right\\} & 1 \\leq i^2 \\leq n \\end{cases}")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"="),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,s.yg)("span",{parentName:"span",className:"minner"},(0,s.yg)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,s.yg)("span",{parentName:"span",className:"delimsizing size4"},"{")),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mtable"},(0,s.yg)("span",{parentName:"span",className:"col-align-l"},(0,s.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord"},"0"))),(0,s.yg)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mop"},"min"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"minner"},(0,s.yg)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"{"),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"),(0,s.yg)("span",{parentName:"span",className:"mpunct"},","),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},"1"),(0,s.yg)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"}"))))),(0,s.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.yg)("span",{parentName:"span"}))))),(0,s.yg)("span",{parentName:"span",className:"arraycolsep",style:{width:"1em"}}),(0,s.yg)("span",{parentName:"span",className:"col-align-l"},(0,s.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"="),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},"0"))),(0,s.yg)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord"},"1"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n")))),(0,s.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.yg)("span",{parentName:"span"}))))))),(0,s.yg)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.yg)(m.A,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.yg)(p.A,{value:"python",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"TODO\n"))),(0,s.yg)(p.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"TODO\n"))),(0,s.yg)(p.A,{value:"cpp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(n*sqrt(n))\n// Space Complexity: O(n)\nclass Solution {\npublic:\n    int numSquares(int n) {\n        const int N = floor((double)sqrt(n));\n        vector<int> dp(n+1, n+1);\n        dp[0] = 0; // base case\n\n        for (int i = 1; i * i <= n; ++i) {\n            for (int j = i*i; j <= n; j++) {\n                dp[j] = min(dp[j], dp[j-i*i] + 1);\n            }\n        }\n\n        return dp[n];\n    }\n};\n")))),(0,s.yg)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,s.yg)("inlineCode",{parentName:"p"},"dp")," \u6570\u7ec4\u65f6\uff0c\u672c\u9898\u6c42\u7684\u662f\u6700\u5c11\u6570\u76ee\uff0c\u56e0\u6b64\u8981\u521d\u59cb\u5316\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"INT_MAX"),"\uff0c\u4e0d\u8fc7\u7531\u4e8e\u4ee3\u7801\u540e\u9762\u6709+1\u7684\u64cd\u4f5c\uff0c",(0,s.yg)("inlineCode",{parentName:"p"},"INT_MAX+1")," \u4f1a\u6ea2\u51fa\uff0c\u56e0\u6b64\u7528",(0,s.yg)("inlineCode",{parentName:"p"},"n+1"),"\u4ee3\u66ff",(0,s.yg)("inlineCode",{parentName:"p"},"INT_MAX"),"\u3002\u5f53\u5168\u90e8\u75281\u6765\u51d1\u51fa",(0,s.yg)("inlineCode",{parentName:"p"},"n"),"\u65f6\uff0c\u6240\u9700\u6570\u76ee\u6700\u5927\uff0c\u4e3a",(0,s.yg)("inlineCode",{parentName:"p"},"n"),", \u56e0\u6b64",(0,s.yg)("inlineCode",{parentName:"p"},"n+1"),"\u4e00\u5b9a\u662f\u4e00\u4e2a\u65e0\u6548\u7684\u5927\u6570\u3002"),(0,s.yg)("p",null,"\u672c\u9898\u7684\u539f\u5b50\u95ee\u9898(base case)\u662f\uff0c\u5f53 ",(0,s.yg)("inlineCode",{parentName:"p"},"n"),"\u4e3a\u5b8c\u5168\u5e73\u65b9\u6570\uff0c\u5219 ",(0,s.yg)("inlineCode",{parentName:"p"},"dp[n]=1"),"\u3002\u5176\u5b9e0\u4e5f\u662f\u4e2a\u5b8c\u5168\u5e73\u65b9\u6570\uff0c\u4f46\u662f\u4e00\u65e6\u7528\u5230\u4e860\uff0c\u90a3\u80af\u5b9a\u4e0d\u662f\u6700\u4f18\u89e3\uff0c\u6240\u4ee5 ",(0,s.yg)("inlineCode",{parentName:"p"},"dp[0]"),"\u521d\u59cb\u5316\u4e3a0\u800c\u4e0d\u662f1\uff0c\u662f\u4e3a\u4e86\u8ba9\u5176\u4ed6\u7684\u5b8c\u5168\u5e73\u65b9\u6570\uff0c\u4f8b\u5982 1, 4, 9\uff0c\u5728\u5185\u5c42\u5faa\u73af\u4e2d\uff0c\u6709\u673a\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a1\u3002"))}c.isMDXComponent=!0}}]);