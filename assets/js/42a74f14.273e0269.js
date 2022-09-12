"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9738],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=l(t),u=r,d=h["".concat(p,".").concat(u)]||h[u]||c[u]||i;return t?a.createElement(d,s(s({ref:n},m),{},{components:t})):a.createElement(d,s({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={title:"H-Index"},s=void 0,o={unversionedId:"sorting/counting-sort/h-index",id:"sorting/counting-sort/h-index",title:"H-Index",description:"\u63cf\u8ff0",source:"@site/docs/sorting/counting-sort/h-index.md",sourceDirName:"sorting/counting-sort",slug:"/sorting/counting-sort/h-index",permalink:"/sorting/counting-sort/h-index",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/counting-sort/h-index.md",tags:[],version:"current",frontMatter:{title:"H-Index"},sidebar:"someSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/sorting/counting-sort/"},next:{title:"\u7b80\u4ecb",permalink:"/sorting/radix-sort/"}},p={},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1 \u5168\u6392\u5e8f",id:"\u4ee3\u7801-1-\u5168\u6392\u5e8f",level:3},{value:"\u4ee3\u7801 2 \u8ba1\u6570\u6392\u5e8f",id:"\u4ee3\u7801-2-\u8ba1\u6570\u6392\u5e8f",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index."),(0,r.kt)("p",null,"According to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/H-index"},"definition of h-index on Wikipedia"),': "A scientist has index h if h of his/her N papers have at least h citations each, and the other N \u2212 h papers have no more than h citations each."'),(0,r.kt)("p",null,"For example, given ",(0,r.kt)("inlineCode",{parentName:"p"},"citations = [3, 0, 6, 1, 5]"),", which means the researcher has 5 papers in total and each of them had received ",(0,r.kt)("inlineCode",{parentName:"p"},"3, 0, 6, 1, 5")," citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If there are several possible values for ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),", the maximum one is taken as the h-index."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"H-Index \u7684\u542b\u4e49\u662f\uff0c\u5982\u679c\u4e00\u4e2a\u4eba\u53d1\u8868\u7684\u6240\u6709\u8bba\u6587\u4e2d\uff0c\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"h"),"\u7bc7\u8bba\u6587\u5206\u522b\u88ab\u5f15\u7528\u4e86\u81f3\u5c11",(0,r.kt)("inlineCode",{parentName:"p"},"h"),"\u6b21\uff0c\u90a3\u4e48\u4ed6\u7684 H-Index \u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"h"),"\u3002"),(0,r.kt)("p",null,"\u601d\u8def\u4e00\uff1a\u5148\u4ece\u5927\u5230\u5c0f\u6392\u5e8f\uff0c\u7136\u540e\u4ece\u524d\u5f80\u540e\u626b\u63cf\uff0c\u5982\u679c\u5f53\u524d\u6587\u7ae0\u6570\uff08\u5373\u5f53\u524d\u4e0b\u6807+1\uff09\u7b49\u4e8e\u503c\u672c\u8eab\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u6587\u7ae0\u6570\u4f5c\u4e3a h-index\uff1b\u5982\u679c\u5f53\u524d\u6587\u7ae0\u6570\u5927\u4e8e\u503c\u672c\u8eab\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u6587\u7ae0\u6570-1 \u4f5c\u4e3a H-Index, \u56e0\u4e3a\u5f53\u524d\u6587\u7ae0\u7684\u5f15\u7528\u6570\u5c0f\u4e8e\u5f53\u524d\u6587\u7ae0\u6570\uff0c\u4e0d\u80fd\u7b97\u5728\u5185\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"log"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mrow",{parentName:"mrow"}),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n\\log{}n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mop"},"lo",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\u3002"),(0,r.kt)("p",null,"\u601d\u8def\u4e8c\uff1a\u8ddf\u601d\u8def\u4e00\u7c7b\u4f3c\uff0c\u4e0d\u8fc7\u6392\u5e8f\u7b97\u6cd5\u6362\u6210\u4e86\u8ba1\u6570\u6392\u5e8f\u3002\u6709\u4e00\u4e2a\u5c0f\u6280\u5de7\uff0c\u56e0\u4e3a H-Index \u6700\u5927\u4e0d\u53ef\u80fd\u8d85\u8fc7\u8bba\u6587\u7efc\u8ff0\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u9700\u8981\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"n+1"),"\u7684\u6570\u7ec4\uff0c\u5982\u679c\u67d0\u7bc7\u8bba\u6587\u7684\u5f15\u7528\u6570\u8d85\u8fc7\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"\uff0c\u5c31\u5c06\u5176\u5f53\u505a",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801-1-\u5168\u6392\u5e8f"},"\u4ee3\u7801 1 \u5168\u6392\u5e8f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// H-Index\n// Time complexity: O(nlogn), Space complexity: O(1)\npublic class Solution {\n    public int hIndex(int[] citations) {\n        Arrays.sort(citations);\n        reverse(citations);\n        for (int i = 0; i < citations.length; ++i) {\n            if (i + 1 == citations[i]) return i+1;\n            if (i + 1 > citations[i]) return i;\n        }\n        return citations.length;\n    }\n    private static void reverse(int[] nums) {\n        int left = 0;\n        int right = nums.length - 1;\n        while (left < right) {\n            final int tmp = nums[left];\n            nums[left] = nums[right];\n            nums[right] = tmp;\n            ++left;\n            --right;\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"\u4ee3\u7801-2-\u8ba1\u6570\u6392\u5e8f"},"\u4ee3\u7801 2 \u8ba1\u6570\u6392\u5e8f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// H-Index\n// Time complexity: O(n), Space complexity: O(n)\npublic class Solution {\n    public int hIndex(int[] citations) {\n        final int n = citations.length + 1;\n        final int[] histogram = new int[n+1];\n\n        for (int x : citations) {\n            ++histogram[x > n ? n : x];\n        }\n\n        int sum = 0; // current number of papers\n        for (int i = n; i > 0; --i) {\n            sum += histogram[i];\n            if (sum >= i) {\n                return i;\n            }\n        }\n        return 0;\n    }\n}\n")),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/search/h-index-ii"},"H-Index II"))))}c.isMDXComponent=!0}}]);