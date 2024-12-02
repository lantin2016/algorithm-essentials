"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9829],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>v});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(96540),o=n(20053);const i={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,a),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(58168),o=n(96540),i=n(20053),a=n(92303),s=n(31682),l=n(86976),c=n(23104);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:a,values:p,groupId:m,className:d}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.X)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===a?a:a??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,l.x)(),[k,O]=(0,o.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.a_)();if(null!=m){const e=y[m];null!=e&&e!==k&&b.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==k&&(T(t),O(r),null!=m&&h(m,String(r)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.A)("tabs-container",u.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},d)},b.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.A)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:j,onClick:j},a,{className:(0,i.A)("tabs__item",u.tabItem,a?.className,{"tabs__item--active":k===t})}),n??t)}))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,a.A)();return o.createElement(p,(0,r.A)({key:String(t)},e))}},68956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(58168),o=(n(96540),n(15680)),i=n(4865),a=n(19365);const s={title:"K Closest Points to Origin"},l=void 0,c={unversionedId:"sorting/quick-sort/k-closest-points-to-origin",id:"sorting/quick-sort/k-closest-points-to-origin",title:"K Closest Points to Origin",description:"\u63cf\u8ff0",source:"@site/docs/sorting/quick-sort/k-closest-points-to-origin.md",sourceDirName:"sorting/quick-sort",slug:"/sorting/quick-sort/k-closest-points-to-origin",permalink:"/sorting/quick-sort/k-closest-points-to-origin",draft:!1,tags:[],version:"current",frontMatter:{title:"K Closest Points to Origin"},sidebar:"docs",previous:{title:"Kth Largest Element in an Array",permalink:"/sorting/quick-sort/kth-largest-element-in-an-array"},next:{title:"\u7b80\u4ecb",permalink:"/sorting/bucket-sort/"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:p},d="wrapper";function v(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.yg)("p",null,"TODO"),(0,o.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,o.yg)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u53ef\u4ee5\u662f\u4efb\u610f\u987a\u5e8f\uff0c\u7528 Quick select."),(0,o.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.yg)(i.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,o.yg)(a.A,{value:"java",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"// TODO\n"))),(0,o.yg)(a.A,{value:"cpp",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"// K Closest Points to Origin\n// Time complexity: O(N)\n// Space complexity: O(1)\nclass Solution {\npublic:\n    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {\n        quick_select(points, 0, points.size() - 1, k-1);\n        vector<vector<int>> result;\n        std::copy(points.begin(), points.begin() + k, std::back_inserter(result));\n        return result;\n    }\n\nprivate:\n    vector<int> quick_select(vector<vector<int>>& points, int low, int high, int k) {\n        if (low == high) return points[low];\n        const int pos = partition(points, low, high);\n\n        if (pos == k) {\n            return points[pos];\n        } else if (pos < k) {\n            return quick_select(points, pos+1, high, k);\n        } else {\n            return quick_select(points, low, pos-1, k);\n        }\n    }\n    int partition(vector<vector<int>>& points, int i, int j) {\n        const vector<int> pivot = points[i]; // copy, do NOT use reference!\n        const int pivot_dist = dist(pivot);\n        while (i < j) {\n            while (i < j && dist(points[j]) >= pivot_dist) --j;\n            points[i] = points[j];\n            while(i < j && dist(points[i]) <= pivot_dist) ++i;\n            points[j] = points[i];\n        }\n        points[i] = pivot;\n        return i;\n    }\n    \n    int dist(const vector<int>& p) {\n        return p[0] * p[0] + p[1] * p[1];\n    }\n};\n")))))}v.isMDXComponent=!0}}]);