"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9113],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(58168),a=n(96540),o=n(20053),l=n(92303),i=n(31682),s=n(86976),u=n(23104);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:l,values:c,groupId:m,className:g}=e,d=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=c??d.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.X)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,s.x)(),[O,N]=(0,a.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.a_)();if(null!=m){const e=v[m];null!=e&&e!==O&&y.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==O&&(w(t),N(r),null!=m&&h(m,String(r)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.A)("tabs-container",p.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,o.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":O===t})}),n??t)}))),t?(0,a.cloneElement)(d.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},d.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.A)();return a.createElement(c,(0,r.A)({key:String(t)},e))}},37034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(58168),a=(n(96540),n(15680)),o=n(4865),l=n(19365);const i={title:"Meeting Rooms II"},s=void 0,u={unversionedId:"sorting/heap-sort/meeting-rooms-ii",id:"sorting/heap-sort/meeting-rooms-ii",title:"Meeting Rooms II",description:"\u63cf\u8ff0",source:"@site/docs/sorting/heap-sort/meeting-rooms-ii.md",sourceDirName:"sorting/heap-sort",slug:"/sorting/heap-sort/meeting-rooms-ii",permalink:"/sorting/heap-sort/meeting-rooms-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Meeting Rooms II"},sidebar:"docs",previous:{title:"Maximum Gap",permalink:"/sorting/radix-sort/maximum-gap"},next:{title:"Top K Frequent Elements",permalink:"/sorting/heap-sort/top-k-frequent-elements"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Given an array of meeting time intervals consisting of start and end times ",(0,a.yg)("inlineCode",{parentName:"p"},"[[s1,e1],[s2,e2],...]")," (s",(0,a.yg)("sub",null,"i")," < e",(0,a.yg)("sub",null,"i"),"), find the minimum number of conference rooms required."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 1"),":"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Input"),": [","[0, 30]",",","[5, 10]",",","[15, 20]","]",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Output"),": 2")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 2"),":"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Input"),": [","[7,10]",",","[2,4]","]",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Output"),": 1")),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u9996\u5148\u5c06\u6570\u7ec4\u6309\u7167",(0,a.yg)("inlineCode",{parentName:"p"},"interval"),"\u7684\u5f00\u59cb\u65f6\u95f4\u6392\u5e8f\uff0c\u7136\u540e\u8bbe\u7f6e\u4e00\u4e2a\u5c0f\u6839\u5806\uff0c\u7528\u4e8e\u5b58\u50a8\u7684\u6b63\u5728\u4f7f\u7528\u4e2d\u7684\u4f1a\u8bae\u5ba4\uff0c\u6309\u7ed3\u675f\u65f6\u95f4\u6392\u5e8f\uff0c\u5806\u9876\u5c31\u662f\u7ed3\u675f\u65f6\u95f4\u6700\u5c0f\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"interval"),"\u3002\u904d\u5386\u6570\u7ec4\uff0c\u628a\u4e00\u4e2a\u4e00\u4e2a\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"interval"),"\u538b\u5165\u5806\uff0c\u6bcf\u6b21\u538b\u5165\u4e4b\u524d\uff0c\u628a\u65b0\u533a\u95f4\u4e0e\u5806\u9876\u7684\u533a\u95f4\u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u65b0\u533a\u95f4\u7684\u5f00\u59cb\u65f6\u95f4\u5927\u4e8e\u5806\u9876\u7684\u7ed3\u675f\u65f6\u95f4\uff0c\u8bf4\u660e\u5806\u9876\u7684\u4f1a\u8bae\u5ba4\u5df2\u7ecf\u7ed3\u675f\uff0c\u628a\u5b83\u5f39\u51fa\uff0c\u7136\u540e\u538b\u5165\u65b0\u533a\u95f4\u3002\u6570\u7ec4\u904d\u5386\u7ed3\u675f\u540e\uff0c\u5806\u7684\u5927\u5c0f\u5c31\u662f\u6240\u9700\u8981\u7684\u4f1a\u8bae\u5ba4\u6570\u91cf\u3002"),(0,a.yg)(o.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Meeting Rooms II\n// Time Complexity: O(nlogn), Space Complexity: O(n)\nclass Solution {\n    public int minMeetingRooms(int[][] intervals) {\n        if (intervals.length == 0) return 0;\n        Arrays.sort(intervals,(int[] a, int[] b) ->a[0] - b[0]);\n\n        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();\n        pq.offer(intervals[0][1]);\n\n        for (int i = 1; i < intervals.length; i++) {\n            if (intervals[i][0] >= pq.peek()) pq.poll();\n            pq.add(intervals[i][1]);\n        }\n\n        return pq.size();\n      }\n}\n"))),(0,a.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/array/meeting-rooms"},"Meeting Rooms"))))}d.isMDXComponent=!0}}]);