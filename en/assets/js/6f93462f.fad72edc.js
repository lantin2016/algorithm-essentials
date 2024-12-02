"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9937],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(58168),a=n(96540),l=n(20053),o=n(92303),i=n(31682),s=n(86976),u=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:m,className:d}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,i.X)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,s.x)(),[w,x]=(0,a.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.a_)();if(null!=m){const e=y[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==w&&(E(t),x(r),null!=m&&h(m,String(r)))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},d)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:N,onFocus:T,onClick:T},o,{className:(0,l.A)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.A)();return a.createElement(p,(0,r.A)({key:String(t)},e))}},75009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),o=n(19365);const i={title:"Reverse Integer"},s=void 0,u={unversionedId:"simulation/reverse-integer",id:"simulation/reverse-integer",title:"Reverse Integer",description:"\u63cf\u8ff0",source:"@site/docs/simulation/reverse-integer.md",sourceDirName:"simulation",slug:"/simulation/reverse-integer",permalink:"/en/simulation/reverse-integer",draft:!1,tags:[],version:"current",frontMatter:{title:"Reverse Integer"},sidebar:"docs",previous:{title:"\u7b80\u4ecb",permalink:"/en/simulation/"},next:{title:"Palindrome Number",permalink:"/en/simulation/palindrome-number"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Reverse digits of an integer."),(0,a.yg)("p",null,"Example1: x = 123, return 321"),(0,a.yg)("p",null,"Example2: x = -123, return -321"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Have you thought about this?")),(0,a.yg)("p",null,"Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!"),(0,a.yg)("p",null,"If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100."),(0,a.yg)("p",null,"Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?"),(0,a.yg)("p",null,"Throw an exception? Good, but what if throwing an exception is not an option? You would then have to re-design the function (ie, add an extra parameter)."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u77ed\u5c0f\u7cbe\u608d\u7684\u9898\uff0c\u4ee3\u7801\u4e5f\u53ef\u4ee5\u5199\u7684\u5f88\u77ed\u5c0f\u3002"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Reverse Integer\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\n// \u8003\u8651 1.\u8d1f\u6570\u7684\u60c5\u51b5 2. \u6ea2\u51fa\u7684\u60c5\u51b5(\u6b63\u6ea2\u51fa&&\u8d1f\u6ea2\u51fa\uff0c\u6bd4\u5982 x = -2147483648(\u5373-2^31) )\npublic class Solution {\n    public int reverse(int x) {\n        long r = 0;\n        long t = x;\n        t = t > 0 ? t : -t;\n        for (; t > 0; t /= 10)\n            r = r * 10 + t % 10;\n\n        boolean sign = x > 0 ? false: true;\n        if (r > 2147483647 || (sign && r > Integer.MAX_VALUE)) {\n            return 0;\n        } else {\n            if (sign) {\n                return (int)-r;\n            } else {\n                return (int)r;\n            }\n        }\n    }\n}\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Reverse Integer\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\n// \u8003\u8651 1.\u8d1f\u6570\u7684\u60c5\u51b5 2. \u6ea2\u51fa\u7684\u60c5\u51b5(\u6b63\u6ea2\u51fa&&\u8d1f\u6ea2\u51fa\uff0c\u6bd4\u5982 x = -2147483648(\u5373-2^31) )\nclass Solution {\npublic:\n    int reverse (int x) {\n        long long r = 0;\n        long long t = x;\n        t = t > 0 ? t : -t;\n        for (; t; t /= 10)\n            r = r * 10 + t % 10;\n\n        bool sign = x > 0 ? false: true;\n        if (r > 2147483647 || (sign && r > 2147483648)) {\n            return 0;\n        } else {\n            if (sign) {\n                return -r;\n            } else {\n                return r;\n            }\n        }\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/simulation/palindrome-number"},"Palindrome Number"))))}g.isMDXComponent=!0}}]);