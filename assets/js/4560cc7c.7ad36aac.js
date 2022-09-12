"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),l=r(6010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),l=r(7294),a=r(6010),o=r(2389),i=r(7392),u=r(7094),s=r(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,r;const{lazy:o,block:m,defaultValue:d,values:v,groupId:f,className:b}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?t:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,u.U)(),[O,S]=(0,l.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:q}=(0,s.o5)();if(null!=f){const e=T[f];null!=e&&e!==O&&h.some((t=>t.value===e))&&S(e)}const j=e=>{const t=e.currentTarget,r=w.indexOf(t),n=h[r].value;n!==O&&(q(t),S(n),null!=f&&N(f,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;r=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var l;const t=w.indexOf(e.currentTarget)-1;r=null!=(l=w[t])?l:w[w.length-1];break}}null==(t=r)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},b)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),o?(0,l.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},3510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),l=(r(7294),r(3905)),a=r(5488),o=r(5162);const i={title:"Symmetric Tree"},u=void 0,s={unversionedId:"binary-tree/traversal/symmetric-tree",id:"binary-tree/traversal/symmetric-tree",title:"Symmetric Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/symmetric-tree.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/symmetric-tree",permalink:"/binary-tree/traversal/symmetric-tree",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/symmetric-tree.md",tags:[],version:"current",frontMatter:{title:"Symmetric Tree"},sidebar:"someSidebar",previous:{title:"Same Tree",permalink:"/binary-tree/traversal/same-tree"},next:{title:"Balanced Binary Tree",permalink:"/binary-tree/traversal/balanced-binary-tree"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:3},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center)."),(0,l.kt)("p",null,"For example, this binary tree ",(0,l.kt)("inlineCode",{parentName:"p"},"[1,2,2,3,4,4,3]")," is symmetric:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4  3\n")),(0,l.kt)("p",null,"But the following ",(0,l.kt)("inlineCode",{parentName:"p"},"[1,2,2,null,3,null,3]")," is not:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n")),(0,l.kt)("p",null,"Note:\nBonus points if you could solve it both recursively and iteratively."),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Symmetric Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        return isSymmetric(root.left, root.right);\n    }\n    private static boolean isSymmetric(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == null || q == null) return false;  // \u7ec8\u6b62\u6761\u4ef6\n        return p.val == q.val      // \u4e09\u65b9\u5408\u5e76\n                && isSymmetric(p.left, q.right)\n                && isSymmetric(p.right, q.left);\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Symmetric Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSymmetric(TreeNode *root) {\n        if (root == nullptr) return true;\n        return isSymmetric(root->left, root->right);\n    }\n    bool isSymmetric(TreeNode *p, TreeNode *q) {\n        if (p == nullptr && q == nullptr) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == nullptr || q == nullptr) return false;  // \u7ec8\u6b62\u6761\u4ef6\n        return p->val == q->val      // \u4e09\u65b9\u5408\u5e76\n                && isSymmetric(p->left, q->right)\n                && isSymmetric(p->right, q->left);\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Symmetric Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSymmetric (TreeNode root) {\n        if (root == null) return true;\n\n        Stack<TreeNode> s = new Stack<>();\n        s.push(root.left);\n        s.push(root.right);\n\n        while (!s.isEmpty()) {\n            TreeNode p = s.pop ();\n            TreeNode q = s.pop ();\n\n            if (p == null && q == null) continue;\n            if (p == null || q == null) return false;\n            if (p.val != q.val) return false;\n\n            s.push(p.left);\n            s.push(q.right);\n\n            s.push(p.right);\n            s.push(q.left);\n        }\n\n        return true;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Symmetric Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSymmetric (TreeNode* root) {\n        if (!root) return true;\n\n        stack<TreeNode*> s;\n        s.push(root->left);\n        s.push(root->right);\n\n        while (!s.empty ()) {\n            auto p = s.top (); s.pop();\n            auto q = s.top (); s.pop();\n\n            if (!p && !q) continue;\n            if (!p || !q) return false;\n            if (p->val != q->val) return false;\n\n            s.push(p->left);\n            s.push(q->right);\n\n            s.push(p->right);\n            s.push(q->left);\n        }\n\n        return true;\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/binary-tree/traversal/same-tree"},"Same Tree"))))}d.isMDXComponent=!0}}]);