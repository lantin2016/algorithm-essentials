"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1259],{15680:(e,n,a)=>{a.d(n,{xA:()=>o,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),p=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},o=function(e){var n=p(e.components);return t.createElement(m.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,y=u["".concat(m,".").concat(g)]||u[g]||c[g]||i;return a?t.createElement(y,s(s({ref:n},o),{},{components:a})):t.createElement(y,s({ref:n},o))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=g;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>s});var t=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:a,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>c});var t=a(58168),r=a(96540),i=a(20053),s=a(92303),l=a(31682),m=a(86976),p=a(23104);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:n,block:a,defaultValue:s,values:u,groupId:c,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??y.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),d=(0,l.X)(f,((e,n)=>e.value===n.value));if(d.length>0)throw new Error(`Docusaurus error: Duplicate values "${d.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,m.x)(),[N,j]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.a_)();if(null!=c){const e=b[c];null!=e&&e!==N&&f.some((n=>n.value===e))&&j(e)}const T=e=>{const n=e.currentTarget,a=x.indexOf(n),t=f[a].value;t!==N&&(w(n),j(t),null!=c&&v(c,String(t)))},O=e=>{let n=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;n=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;n=x[a]??x[x.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,i.A)("tabs-container",o.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},g)},f.map((e=>{let{value:n,label:a,attributes:s}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>x.push(e),onKeyDown:O,onFocus:T,onClick:T},s,{className:(0,i.A)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":N===n})}),a??n)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function c(e){const n=(0,s.A)();return r.createElement(u,(0,t.A)({key:String(n)},e))}},45358:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=a(58168),r=(a(96540),a(15680)),i=a(4865),s=a(19365);const l={title:"Unique Paths"},m=void 0,p={unversionedId:"dfs/unique-paths",id:"dfs/unique-paths",title:"Unique Paths",description:"\u63cf\u8ff0",source:"@site/docs/dfs/unique-paths.md",sourceDirName:"dfs",slug:"/dfs/unique-paths",permalink:"/dfs/unique-paths",draft:!1,tags:[],version:"current",frontMatter:{title:"Unique Paths"},sidebar:"docs",previous:{title:"Palindrome Partitioning",permalink:"/dfs/palindrome-partitioning"},next:{title:"Unique Paths II",permalink:"/dfs/unique-paths-ii"}},o={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u6df1\u641c",id:"\u6df1\u641c",level:3},{value:"\u5907\u5fd8\u5f55\u6cd5",id:"\u5907\u5fd8\u5f55\u6cd5",level:3},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:3},{value:"\u6570\u5b66\u516c\u5f0f",id:"\u6570\u5b66\u516c\u5f0f",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:u},g="wrapper";function y(e){let{components:n,...l}=e;return(0,r.yg)(g,(0,t.A)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"A robot is located at the top-left corner of a ",(0,r.yg)("inlineCode",{parentName:"p"},"m \xd7 n")," grid (marked 'Start' in the diagram below)."),(0,r.yg)("p",null,"The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below)."),(0,r.yg)("p",null,"How many possible unique paths are there?"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Above is a `3 \xd7 7` grid. How many possible unique paths are there?",src:a(65112).A,width:"400",height:"183"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"m")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," will be at most 100."),(0,r.yg)("h3",{id:"\u6df1\u641c"},"\u6df1\u641c"),(0,r.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Unique Paths\n// \u6df1\u641c\uff0c\u5c0f\u96c6\u5408\u53ef\u4ee5\u8fc7\uff0c\u5927\u96c6\u5408\u4f1a\u8d85\u65f6\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^4)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int uniquePaths(int m, int n) {\n        if (m < 1 || n < 1) return 0; // \u7ec8\u6b62\u6761\u4ef6\n\n        if (m == 1 && n == 1) return 1; // \u6536\u655b\u6761\u4ef6\n\n        return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);\n    }\n}\n"))),(0,r.yg)(s.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Unique Paths\n// \u6df1\u641c\uff0c\u5c0f\u96c6\u5408\u53ef\u4ee5\u8fc7\uff0c\u5927\u96c6\u5408\u4f1a\u8d85\u65f6\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^4)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        if (m < 1 || n < 1) return 0; // \u7ec8\u6b62\u6761\u4ef6\n\n        if (m == 1 && n == 1) return 1; // \u6536\u655b\u6761\u4ef6\n\n        return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u5907\u5fd8\u5f55\u6cd5"},"\u5907\u5fd8\u5f55\u6cd5"),(0,r.yg)("p",null,"\u7ed9\u524d\u9762\u7684\u6df1\u641c\uff0c\u52a0\u4e2a\u7f13\u5b58\uff0c\u5c31\u53ef\u4ee5\u8fc7\u5927\u96c6\u5408\u4e86\u3002\u5373\u5907\u5fd8\u5f55\u6cd5\u3002"),(0,r.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Unique Paths\n// \u6df1\u641c + \u7f13\u5b58\uff0c\u5373\u5907\u5fd8\u5f55\u6cd5\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public int uniquePaths(int m, int n) {\n        // f[x][y] \u8868\u793a \u4ece(0,0)\u5230(x,y)\u7684\u8def\u5f84\u6761\u6570\n        f = new int[m][n];\n        f[0][0] = 1;\n        return dfs(m - 1, n - 1);\n    }\n\n    int dfs(int x, int y) {\n        if (x < 0 || y < 0) return 0; // \u6570\u636e\u975e\u6cd5\uff0c\u7ec8\u6b62\u6761\u4ef6\n\n        if (x == 0 && y == 0) return f[0][0]; // \u56de\u5230\u8d77\u70b9\uff0c\u6536\u655b\u6761\u4ef6\n\n        if (f[x][y] > 0) {\n            return f[x][y];\n        } else {\n            return f[x][y] = dfs(x - 1, y) +  dfs(x, y - 1);\n        }\n    }\n    private int[][] f;  // \u7f13\u5b58\n}\n"))),(0,r.yg)(s.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Unique Paths\n// \u6df1\u641c + \u7f13\u5b58\uff0c\u5373\u5907\u5fd8\u5f55\u6cd5\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // f[x][y] \u8868\u793a \u4ece(0,0)\u5230(x,y)\u7684\u8def\u5f84\u6761\u6570\n        f = vector<vector<int> >(m, vector<int>(n, 0));\n        f[0][0] = 1;\n        return dfs(m - 1, n - 1);\n    }\nprivate:\n    vector<vector<int> > f;  // \u7f13\u5b58\n\n    int dfs(int x, int y) {\n        if (x < 0 || y < 0) return 0; // \u6570\u636e\u975e\u6cd5\uff0c\u7ec8\u6b62\u6761\u4ef6\n\n        if (x == 0 && y == 0) return f[0][0]; // \u56de\u5230\u8d77\u70b9\uff0c\u6536\u655b\u6761\u4ef6\n\n        if (f[x][y] > 0) {\n            return f[x][y];\n        } else {\n            return f[x][y] = dfs(x - 1, y) +  dfs(x, y - 1);\n        }\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),(0,r.yg)("p",null,"\u65e2\u7136\u53ef\u4ee5\u7528\u5907\u5fd8\u5f55\u6cd5\u81ea\u9876\u5411\u4e0b\u89e3\u51b3\uff0c\u4e5f\u4e00\u5b9a\u53ef\u4ee5\u7528\u52a8\u89c4\u81ea\u5e95\u5411\u4e0a\u89e3\u51b3\u3002"),(0,r.yg)("p",null,"\u8bbe\u72b6\u6001\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"f[i][j]"),"\uff0c\u8868\u793a\u4ece\u8d77\u70b9",(0,r.yg)("inlineCode",{parentName:"p"},"(1,1)"),"\u5230\u8fbe",(0,r.yg)("inlineCode",{parentName:"p"},"(i,j)"),"\u7684\u8def\u7ebf\u6761\u6570\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"f[i][j]=f[i-1][j]+f[i][j-1]\n")),(0,r.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// \u52a8\u89c4\uff0c\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int uniquePaths(int m, int n) {\n        int[] f = new int[n];\n        f[0] = 1;\n        for (int i = 0; i < m; i++) {\n            for (int j = 1; j < n; j++) {\n                // \u5de6\u8fb9\u7684f[j]\uff0c\u8868\u793a\u66f4\u65b0\u540e\u7684f[j]\uff0c\u4e0e\u516c\u5f0f\u4e2d\u7684f[i][j]\u5bf9\u5e94\n                // \u53f3\u8fb9\u7684f[j]\uff0c\u8868\u793a\u8001\u7684f[j]\uff0c\u4e0e\u516c\u5f0f\u4e2d\u7684f[i-1][j]\u5bf9\u5e94\n                f[j] = f[j] + f[j - 1];\n            }\n        }\n        return f[n - 1];\n    }\n}\n"))),(0,r.yg)(s.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Unique Paths\n// \u52a8\u89c4\uff0c\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        vector<int> f(n, 0);\n        f[0] = 1;\n        for (int i = 0; i < m; i++) {\n            for (int j = 1; j < n; j++) {\n                // \u5de6\u8fb9\u7684f[j]\uff0c\u8868\u793a\u66f4\u65b0\u540e\u7684f[j]\uff0c\u4e0e\u516c\u5f0f\u4e2d\u7684f[i][j]\u5bf9\u5e94\n                // \u53f3\u8fb9\u7684f[j]\uff0c\u8868\u793a\u8001\u7684f[j]\uff0c\u4e0e\u516c\u5f0f\u4e2d\u7684f[i-1][j]\u5bf9\u5e94\n                f[j] = f[j] + f[j - 1];\n            }\n        }\n        return f[n - 1];\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u6570\u5b66\u516c\u5f0f"},"\u6570\u5b66\u516c\u5f0f"),(0,r.yg)("p",null,"\u4e00\u4e2a",(0,r.yg)("inlineCode",{parentName:"p"},"m"),"\u884c\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"n"),"\u5217\u7684\u77e9\u9635\uff0c\u673a\u5668\u4eba\u4ece\u5de6\u4e0a\u8d70\u5230\u53f3\u4e0b\u603b\u5171\u9700\u8981\u7684\u6b65\u6570\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"m+n-2"),"\uff0c\u5176\u4e2d\u5411\u4e0b\u8d70\u7684\u6b65\u6570\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"m-1"),"\uff0c\u56e0\u6b64\u95ee\u9898\u53d8\u6210\u4e86\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"m+n-2"),"\u4e2a\u64cd\u4f5c\u4e2d\uff0c\u9009\u62e9",(0,r.yg)("inlineCode",{parentName:"p"},"m\u20131"),"\u4e2a\u65f6\u95f4\u70b9\u5411\u4e0b\u8d70\uff0c\u9009\u62e9\u65b9\u5f0f\u6709\u591a\u5c11\u79cd\u3002\u5373 ",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("msubsup",{parentName:"mrow"},(0,r.yg)("mi",{parentName:"msubsup"},"C"),(0,r.yg)("mrow",{parentName:"msubsup"},(0,r.yg)("mi",{parentName:"mrow"},"m"),(0,r.yg)("mo",{parentName:"mrow"},"+"),(0,r.yg)("mi",{parentName:"mrow"},"n"),(0,r.yg)("mo",{parentName:"mrow"},"\u2212"),(0,r.yg)("mn",{parentName:"mrow"},"2")),(0,r.yg)("mrow",{parentName:"msubsup"},(0,r.yg)("mi",{parentName:"mrow"},"m"),(0,r.yg)("mo",{parentName:"mrow"},"\u2212"),(0,r.yg)("mn",{parentName:"mrow"},"1")))),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C_{m+n-2}^{m-1}")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1.1789em",verticalAlign:"-0.3246em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8542em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-2.4337em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"m"),(0,r.yg)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,r.yg)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,r.yg)("span",{parentName:"span",style:{top:"-3.1031em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"m"),(0,r.yg)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,r.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3246em"}},(0,r.yg)("span",{parentName:"span"}))))))))))," \u3002"),(0,r.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Unique Paths\n// \u6570\u5b66\u516c\u5f0f\npublic class Solution {\n    public int uniquePaths(int m, int n) {\n        // max \u53ef\u4ee5\u9632\u6b62n\u548ck\u5dee\u8ddd\u8fc7\u5927\uff0c\u4ece\u800c\u9632\u6b62combination()\u6ea2\u51fa\n        return (int)combination(m+n-2, Math.max(m-1, n-1));\n    }\n    // \u6c42\u9636\u4e58, n!/(start-1)!\uff0c\u5373 n*(n-1)...start\uff0c\u8981\u6c42 n >= 1\n    private static long factor(int n, int start) {\n        long  ret = 1;\n        for(int i = start; i <= n; ++i)\n            ret *= i;\n        return ret;\n    }\n    private static long factor(int n) {\n        return factor(n, 1);\n    }\n    // \u6c42\u7ec4\u5408\u6570 C_n^k\n    private static long combination(int n, int k) {\n        // \u5e38\u6570\u4f18\u5316\n        if (k == 0) return 1;\n        if (k == 1) return n;\n\n        long ret = factor(n, k+1);\n        ret /= factor(n - k);\n        return ret;\n    }\n}\n"))),(0,r.yg)(s.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, Unique Paths\n// \u6570\u5b66\u516c\u5f0f\nclass Solution {\npublic:\n    typedef long long int64_t;\n    // \u6c42\u9636\u4e58, n!/(start-1)!\uff0c\u5373 n*(n-1)...start\uff0c\u8981\u6c42 n >= 1\n    static int64_t factor(int n, int start = 1) {\n        int64_t  ret = 1;\n        for(int i = start; i <= n; ++i)\n            ret *= i;\n        return ret;\n    }\n    // \u6c42\u7ec4\u5408\u6570 C_n^k\n    static int64_t combination(int n, int k) {\n        // \u5e38\u6570\u4f18\u5316\n        if (k == 0) return 1;\n        if (k == 1) return n;\n\n        int64_t ret = factor(n, k+1);\n        ret /= factor(n - k);\n        return ret;\n    }\n\n    int uniquePaths(int m, int n) {\n        // max \u53ef\u4ee5\u9632\u6b62n\u548ck\u5dee\u8ddd\u8fc7\u5927\uff0c\u4ece\u800c\u9632\u6b62combination()\u6ea2\u51fa\n        return combination(m+n-2, max(m-1, n-1));\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dfs/unique-paths-ii"},"Unique Paths II")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dp/minimum-path-sum"},"Minimum Path Sum"))))}y.isMDXComponent=!0},65112:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/robot-maze-e53b163b9419fae663a8a6791fa0b208.png"}}]);