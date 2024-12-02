"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1600],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(58168),a=n(96540),l=n(20053),i=n(92303),o=n(31682),s=n(86976),u=n(23104);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:c,className:d}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.X)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:h}=(0,s.x)(),[w,N]=(0,a.useState)(f),I=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.a_)();if(null!=c){const e=b[c];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=I.indexOf(t),r=v[n].value;r!==w&&(O(t),N(r),null!=c&&h(c,String(r)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",p.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},d)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:T,onFocus:E,onClick:E},i,{className:(0,l.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.A)();return a.createElement(m,(0,r.A)({key:String(t)},e))}},97251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var r=n(58168),a=(n(96540),n(15680)),l=n(4865),i=n(19365);const o={title:"Employee Free Time"},s=void 0,u={unversionedId:"simulation/employee-free-time",id:"simulation/employee-free-time",title:"Employee Free Time",description:"\u63cf\u8ff0",source:"@site/docs/simulation/employee-free-time.md",sourceDirName:"simulation",slug:"/simulation/employee-free-time",permalink:"/simulation/employee-free-time",draft:!1,tags:[],version:"current",frontMatter:{title:"Employee Free Time"},sidebar:"docs",previous:{title:"Merge Intervals",permalink:"/simulation/merge-intervals"},next:{title:"Minimum Window Substring",permalink:"/simulation/minimum-window-substring"}},p={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"We are given a list ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule")," of employees, which represents the working time for each employee."),(0,a.yg)("p",null,"Each employee has a list of non-overlapping ",(0,a.yg)("inlineCode",{parentName:"p"},"Intervals"),", and these intervals are in sorted order."),(0,a.yg)("p",null,"Return the list of finite intervals representing ",(0,a.yg)("strong",{parentName:"p"},"common, positive-length free time")," for ",(0,a.yg)("em",{parentName:"p"},"all employees"),", also in sorted order."),(0,a.yg)("p",null,"(Even though we are representing ",(0,a.yg)("inlineCode",{parentName:"p"},"Intervals")," in the form ",(0,a.yg)("inlineCode",{parentName:"p"},"[x, y]"),", the objects inside are ",(0,a.yg)("inlineCode",{parentName:"p"},"Intervals"),", not lists or arrays. For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule[0][0].start = 1"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule[0][0].end = 2"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule[0][0][0]")," is not defined). Also, we wouldn't include intervals like ","[5, 5]"," in our answer, as they have zero length."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 1"),":"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Input"),": schedule = [[","[1,2]",",","[5,6]","],[","[1,3]","],[","[4,10]","]]"),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Output"),": [","[3,4]","]"),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Explanation"),": There are a total of three employees, and all common\nfree time intervals would be ","[-inf, 1]",", ","[3, 4]",", ","[10, inf]",".\nWe discard any intervals that contain inf as they aren't finite.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 2"),":"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Input"),": schedule = [[","[1,3]",",","[6,7]","],[","[2,4]","],[","[2,5]",",","[9,12]","]]"),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Output"),": [","[5,6]",",","[7,9]","]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Constraints"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"1 <= schedule.length , schedule","[i]",".length <= 50"),(0,a.yg)("li",{parentName:"ul"},"0 <= schedule","[i]",".start < schedule","[i]",".end <= 10^8")),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u8fd9\u9898\u6c42\u7684\u662f\u533a\u95f4\u4e4b\u95f4\u7684\u7a7a\u767d\u6bb5\uff0c\u8ddf ",(0,a.yg)("a",{parentName:"p",href:"/simulation/merge-intervals"},"Merge Intervals"),"\u662f\u53cd\u8fc7\u6765\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u590d\u7528 Merge Intervals \u7684\u4ee3\u7801\uff0c\u7136\u540e\u53d6\u53cd\u5373\u53ef\u3002"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Employee Free Time\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<Interval> employeeFreeTime(List<List<Interval>> schedule) {\n        List<Interval> merged = merge(schedule.stream()\n                .flatMap(List::stream)\n                .collect(Collectors.toList()));\n        List<Interval> result = new ArrayList<>();\n        for (int i = 0; i < merged.size()-1; ++i) {\n            result.add(new Interval(merged.get(i).end, merged.get(i+1).start ));\n        }\n        return result;\n    }\n\n    private List<Interval> merge(List<Interval> intervals) {\n        List<Interval> result = new ArrayList<>();\n        for (int i = 0; i < intervals.size(); i++) {\n            insert(result, intervals.get(i));\n        }\n        return result;\n    }\n    private static List<Interval> insert(List<Interval> intervals,\n                                         Interval newInterval) {\n        for (int i = 0; i < intervals.size();) {\n            final Interval cur = intervals.get(i);\n            if (newInterval.end < cur.start) {\n                intervals.add(i, newInterval);\n                return intervals;\n            } else if (newInterval.start > cur.end) {\n                ++i;\n                continue;\n            } else {\n                newInterval.start = Math.min(newInterval.start, cur.start);\n                newInterval.end = Math.max(newInterval.end, cur.end);\n                intervals.remove(i);\n            }\n        }\n        intervals.add(newInterval);\n        return intervals;\n    }\n}\n"))),(0,a.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/simulation/merge-intervals"},"Merge Intervals"))))}g.isMDXComponent=!0}}]);