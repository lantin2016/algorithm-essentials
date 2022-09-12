"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={title:"Kth Smallest Element in a BST"},i=void 0,o={unversionedId:"binary-tree/bst/kth-smallest-element-in-a-bst",id:"binary-tree/bst/kth-smallest-element-in-a-bst",title:"Kth Smallest Element in a BST",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/bst/kth-smallest-element-in-a-bst.md",sourceDirName:"binary-tree/bst",slug:"/binary-tree/bst/kth-smallest-element-in-a-bst",permalink:"/binary-tree/bst/kth-smallest-element-in-a-bst",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/bst/kth-smallest-element-in-a-bst.md",tags:[],version:"current",frontMatter:{title:"Kth Smallest Element in a BST"},sidebar:"someSidebar",previous:{title:"LCA of BST",permalink:"/binary-tree/bst/lca-of-bst"},next:{title:"\u7b80\u4ecb",permalink:"/binary-tree/recursion/"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1",id:"\u89e3\u6cd5-1",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a binary search tree, write a function ",(0,l.kt)("inlineCode",{parentName:"p"},"kthSmallest")," to find the kth smallest element in it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),":"),(0,l.kt)("p",null,"You may assume ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," is always valid, ",(0,l.kt)("inlineCode",{parentName:"p"},"1 \u2264 k \u2264")," BST's total elements."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Follow up"),":"),(0,l.kt)("p",null,"What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hint"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Try to utilize the property of a BST."),(0,l.kt)("li",{parentName:"ul"},"What if you could modify the BST node's structure?"),(0,l.kt)("li",{parentName:"ul"},"The optimal runtime complexity is O(height of BST).")),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u6700\u7b80\u5355\u7684\u529e\u6cd5\uff0c\u4e2d\u5e8f\u904d\u5386\uff0c\u5373\u53ef\u4ee5\u5f97\u5230\u9012\u589e\u5e8f\u5217\uff0c\u4ece\u800c\u53ef\u4ee5\u627e\u5230\u7b2c k \u5927\u7684\u5143\u7d20\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,l.kt)("inlineCode",{parentName:"p"},"O(k)"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u80fd\u591f\u4fee\u6539\u8282\u70b9\u7684\u6570\u636e\u7ed3\u6784",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\uff0c\u53ef\u4ee5\u589e\u52a0\u4e00\u4e2a\u5b57\u6bb5",(0,l.kt)("inlineCode",{parentName:"p"},"leftCnt"),"\uff0c\u8868\u793a\u5de6\u5b50\u6811\u7684\u8282\u70b9\u4e2a\u6570\u3002\u8bbe\u5f53\u524d\u8282\u70b9\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"root"),"\uff0c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5 ",(0,l.kt)("inlineCode",{parentName:"li"},"k == root.leftCnt+1"),", \u5219\u8fd4\u56de root"),(0,l.kt)("li",{parentName:"ul"},"\u82e5 ",(0,l.kt)("inlineCode",{parentName:"li"},"k > node.leftCnt"),", \u5219 ",(0,l.kt)("inlineCode",{parentName:"li"},"k -= root.leftCnt+1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"root=root.right")),(0,l.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"node = node.left"))),(0,l.kt)("p",null,"\u7b97\u6cd5\u590d\u6742\u5ea6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"O(height of BST)"),"\u3002"),(0,l.kt)("h3",{id:"\u89e3\u6cd5-1"},"\u89e3\u6cd5 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Kth Smallest Element in a BST\n// Time Complexity: O(k), Space Complexity: O(h)\npublic class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        Stack<TreeNode> s = new Stack<>();\n        TreeNode p = root;\n\n        while (!s.empty() || p != null) {\n            if (p != null) {\n                s.push(p);\n                p = p.left;\n            } else {\n                p = s.pop();\n                --k;\n                if (k == 0) {\n                    return p.val;\n                }\n                p = p.right;\n            }\n        }\n        return -1;\n    }\n}\n")))}u.isMDXComponent=!0}}]);