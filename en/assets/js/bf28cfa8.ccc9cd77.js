"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[353],{15680:(e,n,a)=>{a.d(n,{xA:()=>o,yg:()=>y});var t=a(96540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):m(m({},n),e)),a},o=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=s,y=u["".concat(i,".").concat(c)]||u[c]||g[c]||r;return a?t.createElement(y,m(m({ref:n},o),{},{components:a})):t.createElement(y,m({ref:n},o))}));function y(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,m=new Array(r);m[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:s,m[1]=l;for(var p=2;p<r;p++)m[p]=a[p];return t.createElement.apply(null,m)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>m});var t=a(96540),s=a(20053);const r={tabItem:"tabItem_Ymn6"};function m(e){let{children:n,hidden:a,className:m}=e;return t.createElement("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,m),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>g});var t=a(58168),s=a(96540),r=a(20053),m=a(92303),l=a(31682),i=a(86976),p=a(23104);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:n,block:a,defaultValue:m,values:u,groupId:g,className:c}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??y.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),N=(0,l.X)(h,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const d=null===m?m:m??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==d&&!h.some((e=>e.value===d)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,i.x)(),[v,b]=(0,s.useState)(d),I=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.a_)();if(null!=g){const e=f[g];null!=e&&e!==v&&h.some((n=>n.value===e))&&b(e)}const x=e=>{const n=e.currentTarget,a=I.indexOf(n),t=h[a].value;t!==v&&(S(n),b(t),null!=g&&w(g,String(t)))},O=e=>{let n=null;switch(e.key){case"ArrowRight":{const a=I.indexOf(e.currentTarget)+1;n=I[a]??I[0];break}case"ArrowLeft":{const a=I.indexOf(e.currentTarget)-1;n=I[a]??I[I.length-1];break}}n?.focus()};return s.createElement("div",{className:(0,r.A)("tabs-container",o.tabList)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},c)},h.map((e=>{let{value:n,label:a,attributes:m}=e;return s.createElement("li",(0,t.A)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>I.push(e),onKeyDown:O,onFocus:x,onClick:x},m,{className:(0,r.A)("tabs__item",o.tabItem,m?.className,{"tabs__item--active":v===n})}),a??n)}))),n?(0,s.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function g(e){const n=(0,m.A)();return s.createElement(u,(0,t.A)({key:String(n)},e))}},36388:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=a(58168),s=(a(96540),a(15680)),r=a(4865),m=a(19365);const l={title:"3Sum"},i=void 0,p={unversionedId:"dual-pointers/3sum",id:"dual-pointers/3sum",title:"3Sum",description:"\u63cf\u8ff0",source:"@site/docs/dual-pointers/3sum.md",sourceDirName:"dual-pointers",slug:"/dual-pointers/3sum",permalink:"/en/dual-pointers/3sum",draft:!1,tags:[],version:"current",frontMatter:{title:"3Sum"},sidebar:"docs",previous:{title:"2Sum II",permalink:"/en/dual-pointers/2sum-ii"},next:{title:"3Sum Closest",permalink:"/en/dual-pointers/3sum-closest"}},o={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u53cc\u6307\u9488",id:"\u53cc\u6307\u9488",level:4},{value:"HashSet",id:"hashset",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],g={toc:u},c="wrapper";function y(e){let{components:n,...a}=e;return(0,s.yg)(c,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.yg)("p",null,"Given an array ",(0,s.yg)("inlineCode",{parentName:"p"},"S")," of ",(0,s.yg)("inlineCode",{parentName:"p"},"n")," integers, are there elements ",(0,s.yg)("inlineCode",{parentName:"p"},"a, b, c")," in ",(0,s.yg)("inlineCode",{parentName:"p"},"S")," such that ",(0,s.yg)("inlineCode",{parentName:"p"},"a + b + c = 0"),"? Find all unique triplets in the array which gives the sum of zero."),(0,s.yg)("p",null,"Note:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Elements in a triplet ",(0,s.yg)("inlineCode",{parentName:"li"},"(a,b,c)")," must be in non-descending order. (ie, ",(0,s.yg)("span",{parentName:"li",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"a"),(0,s.yg)("mo",{parentName:"mrow"},"\u2264"),(0,s.yg)("mi",{parentName:"mrow"},"b"),(0,s.yg)("mo",{parentName:"mrow"},"\u2264"),(0,s.yg)("mi",{parentName:"mrow"},"c")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\leq b \\leq c")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"c"))))),")"),(0,s.yg)("li",{parentName:"ul"},"The solution set must not contain duplicate triplets.")),(0,s.yg)("p",null,"For example, given array ",(0,s.yg)("inlineCode",{parentName:"p"},"S = {-1 0 1 2 -1 -4}"),"."),(0,s.yg)("p",null,"A solution set is:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"(-1, 0, 1)\n(-1, -1, 2)\n")),(0,s.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.yg)("p",null,"\u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"O"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"n"),(0,s.yg)("mn",{parentName:"msup"},"2")),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,s.yg)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u63a8\u5e7f\u5230",(0,s.yg)("inlineCode",{parentName:"p"},"k-sum"),"\uff0c\u5148\u6392\u5e8f\uff0c\u7136\u540e\u505a",(0,s.yg)("inlineCode",{parentName:"p"},"k-2"),"\u6b21\u5faa\u73af\uff0c\u5728\u6700\u5185\u5c42\u5faa\u73af\u5de6\u53f3\u5939\u903c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662f ",(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"O"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("mi",{parentName:"mrow"},"max"),(0,s.yg)("mo",{parentName:"mrow"},"\u2061"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.yg)("mi",{parentName:"mrow"},"n"),(0,s.yg)("mi",{parentName:"mrow"},"log"),(0,s.yg)("mo",{parentName:"mrow"},"\u2061"),(0,s.yg)("mi",{parentName:"mrow"},"n"),(0,s.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"n"),(0,s.yg)("mrow",{parentName:"msup"},(0,s.yg)("mi",{parentName:"mrow"},"k"),(0,s.yg)("mo",{parentName:"mrow"},"\u2212"),(0,s.yg)("mn",{parentName:"mrow"},"1"))),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(\\max\\{n \\log n, n^{k-1}\\})")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1.0991em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mop"},"max"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"{"),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mop"},"lo",(0,s.yg)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.yg)("span",{parentName:"span",className:"mpunct"},","),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,s.yg)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"1"))))))))),(0,s.yg)("span",{parentName:"span",className:"mclose"},"})"))))),"\u3002"),(0,s.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.yg)("h4",{id:"\u53cc\u6307\u9488"},"\u53cc\u6307\u9488"),(0,s.yg)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.yg)(m.A,{value:"python",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"# 3Sum\n# \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\uff0c\u6ce8\u610f\u8df3\u8fc7\u91cd\u590d\u7684\u6570\n# Time Complexity: O(n^2)\n# Space Complexity: from O(logn) to O(n), depending on the\n# implementation of the sorting algorithm\nclass Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        nums.sort()\n        result = []\n        for i in range(len(nums)):\n            if i == 0 or nums[i] != nums[i-1]:\n                for lst in self.twoSumII(nums, i+1, 0-nums[i]):\n                    result.append([nums[i]]+lst)\n        return result\n\n    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:\n        result = []\n        low, high = start, len(nums)-1\n        while low < high:\n            sum = nums[low] + nums[high];\n            if sum < target:\n                low += 1\n            elif sum > target:\n                high -= 1\n            else:\n                result.append([nums[low], nums[high]])\n                low += 1\n                high -= 1\n                while low < high and nums[low] == nums[low-1]:\n                    low += 1\n                while low < high and nums[high] == nums[high+1]:\n                    high -= 1\n        return result\n"))),(0,s.yg)(m.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// 3Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\uff0c\u6ce8\u610f\u8df3\u8fc7\u91cd\u590d\u7684\u6570\n// Time Complexity: O(n^2)\n// Space Complexity: from O(logn) to O(n), depending on the\n// implementation of the sorting algorithm\npublic class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> result = new ArrayList<>();\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (i == 0 || nums[i] != nums[i-1]) {\n                for(List<Integer> lst: twoSumII(nums, i+1, 0-nums[i])) {\n                    lst.add(0, nums[i]);\n                    result.add(lst);\n                }\n            }\n        }\n        return result;\n    }\n\n    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        int low = start, high = nums.length-1;\n        while (low < high) {\n            int sum = nums[low] + nums[high];\n            if (sum < target) {\n                ++low;\n            } else if(sum > target) {\n                --high;\n            } else {\n                result.add(new ArrayList<>(Arrays.asList(nums[low++], nums[high--])));\n                while(low < high && nums[low] == nums[low-1]) ++low;\n                while(low < high && nums[high] == nums[high+1]) --high;\n            }\n        }\n        return result;\n    }\n};\n"))),(0,s.yg)(m.A,{value:"cpp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-cpp"},"// 3Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\uff0c\u6ce8\u610f\u8df3\u8fc7\u91cd\u590d\u7684\u6570\n// Time Complexity: O(n^2)\n// Space Complexity: from O(logn) to O(n), depending on the\n// implementation of the sorting algorithm\nclass Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        sort(begin(nums), end(nums));\n        vector<vector<int>> result;\n\n        for (int i = 0; i < nums.size(); ++i)\n            if (i == 0 || nums[i] != nums[i - 1]) {\n                for (auto& lst: twoSumII(nums, i+1, 0-nums[i])) {\n                    lst.insert(lst.begin(), nums[i]);\n                    result.push_back(lst);\n                }\n            }\n        return result;\n    }\n\n    vector<vector<int>> twoSumII(vector<int>& nums, int start, int target) {\n        vector<vector<int>> result;\n        int low = start, high = nums.size() - 1;\n        while (low < high) {\n            int sum = nums[low] + nums[high];\n            if (sum < target) {\n                ++low;\n            } else if (sum > target) {\n                --high;\n            } else {\n                result.push_back({ nums[low++], nums[high--] });\n                while(low < high && nums[low] == nums[low-1]) ++low;\n                while(low < high && nums[high] == nums[high+1]) --high;\n            }\n        }\n        return result;\n    }\n};\n")))),(0,s.yg)("h4",{id:"hashset"},"HashSet"),(0,s.yg)("p",null,"\u5176\u4ed6\u4ee3\u7801\u5b8c\u5168\u4e00\u6837\uff0c\u4ec5\u4ec5\u662f ",(0,s.yg)("inlineCode",{parentName:"p"},"twoSumII()"),"\u4e0d\u540c\u3002"),(0,s.yg)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.yg)(m.A,{value:"python",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"# 3Sum\n# \u5148\u6392\u5e8f\uff0c\u7136\u540etwoSumII()\u7528HashSet\u5b9e\u73b0\n# Time Complexity: O(n^2), Space Complexity: O(n)\nclass Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        nums.sort()\n        result = []\n        for i in range(len(nums)):\n            if i == 0 or nums[i] != nums[i-1]:\n                for lst in self.twoSumII(nums, i+1, 0-nums[i]):\n                    result.append([nums[i]]+lst)\n        return result\n\n    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:\n        result = []\n        s = set()\n        for i in range(start, len(nums)):\n            if len(result) == 0 or result[-1][1] != nums[i]:\n                complement = target - nums[i]\n                if complement in s:\n                    result.append([complement, nums[i]])\n            s.add(nums[i])\n        return result\n"))),(0,s.yg)(m.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// 3Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540etwoSumII()\u7528HashSet\u5b9e\u73b0\n// Time Complexity: O(n^2), Space Complexity: O(n)\npublic class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> result = new ArrayList<>();\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (i == 0 || nums[i] != nums[i-1]) {\n                for(List<Integer> lst: twoSumII(nums, i+1, 0-nums[i])) {\n                    lst.add(0, nums[i]);\n                    result.add(lst);\n                }\n            }\n        }\n        return result;\n    }\n\n    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        Set<Integer> s = new HashSet<>();\n        for (int i = start; i < nums.length; ++i) {\n            if (result.isEmpty() || result.get(result.size() - 1).get(1) != nums[i]) {\n                int complement = target - nums[i];\n                if (s.contains(complement)) {\n                    result.add(new ArrayList<>(Arrays.asList(complement, nums[i])));\n                }\n            }\n            s.add(nums[i]);\n        }\n        return result;\n    }\n};\n"))),(0,s.yg)(m.A,{value:"cpp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-cpp"},"// 3Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540etwoSumII()\u7528HashSet\u5b9e\u73b0\n// Time Complexity: O(n^2), Space Complexity: O(n)\nclass Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        sort(begin(nums), end(nums));\n        vector<vector<int>> result;\n\n        for (int i = 0; i < nums.size(); ++i)\n            if (i == 0 || nums[i] != nums[i - 1]) {\n                for (auto& lst: twoSumII(nums, i+1, 0-nums[i])) {\n                    lst.insert(lst.begin(), nums[i]);\n                    result.push_back(lst);\n                }\n            }\n        return result;\n    }\n\n    vector<vector<int>> twoSumII(vector<int>& nums, int start, int target) {\n        vector<vector<int>> result;\n        unordered_set<int> s;\n        for (auto i = start; i < nums.size(); ++i) {\n            if (result.empty() || result.back()[1] != nums[i]) {\n                int complement = target - nums[i];\n                if (s.count(complement)) {\n                    result.push_back({ complement, nums[i]});\n                }\n            }\n            s.insert(nums[i]);\n        }\n        return result;\n    }\n};\n")))),(0,s.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/array/2sum"},"2Sum")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/dual-pointers/2sum-ii"},"2Sum II")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/dual-pointers/3sum-closest"},"3Sum Closest")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/dual-pointers/4sum"},"4Sum")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/array/4sum-ii"},"4Sum II"))))}y.isMDXComponent=!0}}]);