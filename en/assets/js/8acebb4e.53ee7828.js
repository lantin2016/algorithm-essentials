"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6699],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(58168),a=n(96540),l=n(20053),o=n(92303),i=n(31682),u=n(86976),s=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:d,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=p??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.X)(m,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==v&&!m.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,u.x)(),[T,N]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:k}=(0,s.a_)();if(null!=d){const e=g[d];null!=e&&e!==T&&m.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,n=O.indexOf(t),r=m[n].value;r!==T&&(k(t),N(r),null!=d&&h(d,String(r)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},f)},m.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:w,onClick:w},o,{className:(0,l.A)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.A)();return a.createElement(p,(0,r.A)({key:String(t)},e))}},46392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),o=n(19365);const i={title:"Flatten Binary Tree to Linked List"},u=void 0,s={unversionedId:"binary-tree/traversal/flatten-binary-tree-to-linked-list",id:"binary-tree/traversal/flatten-binary-tree-to-linked-list",title:"Flatten Binary Tree to Linked List",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/flatten-binary-tree-to-linked-list.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/flatten-binary-tree-to-linked-list",permalink:"/en/binary-tree/traversal/flatten-binary-tree-to-linked-list",draft:!1,tags:[],version:"current",frontMatter:{title:"Flatten Binary Tree to Linked List"},sidebar:"docs",previous:{title:"Balanced Binary Tree",permalink:"/en/binary-tree/traversal/balanced-binary-tree"},next:{title:"Populating Next Right Pointers in Each Node II",permalink:"/en/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248 1",id:"\u9012\u5f52\u7248-1",level:3},{value:"\u9012\u5f52\u7248 2",id:"\u9012\u5f52\u7248-2",level:3}],d={toc:p},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(f,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given a binary tree, flatten it to a linked list in-place."),(0,a.yg)("p",null,"For example, Given"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"         1\n        / \\\n       2   5\n      / \\   \\\n     3   4   6\n")),(0,a.yg)("p",null,"The flattened tree should look like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"   1\n    \\\n     2\n      \\\n       3\n        \\\n         4\n          \\\n           5\n            \\\n             6\n")),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"\u9012\u5f52\u7248-1"},"\u9012\u5f52\u7248 1"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72481\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public void flatten(TreeNode root) {\n        if (root == null) return;  // \u7ec8\u6b62\u6761\u4ef6\n\n        flatten(root.left);\n        flatten(root.right);\n\n        if (root.left == null) return;\n\n        // \u4e09\u65b9\u5408\u5e76\uff0c\u5c06\u5de6\u5b50\u6811\u6240\u5f62\u6210\u7684\u94fe\u8868\u63d2\u5165\u5230root\u548croot->right\u4e4b\u95f4\n        TreeNode p = root.left;\n        while(p.right != null) p = p.right; //\u5bfb\u627e\u5de6\u94fe\u8868\u6700\u540e\u4e00\u4e2a\u8282\u70b9\n        p.right = root.right;\n        root.right = root.left;\n        root.left = null;\n    }\n}\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72481\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    void flatten(TreeNode *root) {\n        if (root == nullptr) return;  // \u7ec8\u6b62\u6761\u4ef6\n\n        flatten(root->left);\n        flatten(root->right);\n\n        if (nullptr == root->left) return;\n\n        // \u4e09\u65b9\u5408\u5e76\uff0c\u5c06\u5de6\u5b50\u6811\u6240\u5f62\u6210\u7684\u94fe\u8868\u63d2\u5165\u5230root\u548croot->right\u4e4b\u95f4\n        TreeNode *p = root->left;\n        while(p->right) p = p->right; //\u5bfb\u627e\u5de6\u94fe\u8868\u6700\u540e\u4e00\u4e2a\u8282\u70b9\n        p->right = root->right;\n        root->right = root->left;\n        root->left = nullptr;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u9012\u5f52\u7248-2"},"\u9012\u5f52\u7248 2"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72482\n// @author \u738b\u987a\u8fbe(http://weibo.com/u/1234984145)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public void flatten(TreeNode root) {\n        flatten(root, null);\n    }\n    // \u628aroot\u6240\u4ee3\u8868\u6811\u53d8\u6210\u94fe\u8868\u540e\uff0ctail\u8ddf\u5728\u8be5\u94fe\u8868\u540e\u9762\n    private static TreeNode flatten(TreeNode root, TreeNode tail) {\n        if (root == null) return tail;\n\n        root.right = flatten(root.left, flatten(root.right, tail));\n        root.left = null;\n        return root;\n    }\n}\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72482\n// @author \u738b\u987a\u8fbe(http://weibo.com/u/1234984145)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    void flatten(TreeNode *root) {\n        flatten(root, NULL);\n    }\nprivate:\n    // \u628aroot\u6240\u4ee3\u8868\u6811\u53d8\u6210\u94fe\u8868\u540e\uff0ctail\u8ddf\u5728\u8be5\u94fe\u8868\u540e\u9762\n    TreeNode *flatten(TreeNode *root, TreeNode *tail) {\n        if (NULL == root) return tail;\n\n        root->right = flatten(root->left, flatten(root->right, tail));\n        root->left = NULL;\n        return root;\n    }\n};\n")))))}y.isMDXComponent=!0}}]);