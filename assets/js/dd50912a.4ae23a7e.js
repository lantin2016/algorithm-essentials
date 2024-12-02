"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6301],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(58168),a=n(96540),l=n(20053),o=n(92303),s=n(31682),i=n(86976),u=n(23104);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:c,className:d}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.X)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,i.x)(),[w,O]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.a_)();if(null!=c){const e=g[c];null!=e&&e!==w&&y.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==w&&(T(t),O(r),null!=c&&h(c,String(r)))},A=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",p.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},d)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:A,onFocus:x,onClick:x},o,{className:(0,l.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.A)();return a.createElement(m,(0,r.A)({key:String(t)},e))}},90240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),o=n(19365);const s={title:"Remove Duplicates from Sorted Array"},i=void 0,u={unversionedId:"dual-pointers/remove-duplicates-from-sorted-array",id:"dual-pointers/remove-duplicates-from-sorted-array",title:"Remove Duplicates from Sorted Array",description:"\u63cf\u8ff0",source:"@site/docs/dual-pointers/remove-duplicates-from-sorted-array.md",sourceDirName:"dual-pointers",slug:"/dual-pointers/remove-duplicates-from-sorted-array",permalink:"/dual-pointers/remove-duplicates-from-sorted-array",draft:!1,tags:[],version:"current",frontMatter:{title:"Remove Duplicates from Sorted Array"},sidebar:"docs",previous:{title:"\u53cc\u6307\u9488",permalink:"/dual-pointers/"},next:{title:"Remove Duplicates from Sorted Array II",permalink:"/dual-pointers/remove-duplicates-from-sorted-array-ii"}},p={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:m},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length."),(0,a.yg)("p",null,"Do not allocate extra space for another array, you must do this in place with constant memory."),(0,a.yg)("p",null,"For example, Given input array ",(0,a.yg)("inlineCode",{parentName:"p"},"A = [1,1,2]"),","),(0,a.yg)("p",null,"Your function should return length = 2, and ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," is now ",(0,a.yg)("inlineCode",{parentName:"p"},"[1,2]"),"."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"# Remove Duplicates from Sorted Array\n# Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        if len(nums) == 0:\n            return 0\n\n        slow = 0\n        for fast in range(len(nums)):\n            if nums[fast] != nums[slow]:\n                slow += 1\n                nums[slow] = nums[fast]\n\n        return slow + 1\n"))),(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Remove Duplicates from Sorted Array\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public int removeDuplicates(int[] nums) {\n        if (nums.length == 0) return 0;\n\n        int slow = 0;\n        for (int fast = 0; fast < nums.length; fast++){\n            if (nums[fast] != nums[slow])\n                nums[++slow] = nums[fast];\n        }\n        return slow + 1;\n    }\n};\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Remove Duplicates from Sorted Array\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.empty()) return 0;\n\n        int slow = 0;\n        for (int fast = 0; fast < nums.size(); fast++) {\n            if (nums[fast] != nums[slow]) {\n                nums[++slow] = nums[fast];\n            }\n        }\n        return slow+1;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dual-pointers/remove-duplicates-from-sorted-array-ii"},"Remove Duplicates from Sorted Array II")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dual-pointers/remove-element"},"Remove Element")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dual-pointers/move-zeroes"},"Move Zeroes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/linked-list/remove-duplicates-from-sorted-list"},"Remove Duplicates from Sorted List"))))}f.isMDXComponent=!0}}]);