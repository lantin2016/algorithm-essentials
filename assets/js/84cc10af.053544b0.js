"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4747],{15680:(e,t,a)=>{a.d(t,{xA:()=>i,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(y,o(o({ref:t},i),{},{components:a})):n.createElement(y,o({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},4865:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(58168),r=a(96540),l=a(20053),o=a(92303),u=a(31682),c=a(86976),s=a(23104);const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:m,className:d}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,u.X)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,c.x)(),[k,x]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.a_)();if(null!=m){const e=g[m];null!=e&&e!==k&&f.some((t=>t.value===e))&&x(e)}const q=e=>{const t=e.currentTarget,a=O.indexOf(t),n=f[a].value;n!==k&&(T(t),x(n),null!=m&&h(m,String(n)))},w=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.A)("tabs-container",i.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},d)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>O.push(e),onKeyDown:w,onFocus:q,onClick:q},o,{className:(0,l.A)("tabs__item",i.tabItem,o?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,r.cloneElement)(y.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,o.A)();return r.createElement(p,(0,n.A)({key:String(t)},e))}},73668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(4865),o=a(19365);const u={title:"Maximum Frequency Stack"},c=void 0,s={unversionedId:"stack-and-queue/stack/maximum-frequency-stack",id:"stack-and-queue/stack/maximum-frequency-stack",title:"Maximum Frequency Stack",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/maximum-frequency-stack.md",sourceDirName:"stack-and-queue/stack",slug:"/stack-and-queue/stack/maximum-frequency-stack",permalink:"/stack-and-queue/stack/maximum-frequency-stack",draft:!1,tags:[],version:"current",frontMatter:{title:"Maximum Frequency Stack"},sidebar:"docs",previous:{title:"Asteroid Collision",permalink:"/stack-and-queue/stack/asteroid-collision"},next:{title:"\u5355\u8c03\u6808",permalink:"/stack-and-queue/stack/monotonic-stack/"}},i={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:p},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(l.A,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,r.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// TODO\n"))),(0,r.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// https://www.cnblogs.com/grandyang/p/10989417.html\nclass FreqStack {\npublic:\n    FreqStack() {}\n    \n    void push(int x) {\n        mxFreq = max(mxFreq, ++freq[x]);\n        m[freq[x]].push_back(x);\n    }\n    \n    int pop() {\n        int x = m[mxFreq].back(); \n        m[mxFreq].pop_back();\n        if (m[freq[x]--].empty()) --mxFreq;\n        return x;\n    }\n    \nprivate:\n    int mxFreq;\n    unordered_map<int, int> freq;\n    unordered_map<int, vector<int>> m;\n};\n")))))}y.isMDXComponent=!0}}]);