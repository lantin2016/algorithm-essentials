"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9343],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=o(t),y=r,u=g["".concat(l,".").concat(y)]||g[y]||c[y]||s;return t?n.createElement(u,m(m({ref:a},i),{},{components:t})):n.createElement(u,m({ref:a},i))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=y;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[g]="string"==typeof e?e:r,m[1]=p;for(var o=2;o<s;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>m});var n=t(96540),r=t(20053);const s={tabItem:"tabItem_Ymn6"};function m(e){let{children:a,hidden:t,className:m}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,m),hidden:t},a)}},4865:(e,a,t)=>{t.d(a,{A:()=>c});var n=t(58168),r=t(96540),s=t(20053),m=t(92303),p=t(31682),l=t(86976),o=t(23104);const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){const{lazy:a,block:t,defaultValue:m,values:g,groupId:c,className:y}=e,u=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=g??u.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),h=(0,p.X)(N,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const d=null===m?m:m??u.find((e=>e.props.default))?.props.value??u[0].props.value;if(null!==d&&!N.some((e=>e.value===d)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,l.x)(),[w,v]=(0,r.useState)(d),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.a_)();if(null!=c){const e=b[c];null!=e&&e!==w&&N.some((a=>a.value===e))&&v(e)}const O=e=>{const a=e.currentTarget,t=x.indexOf(a),n=N[t].value;n!==w&&(T(a),v(n),null!=c&&f(c,String(n)))},k=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,s.A)("tabs-container",i.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},y)},N.map((e=>{let{value:a,label:t,attributes:m}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>x.push(e),onKeyDown:k,onFocus:O,onClick:O},m,{className:(0,s.A)("tabs__item",i.tabItem,m?.className,{"tabs__item--active":w===a})}),t??a)}))),a?(0,r.cloneElement)(u.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},u.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function c(e){const a=(0,m.A)();return r.createElement(g,(0,n.A)({key:String(a)},e))}},8753:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),s=t(4865),m=t(19365);const p={title:"The Maze II"},l=void 0,o={unversionedId:"bfs/graph/the-maze-ii",id:"bfs/graph/the-maze-ii",title:"The Maze II",description:"\u63cf\u8ff0",source:"@site/docs/bfs/graph/the-maze-ii.md",sourceDirName:"bfs/graph",slug:"/bfs/graph/the-maze-ii",permalink:"/en/bfs/graph/the-maze-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"The Maze II"},sidebar:"docs",previous:{title:"The Maze",permalink:"/en/bfs/graph/the-maze"},next:{title:"The Maze III",permalink:"/en/bfs/graph/the-maze-iii"}},i={},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:g},y="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"There is a ",(0,r.yg)("strong",{parentName:"p"},"ball")," in a maze with empty spaces and walls. The ball can go through empty spaces by rolling ",(0,r.yg)("strong",{parentName:"p"},"up"),", ",(0,r.yg)("strong",{parentName:"p"},"down"),", ",(0,r.yg)("strong",{parentName:"p"},"left")," or ",(0,r.yg)("strong",{parentName:"p"},"right"),", but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction."),(0,r.yg)("p",null,"Given the ball's ",(0,r.yg)("strong",{parentName:"p"},"start position"),", the ",(0,r.yg)("strong",{parentName:"p"},"destination")," and the ",(0,r.yg)("strong",{parentName:"p"},"maze"),", find the shortest distance for the ball to stop at the destination. The distance is defined by the number of ",(0,r.yg)("strong",{parentName:"p"},"empty spaces")," traveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1."),(0,r.yg)("p",null,"The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 1"),":"),(0,r.yg)("img",{src:"/img/maze_1_example_1.png",width:"60%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Input 1"),": a maze represented by a 2D array"),(0,r.yg)("p",{parentName:"blockquote"},"0 0 1 0 0",(0,r.yg)("br",{parentName:"p"}),"\n","0 0 0 0 0",(0,r.yg)("br",{parentName:"p"}),"\n","0 0 0 1 0",(0,r.yg)("br",{parentName:"p"}),"\n","1 1 0 1 1",(0,r.yg)("br",{parentName:"p"}),"\n","0 0 0 0 0"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Input 2"),": start coordinate (rowStart, colStart) = (0, 4)",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Input 3"),": destination coordinate (rowDest, colDest) = (4, 4)"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Output"),": 12"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Explanation"),": One shortest way is : left -> down -> left -> down -> right -> down -> right.",(0,r.yg)("br",{parentName:"p"}),"\n","The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 2"),":"),(0,r.yg)("img",{src:"/img/maze_1_example_2.png",width:"60%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Input 1"),": a maze represented by a 2D array"),(0,r.yg)("p",{parentName:"blockquote"},"0 0 1 0 0",(0,r.yg)("br",{parentName:"p"}),"\n","0 0 0 0 0",(0,r.yg)("br",{parentName:"p"}),"\n","0 0 0 1 0",(0,r.yg)("br",{parentName:"p"}),"\n","1 1 0 1 1",(0,r.yg)("br",{parentName:"p"}),"\n","0 0 0 0 0"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Input 2"),": start coordinate (rowStart, colStart) = (0, 4)",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Input 3"),": destination coordinate (rowDest, colDest) = (3, 2)"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Output"),": -1"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Explanation"),": There is no way for the ball to stop at the destination.")),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u6c42\u6700\u77ed\u8def\u5f84\uff0c\u5f88\u663e\u7136\uff0c\u7528 BFS\u3002\u901a\u5e38\u5224\u65ad\u91cd\u590d\u7528\u4e00\u4e2a\u5e03\u5c14\u4e8c\u7ef4\u77e9\u9635",(0,r.yg)("inlineCode",{parentName:"p"},"visited"),"\u5373\u53ef\uff0c\u4e0d\u8fc7\u672c\u9898\u5149\u8fd9\u6837\u5224\u91cd\u662f\u4e0d\u591f\u7684\uff0c\u9700\u8981\u5224\u65ad\u8def\u5f84\u662f\u5426\u66f4\u77ed\uff0c\u56e0\u4e3a\u672c\u9898\u4e00\u6b65\u4e0d\u662f\u5355\u7eaf\u7684\u53ea\u8d70\u4e00\u6b65\uff0c\u800c\u662f\u8981\u4e00\u8def\u78b0\u5230\u5899\u4e3a\u6b62\uff0c\u6240\u4ee5\u7528\u539f\u59cb\u7684BFS\u662f\u4e0d\u884c\u7684\u3002"),(0,r.yg)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mi",{parentName:"mrow"},"O"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.yg)("mi",{parentName:"mrow"},"M"),(0,r.yg)("mo",{parentName:"mrow"},"\xd7"),(0,r.yg)("mi",{parentName:"mrow"},"N"),(0,r.yg)("mo",{parentName:"mrow"},"\xd7"),(0,r.yg)("mi",{parentName:"mrow"},"max"),(0,r.yg)("mo",{parentName:"mrow"},"\u2061"),(0,r.yg)("mrow",{parentName:"mrow"},(0,r.yg)("mo",{parentName:"mrow",fence:"true"},"{"),(0,r.yg)("mi",{parentName:"mrow"},"M"),(0,r.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,r.yg)("mi",{parentName:"mrow"},"N"),(0,r.yg)("mo",{parentName:"mrow",fence:"true"},"}")),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(M \\times N \\times \\max\\left\\{M, N\\right\\})")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.yg)("span",{parentName:"span",className:"mopen"},"("),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.yg)("span",{parentName:"span",className:"mop"},"max"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.yg)("span",{parentName:"span",className:"minner"},(0,r.yg)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"{"),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,r.yg)("span",{parentName:"span",className:"mpunct"},","),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.yg)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"}")),(0,r.yg)("span",{parentName:"span",className:"mclose"},")")))))," , \u56e0\u4e3a\u8981\u904d\u5386\u6bcf\u4e2a\u4f4d\u7f6e\uff0c\u540c\u65f6\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u8981\u4e00\u76f4\u8d70\u5230\u5899\u3002\u7a7a\u95f4\u590d\u6742\u5ea6 ",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mi",{parentName:"mrow"},"O"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.yg)("mi",{parentName:"mrow"},"M"),(0,r.yg)("mo",{parentName:"mrow"},"\xd7"),(0,r.yg)("mi",{parentName:"mrow"},"N"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(M \\times N)")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.yg)("span",{parentName:"span",className:"mopen"},"("),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.yg)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u961f\u5217\u91cc\u6700\u574f\u53ef\u80fd\u4f1a\u5b58\u50a8\u6240\u6709\u7684\u4f4d\u7f6e\u3002"),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(s.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(m.A,{value:"python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,r.yg)(m.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// The Maze II\n// BFS\n// Time complexity : O(m*n*max(m,n))\n// Space complexity : O(mn)\npublic class Solution {\n    public int shortestDistance(int[][] maze, int[] start, int[] dest) {\n        final int M = maze.length, N = maze[0].length;\n        int[][] distance = new int[M][N];\n        for (int[] row: distance) Arrays.fill(row, Integer.MAX_VALUE);\n\n        int[][] dirs={{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; // up, down, left, right\n        Queue<int[]> q = new LinkedList<>();\n\n        distance[start[0]][start[1]] = 0;\n        q.offer(start);\n        while (!q.isEmpty()) {\n            int[] cur = q.poll();\n            int x = cur[0], y = cur[1];\n\n            for (int[] dir: dirs) {\n                int newX = x, newY = y;\n                int i = dir[0], j = dir[1];\n                int step = distance[x][y];\n                // walk until hit wall\n                while (0 <= newX + i && newX + i < M && 0 <= newY + j && newY + j < N && maze[newX + i][newY + j] == 0) {\n                    newX += i;\n                    newY += j;\n                    step++;\n                }\n                if (step < distance[newX][newY]) {\n                    distance[newX][newY] = step;\n                    q.offer(new int[] {newX, newY});\n                }\n            }\n        }\n        return distance[dest[0]][dest[1]] == Integer.MAX_VALUE ? -1 : distance[dest[0]][dest[1]];\n    }\n}\n"))),(0,r.yg)(m.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"TODO\n")))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/en/bfs/graph/the-maze"},"The Maze")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/en/bfs/graph/the-maze-iii"},"The Maze III"))))}u.isMDXComponent=!0}}]);