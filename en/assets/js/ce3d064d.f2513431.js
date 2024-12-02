"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8136],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>v});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,v=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return n?t.createElement(v,i(i({ref:a},s),{},{components:n})):t.createElement(v,i({ref:a},s))}));function v(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var u={};for(var o in a)hasOwnProperty.call(a,o)&&(u[o]=a[o]);u.originalType=e,u[p]="string"==typeof e?e:l,i[1]=u;for(var c=2;c<r;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>i});var t=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>m});var t=n(58168),l=n(96540),r=n(20053),i=n(92303),u=n(31682),o=n(86976),c=n(23104);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:a,block:n,defaultValue:i,values:p,groupId:m,className:d}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??v.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),g=(0,u.X)(y,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,o.x)(),[h,x]=(0,l.useState)(f),q=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.a_)();if(null!=m){const e=b[m];null!=e&&e!==h&&y.some((a=>a.value===e))&&x(e)}const O=e=>{const a=e.currentTarget,n=q.indexOf(a),t=y[n].value;t!==h&&(A(a),x(t),null!=m&&w(m,String(t)))},T=e=>{let a=null;switch(e.key){case"ArrowRight":{const n=q.indexOf(e.currentTarget)+1;a=q[n]??q[0];break}case"ArrowLeft":{const n=q.indexOf(e.currentTarget)-1;a=q[n]??q[q.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,r.A)("tabs-container",s.tabList)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},d)},y.map((e=>{let{value:a,label:n,attributes:i}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,key:a,ref:e=>q.push(e),onKeyDown:T,onFocus:O,onClick:O},i,{className:(0,r.A)("tabs__item",s.tabItem,i?.className,{"tabs__item--active":h===a})}),n??a)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==h})))))}function m(e){const a=(0,i.A)();return l.createElement(p,(0,t.A)({key:String(a)},e))}},91247:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var t=n(58168),l=(n(96540),n(15680)),r=n(4865),i=n(19365);const u={title:"Moving Average of Data Stream"},o=void 0,c={unversionedId:"stack-and-queue/queue/moving-average-of-data-stream",id:"stack-and-queue/queue/moving-average-of-data-stream",title:"Moving Average of Data Stream",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/queue/moving-average-of-data-stream.md",sourceDirName:"stack-and-queue/queue",slug:"/stack-and-queue/queue/moving-average-of-data-stream",permalink:"/en/stack-and-queue/queue/moving-average-of-data-stream",draft:!1,tags:[],version:"current",frontMatter:{title:"Moving Average of Data Stream"},sidebar:"docs",previous:{title:"Implement Queue using Stacks",permalink:"/en/stack-and-queue/queue/implement-queue-using-stacks"},next:{title:"Sliding Window Maximum",permalink:"/en/stack-and-queue/queue/sliding-window-maximum"}},s={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u53cc\u7aef\u961f\u5217",id:"\u53cc\u7aef\u961f\u5217",level:4},{value:"\u5faa\u73af\u961f\u5217",id:"\u5faa\u73af\u961f\u5217",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p},d="wrapper";function v(e){let{components:a,...n}=e;return(0,l.yg)(d,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),":"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"MovingAverage m = new MovingAverage(3);",(0,l.yg)("br",{parentName:"p"}),"\n","m.next(1) = 1",(0,l.yg)("br",{parentName:"p"}),"\n","m.next(10) = (1 + 10) / 2",(0,l.yg)("br",{parentName:"p"}),"\n","m.next(3) = (1 + 10 + 3) / 3",(0,l.yg)("br",{parentName:"p"}),"\n","m.next(5) = (10 + 3 + 5) / 3")),(0,l.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.yg)("p",null,"\u53ef\u4ee5\u7528\u4e00\u4e2a\u53cc\u7aef\u961f\u5217\uff0c\u5927\u5c0f\u4e3a\u7a97\u53e3\u5927\u5c0f\uff0c\u5e76\u7528\u4e00\u4e2a\u53d8\u91cf\u5b58\u50a8\u603b\u548c\u3002\u6bcf\u6b21\u65b0\u6765\u4e00\u4e2a\u5143\u7d20\uff0c\u5c31\u63d2\u5165\u5230\u5c3e\u90e8\uff0c\u5e76\u4ece\u5934\u90e8\u5f39\u51fa\u65e7\u5143\u7d20\uff0c\u6700\u540e\u8981\u66f4\u65b0\u603b\u548c\u3002"),(0,l.yg)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u53cc\u7aef\u961f\u5217\u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\uff0c\u53ef\u4ee5\u4f18\u5316\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u7528\u5faa\u73af\u961f\u5217\u6765\u5b9e\u73b0\u3002"),(0,l.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.yg)("h4",{id:"\u53cc\u7aef\u961f\u5217"},"\u53cc\u7aef\u961f\u5217"),(0,l.yg)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"python",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-python"},"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.queue = deque()\n        self.window_sum = 0.0\n        self.count = 0\n\n    def next(self, val: int) -> float:\n        self.count += 1\n        self.queue.append(val)\n        head = self.queue.popleft() if self.count > self.capacity else 0\n        self.window_sum = self.window_sum - head + val\n        return self.window_sum / min(self.capacity, self.count)\n"))),(0,l.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\n  private int capacity, count = 0;\n  private double windowSum = 0.0;\n  private Deque<Integer> queue = new ArrayDeque<>();\n\n  public MovingAverage(int capacity) {\n    this.capacity = capacity;\n  }\n\n  public double next(int value) {\n    ++count;\n    queue.add(value);\n    int head = count > capacity ? queue.poll() : 0;\n    windowSum = windowSum - head + value;\n    return windowSum / Math.min(capacity, count);\n  }\n}\n"))),(0,l.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    /** Initialize your data structure here. */\n    MovingAverage(int capacity) {\n        this->capacity = capacity;\n    }\n\n    double next(int val) {\n        ++count;\n        queue.push_back(val);\n        int head = count > capacity ? queue.front() : 0;\n        if (count > capacity) queue.pop_front();\n        window_sum = window_sum - head + val;\n        return window_sum / min(capacity, count);\n    }\nprivate:\n    int capacity, count = 0;\n    double window_sum = 0;\n    deque<int> queue;\n};\n")))),(0,l.yg)("h4",{id:"\u5faa\u73af\u961f\u5217"},"\u5faa\u73af\u961f\u5217"),(0,l.yg)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"python",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-python"},"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, capacity: int):\n        self.q = [0] * capacity\n        self.capacity = capacity\n        self.head = 0\n        self.count = 0\n        self.window_sum = 0.0\n\n    def next(self, value: int) -> float:\n        tail = (self.head + self.count) % self.capacity\n        self.count += 1\n        self.window_sum = self.window_sum - self.q[tail] + value\n        self.q[tail] = value\n        return self.window_sum / min(self.capacity, self.count)\n"))),(0,l.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {  \n  private int[] q;\n  private int capacity, head, count;\n  private double windowSum = 0.0;\n\n  public MovingAverage(int capacity) {\n    q = new int[capacity];\n    this.capacity = capacity;\n    head = 0;\n    count = 0;\n  }\n\n  public double next(int value) {\n    int tail = (head + count) % capacity;\n    count++;\n    windowSum = windowSum - q[tail] + value;\n    q[tail] = value;\n    return windowSum / Math.min(capacity, count);\n  }\n}\n"))),(0,l.yg)(i.A,{value:"cpp",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    MovingAverage(int size) {\n        q = new int[size];\n        std::fill_n(q, size, 0);\n        capacity = size;\n        head = 0;\n        count = 0;\n    }\n\n    double next(int value) {\n        int tail = (head + count) % capacity;\n        count++;\n        windowSum = windowSum - q[tail] + value;\n        q[tail] = value;\n        return windowSum / min(capacity, count);\n    }\nprivate:\n    int *q;\n    int capacity, head, count;\n    double windowSum = 0.0;\n};\n\n")))),(0,l.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"../stack/median-of-data-stream"},"Median of Data Stream"))))}v.isMDXComponent=!0}}]);