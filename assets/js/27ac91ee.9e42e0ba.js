"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5274],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>b});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,b=p["".concat(i,".").concat(g)]||p[g]||m[g]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(96540),a=r(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:r},t)}},4865:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(58168),a=r(96540),l=r(20053),o=r(92303),s=r(31682),i=r(86976),u=r(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:r,defaultValue:o,values:p,groupId:m,className:g}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=p??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),f=(0,s.X)(d,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!d.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,i.x)(),[O,T]=(0,a.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.a_)();if(null!=m){const e=y[m];null!=e&&e!==O&&d.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,r=w.indexOf(t),n=d[r].value;n!==O&&(N(t),T(n),null!=m&&h(m,String(n)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},g)},d.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:S,onClick:S},o,{className:(0,l.A)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":O===t})}),r??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.A)();return a.createElement(p,(0,n.A)({key:String(t)},e))}},12334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),l=r(4865),o=r(19365);const s={title:"Largest Number"},i=void 0,u={unversionedId:"string/largest-number",id:"string/largest-number",title:"Largest Number",description:"\u63cf\u8ff0",source:"@site/docs/string/largest-number.md",sourceDirName:"string",slug:"/string/largest-number",permalink:"/string/largest-number",draft:!1,tags:[],version:"current",frontMatter:{title:"Largest Number"},sidebar:"docs",previous:{title:"Greatest Common Divisor of Strings",permalink:"/string/greatest-common-divisor-of-strings"},next:{title:"Reverse Bits",permalink:"/bitwise-operations/reverse-bits"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:p},g="wrapper";function b(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"TODO"),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,'\u628a\u6570\u7ec4\u91cc\u7684\u6bcf\u4e2a\u6574\u6570\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\uff0c\u6309\u5b57\u6bcd\u987a\u5e8f\u5012\u5e8f\u6392\u5e8f\uff0c\u8fd9\u6837\u5c31\u5c31\u80fd\u4fdd\u8bc1"9"\u8fd9\u7c7b\u6570\u7ec4\u8dd1\u5230\u524d\u9762\uff0c\u5360\u636e\u9ad8\u4f4d\uff0c\u4ece\u800c\u4f7f\u5f97\u8fde\u63a5\u800c\u6210\u7684\u6570\u5b57\u6700\u5927\u3002'),(0,a.yg)("p",null,"\u6309\u5b57\u6bcd\u987a\u5e8f\u5012\u5e8f\u6392\u5e8f\uff0c Comparator\u5199\u6210",(0,a.yg)("inlineCode",{parentName:"p"},"s2.compare(s1)"),'\u5373\u53ef\uff0c\u4e0d\u8fc7\u6709\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u4f8b\u5982 "30"\u548c"3"\uff0c\u5982\u679c\u6309\u7167',(0,a.yg)("inlineCode",{parentName:"p"},"s2.compare(s1)"),'\u8fdb\u884c\u6bd4\u8f83\uff0c"30" \u4f1a\u88ab\u8ba4\u4e3a\u6bd4"3" \u5927\uff0c\u4f46\u8fd9\u91cc\u9700\u8981"3"\u6392\u5728"30"\u524d\u9762\uff0c\u56e0\u6b64\uff0cComparator\u53ef\u4ee5\u6362\u4e00\u79cd\u5199\u6cd5\uff0c',(0,a.yg)("inlineCode",{parentName:"p"},"(s2+s1).compareTo(s1+s2)"),"\uff0c\u5c31\u80fd\u5904\u7406\u8fd9\u79cd\u7279\u6b8a\u60c5\u51b5\u4e86\u3002"),(0,a.yg)("p",null,'\u6392\u5b8c\u5e8f\u540e\u4e00\u4e2a\u4e00\u4e2a\u8fde\u8d77\u6765\u5c31\u597d\u3002\u6ce8\u610f\uff0c\u82e5\u9996\u5b57\u6bcd\u662f"0"\uff0c\u8bf4\u660e\u7ed3\u679c\u672c\u8eab\u5c31\u662f0\uff0c\u6ca1\u6709\u5fc5\u8981\u628a\u540e\u9762\u7684 "00", "000" \u90fd\u8fde\u4e0a\uff0c\u76f4\u63a5\u8fd4\u56de0\u5373\u53ef\u3002'),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(l.A,{defaultValue:"java",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,a.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// Largest Number\n// Time complexity: O(nlogn)\n// Space complexity: O(n)\nclass Solution {\n    private class LargerNumberComparator implements Comparator<String> {\n        @Override\n        public int compare(String a, String b) {\n            String order1 = a + b;\n            String order2 = b + a;\n           return order2.compareTo(order1);\n        }\n    }\n\n    public String largestNumber(int[] nums) {\n        String[] strs = new String[nums.length];\n        for (int i = 0; i < nums.length; i++) {\n            strs[i] = String.valueOf(nums[i]);\n        }\n\n        // Sort strings according to the custom comparator.\n        Arrays.sort(strs, new LargerNumberComparator());\n\n        // After sorted, if the largest number is `0`,\n        // the entire number is zero.\n        if (strs[0].equals("0")) {\n            return "0";\n        }\n\n        // concat all numbers to build the final number\n        StringBuffer sb = new StringBuffer();\n        for (String s : strs) {\n            sb.append(s);\n        }\n\n        return sb.toString();\n    }\n}\n'))),(0,a.yg)(o.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))))}b.isMDXComponent=!0}}]);