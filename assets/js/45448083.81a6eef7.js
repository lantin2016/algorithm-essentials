"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5235],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),c=i(a),d=s,N=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(N,l(l({ref:t},o),{},{components:a})):n.createElement(N,l({ref:t},o))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,l[1]=m;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),s=a(7294),r=a(6010),l=a(2389),m=a(7392),p=a(7094),i=a(2466);const o="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:c,defaultValue:d,values:N,groupId:k,className:h}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=N?N:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,m.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:w}=(0,p.U)(),[x,j]=(0,s.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=k){const e=b[k];null!=e&&e!==x&&f.some((t=>t.value===e))&&j(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),n=f[a].value;n!==x&&(E(t),j(n),null!=k&&w(k,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var s;const t=O.indexOf(e.currentTarget)-1;a=null!=(s=O[t])?s:O[O.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",o)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:T,onClick:T},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),l?(0,s.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,l.Z)();return s.createElement(c,(0,n.Z)({key:String(t)},e))}},9586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>m,metadata:()=>i,toc:()=>u});var n=a(7462),s=(a(7294),a(3905)),r=a(5488),l=a(5162);const m={title:"Majority Element II"},p=void 0,i={unversionedId:"array/majority-element-ii",id:"array/majority-element-ii",title:"Majority Element II",description:"\u63cf\u8ff0",source:"@site/docs/array/majority-element-ii.md",sourceDirName:"array",slug:"/array/majority-element-ii",permalink:"/array/majority-element-ii",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/array/majority-element-ii.md",tags:[],version:"current",frontMatter:{title:"Majority Element II"},sidebar:"someSidebar",previous:{title:"Majority Element",permalink:"/array/majority-element"},next:{title:"Rotate Array",permalink:"/array/rotate-array"}},o={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.kt)("p",null,"Given an integer array of size ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", find all elements that appear more than ",(0,s.kt)("inlineCode",{parentName:"p"},"\u230a n/3 \u230b")," times."),(0,s.kt)("p",null,"Follow-up: Could you solve the problem in linear time and in O(1) space?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[3,2,3]",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": ","[3]")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[1]"," > ",(0,s.kt)("strong",{parentName:"p"},"Output"),": ","[1]")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[1,2]"," > ",(0,s.kt)("strong",{parentName:"p"},"Output"),": ","[1,2]")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 <= nums.length <= 5 ","*"," ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"4"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"4"))))))))))))),(0,s.kt)("li",{parentName:"ul"},"-",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"9"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9"))))))))))))," <= nums","[i]"," <= ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"9"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9")))))))))))))),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u957f\u5ea6\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"\u7684\u6570\u7ec4\uff0c\u6211\u4eec\u77e5\u9053\u4e0b\u9762\u4e00\u4e9b\u7ed3\u8bba\u662f\u6210\u7acb\u7684\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6700\u591a\u53ea\u6709",(0,s.kt)("strong",{parentName:"li"},"\u4e00\u4e2a"),"\u5143\u7d20\u80fd\u51fa\u73b0\u8d85\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"li"},"\u230an/2\u230b")," \u6b21."),(0,s.kt)("li",{parentName:"ul"},"\u6700\u591a\u53ea\u6709",(0,s.kt)("strong",{parentName:"li"},"\u4e24\u4e2a"),"\u5143\u7d20\u80fd\u51fa\u73b0\u8d85\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"li"},"\u230an/3\u230b")," \u6b21."),(0,s.kt)("li",{parentName:"ul"},"\u6700\u591a\u53ea\u6709",(0,s.kt)("strong",{parentName:"li"},"\u4e09\u4e2a"),"\u5143\u7d20\u80fd\u51fa\u73b0\u8d85\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"li"},"\u230an/4\u230b")," \u6b21.")),(0,s.kt)("p",null,"\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,s.kt)("p",null,"Boyer-Moore \u6295\u7968\u7b97\u6cd5\u5c31\u662f\u4f9d\u636e\u4e0a\u9762\u7684\u539f\u7406\u800c\u5b9e\u73b0\u7684\u3002"),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)(r.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Majority Element II\n# Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution(object):\n    def majorityElement(self, nums: List[int])->List[int]:\n        # 1st pass\n        count1, count2 = 0, 0\n        # candidates must be initalized to different values\n        candidate1, candidate2 = 0, 1\n\n        for num in nums:\n            if candidate1 == num:\n                count1 += 1\n            elif candidate2 == num:\n                count2 += 1\n            elif count1 == 0:\n                candidate1 = num\n                count1 = 1\n            elif count2 == 0:\n                candidate2 = num\n                count2 = 1\n            else:\n                count1 -= 1\n                count2 -= 1\n\n        # 2nd pass\n        result = []\n        for c in [candidate1, candidate2]:\n            if nums.count(c) > len(nums)/3:\n                result.append(c)\n\n        return result\n"))),(0,s.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// Majority Element II\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\n    public List<Integer> majorityElement(int[] nums) {\n        // 1st pass\n        int count1 = 0, count2 = 0;\n        // candidates must be initalized to different values\n        int candidate1 = 0, candidate2 = 1;\n\n        for (int num : nums) {\n            if (candidate1 == num) {\n                count1++;\n            } else if (candidate2 == num) {\n                count2++;\n            } else if (count1 == 0) {\n                candidate1 = num;\n                count1 = 1;\n            } else if (count2 == 0) {\n                candidate2 = num;\n                count2 = 1;\n            } else {\n                count1--;\n                count2--;\n            }\n        }\n\n        // 2nd pass\n        List<Integer> result = new ArrayList<>();\n        count1 = 0;\n        count2 = 0;\n        for (int num : nums) {\n            if (candidate1 == num) count1++;\n            if (candidate2 == num) count2++;\n        }\n\n        if (count1 > nums.length/3) result.add(candidate1);\n        if (count2 > nums.length/3) result.add(candidate2);\n\n        return result;\n    }\n}\n"))),(0,s.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Majority Element II\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\npublic:\n    vector<int> majorityElement(const vector<int>& nums) {\n        // 1st pass\n        int count1 = 0, count2 = 0;\n        // candidates must be initalized to different values\n        int candidate1 = 0, candidate2 = 1;\n\n        for (int num : nums) {\n            if (candidate1 == num) {\n                count1++;\n            } else if (candidate2 == num) {\n                count2++;\n            } else if (count1 == 0) {\n                candidate1 = num;\n                count1 = 1;\n            } else if (count2 == 0) {\n                candidate2 = num;\n                count2 = 1;\n            } else {\n                count1--;\n                count2--;\n            }\n        }\n\n        // 2nd pass\n        vector<int> result;\n        for (int c : vector<int>{candidate1, candidate2}) {\n            if (std::count(nums.begin(), nums.end(), c) > nums.size()/3) {\n                result.push_back(c);\n            }\n        }\n\n        return result;\n    }\n};\n")))),(0,s.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/majority-element"},"Majority Element"))))}d.isMDXComponent=!0}}]);