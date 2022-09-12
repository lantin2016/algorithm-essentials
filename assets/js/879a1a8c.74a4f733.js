"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2328],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,b=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?t.createElement(b,i(i({ref:r},d),{},{components:n})):t.createElement(b,i({ref:r},d))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:r,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},r)}},5488:(e,r,n)=>{n.d(r,{Z:()=>f});var t=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var r,n;const{lazy:i,block:p,defaultValue:f,values:b,groupId:m,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:y.map((e=>{let{props:{value:r,label:n,attributes:t}}=e;return{value:r,label:n,attributes:t}})),h=(0,l.l)(g,((e,r)=>e.value===r.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===f?f:null!=(r=null!=f?f:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?r:y[0].props.value;if(null!==T&&!g.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,s.U)(),[N,I]=(0,a.useState)(T),P=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&g.some((r=>r.value===e))&&I(e)}const w=e=>{const r=e.currentTarget,n=P.indexOf(r),t=g[n].value;t!==N&&(_(r),I(t),null!=m&&O(m,String(t)))},x=e=>{var r;let n=null;switch(e.key){case"ArrowRight":{var t;const r=P.indexOf(e.currentTarget)+1;n=null!=(t=P[r])?t:P[0];break}case"ArrowLeft":{var a;const r=P.indexOf(e.currentTarget)-1;n=null!=(a=P[r])?a:P[P.length-1];break}}null==(r=n)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},g.map((e=>{let{value:r,label:n,attributes:i}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===r?0:-1,"aria-selected":N===r,key:r,ref:e=>P.push(e),onKeyDown:x,onFocus:w,onClick:w},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===r})}),null!=n?n:r)}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==N})))))}function f(e){const r=(0,i.Z)();return a.createElement(p,(0,t.Z)({key:String(r)},e))}},3907:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var t=n(7462),a=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={title:"Construct Binary Tree from Preorder and Inorder Traversal"},s=void 0,u={unversionedId:"binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal",id:"binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal",title:"Construct Binary Tree from Preorder and Inorder Traversal",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal.md",sourceDirName:"binary-tree/construction",slug:"/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal",permalink:"/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal.md",tags:[],version:"current",frontMatter:{title:"Construct Binary Tree from Preorder and Inorder Traversal"},sidebar:"someSidebar",previous:{title:"Populating Next Right Pointers in Each Node II",permalink:"/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii"},next:{title:"Construct Binary Tree from Inorder and Postorder Traversal",permalink:"/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal"}},d={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function f(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given preorder and inorder traversal of a tree, construct the binary tree."),(0,a.kt)("p",null,"Note:\nYou may assume that duplicates do not exist in the tree."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(o.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Construct Binary Tree from Preorder and Inorder Traversal\n// \u9012\u5f52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(\\logn)\npublic class Solution {\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\n        return buildTree(preorder, 0, preorder.length,\n                inorder, 0, inorder.length);\n    }\n\n    TreeNode buildTree(int[] preorder, int begin1, int end1,\n                       int[] inorder, int begin2, int end2) {\n        if (begin1 == end1) return null;\n        if (begin2 == end2) return null;\n\n        TreeNode root = new TreeNode(preorder[begin1]);\n\n        int inRootPos = find(inorder, begin2, end2, preorder[begin1]);\n        int leftSize = inRootPos - begin2;\n\n        root.left = buildTree(preorder, begin1 + 1, begin1 + leftSize + 1,\n                inorder, begin2, begin2 + leftSize);\n        root.right = buildTree(preorder, begin1 + leftSize + 1, end1,\n                inorder, inRootPos + 1, end2);\n\n        return root;\n    }\n    private static int find(int[] array, int begin, int end, int val) {\n        for (int i = begin; i < end; ++i) {\n            if (array[i] == val) return i;\n        }\n        return -1;\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Construct Binary Tree from Preorder and Inorder Traversal\n// \u9012\u5f52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(\\logn)\nclass Solution {\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        return buildTree(begin(preorder), end(preorder),\n                begin(inorder), end(inorder));\n    }\n\n    template<typename InputIterator>\n    TreeNode* buildTree(InputIterator pre_first, InputIterator pre_last,\n            InputIterator in_first, InputIterator in_last) {\n        if (pre_first == pre_last) return nullptr;\n        if (in_first == in_last) return nullptr;\n\n        auto root = new TreeNode(*pre_first);\n\n        auto inRootPos = find(in_first, in_last, *pre_first);\n        auto leftSize = distance(in_first, inRootPos);\n\n        root->left = buildTree(next(pre_first), next(pre_first,\n                leftSize + 1), in_first, next(in_first, leftSize));\n        root->right = buildTree(next(pre_first, leftSize + 1), pre_last,\n                next(inRootPos), in_last);\n\n        return root;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal"},"Construct Binary Tree from Inorder and Postorder Traversal"))))}f.isMDXComponent=!0}}]);