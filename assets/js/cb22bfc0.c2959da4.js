"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3597],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?n.createElement(y,i(i({ref:a},c),{},{components:t})):n.createElement(y,i({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},4865:(e,a,t)=>{t.d(a,{A:()=>m});var n=t(58168),r=t(96540),l=t(20053),i=t(92303),o=t(31682),s=t(86976),u=t(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:a,block:t,defaultValue:i,values:p,groupId:m,className:d}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??y.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,o.X)(g,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,s.x)(),[w,O]=(0,r.useState)(f),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.a_)();if(null!=m){const e=v[m];null!=e&&e!==w&&g.some((a=>a.value===e))&&O(e)}const I=e=>{const a=e.currentTarget,t=j.indexOf(a),n=g[t].value;n!==w&&(T(a),O(n),null!=m&&h(m,String(n)))},x=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},d)},g.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>j.push(e),onKeyDown:x,onFocus:I,onClick:I},i,{className:(0,l.A)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":w===a})}),t??a)}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function m(e){const a=(0,i.A)();return r.createElement(p,(0,n.A)({key:String(a)},e))}},90094:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),l=t(4865),i=t(19365);const o={title:"Pascal's Triangle II"},s=void 0,u={unversionedId:"simulation/pascal-s-triangle-ii",id:"simulation/pascal-s-triangle-ii",title:"Pascal's Triangle II",description:"\u63cf\u8ff0",source:"@site/docs/simulation/pascal-s-triangle-ii.md",sourceDirName:"simulation",slug:"/simulation/pascal-s-triangle-ii",permalink:"/simulation/pascal-s-triangle-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Pascal's Triangle II"},sidebar:"docs",previous:{title:"Pascal's Triangle",permalink:"/simulation/pascal-s-triangle"},next:{title:"Spiral Matrix",permalink:"/simulation/spiral-matrix"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p},d="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Given an index ",(0,r.yg)("inlineCode",{parentName:"p"},"k"),", return the ",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"-th row of the Pascal's triangle."),(0,r.yg)("p",null,"For example, given ",(0,r.yg)("inlineCode",{parentName:"p"},"k = 3"),","),(0,r.yg)("p",null,"Return ",(0,r.yg)("inlineCode",{parentName:"p"},"[1,3,3,1]"),"."),(0,r.yg)("p",null,"Note: Could you optimize your algorithm to use only ",(0,r.yg)("inlineCode",{parentName:"p"},"O(k)")," extra space?"),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u6eda\u52a8\u6570\u7ec4\u3002"),(0,r.yg)("h4",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Pascal's Triangle II\n// \u6eda\u52a8\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<Integer> getRow(int rowIndex) {\n        List<Integer> array = new ArrayList<>();\n        for (int i = 0; i <= rowIndex; i++) {\n            for (int j = i - 1; j > 0; j--){\n                array.set(j, array.get(j - 1) + array.get(j));\n            }\n            array.add(1);\n        }\n        return array;\n    }\n}\n"))),(0,r.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, Pascal's Triangle II\n// \u6eda\u52a8\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<int> getRow(int rowIndex) {\n        vector<int> array;\n        for (int i = 0; i <= rowIndex; i++) {\n            for (int j = i - 1; j > 0; j--){\n                array[j] = array[j - 1] + array[j];\n            }\n            array.push_back(1);\n        }\n        return array;\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/simulation/pascal-s-triangle"},"Pascal's Triangle"))))}y.isMDXComponent=!0}}]);