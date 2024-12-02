"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8586],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>y});var t=n(96540);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},o=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(n),g=s,y=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return n?t.createElement(y,m(m({ref:a},o),{},{components:n})):t.createElement(y,m({ref:a},o))}));function y(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,m=new Array(r);m[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:s,m[1]=p;for(var i=2;i<r;i++)m[i]=n[i];return t.createElement.apply(null,m)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>m});var t=n(96540),s=n(20053);const r={tabItem:"tabItem_Ymn6"};function m(e){let{children:a,hidden:n,className:m}=e;return t.createElement("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,m),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>u});var t=n(58168),s=n(96540),r=n(20053),m=n(92303),p=n(31682),l=n(86976),i=n(23104);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:a,block:n,defaultValue:m,values:c,groupId:u,className:g}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??y.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),d=(0,p.X)(N,((e,a)=>e.value===a.value));if(d.length>0)throw new Error(`Docusaurus error: Duplicate values "${d.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,l.x)(),[f,w]=(0,s.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.a_)();if(null!=u){const e=v[u];null!=e&&e!==f&&N.some((a=>a.value===e))&&w(e)}const T=e=>{const a=e.currentTarget,n=x.indexOf(a),t=N[n].value;t!==f&&(O(a),w(t),null!=u&&b(u,String(t)))},E=e=>{let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;a=x[n]??x[x.length-1];break}}a?.focus()};return s.createElement("div",{className:(0,r.A)("tabs-container",o.tabList)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},g)},N.map((e=>{let{value:a,label:n,attributes:m}=e;return s.createElement("li",(0,t.A)({role:"tab",tabIndex:f===a?0:-1,"aria-selected":f===a,key:a,ref:e=>x.push(e),onKeyDown:E,onFocus:T,onClick:T},m,{className:(0,r.A)("tabs__item",o.tabItem,m?.className,{"tabs__item--active":f===a})}),n??a)}))),a?(0,s.cloneElement)(y.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==f})))))}function u(e){const a=(0,m.A)();return s.createElement(c,(0,t.A)({key:String(a)},e))}},84904:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var t=n(58168),s=(n(96540),n(15680)),r=n(4865),m=n(19365);const p={title:"Pow(x,n)"},l=void 0,i={unversionedId:"divide-and-conquer/pow",id:"divide-and-conquer/pow",title:"Pow(x,n)",description:"\u63cf\u8ff0",source:"@site/docs/divide-and-conquer/pow.md",sourceDirName:"divide-and-conquer",slug:"/divide-and-conquer/pow",permalink:"/divide-and-conquer/pow",draft:!1,tags:[],version:"current",frontMatter:{title:"Pow(x,n)"},sidebar:"docs",previous:{title:"Combinations",permalink:"/brute-force/combinations"},next:{title:"Sqrt(x)",permalink:"/divide-and-conquer/sqrt"}},o={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],u={toc:c},g="wrapper";function y(e){let{components:a,...n}=e;return(0,s.yg)(g,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.yg)("p",null,"Implement ",(0,s.yg)("inlineCode",{parentName:"p"},"pow(x, n)"),"."),(0,s.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.yg)("p",null,"\u4e8c\u5206\u6cd5\uff0c",(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"x"),(0,s.yg)("mi",{parentName:"msup"},"n")),(0,s.yg)("mo",{parentName:"mrow"},"="),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"x"),(0,s.yg)("mrow",{parentName:"msup"},(0,s.yg)("mi",{parentName:"mrow"},"n"),(0,s.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.yg)("mn",{parentName:"mrow"},"2"))),(0,s.yg)("mo",{parentName:"mrow"},"\xd7"),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"x"),(0,s.yg)("mrow",{parentName:"msup"},(0,s.yg)("mi",{parentName:"mrow"},"n"),(0,s.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.yg)("mn",{parentName:"mrow"},"2"))),(0,s.yg)("mo",{parentName:"mrow"},"\xd7"),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msup"},"x"),(0,s.yg)("mrow",{parentName:"msup"},(0,s.yg)("mi",{parentName:"mrow"},"n"),(0,s.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,s.yg)("mn",{parentName:"mrow"},"2")))),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x^n = x^{n/2} \\times x^{n/2} \\times x^{n\\%2}")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6644em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"="),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.9713em",verticalAlign:"-0.0833em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"/2"))))))))),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.9713em",verticalAlign:"-0.0833em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"/2"))))))))),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.888em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"%2")))))))))))))),(0,s.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.yg)(r.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.yg)(m.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public double myPow(double x, int n) {\n        if (n < 0) return 1.0 / power(x, -n);\n        else return power(x, n);\n    }\n    private static double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n}\n"))),(0,s.yg)(m.A,{value:"cpp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-cpp"},"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    double myPow(double x, int n) {\n        long long N = n; // to prevent overflow\n        if (N < 0) return power(1/x, -N);\n        else return power(x, N);\n    }\nprivate:\n    double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n};\n")))),(0,s.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/divide-and-conquer/sqrt"},"Sqrt(x)"))))}y.isMDXComponent=!0}}]);