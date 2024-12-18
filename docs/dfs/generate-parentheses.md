---
title: Generate Parentheses
---

### 描述

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given `n = 3`, a solution set is:

```
"((()))", "(()())", "(())()", "()(())", "()()()"
```

### 分析

小括号串是一个递归结构，跟单链表、二叉树等递归结构一样，首先想到用递归。

一步步构造字符串。当左括号出现次数`<n`时，就可以放置新的左括号。当右括号出现次数小于左括号出现次数时，就可以放置新的右括号。

### 代码 1

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Generate Parentheses
// 时间复杂度O(TODO)，空间复杂度O(n)
public class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        StringBuilder path = new StringBuilder();
        if (n > 0) generate(n, path, result, 0, 0);
        return result;
    }
    // l 表示 ( 出现的次数, r 表示 ) 出现的次数
    private static void generate(int n, StringBuilder path,
                                 List<String> result, int l, int r) {
        if (l == n) {
            StringBuilder sb = new StringBuilder(path);
            for (int i = 0; i < n - r; ++i) sb.append(')');
            result.add(sb.toString());
            return;
        }

        path.append('(');
        generate(n, path, result, l + 1, r);
        path.deleteCharAt(path.length() - 1);

        if (l > r) {
            path.append(')');
            generate(n, path, result, l, r + 1);
            path.deleteCharAt(path.length() - 1);
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Generate Parentheses
// 时间复杂度O(TODO)，空间复杂度O(n)
class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string path;
        if (n > 0) generate(n, path, result, 0, 0);
        return result;
    }
    // l 表示 ( 出现的次数, r 表示 ) 出现的次数
    void generate(int n, string& path, vector<string> &result, int l, int r) {
        if (l == n) {
            string s(path);
            result.push_back(s.append(n - r, ')'));
            return;
        }

        path.push_back('(');
        generate(n, path, result, l + 1, r);
        path.pop_back();

        if (l > r) {
            path.push_back(')');
            generate(n, path, result, l, r + 1);
            path.pop_back();
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Generate Parentheses
# 时间复杂度O(TODO)，空间复杂度O(n)
class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        result = []
        path = []
        if n > 0:
            self.generate(n, path, result, 0, 0)
        return result

    # l 表示 ( 出现的次数, r 表示 ) 出现的次数
    def generate(self, n: int, path: list, result: list[str], l: int, r: int) -> None:
        if l == n:
            result.append(''.join(path + [')' * (n - r)]))
            return

        path.append('(')
        self.generate(n, path, result, l + 1, r)
        path.pop()

        if l > r:
            path.append(')')
            self.generate(n, path, result, l, r + 1)
            path.pop()
```

</TabItem>
</Tabs>

### 代码 2

另一种递归写法，更加简洁。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Generate Parentheses
// @author 连城 (http://weibo.com/lianchengzju)
public class Solution {
    public List<String> generateParenthesis(int n) {
        if (n == 0) return new ArrayList<>(Arrays.asList(""));
        if (n == 1) return new ArrayList<>(Arrays.asList("()"));
        List<String> result = new ArrayList<>();

        for (int i = 0; i < n; ++i)
            for (String inner : generateParenthesis (i))
                for (String outer : generateParenthesis (n - 1 - i))
                    result.add ("(" + inner + ")" + outer);

        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Generate Parentheses
// @author 连城 (http://weibo.com/lianchengzju)
class Solution {
public:
    vector<string> generateParenthesis (int n) {
        if (n == 0) return vector<string>(1, "");
        if (n == 1) return vector<string> (1, "()");
        vector<string> result;

        for (int i = 0; i < n; ++i)
            for (auto inner : generateParenthesis (i))
                for (auto outer : generateParenthesis (n - 1 - i))
                    result.push_back ("(" + inner + ")" + outer);

        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Generate Parentheses
# @author 连城 (http://weibo.com/lianchengzju)
def generate_parenthesis(n):
    if n == 0:
        return [""]
    if n == 1:
        return ["()"]
    result = []

    for i in range(n):
        for inner in generate_parenthesis(i):
            for outer in generate_parenthesis(n - 1 - i):
                result.append("(" + inner + ")" + outer)

    return result
```

</TabItem>
</Tabs>

### 相关题目

- [Valid Parentheses](../stack-and-queue/stack/valid-parentheses.md)
- [Longest Valid Parentheses](../stack-and-queue/stack/longest-valid-parentheses.md)
