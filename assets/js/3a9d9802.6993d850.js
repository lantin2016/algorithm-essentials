"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3077],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),p=n,f=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(96540),n=r(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,l),hidden:r},t)}},4865:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(58168),n=r(96540),i=r(20053),l=r(92303),s=r(31682),o=r(86976),u=r(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:t,block:r,defaultValue:l,values:m,groupId:d,className:p}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,s.X)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,o.x)(),[A,N]=(0,n.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.a_)();if(null!=d){const e=b[d];null!=e&&e!==A&&y.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,r=O.indexOf(t),a=y[r].value;a!==A&&(w(t),N(a),null!=d&&v(d,String(a)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;t=O[r]??O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;t=O[r]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,i.A)("tabs-container",c.tabList)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},p)},y.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>O.push(e),onKeyDown:T,onFocus:S,onClick:S},l,{className:(0,i.A)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":A===t})}),r??t)}))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function d(e){const t=(0,l.A)();return n.createElement(m,(0,a.A)({key:String(t)},e))}},77052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=r(58168),n=(r(96540),r(15680)),i=r(4865),l=r(19365);const s={title:"Search in Rotated Sorted Array II"},o=void 0,u={unversionedId:"search/search-in-rotated-sorted-array-ii",id:"search/search-in-rotated-sorted-array-ii",title:"Search in Rotated Sorted Array II",description:"\u63cf\u8ff0",source:"@site/docs/search/search-in-rotated-sorted-array-ii.md",sourceDirName:"search",slug:"/search/search-in-rotated-sorted-array-ii",permalink:"/search/search-in-rotated-sorted-array-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Search in Rotated Sorted Array II"},sidebar:"docs",previous:{title:"Search in Rotated Sorted Array",permalink:"/search/search-in-rotated-sorted-array"},next:{title:"Search a 2D Matrix",permalink:"/search/search-a-2d-matrix"}},c={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,n.yg)("p",null,'Follow up for "Search in Rotated Sorted Array": What if ',(0,n.yg)("strong",{parentName:"p"},"duplicates")," are allowed?"),(0,n.yg)("p",null,"Would this affect the run-time complexity? How and why?"),(0,n.yg)("p",null,"Write a function to determine if a given target is in the array."),(0,n.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,n.yg)("p",null,"\u5141\u8bb8\u91cd\u590d\u5143\u7d20\uff0c\u5219\u4e0a\u4e00\u9898\u4e2d\u5982\u679c",(0,n.yg)("inlineCode",{parentName:"p"},"A[left] <= A[mid]"),",\u90a3\u4e48",(0,n.yg)("inlineCode",{parentName:"p"},"[left,mid]"),"\u4e3a\u9012\u589e\u5e8f\u5217\u7684\u5047\u8bbe\u5c31\u4e0d\u80fd\u6210\u7acb\u4e86\uff0c\u6bd4\u5982",(0,n.yg)("inlineCode",{parentName:"p"},"[1,3,1,1,1]"),"\u3002"),(0,n.yg)("p",null,"\u65e2\u7136",(0,n.yg)("inlineCode",{parentName:"p"},"A[left] <= A[mid]"),"\u4e0d\u80fd\u786e\u5b9a\u9012\u589e\uff0c\u90a3\u5c31\u628a\u5b83\u62c6\u5206\u6210\u4e24\u4e2a\u6761\u4ef6\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u82e5",(0,n.yg)("inlineCode",{parentName:"li"},"A[left] < A[mid]"),"\uff0c\u5219\u533a\u95f4",(0,n.yg)("inlineCode",{parentName:"li"},"[left,mid]"),"\u4e00\u5b9a\u9012\u589e"),(0,n.yg)("li",{parentName:"ul"},"\u82e5",(0,n.yg)("inlineCode",{parentName:"li"},"A[left] == A[mid]")," \u786e\u5b9a\u4e0d\u4e86\uff0c\u90a3\u5c31",(0,n.yg)("inlineCode",{parentName:"li"},"left++"),"\uff0c\u5f80\u4e0b\u770b\u4e00\u6b65\u5373\u53ef\u3002")),(0,n.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,n.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,n.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// Search in Rotated Sorted Array II\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public boolean search(int[] nums, int target) {\n        int first = 0, last = nums.length;\n        while (first != last) {\n            final int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return true;\n            if (nums[first] < nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else if (nums[first] > nums[mid]) {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            } else\n                //skip duplicate one\n                first++;\n        }\n        return false;\n    }\n};\n"))),(0,n.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"// Search in Rotated Sorted Array II\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    bool search(const vector<int>& nums, int target) {\n        int first = 0, last = nums.size();\n        while (first != last) {\n            const int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return true;\n            if (nums[first] < nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else if (nums[first] > nums[mid]) {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            } else\n                //skip duplicate one\n                first++;\n        }\n        return false;\n    }\n};\n")))),(0,n.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/search/search-in-rotated-sorted-array"},"Search in Rotated Sorted Array")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/search/find-minimum-in-rotated-sorted-array"},"Find Minimum in Rotated Sorted Array")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/search/find-minimum-in-rotated-sorted-array-ii"},"Find Minimum in Rotated Sorted Array II"))))}f.isMDXComponent=!0}}]);