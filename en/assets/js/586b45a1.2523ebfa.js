"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6607],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),v=a,y=c["".concat(s,".").concat(v)]||c[v]||d[v]||l;return t?n.createElement(y,o(o({ref:r},p),{},{components:t})):n.createElement(y,o({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=v;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},19365:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(96540),a=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:r,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:t},r)}},4865:(e,r,t)=>{t.d(r,{A:()=>d});var n=t(58168),a=t(96540),l=t(20053),o=t(92303),i=t(31682),s=t(86976),u=t(23104);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:r,block:t,defaultValue:o,values:c,groupId:d,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=c??y.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),b=(0,i.X)(m,((e,r)=>e.value===r.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==f&&!m.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,s.x)(),[T,N]=(0,a.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.a_)();if(null!=d){const e=g[d];null!=e&&e!==T&&m.some((r=>r.value===e))&&N(e)}const k=e=>{const r=e.currentTarget,t=O.indexOf(r),n=m[t].value;n!==T&&(w(r),N(n),null!=d&&h(d,String(n)))},E=e=>{let r=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}r?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",p.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},v)},m.map((e=>{let{value:r,label:t,attributes:o}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:T===r?0:-1,"aria-selected":T===r,key:r,ref:e=>O.push(e),onKeyDown:E,onFocus:k,onClick:k},o,{className:(0,l.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":T===r})}),t??r)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==T})))))}function d(e){const r=(0,o.A)();return a.createElement(c,(0,n.A)({key:String(r)},e))}},1529:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=t(58168),a=(t(96540),t(15680)),l=t(4865),o=t(19365);const i={title:"Binary Tree Preorder Traversal"},s=void 0,u={unversionedId:"binary-tree/traversal/binary-tree-preorder-traversal",id:"binary-tree/traversal/binary-tree-preorder-traversal",title:"Binary Tree Preorder Traversal",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/binary-tree-preorder-traversal.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/binary-tree-preorder-traversal",permalink:"/en/binary-tree/traversal/binary-tree-preorder-traversal",draft:!1,tags:[],version:"current",frontMatter:{title:"Binary Tree Preorder Traversal"},sidebar:"docs",previous:{title:"\u4e8c\u53c9\u6811\u7684\u904d\u5386",permalink:"/en/binary-tree/traversal/"},next:{title:"Binary Tree Inorder Traversal",permalink:"/en/binary-tree/traversal/binary-tree-inorder-traversal"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u6808",id:"\u6808",level:3},{value:"Morris \u5148\u5e8f\u904d\u5386",id:"morris-\u5148\u5e8f\u904d\u5386",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:c},v="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(v,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given a binary tree, return the ",(0,a.yg)("strong",{parentName:"p"},"preorder")," traversal of its nodes' values."),(0,a.yg)("p",null,"For example:\nGiven binary tree ",(0,a.yg)("inlineCode",{parentName:"p"},"{1,#,2,3}"),","),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," 1\n  \\\n   2\n  /\n 3\n")),(0,a.yg)("p",null,"return ",(0,a.yg)("inlineCode",{parentName:"p"},"[1,2,3]"),"."),(0,a.yg)("p",null,"Note: Recursive solution is trivial, could you do it iteratively?"),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u7528\u6808\u6216\u8005 Morris \u904d\u5386\u3002"),(0,a.yg)("h3",{id:"\u6808"},"\u6808"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Binary Tree Preorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        ArrayList<Integer> result = new ArrayList<>();\n        Stack<TreeNode> s = new Stack<>();\n        if (root != null) s.push(root);\n\n        while (!s.isEmpty()) {\n            final TreeNode p = s.pop();\n            result.add(p.val);\n\n            if (p.right != null) s.push(p.right);\n            if (p.left != null) s.push(p.left);\n        }\n        return result;\n    }\n}\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Preorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<int> preorderTraversal(TreeNode *root) {\n        vector<int> result;\n        stack<const TreeNode *> s;\n        if (root != nullptr) s.push(root);\n\n        while (!s.empty()) {\n            const TreeNode *p = s.top();\n            s.pop();\n            result.push_back(p->val);\n\n            if (p->right != nullptr) s.push(p->right);\n            if (p->left != nullptr) s.push(p->left);\n        }\n        return result;\n    }\n};\n")))),(0,a.yg)("h3",{id:"morris-\u5148\u5e8f\u904d\u5386"},"Morris \u5148\u5e8f\u904d\u5386"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Preorder Traversal\n// Morris\u5148\u5e8f\u904d\u5386\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> preorderTraversal(TreeNode *root) {\n        vector<int> result;\n        TreeNode *cur = root, *prev = nullptr;\n\n        while (cur != nullptr) {\n            if (cur->left == nullptr) {\n                result.push_back(cur->val);\n                prev = cur; /* cur\u521a\u521a\u88ab\u8bbf\u95ee\u8fc7 */\n                cur = cur->right;\n            } else {\n                /* \u67e5\u627e\u524d\u9a71 */\n                TreeNode *node = cur->left;\n                while (node->right != nullptr && node->right != cur)\n                    node = node->right;\n\n                if (node->right == nullptr) { /* \u8fd8\u6ca1\u7ebf\u7d22\u5316\uff0c\u5219\u5efa\u7acb\u7ebf\u7d22 */\n                    result.push_back(cur->val); /* \u4ec5\u8fd9\u4e00\u884c\u7684\u4f4d\u7f6e\u4e0e\u4e2d\u5e8f\u4e0d\u540c */\n                    node->right = cur;\n                    prev = cur; /* cur\u521a\u521a\u88ab\u8bbf\u95ee\u8fc7 */\n                    cur = cur->left;\n                } else {    /* \u5df2\u7ecf\u7ebf\u7d22\u5316\uff0c\u5219\u5220\u9664\u7ebf\u7d22  */\n                    node->right = nullptr;\n                    /* prev = cur; \u4e0d\u80fd\u6709\u8fd9\u53e5\uff0ccur\u5df2\u7ecf\u88ab\u8bbf\u95ee */\n                    cur = cur->right;\n                }\n            }\n        }\n        return result;\n    }\n};\n")),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/binary-tree/traversal/binary-tree-inorder-traversal"},"Binary Tree Inorder Traversal")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/binary-tree/traversal/binary-tree-postorder-traversal"},"Binary Tree Postorder Traversal")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/binary-tree/traversal/recover-binary-search-tree"},"Recover Binary Search Tree"))))}y.isMDXComponent=!0}}]);