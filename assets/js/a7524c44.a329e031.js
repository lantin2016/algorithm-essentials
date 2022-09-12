"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(t),f=i,m=b["".concat(o,".").concat(f)]||b[f]||p[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=b;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),i=t(6010);const a="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(7462),i=t(7294),a=t(6010),l=t(2389),s=t(7392),o=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function b(e){var n,t;const{lazy:l,block:b,defaultValue:f,values:m,groupId:g,className:d}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),v=(0,s.l)(k,((e,n)=>e.value===n.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const S=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==S&&!k.some((e=>e.value===S)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+S+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,o.U)(),[j,O]=(0,i.useState)(S),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==j&&k.some((n=>n.value===e))&&O(e)}const C=e=>{const n=e.currentTarget,t=T.indexOf(n),r=k[t].value;r!==j&&(w(n),O(r),null!=g&&N(g,String(r)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=T.indexOf(e.currentTarget)+1;t=null!=(r=T[n])?r:T[0];break}case"ArrowLeft":{var i;const n=T.indexOf(e.currentTarget)-1;t=null!=(i=T[n])?i:T[T.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":b},d)},k.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:e=>T.push(e),onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),l?(0,i.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function f(e){const n=(0,l.Z)();return i.createElement(b,(0,r.Z)({key:String(n)},e))}},1898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(7462),i=(t(7294),t(3905)),a=t(5488),l=t(5162);const s={title:"Scramble String"},o=void 0,c={unversionedId:"dp/scramble-string",id:"dp/scramble-string",title:"Scramble String",description:"\u63cf\u8ff0",source:"@site/docs/dp/scramble-string.md",sourceDirName:"dp",slug:"/dp/scramble-string",permalink:"/dp/scramble-string",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/scramble-string.md",tags:[],version:"current",frontMatter:{title:"Scramble String"},sidebar:"someSidebar",previous:{title:"Interleaving String",permalink:"/dp/interleaving-string"},next:{title:"Minimum Path Sum",permalink:"/dp/minimum-path-sum"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52",id:"\u9012\u5f52",level:3},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:3},{value:"\u9012\u5f52+\u526a\u679d",id:"\u9012\u5f52\u526a\u679d",level:3},{value:"\u5907\u5fd8\u5f55\u6cd5",id:"\u5907\u5fd8\u5f55\u6cd5",level:3}],b={toc:p};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"s1"),", we may represent it as a binary tree by partitioning it to two non-empty substrings recursively."),(0,i.kt)("p",null,"Below is one possible representation of ",(0,i.kt)("inlineCode",{parentName:"p"},'s1 = "great"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    great\n   /    \\\n  gr    eat\n / \\    /  \\\ng   r  e   at\n           / \\\n          a   t\n")),(0,i.kt)("p",null,"To scramble the string, we may choose any non-leaf node and swap its two children."),(0,i.kt)("p",null,"For example, if we choose the node ",(0,i.kt)("inlineCode",{parentName:"p"},'"gr"')," and swap its two children, it produces a scrambled string ",(0,i.kt)("inlineCode",{parentName:"p"},'"rgeat"'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    rgeat\n   /    \\\n  rg    eat\n / \\    /  \\\nr   g  e   at\n           / \\\n          a   t\n")),(0,i.kt)("p",null,"We say that ",(0,i.kt)("inlineCode",{parentName:"p"},'"rgeat"')," is a scrambled string of ",(0,i.kt)("inlineCode",{parentName:"p"},'"great"'),"."),(0,i.kt)("p",null,"Similarly, if we continue to swap the children of nodes ",(0,i.kt)("inlineCode",{parentName:"p"},'"eat"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"at"'),", it produces a scrambled string ",(0,i.kt)("inlineCode",{parentName:"p"},'"rgtae"'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    rgtae\n   /    \\\n  rg    tae\n / \\    /  \\\nr   g  ta  e\n       / \\\n      t   a\n")),(0,i.kt)("p",null,"We say that ",(0,i.kt)("inlineCode",{parentName:"p"},'"rgtae"')," is a scrambled string of ",(0,i.kt)("inlineCode",{parentName:"p"},'"great"'),"."),(0,i.kt)("p",null,"Given two strings ",(0,i.kt)("inlineCode",{parentName:"p"},"s1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s2")," of the same length, determine if ",(0,i.kt)("inlineCode",{parentName:"p"},"s2")," is a scrambled string of ",(0,i.kt)("inlineCode",{parentName:"p"},"s1"),"."),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u9996\u5148\u60f3\u5230\u7684\u662f\u9012\u5f52\uff08\u5373\u6df1\u641c\uff09\uff0c\u5bf9\u4e24\u4e2a string \u8fdb\u884c\u5206\u5272\uff0c\u7136\u540e\u6bd4\u8f83\u56db\u5bf9\u5b57\u7b26\u4e32\u3002\u4ee3\u7801\u867d\u7136\u7b80\u5355\uff0c\u4f46\u662f\u590d\u6742\u5ea6\u6bd4\u8f83\u9ad8\u3002\u6709\u4e24\u79cd\u52a0\u901f\u7b56\u7565\uff0c\u4e00\u79cd\u662f\u526a\u679d\uff0c\u63d0\u524d\u8fd4\u56de\uff1b\u4e00\u79cd\u662f\u52a0\u7f13\u5b58\uff0c\u7f13\u5b58\u4e2d\u95f4\u7ed3\u679c\uff0c\u5373 memorization\uff08\u7ffb\u8bd1\u4e3a\u8bb0\u5fc6\u5316\u641c\u7d22\uff09\u3002"),(0,i.kt)("p",null,"\u526a\u679d\u53ef\u4ee5\u4e94\u82b1\u516b\u95e8\uff0c\u8981\u5145\u5206\u89c2\u5bdf\uff0c\u5145\u5206\u5229\u7528\u4fe1\u606f\uff0c\u627e\u5230\u80fd\u8ba9\u8282\u70b9\u63d0\u524d\u8fd4\u56de\u7684\u6761\u4ef6\u3002\u4f8b\u5982\uff0c\u5224\u65ad\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3a scamble\uff0c\u81f3\u5c11\u8981\u6c42\u6bcf\u4e2a\u5b57\u7b26\u5728\u4e24\u4e2a\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\u8981\u76f8\u7b49\uff0c\u5982\u679c\u4e0d\u76f8\u7b49\u5219\u8fd4\u56de false\u3002"),(0,i.kt)("p",null,"\u52a0\u7f13\u5b58\uff0c\u53ef\u4ee5\u7528\u6570\u7ec4\u6216 HashMap\u3002\u672c\u9898\u7ef4\u6570\u8f83\u9ad8\uff0c\u7528 HashMap\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"unordered_map"),"\u5747\u53ef\u3002"),(0,i.kt)("p",null,"\u65e2\u7136\u53ef\u4ee5\u7528\u8bb0\u5fc6\u5316\u641c\u7d22\uff0c\u8fd9\u9898\u4e5f\u4e00\u5b9a\u53ef\u4ee5\u7528\u52a8\u89c4\u3002\u8bbe\u72b6\u6001\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"f[n][i][j]"),"\uff0c\u8868\u793a\u957f\u5ea6\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"n"),"\uff0c\u8d77\u70b9\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"s1[i]"),"\u548c\u8d77\u70b9\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"s2[j]"),"\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3a scramble\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"f[n][i][j]} =  (f[k][i][j] && f[n-k][i+k][j+k])\n            || (f[k][i][j+n-k] && f[n-k][i+k][j])\n")),(0,i.kt)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,i.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Scramble String\n// \u9012\u5f52\uff0c\u4f1a\u8d85\u65f6\uff0c\u4ec5\u7528\u6765\u5e2e\u52a9\u7406\u89e3\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        return isScramble(s1, 0, s1.length(), s2, 0);\n    }\n    private static boolean isScramble(String s1, int begin1, int end1,\n                                      String s2, int begin2) {\n        final int length = end1 - begin1;\n        final int end2 = begin2 + length;\n\n        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(s1, begin1, begin1 + i, s2, begin2)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2 + i))\n                    || (isScramble(s1, begin1, begin1 + i, s2, end2 - i)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2)))\n                return true;\n\n        return false;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Scramble String\n// \u9012\u5f52\uff0c\u4f1a\u8d85\u65f6\uff0c\u4ec5\u7528\u6765\u5e2e\u52a9\u7406\u89e3\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool isScramble(const string& s1, const string& s2) {\n        return isScramble(s1.begin(), s1.end(), s2.begin());\n    }\nprivate:\n    typedef string::iterator Iterator;\n    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {\n        auto length = distance(first1, last1);\n        auto last2 = next(first2, length);\n\n        if (length == 1) return *first1 == *first2;\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(first1, first1 + i, first2)\n                 && isScramble(first1 + i, last1, first2 + i))\n                    || (isScramble(first1, first1 + i, last2 - i)\n                            && isScramble(first1 + i, last1, first2)))\n                return true;\n\n        return false;\n    }\n};\n")))),(0,i.kt)("h3",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),(0,i.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Scramble String\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3)\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        final int N = s1.length();\n        if (N != s2.length()) return false;\n\n        // f[n][i][j]\uff0c\u8868\u793a\u957f\u5ea6\u4e3an\uff0c\u8d77\u70b9\u4e3as1[i]\u548c\n        // \u8d77\u70b9\u4e3as2[j]\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3ascramble\n        boolean[][][] f = new boolean[N+1][N][N];\n\n        for (int i = 0; i < N; i++)\n            for (int j = 0; j < N; j++)\n                f[1][i][j] = s1.charAt(i) == s2.charAt(j);\n\n        for (int n = 1; n <= N; ++n) {\n            for (int i = 0; i + n <= N; ++i) {\n                for (int j = 0; j + n <= N; ++j) {\n                    for (int k = 1; k < n; ++k) {\n                        if ((f[k][i][j] && f[n - k][i + k][j + k]) ||\n                                (f[k][i][j + n - k] && f[n - k][i + k][j])) {\n                            f[n][i][j] = true;\n                            break;\n                        }\n                    }\n                }\n            }\n        }\n        return f[N][0][0];\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Scramble String\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3)\nclass Solution {\npublic:\n    bool isScramble(const string& s1, const string& s2) {\n        const int N = s1.size();\n        if (N != s2.size()) return false;\n\n        // f[n][i][j]\uff0c\u8868\u793a\u957f\u5ea6\u4e3an\uff0c\u8d77\u70b9\u4e3as1[i]\u548c\n        // \u8d77\u70b9\u4e3as2[j]\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3ascramble\n        bool f[N + 1][N][N];\n        fill_n(&f[0][0][0], (N + 1) * N * N, false);\n\n        for (int i = 0; i < N; i++)\n            for (int j = 0; j < N; j++)\n                f[1][i][j] = s1[i] == s2[j];\n\n        for (int n = 1; n <= N; ++n) {\n            for (int i = 0; i + n <= N; ++i) {\n                for (int j = 0; j + n <= N; ++j) {\n                    for (int k = 1; k < n; ++k) {\n                        if ((f[k][i][j] && f[n - k][i + k][j + k]) ||\n                                (f[k][i][j + n - k] && f[n - k][i + k][j])) {\n                            f[n][i][j] = true;\n                            break;\n                        }\n                    }\n                }\n            }\n        }\n        return f[N][0][0];\n    }\n};\n")))),(0,i.kt)("h3",{id:"\u9012\u5f52\u526a\u679d"},"\u9012\u5f52+\u526a\u679d"),(0,i.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Scramble String\n// \u9012\u5f52+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        return isScramble(s1, 0, s1.length(), s2, 0);\n    }\n    private static boolean isScramble(String s1, int begin1, int end1,\n                                      String s2, int begin2) {\n        final int length = end1 - begin1;\n        final int end2 = begin2 + length;\n        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);\n\n        // \u526a\u679d\uff0c\u63d0\u524d\u8fd4\u56de\n        int[] A = new int[26]; // \u6bcf\u4e2a\u5b57\u7b26\u7684\u8ba1\u6570\u5668\n        for(int i = 0; i < length; i++) A[s1.charAt(begin1+i)-'a']++;\n        for(int i = 0; i < length; i++) A[s2.charAt(begin2+i)-'a']--;\n        for(int i = 0; i < 26; i++) if (A[i] != 0) return false;\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(s1, begin1, begin1 + i, s2, begin2)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2 + i))\n                    || (isScramble(s1, begin1, begin1 + i, s2, end2 - i)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2)))\n                return true;\n\n        return false;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Scramble String\n// \u9012\u5f52+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool isScramble(const string& s1, const string& s2) {\n        return isScramble(s1.begin(), s1.end(), s2.begin());\n    }\nprivate:\n    typedef string::const_iterator Iterator;\n    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {\n        auto length = distance(first1, last1);\n        auto last2 = next(first2, length);\n        if (length == 1) return *first1 == *first2;\n\n        // \u526a\u679d\uff0c\u63d0\u524d\u8fd4\u56de\n        int A[26]; // \u6bcf\u4e2a\u5b57\u7b26\u7684\u8ba1\u6570\u5668\n        fill(A, A + 26, 0);\n        for(int i = 0; i < length; i++) A[*(first1+i)-'a']++;\n        for(int i = 0; i < length; i++) A[*(first2+i)-'a']--;\n        for(int i = 0; i < 26; i++) if (A[i] != 0) return false;\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(first1, first1 + i, first2)\n                 && isScramble(first1 + i, last1, first2 + i))\n                    || (isScramble(first1, first1 + i, last2 - i)\n                            && isScramble(first1 + i, last1, first2)))\n                return true;\n\n        return false;\n    }\n};\n")))),(0,i.kt)("h3",{id:"\u5907\u5fd8\u5f55\u6cd5"},"\u5907\u5fd8\u5f55\u6cd5"),(0,i.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Scramble String\n// \u9012\u5f52+map\u505acache\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3), TLE\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        cache.clear();\n        return isScramble(s1, 0, s1.length(), s2, 0);\n    }\n\n    final private HashMap<Triple, Boolean> cache = new HashMap<>();\n\n    private boolean isScramble(String s1, int begin1, int end1,\n                               String s2, int begin2) {\n        final int length = end1 - begin1;\n        final int end2 = begin2 + length;\n\n        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);\n\n        for (int i = 1; i < length; ++i)\n            if ((getOrUpdate(s1, begin1, begin1 + i, s2, begin2)\n                    && getOrUpdate(s1, begin1 + i, end1, s2, begin2 + i))\n                    || (getOrUpdate(s1, begin1, begin1 + i, s2, end2 - i)\n                    && getOrUpdate(s1, begin1 + i, end1, s2, begin2)))\n                return true;\n\n        return false;\n    }\n\n    boolean getOrUpdate(String s1, int begin1, int end1,\n                     String s2, int begin2) {\n        Triple key = new Triple(begin1, end1, begin2);\n        if (!cache.containsKey(key)) {\n            boolean result = isScramble(s1, begin1, end1, s2, begin2);\n            cache.put(key, result);\n            return result;\n        } else {\n            return cache.get(key);\n        }\n    }\n    static class Triple {\n        private int i;\n        private int j;\n        private int k;\n\n        public Triple(int i, int j, int k) {\n            this.i = i;\n            this.j = j;\n            this.k = k;\n        }\n        @Override\n        public int hashCode() {\n            int hash = 0;\n            hash = i * 31 + j;\n            hash = hash * 31 * k;\n            return hash;\n        }\n        @Override\n        public boolean equals(Object other) {\n            if (this == other) return true;\n            if (this.hashCode() != other.hashCode()) return false;\n            if (!(other instanceof Triple)) return false;\n            Triple o = (Triple)other;\n            return this.i == o.i && this.j == o.j && this.k == o.k;\n        }\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"typedef string::const_iterator Iterator;\ntypedef tuple<Iterator, Iterator, Iterator> Key;\n// \u5b9a\u5236\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\nnamespace std {\ntemplate<> struct hash<Key> {\n    size_t operator()(const Key & x) const {\n        Iterator first1, last1, first2;\n        tie(first1, last1, first2) = x;\n\n        int result = *first1;\n        result = result * 31 + *last1;\n        result = result * 31 + *first2;\n        result = result * 31 + *(next(first2, distance(first1, last1)-1));\n        return result;\n    }\n};\n}\n\n// Scramble String\n// \u9012\u5f52+unordered_map\u505acache\uff0c\u6bd4map\u5feb\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3)\nclass Solution {\npublic:\n    unordered_map<Key, bool> cache;\n\n    bool isScramble(const string& s1, const string& s2) {\n        cache.clear();\n        return isScramble(s1.begin(), s1.end(), s2.begin());\n    }\n\n    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {\n        auto length = distance(first1, last1);\n        auto last2 = next(first2, length);\n\n        if (length == 1)\n            return *first1 == *first2;\n\n        for (int i = 1; i < length; ++i)\n            if ((getOrUpdate(first1, first1 + i, first2)\n                    && getOrUpdate(first1 + i, last1, first2 + i))\n                    || (getOrUpdate(first1, first1 + i, last2 - i)\n                            && getOrUpdate(first1 + i, last1, first2)))\n                return true;\n\n        return false;\n    }\n\n    bool getOrUpdate(Iterator first1, Iterator last1, Iterator first2) {\n        auto key = make_tuple(first1, last1, first2);\n        auto pos = cache.find(key);\n\n        return (pos != cache.end()) ?\n                pos->second : (cache[key] = isScramble(first1, last1, first2));\n    }\n};\n")))))}f.isMDXComponent=!0}}]);