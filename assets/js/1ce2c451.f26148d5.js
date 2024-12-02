"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8813],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,y=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return t?n.createElement(y,i(i({ref:a},u),{},{components:t})):n.createElement(y,i({ref:a},u))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},4865:(e,a,t)=>{t.d(a,{A:()=>m});var n=t(58168),r=t(96540),l=t(20053),i=t(92303),s=t(31682),o=t(86976),c=t(23104);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:a,block:t,defaultValue:i,values:p,groupId:m,className:d}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??y.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,s.X)(g,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,o.x)(),[k,N]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.a_)();if(null!=m){const e=v[m];null!=e&&e!==k&&g.some((a=>a.value===e))&&N(e)}const T=e=>{const a=e.currentTarget,t=O.indexOf(a),n=g[t].value;n!==k&&(C(a),N(n),null!=m&&h(m,String(n)))},w=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,l.A)("tabs-container",u.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},d)},g.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,key:a,ref:e=>O.push(e),onKeyDown:w,onFocus:T,onClick:T},i,{className:(0,l.A)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":k===a})}),t??a)}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==k})))))}function m(e){const a=(0,i.A)();return r.createElement(p,(0,n.A)({key:String(a)},e))}},98003:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),l=t(4865),i=t(19365);const s={title:"Basic Calculator"},o=void 0,c={unversionedId:"stack-and-queue/stack/basic-calculator",id:"stack-and-queue/stack/basic-calculator",title:"Basic Calculator",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/basic-calculator.md",sourceDirName:"stack-and-queue/stack",slug:"/stack-and-queue/stack/basic-calculator",permalink:"/stack-and-queue/stack/basic-calculator",draft:!1,tags:[],version:"current",frontMatter:{title:"Basic Calculator"},sidebar:"docs",previous:{title:"Evaluate Reverse Polish Notation",permalink:"/stack-and-queue/stack/evaluate-reverse-polish-notation"},next:{title:"Basic Calculator II",permalink:"/stack-and-queue/stack/basic-calculator-ii"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p},d="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u5178\u578b\u7684\u6808\u7684\u9898\u76ee\uff0c\u4e0d\u8fc7\u8fd9\u9053\u9898\u5c5e\u4e8ehard\u7ea7\u522b\uff0c\u56e0\u4e3a\u5f88\u96be\u5199\u5bf9\u3002"),(0,r.yg)("p",null,"\u8868\u8fbe\u5f0f\u4e2d\u53ea\u6709\u52a0\u51cf\uff0c\u6ca1\u6709\u4e58\u9664\uff0c\u90a3\u5c31\u4e0d\u9700\u8981\u8003\u8651\u4f18\u5148\u7ea7\uff0c\u4e8e\u662f\u8fd9\u9053\u9898\u5c31\u53d8\u7684\u7b80\u5355\u5f88\u591a\u4e86\u3002\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6808\u6765\u8f85\u52a9\u8ba1\u7b97\uff0c\u7528\u4e2a\u53d8\u91cf",(0,r.yg)("inlineCode",{parentName:"p"},"sign"),"\u6765\u8868\u793a\u5f53\u524d\u7684\u7b26\u53f7\uff0c\u904d\u5386\u7ed9\u5b57\u7b26\u4e32",(0,r.yg)("inlineCode",{parentName:"p"},"s"),"\uff0c"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u9047\u5230\u4e86\u6570\u5b57\uff0c\u5c31\u7528while\u5faa\u73af\u628a\u4e4b\u540e\u7684\u6570\u5b57\u90fd\u8bfb\u8fdb\u6765\uff0c\u7136\u540e\u7528",(0,r.yg)("inlineCode",{parentName:"li"},"sign*num"),"\u6765\u66f4\u65b0\u7ed3\u679c",(0,r.yg)("inlineCode",{parentName:"li"},"res"),"\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u9047\u5230\u4e86\u52a0\u53f7\uff0c\u5219",(0,r.yg)("inlineCode",{parentName:"li"},"sign"),"\u8d4b\u4e3a1\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u9047\u5230\u4e86\u51cf\u53f7\uff0c\u5219",(0,r.yg)("inlineCode",{parentName:"li"},"sign"),"\u8d4b\u4e3a-1\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u9047\u5230\u4e86\u5de6\u62ec\u53f7\uff0c\u5219\u628a\u5f53\u524d\u7ed3\u679c",(0,r.yg)("inlineCode",{parentName:"li"},"res"),"\u548c\u7b26\u53f7",(0,r.yg)("inlineCode",{parentName:"li"},"sign"),"\u538b\u5165\u6808\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"res"),"\u91cd\u7f6e\u4e3a0\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"sign"),"\u91cd\u7f6e\u4e3a1\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u9047\u5230\u4e86\u53f3\u62ec\u53f7\uff0c\u7ed3\u679c",(0,r.yg)("inlineCode",{parentName:"li"},"res"),"\u4e58\u4ee5\u6808\u9876\u7684\u7b26\u53f7\uff0c\u6808\u9876\u5143\u7d20\u51fa\u6808\uff0c\u7ed3\u679c",(0,r.yg)("inlineCode",{parentName:"li"},"res"),"\u52a0\u4e0a\u6808\u9876\u7684\u6570\u5b57\uff0c\u6808\u9876\u5143\u7d20\u51fa\u6808\u3002")),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(l.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// TODO\n"))),(0,r.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Basic Calculator\n// Time complexity O(n), space complexity O(n)\nclass Solution {\npublic:\n    int calculate(const string& s) {\n        int res = 0, sign = 1, n = s.size();\n        stack<int> stk;\n        for (int i = 0; i < n; ++i) {\n            const char c = s[i];\n            if (isdigit(c)) {\n                int num = 0;\n                while (i < n && isdigit(s[i])) {\n                    num = 10 * num + (s[i++] - '0');\n                }\n                res += sign * num;\n                --i;\n            } else if (c == '+') {\n                sign = 1;\n            } else if (c == '-') {\n                sign = -1;\n            } else if (c == '(') {\n                stk.push(res);\n                stk.push(sign);\n                res = 0;\n                sign = 1;\n            } else if (c == ')') {\n                res *= stk.top(); stk.pop();\n                res += stk.top(); stk.pop();\n            }\n        }\n        return res;\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/stack-and-queue/stack/basic-calculator-ii"},"Basic Calculator II")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/stack-and-queue/stack/basic-calculator-iii"},"Basic Calculator III")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression"},"Build Binary Expression Tree From Infix Expression"))))}y.isMDXComponent=!0}}]);