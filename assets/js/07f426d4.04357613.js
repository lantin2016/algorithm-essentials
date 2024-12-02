"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4894],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(58168),a=n(96540),l=n(20053),i=n(92303),o=n(31682),s=n(86976),u=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:m,className:d}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,o.X)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,s.x)(),[k,O]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.a_)();if(null!=m){const e=v[m];null!=e&&e!==k&&b.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==k&&(w(t),O(r),null!=m&&h(m,String(r)))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},d)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:S,onClick:S},i,{className:(0,l.A)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":k===t})}),n??t)}))),t?(0,a.cloneElement)(y.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,i.A)();return a.createElement(p,(0,r.A)({key:String(t)},e))}},20002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),i=n(19365);const o={title:"Best Time to Buy and Sell Stock"},s=void 0,u={unversionedId:"greedy/best-time-to-buy-and-sell-stock",id:"greedy/best-time-to-buy-and-sell-stock",title:"Best Time to Buy and Sell Stock",description:"\u63cf\u8ff0",source:"@site/docs/greedy/best-time-to-buy-and-sell-stock.md",sourceDirName:"greedy",slug:"/greedy/best-time-to-buy-and-sell-stock",permalink:"/greedy/best-time-to-buy-and-sell-stock",draft:!1,tags:[],version:"current",frontMatter:{title:"Best Time to Buy and Sell Stock"},sidebar:"docs",previous:{title:"Jump Game II",permalink:"/greedy/jump-game-ii"},next:{title:"Best Time to Buy and Sell Stock II",permalink:"/greedy/best-time-to-buy-and-sell-stock-ii"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Say you have an array for which the i-th element is the price of a given stock on day i."),(0,a.yg)("p",null,"If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u8d2a\u5fc3\u6cd5\uff0c\u5206\u522b\u627e\u5230\u4ef7\u683c\u6700\u4f4e\u548c\u6700\u9ad8\u7684\u4e00\u5929\uff0c\u4f4e\u8fdb\u9ad8\u51fa\uff0c\u6ce8\u610f\u6700\u4f4e\u7684\u4e00\u5929\u8981\u5728\u6700\u9ad8\u7684\u4e00\u5929\u4e4b\u524d\u3002"),(0,a.yg)("p",null,"\u628a\u539f\u59cb\u4ef7\u683c\u5e8f\u5217\u53d8\u6210\u5dee\u5206\u5e8f\u5217\uff0c\u672c\u9898\u4e5f\u53ef\u4ee5\u505a\u662f\u6700\u5927",(0,a.yg)("inlineCode",{parentName:"p"},"m"),"\u5b50\u6bb5\u548c\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"m=1"),"\u3002"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Best Time to Buy and Sell Stock\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices.length < 2) return 0;\n        int profit = 0;  // \u5dee\u4ef7\uff0c\u4e5f\u5c31\u662f\u5229\u6da6\n        int cur_min = prices[0]; // \u5f53\u524d\u6700\u5c0f\n\n        for (int i = 1; i < prices.length; i++) {\n            profit = Math.max(profit, prices[i] - cur_min);\n            cur_min = Math.min(cur_min, prices[i]);\n        }\n        return profit;\n    }\n}\n"))),(0,a.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Best Time to Buy and Sell Stock\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int maxProfit(vector<int> &prices) {\n        if (prices.size() < 2) return 0;\n        int profit = 0;  // \u5dee\u4ef7\uff0c\u4e5f\u5c31\u662f\u5229\u6da6\n        int cur_min = prices[0]; // \u5f53\u524d\u6700\u5c0f\n\n        for (int i = 1; i < prices.size(); i++) {\n            profit = max(profit, prices[i] - cur_min);\n            cur_min = min(cur_min, prices[i]);\n        }\n        return profit;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/greedy/best-time-to-buy-and-sell-stock-ii"},"Best Time to Buy and Sell Stock II")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dp/best-time-to-buy-and-sell-stock-iii"},"Best Time to Buy and Sell Stock III"))))}y.isMDXComponent=!0}}]);