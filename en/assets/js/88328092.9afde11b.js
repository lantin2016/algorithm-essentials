"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8289],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(96540),a=t(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(58168),a=t(96540),o=t(20053),l=t(92303),i=t(31682),s=t(86976),u=t(23104);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:n,block:t,defaultValue:l,values:p,groupId:m,className:d}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),g=(0,i.X)(b,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,s.x)(),[w,O]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.a_)();if(null!=m){const e=y[m];null!=e&&e!==w&&b.some((n=>n.value===e))&&O(e)}const P=e=>{const n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==w&&(T(n),O(r),null!=m&&h(m,String(r)))},E=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,o.A)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},d)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>x.push(e),onKeyDown:E,onFocus:P,onClick:P},l,{className:(0,o.A)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":w===n})}),t??n)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,l.A)();return a.createElement(p,(0,r.A)({key:String(n)},e))}},51069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(58168),a=(t(96540),t(15680)),o=t(4865),l=t(19365);const i={title:"Accounts Merge"},s=void 0,u={unversionedId:"graph/ufs/accounts-merge",id:"graph/ufs/accounts-merge",title:"Accounts Merge",description:"\u63cf\u8ff0",source:"@site/docs/graph/ufs/accounts-merge.md",sourceDirName:"graph/ufs",slug:"/graph/ufs/accounts-merge",permalink:"/en/graph/ufs/accounts-merge",draft:!1,tags:[],version:"current",frontMatter:{title:"Accounts Merge"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:p},d="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"TODO"),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)(o.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// TODO\n"))),(0,a.yg)(l.A,{value:"cpp",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"class DSU {\n// Plese copy from https://algorithm-essentials.soulmachine.me/graph/ufs/#union-by-rank\n};\n\n// Sentence Similarity II\n// Time complexity: O(Nlog*P + P)\n// Space complexity: O(P)\nclass Solution {\npublic:\n    bool areSentencesSimilarTwo(vector<string>& sentence1, vector<string>& sentence2, vector<vector<string>>& similarPairs) {\n        if (sentence1.size() != sentence2.size()) return false;\n        const int N = sentence1.size();\n\n        unordered_map<string, int> index_map;\n        int P = 0; // number of unique words in similarPairs\n        DSU dsu(similarPairs.size() * 2);\n        for (const auto &pair : similarPairs) {\n            for (const auto &word : pair) {\n                if (index_map.find(word) == index_map.end()) {\n                    index_map[word] = P++;\n                }\n            }\n            dsu.merge(index_map[pair[0]], index_map[pair[1]]);\n        }\n        \n        for (int i = 0; i < N; i++) {\n            const string& word1 = sentence1[i], word2 = sentence2[i];\n            if (word1 == word2) continue;\n            if (index_map.find(word1) == index_map.end() || index_map.find(word2) == index_map.end() || dsu.find(index_map[word1]) != dsu.find(index_map[word2])) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n")))))}f.isMDXComponent=!0}}]);