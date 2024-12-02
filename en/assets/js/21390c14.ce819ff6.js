"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[920],{15680:(a,e,s)=>{s.d(e,{xA:()=>N,yg:()=>o});var n=s(96540);function m(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}function t(a,e){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.push.apply(s,n)}return s}function p(a){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?t(Object(s),!0).forEach((function(e){m(a,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(s,e))}))}return a}function r(a,e){if(null==a)return{};var s,n,m=function(a,e){if(null==a)return{};var s,n,m={},t=Object.keys(a);for(n=0;n<t.length;n++)s=t[n],e.indexOf(s)>=0||(m[s]=a[s]);return m}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(n=0;n<t.length;n++)s=t[n],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(m[s]=a[s])}return m}var g=n.createContext({}),l=function(a){var e=n.useContext(g),s=e;return a&&(s="function"==typeof a?a(e):p(p({},e),a)),s},N=function(a){var e=l(a.components);return n.createElement(g.Provider,{value:e},a.children)},y="mdxType",i={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var s=a.components,m=a.mdxType,t=a.originalType,g=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),y=l(s),c=m,o=y["".concat(g,".").concat(c)]||y[c]||i[c]||t;return s?n.createElement(o,p(p({ref:e},N),{},{components:s})):n.createElement(o,p({ref:e},N))}));function o(a,e){var s=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var t=s.length,p=new Array(t);p[0]=c;var r={};for(var g in e)hasOwnProperty.call(e,g)&&(r[g]=e[g]);r.originalType=a,r[y]="string"==typeof a?a:m,p[1]=r;for(var l=2;l<t;l++)p[l]=s[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,s)}c.displayName="MDXCreateElement"},46314:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>g,contentTitle:()=>p,default:()=>i,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var n=s(58168),m=(s(96540),s(15680));const t={title:"Happy Number"},p=void 0,r={unversionedId:"number-theory/happy-number",id:"number-theory/happy-number",title:"Happy Number",description:"\u63cf\u8ff0",source:"@site/docs/number-theory/happy-number.md",sourceDirName:"number-theory",slug:"/number-theory/happy-number",permalink:"/en/number-theory/happy-number",draft:!1,tags:[],version:"current",frontMatter:{title:"Happy Number"},sidebar:"docs",previous:{title:"\u6570\u8bba",permalink:"/en/number-theory/"},next:{title:"Ugly Number",permalink:"/en/number-theory/ugly-number"}},g={},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],N={toc:l},y="wrapper";function i(a){let{components:e,...s}=a;return(0,m.yg)(y,(0,n.A)({},N,s,{components:e,mdxType:"MDXLayout"}),(0,m.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,m.yg)("p",null,'Write a function to determine if a number is "happy number".'),(0,m.yg)("p",null,"A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers."),(0,m.yg)("p",null,(0,m.yg)("strong",{parentName:"p"},"Example"),": 19 is a happy number"),(0,m.yg)("p",null,(0,m.yg)("span",{parentName:"p",className:"math math-inline"},(0,m.yg)("span",{parentName:"span",className:"katex"},(0,m.yg)("span",{parentName:"span",className:"katex-mathml"},(0,m.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.yg)("semantics",{parentName:"math"},(0,m.yg)("mrow",{parentName:"semantics"},(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"1"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"+"),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"9"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"="),(0,m.yg)("mn",{parentName:"mrow"},"82")),(0,m.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1^2 + 9^2 = 82")))),(0,m.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"1"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"9"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.yg)("span",{parentName:"span",className:"mrel"},"="),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},"82")))))),(0,m.yg)("p",null,(0,m.yg)("span",{parentName:"p",className:"math math-inline"},(0,m.yg)("span",{parentName:"span",className:"katex"},(0,m.yg)("span",{parentName:"span",className:"katex-mathml"},(0,m.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.yg)("semantics",{parentName:"math"},(0,m.yg)("mrow",{parentName:"semantics"},(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"8"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"+"),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"2"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"="),(0,m.yg)("mn",{parentName:"mrow"},"68")),(0,m.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"8^2 + 2^2 = 68")))),(0,m.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"8"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"2"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.yg)("span",{parentName:"span",className:"mrel"},"="),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},"68")))))),(0,m.yg)("p",null,(0,m.yg)("span",{parentName:"p",className:"math math-inline"},(0,m.yg)("span",{parentName:"span",className:"katex"},(0,m.yg)("span",{parentName:"span",className:"katex-mathml"},(0,m.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.yg)("semantics",{parentName:"math"},(0,m.yg)("mrow",{parentName:"semantics"},(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"6"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"+"),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"8"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"="),(0,m.yg)("mn",{parentName:"mrow"},"100")),(0,m.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"6^2 + 8^2 = 100")))),(0,m.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"6"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"8"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.yg)("span",{parentName:"span",className:"mrel"},"="),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},"100")))))),(0,m.yg)("p",null,(0,m.yg)("span",{parentName:"p",className:"math math-inline"},(0,m.yg)("span",{parentName:"span",className:"katex"},(0,m.yg)("span",{parentName:"span",className:"katex-mathml"},(0,m.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.yg)("semantics",{parentName:"math"},(0,m.yg)("mrow",{parentName:"semantics"},(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"1"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"+"),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"0"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"+"),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"0"),(0,m.yg)("mn",{parentName:"msup"},"2")),(0,m.yg)("mo",{parentName:"mrow"},"="),(0,m.yg)("mn",{parentName:"mrow"},"1")),(0,m.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1^2 + 0^2 + 0^2 = 1")))),(0,m.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"1"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"0"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"0"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.yg)("span",{parentName:"span",className:"mrel"},"="),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},"1")))))),(0,m.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,m.yg)("p",null,"\u8fd9\u9898\u627e\u5230\u89c4\u5f8b\u540e\u5c31\u7b80\u5355\u4e86\u3002\u5982\u679c\u53f3\u8fb9\u7684\u51fa\u73b0\u4e86\u67d0\u4e2a\u91cd\u590d\u7684\u6570\uff0c\u4f46\u4e0d\u662f 1\uff0c\u8bf4\u660e\u4f1a\u65e0\u9650\u5faa\u73af\u4e0b\u53bb\uff0c\u8fd9\u4e2a\u6570\u5c31\u4e0d\u662f\u5feb\u4e50\u6570\uff0c\u5982\u679c\u662f 1\uff0c\u5219\u662f\u5feb\u4e50\u6570\u3002"),(0,m.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-java"},"// Happy Number\n// Time complexity: ?, Space complexity: ?\npublic class Solution {\n    public boolean isHappy(int n) {\n        final Set<Integer> existed = new HashSet<>();\n        while (true) {\n            int sum = 0;\n            while (n > 0) {\n                int digit = n % 10;\n                sum += digit * digit;\n                n /= 10;\n            }\n            if (existed.contains(sum)) {\n                return sum == 1;\n            } else {\n                existed.add(sum);\n                n = sum;\n            }\n        }\n    }\n}\n")))}i.isMDXComponent=!0}}]);