"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3712],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),a=r(20053);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,s),hidden:r},t)}},4865:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(58168),a=r(96540),l=r(20053),s=r(92303),o=r(31682),i=r(86976),u=r(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:r,defaultValue:s,values:p,groupId:d,className:m}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,o.X)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,i.x)(),[k,w]=(0,a.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.a_)();if(null!=d){const e=g[d];null!=e&&e!==k&&b.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,r=O.indexOf(t),n=b[r].value;n!==k&&(T(t),w(n),null!=d&&h(d,String(n)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;t=O[r]??O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;t=O[r]??O[O.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},m)},b.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:j,onClick:j},s,{className:(0,l.A)("tabs__item",c.tabItem,s?.className,{"tabs__item--active":k===t})}),r??t)}))),t?(0,a.cloneElement)(y.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,s.A)();return a.createElement(p,(0,n.A)({key:String(t)},e))}},25276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),l=r(4865),s=r(19365);const o={title:"Design Browser History"},i=void 0,u={unversionedId:"stack-and-queue/stack/design-browser-history",id:"stack-and-queue/stack/design-browser-history",title:"Design Browser History",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/design-browser-history.md",sourceDirName:"stack-and-queue/stack",slug:"/stack-and-queue/stack/design-browser-history",permalink:"/stack-and-queue/stack/design-browser-history",draft:!1,tags:[],version:"current",frontMatter:{title:"Design Browser History"},sidebar:"docs",previous:{title:"Remove All Adjacent Duplicates in String II",permalink:"/stack-and-queue/stack/remove-all-adjacent-duplicates-in-string-ii"},next:{title:"Asteroid Collision",permalink:"/stack-and-queue/stack/asteroid-collision"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:p},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"TODO"),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"TODO"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(s.A,{value:"python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,a.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"class BrowserHistory {\n    private Stack<String> history;\n    private Stack<String> future;\n\n    public BrowserHistory(String homepage) {\n        history = new Stack<>();\n        future = new Stack<>();\n        history.push(homepage);\n    }\n\n    public void visit(String url) {\n        history.push(url);\n        future = new Stack<>();\n    }\n\n    public String back(int steps) {\n        while(history.size() > 1 && steps > 0){\n            future.push(history.pop());\n            steps--;\n        }\n\n        return history.peek();\n    }\n\n    public String forward(int steps) {\n        while(future.size() > 0 && steps > 0){\n            history.push(future.pop());\n            steps--;\n        }\n\n        return history.peek();\n    }\n}\n"))),(0,a.yg)(s.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))))}y.isMDXComponent=!0}}]);