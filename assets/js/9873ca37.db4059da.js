"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(v,o(o({ref:t},d),{},{components:a})):n.createElement(v,o({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a;const{lazy:o,block:c,defaultValue:m,values:v,groupId:f,className:h}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[O,x]=(0,l.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==O&&k.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==O&&(D(t),x(n),null!=f&&w(f,String(n)))},L=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var l;const t=T.indexOf(e.currentTarget)-1;a=null!=(l=T[t])?l:T[T.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:L,onFocus:j,onClick:j},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},5075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const i={title:"Remove Duplicates from Sorted List"},s=void 0,u={unversionedId:"linked-list/remove-duplicates-from-sorted-list",id:"linked-list/remove-duplicates-from-sorted-list",title:"Remove Duplicates from Sorted List",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/remove-duplicates-from-sorted-list.md",sourceDirName:"linked-list",slug:"/linked-list/remove-duplicates-from-sorted-list",permalink:"/linked-list/remove-duplicates-from-sorted-list",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linked-list/remove-duplicates-from-sorted-list.md",tags:[],version:"current",frontMatter:{title:"Remove Duplicates from Sorted List"},sidebar:"someSidebar",previous:{title:"Partition List",permalink:"/linked-list/partition-list"},next:{title:"Remove Duplicates from Sorted List II",permalink:"/linked-list/remove-duplicates-from-sorted-list-ii"}},d={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd51: \u9012\u5f52\u7248",id:"\u89e3\u6cd51-\u9012\u5f52\u7248",level:3},{value:"\u89e3\u6cd52: \u8fed\u4ee3\u7248",id:"\u89e3\u6cd52-\u8fed\u4ee3\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a sorted linked list, delete all duplicates such that each element appear only once."),(0,l.kt)("p",null,"For example,"),(0,l.kt)("p",null,"Given ",(0,l.kt)("inlineCode",{parentName:"p"},"1->1->2"),", return ",(0,l.kt)("inlineCode",{parentName:"p"},"1->2"),"."),(0,l.kt)("p",null,"Given ",(0,l.kt)("inlineCode",{parentName:"p"},"1->1->2->3->3"),", return ",(0,l.kt)("inlineCode",{parentName:"p"},"1->2->3"),"."),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h3",{id:"\u89e3\u6cd51-\u9012\u5f52\u7248"},"\u89e3\u6cd51: \u9012\u5f52\u7248"),(0,l.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Remove Duplicates from Sorted List\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        if (head == null || head.next == null) return head;\n\n        ListNode newHead = deleteDuplicates(head.next);\n        if(head.val == newHead.val) {\n            return newHead;\n        } else {\n            head.next=newHead;\n        }\n        return head;\n    }\n};\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Remove Duplicates from Sorted List\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        if(head == nullptr || head->next == nullptr) return head;\n\n        ListNode* newHead = deleteDuplicates(head->next);\n        if(head->val == newHead->val) {\n            return newHead;\n        } else {\n            head->next=newHead;\n        }\n        return head;\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u89e3\u6cd52-\u8fed\u4ee3\u7248"},"\u89e3\u6cd52: \u8fed\u4ee3\u7248"),(0,l.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Remove Duplicates from Sorted List\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic ListNode deleteDuplicates(ListNode head) {\n        if (head == null) return null;\n\n        for (ListNode slow = head, fast = head.next; fast != null; fast = slow.next) {\n            if (slow.val == fast.val) {\n                slow.next = fast.next;\n            } else {\n                slow = fast;\n            }\n        }\n        return head;\n    }\n};\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Remove Duplicates from Sorted List\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *deleteDuplicates(ListNode *head) {\n        if (head == nullptr) return nullptr;\n\n        for (ListNode *slow = head, *fast = head->next; fast != nullptr; fast = slow->next) {\n            if (slow->val == fast->val) {\n                slow->next = fast->next;\n                delete fast;\n            } else {\n                slow = fast;\n            }\n        }\n        return head;\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/linked-list/remove-duplicates-from-sorted-list-ii"},"Remove Duplicates from Sorted List II")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/array/remove-duplicates-from-sorted-array"},"Remove Duplicates from Sorted Array")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/array/remove-duplicates-from-sorted-array-ii"},"Remove Duplicates from Sorted Array II")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/array/remove-element"},"Remove Element")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/array/move-zeroes"},"Move Zeroes"))))}m.isMDXComponent=!0}}]);