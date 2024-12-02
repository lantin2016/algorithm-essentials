"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3207],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(96540),a=t(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(58168),a=t(96540),i=t(20053),l=t(92303),s=t(31682),o=t(86976),c=t(23104);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:n,block:t,defaultValue:l,values:p,groupId:m,className:f}=e,d=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??d.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),y=(0,s.X)(g,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,o.x)(),[j,x]=(0,a.useState)(h),k=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.a_)();if(null!=m){const e=v[m];null!=e&&e!==j&&g.some((n=>n.value===e))&&x(e)}const w=e=>{const n=e.currentTarget,t=k.indexOf(n),r=g[t].value;r!==j&&(O(n),x(r),null!=m&&b(m,String(r)))},N=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=k.indexOf(e.currentTarget)+1;n=k[t]??k[0];break}case"ArrowLeft":{const t=k.indexOf(e.currentTarget)-1;n=k[t]??k[k.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,i.A)("tabs-container",u.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},f)},g.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:e=>k.push(e),onKeyDown:N,onFocus:w,onClick:w},l,{className:(0,i.A)("tabs__item",u.tabItem,l?.className,{"tabs__item--active":j===n})}),t??n)}))),n?(0,a.cloneElement)(d.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},d.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function m(e){const n=(0,l.A)();return a.createElement(p,(0,r.A)({key:String(n)},e))}},74614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(58168),a=(t(96540),t(15680)),i=t(4865),l=t(19365);const s={title:"Implement strStr()"},o=void 0,c={unversionedId:"string/strstr",id:"string/strstr",title:"Implement strStr()",description:"\u63cf\u8ff0",source:"@site/docs/string/strstr.md",sourceDirName:"string",slug:"/string/strstr",permalink:"/string/strstr",draft:!1,tags:[],version:"current",frontMatter:{title:"Implement strStr()"},sidebar:"docs",previous:{title:"Course Schedule II",permalink:"/graph/topological-sort/course-schedule-ii"},next:{title:"String to Integer (atoi)",permalink:"/string/atoi"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u66b4\u529b\u5339\u914d",id:"\u66b4\u529b\u5339\u914d",level:3},{value:"KMP",id:"kmp",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p},f="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(f,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"Implement strStr()."),(0,a.yg)("p",null,"Returns a pointer to the first occurrence of needle in haystack, or null if needle is not part of haystack."),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u66b4\u529b\u7b97\u6cd5\u7684\u590d\u6742\u5ea6\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"O(m*n)"),"\uff0c\u4ee3\u7801\u5982\u4e0b\u3002\u66f4\u9ad8\u6548\u7684\u7684\u7b97\u6cd5\u6709 KMP \u7b97\u6cd5\u3001Boyer-Mooer \u7b97\u6cd5\u548c Rabin-Karp \u7b97\u6cd5\u3002\u9762\u8bd5\u4e2d\u66b4\u529b\u7b97\u6cd5\u8db3\u591f\u4e86\uff0c\u4e00\u5b9a\u8981\u5199\u5f97\u6ca1\u6709 BUG\u3002"),(0,a.yg)("h3",{id:"\u66b4\u529b\u5339\u914d"},"\u66b4\u529b\u5339\u914d"),(0,a.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// Implement strStr()\n// \u66b4\u529b\u89e3\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N*M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public int strStr(final String haystack, final String needle) {\n        if (needle.isEmpty()) return 0;\n\n        final int N = haystack.length() - needle.length() + 1;\n        for (int i = 0; i < N; i++) {\n            int j = i;\n            int k = 0;\n            while (j < haystack.length() && k < needle.length() &&\n                    haystack.charAt(j) == needle.charAt(k)) {\n                j++;\n                k++;\n            }\n            if (k == needle.length()) return i;\n        }\n        return -1;\n    }\n}\n"))),(0,a.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Implement strStr()\n// \u66b4\u529b\u89e3\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N*M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int strStr(const string& haystack, const string& needle) {\n        if (needle.empty()) return 0;\n\n        const int N = haystack.size() - needle.size() + 1;\n        for (int i = 0; i < N; i++) {\n            int j = i;\n            int k = 0;\n            while (j < haystack.size() && k < needle.size() && haystack[j] == needle[k]) {\n                j++;\n                k++;\n            }\n            if (k == needle.size()) return i;\n        }\n        return -1;\n    }\n};\n")))),(0,a.yg)("h3",{id:"kmp"},"KMP"),(0,a.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// Implement strStr()\n// KMP\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N+M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(M)\npublic class Solution {\n    public int strStr(final String haystack, final String needle) {\n        return kmp(haystack, needle);\n    }\n\n    /*\n     * \u8ba1\u7b97\u90e8\u5206\u5339\u914d\u8868\uff0c\u5373next\u6570\u7ec4.\n     *\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @param[out] next next\u6570\u7ec4\n     * @return \u65e0\n     */\n    private static void compute_prefix(final String pattern, final int[] next) {\n        int i;\n        int j = -1;\n\n        next[0] = j;\n        for (i = 1; i < pattern.length(); i++) {\n            while (j > -1 && pattern.charAt(j + 1) != pattern.charAt(i)) j = next[j];\n\n            if (pattern.charAt(i) == pattern.charAt(j + 1)) j++;\n            next[i] = j;\n        }\n    }\n\n    /*\n     * @brief KMP\u7b97\u6cd5.\n     *\n     * @param[in] text \u6587\u672c\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @return \u6210\u529f\u5219\u8fd4\u56de\u7b2c\u4e00\u6b21\u5339\u914d\u7684\u4f4d\u7f6e\uff0c\u5931\u8d25\u5219\u8fd4\u56de-1\n     */\n    private static int kmp(final String text, final String pattern) {\n        int i;\n        int j = -1;\n        final int n = text.length();\n        final int m = pattern.length();\n        if (n == 0 && m == 0) return 0; /* "","" */\n        if (m == 0) return 0;  /* "a","" */\n        int[] next = new int[m];\n\n        compute_prefix(pattern, next);\n\n        for (i = 0; i < n; i++) {\n            while (j > -1 && pattern.charAt(j + 1) != text.charAt(i)) j = next[j];\n\n            if (text.charAt(i) == pattern.charAt(j + 1)) j++;\n            if (j == m - 1) {\n                return i-j;\n            }\n        }\n\n        return -1;\n    }\n}\n'))),(0,a.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'// Implement strStr()\n// KMP\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N+M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(M)\nclass Solution {\npublic:\n    int strStr(const string& haystack, const string& needle) {\n        return kmp(haystack.c_str(), needle.c_str());\n    }\nprivate:\n    /*\n     * @brief \u8ba1\u7b97\u90e8\u5206\u5339\u914d\u8868\uff0c\u5373next\u6570\u7ec4.\n     *\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @param[out] next next\u6570\u7ec4\n     * @return \u65e0\n     */\n    static void compute_prefix(const char *pattern, int next[]) {\n        int i;\n        int j = -1;\n        const int m = strlen(pattern);\n\n        next[0] = j;\n        for (i = 1; i < m; i++) {\n            while (j > -1 && pattern[j + 1] != pattern[i]) j = next[j];\n\n            if (pattern[i] == pattern[j + 1]) j++;\n            next[i] = j;\n        }\n    }\n\n    /*\n     * @brief KMP\u7b97\u6cd5.\n     *\n     * @param[in] text \u6587\u672c\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @return \u6210\u529f\u5219\u8fd4\u56de\u7b2c\u4e00\u6b21\u5339\u914d\u7684\u4f4d\u7f6e\uff0c\u5931\u8d25\u5219\u8fd4\u56de-1\n     */\n    static int kmp(const char *text, const char *pattern) {\n        int i;\n        int j = -1;\n        const int n = strlen(text);\n        const int m = strlen(pattern);\n        if (n == 0 && m == 0) return 0; /* "","" */\n        if (m == 0) return 0;  /* "a","" */\n        int *next = (int*)malloc(sizeof(int) * m);\n\n        compute_prefix(pattern, next);\n\n        for (i = 0; i < n; i++) {\n            while (j > -1 && pattern[j + 1] != text[i]) j = next[j];\n\n            if (text[i] == pattern[j + 1]) j++;\n            if (j == m - 1) {\n                free(next);\n                return i-j;\n            }\n        }\n\n        free(next);\n        return -1;\n    }\n};\n')))),(0,a.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/string/atoi"},"String to Integer (atoi)"))))}d.isMDXComponent=!0}}]);