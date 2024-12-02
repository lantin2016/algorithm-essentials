"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8924],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>y});var t=a(96540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):m(m({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),o=p(a),c=s,y=o["".concat(i,".").concat(c)]||o[c]||g[c]||r;return a?t.createElement(y,m(m({ref:n},u),{},{components:a})):t.createElement(y,m({ref:n},u))}));function y(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,m=new Array(r);m[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[o]="string"==typeof e?e:s,m[1]=l;for(var p=2;p<r;p++)m[p]=a[p];return t.createElement.apply(null,m)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>m});var t=a(96540),s=a(20053);const r={tabItem:"tabItem_Ymn6"};function m(e){let{children:n,hidden:a,className:m}=e;return t.createElement("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,m),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>g});var t=a(58168),s=a(96540),r=a(20053),m=a(92303),l=a(31682),i=a(86976),p=a(23104);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function o(e){const{lazy:n,block:a,defaultValue:m,values:o,groupId:g,className:c}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=o??y.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),N=(0,l.X)(h,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const d=null===m?m:m??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==d&&!h.some((e=>e.value===d)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,i.x)(),[w,b]=(0,s.useState)(d),k=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.a_)();if(null!=g){const e=f[g];null!=e&&e!==w&&h.some((n=>n.value===e))&&b(e)}const I=e=>{const n=e.currentTarget,a=k.indexOf(n),t=h[a].value;t!==w&&(S(n),b(t),null!=g&&v(g,String(t)))},x=e=>{let n=null;switch(e.key){case"ArrowRight":{const a=k.indexOf(e.currentTarget)+1;n=k[a]??k[0];break}case"ArrowLeft":{const a=k.indexOf(e.currentTarget)-1;n=k[a]??k[k.length-1];break}}n?.focus()};return s.createElement("div",{className:(0,r.A)("tabs-container",u.tabList)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},c)},h.map((e=>{let{value:n,label:a,attributes:m}=e;return s.createElement("li",(0,t.A)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>k.push(e),onKeyDown:x,onFocus:I,onClick:I},m,{className:(0,r.A)("tabs__item",u.tabItem,m?.className,{"tabs__item--active":w===n})}),a??n)}))),n?(0,s.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function g(e){const n=(0,m.A)();return s.createElement(o,(0,t.A)({key:String(n)},e))}},97031:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=a(58168),s=(a(96540),a(15680)),r=a(4865),m=a(19365);const l={title:"4Sum"},i=void 0,p={unversionedId:"dual-pointers/4sum",id:"dual-pointers/4sum",title:"4Sum",description:"\u63cf\u8ff0",source:"@site/docs/dual-pointers/4sum.md",sourceDirName:"dual-pointers",slug:"/dual-pointers/4sum",permalink:"/en/dual-pointers/4sum",draft:!1,tags:[],version:"current",frontMatter:{title:"4Sum"},sidebar:"docs",previous:{title:"3Sum Smaller",permalink:"/en/dual-pointers/3sum-smaller"},next:{title:"Container With Most Water",permalink:"/en/dual-pointers/container-with-most-water"}},u={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u53cc\u6307\u9488",id:"\u53cc\u6307\u9488",level:4},{value:"HashSet",id:"hashset",level:4},{value:"kSum \u95ee\u9898\u603b\u7ed3",id:"ksum-\u95ee\u9898\u603b\u7ed3",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],g={toc:o},c="wrapper";function y(e){let{components:n,...a}=e;return(0,s.yg)(c,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.yg)("p",null,"Given an array ",(0,s.yg)("inlineCode",{parentName:"p"},"S")," of ",(0,s.yg)("inlineCode",{parentName:"p"},"n")," integers, are there elements ",(0,s.yg)("inlineCode",{parentName:"p"},"a, b, c"),", and ",(0,s.yg)("inlineCode",{parentName:"p"},"d")," in ",(0,s.yg)("inlineCode",{parentName:"p"},"S")," such that ",(0,s.yg)("inlineCode",{parentName:"p"},"a + b + c + d = target"),"? Find all unique quadruplets in the array which gives the sum of target."),(0,s.yg)("p",null,"Note:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Elements in a quadruplet ",(0,s.yg)("inlineCode",{parentName:"li"},"(a,b,c,d)")," must be in non-descending order. (ie, ",(0,s.yg)("span",{parentName:"li",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"a"),(0,s.yg)("mo",{parentName:"mrow"},"\u2264"),(0,s.yg)("mi",{parentName:"mrow"},"b"),(0,s.yg)("mo",{parentName:"mrow"},"\u2264"),(0,s.yg)("mi",{parentName:"mrow"},"c"),(0,s.yg)("mo",{parentName:"mrow"},"\u2264"),(0,s.yg)("mi",{parentName:"mrow"},"d")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\leq b \\leq c \\leq d")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),")"),(0,s.yg)("li",{parentName:"ul"},"The solution set must not contain duplicate quadruplets.")),(0,s.yg)("p",null,"For example, given array ",(0,s.yg)("inlineCode",{parentName:"p"},"S = {1 0 -1 0 -2 2}"),", and ",(0,s.yg)("inlineCode",{parentName:"p"},"target = 0"),"."),(0,s.yg)("p",null,"A solution set is:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"(-1,  0, 0, 1)\n(-2, -1, 1, 2)\n(-2,  0, 0, 2)\n")),(0,s.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.yg)("p",null,"\u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\uff0c\u590d\u6742\u5ea6 ",(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"O"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"n"),(0,s.yg)("mn",{parentName:"msup"},"3")),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u4f1a\u8d85\u65f6\u3002"),(0,s.yg)("p",null,"\u53ef\u4ee5\u7528\u4e00\u4e2a hashmap \u5148\u7f13\u5b58\u4e24\u4e2a\u6570\u7684\u548c\uff0c\u6700\u7ec8\u590d\u6742\u5ea6",(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"O"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"n"),(0,s.yg)("mn",{parentName:"msup"},"3")),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002\u8fd9\u4e2a\u7b56\u7565\u4e5f\u9002\u7528\u4e8e 3Sum \u3002"),(0,s.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.yg)("h4",{id:"\u53cc\u6307\u9488"},"\u53cc\u6307\u9488"),(0,s.yg)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.yg)(m.A,{value:"python",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"# 4Sum\n# \u53cc\u6307\u9488\n# Time Complexity: O(n^3)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        nums.sort()\n        return self.kSum(nums, 0, target, 4)\n\n    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:\n        result = []\n        low, high = start, len(nums)-1\n        while low < high:\n            sum = nums[low] + nums[high]\n            if sum < target:\n                low += 1\n            elif sum > target:\n                high -= 1\n            else:\n                result.append([nums[low], nums[high]])\n                low += 1\n                high -= 1\n                while low < high and nums[low] == nums[low-1]:\n                    low += 1\n                while low < high and nums[high] == nums[high+1]:\n                    high -= 1\n        return result\n\n    def kSum(self, nums: List[int], start: int, target: int, k: int) -> List[List[int]]:\n        result = []\n        if k == 2:\n            return self.twoSumII(nums, start, target)\n        if start + k > len(nums) or nums[start] * k > target or nums[-1] * k < target:\n            return result\n        for i in range(start, len(nums)):\n            if i == start or nums[i] != nums[i-1]:\n                for lst in self.kSum(nums, i+1, target-nums[i], k-1):\n                    result.append([nums[i]] + lst)\n        return result\n"))),(0,s.yg)(m.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\npublic class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        Arrays.sort(nums);\n        return kSum(nums, 0, target, 4);\n    }\n    public List<List<Integer>> kSum(int[] nums, int start, int target, int k) {\n        List<List<Integer>> result = new ArrayList<>();\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k) {\n            return result;\n        }\n        for (int i = start; i < nums.length; ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (var list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.add(nums[i]);\n                    result.add(list);\n                }\n            }\n        }\n        return result;\n    }\n    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        int low = start, high = nums.length - 1;\n        while (low < high) {\n            int sum = nums[low] + nums[high];\n            if (sum < target) {\n                ++low;\n            } else if(sum > target) {\n                --high;\n            } else {\n                result.add(new ArrayList<>(Arrays.asList(nums[low++], nums[high--])));\n                while(low < high && nums[low] == nums[low-1]) ++low;\n                while(low < high && nums[high] == nums[high+1]) --high;\n            }\n        }\n        return result;\n    }\n}\n"))),(0,s.yg)(m.A,{value:"cpp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-cpp"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\nclass Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        sort(begin(nums), end(nums));\n        return kSum(nums, 0, target, 4);\n    }\n    vector<vector<int>> kSum(vector<int>& nums, int start, int target, int k) {\n        vector<vector<int>> result;\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.size() || nums[start] * k > target || target > nums.back() * k) {\n            return result;\n        }\n\n        for (int i = start; i < nums.size(); ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (auto &list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.push_back(nums[i]);\n                    result.push_back(list);\n                }\n            }\n        }\n        return result;\n    }\n    vector<vector<int>> twoSumII(const vector<int>& nums, int start, int target) {\n        vector<vector<int>> result;\n        int low = start, high = nums.size() - 1;\n        while (low < high) {\n            int sum = nums[low] + nums[high];\n            if (sum < target) {\n                ++low;\n            } else if (sum > target) {\n                --high;\n            } else {\n                result.push_back({ nums[low++], nums[high--] });\n                while(low < high && nums[low] == nums[low-1]) ++low;\n                while(low < high && nums[high] == nums[high+1]) --high;\n            }\n        }\n        return result;\n    }\n};\n")))),(0,s.yg)("h4",{id:"hashset"},"HashSet"),(0,s.yg)("p",null,"\u5176\u4ed6\u4ee3\u7801\u5b8c\u5168\u4e00\u6837\uff0c\u4ec5\u4ec5\u662f",(0,s.yg)("inlineCode",{parentName:"p"},"twoSumII()"),"\u4e0d\u4e00\u6837\u3002"),(0,s.yg)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.yg)(m.A,{value:"python",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"# 4Sum\n# \u5148\u6392\u5e8f\uff0c\u7136\u540etwoSumII()\u7528HashSet\u5b9e\u73b0\n# Time Complexity: O(n^3)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        nums.sort()\n        return self.kSum(nums, 0, target, 4)\n\n    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:\n        result = []\n        s = set()\n        for i in range(start, len(nums)):\n            if len(result) == 0 or result[-1][1] != nums[i]:\n                complement = target - nums[i]\n                if complement in s:\n                    result.append([complement, nums[i]])\n            s.add(nums[i])\n        return result\n\n    def kSum(self, nums: List[int], start: int, target: int, k: int) -> List[List[int]]:\n        result = []\n        if k == 2:\n            return self.twoSumII(nums, start, target)\n        if start + k > len(nums) or nums[start] * k > target or nums[-1] * k < target:\n            return result\n        for i in range(start, len(nums)-k+1):\n            if i == start or nums[i] != nums[i-1]:\n                for lst in self.kSum(nums, i+1, target-nums[i], k-1):\n                    result.append([nums[i]] + lst)\n        return result\n"))),(0,s.yg)(m.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540etwoSumII()\u7528HashSet\u5b9e\u73b0\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\npublic class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        Arrays.sort(nums);\n        return kSum(nums, 0, target, 4);\n    }\n    public List<List<Integer>> kSum(int[] nums, int start, int target, int k) {\n        List<List<Integer>> result = new ArrayList<>();\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k) {\n            return result;\n        }\n        for (int i = start; i < nums.length; ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (var list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.add(nums[i]);\n                    result.add(list);\n                }\n            }\n        }\n        return result;\n    }\n    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        Set<Integer> s = new HashSet<>();\n        for (int i = start; i < nums.length; ++i) {\n            if (result.isEmpty() || result.get(result.size() - 1).get(1) != nums[i]) {\n                int complement = target - nums[i];\n                if (s.contains(complement)) {\n                    result.add(new ArrayList<>(Arrays.asList(complement, nums[i])));\n                }\n            }\n            s.add(nums[i]);\n        }\n        return result;\n    }\n}\n"))),(0,s.yg)(m.A,{value:"cpp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-cpp"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\nclass Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        sort(begin(nums), end(nums));\n        return kSum(nums, 0, target, 4);\n    }\n    vector<vector<int>> kSum(vector<int>& nums, int start, int target, int k) {\n        vector<vector<int>> result;\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.size() || nums[start] * k > target || target > nums.back() * k) {\n            return result;\n        }\n\n        for (int i = start; i < nums.size(); ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (auto &list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.push_back(nums[i]);\n                    result.push_back(list);\n                }\n            }\n        }\n        return result;\n    }\n    vector<vector<int>> twoSumII(vector<int>& nums, int start, int target) {\n        vector<vector<int>> result;\n        unordered_set<int> s;\n        for (auto i = start; i < nums.size(); ++i) {\n            if (result.empty() || result.back()[1] != nums[i]) {\n                int complement = target - nums[i];\n                if (s.count(complement)) {\n                    result.push_back({ complement, nums[i]});\n                }\n            }\n            s.insert(nums[i]);\n        }\n        return result;\n    }\n};\n")))),(0,s.yg)("h3",{id:"ksum-\u95ee\u9898\u603b\u7ed3"},"kSum \u95ee\u9898\u603b\u7ed3"),(0,s.yg)("p",null,"\u5bf9\u4e8e kSum \u8fd9\u7c7b\u95ee\u9898\uff0c"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"\u5982\u679c\u6c42\u7684\u662f\u5177\u4f53\u7684\u4f4d\u7f6e\uff0c\u5c31\u4e0d\u80fd sort\uff0c\u56e0\u4e3a\u6392\u5e8f\u540e\u4f4d\u7f6e\u4fe1\u606f\u5c31\u4e22\u5931\u4e86"),(0,s.yg)("li",{parentName:"ol"},"\u5982\u679c\u6c42\u4f4d\u7f6e\uff0c\u7528 HashMap, \u6c42\u7ec4\u5408\u672c\u8eab\uff0c\u7528 HashSet \u5c31\u8db3\u591f\u4e86"),(0,s.yg)("li",{parentName:"ol"},"\u5982\u679c\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\u4e14 k>2, \u65e0\u8bba\u5982\u4f55\uff0c\u5148\u6392\u5e8f\uff0c\u7136\u540e\u518d\u8003\u8651\u7528\u53cc\u6307\u9488\u6216\u8005 HashSet"),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("inlineCode",{parentName:"li"},"twoSumII()"),"\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u901a\u7528\u7684\u5e95\u5c42\u51fd\u6570\uff0c\u5b83\u5f80\u5f80\u6709\u4e24\u79cd\u5b9e\u73b0\uff0c\u53cc\u6307\u9488\u6216\u8005 HashSet(HashMap)"),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("inlineCode",{parentName:"li"},"twoSumII()"),"\u7684 HashSet \u5b9e\u73b0\uff0c\u6bd4\u8f83\u76f4\u89c2\u7684\u662f\u4e24\u6b21\u904d\u5386\uff0c\u53ef\u4ee5\u4f18\u5316\u6210\u5355\u6b21\u904d\u5386\u3002")),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/en/array/2sum"},"2Sum"),"\u6c42\u7684\u662f\u4f4d\u7f6e\uff0c\u56e0\u6b64\u4e0d\u80fd sort\u3002\u7528\u4e24\u8f6e\u5faa\u73af\u66b4\u529b\u641c\u7d22\uff0c\u65f6\u95f4\u590d\u6742\u5ea6",(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"O"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"n"),(0,s.yg)("mn",{parentName:"msup"},"2")),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"))))),", \u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff1b\u5982\u679c\u7528\u4e00\u4e2a HashMap \u6765\u7f13\u5b58\u4f4d\u7f6e\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u53ef\u4ee5\u964d\u4f4e\u5230 O(n)\uff0c\u4ee3\u4ef7\u662f\u7a7a\u95f4\u590d\u6742\u5ea6\u53d8\u4e3a O(n)\u3002"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/en/dual-pointers/2sum-ii"},"2Sum II"),"\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\uff0c",(0,s.yg)("inlineCode",{parentName:"p"},"nums"),"\u6570\u7ec4\u5df2\u6392\u597d\u5e8f\uff0c\u56e0\u6b64\u5c31\u4e0d\u5fc5\u518d\u6392\u5e8f\u4e86\uff0c\u76f4\u63a5\u7528\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff1b\u4e5f\u53ef\u4ee5\u7528 HashSet\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u5e76\u6ca1\u6709\u6bd4\u53cc\u6307\u9488\u5feb\uff0c\u5374\u66f4\u5360\u5185\u5b58\u3002\u56e0\u6b64\u8fd9\u9898\u6700\u4f73\u65b9\u6cd5\u662f\u53cc\u6307\u9488\u3002"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/en/dual-pointers/3sum"},"3Sum"),"\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\u4e14 k>2, \u5148\u6392\u5e8f\uff0c\u7136\u540e\u7528\u53cc\u6307\u9488\u6216\u8005 HashSet \u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u3002"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/en/dual-pointers/4sum"},"4Sum"),"\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\u4e14 k>2, \u5148\u6392\u5e8f\uff0c\u7136\u540e\u7528\u53cc\u6307\u9488\u6216\u8005 HashSet \u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u3002"),(0,s.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/array/2sum"},"2Sum")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/dual-pointers/2sum-ii"},"2Sum II")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/dual-pointers/3sum"},"3Sum")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/dual-pointers/3sum-closest"},"3Sum Closest")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/en/array/4sum-ii"},"4Sum II"))))}y.isMDXComponent=!0}}]);