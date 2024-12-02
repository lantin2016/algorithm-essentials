"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9318],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,y=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return n?t.createElement(y,l(l({ref:r},c),{},{components:n})):t.createElement(y,l({ref:r},c))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},19365:(e,r,n)=>{n.d(r,{A:()=>l});var t=n(96540),a=n(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:n,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:n},r)}},4865:(e,r,n)=>{n.d(r,{A:()=>d});var t=n(58168),a=n(96540),i=n(20053),l=n(92303),o=n(31682),s=n(86976),u=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:r,block:n,defaultValue:l,values:p,groupId:d,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=p??y.map((e=>{let{props:{value:r,label:n,attributes:t}}=e;return{value:r,label:n,attributes:t}})),f=(0,o.X)(m,((e,r)=>e.value===r.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==v&&!m.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,s.x)(),[T,N]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:k}=(0,u.a_)();if(null!=d){const e=g[d];null!=e&&e!==T&&m.some((r=>r.value===e))&&N(e)}const w=e=>{const r=e.currentTarget,n=O.indexOf(r),t=m[n].value;t!==T&&(k(r),N(t),null!=d&&h(d,String(t)))},S=e=>{let r=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;r=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;r=O[n]??O[O.length-1];break}}r?.focus()};return a.createElement("div",{className:(0,i.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},b)},m.map((e=>{let{value:r,label:n,attributes:l}=e;return a.createElement("li",(0,t.A)({role:"tab",tabIndex:T===r?0:-1,"aria-selected":T===r,key:r,ref:e=>O.push(e),onKeyDown:S,onFocus:w,onClick:w},l,{className:(0,i.A)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":T===r})}),n??r)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==T})))))}function d(e){const r=(0,l.A)();return a.createElement(p,(0,t.A)({key:String(r)},e))}},60864:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var t=n(58168),a=(n(96540),n(15680)),i=n(4865),l=n(19365);const o={title:"Unique Binary Search Trees II"},s=void 0,u={unversionedId:"binary-tree/bst/unique-binary-search-trees-ii",id:"binary-tree/bst/unique-binary-search-trees-ii",title:"Unique Binary Search Trees II",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/bst/unique-binary-search-trees-ii.md",sourceDirName:"binary-tree/bst",slug:"/binary-tree/bst/unique-binary-search-trees-ii",permalink:"/en/binary-tree/bst/unique-binary-search-trees-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Unique Binary Search Trees II"},sidebar:"docs",previous:{title:"Unique Binary Search Trees",permalink:"/en/binary-tree/bst/unique-binary-search-trees"},next:{title:"Validate Binary Search Tree",permalink:"/en/binary-tree/bst/validate-binary-search-tree"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:p},b="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(b,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given ",(0,a.yg)("inlineCode",{parentName:"p"},"n"),", generate all structurally unique BST's (binary search trees) that store values 1...n."),(0,a.yg)("p",null,"For example,\nGiven ",(0,a.yg)("inlineCode",{parentName:"p"},"n = 3"),", your program should return all 5 unique BST's shown below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"   1         3     3      2      1\n    \\       /     /      / \\      \\\n     3     2     1      1   3      2\n    /     /       \\                 \\\n   2     1         2                 3\n")),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u89c1\u524d\u9762\u4e00\u9898\u3002"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Unique Binary Search Trees II\n// \u65f6\u95f4\u590d\u6742\u5ea6TODO\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6TODO\npublic class Solution {\n    public List<TreeNode> generateTrees(int n) {\n        if (n == 0) return new ArrayList<>();\n        return generate(1, n);\n    }\n    private static List<TreeNode > generate(int start, int end) {\n        List<TreeNode> subTree = new ArrayList<>();\n        if (start > end) {\n            subTree.add(null);\n            return subTree;\n        }\n        for (int k = start; k <= end; k++) {\n            List<TreeNode> leftSubs = generate(start, k - 1);\n            List<TreeNode> rightSubs = generate(k + 1, end);\n            for (TreeNode i : leftSubs) {\n                for (TreeNode j : rightSubs) {\n                    TreeNode node = new TreeNode(k);\n                    node.left = i;\n                    node.right = j;\n                    subTree.add(node);\n                }\n            }\n        }\n        return subTree;\n    }\n}\n"))),(0,a.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Unique Binary Search Trees II\n// \u65f6\u95f4\u590d\u6742\u5ea6TODO\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6TODO\nclass Solution {\npublic:\n    vector<TreeNode *> generateTrees(int n) {\n        if (n == 0) return vector<TreeNode*>();\n        return generate(1, n);\n    }\nprivate:\n    vector<TreeNode *> generate(int start, int end) {\n        vector<TreeNode*> subTree;\n        if (start > end) {\n            subTree.push_back(nullptr);\n            return subTree;\n        }\n        for (int k = start; k <= end; k++) {\n            vector<TreeNode*> leftSubs = generate(start, k - 1);\n            vector<TreeNode*> rightSubs = generate(k + 1, end);\n            for (auto i : leftSubs) {\n                for (auto j : rightSubs) {\n                    TreeNode *node = new TreeNode(k);\n                    node->left = i;\n                    node->right = j;\n                    subTree.push_back(node);\n                }\n            }\n        }\n        return subTree;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/binary-tree/bst/unique-binary-search-trees"},"Unique Binary Search Trees"))))}y.isMDXComponent=!0}}]);