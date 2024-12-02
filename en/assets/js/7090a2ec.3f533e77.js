"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6984],{15680:(e,n,a)=>{a.d(n,{xA:()=>o,yg:()=>N});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),l=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},o=function(e){var n=l(e.components);return t.createElement(m.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,m=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),g=l(a),c=r,N=g["".concat(m,".").concat(c)]||g[c]||y[c]||p;return a?t.createElement(N,i(i({ref:n},o),{},{components:a})):t.createElement(N,i({ref:n},o))}));function N(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=c;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<p;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73830:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const p={title:"\u5e76\u67e5\u96c6"},i=void 0,s={unversionedId:"graph/ufs/README",id:"graph/ufs/README",title:"\u5e76\u67e5\u96c6",description:"\u5e76\u67e5\u96c6\u7684\u5b9a\u4e49",source:"@site/docs/graph/ufs/README.md",sourceDirName:"graph/ufs",slug:"/graph/ufs/",permalink:"/en/graph/ufs/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5e76\u67e5\u96c6"},sidebar:"docs",previous:{title:"All Paths From Source to Target",permalink:"/en/graph/all-paths-from-source-to-target"},next:{title:"Number of Connected Components in an Undirected Graph",permalink:"/en/graph/ufs/number-of-connected-components-in-an-undirected-graph"}},m={},l=[{value:"\u5e76\u67e5\u96c6\u7684\u5b9a\u4e49",id:"\u5e76\u67e5\u96c6\u7684\u5b9a\u4e49",level:2},{value:"\u5e76\u67e5\u96c6\u7684\u4f18\u5316",id:"\u5e76\u67e5\u96c6\u7684\u4f18\u5316",level:2},{value:"\u8def\u5f84\u538b\u7f29",id:"\u8def\u5f84\u538b\u7f29",level:3},{value:"Union by rank",id:"union-by-rank",level:3}],o={toc:l},g="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u5e76\u67e5\u96c6\u7684\u5b9a\u4e49"},"\u5e76\u67e5\u96c6\u7684\u5b9a\u4e49"),(0,r.yg)("p",null,"\u5e76\u67e5\u96c6(Disjoint Set)\u6700\u5e38\u7528\u7684\u4e24\u4e2a\u64cd\u4f5c\u662f\u67e5\u8be2(find)\u548c\u5408\u5e76(union \u6216 merge)\uff0c\uff0c\u6240\u4ee5\u4e5f\u79f0\u4e3a Union-find Set\u6216\u8005Merge-find Set\u3002\u5e76\u67e5\u96c6\u662f\u4e00\u79cd\u6811\u5f62\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f46\u662f\u5e38\u7528\u6765\u89e3\u51b3\u56fe\u91cc\u9762\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u672c\u4e66\u628a\u5e76\u67e5\u96c6\u653e\u5230\u56fe\u8fd9\u4e00\u7ae0\u3002"),(0,r.yg)("p",null,"\u5e76\u67e5\u96c6\u901a\u5e38\u7528\u6811\u7684\u53cc\u4eb2\u8868\u793a\u6cd5\uff0c\u5373\u5f00\u4e00\u4e2a\u6570\u7ec4\uff0c\u6bcf\u4e2a\u4f4d\u7f6e\u5b58\u50a8\u7684\u662f\u8be5\u8282\u70b9\u7684\u7236\u4eb2\uff0c"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u65f6\uff0c\u6bcf\u4e2a\u5143\u7d20\u662f\u4e00\u9897\u5355\u72ec\u7684\u6811\uff0c\u5373 ",(0,r.yg)("inlineCode",{parentName:"li"},"p[x]=x"),"\uff0c\u7136\u540e\u6839\u636e\u8fb9(edge)\u7684\u4fe1\u606f\u521d\u59cb\u5316\u6240\u6709\u8282\u70b9\uff0c\u6bd4\u5982",(0,r.yg)("inlineCode",{parentName:"li"},"x"),"\u548c",(0,r.yg)("inlineCode",{parentName:"li"},"y"),"\u4e4b\u95f4\u6709\u4e00\u6761\u8fb9\uff0c\u90a3\u4e48\u5c31\u521d\u59cb\u5316\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"p[x]=y")),(0,r.yg)("li",{parentName:"ul"},"\u5982\u4f55\u5224\u65ad\u6811\u6839\uff0c ",(0,r.yg)("inlineCode",{parentName:"li"},"p[x] == x")),(0,r.yg)("li",{parentName:"ul"},"\u5982\u4f55\u67e5\u627e\u5143\u7d20",(0,r.yg)("inlineCode",{parentName:"li"},"x"),"\u7684\u6839\u8282\u70b9\uff0c ",(0,r.yg)("inlineCode",{parentName:"li"},"while(p[x] != x) x = p[x]")),(0,r.yg)("li",{parentName:"ul"},"\u5982\u4f55\u5408\u5e76\u4e24\u4e2a\u96c6\u5408\uff0c\u6bd4\u5982\u5408\u5e76\u5143\u7d20",(0,r.yg)("inlineCode",{parentName:"li"},"x"),"\u548c",(0,r.yg)("inlineCode",{parentName:"li"},"y"),"\u6240\u5728\u7684\u96c6\u5408\uff0c\u5148\u627e\u5230",(0,r.yg)("inlineCode",{parentName:"li"},"x"),"\u7684\u6839\u8282\u70b9",(0,r.yg)("inlineCode",{parentName:"li"},"px"),"\u548c",(0,r.yg)("inlineCode",{parentName:"li"},"y"),"\u7684\u6839\u8282\u70b9",(0,r.yg)("inlineCode",{parentName:"li"},"py"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"p[px] = py"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"class DSU {\npublic:\n    DSU(int n) {\n        p = vector<int>(n);\n        // initialize\n        for (int x = 0; x < n; x++) p[x] = x;\n    }\n\n    int find(int x) {\n        while (p[x] != x) x = p[x];\n        return x;\n    }\n\n    // return the number of reduced components\n    int merge(int x, int y) {\n        int px = find(x);\n        int py = find(y);\n        if (px == py) return 0;\n        p[px] = py;\n        reurn 1;\n    }\nprivate:\n    vector<int> p;\n};\n")),(0,r.yg)("h2",{id:"\u5e76\u67e5\u96c6\u7684\u4f18\u5316"},"\u5e76\u67e5\u96c6\u7684\u4f18\u5316"),(0,r.yg)("p",null,"\u539f\u59cb\u7684\u5e76\u67e5\u96c6\uff0c\u67e5\u8be2\u548c\u5408\u5e76\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u53d6\u51b3\u4e8e\u6811\u7684\u9ad8\u5ea6",(0,r.yg)("inlineCode",{parentName:"p"},"h"),"\uff0c\u6240\u4ee5\u65f6\u95f4\u590d\u6742\u5ea6\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"O(h)"),"\uff0c\u5373 ",(0,r.yg)("inlineCode",{parentName:"p"},"O(log n)"),"\u3002\u5982\u679c\u80fd\u964d\u4f4e\u6811\u7684\u9ad8\u5ea6\uff0c\u5c31\u80fd\u964d\u4f4e\u65f6\u95f4\u590d\u6742\u5ea6\u3002"),(0,r.yg)("h3",{id:"\u8def\u5f84\u538b\u7f29"},"\u8def\u5f84\u538b\u7f29"),(0,r.yg)("p",null,"\u53ef\u4ee5\u5728\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u987a\u4fbf\u538b\u7f29\u8def\u5f84\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"p[x] = p[p[x]]"),"\uff0c\u4e0d\u65ad\u5faa\u73af\uff0c\u6700\u7ec8\u628a\u88ab\u67e5\u8be2\u8282\u70b9\u76f4\u63a5\u8fde\u63a5\u5230\u6839\u8282\u70b9\uff0c\u6811\u7684\u9ad8\u5ea6\u53d8\u6210\u4e862\uff0c\u6210\u4e3a\u4e00\u4e2a\u5e38\u91cf\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"int find(int x) {\n    while (p[x] != x) {\n        // highlight-next-line\n        p[x] = p[p[x]]; // path compression\n        x = p[x];\n    }\n    return x;\n}\n")),(0,r.yg)("h3",{id:"union-by-rank"},"Union by rank"),(0,r.yg)("p",null,"\u539f\u59cb\u7684\u5408\u5e76\u64cd\u4f5c\uff0c\u76f4\u63a5\u8d4b\u503c\uff0c\u5c31\u5b8c\u6210\u4e86\u5408\u5e76\u3002\u5e94\u8be5\u8ba9\u77ee\u7684\u6811\u5411\u9ad8\u7684\u6811\u5408\u5e76\uff0c\u8fd9\u6837\u9ad8\u5ea6\u8d77\u7801\u4e0d\u4f1a\u589e\u957f\uff0c\u5982\u679c\u8ba9\u9ad8\u7684\u6811\u5411\u77ee\u7684\u6811\u5408\u5e76\uff0c\u9ad8\u5ea6\u4e00\u5b9a\u4f1a\u7ee7\u7eed\u589e\u957f\u3002"),(0,r.yg)("p",null,"\u4e3a\u4e86\u6839\u636e\u9ad8\u5ea6\u6765\u5408\u5e76\uff0c\u9700\u8981\u65b0\u589e\u4e00\u4e2a\u6570\u7ec4\u6765\u8bb0\u5f55\u6bcf\u9897\u6811\u7684\u9ad8\u5ea6\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"vector<int> rank(n)"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"rank[x]"),"\u4ee3\u8868",(0,r.yg)("inlineCode",{parentName:"p"},"x"),"\u5143\u7d20\u6240\u5728\u7684\u6811\u7684\u9ad8\u5ea6\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"class DSU {\npublic:\n    DSU(int n) {\n        p = vector<int>(n);\n        rank = vector<int>(n);\n        // initialize\n        for (int x = 0; x < n; x++) {\n            p[x] = x;\n            // highlight-next-line\n            rank[x] = 1;\n        }\n    }\n\n    int find(int x) {\n        while (p[x] != x) {\n            p[x] = p[p[x]]; // path compression\n            x = p[x];\n        }\n        return x;\n    }\n\n    int merge(int x, int y) {\n        int px = find(x);\n        int py = find(y);\n        if (px == py) return 0;\n\n        // highlight-start\n        if (rank[px] < rank[py]) {\n            p[px] = py;\n        } else if (rank[px] > rank[py]) {\n            p[py] = px;\n        } else {\n            p[px] = py;\n            rank[px] += 1;\n        }\n        // highlight-end\n        return 1;\n    }\nprivate:\n    vector<int> p;\n    // highlight-next-line\n    vector<int> rank;\n};\n")),(0,r.yg)("p",null,"\u8def\u5f84\u538b\u7f29\u53ea\u9700\u8981\u4e00\u884c\u4ee3\u7801\uff0c\u800c\u57fa\u4e8erank\u7684\u4f18\u5316\uff0c\u6539\u52a8\u7684\u4ee3\u7801\u6bd4\u8f83\u591a\uff0c\u6240\u4ee5\uff0c\u5728\u9762\u8bd5\u4e2d\u4f7f\u7528\u8def\u5f84\u538b\u7f29\u8fd9\u4e2a\u4f18\u5316\u5c31\u591f\u4e86\u3002"),(0,r.yg)("p",null,"\u540c\u65f6\u4f7f\u7528\u8def\u5f84\u538b\u7f29\u548cunion by rank\u4f18\u5316\u540e\uff0c\u5e76\u67e5\u96c6\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e0d\u518d\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"O(h)"),"\uff0c\u800c\u662f",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mi",{parentName:"mrow"},"O"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.yg)("msup",{parentName:"mrow"},(0,r.yg)("mrow",{parentName:"msup"},(0,r.yg)("mi",{parentName:"mrow"},"log"),(0,r.yg)("mo",{parentName:"mrow"},"\u2061")),(0,r.yg)("mo",{parentName:"msup"},"\u2217")),(0,r.yg)("mi",{parentName:"mrow"},"n"),(0,r.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(\\log^* n)")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1.023em",verticalAlign:"-0.25em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.yg)("span",{parentName:"span",className:"mopen"},"("),(0,r.yg)("span",{parentName:"span",className:"mop"},(0,r.yg)("span",{parentName:"span",className:"mop"},"lo",(0,r.yg)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.773em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-3.1473em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mbin mtight"},"\u2217")))))))),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.yg)("span",{parentName:"span",className:"mclose"},")"))))),", ",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("msup",{parentName:"mrow"},(0,r.yg)("mrow",{parentName:"msup"},(0,r.yg)("mi",{parentName:"mrow"},"log"),(0,r.yg)("mo",{parentName:"mrow"},"\u2061")),(0,r.yg)("mo",{parentName:"msup"},"\u2217"))),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\log^*")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.9675em",verticalAlign:"-0.1944em"}}),(0,r.yg)("span",{parentName:"span",className:"mop"},(0,r.yg)("span",{parentName:"span",className:"mop"},"lo",(0,r.yg)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.773em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-3.1473em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mbin mtight"},"\u2217"))))))))))))," \u4ee3\u8868",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Iterated_logarithm"},"iterated logarithm"),"\uff0c\u6700\u5927\u503c\u4e0d\u8d85\u8fc75\u3002\u56e0\u6b64\u53ef\u4ee5\u8ba4\u4e3a\u5e76\u67e5\u96c6\u7684\u67e5\u8be2\u548c\u5408\u5e76\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662fO(1)\u3002"))}y.isMDXComponent=!0}}]);