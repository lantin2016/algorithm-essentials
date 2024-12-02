"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5996],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(58168),a=n(96540),o=n(20053),l=n(92303),s=n(31682),i=n(86976),u=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:d,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,s.X)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,i.x)(),[N,x]=(0,a.useState)(b),L=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.a_)();if(null!=d){const e=g[d];null!=e&&e!==N&&v.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,n=L.indexOf(t),r=v[n].value;r!==N&&(O(t),x(r),null!=d&&h(d,String(r)))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=L.indexOf(e.currentTarget)+1;t=L[n]??L[0];break}case"ArrowLeft":{const n=L.indexOf(e.currentTarget)-1;t=L[n]??L[L.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},m)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>L.push(e),onKeyDown:I,onFocus:w,onClick:w},l,{className:(0,o.A)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.A)();return a.createElement(p,(0,r.A)({key:String(t)},e))}},10317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(4865),l=n(19365);const s={title:"Insertion Sort List"},i=void 0,u={unversionedId:"sorting/insertion-sort/insertion-sort-list",id:"sorting/insertion-sort/insertion-sort-list",title:"Insertion Sort List",description:"\u63cf\u8ff0",source:"@site/docs/sorting/insertion-sort/insertion-sort-list.md",sourceDirName:"sorting/insertion-sort",slug:"/sorting/insertion-sort/insertion-sort-list",permalink:"/sorting/insertion-sort/insertion-sort-list",draft:!1,tags:[],version:"current",frontMatter:{title:"Insertion Sort List"},sidebar:"docs",previous:{title:"\u6392\u5e8f",permalink:"/category/\u6392\u5e8f"},next:{title:"Sort List",permalink:"/sorting/merge-sort/sort-list"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Sort a linked list using insertion sort."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(o.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Insertion Sort List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode insertionSortList(ListNode head) {\n        ListNode dummy = new ListNode(Integer.MIN_VALUE);\n        //dummy.next = head;\n\n        for (ListNode cur = head; cur != null;) {\n            ListNode pos = findInsertPos(dummy, cur.val);\n            ListNode tmp = cur.next;\n            cur.next = pos.next;\n            pos.next = cur;\n            cur = tmp;\n        }\n        return dummy.next;\n    }\n\n    ListNode findInsertPos(ListNode head, int x) {\n        ListNode pre = null;\n        for (ListNode cur = head; cur != null && cur.val <= x;\n             pre = cur, cur = cur.next)\n            ;\n        return pre;\n    }\n}\n"))),(0,a.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Insertion Sort List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *insertionSortList(ListNode *head) {\n        ListNode dummy(INT_MIN);\n        //dummy.next = head;\n\n        for (ListNode *cur = head; cur != nullptr;) {\n            auto pos = findInsertPos(&dummy, cur->val);\n            ListNode *tmp = cur->next;\n            cur->next = pos->next;\n            pos->next = cur;\n            cur = tmp;\n        }\n        return dummy.next;\n    }\n\n    ListNode* findInsertPos(ListNode *head, int x) {\n        ListNode *pre = nullptr;\n        for (ListNode *cur = head; cur != nullptr && cur->val <= x;\n            pre = cur, cur = cur->next)\n            ;\n        return pre;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/sorting/merge-sort/sort-list"},"Sort List"))))}f.isMDXComponent=!0}}]);