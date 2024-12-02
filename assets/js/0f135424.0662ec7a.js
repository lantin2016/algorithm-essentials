"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6776],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,y=u["".concat(o,".").concat(g)]||u[g]||c[g]||s;return t?n.createElement(y,l(l({ref:a},m),{},{components:t})):n.createElement(y,l({ref:a},m))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=g;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(96540),r=t(20053);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t},a)}},4865:(e,a,t)=>{t.d(a,{A:()=>c});var n=t(58168),r=t(96540),s=t(20053),l=t(92303),i=t(31682),o=t(86976),p=t(23104);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:a,block:t,defaultValue:l,values:u,groupId:c,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=u??y.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),h=(0,i.X)(d,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==f&&!d.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,o.x)(),[N,w]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.a_)();if(null!=c){const e=b[c];null!=e&&e!==N&&d.some((a=>a.value===e))&&w(e)}const j=e=>{const a=e.currentTarget,t=O.indexOf(a),n=d[t].value;n!==N&&(x(a),w(n),null!=c&&v(c,String(n)))},C=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,s.A)("tabs-container",m.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},g)},d.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>O.push(e),onKeyDown:C,onFocus:j,onClick:j},l,{className:(0,s.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":N===a})}),t??a)}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function c(e){const a=(0,l.A)();return r.createElement(u,(0,n.A)({key:String(a)},e))}},73676:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(58168),r=(t(96540),t(15680)),s=t(4865),l=t(19365);const i={title:"Gas Station"},o=void 0,p={unversionedId:"array/gas-station",id:"array/gas-station",title:"Gas Station",description:"\u63cf\u8ff0",source:"@site/docs/array/gas-station.md",sourceDirName:"array",slug:"/array/gas-station",permalink:"/array/gas-station",draft:!1,tags:[],version:"current",frontMatter:{title:"Gas Station"},sidebar:"docs",previous:{title:"Set Matrix Zeroes",permalink:"/array/set-matrix-zeroes"},next:{title:"Candy",permalink:"/array/candy"}},m={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:u},g="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"There are ",(0,r.yg)("inlineCode",{parentName:"p"},"N")," gas stations along a circular route, where the amount of gas at station ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"gas[i]"),"."),(0,r.yg)("p",null,"You have a car with an unlimited gas tank and it costs ",(0,r.yg)("inlineCode",{parentName:"p"},"cost[i]")," of gas to travel from station ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," to its next station (",(0,r.yg)("inlineCode",{parentName:"p"},"i+1"),"). You begin the journey with an empty tank at one of the gas stations."),(0,r.yg)("p",null,"Return the starting gas station's index if you can travel around the circuit once, otherwise return -1."),(0,r.yg)("p",null,"Note:\nThe solution is guaranteed to be unique."),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u9996\u5148\u60f3\u5230\u7684\u662f",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mi",{parentName:"mrow"},"O"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.yg)("msup",{parentName:"mrow"},(0,r.yg)("mi",{parentName:"msup"},"N"),(0,r.yg)("mn",{parentName:"msup"},"2")),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N^2)")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.yg)("span",{parentName:"span",className:"mopen"},"("),(0,r.yg)("span",{parentName:"span",className:"mord"},(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.yg)("span",{parentName:"span",className:"mclose"},")"))))),"\u7684\u89e3\u6cd5\uff0c\u5bf9\u6bcf\u4e2a\u70b9\u8fdb\u884c\u6a21\u62df\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"O(N)"),"\u7684\u89e3\u6cd5\u662f\uff0c\u8bbe\u7f6e\u4e24\u4e2a\u53d8\u91cf\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"sum"),"\u5224\u65ad\u5f53\u524d\u7684\u6307\u9488\u7684\u6709\u6548\u6027\uff1b",(0,r.yg)("inlineCode",{parentName:"p"},"total"),"\u5219\u5224\u65ad\u6574\u4e2a\u6570\u7ec4\u662f\u5426\u6709\u89e3\uff0c\u6709\u5c31\u8fd4\u56de\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"sum"),"\u5f97\u5230\u7684\u4e0b\u6807\uff0c\u6ca1\u6709\u5219\u8fd4\u56de-1\u3002"),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Gas Station\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        int total = 0;\n        int j = -1;\n        for (int i = 0, sum = 0; i < gas.length; ++i) {\n            sum += gas[i] - cost[i];\n            total += gas[i] - cost[i];\n            if (sum < 0) {\n                j = i;\n                sum = 0;\n            }\n        }\n        return total >= 0 ? j + 1 : -1;\n    }\n};\n"))),(0,r.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Gas Station\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int canCompleteCircuit(vector<int> &gas, vector<int> &cost) {\n        int total = 0;\n        int j = -1;\n        for (int i = 0, sum = 0; i < gas.size(); ++i) {\n            sum += gas[i] - cost[i];\n            total += gas[i] - cost[i];\n            if (sum < 0) {\n                j = i;\n                sum = 0;\n            }\n        }\n        return total >= 0 ? j + 1 : -1;\n    }\n};\n")))))}y.isMDXComponent=!0}}]);