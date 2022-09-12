"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4061],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),o=t(6010),l=t(2389),i=t(7392),u=t(7094),c=t(2466);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t;const{lazy:l,block:p,defaultValue:m,values:f,groupId:v,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),w=(0,i.l)(y,((e,n)=>e.value===n.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===m?m:null!=(n=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==x&&!y.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:g}=(0,u.U)(),[N,O]=(0,a.useState)(x),L=[],{blockElementScrollPositionUntilNextRender:R}=(0,c.o5)();if(null!=v){const e=k[v];null!=e&&e!==N&&y.some((n=>n.value===e))&&O(e)}const T=e=>{const n=e.currentTarget,t=L.indexOf(n),r=y[t].value;r!==N&&(R(n),O(r),null!=v&&g(v,String(r)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=L.indexOf(e.currentTarget)+1;t=null!=(r=L[n])?r:L[0];break}case"ArrowLeft":{var a;const n=L.indexOf(e.currentTarget)-1;t=null!=(a=L[n])?a:L[L.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},y.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>L.push(e),onKeyDown:E,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},9153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={title:"Copy List with Random Pointer"},u=void 0,c={unversionedId:"linked-list/copy-list-with-random-pointer",id:"linked-list/copy-list-with-random-pointer",title:"Copy List with Random Pointer",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/copy-list-with-random-pointer.md",sourceDirName:"linked-list",slug:"/linked-list/copy-list-with-random-pointer",permalink:"/linked-list/copy-list-with-random-pointer",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linked-list/copy-list-with-random-pointer.md",tags:[],version:"current",frontMatter:{title:"Copy List with Random Pointer"},sidebar:"someSidebar",previous:{title:"Reverse Nodes in k-Group",permalink:"/linked-list/reverse-nodes-in-k-group"},next:{title:"Reorder List",permalink:"/linked-list/reorder-list"}},s={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null."),(0,a.kt)("p",null,"Return a deep copy of the list."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(o.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Copy List with Random Pointer\n// \u4e24\u904d\u626b\u63cf\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public RandomListNode copyRandomList(RandomListNode head) {\n        for (RandomListNode cur = head; cur != null; ) {\n            RandomListNode node = new RandomListNode(cur.label);\n            node.next = cur.next;\n            cur.next = node;\n            cur = node.next;\n        }\n\n        for (RandomListNode cur = head; cur != null; ) {\n            if (cur.random != null)\n                cur.next.random = cur.random.next;\n            cur = cur.next.next;\n        }\n\n        // \u5206\u62c6\u4e24\u4e2a\u5355\u94fe\u8868\n        RandomListNode dummy = new RandomListNode(-1);\n        for (RandomListNode cur = head, new_cur = dummy;\n                cur != null; ) {\n            new_cur.next = cur.next;\n            new_cur = new_cur.next;\n            cur.next = cur.next.next;\n            cur = cur.next;\n        }\n        return dummy.next;\n    }\n};\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Copy List with Random Pointer\n// \u4e24\u904d\u626b\u63cf\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    RandomListNode *copyRandomList(RandomListNode *head) {\n        for (RandomListNode* cur = head; cur != nullptr; ) {\n            RandomListNode* node = new RandomListNode(cur->label);\n            node->next = cur->next;\n            cur->next = node;\n            cur = node->next;\n        }\n\n        for (RandomListNode* cur = head; cur != nullptr; ) {\n            if (cur->random != NULL)\n                cur->next->random = cur->random->next;\n            cur = cur->next->next;\n        }\n\n        // \u5206\u62c6\u4e24\u4e2a\u5355\u94fe\u8868\n        RandomListNode dummy(-1);\n        for (RandomListNode* cur = head, *new_cur = &dummy;\n                cur != nullptr; ) {\n            new_cur->next = cur->next;\n            new_cur = new_cur->next;\n            cur->next = cur->next->next;\n            cur = cur->next;\n        }\n        return dummy.next;\n    }\n};\n")))))}m.isMDXComponent=!0}}]);