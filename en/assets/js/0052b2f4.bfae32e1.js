"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5608],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>N});var s=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function m(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,s,t=function(e,a){if(null==e)return{};var n,s,t={},m=Object.keys(e);for(s=0;s<m.length;s++)n=m[s],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(s=0;s<m.length;s++)n=m[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=s.createContext({}),i=function(e){var a=s.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},o=function(e){var a=i(e.components);return s.createElement(p.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},c=s.forwardRef((function(e,a){var n=e.components,t=e.mdxType,m=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),g=i(n),c=t,N=g["".concat(p,".").concat(c)]||g[c]||y[c]||m;return n?s.createElement(N,r(r({ref:a},o),{},{components:n})):s.createElement(N,r({ref:a},o))}));function N(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var m=n.length,r=new Array(m);r[0]=c;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[g]="string"==typeof e?e:t,r[1]=l;for(var i=2;i<m;i++)r[i]=n[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>r});var s=n(96540),t=n(20053);const m={tabItem:"tabItem_Ymn6"};function r(e){let{children:a,hidden:n,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,t.A)(m.tabItem,r),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>y});var s=n(58168),t=n(96540),m=n(20053),r=n(92303),l=n(31682),p=n(86976),i=n(23104);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){const{lazy:a,block:n,defaultValue:r,values:g,groupId:y,className:c}=e,N=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),u=g??N.map((e=>{let{props:{value:a,label:n,attributes:s}}=e;return{value:a,label:n,attributes:s}})),d=(0,l.X)(u,((e,a)=>e.value===a.value));if(d.length>0)throw new Error(`Docusaurus error: Duplicate values "${d.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===r?r:r??N.find((e=>e.props.default))?.props.value??N[0].props.value;if(null!==h&&!u.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${u.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,p.x)(),[v,w]=(0,t.useState)(h),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.a_)();if(null!=y){const e=f[y];null!=e&&e!==v&&u.some((a=>a.value===e))&&w(e)}const O=e=>{const a=e.currentTarget,n=j.indexOf(a),s=u[n].value;s!==v&&(x(a),w(s),null!=y&&b(y,String(s)))},C=e=>{let a=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;a=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;a=j[n]??j[j.length-1];break}}a?.focus()};return t.createElement("div",{className:(0,m.A)("tabs-container",o.tabList)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("tabs",{"tabs--block":n},c)},u.map((e=>{let{value:a,label:n,attributes:r}=e;return t.createElement("li",(0,s.A)({role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,key:a,ref:e=>j.push(e),onKeyDown:C,onFocus:O,onClick:O},r,{className:(0,m.A)("tabs__item",o.tabItem,r?.className,{"tabs__item--active":v===a})}),n??a)}))),a?(0,t.cloneElement)(N.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},N.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==v})))))}function y(e){const a=(0,r.A)();return t.createElement(g,(0,s.A)({key:String(a)},e))}},28779:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var s=n(58168),t=(n(96540),n(15680)),m=n(4865),r=n(19365);const l={title:"Longest Increasing Subsequence"},p=void 0,i={unversionedId:"dp/longest-increasing-subsequence",id:"dp/longest-increasing-subsequence",title:"Longest Increasing Subsequence",description:"\u63cf\u8ff0",source:"@site/docs/dp/longest-increasing-subsequence.md",sourceDirName:"dp",slug:"/dp/longest-increasing-subsequence",permalink:"/en/dp/longest-increasing-subsequence",draft:!1,tags:[],version:"current",frontMatter:{title:"Longest Increasing Subsequence"},sidebar:"docs",previous:{title:"Maximum Product Subarray",permalink:"/en/dp/maximum-product-subarray"},next:{title:"Russian Doll Envelopes",permalink:"/en/dp/russian-doll-envelopes"}},o={},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u89e3\u6cd5 1 \u52a8\u89c4",id:"\u89e3\u6cd5-1-\u52a8\u89c4",level:3},{value:"\u89e3\u6cd5 2 Insert Position",id:"\u89e3\u6cd5-2-insert-position",level:3}],y={toc:g},c="wrapper";function N(e){let{components:a,...n}=e;return(0,t.yg)(c,(0,s.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,t.yg)("p",null,"Given an unsorted array of integers, find the length of longest increasing subsequence."),(0,t.yg)("p",null,"For example,"),(0,t.yg)("p",null,"Given ",(0,t.yg)("inlineCode",{parentName:"p"},"[10, 9, 2, 5, 3, 7, 101, 18]"),","),(0,t.yg)("p",null,"The longest increasing subsequence is ",(0,t.yg)("inlineCode",{parentName:"p"},"[2, 3, 7, 101]"),", therefore the length is ",(0,t.yg)("inlineCode",{parentName:"p"},"4"),". Note that there may be more than one LIS combination, it is only necessary for you to return the length."),(0,t.yg)("p",null,"Your algorithm should run in ",(0,t.yg)("inlineCode",{parentName:"p"},"O(n^2)")," complexity."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Follow up"),": Could you improve it to O(n log n) time complexity?"),(0,t.yg)("h3",{id:"\u89e3\u6cd5-1-\u52a8\u89c4"},"\u89e3\u6cd5 1 \u52a8\u89c4"),(0,t.yg)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u591a\u9636\u6bb5\u51b3\u7b56\u95ee\u9898\uff0c\u6c42\u6700\u957f\uff0c\u662f\u4e00\u4e2a\u6700\u4f18\u5316\u95ee\u9898\u3002\u5148\u5224\u65ad\u5b83\u662f\u5426\u6ee1\u8db3\u52a8\u89c4\u7684\u4e24\u4e2a\u6027\u8d28\uff0c\u5bf9\u4e8e\u9898\u4e2d\u7684\u4f8b\u5b50\uff0c"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"[10, 9, 2, 5, 3, 7, 101, 18]"),"\u7684\u7b54\u6848\uff0c\u5fc5\u7136\u5305\u542b\u5b50\u95ee\u9898 ",(0,t.yg)("inlineCode",{parentName:"li"},"[10, 9, 2, 5, 3, 7]")," \u7684\u7b54\u6848\uff0c\u5373\u672c\u9898\u5177\u6709\u6700\u4f18\u5b50\u7ed3\u6784\u6027\u8d28"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"[10, 9, 2, 5, 3, 7, 101, 18]")," \u548c ",(0,t.yg)("inlineCode",{parentName:"li"},"[10, 9, 2, 5, 3, 7]")," \u90fd\u4f9d\u8d56 ",(0,t.yg)("inlineCode",{parentName:"li"},"[10, 9, 2, 5, 3]"),"\u8fd9\u4e2a\u5b50\u95ee\u9898\uff0c\u5373\u672c\u9898\u5177\u6709\u91cd\u53e0\u5b50\u95ee\u9898\u6027\u8d28")),(0,t.yg)("p",null,"\u56e0\u6b64\u672c\u9898\u53ef\u4ee5\u7528\u52a8\u89c4\u6765\u89e3\u51b3\u3002"),(0,t.yg)("p",null,"\u6700\u91cd\u8981\u7684\u662f\u8981\u5b9a\u4e49\u51fa\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u3002\u4e00\u4e2a\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u80af\u5b9a\u662f\u6709\u9996\u5c3e\u4e24\u4e2a\u7aef\u70b9\u7684\uff0c\u5047\u8bbe",(0,t.yg)("inlineCode",{parentName:"p"},"f[i]"),"\u8868\u793a\u4ee5\u7b2c",(0,t.yg)("inlineCode",{parentName:"p"},"i"),"\u4e2a\u5143\u7d20\u4e3a\u8d77\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48 ",(0,t.yg)("inlineCode",{parentName:"p"},"f[i]"),"\u548c",(0,t.yg)("inlineCode",{parentName:"p"},"f[j]"),"\u4e4b\u95f4\u6ca1\u6709\u5fc5\u7136\u8054\u7cfb\uff0c\u8fd9\u4e2a\u51fd\u6570\u5b9a\u4e49\u4e0d\u597d\u7528\u3002"),(0,t.yg)("p",null,"\u5047\u8bbe",(0,t.yg)("inlineCode",{parentName:"p"},"f[j]"),"\u8868\u793a\u4ee5\u7b2c",(0,t.yg)("inlineCode",{parentName:"p"},"j"),"\u4e2a\u5143\u7d20\u4e3a\u7ec8\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48\u5982\u679c",(0,t.yg)("inlineCode",{parentName:"p"},"i<j"),"\u4e14",(0,t.yg)("inlineCode",{parentName:"p"},"nums[i]<nums[j]"),"\uff0c\u5219",(0,t.yg)("inlineCode",{parentName:"p"},"f[i]"),"\u4e00\u5b9a\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"f[j]"),"\u7684\u524d\u7f00\uff0c\u8fd9\u4e2a\u51fd\u6570\u5b9a\u4e49\u80fd\u8868\u793a\u5b50\u95ee\u9898\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"),(0,t.yg)("p",null,"\u4ee5",(0,t.yg)("inlineCode",{parentName:"p"},"j"),"\u5143\u7d20\u4e3a\u7ec8\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u957f\u5ea6\u8d77\u7801\u4e3a1\uff0c\u56e0\u4e3a\u6700\u8d77\u7801\u53ef\u4ee5\u6709\u4e00\u4e2a",(0,t.yg)("inlineCode",{parentName:"p"},"j"),"\u5143\u7d20\uff0c\u5355\u5143\u7d20\u5e8f\u5217\uff0c\u5c31\u662f\u672c\u9898\u7684\u539f\u5b50\u95ee\u9898\u3002"),(0,t.yg)("p",null,"\u7efc\u4e0a\uff0c\u53ef\u5f97\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a\uff1a"),(0,t.yg)("div",{className:"math math-display"},(0,t.yg)("span",{parentName:"div",className:"katex-display"},(0,t.yg)("span",{parentName:"span",className:"katex"},(0,t.yg)("span",{parentName:"span",className:"katex-mathml"},(0,t.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,t.yg)("semantics",{parentName:"math"},(0,t.yg)("mrow",{parentName:"semantics"},(0,t.yg)("mi",{parentName:"mrow"},"f"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.yg)("mi",{parentName:"mrow"},"j"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.yg)("mo",{parentName:"mrow"},"="),(0,t.yg)("mrow",{parentName:"mrow"},(0,t.yg)("mo",{parentName:"mrow",fence:"true"},"{"),(0,t.yg)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,t.yg)("mtr",{parentName:"mtable"},(0,t.yg)("mtd",{parentName:"mtr"},(0,t.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,t.yg)("mn",{parentName:"mstyle"},"1"))),(0,t.yg)("mtd",{parentName:"mtr"},(0,t.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,t.yg)("mrow",{parentName:"mstyle"},(0,t.yg)("mi",{parentName:"mrow"},"j"),(0,t.yg)("mo",{parentName:"mrow"},"\u2265"),(0,t.yg)("mn",{parentName:"mrow"},"0"))))),(0,t.yg)("mtr",{parentName:"mtable"},(0,t.yg)("mtd",{parentName:"mtr"},(0,t.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,t.yg)("mrow",{parentName:"mstyle"},(0,t.yg)("mi",{parentName:"mrow"},"max"),(0,t.yg)("mo",{parentName:"mrow"},"\u2061"),(0,t.yg)("mrow",{parentName:"mrow"},(0,t.yg)("mo",{parentName:"mrow",fence:"true"},"{"),(0,t.yg)("mi",{parentName:"mrow"},"f"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.yg)("mi",{parentName:"mrow"},"i"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.yg)("mo",{parentName:"mrow",fence:"true"},"}")),(0,t.yg)("mo",{parentName:"mrow"},"+"),(0,t.yg)("mn",{parentName:"mrow"},"1")))),(0,t.yg)("mtd",{parentName:"mtr"},(0,t.yg)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,t.yg)("mrow",{parentName:"mstyle"},(0,t.yg)("mn",{parentName:"mrow"},"0"),(0,t.yg)("mo",{parentName:"mrow"},"\u2264"),(0,t.yg)("mi",{parentName:"mrow"},"i"),(0,t.yg)("mo",{parentName:"mrow"},"<"),(0,t.yg)("mi",{parentName:"mrow"},"j"),(0,t.yg)("mo",{parentName:"mrow"},"\u2227"),(0,t.yg)("mi",{parentName:"mrow"},"n"),(0,t.yg)("mi",{parentName:"mrow"},"u"),(0,t.yg)("mi",{parentName:"mrow"},"m"),(0,t.yg)("mi",{parentName:"mrow"},"s"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,t.yg)("mi",{parentName:"mrow"},"i"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,t.yg)("mo",{parentName:"mrow"},"<"),(0,t.yg)("mi",{parentName:"mrow"},"n"),(0,t.yg)("mi",{parentName:"mrow"},"u"),(0,t.yg)("mi",{parentName:"mrow"},"m"),(0,t.yg)("mi",{parentName:"mrow"},"s"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,t.yg)("mi",{parentName:"mrow"},"j"),(0,t.yg)("mo",{parentName:"mrow",stretchy:"false"},"]")))))))),(0,t.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(j)=\\begin{cases} 1 & j \\geq 0\\\\ \\max\\left\\{f(i)\\right\\}+1 & 0 \\leq i < j \\land nums[i] < nums[j] \\end{cases}")))),(0,t.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.yg)("span",{parentName:"span",className:"mopen"},"("),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,t.yg)("span",{parentName:"span",className:"mclose"},")"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"="),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,t.yg)("span",{parentName:"span",className:"minner"},(0,t.yg)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,t.yg)("span",{parentName:"span",className:"delimsizing size4"},"{")),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mtable"},(0,t.yg)("span",{parentName:"span",className:"col-align-l"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-3.69em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord"},"1"))),(0,t.yg)("span",{parentName:"span",style:{top:"-2.25em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mop"},"max"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.yg)("span",{parentName:"span",className:"minner"},(0,t.yg)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"{"),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.yg)("span",{parentName:"span",className:"mopen"},"("),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,t.yg)("span",{parentName:"span",className:"mclose"},")"),(0,t.yg)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"}")),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},"1")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,t.yg)("span",{parentName:"span"}))))),(0,t.yg)("span",{parentName:"span",className:"arraycolsep",style:{width:"1em"}}),(0,t.yg)("span",{parentName:"span",className:"col-align-l"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-3.69em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},"0"))),(0,t.yg)("span",{parentName:"span",style:{top:"-2.25em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord"},"0"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"<"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.yg)("span",{parentName:"span",className:"mbin"},"\u2227"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,t.yg)("span",{parentName:"span",className:"mopen"},"["),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,t.yg)("span",{parentName:"span",className:"mclose"},"]"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"<"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,t.yg)("span",{parentName:"span",className:"mopen"},"["),(0,t.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,t.yg)("span",{parentName:"span",className:"mclose"},"]")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,t.yg)("span",{parentName:"span"}))))))),(0,t.yg)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,t.yg)("p",null,"\u6709\u4e86\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff0c\u4ee3\u7801\u5c31\u4e0d\u96be\u5199\u4e86\u3002"),(0,t.yg)(m.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,t.yg)(r.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n        int[] dp = new int[nums.length];\n        Arrays.fill(dp, 1); // base case\n        int global = 1;\n        for (int j = 1; j < nums.length; ++j) {\n            for (int i = 0; i < j; ++i) {\n                if (nums[i] < nums[j]) {\n                    dp[j] = Math.max(dp[j], dp[i] + 1);\n                }\n            }\n            global = Math.max(global, dp[j]);\n        }\n        return global;\n    }\n}\n"))),(0,t.yg)(r.A,{value:"cpp",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        vector<int> dp(nums.size(), 1);\n        for (int j = 1; j < nums.size(); ++j) {\n            for (int i = 0; i < j; ++i) {\n                if (nums[i] < nums[j]) {\n                    dp[j] = max(dp[j], dp[i] + 1);\n                }\n            }\n        }\n        return *std::max_element(dp.begin(), dp.end());\n    }\n};\n")))),(0,t.yg)("h3",{id:"\u89e3\u6cd5-2-insert-position"},"\u89e3\u6cd5 2 Insert Position"),(0,t.yg)("p",null,"\u672c\u9898\u6700\u540e\u6709\u4e00\u4e2a\u8fdb\u9636\u95ee\u9898\uff0c\u80fd\u4e0d\u80fd",(0,t.yg)("inlineCode",{parentName:"p"},"O(n log n)")," \u89e3\u51b3\uff1f"),(0,t.yg)("p",null,"\u7ef4\u62a4\u4e00\u4e2a\u5355\u8c03\u9012\u589e\u5e8f\u5217\uff0c\u904d\u5386\u6570\u7ec4\uff0c\u4e8c\u5206\u67e5\u627e\u6bcf\u4e00\u4e2a\u6570\u5728\u5355\u8c03\u5e8f\u5217\u4e2d\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u66ff\u6362\u4e4b\u3002"),(0,t.yg)("p",null,"\u8fd9\u4e2a\u7b97\u6cd5\u4e0d\u9700\u8981\u638c\u63e1\uff0c\u9762\u8bd5\u4e2d\u51e0\u4e4e\u7528\u4e0d\u5230\uff0c\u638c\u63e1\u52a8\u89c4\u89e3\u6cd5\u5c31\u591f\u4e86\u3002"),(0,t.yg)(m.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,t.yg)(r.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        ArrayList<Integer> lis = new ArrayList<>();\n        for (int x : nums) {\n            int insertPos = lowerBound(lis, 0, lis.size(), x);\n            if (insertPos >= lis.size()) {\n                lis.add(x);\n            } else {\n                lis.set(insertPos, x);\n            }\n        }\n        return lis.size();\n    }\n    private static int lowerBound (ArrayList<Integer> A,\n                                   int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A.get(mid)) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n}\n"))),(0,t.yg)(r.A,{value:"cpp",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        vector<int> lis;\n        for (auto x : nums) {\n            int insertPos = lower_bound(lis, 0, lis.size(), x);\n            if (insertPos >= lis.size()) {\n                lis.push_back(x);\n            } else {\n                lis[insertPos] = x;\n            }\n        }\n        return lis.size();\n    }\n    int lower_bound (const vector<int>& A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A[mid]) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n};\n")))))}N.isMDXComponent=!0}}]);