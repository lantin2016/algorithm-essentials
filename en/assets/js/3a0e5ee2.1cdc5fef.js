"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2189],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(58168),r=n(96540),l=n(20053),i=n(92303),u=n(31682),s=n(86976),o=n(23104);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:p,className:d}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,u.X)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,s.x)(),[j,O]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.a_)();if(null!=p){const e=b[p];null!=e&&e!==j&&h.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==j&&(x(t),O(a),null!=p&&v(p,String(a)))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.A)("tabs-container",m.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},d)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:T,onClick:T},i,{className:(0,l.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":j===t})}),n??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function p(e){const t=(0,i.A)();return r.createElement(c,(0,a.A)({key:String(t)},e))}},38109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),l=n(4865),i=n(19365);const u={title:"Jump Game II"},s=void 0,o={unversionedId:"greedy/jump-game-ii",id:"greedy/jump-game-ii",title:"Jump Game II",description:"\u63cf\u8ff0",source:"@site/docs/greedy/jump-game-ii.md",sourceDirName:"greedy",slug:"/greedy/jump-game-ii",permalink:"/en/greedy/jump-game-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Jump Game II"},sidebar:"docs",previous:{title:"Jump Game",permalink:"/en/greedy/jump-game"},next:{title:"Best Time to Buy and Sell Stock",permalink:"/en/greedy/best-time-to-buy-and-sell-stock"}},m={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Given an array of non-negative integers, you are initially positioned at the first index of the array."),(0,r.yg)("p",null,"Each element in the array represents your maximum jump length at that position."),(0,r.yg)("p",null,"Your goal is to reach the last index in the minimum number of jumps."),(0,r.yg)("p",null,"For example:\nGiven array ",(0,r.yg)("inlineCode",{parentName:"p"},"A = [2,3,1,1,4]")),(0,r.yg)("p",null,"The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)"),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u8d2a\u5fc3\u6cd5\u3002"),(0,r.yg)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),(0,r.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int jump(int[] nums) {\n        int step = 0; // \u6700\u5c0f\u6b65\u6570\n        int left = 0;\n        int right = 0;  // [left, right]\u662f\u5f53\u524d\u80fd\u8986\u76d6\u7684\u533a\u95f4\n        if (nums.length == 1) return 0;\n\n        while (left <= right) { // \u5c1d\u8bd5\u4ece\u6bcf\u4e00\u5c42\u8df3\u6700\u8fdc\n            ++step;\n            final int old_right = right;\n            for (int i = left; i <= old_right; ++i) {\n                int new_right = i + nums[i];\n                if (new_right >= nums.length - 1) return step;\n\n                if (new_right > right) right = new_right;\n            }\n            left = old_right + 1;\n        }\n        return 0;\n    }\n}\n"))),(0,r.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int jump(const vector<int>& nums) {\n        int step = 0; // \u6700\u5c0f\u6b65\u6570\n        int left = 0;\n        int right = 0;  // [left, right]\u662f\u5f53\u524d\u80fd\u8986\u76d6\u7684\u533a\u95f4\n        if (nums.size() == 1) return 0;\n\n        while (left <= right) { // \u5c1d\u8bd5\u4ece\u6bcf\u4e00\u5c42\u8df3\u6700\u8fdc\n            ++step;\n            const int old_right = right;\n            for (int i = left; i <= old_right; ++i) {\n                int new_right = i + nums[i];\n                if (new_right >= nums.size() - 1) return step;\n\n                if (new_right > right) right = new_right;\n            }\n            left = old_right + 1;\n        }\n        return 0;\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),(0,r.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int jump(int[] nums) {\n        int result = 0;\n        // the maximum distance that has been reached\n        int last = 0;\n        // the maximum distance that can be reached by using "ret+1" steps\n        int cur = 0;\n        for (int i = 0; i < nums.length; ++i) {\n            if (i > last) {\n                last = cur;\n                ++result;\n            }\n            cur = Math.max(cur, i + nums[i]);\n        }\n\n        return result;\n    }\n}\n'))),(0,r.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int jump(const vector<int>& nums) {\n        int result = 0;\n        // the maximum distance that has been reached\n        int last = 0;\n        // the maximum distance that can be reached by using "ret+1" steps\n        int cur = 0;\n        for (int i = 0; i < nums.size(); ++i) {\n            if (i > last) {\n                last = cur;\n                ++result;\n            }\n            cur = max(cur, i + nums[i]);\n        }\n\n        return result;\n    }\n};\n')))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/en/greedy/jump-game"},"Jump Game"))))}g.isMDXComponent=!0}}]);