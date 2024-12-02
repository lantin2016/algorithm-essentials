"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4971],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(58168),a=n(96540),l=n(20053),o=n(92303),i=n(31682),s=n(86976),u=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:d,className:m}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.X)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,s.x)(),[E,O]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.a_)();if(null!=d){const e=g[d];null!=e&&e!==E&&f.some((t=>t.value===e))&&O(e)}const k=e=>{const t=e.currentTarget,n=w.indexOf(t),r=f[n].value;r!==E&&(x(t),O(r),null!=d&&h(d,String(r)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},m)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:T,onFocus:k,onClick:k},o,{className:(0,l.A)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,o.A)();return a.createElement(p,(0,r.A)({key:String(t)},e))}},5447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),o=n(19365);const i={title:"\u5355\u94fe\u8868"},s=void 0,u={unversionedId:"linked-list/README",id:"linked-list/README",title:"\u5355\u94fe\u8868",description:"\u672c\u8282\u4e3b\u8981\u8bb2\u5173\u4e8e\u5355\u94fe\u8868\u7684\u7b97\u6cd5\u3002",source:"@site/docs/linked-list/README.md",sourceDirName:"linked-list",slug:"/linked-list/",permalink:"/linked-list/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5355\u94fe\u8868"},sidebar:"docs",previous:{title:"Zigzag Iterator",permalink:"/array/zigzag-iterator"},next:{title:"\u7b80\u4ecb",permalink:"/linked-list/fast-slow-pointers"}},c={},p=[],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u8282\u4e3b\u8981\u8bb2\u5173\u4e8e\u5355\u94fe\u8868\u7684\u7b97\u6cd5\u3002"),(0,a.yg)("p",null,"\u5355\u94fe\u8868\u8282\u70b9\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// \u5355\u94fe\u8868\u8282\u70b9\npublic class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// \u5355\u94fe\u8868\u8282\u70b9\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(nullptr) { }\n};\n")))))}b.isMDXComponent=!0}}]);