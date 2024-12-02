"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9027],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(58168),a=n(96540),l=n(20053),i=n(92303),o=n(31682),s=n(86976),u=n(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:m,className:d}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.X)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,s.x)(),[x,O]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.a_)();if(null!=m){const e=g[m];null!=e&&e!==x&&b.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==x&&(E(t),O(r),null!=m&&h(m,String(r)))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},d)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:N,onFocus:j,onClick:j},i,{className:(0,l.A)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.A)();return a.createElement(p,(0,r.A)({key:String(t)},e))}},36034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),i=n(19365);const o={title:"Nearest Exit from Entrance in Maze"},s=void 0,u={unversionedId:"bfs/graph/nearest-exit-from-entrance-in-maze",id:"bfs/graph/nearest-exit-from-entrance-in-maze",title:"Nearest Exit from Entrance in Maze",description:"\u63cf\u8ff0",source:"@site/docs/bfs/graph/nearest-exit-from-entrance-in-maze.md",sourceDirName:"bfs/graph",slug:"/bfs/graph/nearest-exit-from-entrance-in-maze",permalink:"/en/bfs/graph/nearest-exit-from-entrance-in-maze",draft:!1,tags:[],version:"current",frontMatter:{title:"Nearest Exit from Entrance in Maze"},sidebar:"docs",previous:{title:"Diagonal Traverse II",permalink:"/en/bfs/graph/diagonal-traverse-ii"},next:{title:"\u5c0f\u7ed3",permalink:"/en/bfs/bfs-summary"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"TODO"),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"TODO"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,a.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// TODO\n"))),(0,a.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Nearest Exit from Entrance in Maze\n// Time complexity: O(M * N)\n// Space complexity: O(max(M, N))\nclass Solution {\npublic:\n    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {\n        const int M = int(maze.size()), N = int(maze[0].size());\n        // four directions: up, down, left, right\n        vector<pair<int, int>> dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1} };\n\n        // the state in queue is <x, y, length>\n        queue<array<int, 3>> queue;\n        maze[entrance[0]][entrance[1]] = '+'; // mark as visted before enqueue\n        queue.push({entrance[0], entrance[1], 0});\n\n        while (!queue.empty()) {\n            auto [i, j, d] = queue.front();\n            queue.pop();\n            // If this cell is an exit, return directly\n            if ((i != entrance[0] || j != entrance[1]) && \\\n                (i == 0 || i == M - 1 || j == 0 || j == N - 1)) {\n                return d;\n            }\n\n            for (auto dir : dirs) { // expand\n                int next_i = i + dir.first, next_j = j + dir.second;\n\n                // If there exists an unvisited empty neighbor:\n                if (0 <= next_i && next_i < M && 0 <= next_j && next_j < N && \\\n                    maze[next_i][next_j] == '.') {\n                    maze[next_i][next_j] = '+'; // mark as visted before enqueue\n                    queue.push({next_i, next_j, d + 1});\n                }\n            }\n        }\n\n        return -1;\n    }\n};\n")))))}f.isMDXComponent=!0}}]);