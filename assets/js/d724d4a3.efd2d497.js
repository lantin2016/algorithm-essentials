"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3954],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),y=r,g=c["".concat(i,".").concat(y)]||c[y]||m[y]||l;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(58168),r=t(96540),l=t(20053),o=t(92303),s=t(31682),i=t(86976),u=t(23104);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:n,block:t,defaultValue:o,values:c,groupId:m,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=c??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,s.X)(d,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!d.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:h}=(0,i.x)(),[O,w]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.a_)();if(null!=m){const e=b[m];null!=e&&e!==O&&d.some((n=>n.value===e))&&w(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=d[t].value;a!==O&&(I(n),w(a),null!=m&&h(m,String(a)))},x=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,l.A)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},y)},d.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>T.push(e),onKeyDown:x,onFocus:N,onClick:N},o,{className:(0,l.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":O===n})}),t??n)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function m(e){const n=(0,o.A)();return r.createElement(c,(0,a.A)({key:String(n)},e))}},49468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(58168),r=(t(96540),t(15680)),l=t(4865),o=t(19365);const s={title:"Intersection of Two Arrays II"},i=void 0,u={unversionedId:"array/intersection-of-two-arrays-ii",id:"array/intersection-of-two-arrays-ii",title:"Intersection of Two Arrays II",description:"\u63cf\u8ff0",source:"@site/docs/array/intersection-of-two-arrays-ii.md",sourceDirName:"array",slug:"/array/intersection-of-two-arrays-ii",permalink:"/array/intersection-of-two-arrays-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Intersection of Two Arrays II"},sidebar:"docs",previous:{title:"Intersection of Two Arrays",permalink:"/array/intersection-of-two-arrays"},next:{title:"Insert Delete GetRandom O(1)",permalink:"/array/insert-delete-getrandom-o1"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:4},{value:"HashMap",id:"hashmap",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c},y="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Given two arrays, write a function to compute their intersection."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 1"),":"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Input"),": nums1 = ","[1,2,2,1]",", nums2 = ","[2,2]",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Output"),": ","[2,2]")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 2"),":"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Input"),": nums1 = ","[4,9,5]",", nums2 = ","[9,4,9,8,4]",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Output"),": ","[4,9]")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Each element in the result should appear as many times as it shows in both arrays."),(0,r.yg)("li",{parentName:"ul"},"The result can be in any order.")),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u601d\u8def\u4e00\uff0c\u53ef\u4ee5\u628a\u4e24\u4e2a\u6570\u7ec4\u6392\u5e8f\uff0c\u7136\u540e\u7528\u4e24\u4e2a\u6307\u9488\uff0c\u540c\u65f6\u904d\u5386\u4e24\u4e2a\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(nlogn+mlogm)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(logm + logn) \u5230 O(m+n) \u4e4b\u95f4\uff0c\u53d6\u51b3\u4e8e\u6392\u5e8f\u7b97\u6cd5\u3002"),(0,r.yg)("p",null,"\u601d\u8def\u4e8c\uff0c\u57fa\u4e8e\u8f83\u77ed\u7684\u90a3\u4e2a\u6570\u7ec4\u5efa\u7acb\u4e00\u4e2a HashMap, key \u4e3a\u6574\u6570, value \u4e3a\u51fa\u73b0\u6b21\u6570\uff0c\u7136\u540e\u904d\u5386\u53e6\u4e00\u4e2a\u6570\u7ec4, \u78b0\u5230\u4e00\u6b21\u5c31\u628a\u54c8\u5e0c\u8868\u91cc\u7684\u503c\u51cf\u4e00\uff0c\u5e76\u628a\u8be5\u6570\u52a0\u5165\u5230\u4ea4\u96c6\u4e2d\uff0c\u7b49\u4e8e 0 \u5219\u8df3\u8fc7\u3002\u65f6\u95f4\u590d\u6742\u5ea6 O(m + n))\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(min(m + n))\u3002"),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)("h4",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),(0,r.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Intersection of Two Arrays II\n// Sort\n// Time Complexity: O(mlogm+nlogn)\n// Space Complexity:  from O(logm+logn) to O(n+m), depending\n// on the implementation of the sorting algorithm.\nclass Solution {\n    public int[] intersect(int[] nums1, int[] nums2) {\n        Arrays.sort(nums1);\n        Arrays.sort(nums2);\n        int i = 0, j = 0, k = 0;\n        while (i < nums1.length && j < nums2.length) {\n            if (nums1[i] < nums2[j]) {\n                ++i;\n            } else if (nums1[i] > nums2[j]) {\n                ++j;\n            } else {\n                nums1[k++] = nums1[i++];\n                ++j;\n            }\n        }\n        return Arrays.copyOfRange(nums1, 0, k);\n    }\n}\n"))),(0,r.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,r.yg)("h4",{id:"hashmap"},"HashMap"),(0,r.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Intersection of Two Arrays II\n// HashMap\n// Time Complexity: O(m + n), Space Complexity:  O(min(m + n))\nclass Solution {\n    public int[] intersect(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) return intersect(nums2, nums1);\n\n        Map<Integer, Integer> m = new HashMap<>();\n        for (int x : nums1) {\n            m.merge(x, 1, Integer::sum);\n        }\n\n        int k = 0;\n        for (int x : nums2) {\n            int count = m.getOrDefault(x, 0);\n            if (count > 0) {\n                nums1[k++] = x;\n                m.put(x, count - 1);\n            }\n        }\n        return Arrays.copyOfRange(nums1, 0, k);\n    }\n}\n"))),(0,r.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/array/intersection-of-two-arrays"},"Intersection of Two Arrays"))))}g.isMDXComponent=!0}}]);