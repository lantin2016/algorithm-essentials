"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=s.createContext({}),u=function(e){var n=s.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return s.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},c=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return t?s.createElement(f,a(a({ref:n},p),{},{components:t})):s.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var s=t(7294),r=t(6010);const i="tabItem_Ymn6";function a(e){let{children:n,hidden:t,className:a}=e;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,a),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var s=t(7462),r=t(7294),i=t(6010),a=t(2389),l=t(7392),o=t(7094),u=t(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var n,t;const{lazy:a,block:c,defaultValue:m,values:f,groupId:b,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:g.map((e=>{let{props:{value:n,label:t,attributes:s}}=e;return{value:n,label:t,attributes:s}})),k=(0,l.l)(h,((e,n)=>e.value===n.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(n=null!=m?m:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:O}=(0,o.U)(),[I,T]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=j[b];null!=e&&e!==I&&h.some((n=>n.value===e))&&T(e)}const P=e=>{const n=e.currentTarget,t=S.indexOf(n),s=h[t].value;s!==I&&(N(n),T(s),null!=b&&O(b,String(s)))},w=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var s;const n=S.indexOf(e.currentTarget)+1;t=null!=(s=S[n])?s:S[0];break}case"ArrowLeft":{var r;const n=S.indexOf(e.currentTarget)-1;t=null!=(r=S[n])?r:S[S.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},h.map((e=>{let{value:n,label:t,attributes:a}=e;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:e=>S.push(e),onKeyDown:w,onFocus:P,onClick:P},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})))))}function m(e){const n=(0,a.Z)();return r.createElement(c,(0,s.Z)({key:String(n)},e))}},7751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var s=t(7462),r=(t(7294),t(3905)),i=t(5488),a=t(5162);const l={title:"Restore IP Addresses"},o=void 0,u={unversionedId:"dfs/restore-ip-addresses",id:"dfs/restore-ip-addresses",title:"Restore IP Addresses",description:"\u63cf\u8ff0",source:"@site/docs/dfs/restore-ip-addresses.md",sourceDirName:"dfs",slug:"/dfs/restore-ip-addresses",permalink:"/dfs/restore-ip-addresses",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dfs/restore-ip-addresses.md",tags:[],version:"current",frontMatter:{title:"Restore IP Addresses"},sidebar:"someSidebar",previous:{title:"N-Queens II",permalink:"/dfs/n-queens-ii"},next:{title:"Combination Sum",permalink:"/dfs/combination-sum"}},p={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u66b4\u529b\u6cd5",id:"\u66b4\u529b\u6cd5",level:4},{value:"DFS",id:"dfs",level:4}],c={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given a string containing only digits, restore it by returning all possible valid IP address combinations."),(0,r.kt)("p",null,"For example:\nGiven ",(0,r.kt)("inlineCode",{parentName:"p"},'"25525511135"'),","),(0,r.kt)("p",null,"return ",(0,r.kt)("inlineCode",{parentName:"p"},'["255.255.11.135", "255.255.111.35"]'),". (Order does not matter)"),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u672c\u8d28\u4e0a\u662f\u8981\u5c06\u4e09\u4e2a\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"."),"\u63d2\u5165\u5230\u5b57\u7b26\u4e32\u4e2d\uff0c\u6bcf\u4e2a\u70b9\u6709 3 \u4e2a\u53ef\u80fd\u7684\u4f4d\u7f6e\uff0c\u6700\u591a\u4f1a\u6709 27 \u4e2a\u6709\u6548\u7684 IP \u5730\u5740\uff0c\u56e0\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\u6700\u5927\u662f O(1)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e5f\u662f O(1)\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7528\u4e09\u5c42\u5faa\u73af\u66b4\u529b\u6c42\u89e3\uff0c\u53ef\u4ee5\u7528\u6df1\u641c\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("h4",{id:"\u66b4\u529b\u6cd5"},"\u66b4\u529b\u6cd5"),(0,r.kt)(i.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Restore IP Addresses\n# \u65f6\u95f4\u590d\u6742\u5ea6O(1)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def restoreIpAddresses(self, s: str) -> List[str]:\n        result = []\n        n = len(s)\n        for i in range(1, min(4, n-2)):\n            for j in range(i+1, min(i+4, n-1)):\n                for k in range(j+1, min(j+4, n)):\n                    s1, s2, s3, s4 = s[0 : i], s[i : j], s[j : k], s[k : n]\n                    if self.isValid(s1) and self.isValid(s2) and self.isValid(s3) and self.isValid(s4):\n                        result.append(s1 + "." + s2 + "." + s3 + "." + s4)\n        return result\n\n    @staticmethod\n    def isValid(s: str)->bool:\n        if len(s) > 3 or len(s) == 0 or (s[0] == \'0\' and len(s) > 1) or int(s) > 255:\n            return False\n        return True\n'))),(0,r.kt)(a.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Restore IP Addresses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(1)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<String> restoreIpAddresses(String s) {\n        List<String> result = new ArrayList<String>();\n        int n = s.length();\n        for(int i = 1; i < 4 && i < n-2; i++){\n            for(int j = i+1; j < i+4 && j < n-1; j++){\n                for(int k = j+1; k < j+4 && k < n; k++){\n                    String s1 = s.substring(0, i), s2 = s.substring(i, j), s3 = s.substring(j, k), s4 = s.substring(k, n);\n                    if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){\n                        result.add(s1 + "." + s2 + "." + s3 + "." + s4);\n                    }\n                }\n            }\n        }\n        return result;\n    }\n\n    private boolean isValid(String s){\n        if(s.length() > 3 || s.length() == 0 || (s.charAt(0) == \'0\' && s.length() > 1) || Integer.parseInt(s) > 255)\n            return false;\n        return true;\n    }\n}\n'))),(0,r.kt)(a.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Restore IP Addresses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(1)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<string> restoreIpAddresses(string s) {\n        vector<string> result;\n        int n = s.length();\n        for(int i = 1; i < 4 && i < n-2; i++){\n            for(int j = i+1; j < i+4 && j < n-1; j++){\n                for(int k = j+1; k < j+4 && k < n; k++){\n                    string s1 = s.substr(0, i), s2 = s.substr(i, j-i), s3 = s.substr(j, k-j), s4 = s.substr(k, n-k);\n                    if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){\n                        result.push_back(s1 + "." + s2 + "." + s3 + "." + s4);\n                    }\n                }\n            }\n        }\n        return result;\n    }\nprivate:\n    bool isValid(const string& s) {\n        if(s.length() > 3 || s.length() == 0 || (s[0] == \'0\' && s.length() > 1) || std::stoi(s) > 255)\n            return false;\n        return true;\n    }\n};\n')))),(0,r.kt)("h4",{id:"dfs"},"DFS"),(0,r.kt)(i.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Restore IP Addresses\n# \u65f6\u95f4\u590d\u6742\u5ea6O(1)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def restoreIpAddresses(self, s: str) -> List[str]:\n        result = []\n        ip = [] # \u5b58\u653e\u4e2d\u95f4\u7ed3\u679c\n        self.dfs(s, ip, result, 0)\n        return result\n\n    def dfs(self, s: str, ip: List[str], result: List[str], start: int):\n        '''DFS.\n          Args::\n            s: The original string\n            ip: Interim result\n            result: List of valid IP addresses\n            start: Current position\n        '''\n        if len(ip) == 4 and start == len(s): # \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.append(ip[0] + '.' + ip[1] + '.' + ip[2] + '.' + ip[3])\n            return\n\n        if len(s) - start > (4 - len(ip)) * 3: return  # \u526a\u679d\n        if len(s) - start < (4 - len(ip)): return  # \u526a\u679d\n\n        for i in range(1, 4):\n        #for (int i = start; i < start + 3 && i < s.length(); i++) {\n            if start + i > len(s): continue\n            num = int(s[start: start+i])\n\n            if num < 0 or num > 255: continue  # \u526a\u679d\n\n            ip.append(s[start: start+i])\n            self.dfs(s, ip, result, start+i)\n            ip.pop()\n\n            if num == 0: break  # \u4e0d\u5141\u8bb8\u524d\u7f000\uff0c\u4f46\u5141\u8bb8\u5355\u4e2a0\n"))),(0,r.kt)(a.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Restore IP Addresses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(1)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<String> restoreIpAddresses(String s) {\n        List<String> result = new ArrayList<>();\n        List<String> ip = new ArrayList<>();; // \u5b58\u653e\u4e2d\u95f4\u7ed3\u679c\n        dfs(s, ip, result, 0);\n        return result;\n    }\n\n    /**\n     * \u89e3\u6790\u5b57\u7b26\u4e32\n     * @param[in] s \u5b57\u7b26\u4e32\uff0c\u8f93\u5165\u6570\u636e\n     * @param[out] ip \u5b58\u653e\u4e2d\u95f4\u7ed3\u679c\n     * @param[out] result \u5b58\u653e\u6240\u6709\u53ef\u80fd\u7684IP\u5730\u5740\n     * @param[in] start \u5f53\u524d\u4f4d\u7f6e\n     * @return \u65e0\n     */\n    private static void dfs(String s, List<String> ip,\n                            List<String> result, int start) {\n        if (ip.size() == 4 && start == s.length()) {  // \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.add(ip.get(0) + '.' + ip.get(1) + '.' +\n                    ip.get(2) + '.' + ip.get(3));\n            return;\n        }\n\n        if (s.length() - start > (4 - ip.size()) * 3) return;  // \u526a\u679d\n        if (s.length() - start < (4 - ip.size())) return;  // \u526a\u679d\n\n        int num = 0;\n        for (int i = start; i < start + 3 && i < s.length(); i++) {\n            num = num * 10 + (s.charAt(i) - '0');\n\n            if (num < 0 || num > 255) continue;  // \u526a\u679d\n\n            ip.add(s.substring(start, i + 1));\n            dfs(s, ip, result, i + 1);\n            ip.remove(ip.size() - 1);\n\n            if (num == 0) break;  // \u4e0d\u5141\u8bb8\u524d\u7f000\uff0c\u4f46\u5141\u8bb8\u5355\u4e2a0\n        }\n    }\n}\n"))),(0,r.kt)(a.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Restore IP Addresses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(1)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<string> restoreIpAddresses(const string& s) {\n        vector<string> result;\n        vector<string> ip; // \u5b58\u653e\u4e2d\u95f4\u7ed3\u679c\n        dfs(s, ip, result, 0);\n        return result;\n    }\n\n    /**\n     * @brief \u89e3\u6790\u5b57\u7b26\u4e32\n     * @param[in] s \u5b57\u7b26\u4e32\uff0c\u8f93\u5165\u6570\u636e\n     * @param[out] ip \u5b58\u653e\u4e2d\u95f4\u7ed3\u679c\n     * @param[out] result \u5b58\u653e\u6240\u6709\u53ef\u80fd\u7684IP\u5730\u5740\n     * @param[in] start \u5f53\u524d\u4f4d\u7f6e\n     * @return \u65e0\n     */\n    void dfs(string s, vector<string>& ip, vector<string> &result,\n            size_t start) {\n        if (ip.size() == 4 && start == s.size()) {  // \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.push_back(ip[0] + '.' + ip[1] + '.' + ip[2] + '.' + ip[3]);\n            return;\n        }\n\n        if (s.size() - start > (4 - ip.size()) * 3) return;  // \u526a\u679d\n        if (s.size() - start < (4 - ip.size())) return;  // \u526a\u679d\n\n        int num = 0;\n        for (size_t i = start; i < start + 3 && i < s.size(); i++) {\n            num = num * 10 + (s[i] - '0');\n\n            if (num < 0 || num > 255) continue;  // \u526a\u679d\n\n            ip.push_back(s.substr(start, i - start + 1));\n            dfs(s, ip, result, i + 1);\n            ip.pop_back();\n\n            if (num == 0) break;  // \u4e0d\u5141\u8bb8\u524d\u7f000\uff0c\u4f46\u5141\u8bb8\u5355\u4e2a0\n        }\n    }\n};\n")))))}m.isMDXComponent=!0}}]);