"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,c=d["".concat(s,".").concat(u)]||d[u]||k[u]||i;return t?a.createElement(c,l(l({ref:n},m),{},{components:t})):a.createElement(c,l({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(7462),r=t(7294),i=t(6010),l=t(2389),o=t(7392),s=t(7094),p=t(2466);const m="tabList__CuJ",k="tabItem_LNqP";function d(e){var n,t;const{lazy:l,block:d,defaultValue:u,values:c,groupId:N,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,o.l)(b,((e,n)=>e.value===n.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===u?u:null!=(n=null!=u?u:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:A}=(0,s.U)(),[C,w]=(0,r.useState)(y),B=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=N){const e=g[N];null!=e&&e!==C&&b.some((n=>n.value===e))&&w(e)}const x=e=>{const n=e.currentTarget,t=B.indexOf(n),a=b[t].value;a!==C&&(O(n),w(a),null!=N&&A(N,String(a)))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=B.indexOf(e.currentTarget)+1;t=null!=(a=B[n])?a:B[0];break}case"ArrowLeft":{var r;const n=B.indexOf(e.currentTarget)-1;t=null!=(r=B[n])?r:B[B.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>B.push(e),onKeyDown:T,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function u(e){const n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},3520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>k});var a=t(7462),r=(t(7294),t(3905)),i=t(5488),l=t(5162);const o={title:"Median of Two Sorted Arrays"},s=void 0,p={unversionedId:"search/median-of-two-sorted-arrays",id:"search/median-of-two-sorted-arrays",title:"Median of Two Sorted Arrays",description:"\u63cf\u8ff0",source:"@site/docs/search/median-of-two-sorted-arrays.md",sourceDirName:"search",slug:"/search/median-of-two-sorted-arrays",permalink:"/search/median-of-two-sorted-arrays",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/search/median-of-two-sorted-arrays.md",tags:[],version:"current",frontMatter:{title:"Median of Two Sorted Arrays"},sidebar:"someSidebar",previous:{title:"Find Minimum in Rotated Sorted Array II",permalink:"/search/find-minimum-in-rotated-sorted-array-ii"},next:{title:"H-Index II",permalink:"/search/h-index-ii"}},m={},k=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:k};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"There are two sorted arrays ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," of size ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," respectively. Find the median of the two sorted arrays. The overall run time complexity should be ",(0,r.kt)("inlineCode",{parentName:"p"},"O(log (m+n))"),"."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u9053\u975e\u5e38\u7ecf\u5178\u7684\u9898\u3002\u8fd9\u9898\u66f4\u901a\u7528\u7684\u5f62\u5f0f\u662f\uff0c\u7ed9\u5b9a\u4e24\u4e2a\u5df2\u7ecf\u6392\u5e8f\u597d\u7684\u6570\u7ec4\uff0c\u627e\u5230\u4e24\u8005\u6240\u6709\u5143\u7d20\u4e2d\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5927\u7684\u5143\u7d20\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"O(m+n)"),"\u7684\u89e3\u6cd5\u6bd4\u8f83\u76f4\u89c2\uff0c\u76f4\u63a5 merge \u4e24\u4e2a\u6570\u7ec4\uff0c\u7136\u540e\u6c42\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5927\u7684\u5143\u7d20\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\u6211\u4eec\u4ec5\u4ec5\u9700\u8981\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5927\u7684\u5143\u7d20\uff0c\u662f\u4e0d\u9700\u8981\u201c\u6392\u5e8f\u201d\u8fd9\u4e48\u6602\u8d35\u7684\u64cd\u4f5c\u7684\u3002\u53ef\u4ee5\u7528\u4e00\u4e2a\u8ba1\u6570\u5668\uff0c\u8bb0\u5f55\u5f53\u524d\u5df2\u7ecf\u627e\u5230\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"\u5927\u7684\u5143\u7d20\u4e86\u3002\u540c\u65f6\u6211\u4eec\u4f7f\u7528\u4e24\u4e2a\u6307\u9488",(0,r.kt)("inlineCode",{parentName:"p"},"pA"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"pB"),"\uff0c\u5206\u522b\u6307\u5411 A \u548c B \u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u4f7f\u7528\u7c7b\u4f3c\u4e8e merge sort \u7684\u539f\u7406\uff0c\u5982\u679c\u6570\u7ec4 A \u5f53\u524d\u5143\u7d20\u5c0f\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"pA++"),"\uff0c\u540c\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"m++"),"\uff1b\u5982\u679c\u6570\u7ec4 B \u5f53\u524d\u5143\u7d20\u5c0f\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"pB++"),"\uff0c\u540c\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"m++"),"\u3002\u6700\u7ec8\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"\u7b49\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u7684\u65f6\u5019\uff0c\u5c31\u5f97\u5230\u4e86\u6211\u4eec\u7684\u7b54\u6848\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"O(k)"),"\u65f6\u95f4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"O(1)"),"\u7a7a\u95f4\u3002\u4f46\u662f\uff0c\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5f88\u63a5\u8fd1",(0,r.kt)("inlineCode",{parentName:"p"},"m+n"),"\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u8fd8\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"O(m+n)"),"\u7684\u3002"),(0,r.kt)("p",null,"\u6709\u6ca1\u6709\u66f4\u597d\u7684\u65b9\u6848\u5462\uff1f\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5165\u624b\u3002\u5982\u679c\u6211\u4eec\u6bcf\u6b21\u90fd\u80fd\u591f\u5220\u9664\u4e00\u4e2a\u4e00\u5b9a\u5728\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5927\u5143\u7d20\u4e4b\u524d\u7684\u5143\u7d20\uff0c\u90a3\u4e48\u6211\u4eec\u9700\u8981\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u6b21\u3002\u4f46\u662f\u5982\u679c\u6bcf\u6b21\u6211\u4eec\u90fd\u5220\u9664\u4e00\u534a\u5462\uff1f\u7531\u4e8e A \u548c B \u90fd\u662f\u6709\u5e8f\u7684\uff0c\u6211\u4eec\u5e94\u8be5\u5145\u5206\u5229\u7528\u8fd9\u91cc\u9762\u7684\u4fe1\u606f\uff0c\u7c7b\u4f3c\u4e8e\u4e8c\u5206\u67e5\u627e\uff0c\u4e5f\u662f\u5145\u5206\u5229\u7528\u4e86\u201c\u6709\u5e8f\u201d\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe A \u548c B \u7684\u5143\u7d20\u4e2a\u6570\u90fd\u5927\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"k/2"),"\uff0c\u6211\u4eec\u5c06 A \u7684\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k/2"),"\u4e2a\u5143\u7d20\uff08\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"A[k/2-1]"),"\uff09\u548c B \u7684\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k/2"),"\u4e2a\u5143\u7d20\uff08\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"B[k/2-1]"),"\uff09\u8fdb\u884c\u6bd4\u8f83\uff0c\u6709\u4ee5\u4e0b\u4e09\u79cd\u60c5\u51b5\uff08\u4e3a\u4e86\u7b80\u5316\u8fd9\u91cc\u5148\u5047\u8bbe",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u4e3a\u5076\u6570\uff0c\u6240\u5f97\u5230\u7684\u7ed3\u8bba\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u662f\u5947\u6570\u4e5f\u662f\u6210\u7acb\u7684\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A[k/2-1] == B[k/2-1]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A[k/2-1] > B[k/2-1]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A[k/2-1] < B[k/2-1]"))),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"A[k/2-1] < B[k/2-1]"),"\uff0c\u610f\u5473\u7740",(0,r.kt)("inlineCode",{parentName:"p"},"A[0]"),"\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"A[k/2-1]"),"\u7684\u80af\u5b9a\u5728",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u222a"),(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A \\cup B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u222a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"))))),"\u7684 top k \u5143\u7d20\u7684\u8303\u56f4\u5185\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"A[k/2-1]"),"\u4e0d\u53ef\u80fd\u5927\u4e8e",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u222a"),(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A \\cup B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u222a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"))))),"\u7684\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5927\u5143\u7d20\u3002\u7559\u7ed9\u8bfb\u8005\u8bc1\u660e\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u653e\u5fc3\u7684\u5220\u9664 A \u6570\u7ec4\u7684\u8fd9",(0,r.kt)("inlineCode",{parentName:"p"},"k/2"),"\u4e2a\u5143\u7d20\u3002\u540c\u7406\uff0c\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"A[k/2-1] > B[k/2-1]"),"\u65f6\uff0c\u53ef\u4ee5\u5220\u9664 B \u6570\u7ec4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"k/2"),"\u4e2a\u5143\u7d20\u3002"),(0,r.kt)("p",null,"\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"A[k/2-1] == B[k/2-1]"),"\u65f6\uff0c\u8bf4\u660e\u627e\u5230\u4e86\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u5927\u7684\u5143\u7d20\uff0c\u76f4\u63a5\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"A[k/2-1]"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"B[k/2-1]"),"\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u5199\u4e00\u4e2a\u9012\u5f52\u51fd\u6570\u3002\u90a3\u4e48\u51fd\u6570\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u7ec8\u6b62\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53 A \u6216 B \u662f\u7a7a\u65f6\uff0c\u76f4\u63a5\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"li"},"B[k-1]"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"A[k-1]"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"k=1"),"\u662f\uff0c\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"li"},"min(A[0], B[0])"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"A[k/2-1] == B[k/2-1]"),"\u65f6\uff0c\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"li"},"A[k/2-1]"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"B[k/2-1]"))),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Median of Two Sorted Arrays\n// Time Complexity: O(log(m+n))\uff0cSpace Complexity: O(log(m+n))\npublic class Solution {\n    public double findMedianSortedArrays(final int[] A, final int[] B) {\n        int total = A.length + B.length;\n        if (total %2 == 1)\n            return findKth(A, 0, B, 0, total / 2 + 1);\n        else\n            return (findKth(A, 0, B, 0, total / 2)\n                    + findKth(A, 0, B, 0, total / 2 + 1)) / 2.0;\n    }\n\n    private static int findKth(final int[] A, int ai, final int[] B, int bi, int k) {\n        //always assume that A is shorter than B\n        if (A.length - ai > B.length - bi) {\n            return findKth(B, bi, A, ai, k);\n        }\n        if (A.length - ai == 0) return B[bi + k - 1];\n        if (k == 1) return Math.min(A[ai], B[bi]);\n\n        //divide k into two parts\n        int k1 = Math.min(k / 2, A.length - ai), k2 = k - k1;\n        if (A[ai + k1 - 1] < B[bi + k2 - 1])\n            return findKth(A, ai + k1, B, bi, k - k1);\n        else if (A[ai + k1 - 1] > B[bi + k2 - 1])\n            return findKth(A, ai, B, bi + k2, k - k2);\n        else\n            return A[ai + k1 - 1];\n    }\n};\n\n"))),(0,r.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Median of Two Sorted Arrays\n// Time Complexity: O(log(m+n))\uff0cSpace Complexity: O(log(m+n))\nclass Solution {\npublic:\n    double findMedianSortedArrays(const vector<int>& A, const vector<int>& B) {\n        const int total = A.size() + B.size();\n        if (total %2 == 1)\n            return find_kth(A.begin(), m, B.begin(), n, total / 2 + 1);\n        else\n            return (find_kth(A.begin(), m, B.begin(), n, total / 2)\n                    + find_kth(A.begin(), m, B.begin(), n, total / 2 + 1)) / 2.0;\n    }\nprivate:\n    static int find_kth(std::vector<int>::const_iterator A, int m,\n            std::vector<int>::const_iterator B, int n, int k) {\n        //always assume that m is equal or smaller than n\n        if (m > n) return find_kth(B, n, A, m, k);\n        if (m == 0) return *(B + k - 1);\n        if (k == 1) return min(*A, *B);\n\n        //divide k into two parts\n        int ia = min(k / 2, m), ib = k - ia;\n        if (*(A + ia - 1) < *(B + ib - 1))\n            return find_kth(A + ia, m - ia, B, n, k - ia);\n        else if (*(A + ia - 1) > *(B + ib - 1))\n            return find_kth(A, m, B + ib, n - ib, k - ib);\n        else\n            return A[ia - 1];\n    }\n};\n")))))}u.isMDXComponent=!0}}]);