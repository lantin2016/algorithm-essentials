"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2807],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(t),y=a,d=c["".concat(p,".").concat(y)]||c[y]||g[y]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},29386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(58168),a=(t(96540),t(15680));const i={title:"Repeated DNA Sequences"},l=void 0,s={unversionedId:"bitwise-operations/repeated-dna-sequences",id:"bitwise-operations/repeated-dna-sequences",title:"Repeated DNA Sequences",description:"\u63cf\u8ff0",source:"@site/docs/bitwise-operations/repeated-dna-sequences.md",sourceDirName:"bitwise-operations",slug:"/bitwise-operations/repeated-dna-sequences",permalink:"/en/bitwise-operations/repeated-dna-sequences",draft:!1,tags:[],version:"current",frontMatter:{title:"Repeated DNA Sequences"},sidebar:"docs",previous:{title:"Reverse Bits",permalink:"/en/bitwise-operations/reverse-bits"},next:{title:"Number of 1 Bits",permalink:"/en/bitwise-operations/number-of-1-bits"}},p={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1 \u7b80\u5355\u7c97\u66b4",id:"\u89e3\u6cd5-1-\u7b80\u5355\u7c97\u66b4",level:3},{value:"\u89e3\u6cd5 2 \u5b8c\u7f8e\u54c8\u5e0c",id:"\u89e3\u6cd5-2-\u5b8c\u7f8e\u54c8\u5e0c",level:3}],u={toc:o},c="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,'All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.'),(0,a.yg)("p",null,"Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule."),(0,a.yg)("p",null,"For example,"),(0,a.yg)("p",null,"Given s = ",(0,a.yg)("inlineCode",{parentName:"p"},'"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'),","),(0,a.yg)("p",null,"Return:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'["AAAAACCCCC", "CCCCCAAAAA"]'),"."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u9996\u5148\u80fd\u60f3\u5230\u4e00\u4e2a\u7b80\u5355\u76f4\u63a5\u7684\u65b9\u6cd5\uff0c\u7528\u4e00\u4e2a\u957f\u5ea6\u4e3a 10 \u7684\u7a97\u53e3\uff0c\u4ece\u5de6\u5230\u53f3\u626b\u63cf\uff0c\u653e\u5165 HashMap\uff0c\u5e76\u628a\u8ba1\u6570\u5668\u589e\u4e00\u3002\u6700\u540e\uff0c\u628a HashMap \u4e2d\u6240\u6709\u8ba1\u6570\u5668\u5927\u4e8e 1 \u7684\u5b57\u7b26\u4e32\u8f93\u51fa\u6765\u3002\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,a.yg)("inlineCode",{parentName:"p"},"O(n)"),", \u7531\u4e8e HashMap \u4e2d\u5b58\u50a8\u4e86\u6240\u6709\u957f\u5ea6\u4e3a 10 \u7684\u5b50\u4e32\uff0c\u6240\u4ee5\u7a7a\u95f4\u590d\u6742\u5ea6",(0,a.yg)("inlineCode",{parentName:"p"},"O(10n)"),"\u3002"),(0,a.yg)("p",null,"\u7531\u4e8e\u5b57\u7b26\u4e32\u4e2d\u53ea\u5b58\u5728 A, C, G, T \u56db\u79cd\u5b57\u7b26\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6bcf\u4e2a\u5b57\u7b26\u6620\u5c04\u4e3a 2 \u4e2a bit:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"A -> 00\nC -> 01\nG -> 10\nT -> 11\n")),(0,a.yg)("p",null,"\u6bcf\u4e2a\u957f\u5ea6\u4e3a 10 \u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u6620\u5c04\u4e3a 20 bits, \u5c0f\u4e8e 32 \u4f4d\uff0c\u56e0\u6b64\u53ef\u4ee5\u628a\u8fd9\u4e2a\u5b57\u7b26\u4e32\u6620\u5c04\u5230\u4e00\u4e2a\u6574\u6570\u3002\u8fd9\u4e2a\u65b9\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6\u4f9d\u65e7\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u4f46\u7a7a\u95f4\u590d\u6742\u5ea6\u4e0b\u964d\u5230\u4e86",(0,a.yg)("inlineCode",{parentName:"p"},"O(n)"),"\u3002"),(0,a.yg)("h3",{id:"\u89e3\u6cd5-1-\u7b80\u5355\u7c97\u66b4"},"\u89e3\u6cd5 1 \u7b80\u5355\u7c97\u66b4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Repeated DNA Sequences\n// Time Complexity: O(n), Space Complexity: O(10n)\npublic class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        final List<String> result = new ArrayList<>();\n        if (s.length() < 10) return result;\n\n        final Map<String, Integer> counter = new HashMap<>();\n\n        for (int i = 0; i < s.length() - 9; ++i) {\n            final String key = s.substring(i, i + 10);\n            int value = counter.getOrDefault(key, 0);\n            counter.put(key, value + 1);\n        }\n\n        for (Map.Entry<String, Integer> entry : counter.entrySet()) {\n            if (entry.getValue() > 1) {\n                result.add(entry.getKey());\n            }\n        }\n        return result;\n    }\n}\n")),(0,a.yg)("h3",{id:"\u89e3\u6cd5-2-\u5b8c\u7f8e\u54c8\u5e0c"},"\u89e3\u6cd5 2 \u5b8c\u7f8e\u54c8\u5e0c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Repeated DNA Sequences\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        final List<String> result = new ArrayList<>();\n        if (s.length() < LEN) return result;\n\n        final Map<Character, Integer> charMap = new HashMap<>();\n        charMap.put('A', 0);\n        charMap.put('C', 1);\n        charMap.put('G', 2);\n        charMap.put('T', 3);\n\n        final Map<Integer, Character> intMap = new HashMap<>();\n        intMap.put(0, 'A');\n        intMap.put(1, 'C');\n        intMap.put(2, 'G');\n        intMap.put(3, 'T');\n\n        final Map<Integer, Integer> counter = new HashMap<>();\n\n        for (int i = 0; i < s.length() - LEN + 1; ++i) {\n            final String key = s.substring(i, i + 10);\n            final int hashValue = strToInt(key, charMap);\n            counter.put(hashValue, counter.getOrDefault(hashValue, 0) + 1);\n        }\n\n        for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {\n            if (entry.getValue() > 1) {\n                result.add(intToStr(entry.getKey(), intMap));\n            }\n        }\n        return result;\n    }\n\n    // perfect hash, no collisions\n    private static int strToInt(String s, Map<Character, Integer> charMap) {\n        assert s.length() == LEN;\n        int x = 0;\n        for (int i = 0; i < LEN; ++i) {\n            final char ch = s.charAt(i);\n            x = (x << 2) + charMap.get(ch);\n        }\n        return x;\n    }\n    private String intToStr(int x, Map<Integer, Character> intMap) {\n        final StringBuilder sb = new StringBuilder();\n\n        while (x > 0) {\n            final char ch = intMap.get(x & 3);\n            sb.append(ch);\n            x >>= 2;\n        }\n        while (sb.length() < LEN) sb.append(intMap.get(0));\n        return sb.reverse().toString();\n    }\n    private static final int LEN = 10;\n}\n")))}g.isMDXComponent=!0}}]);