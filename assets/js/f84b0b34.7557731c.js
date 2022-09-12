"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9063],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||r;return t?i.createElement(k,l(l({ref:n},m),{},{components:t})):i.createElement(k,l({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const r={title:"Patching Array"},l=void 0,p={unversionedId:"greedy/patching-array",id:"greedy/patching-array",title:"Patching Array",description:"\u63cf\u8ff0",source:"@site/docs/greedy/patching-array.md",sourceDirName:"greedy",slug:"/greedy/patching-array",permalink:"/greedy/patching-array",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/greedy/patching-array.md",tags:[],version:"current",frontMatter:{title:"Patching Array"},sidebar:"someSidebar",previous:{title:"Container With Most Water",permalink:"/greedy/container-with-most-water"},next:{title:"Task Scheduler",permalink:"/greedy/task-scheduler"}},o={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given a sorted positive integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", add/patch elements to the array such that any number in range ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, n]")," inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nums = [1, 3], n = 6"),", return 1."),(0,a.kt)("p",null,"Combinations of ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," are ",(0,a.kt)("inlineCode",{parentName:"p"},"[1], [3], [1,3]"),", which form possible sums of: ",(0,a.kt)("inlineCode",{parentName:"p"},"1, 3, 4"),"."),(0,a.kt)("p",null,"Now if we add/patch ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," to nums, the combinations are: ",(0,a.kt)("inlineCode",{parentName:"p"},"[1], [2], [3], [1,3], [2,3], [1,2,3]"),"."),(0,a.kt)("p",null,"Possible sums are ",(0,a.kt)("inlineCode",{parentName:"p"},"1, 2, 3, 4, 5, 6"),", which now covers the range ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 6]"),"."),(0,a.kt)("p",null,"So we only need 1 patch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nums = [1, 5, 10], n = 20"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,a.kt)("p",null,"The two patches can be ",(0,a.kt)("inlineCode",{parentName:"p"},"[2, 4]"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nums = [1, 2, 2], n = 5"),",  return 0."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u9996\u5148\u53ef\u4ee5\u786e\u5b9a\u7684\u662f\uff0c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nums"),"\u4e2d\u5fc5\u7136\u5305\u542b1\uff0c\u5982\u679c\u4e0d\u5305\u542b1\uff0c\u90a3\u4e48",(0,a.kt)("inlineCode",{parentName:"li"},"[1,n]"),"\u8fd9\u4e2a\u8303\u56f4\u4e2d\u76841\u5c31\u6ca1\u6cd5\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u6b21\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e0d\u80fd\u91cd\u590d\u4f7f\u7528\uff0c\u5982\u679c\u5141\u8bb8\u91cd\u590d\u4f7f\u7528\uff0c\u90a3\u4e48\u628a1\u91cd\u590d\u591a\u6b21\uff0c\u5c31\u53ef\u4ee5\u7ec4\u6210\u4efb\u610f\u6574\u6570\u3002")),(0,a.kt)("p",null,"\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"miss"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"[0,n]"),"\u4e2d\u7f3a\u5c11\u7684\u6700\u5c0f\u6574\u6570\uff0c\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"[0,miss)"),"\u8303\u56f4\u5185\u7684\u4efb\u610f\u6574\u6570\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6570\u7ec4\u4e2d\u6709\u67d0\u4e2a\u6574\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"x<=miss"),", \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u628a",(0,a.kt)("inlineCode",{parentName:"li"},"[0,miss)"),"\u533a\u95f4\u7684\u6240\u6709\u6574\u6570\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\uff0c\u533a\u95f4\u53d8\u6210\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"[x, miss+x)"),"\uff0c\u7531\u4e8e\u533a\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"[0,miss)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"[x, miss+x)"),"\u91cd\u53e0\uff0c\u4e24\u4e2a\u533a\u95f4\u53ef\u4ee5\u65e0\u7f1d\u8fde\u63a5\u8d77\u6765\uff0c\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u628a\u533a\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"[0,miss)"),"\u6269\u5c55\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"[0, miss+x)"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6570\u7ec4\u4e2d\u4e0d\u5b58\u5728\u5c0f\u4e8e\u6216\u7b49\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"miss"),"\u7684\u5143\u7d20\uff0c\u5219\u533a\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"[0,miss)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"[x, miss+x)")," \u8131\u8282\u4e86\uff0c\u8fde\u4e0d\u8d77\u6765\u3002\u6b64\u65f6\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u6570\uff0c\u6700\u5927\u9650\u5ea6\u7684\u6269\u5c55\u533a\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"[0, miss)"),"\u3002\u90a3\u6dfb\u52a0\u54ea\u4e2a\u6570\u5462\uff1f\u5f53\u7136\u662f\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"miss"),"\u672c\u8eab\uff0c\u8fd9\u6837\u533a\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"[0,miss)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"[miss, miss+miss)"),"\u6070\u597d\u53ef\u4ee5\u65e0\u7f1d\u62fc\u63a5\u3002")),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"nums=[1, 2, 4, 13, 43]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"n=100"),"\uff0c\u6211\u4eec\u9700\u8981\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"[1,100]"),"\u5185\u7684\u6570\u90fd\u80fd\u591f\u7ec4\u5408\u51fa\u6765\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u6570\u5b57",(0,a.kt)("inlineCode",{parentName:"p"},"1,2,4"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u7ec4\u5408\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 8)"),"\u5185\u7684\u6240\u6709\u6570\uff0c\u4f46\u65e0\u6cd5\u7ec4\u5408\u51fa8\uff0c\u7531\u4e8e\u4e0b\u4e00\u4e2a\u6570\u662f13\uff0c\u6bd48\u5927\uff0c\u6839\u636e\u89c4\u52192\uff0c\u6211\u4eec\u6dfb\u52a08\uff0c\u628a\u533a\u95f4\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"[0,8)"),"\u6269\u5c55\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"[0,16)"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u4e00\u4e2a\u6570\u662f13\uff0c\u6bd416\u5c0f\uff0c\u6839\u636e\u89c4\u52191\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u533a\u95f4\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"[0,16)"),"\u6269\u5c55\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"[0,29)"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u4e00\u4e2a\u6570\u662f43\uff0c\u6bd429\u5927\uff0c\u6839\u636e\u89c4\u52192\uff0c\u6dfb\u52a029\uff0c\u628a\u533a\u95f4\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"[0,29)"),"\u6269\u5927\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"[0,58)"),"\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e43\u6bd458\u5c0f\uff0c\u6839\u636e\u89c4\u52191\uff0c\u53ef\u4ee5\u628a\u533a\u95f4\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"[0,58)"),"\u6269\u5c55\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"[0,101)"),"\uff0c\u521a\u597d\u8986\u76d6\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"[1,100]"),"\u5185\u7684\u6240\u6709\u6570\u3002"),(0,a.kt)("p",null,"\u6700\u7ec8\u7ed3\u679c\u662f\u6dfb\u52a02\u4e2a\u6570\uff0c8\u548c29\uff0c\u5c31\u53ef\u4ee5\u7ec4\u5408\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"[1,100]"),"\u5185\u7684\u6240\u6709\u6574\u6570\u3002"),(0,a.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/discuss/82822/solution-explanation"},"https://leetcode.com/discuss/82822/solution-explanation")),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Patching Array\n// Time complexity: O(n), Space complexity: O(1)\npublic class Solution {\n    public int minPatches(int[] nums, int n) {\n        long miss = 1;\n        int added = 0;\n        int i = 0;\n        while (miss <= n) {\n            if (i < nums.length && nums[i] <= miss) {\n                miss += nums[i++];\n            } else {\n                miss += miss;\n                ++added;\n            }\n        }\n        return added;\n    }\n}\n")))}d.isMDXComponent=!0}}]);