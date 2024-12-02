"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[602],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(f,s(s({ref:n},u),{},{components:t})):a.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(58168),r=t(96540),o=t(20053),s=t(92303),i=t(31682),l=t(86976),c=t(23104);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:n,block:t,defaultValue:s,values:p,groupId:m,className:d}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,i.X)(b,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,l.x)(),[k,x]=(0,r.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.a_)();if(null!=m){const e=v[m];null!=e&&e!==k&&b.some((n=>n.value===e))&&x(e)}const I=e=>{const n=e.currentTarget,t=N.indexOf(n),a=b[t].value;a!==k&&(w(n),x(a),null!=m&&g(m,String(a)))},E=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.A)("tabs-container",u.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},d)},b.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>N.push(e),onKeyDown:E,onFocus:I,onClick:I},s,{className:(0,o.A)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":k===n})}),t??n)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function m(e){const n=(0,s.A)();return r.createElement(p,(0,a.A)({key:String(n)},e))}},75925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),o=t(4865),s=t(19365);const i={title:"Build Binary Expression Tree From Infix Expression"},l=void 0,c={unversionedId:"stack-and-queue/stack/build-binary-expression-tree-from-infix-expression",id:"stack-and-queue/stack/build-binary-expression-tree-from-infix-expression",title:"Build Binary Expression Tree From Infix Expression",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression.md",sourceDirName:"stack-and-queue/stack",slug:"/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression",permalink:"/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression",draft:!1,tags:[],version:"current",frontMatter:{title:"Build Binary Expression Tree From Infix Expression"},sidebar:"docs",previous:{title:"Basic Calculator III",permalink:"/stack-and-queue/stack/basic-calculator-iii"},next:{title:"Implement Stack using Queues",permalink:"/stack-and-queue/stack/implement-stack-using-queues"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p},d="wrapper";function f(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u8fd9\u9898\u4e0e",(0,r.yg)("a",{parentName:"p",href:"/stack-and-queue/stack/basic-calculator-iii"},"Basic Calculator III"),"\u5f88\u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u662f\u8f93\u51fa\u7ed3\u679c\u4e0a\uff0c\u672c\u9898\u662f\u8f93\u51fa\u4e00\u68f5\u6811\uff0c\u540e\u8005\u53ea\u9700\u8981\u8f93\u51fa\u4e00\u4e2a\u8ba1\u7b97\u7ed3\u679c\u3002\u6240\u4ee5\u672c\u9898\u7684\u4ee3\u7801\u4e5f\u5f88\u7c7b\u4f3c\uff0c\u8bbe\u7f6e\u4e24\u4e2a\u6808\uff0c\u4e00\u4e2a\u6570\u5b57\u6808\uff0c\u4e00\u4e2a\u64cd\u4f5c\u7b26\u6808\uff0c\u4e0d\u8fc7\u6570\u5b57\u6808\u91cc\u5b58\u653e\u7684\u662f\u4e8c\u53c9\u6811\u8282\u70b9\u3002"),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(o.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Basic Calculator III\npublic class Solution {\n    private static Map < Character, Integer > priority = new HashMap < > () {\n        {\n            put('(', 1);\n            put('+', 2);\n            put('-', 2);\n            put('*', 3);\n            put('/', 3);\n        }\n    };\n\n    public Node expTree(String s) {\n        final int N = s.length();\n        Stack < Node > nums = new Stack < > ();\n        Stack < Character > ops = new Stack < > ();\n        for (int i = 0; i < N; i++) {\n            char c = s.charAt(i);\n            if (Character.isDigit(c)) {\n                nums.push(new Node(c));\n            } else if (c == '(') {\n                ops.push(c);\n            } else if (c == ')') {\n                while (ops.peek() != '(') {\n                    combine(ops, nums);\n                }\n                ops.pop(); // pop '('\n            } else if (c == '+' || c == '-' || c == '*' || c == '/') {\n                while (!ops.isEmpty() && priority.get(ops.peek()) >= priority.get(c)) {\n                    combine(ops, nums);\n                }\n                ops.push(c);\n            } else {\n                // c == ' ', do nothing\n            }\n        }\n        while (!ops.isEmpty()) {\n            combine(ops, nums);\n        }\n        return nums.pop();\n    }\n    \n    private void combine(Stack<Character> ops, Stack<Node> nums) {\n        Node root = new Node(ops.pop());\n        root.right = nums.pop();\n        root.left = nums.pop();\n    \n        nums.push(root);\n    }\n}\n"))),(0,r.yg)(s.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Build Binary Expression Tree From Infix Expression\nclass Solution {\npublic:\n    Node* expTree(const string &s) {\n        const int N = s.length();\n        stack<Node*> nums;\n        stack<char> ops;\n        for (int i = 0; i < N; i++) {\n            const char c = s[i];\n            if (isdigit(c)) {\n                nums.push(new Node(c));\n            } else if (c == '(') {\n                ops.push(c);\n            } else if (c == ')') {\n                while (ops.top() != '(') {\n                    combine(ops, nums);\n                }\n                ops.pop(); // pop '('\n            } else if (c == '+' || c == '-' || c == '*' || c == '/') {\n                while (!ops.empty() && priority[ops.top()] >= priority[c]) {\n                    combine(ops, nums);\n                }\n                ops.push(c);\n            } else {\n                // c == ' ', do nothing\n            }\n        }\n        while (!ops.empty()) {\n            combine(ops, nums);\n        }\n        return nums.top();\n    }\nprivate:\n    void combine(stack<char> &ops, stack<Node*> &nums) {\n        Node *root = new Node(ops.top()); ops.pop();\n        root->right = nums.top(); nums.pop();\n        root->left = nums.top(); nums.pop();\n        nums.push(root);\n    }\nprivate:\n    unordered_map<char, int> priority = {{'(', 1}, {'+', 2}, {'-', 2},{'*', 3}, {'/', 3}};\n};\n")))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/stack-and-queue/stack/basic-calculator"},"Basic Calculator")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/stack-and-queue/stack/basic-calculator-ii"},"Basic Calculator II")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/stack-and-queue/stack/basic-calculator-iii"},"Basic Calculator III"))))}f.isMDXComponent=!0}}]);