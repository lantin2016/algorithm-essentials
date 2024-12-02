"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6467],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,y=u["".concat(p,".").concat(m)]||u[m]||g[m]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const i={title:"\u7b80\u4ecb"},a=void 0,l={unversionedId:"sorting/bucket-sort/README",id:"sorting/bucket-sort/README",title:"\u7b80\u4ecb",description:"\u6876\u6392\u5e8f(Bucket Sort)\u7684\u57fa\u672c\u601d\u8def\u662f\uff1a",source:"@site/docs/sorting/bucket-sort/README.md",sourceDirName:"sorting/bucket-sort",slug:"/sorting/bucket-sort/",permalink:"/en/sorting/bucket-sort/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"docs",previous:{title:"K Closest Points to Origin",permalink:"/en/sorting/quick-sort/k-closest-points-to-origin"},next:{title:"First Missing Positive",permalink:"/en/sorting/bucket-sort/first-missing-positive"}},p={},s=[],c={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u6876\u6392\u5e8f"),"(Bucket Sort)\u7684\u57fa\u672c\u601d\u8def\u662f\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u5c06\u5f85\u6392\u5e8f\u5143\u7d20\u5212\u5206\u5230\u4e0d\u540c\u7684\u75db\u3002\u5148\u626b\u63cf\u4e00\u904d\u5e8f\u5217\u6c42\u51fa\u6700\u5927\u503c",(0,o.yg)("inlineCode",{parentName:"li"},"maxV"),"\u548c\u6700\u5c0f\u503c",(0,o.yg)("inlineCode",{parentName:"li"},"minV"),"\uff0c\u8bbe\u6876\u7684\u4e2a\u6570\u4e3a",(0,o.yg)("inlineCode",{parentName:"li"},"k"),"\uff0c\u5219\u628a\u533a\u95f4",(0,o.yg)("inlineCode",{parentName:"li"},"[minV, maxV]"),"\u5747\u5300\u5212\u5206\u6210",(0,o.yg)("inlineCode",{parentName:"li"},"k"),"\u4e2a\u533a\u95f4\uff0c\u6bcf\u4e2a\u533a\u95f4\u5c31\u662f\u4e00\u4e2a\u6876\u3002\u5c06\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u5206\u914d\u5230\u5404\u81ea\u7684\u6876\u3002"),(0,o.yg)("li",{parentName:"ol"},"\u5bf9\u6bcf\u4e2a\u6876\u5185\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u79cd\u6392\u5e8f\u7b97\u6cd5\u3002"),(0,o.yg)("li",{parentName:"ol"},"\u5c06\u5404\u4e2a\u6876\u4e2d\u7684\u5143\u7d20\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7684\u6709\u5e8f\u5e8f\u5217\u3002")),(0,o.yg)("p",null,"\u5047\u8bbe\u6570\u636e\u662f\u5747\u5300\u5206\u5e03\u7684\uff0c\u5219\u6bcf\u4e2a\u6876\u7684\u5143\u7d20\u5e73\u5747\u4e2a\u6570\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"n/k"),"\u3002\u5047\u8bbe\u9009\u62e9\u7528\u5feb\u901f\u6392\u5e8f\u5bf9\u6bcf\u4e2a\u6876\u5185\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff0c\u90a3\u4e48\u6bcf\u6b21\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"O(n/klog(n/k))"),"\u3002\u603b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"O(n)+O(m)O(n/klog(n/k))"),"=",(0,o.yg)("inlineCode",{parentName:"p"},"O(n+nlog(n/k))"),"=",(0,o.yg)("inlineCode",{parentName:"p"},"O(n+nlogn-nlogk"),"\u3002\u5f53",(0,o.yg)("inlineCode",{parentName:"p"},"k"),"\u63a5\u8fd1\u4e8e",(0,o.yg)("inlineCode",{parentName:"p"},"n"),"\u65f6\uff0c\u6876\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u53ef\u4ee5\u8fd1\u4f3c\u8ba4\u4e3a\u662f",(0,o.yg)("inlineCode",{parentName:"p"},"O(n)"),"\u7684\u3002\u5373\u6876\u8d8a\u591a\uff0c\u65f6\u95f4\u6548\u7387\u5c31\u8d8a\u9ad8\uff0c\u800c\u6876\u8d8a\u591a\uff0c\u7a7a\u95f4\u5c31\u8d8a\u5927\u3002"))}g.isMDXComponent=!0}}]);