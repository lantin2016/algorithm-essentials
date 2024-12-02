"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6400],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>f});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(a),c=r,f=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return a?t.createElement(f,i(i({ref:n},m),{},{components:a})):t.createElement(f,i({ref:n},m))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>i});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>d});var t=a(58168),r=a(96540),l=a(20053),i=a(92303),o=a(31682),p=a(86976),u=a(23104);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function s(e){const{lazy:n,block:a,defaultValue:i,values:s,groupId:d,className:c}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=s??f.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),g=(0,o.X)(y,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,p.x)(),[N,x]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.a_)();if(null!=d){const e=b[d];null!=e&&e!==N&&y.some((n=>n.value===e))&&x(e)}const w=e=>{const n=e.currentTarget,a=O.indexOf(n),t=y[a].value;t!==N&&(_(n),x(t),null!=d&&v(d,String(t)))},k=e=>{let n=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;n=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;n=O[a]??O[O.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,l.A)("tabs-container",m.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},c)},y.map((e=>{let{value:n,label:a,attributes:i}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>O.push(e),onKeyDown:k,onFocus:w,onClick:w},i,{className:(0,l.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":N===n})}),a??n)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,i.A)();return r.createElement(s,(0,t.A)({key:String(n)},e))}},26602:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var t=a(58168),r=(a(96540),a(15680)),l=a(4865),i=a(19365);const o={title:"Median of Data Stream"},p=void 0,u={unversionedId:"stack-and-queue/stack/median-of-data-stream",id:"stack-and-queue/stack/median-of-data-stream",title:"Median of Data Stream",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/median-of-data-stream.md",sourceDirName:"stack-and-queue/stack",slug:"/stack-and-queue/stack/median-of-data-stream",permalink:"/en/stack-and-queue/stack/median-of-data-stream",draft:!1,tags:[],version:"current",frontMatter:{title:"Median of Data Stream"},sidebar:"docs",previous:{title:"Implement Stack using Queues",permalink:"/en/stack-and-queue/stack/implement-stack-using-queues"},next:{title:"Minimum Number of Swaps to Make the String Balanced",permalink:"/en/stack-and-queue/stack/minimum-number-of-swaps-to-make-the-string-balanced"}},m={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:s},c="wrapper";function f(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value."),(0,r.yg)("p",null,"For example,",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"[2,3,4]"),", the median is ",(0,r.yg)("inlineCode",{parentName:"p"},"3"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"[2,3]"),", the median is ",(0,r.yg)("inlineCode",{parentName:"p"},"(2 + 3) / 2 = 2.5")),(0,r.yg)("p",null,"Design a data structure that supports the following two operations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"void addNum(int num)")," - Add a integer number from the data stream to the data structure."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"double findMedian()")," - Return the median of all elements so far.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),":"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"addNum(1)",(0,r.yg)("br",{parentName:"p"}),"\n","addNum(2)",(0,r.yg)("br",{parentName:"p"}),"\n","findMedian() -> 1.5",(0,r.yg)("br",{parentName:"p"}),"\n","addNum(3)",(0,r.yg)("br",{parentName:"p"}),"\n","findMedian() -> 2")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Follow up"),":"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If all integer numbers from the stream are between 0 and 100, how would you optimize it?"),(0,r.yg)("li",{parentName:"ol"},"If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?")),(0,r.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.yg)("p",null,"\u6c42\u4e2d\u4f4d\u6570\uff0c\u6700\u76f4\u89c2\u7684\u65b9\u6cd5\u662f\u628a\u6570\u7ec4\u6392\u5e8f\uff0c\u7136\u540e ",(0,r.yg)("inlineCode",{parentName:"p"},"n/2")," \u4f4d\u7f6e\u7684\u6570\u5c31\u662f\u4e2d\u4f4d\u6570\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"addNum()"),"\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(1), ",(0,r.yg)("inlineCode",{parentName:"p"},"findMedian()"),"\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f n(logn)\u3002"),(0,r.yg)("p",null,"\u4e3a\u4e86\u63d0\u9ad8 ",(0,r.yg)("inlineCode",{parentName:"p"},"findMedian()"),"\u7684\u901f\u5ea6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"addNum()"),"\u6e90\u6e90\u4e0d\u65ad\u63d2\u5165\u65b0\u5143\u7d20\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u63d2\u5165\u6392\u5e8f\uff0c\u4fdd\u8bc1\u6570\u7ec4\u662f\u5df2\u7ecf\u6392\u5e8f\u597d\u4e86\u7684\uff0c\u8fd9\u6837 ",(0,r.yg)("inlineCode",{parentName:"p"},"findMedian()"),"\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(1), ",(0,r.yg)("inlineCode",{parentName:"p"},"addNum()"),"\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(logn)+O(n)=O(n)\uff0c\u56e0\u4e3a\u4e8c\u5206\u67e5\u627e\u63d2\u5165\u4f4d\u7f6e\u9700\u8981 O(logn)\uff0c\u540e\u9762\u7684\u5143\u7d20\u5168\u90e8\u5e73\u79fb\u9700\u8981 O(n)\u3002"),(0,r.yg)("p",null,"\u5bf9\u4e8e\u67e5\u627e\u4e2d\u4f4d\u6570\u8fd9\u4e2a\u9700\u6c42\uff0c\u628a\u6574\u4e2a\u6570\u7ec4\u6392\u5e8f\u6709\u70b9\u8ba1\u7b97\u8fc7\u5934\u4e86\uff0c\u56e0\u6b64\u80af\u5b9a\u4e0d\u662f\u6700\u5feb\u7684\u3002\u4e0b\u9762\u5f00\u59cb\u8ba8\u8bba\u4e00\u79cd\u66f4\u5feb\u7684\u65b9\u6cd5\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4e24\u4e2a\u5806\uff0c\u4e00\u4e2a\u5927\u6839\u5806\uff0c\u4e00\u4e2a\u5c0f\u6839\u5806\uff0c\u5927\u6839\u5806\u5b58\u653e\u8f83\u5c0f\u7684\u4e00\u534a\u5143\u7d20\uff0c\u5c0f\u6839\u5806\u5b58\u653e\u8f83\u5927\u7684\u4e00\u534a\u5143\u7d20\uff0c\u7ef4\u6301\u4e24\u4e2a\u5806\u7684\u5927\u5c0f\u76f8\u540c\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u5806\u7684\u6839\u8282\u70b9\u5c31\u662f\u4e2d\u4f4d\u6570\u3002\u5f53 n \u4e3a\u5947\u6570\u65f6\uff0c\u4e2d\u4f4d\u6570\u5c31\u662f\u5927\u6839\u5806\u7684\u6839\u8282\u70b9\uff0c\u5f53 n \u4e3a\u5076\u6570\u65f6\uff0c\u4e2d\u4f4d\u6570\u5c31\u662f\u4e24\u4e2a\u5806\u7684\u6839\u8282\u70b9\u4e4b\u548c\u9664\u4ee5 2\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"addNum()"),"\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(logn), ",(0,r.yg)("inlineCode",{parentName:"p"},"findMedian()"),"\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(1)\u3002"),(0,r.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.yg)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'# Median of Data Stream\n# Using two heaps\n# Overall Space Complexity: O(n)\nclass MedianFinder:\n\n    def __init__(self):\n        self.min_heap = []\n        self.max_heap = []\n\n    def addNum(self, num: int) -> None:\n        """Time Complexity: O(logn)"""\n        root = heapq.heappushpop(self.max_heap,-num)\n        heapq.heappush(self.min_heap, -root)\n        while len(self.max_heap) < len(self.min_heap):\n            root = heapq.heappop(self.min_heap)\n            heapq.heappush(self.max_heap, -root)\n\n    def findMedian(self) -> float:\n        """Time Complexity: O(1)"""\n        if len(self.max_heap) == len(self.min_heap):\n            return (-self.max_heap[0]  + self.min_heap[0])/2\n        else:\n            return -self.max_heap[0]\n'))),(0,r.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// Median of Data Stream\n// Using two heaps\n// Overall Space Complexity: O(n)\nclass MedianFinder {\n    private PriorityQueue<Integer> maxHeap;\n    private PriorityQueue<Integer> minHeap;\n\n    public MedianFinder() {\n        maxHeap = new PriorityQueue<>();\n        minHeap = new PriorityQueue<>((a,b) ->  -1 * Integer.compare(a, b));\n    }\n\n    // Time Complexity: O(logn)\n    public void addNum(int num) {\n        maxHeap.offer(num);\n\n        minHeap.offer(maxHeap.poll());\n\n        if (maxHeap.size() < minHeap.size()) {\n            maxHeap.offer(minHeap.poll());\n        }\n    }\n\n    // Time Complexity: O(1)\n    public double findMedian() {\n        if (maxHeap.size() == minHeap.size()) {\n            return (maxHeap.peek() + minHeap.peek()) * 0.5;\n        } else {\n            return maxHeap.peek();\n        }\n    }\n}\n"))),(0,r.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Median of Data Stream\n// Using two heaps\n// Overall Space Complexity: O(n)\nclass MedianFinder {\n    priority_queue<int> max_heap;\n    priority_queue<int, vector<int>, greater<int>> min_heap;\n\npublic:\n    // Time Complexity: O(logn)\n    void addNum(int num) {\n        max_heap.push(num);\n\n        min_heap.push(max_heap.top());\n        max_heap.pop();\n\n        if (max_heap.size() < min_heap.size()) {\n            max_heap.push(min_heap.top());\n            min_heap.pop();\n        }\n    }\n\n    // Time Complexity: O(1)\n    double findMedian() {\n        if (max_heap.size() == min_heap.size()) {\n            return (max_heap.top() + min_heap.top()) * 0.5;\n        } else {\n            return max_heap.top();\n        }\n    }\n};\n")))),(0,r.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../queue/moving-average-of-data-stream"},"Moving Average of Data Stream"))))}f.isMDXComponent=!0}}]);