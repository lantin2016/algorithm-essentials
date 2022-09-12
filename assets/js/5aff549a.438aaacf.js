"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(v,s(s({ref:t},p),{},{components:r})):n.createElement(v,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),l=r(6010),s=r(2389),o=r(7392),u=r(7094),i=r(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,r;const{lazy:s,block:m,defaultValue:d,values:v,groupId:f,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),T=(0,o.l)(y,((e,t)=>e.value===t.value));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(r=h.find((e=>e.props.default)))?void 0:r.props.value)?t:h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,u.U)(),[N,q]=(0,a.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&q(e)}const j=e=>{const t=e.currentTarget,r=w.indexOf(t),n=y[r].value;n!==N&&(S(t),q(n),null!=f&&O(f,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;r=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;r=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},b)},y.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:j,onClick:j},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},7614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),l=r(5488),s=r(5162);const o={title:"Same Tree"},u=void 0,i={unversionedId:"binary-tree/traversal/same-tree",id:"binary-tree/traversal/same-tree",title:"Same Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/same-tree.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/same-tree",permalink:"/binary-tree/traversal/same-tree",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/same-tree.md",tags:[],version:"current",frontMatter:{title:"Same Tree"},sidebar:"someSidebar",previous:{title:"Recover Binary Search Tree",permalink:"/binary-tree/traversal/recover-binary-search-tree"},next:{title:"Symmetric Tree",permalink:"/binary-tree/traversal/symmetric-tree"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:3},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given two binary trees, write a function to check if they are equal or not."),(0,a.kt)("p",null,"Two binary trees are considered equal if they are structurally identical and the nodes have the same value."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Same Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == null || q == null) return false;  // \u526a\u679d\n        return p.val == q.val      // \u4e09\u65b9\u5408\u5e76\n                && isSameTree(p.left, q.left)\n                && isSameTree(p.right, q.right);\n    }\n}\n"))),(0,a.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Same Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSameTree(TreeNode *p, TreeNode *q) {\n        if (!p && !q) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (!p || !q) return false;  // \u526a\u679d\n        return p->val == q->val      // \u4e09\u65b9\u5408\u5e76\n                && isSameTree(p->left, q->left)\n                && isSameTree(p->right, q->right);\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Same Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        Stack<TreeNode> s = new Stack<>();\n        s.push(p);\n        s.push(q);\n\n        while(!s.empty()) {\n            p = s.pop();\n            q = s.pop();\n\n            if (p == null && q == null) continue;\n            if (p == null || q == null) return false;\n            if (p.val != q.val) return false;\n\n            s.push(p.left);\n            s.push(q.left);\n\n            s.push(p.right);\n            s.push(q.right);\n        }\n        return true;\n    }\n}\n"))),(0,a.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Same Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSameTree(TreeNode *p, TreeNode *q) {\n        stack<TreeNode*> s;\n        s.push(p);\n        s.push(q);\n\n        while(!s.empty()) {\n            p = s.top(); s.pop();\n            q = s.top(); s.pop();\n\n            if (!p && !q) continue;\n            if (!p || !q) return false;\n            if (p->val != q->val) return false;\n\n            s.push(p->left);\n            s.push(q->left);\n\n            s.push(p->right);\n            s.push(q->right);\n        }\n        return true;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/binary-tree/traversal/symmetric-tree"},"Symmetric Tree"))))}d.isMDXComponent=!0}}]);