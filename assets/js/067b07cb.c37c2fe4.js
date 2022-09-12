"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3589],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,b=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return t?n.createElement(b,i(i({ref:r},d),{},{components:t})):n.createElement(b,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(7294),o=t(6010);const a="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>f});var n=t(7462),o=t(7294),a=t(6010),i=t(2389),l=t(7392),s=t(7094),u=t(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var r,t;const{lazy:i,block:p,defaultValue:f,values:b,groupId:m,className:v}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),g=(0,l.l)(h,((e,r)=>e.value===r.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===f?f:null!=(r=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:y[0].props.value;if(null!==T&&!h.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:k}=(0,s.U)(),[O,N]=(0,o.useState)(T),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=m){const e=_[m];null!=e&&e!==O&&h.some((r=>r.value===e))&&N(e)}const I=e=>{const r=e.currentTarget,t=w.indexOf(r),n=h[t].value;n!==O&&(E(r),N(n),null!=m&&k(m,String(n)))},j=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{var n;const r=w.indexOf(e.currentTarget)+1;t=null!=(n=w[r])?n:w[0];break}case"ArrowLeft":{var o;const r=w.indexOf(e.currentTarget)-1;t=null!=(o=w[r])?o:w[w.length-1];break}}null==(r=t)||r.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},h.map((e=>{let{value:r,label:t,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:e=>w.push(e),onKeyDown:j,onFocus:I,onClick:I},i,{className:(0,a.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===r})}),null!=t?t:r)}))),i?(0,o.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==O})))))}function f(e){const r=(0,i.Z)();return o.createElement(p,(0,n.Z)({key:String(r)},e))}},159:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=t(7462),o=(t(7294),t(3905)),a=t(5488),i=t(5162);const l={title:"Construct Binary Tree from Inorder and Postorder Traversal"},s=void 0,u={unversionedId:"binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal",id:"binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal",title:"Construct Binary Tree from Inorder and Postorder Traversal",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal.md",sourceDirName:"binary-tree/construction",slug:"/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal",permalink:"/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal.md",tags:[],version:"current",frontMatter:{title:"Construct Binary Tree from Inorder and Postorder Traversal"},sidebar:"someSidebar",previous:{title:"Construct Binary Tree from Preorder and Inorder Traversal",permalink:"/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal"},next:{title:"Unique Binary Search Trees",permalink:"/binary-tree/bst/unique-binary-search-trees"}},d={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"Given inorder and postorder traversal of a tree, construct the binary tree."),(0,o.kt)("p",null,"Note:\nYou may assume that duplicates do not exist in the tree."),(0,o.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Construct Binary Tree from Inorder and Postorder Traversal\n// \u9012\u5f52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(\\logn)\npublic class Solution {\n    public TreeNode buildTree(int[] inorder, int[] postorder) {\n        return buildTree(inorder, 0, inorder.length,\n                postorder, 0, postorder.length);\n    }\n\n    TreeNode buildTree(int[] inorder, int begin1, int end1,\n                       int[] postorder, int begin2, int end2) {\n        if (begin1 ==end1) return null;\n        if (begin2 ==end2) return null;\n\n        int val = postorder[end2 - 1];\n        TreeNode root = new TreeNode(val);\n\n        int in_root_pos = find(inorder, begin1, end1, val);\n        int left_size = in_root_pos - begin1;\n        int post_left_last = begin2 + left_size;\n\n        root.left = buildTree(inorder, begin1, in_root_pos,\n                postorder, begin2, post_left_last);\n        root.right = buildTree(inorder, in_root_pos + 1, end1,\n                postorder, post_left_last, end2 - 1);\n\n        return root;\n    }\n    private static int find(int[] array, int begin, int end, int val) {\n        for (int i = begin; i < end; ++i) {\n            if (array[i] == val) return i;\n        }\n        return -1;\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Construct Binary Tree from Inorder and Postorder Traversal\n// \u9012\u5f52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(\\logn)\nclass Solution {\npublic:\n    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {\n        return buildTree(begin(inorder), end(inorder),\n                begin(postorder), end(postorder));\n    }\n\n    template<typename BidiIt>\n    TreeNode* buildTree(BidiIt in_first, BidiIt in_last,\n            BidiIt post_first, BidiIt post_last) {\n        if (in_first ==in_last) return nullptr;\n        if (post_first == post_last) return nullptr;\n\n        const auto val = *prev(post_last);\n        TreeNode* root = new TreeNode(val);\n\n        auto in_root_pos = find(in_first, in_last, val);\n        auto left_size = distance(in_first, in_root_pos);\n        auto post_left_last = next(post_first, left_size);\n\n        root->left = buildTree(in_first, in_root_pos, post_first, post_left_last);\n        root->right = buildTree(next(in_root_pos), in_last, post_left_last,\n                prev(post_last));\n\n        return root;\n    }\n};\n")))),(0,o.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal"},"Construct Binary Tree from Preorder and Inorder Traversal"))))}f.isMDXComponent=!0}}]);