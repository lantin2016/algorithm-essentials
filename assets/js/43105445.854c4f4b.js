"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[369],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,d=p["".concat(o,".").concat(m)]||p[m]||v[m]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(96540),a=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(58168),a=t(96540),l=t(20053),i=t(92303),s=t(31682),o=t(86976),u=t(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:n,block:t,defaultValue:i,values:p,groupId:v,className:m}=e,d=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??d.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),f=(0,s.X)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,o.x)(),[w,I]=(0,a.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.a_)();if(null!=v){const e=g[v];null!=e&&e!==w&&y.some((n=>n.value===e))&&I(e)}const T=e=>{const n=e.currentTarget,t=O.indexOf(n),r=y[t].value;r!==w&&(N(n),I(r),null!=v&&h(v,String(r)))},E=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},m)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>O.push(e),onKeyDown:E,onFocus:T,onClick:T},i,{className:(0,l.A)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":w===n})}),t??n)}))),n?(0,a.cloneElement)(d.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},d.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function v(e){const n=(0,i.A)();return a.createElement(p,(0,r.A)({key:String(n)},e))}},36249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=t(58168),a=(t(96540),t(15680)),l=t(4865),i=t(19365);const s={title:"Insert Interval"},o=void 0,u={unversionedId:"simulation/insert-interval",id:"simulation/insert-interval",title:"Insert Interval",description:"\u63cf\u8ff0",source:"@site/docs/simulation/insert-interval.md",sourceDirName:"simulation",slug:"/simulation/insert-interval",permalink:"/simulation/insert-interval",draft:!1,tags:[],version:"current",frontMatter:{title:"Insert Interval"},sidebar:"docs",previous:{title:"Palindrome Number",permalink:"/simulation/palindrome-number"},next:{title:"Merge Intervals",permalink:"/simulation/merge-intervals"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],v={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary)."),(0,a.yg)("p",null,"You may assume that the intervals were initially sorted according to their start times."),(0,a.yg)("p",null,"Example 1:\nGiven intervals ",(0,a.yg)("inlineCode",{parentName:"p"},"[1,3],[6,9]"),", insert and merge ",(0,a.yg)("inlineCode",{parentName:"p"},"[2,5]")," in as ",(0,a.yg)("inlineCode",{parentName:"p"},"[1,5],[6,9]"),"."),(0,a.yg)("p",null,"Example 2:\nGiven ",(0,a.yg)("inlineCode",{parentName:"p"},"[1,2],[3,5],[6,7],[8,10],[12,16]"),", insert and merge ",(0,a.yg)("inlineCode",{parentName:"p"},"[4,9]")," in as ",(0,a.yg)("inlineCode",{parentName:"p"},"[1,2],[3,10],[12,16]"),"."),(0,a.yg)("p",null,"This is because the new interval ",(0,a.yg)("inlineCode",{parentName:"p"},"[4,9]")," overlaps with ",(0,a.yg)("inlineCode",{parentName:"p"},"[3,5],[6,7],[8,10]"),"."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Insert Interval\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        ArrayList<int[]> list = new ArrayList<>(Arrays.asList(intervals));\n        insert(list, newInterval);\n        return list.toArray(new int[0][2]);\n    }\n\n    private void insert(ArrayList<int[]> intervals, int[] newInterval) {\n        for (int i = 0; i < intervals.size();) {\n            final int[] cur = intervals.get(i);\n            if (newInterval[1] < cur[0]) { // insert before cur\n                intervals.add(i, newInterval);\n                return;\n            } else if (newInterval[0] > cur[1]) {\n                ++i;\n            } else { // overlap\n                newInterval[0] = Math.min(newInterval[0], cur[0]);\n                newInterval[1] = Math.max(newInterval[1], cur[1]);\n                intervals.remove(i);\n            }\n        }\n        intervals.add(newInterval);\n    }\n}\n"))),(0,a.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Insert Interval\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<vector<int>> insert(vector<vector<int>> &intervals, vector<int> &newInterval) {\n        for (auto it = intervals.begin(); it != intervals.end();) {\n            if (newInterval[1] < it->at(0)) { // insert before cur\n                intervals.insert(it, newInterval);\n                return intervals;\n            } else if (newInterval[0] > it->at(1)) {\n                it++;\n                continue;\n            } else { // overlap\n                newInterval[0] = min(newInterval[0], it->at(0));\n                newInterval[1] = max(newInterval[1], it->at(1));\n                it = intervals.erase(it);\n            }\n        }\n        intervals.insert(intervals.end(), newInterval);\n        return intervals;\n    }\n};\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/simulation/merge-intervals"},"Merge Intervals"))))}d.isMDXComponent=!0}}]);