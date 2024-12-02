"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9762],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(58168),a=n(96540),l=n(20053),i=n(92303),o=n(31682),u=n(86976),s=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:p,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.X)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,u.x)(),[x,N]=(0,a.useState)(b),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.a_)();if(null!=p){const e=g[p];null!=e&&e!==x&&y.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,n=_.indexOf(t),r=y[n].value;r!==x&&(O(t),N(r),null!=p&&h(p,String(r)))},k=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=_.indexOf(e.currentTarget)+1;t=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;t=_[n]??_[_.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},m)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>_.push(e),onKeyDown:k,onFocus:w,onClick:w},i,{className:(0,l.A)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,i.A)();return a.createElement(d,(0,r.A)({key:String(t)},e))}},48816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),i=n(19365);const o={title:"Partition List"},u=void 0,s={unversionedId:"linked-list/partition-list",id:"linked-list/partition-list",title:"Partition List",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/partition-list.md",sourceDirName:"linked-list",slug:"/linked-list/partition-list",permalink:"/en/linked-list/partition-list",draft:!1,tags:[],version:"current",frontMatter:{title:"Partition List"},sidebar:"docs",previous:{title:"Add Two Numbers II",permalink:"/en/linked-list/add-two-numbers-ii"},next:{title:"Remove Duplicates from Sorted List",permalink:"/en/linked-list/remove-duplicates-from-sorted-list"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given a linked list and a value ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),", partition it such that all nodes less than ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," come before nodes greater than or equal to ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,a.yg)("p",null,"You should preserve the original relative order of the nodes in each of the two partitions."),(0,a.yg)("p",null,"For example,\nGiven ",(0,a.yg)("inlineCode",{parentName:"p"},"1->4->3->2->5->2")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"x = 3"),", return ",(0,a.yg)("inlineCode",{parentName:"p"},"1->2->2->4->3->5"),"."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Partition List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode partition(ListNode head, int x) {\n        ListNode left_dummy = new ListNode(-1); // \u5934\u7ed3\u70b9\n        ListNode right_dummy = new ListNode(-1); // \u5934\u7ed3\u70b9\n\n        ListNode left_cur = left_dummy;\n        ListNode right_cur = right_dummy;\n\n        for (ListNode cur = head; cur != null; cur = cur.next) {\n            if (cur.val < x) {\n                left_cur.next = cur;\n                left_cur = cur;\n            } else {\n                right_cur.next = cur;\n                right_cur = cur;\n            }\n        }\n\n        left_cur.next = right_dummy.next;\n        right_cur.next = null;\n\n        return left_dummy.next;\n    }\n};\n"))),(0,a.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Partition List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode* partition(ListNode* head, int x) {\n        ListNode left_dummy(-1); // \u5934\u7ed3\u70b9\n        ListNode right_dummy(-1); // \u5934\u7ed3\u70b9\n\n        auto left_cur = &left_dummy;\n        auto right_cur = &right_dummy;\n\n        for (ListNode *cur = head; cur != nullptr; cur = cur->next) {\n            if (cur->val < x) {\n                left_cur->next = cur;\n                left_cur = cur;\n            } else {\n                right_cur->next = cur;\n                right_cur = cur;\n            }\n        }\n\n        left_cur->next = right_dummy.next;\n        right_cur->next = nullptr;\n\n        return left_dummy.next;\n    }\n};\n")))))}f.isMDXComponent=!0}}]);