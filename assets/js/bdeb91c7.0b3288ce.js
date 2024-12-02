"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3072],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(96540),a=t(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(58168),a=t(96540),i=t(20053),o=t(92303),l=t(31682),s=t(86976),c=t(23104);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:n,block:t,defaultValue:o,values:p,groupId:d,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,l.X)(v,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,s.x)(),[N,j]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.a_)();if(null!=d){const e=g[d];null!=e&&e!==N&&v.some((n=>n.value===e))&&j(e)}const T=e=>{const n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==N&&(C(n),j(r),null!=d&&h(d,String(r)))},x=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,i.A)("tabs-container",u.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},m)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>O.push(e),onKeyDown:x,onFocus:T,onClick:T},o,{className:(0,i.A)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":N===n})}),t??n)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,o.A)();return a.createElement(p,(0,r.A)({key:String(n)},e))}},26951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=t(58168),a=(t(96540),t(15680)),i=t(4865),o=t(19365);const l={title:"Number of Provinces"},s=void 0,c={unversionedId:"graph/ufs/number-of-provinces",id:"graph/ufs/number-of-provinces",title:"Number of Provinces",description:"\u63cf\u8ff0",source:"@site/docs/graph/ufs/number-of-provinces.md",sourceDirName:"graph/ufs",slug:"/graph/ufs/number-of-provinces",permalink:"/graph/ufs/number-of-provinces",draft:!1,tags:[],version:"current",frontMatter:{title:"Number of Provinces"},sidebar:"docs",previous:{title:"Number of Connected Components in an Undirected Graph",permalink:"/graph/ufs/number-of-connected-components-in-an-undirected-graph"},next:{title:"Number of Islands",permalink:"/graph/ufs/number-of-islands"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"DFS",id:"dfs",level:4},{value:"\u5e76\u67e5\u96c6",id:"\u5e76\u67e5\u96c6",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:p},m="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"TODO"),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)("h4",{id:"dfs"},"DFS"),(0,a.yg)(i.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Number of Provinces\n// Time complexity: O(N^2)\n// Space complexity: O(N)\npublic class Solution {\n    public int findCircleNum(int[][] isConnected) {\n        final int N = isConnected.length;\n        boolean[] visited = new boolean[N];\n        int count = 0;\n        for (int i = 0; i < N; i++) {\n            if (!visited[i]) {\n                dfs(isConnected, visited, i);\n                count++;\n            }\n        }\n        return count;\n    }\n\n    // visited the ith node\n    private void dfs(int[][] isConnected, boolean[] visited, int i) {\n        for (int j = 0; j < isConnected.length; j++) {\n            if (isConnected[i][j] == 1 && !visited[j]) {\n                visited[j] = true;\n                dfs(isConnected, visited, j);\n            }\n        }\n    }\n}\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Number of Provinces\n// Time complexity: O(N^2)\n// Space complexity: O(N)\nclass Solution {\npublic:\n    int findCircleNum(vector<vector<int>>& isConnected) {\n        const int N = isConnected.size();\n        vector<bool> visited(N, false);\n        int count = 0;\n        for (int i = 0; i < N; i++) {\n            if (!visited[i]) {\n                dfs(isConnected, visited, i);\n                count++;\n            }\n        }\n        return count;\n    }\nprivate:\n    // visited the ith node\n    void dfs(const vector<vector<int>>& isConnected, vector<bool>& visited, int i) {\n        const int N = isConnected.size();\n        for (int j = 0; j < N; j++) {\n            if (isConnected[i][j] == 1 && !visited[j]) {\n                visited[j] = true;\n                dfs(isConnected, visited, j);\n            }\n        }\n    }\n};\n")))),(0,a.yg)("h4",{id:"\u5e76\u67e5\u96c6"},"\u5e76\u67e5\u96c6"),(0,a.yg)(i.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// TODO\n"))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"class DSU {\n// Plese copy from https://algorithm-essentials.soulmachine.me/graph/ufs/#union-by-rank\n};\n\n// Number of Provinces\n// Time complexity: O(N^2*log*N)\n// Space complexity: O(N)\nclass Solution {\npublic:\n    int findCircleNum(vector<vector<int>>& isConnected) {\n        const int N = isConnected.size();\n        DSU dsu(N);\n        int result = N; // number of provinces\n        for (int i = 0; i < N; i++) {\n            for (int j = 0; j < N; j++) {\n                if (isConnected[i][j] == 1) {\n                    result -= dsu.merge(i, j);\n                }\n            }\n        }\n        return result;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/graph/ufs/number-of-islands"},"Number of Islands")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/graph/ufs/number-of-connected-components-in-an-undirected-graph"},"Number of Connected Components in an Undirected Graph"))))}f.isMDXComponent=!0}}]);