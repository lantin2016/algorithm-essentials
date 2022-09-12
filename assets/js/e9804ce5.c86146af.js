"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5283],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),i=t(6010),l=t(2389),o=t(7392),s=t(7094),p=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t;const{lazy:l,block:d,defaultValue:m,values:f,groupId:v,className:j}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),w=(0,o.l)(h,((e,n)=>e.value===n.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(n=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[N,O]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=v){const e=g[v];null!=e&&e!==N&&h.some((n=>n.value===e))&&O(e)}const E=e=>{const n=e.currentTarget,t=T.indexOf(n),r=h[t].value;r!==N&&(C(n),O(r),null!=v&&y(v,String(r)))},_=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=T.indexOf(e.currentTarget)+1;t=null!=(r=T[n])?r:T[0];break}case"ArrowLeft":{var a;const n=T.indexOf(e.currentTarget)-1;t=null!=(a=T[n])?a:T[T.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},j)},h.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>T.push(e),onKeyDown:_,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},1850:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),i=t(5488),l=t(5162);const o={title:"Edit Distance"},s=void 0,p={unversionedId:"dp/edit-distance",id:"dp/edit-distance",title:"Edit Distance",description:"\u63cf\u8ff0",source:"@site/docs/dp/edit-distance.md",sourceDirName:"dp",slug:"/dp/edit-distance",permalink:"/dp/edit-distance",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/edit-distance.md",tags:[],version:"current",frontMatter:{title:"Edit Distance"},sidebar:"someSidebar",previous:{title:"Minimum Path Sum",permalink:"/dp/minimum-path-sum"},next:{title:"Decode Ways",permalink:"/dp/decode-ways"}},u={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:3},{value:"\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4",id:"\u52a8\u89c4\u6eda\u52a8\u6570\u7ec4",level:3}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given two words ",(0,a.kt)("inlineCode",{parentName:"p"},"word1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"word2"),", find the minimum number of steps required to convert ",(0,a.kt)("inlineCode",{parentName:"p"},"word1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"word2"),". (each operation is counted as 1 step.)"),(0,a.kt)("p",null,"You have the following 3 operations permitted on a word:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert a character"),(0,a.kt)("li",{parentName:"ul"},"Delete a character"),(0,a.kt)("li",{parentName:"ul"},"Replace a character")),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u8bbe\u72b6\u6001\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"f[i][j]"),"\uff0c\u8868\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"A[0,i]"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"B[0,j]"),"\u4e4b\u95f4\u7684\u6700\u5c0f\u7f16\u8f91\u8ddd\u79bb\u3002\u8bbe",(0,a.kt)("inlineCode",{parentName:"p"},"A[0,i]"),"\u7684\u5f62\u5f0f\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"str1c"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"B[0,j]"),"\u7684\u5f62\u5f0f\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"str2d"),"\uff0c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"c==d"),"\uff0c\u5219",(0,a.kt)("inlineCode",{parentName:"p"},"f[i][j]=f[i-1][j-1]"),"\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"c!=d"),"\uff0c"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5c06 c \u66ff\u6362\u6210 d\uff0c\u5219",(0,a.kt)("inlineCode",{parentName:"li"},"f[i][j]=f[i-1][j-1]+1"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5728 c \u540e\u9762\u6dfb\u52a0\u4e00\u4e2a d\uff0c\u5219",(0,a.kt)("inlineCode",{parentName:"li"},"f[i][j]=f[i][j-1]+1"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5c06 c \u5220\u9664\uff0c\u5219",(0,a.kt)("inlineCode",{parentName:"li"},"f[i][j]=f[i-1][j]+1"),"\uff1b")))),(0,a.kt)("h3",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),(0,a.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Edit Distance\n// \u4e8c\u7ef4\u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n*m)\npublic class Solution {\n    public int minDistance(String word1, String word2) {\n        final int n = word1.length();\n        final int m = word2.length();\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\uff0c\u6709n+1\u4e2a\u9694\u677f\n        int[][] f = new int[n+1][m+1];\n        for (int i = 0; i <= n; i++)\n            f[i][0] = i;\n        for (int j = 0; j <= m; j++)\n            f[0][j] = j;\n\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= m; j++) {\n                if (word1.charAt(i - 1) == word2.charAt(j - 1))\n                    f[i][j] = f[i - 1][j - 1];\n                else {\n                    int mn = Math.min(f[i - 1][j], f[i][j - 1]);\n                    f[i][j] = 1 + Math.min(f[i - 1][j - 1], mn);\n                }\n            }\n        }\n        return f[n][m];\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Edit Distance\n// \u4e8c\u7ef4\u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n*m)\nclass Solution {\npublic:\n    int minDistance(const string &word1, const string &word2) {\n        const size_t n = word1.size();\n        const size_t m = word2.size();\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\uff0c\u6709n+1\u4e2a\u9694\u677f\n        int f[n + 1][m + 1];\n        for (size_t i = 0; i <= n; i++)\n            f[i][0] = i;\n        for (size_t j = 0; j <= m; j++)\n            f[0][j] = j;\n\n        for (size_t i = 1; i <= n; i++) {\n            for (size_t j = 1; j <= m; j++) {\n                if (word1[i - 1] == word2[j - 1])\n                    f[i][j] = f[i - 1][j - 1];\n                else {\n                    int mn = min(f[i - 1][j], f[i][j - 1]);\n                    f[i][j] = 1 + min(f[i - 1][j - 1], mn);\n                }\n            }\n        }\n        return f[n][m];\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u52a8\u89c4\u6eda\u52a8\u6570\u7ec4"},"\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4"),(0,a.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Edit Distance\n// \u4e8c\u7ef4\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int minDistance(String word1, String word2) {\n        if (word1.length() < word2.length())\n            return minDistance(word2, word1);\n\n        int[] f = new int[word2.length() + 1];\n        int upper_left = 0; // \u989d\u5916\u7528\u4e00\u4e2a\u53d8\u91cf\u8bb0\u5f55f[i-1][j-1]\n\n        for (int i = 0; i <= word2.length(); ++i)\n            f[i] = i;\n\n        for (int i = 1; i <= word1.length(); ++i) {\n            upper_left = f[0];\n            f[0] = i;\n\n            for (int j = 1; j <= word2.length(); ++j) {\n                int upper = f[j];\n\n                if (word1.charAt(i - 1) == word2.charAt(j - 1))\n                    f[j] = upper_left;\n                else\n                    f[j] = 1 + Math.min(upper_left, Math.min(f[j], f[j - 1]));\n\n                upper_left = upper;\n            }\n        }\n\n        return f[word2.length()];\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Edit Distance\n// \u4e8c\u7ef4\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int minDistance(const string &word1, const string &word2) {\n        if (word1.length() < word2.length())\n            return minDistance(word2, word1);\n\n        int f[word2.length() + 1];\n        int upper_left = 0; // \u989d\u5916\u7528\u4e00\u4e2a\u53d8\u91cf\u8bb0\u5f55f[i-1][j-1]\n\n        for (size_t i = 0; i <= word2.size(); ++i)\n            f[i] = i;\n\n        for (size_t i = 1; i <= word1.size(); ++i) {\n            upper_left = f[0];\n            f[0] = i;\n\n            for (size_t j = 1; j <= word2.size(); ++j) {\n                int upper = f[j];\n\n                if (word1[i - 1] == word2[j - 1])\n                    f[j] = upper_left;\n                else\n                    f[j] = 1 + min(upper_left, min(f[j], f[j - 1]));\n\n                upper_left = upper;\n            }\n        }\n\n        return f[word2.length()];\n    }\n};\n")))))}m.isMDXComponent=!0}}]);