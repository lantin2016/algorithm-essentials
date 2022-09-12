"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9177],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):m(m({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,r=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(n),k=s,h=c["".concat(i,".").concat(k)]||c[k]||o[k]||r;return n?a.createElement(h,m(m({ref:e},u),{},{components:n})):a.createElement(h,m({ref:e},u))}));function k(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=n.length,m=new Array(r);m[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:s,m[1]=l;for(var p=2;p<r;p++)m[p]=n[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7294),s=n(6010);const r="tabItem_Ymn6";function m(t){let{children:e,hidden:n,className:m}=t;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,m),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>k});var a=n(7462),s=n(7294),r=n(6010),m=n(2389),l=n(7392),i=n(7094),p=n(2466);const u="tabList__CuJ",o="tabItem_LNqP";function c(t){var e,n;const{lazy:m,block:c,defaultValue:k,values:h,groupId:N,className:g}=t,d=s.Children.map(t.children,(t=>{if((0,s.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:d.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),v=(0,l.l)(f,((t,e)=>t.value===e.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===k?k:null!=(e=null!=k?k:null==(n=d.find((t=>t.props.default)))?void 0:n.props.value)?e:d[0].props.value;if(null!==y&&!f.some((t=>t.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:b}=(0,i.U)(),[S,I]=(0,s.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=N){const t=w[N];null!=t&&t!==S&&f.some((e=>e.value===t))&&I(t)}const L=t=>{const e=t.currentTarget,n=x.indexOf(e),a=f[n].value;a!==S&&(O(e),I(a),null!=N&&b(N,String(a)))},T=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{var a;const e=x.indexOf(t.currentTarget)+1;n=null!=(a=x[e])?a:x[0];break}case"ArrowLeft":{var s;const e=x.indexOf(t.currentTarget)-1;n=null!=(s=x[e])?s:x[x.length-1];break}}null==(e=n)||e.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},f.map((t=>{let{value:e,label:n,attributes:m}=t;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:t=>x.push(t),onKeyDown:T,onFocus:L,onClick:L},m,{className:(0,r.Z)("tabs__item",o,null==m?void 0:m.className,{"tabs__item--active":S===e})}),null!=n?n:e)}))),m?(0,s.cloneElement)(d.filter((t=>t.props.value===S))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},d.map(((t,e)=>(0,s.cloneElement)(t,{key:e,hidden:t.props.value!==S})))))}function k(t){const e=(0,m.Z)();return s.createElement(c,(0,a.Z)({key:String(e)},t))}},9716:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(7462),s=(n(7294),n(3905)),r=n(5488),m=n(5162);const l={title:"4Sum"},i=void 0,p={unversionedId:"array/4sum",id:"array/4sum",title:"4Sum",description:"\u63cf\u8ff0",source:"@site/docs/array/4sum.md",sourceDirName:"array",slug:"/array/4sum",permalink:"/array/4sum",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/array/4sum.md",tags:[],version:"current",frontMatter:{title:"4Sum"},sidebar:"someSidebar",previous:{title:"3Sum Smaller",permalink:"/array/3sum-smaller"},next:{title:"Longest Consecutive Sequence",permalink:"/array/longest-consecutive-sequence"}},u={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u53cc\u6307\u9488",id:"\u53cc\u6307\u9488",level:4},{value:"HashSet",id:"hashset",level:4},{value:"kSum \u95ee\u9898\u603b\u7ed3",id:"ksum-\u95ee\u9898\u603b\u7ed3",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:o};function k(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.kt)("p",null,"Given an array ",(0,s.kt)("inlineCode",{parentName:"p"},"S")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," integers, are there elements ",(0,s.kt)("inlineCode",{parentName:"p"},"a, b, c"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"d")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"S")," such that ",(0,s.kt)("inlineCode",{parentName:"p"},"a + b + c + d = target"),"? Find all unique quadruplets in the array which gives the sum of target."),(0,s.kt)("p",null,"Note:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Elements in a quadruplet ",(0,s.kt)("inlineCode",{parentName:"li"},"(a,b,c,d)")," must be in non-descending order. (ie, ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\leq b \\leq c \\leq d")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),")"),(0,s.kt)("li",{parentName:"ul"},"The solution set must not contain duplicate quadruplets.")),(0,s.kt)("p",null,"For example, given array ",(0,s.kt)("inlineCode",{parentName:"p"},"S = {1 0 -1 0 -2 2}"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"target = 0"),"."),(0,s.kt)("p",null,"A solution set is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"(-1,  0, 0, 1)\n(-2, -1, 1, 2)\n(-2,  0, 0, 2)\n")),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"\u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\uff0c\u590d\u6742\u5ea6 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u4f1a\u8d85\u65f6\u3002"),(0,s.kt)("p",null,"\u53ef\u4ee5\u7528\u4e00\u4e2a hashmap \u5148\u7f13\u5b58\u4e24\u4e2a\u6570\u7684\u548c\uff0c\u6700\u7ec8\u590d\u6742\u5ea6",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002\u8fd9\u4e2a\u7b56\u7565\u4e5f\u9002\u7528\u4e8e 3Sum \u3002"),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)("h4",{id:"\u53cc\u6307\u9488"},"\u53cc\u6307\u9488"),(0,s.kt)(r.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(m.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# 4Sum\n# \u53cc\u6307\u9488\n# Time Complexity: O(n^3)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        nums.sort()\n        return self.kSum(nums, 0, target, 4)\n\n    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:\n        result = []\n        low, high = start, len(nums)-1\n        while low < high:\n            sum = nums[low] + nums[high]\n            if sum < target:\n                low += 1\n            elif sum > target:\n                high -= 1\n            else:\n                result.append([nums[low], nums[high]])\n                low += 1\n                high -= 1\n                while low < high and nums[low] == nums[low-1]:\n                    low += 1\n                while low < high and nums[high] == nums[high+1]:\n                    high -= 1\n        return result\n\n    def kSum(self, nums: List[int], start: int, target: int, k: int) -> List[List[int]]:\n        result = []\n        if k == 2:\n            return self.twoSumII(nums, start, target)\n        if start + k > len(nums) or nums[start] * k > target or nums[-1] * k < target:\n            return result\n        for i in range(start, len(nums)):\n            if i == start or nums[i] != nums[i-1]:\n                for lst in self.kSum(nums, i+1, target-nums[i], k-1):\n                    result.append([nums[i]] + lst)\n        return result\n"))),(0,s.kt)(m.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\npublic class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        Arrays.sort(nums);\n        return kSum(nums, 0, target, 4);\n    }\n    public List<List<Integer>> kSum(int[] nums, int start, int target, int k) {\n        List<List<Integer>> result = new ArrayList<>();\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k) {\n            return result;\n        }\n        for (int i = start; i < nums.length; ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (var list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.add(nums[i]);\n                    result.add(list);\n                }\n            }\n        }\n        return result;\n    }\n    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        int low = start, high = nums.length - 1;\n        while (low < high) {\n            int sum = nums[low] + nums[high];\n            if (sum < target) {\n                ++low;\n            } else if(sum > target) {\n                --high;\n            } else {\n                result.add(new ArrayList<>(Arrays.asList(nums[low++], nums[high--])));\n                while(low < high && nums[low] == nums[low-1]) ++low;\n                while(low < high && nums[high] == nums[high+1]) --high;\n            }\n        }\n        return result;\n    }\n}\n"))),(0,s.kt)(m.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\nclass Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        sort(begin(nums), end(nums));\n        return kSum(nums, 0, target, 4);\n    }\n    vector<vector<int>> kSum(vector<int>& nums, int start, int target, int k) {\n        vector<vector<int>> result;\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.size() || nums[start] * k > target || target > nums.back() * k) {\n            return result;\n        }\n\n        for (int i = start; i < nums.size(); ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (auto &list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.push_back(nums[i]);\n                    result.push_back(list);\n                }\n            }\n        }\n        return result;\n    }\n    vector<vector<int>> twoSumII(const vector<int>& nums, int start, int target) {\n        vector<vector<int>> result;\n        int low = start, high = nums.size() - 1;\n        while (low < high) {\n            int sum = nums[low] + nums[high];\n            if (sum < target) {\n                ++low;\n            } else if (sum > target) {\n                --high;\n            } else {\n                result.push_back({ nums[low++], nums[high--] });\n                while(low < high && nums[low] == nums[low-1]) ++low;\n                while(low < high && nums[high] == nums[high+1]) --high;\n            }\n        }\n        return result;\n    }\n};\n")))),(0,s.kt)("h4",{id:"hashset"},"HashSet"),(0,s.kt)("p",null,"\u5176\u4ed6\u4ee3\u7801\u5b8c\u5168\u4e00\u6837\uff0c\u4ec5\u4ec5\u662f",(0,s.kt)("inlineCode",{parentName:"p"},"twoSumII()"),"\u4e0d\u4e00\u6837\u3002"),(0,s.kt)(r.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(m.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# 4Sum\n# \u5148\u6392\u5e8f\uff0c\u7136\u540etwoSumII()\u7528HashSet\u5b9e\u73b0\n# Time Complexity: O(n^3)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        nums.sort()\n        return self.kSum(nums, 0, target, 4)\n\n    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:\n        result = []\n        s = set()\n        for i in range(start, len(nums)):\n            if len(result) == 0 or result[-1][1] != nums[i]:\n                complement = target - nums[i]\n                if complement in s:\n                    result.append([complement, nums[i]])\n            s.add(nums[i])\n        return result\n\n    def kSum(self, nums: List[int], start: int, target: int, k: int) -> List[List[int]]:\n        result = []\n        if k == 2:\n            return self.twoSumII(nums, start, target)\n        if start + k > len(nums) or nums[start] * k > target or nums[-1] * k < target:\n            return result\n        for i in range(start, len(nums)-k+1):\n            if i == start or nums[i] != nums[i-1]:\n                for lst in self.kSum(nums, i+1, target-nums[i], k-1):\n                    result.append([nums[i]] + lst)\n        return result\n"))),(0,s.kt)(m.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540etwoSumII()\u7528HashSet\u5b9e\u73b0\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\npublic class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        Arrays.sort(nums);\n        return kSum(nums, 0, target, 4);\n    }\n    public List<List<Integer>> kSum(int[] nums, int start, int target, int k) {\n        List<List<Integer>> result = new ArrayList<>();\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k) {\n            return result;\n        }\n        for (int i = start; i < nums.length; ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (var list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.add(nums[i]);\n                    result.add(list);\n                }\n            }\n        }\n        return result;\n    }\n    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        Set<Integer> s = new HashSet<>();\n        for (int i = start; i < nums.length; ++i) {\n            if (result.isEmpty() || result.get(result.size() - 1).get(1) != nums[i]) {\n                int complement = target - nums[i];\n                if (s.contains(complement)) {\n                    result.add(new ArrayList<>(Arrays.asList(complement, nums[i])));\n                }\n            }\n            s.add(nums[i]);\n        }\n        return result;\n    }\n}\n"))),(0,s.kt)(m.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(k)\nclass Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        sort(begin(nums), end(nums));\n        return kSum(nums, 0, target, 4);\n    }\n    vector<vector<int>> kSum(vector<int>& nums, int start, int target, int k) {\n        vector<vector<int>> result;\n        if (k == 2) {\n            return twoSumII(nums, start, target);\n        }\n        if (start+k > nums.size() || nums[start] * k > target || target > nums.back() * k) {\n            return result;\n        }\n\n        for (int i = start; i < nums.size(); ++i) {\n            if (i == start || nums[i - 1] != nums[i]) {\n                for (auto &list : kSum(nums, i + 1, target - nums[i], k - 1)) {\n                    list.push_back(nums[i]);\n                    result.push_back(list);\n                }\n            }\n        }\n        return result;\n    }\n    vector<vector<int>> twoSumII(vector<int>& nums, int start, int target) {\n        vector<vector<int>> result;\n        unordered_set<int> s;\n        for (auto i = start; i < nums.size(); ++i) {\n            if (result.empty() || result.back()[1] != nums[i]) {\n                int complement = target - nums[i];\n                if (s.count(complement)) {\n                    result.push_back({ complement, nums[i]});\n                }\n            }\n            s.insert(nums[i]);\n        }\n        return result;\n    }\n};\n")))),(0,s.kt)("h3",{id:"ksum-\u95ee\u9898\u603b\u7ed3"},"kSum \u95ee\u9898\u603b\u7ed3"),(0,s.kt)("p",null,"\u5bf9\u4e8e kSum \u8fd9\u7c7b\u95ee\u9898\uff0c"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5982\u679c\u6c42\u7684\u662f\u5177\u4f53\u7684\u4f4d\u7f6e\uff0c\u5c31\u4e0d\u80fd sort\uff0c\u56e0\u4e3a\u6392\u5e8f\u540e\u4f4d\u7f6e\u4fe1\u606f\u5c31\u4e22\u5931\u4e86"),(0,s.kt)("li",{parentName:"ol"},"\u5982\u679c\u6c42\u4f4d\u7f6e\uff0c\u7528 HashMap, \u6c42\u7ec4\u5408\u672c\u8eab\uff0c\u7528 HashSet \u5c31\u8db3\u591f\u4e86"),(0,s.kt)("li",{parentName:"ol"},"\u5982\u679c\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\u4e14 k>2, \u65e0\u8bba\u5982\u4f55\uff0c\u5148\u6392\u5e8f\uff0c\u7136\u540e\u518d\u8003\u8651\u7528\u53cc\u6307\u9488\u6216\u8005 HashSet"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"twoSumII()"),"\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u901a\u7528\u7684\u5e95\u5c42\u51fd\u6570\uff0c\u5b83\u5f80\u5f80\u6709\u4e24\u79cd\u5b9e\u73b0\uff0c\u53cc\u6307\u9488\u6216\u8005 HashSet(HashMap)"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"twoSumII()"),"\u7684 HashSet \u5b9e\u73b0\uff0c\u6bd4\u8f83\u76f4\u89c2\u7684\u662f\u4e24\u6b21\u904d\u5386\uff0c\u53ef\u4ee5\u4f18\u5316\u6210\u5355\u6b21\u904d\u5386\u3002")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/array/2sum"},"2Sum"),"\u6c42\u7684\u662f\u4f4d\u7f6e\uff0c\u56e0\u6b64\u4e0d\u80fd sort\u3002\u7528\u4e24\u8f6e\u5faa\u73af\u66b4\u529b\u641c\u7d22\uff0c\u65f6\u95f4\u590d\u6742\u5ea6",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", \u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff1b\u5982\u679c\u7528\u4e00\u4e2a HashMap \u6765\u7f13\u5b58\u4f4d\u7f6e\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u53ef\u4ee5\u964d\u4f4e\u5230 O(n)\uff0c\u4ee3\u4ef7\u662f\u7a7a\u95f4\u590d\u6742\u5ea6\u53d8\u4e3a O(n)\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/array/2sum-ii"},"2Sum II"),"\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"nums"),"\u6570\u7ec4\u5df2\u6392\u597d\u5e8f\uff0c\u56e0\u6b64\u5c31\u4e0d\u5fc5\u518d\u6392\u5e8f\u4e86\uff0c\u76f4\u63a5\u7528\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff1b\u4e5f\u53ef\u4ee5\u7528 HashSet\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u5e76\u6ca1\u6709\u6bd4\u53cc\u6307\u9488\u5feb\uff0c\u5374\u66f4\u5360\u5185\u5b58\u3002\u56e0\u6b64\u8fd9\u9898\u6700\u4f73\u65b9\u6cd5\u662f\u53cc\u6307\u9488\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/array/3sum"},"3Sum"),"\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\u4e14 k>2, \u5148\u6392\u5e8f\uff0c\u7136\u540e\u7528\u53cc\u6307\u9488\u6216\u8005 HashSet \u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/array/4sum"},"4Sum"),"\u6c42\u7684\u662f\u7ec4\u5408\u672c\u8eab\u4e14 k>2, \u5148\u6392\u5e8f\uff0c\u7136\u540e\u7528\u53cc\u6307\u9488\u6216\u8005 HashSet \u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u3002"),(0,s.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/2sum"},"2Sum")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/2sum-ii"},"2Sum II")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/3sum"},"3Sum")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/3sum-closest"},"3Sum Closest")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/4sum-ii"},"4Sum II"))))}k.isMDXComponent=!0}}]);