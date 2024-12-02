"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[278],{15680:(a,e,n)=>{n.d(e,{xA:()=>g,yg:()=>u});var s=n(96540);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function m(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,s)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,s,t=function(a,e){if(null==a)return{};var n,s,t={},m=Object.keys(a);for(s=0;s<m.length;s++)n=m[s],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)n=m[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var l=s.createContext({}),i=function(a){var e=s.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},g=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},o="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},N=s.forwardRef((function(a,e){var n=a.components,t=a.mdxType,m=a.originalType,l=a.parentName,g=p(a,["components","mdxType","originalType","parentName"]),o=i(n),N=t,u=o["".concat(l,".").concat(N)]||o[N]||c[N]||m;return n?s.createElement(u,r(r({ref:e},g),{},{components:n})):s.createElement(u,r({ref:e},g))}));function u(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var m=n.length,r=new Array(m);r[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[o]="string"==typeof a?a:t,r[1]=p;for(var i=2;i<m;i++)r[i]=n[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}N.displayName="MDXCreateElement"},19365:(a,e,n)=>{n.d(e,{A:()=>r});var s=n(96540),t=n(20053);const m={tabItem:"tabItem_Ymn6"};function r(a){let{children:e,hidden:n,className:r}=a;return s.createElement("div",{role:"tabpanel",className:(0,t.A)(m.tabItem,r),hidden:n},e)}},4865:(a,e,n)=>{n.d(e,{A:()=>c});var s=n(58168),t=n(96540),m=n(20053),r=n(92303),p=n(31682),l=n(86976),i=n(23104);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function o(a){const{lazy:e,block:n,defaultValue:r,values:o,groupId:c,className:N}=a,u=t.Children.map(a.children,(a=>{if((0,t.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=o??u.map((a=>{let{props:{value:e,label:n,attributes:s}}=a;return{value:e,label:n,attributes:s}})),h=(0,p.X)(y,((a,e)=>a.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const d=null===r?r:r??u.find((a=>a.props.default))?.props.value??u[0].props.value;if(null!==d&&!y.some((a=>a.value===d)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${y.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,l.x)(),[f,w]=(0,t.useState)(d),k=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.a_)();if(null!=c){const a=v[c];null!=a&&a!==f&&y.some((e=>e.value===a))&&w(a)}const x=a=>{const e=a.currentTarget,n=k.indexOf(e),s=y[n].value;s!==f&&(O(e),w(s),null!=c&&b(c,String(s)))},C=a=>{let e=null;switch(a.key){case"ArrowRight":{const n=k.indexOf(a.currentTarget)+1;e=k[n]??k[0];break}case"ArrowLeft":{const n=k.indexOf(a.currentTarget)-1;e=k[n]??k[k.length-1];break}}e?.focus()};return t.createElement("div",{className:(0,m.A)("tabs-container",g.tabList)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("tabs",{"tabs--block":n},N)},y.map((a=>{let{value:e,label:n,attributes:r}=a;return t.createElement("li",(0,s.A)({role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,key:e,ref:a=>k.push(a),onKeyDown:C,onFocus:x,onClick:x},r,{className:(0,m.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":f===e})}),n??e)}))),e?(0,t.cloneElement)(u.filter((a=>a.props.value===f))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},u.map(((a,e)=>(0,t.cloneElement)(a,{key:e,hidden:a.props.value!==f})))))}function c(a){const e=(0,r.A)();return t.createElement(o,(0,s.A)({key:String(e)},a))}},38883:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var s=n(58168),t=(n(96540),n(15680)),m=n(4865),r=n(19365);const p={title:"Combination Sum"},l=void 0,i={unversionedId:"dfs/combination-sum",id:"dfs/combination-sum",title:"Combination Sum",description:"\u63cf\u8ff0",source:"@site/docs/dfs/combination-sum.md",sourceDirName:"dfs",slug:"/dfs/combination-sum",permalink:"/en/dfs/combination-sum",draft:!1,tags:[],version:"current",frontMatter:{title:"Combination Sum"},sidebar:"docs",previous:{title:"Restore IP Addresses",permalink:"/en/dfs/restore-ip-addresses"},next:{title:"Combination Sum II",permalink:"/en/dfs/combination-sum-ii"}},g={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:o},N="wrapper";function u(a){let{components:e,...n}=a;return(0,t.yg)(N,(0,s.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,t.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,t.yg)("p",null,"Given a set of candidate numbers (",(0,t.yg)("inlineCode",{parentName:"p"},"C"),") and a target number (",(0,t.yg)("inlineCode",{parentName:"p"},"T"),"), find all unique combinations in ",(0,t.yg)("inlineCode",{parentName:"p"},"C")," where the candidate numbers sums to ",(0,t.yg)("inlineCode",{parentName:"p"},"T"),"."),(0,t.yg)("p",null,"The same repeated number may be chosen from ",(0,t.yg)("inlineCode",{parentName:"p"},"C")," ",(0,t.yg)("strong",{parentName:"p"},"unlimited")," number of times."),(0,t.yg)("p",null,"Note:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"All numbers (including target) will be positive integers."),(0,t.yg)("li",{parentName:"ul"},"Elements in a combination (",(0,t.yg)("span",{parentName:"li",className:"math math-inline"},(0,t.yg)("span",{parentName:"span",className:"katex"},(0,t.yg)("span",{parentName:"span",className:"katex-mathml"},(0,t.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.yg)("semantics",{parentName:"math"},(0,t.yg)("mrow",{parentName:"semantics"},(0,t.yg)("msub",{parentName:"mrow"},(0,t.yg)("mi",{parentName:"msub"},"a"),(0,t.yg)("mn",{parentName:"msub"},"1")),(0,t.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,t.yg)("msub",{parentName:"mrow"},(0,t.yg)("mi",{parentName:"msub"},"a"),(0,t.yg)("mn",{parentName:"msub"},"2")),(0,t.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,t.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,t.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,t.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,t.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,t.yg)("msub",{parentName:"mrow"},(0,t.yg)("mi",{parentName:"msub"},"a"),(0,t.yg)("mi",{parentName:"msub"},"k"))),(0,t.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a_1, a_2, ..., a_k")))),(0,t.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,t.yg)("span",{parentName:"span"})))))),(0,t.yg)("span",{parentName:"span",className:"mpunct"},","),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,t.yg)("span",{parentName:"span"})))))),(0,t.yg)("span",{parentName:"span",className:"mpunct"},","),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},"..."),(0,t.yg)("span",{parentName:"span",className:"mpunct"},","),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,t.yg)("span",{parentName:"span"})))))))))),") must be in non-descending order. (ie, ",(0,t.yg)("span",{parentName:"li",className:"math math-inline"},(0,t.yg)("span",{parentName:"span",className:"katex"},(0,t.yg)("span",{parentName:"span",className:"katex-mathml"},(0,t.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.yg)("semantics",{parentName:"math"},(0,t.yg)("mrow",{parentName:"semantics"},(0,t.yg)("msub",{parentName:"mrow"},(0,t.yg)("mi",{parentName:"msub"},"a"),(0,t.yg)("mn",{parentName:"msub"},"1")),(0,t.yg)("mo",{parentName:"mrow"},"\u2264"),(0,t.yg)("msub",{parentName:"mrow"},(0,t.yg)("mi",{parentName:"msub"},"a"),(0,t.yg)("mn",{parentName:"msub"},"2")),(0,t.yg)("mo",{parentName:"mrow"},"\u2264"),(0,t.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,t.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,t.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,t.yg)("mo",{parentName:"mrow"},"\u2264"),(0,t.yg)("msub",{parentName:"mrow"},(0,t.yg)("mi",{parentName:"msub"},"a"),(0,t.yg)("mi",{parentName:"msub"},"k"))),(0,t.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a_1 \\leq a_2 \\leq ... \\leq a_k")))),(0,t.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.786em",verticalAlign:"-0.15em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,t.yg)("span",{parentName:"span"})))))),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.786em",verticalAlign:"-0.15em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,t.yg)("span",{parentName:"span"})))))),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},"..."),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.yg)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,t.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),(0,t.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,t.yg)("span",{parentName:"span"})))))))))),")."),(0,t.yg)("li",{parentName:"ul"},"The solution set must not contain duplicate combinations.")),(0,t.yg)("p",null,"For example, given candidate set ",(0,t.yg)("inlineCode",{parentName:"p"},"2,3,6,7")," and target ",(0,t.yg)("inlineCode",{parentName:"p"},"7"),",\nA solution set is:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"[7]\n[2, 2, 3]\n")),(0,t.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,t.yg)("p",null,"\u65e0"),(0,t.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,t.yg)(m.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,t.yg)(r.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// Combination Sum\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> combinationSum(int[] nums, int target) {\n        Arrays.sort(nums);\n        List<List<Integer>> result = new ArrayList<>(); // \u6700\u7ec8\u7ed3\u679c\n        List<Integer> path = new ArrayList<>(); // \u4e2d\u95f4\u7ed3\u679c\n        dfs(nums, path, result, target, 0);\n        return result;\n    }\n\n    private static void dfs(int[] nums, List<Integer> path,\n                            List<List<Integer>> result, int gap, int start) {\n        if (gap == 0) {  // \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.add(new ArrayList<Integer>(path));\n            return;\n        }\n        for (int i = start; i < nums.length; i++) { // \u6269\u5c55\u72b6\u6001\n            if (gap < nums[i]) return; // \u526a\u679d\n\n            path.add(nums[i]); // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            dfs(nums, path, result, gap - nums[i], i);\n            path.remove(path.size() - 1);  // \u64a4\u9500\u52a8\u4f5c\n        }\n    }\n}\n"))),(0,t.yg)(r.A,{value:"cpp",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"// Combination Sum\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > combinationSum(vector<int> &nums, int target) {\n        sort(nums.begin(), nums.end());\n        vector<vector<int> > result; // \u6700\u7ec8\u7ed3\u679c\n        vector<int> path; // \u4e2d\u95f4\u7ed3\u679c\n        dfs(nums, path, result, target, 0);\n        return result;\n    }\n\nprivate:\n    void dfs(vector<int>& nums, vector<int>& path, vector<vector<int> > &result,\n            int gap, int start) {\n        if (gap == 0) {  // \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.push_back(path);\n            return;\n        }\n        for (size_t i = start; i < nums.size(); i++) { // \u6269\u5c55\u72b6\u6001\n            if (gap < nums[i]) return; // \u526a\u679d\n\n            path.push_back(nums[i]); // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            dfs(nums, path, result, gap - nums[i], i);\n            path.pop_back();  // \u64a4\u9500\u52a8\u4f5c\n        }\n    }\n};\n")))),(0,t.yg)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/en/dfs/combination-sum-ii"},"Combination Sum II")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/en/dfs/combination-sum-iii"},"Combination Sum III"))))}u.isMDXComponent=!0}}]);