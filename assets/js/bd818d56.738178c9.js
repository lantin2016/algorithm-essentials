"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5149],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(58168),a=n(96540),l=n(20053),i=n(92303),o=n(31682),s=n(86976),u=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:p,className:m}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,o.X)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=(0,s.x)(),[N,w]=(0,a.useState)(g),k=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.a_)();if(null!=p){const e=h[p];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=k.indexOf(t),r=f[n].value;r!==N&&(O(t),w(r),null!=p&&v(p,String(r)))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=k.indexOf(e.currentTarget)+1;t=k[n]??k[0];break}case"ArrowLeft":{const n=k.indexOf(e.currentTarget)-1;t=k[n]??k[k.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},m)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>k.push(e),onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,l.A)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,i.A)();return a.createElement(d,(0,r.A)({key:String(t)},e))}},81801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),i=n(19365);const o={title:"Intersection of Two Linked Lists"},s=void 0,u={unversionedId:"linked-list/intersection-of-two-linked-lists",id:"linked-list/intersection-of-two-linked-lists",title:"Intersection of Two Linked Lists",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/intersection-of-two-linked-lists.md",sourceDirName:"linked-list",slug:"/linked-list/intersection-of-two-linked-lists",permalink:"/linked-list/intersection-of-two-linked-lists",draft:!1,tags:[],version:"current",frontMatter:{title:"Intersection of Two Linked Lists"},sidebar:"docs",previous:{title:"Middle of the Linked List",permalink:"/linked-list/middle-of-the-linked-list"},next:{title:"Remove Nth Node From End of List",permalink:"/linked-list/remove-nth-node-from-end-of-list"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:d},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Write a program to find the node at which the intersection of two singly linked lists begins."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 1"),":"),(0,a.yg)("img",{src:"/img/intersection-of-two-linked-lists_example_1.png",width:"60%"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Input"),": listA = ","[4,1,8,4,5]",", listB = ","[5,6,1,8,4,5]",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Output"),": The node with value = 8")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Notes"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If the two linked lists have no intersection at all, return null."),(0,a.yg)("li",{parentName:"ul"},"The linked lists must retain their original structure after the function returns."),(0,a.yg)("li",{parentName:"ul"},"You may assume there are no cycles anywhere in the entire linked structure."),(0,a.yg)("li",{parentName:"ul"},"Your code should preferably run in O(n) time and use only O(1) memory.")),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u6700\u81ea\u7136\u7684\u60f3\u6cd5\uff0c\u662f\u5148\u904d\u5386\u5b8c\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u5f97\u5230\u4ed6\u4eec\u7684\u957f\u5ea6",(0,a.yg)("inlineCode",{parentName:"p"},"lenA"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"lenB"),"\uff0c\u8fdb\u800c\u77e5\u9053\u4ed6\u4eec\u7684\u957f\u5ea6\u4e4b\u5dee\u3002\u7136\u540e\u518d\u6b21\u904d\u5386\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u4e0d\u8fc7\u8fd9\u6b21\uff0c\u957f\u7684\u5355\u94fe\u8868\u5148\u8d70",(0,a.yg)("inlineCode",{parentName:"p"},"|lenA-lenB|"),"\u6b65\uff0c\u7136\u540e\u4e24\u4e2a\u6307\u9488\u4e00\u8d77\u8d70\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u76f8\u540c\u7684\u8282\u70b9\uff0c\u8fd9\u4e2a\u8282\u70b9\u5c31\u662f\u76f8\u4ea4\u70b9\u3002\u8fd9\u4e2a\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff0c\u662f\u7b26\u5408\u9898\u76ee\u8981\u6c42\u7684\u3002"),(0,a.yg)("p",null,"\u4e0a\u8ff0\u601d\u8def\u904d\u5386\u4e86\u4e24\u8fb9\uff0c\u53ef\u4ee5\u4f18\u5316\u4e3a\u53ea\u904d\u5386\u4e00\u904d\u3002\u904d\u5386\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u8f83\u77ed\u7684\u90a3\u6761\u4f1a\u6700\u5148\u5230\u8fbe\u5c3e\u90e8\uff0c\u7136\u540e\u628a\u8fd9\u4e2a\u6307\u9488\u6307\u5411\u8f83\u957f\u7684\u5355\u94fe\u8868\u7684\u5934\u90e8\uff08\u8fd9\u7b49\u4ef7\u4e8e\u8ba9\u957f\u94fe\u8868\u7684\u6307\u9488\u5148\u8d70",(0,a.yg)("inlineCode",{parentName:"p"},"|lenA-lenB|"),"\u6b65\uff09\uff0c\u4e24\u4e2a\u6307\u9488\u7ee7\u7eed\u5f80\u524d\u8d70\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u76f8\u540c\u7684\u8282\u70b9\u65f6\uff0c\u8fd9\u4e2a\u6307\u9488\u5c31\u662f\u76f8\u4ea4\u70b9\u3002"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Intersection of Two Linked Lists\n// Two Pointers\n// Time Complexity: O(m+n), Space Complexity: O(1)\npublic class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        ListNode a = headA;\n        ListNode b = headB;\n        while( a != b) {\n            a = a == null? headB : a.next;\n            b = b == null? headA : b.next;\n        }\n\n        return a; // return b is also OK\n    }\n}\n"))),(0,a.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Intersection of Two Linked Lists\n// Two Pointers\n// Time Complexity: O(m+n), Space Complexity: O(1)\nclass Solution {\npublic:\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n        ListNode *a = headA;\n        ListNode *b = headB;\n        while ( a != b) {\n            a = a == nullptr? headB : a->next;\n            b = b == nullptr? headA : b->next;\n        }\n\n        return a; // return b is also OK\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/linked-list/remove-nth-node-from-end-of-list"},"Remove Nth Node From End of List"))))}y.isMDXComponent=!0}}]);