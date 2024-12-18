---
title: Decode Ways
---

### 描述

A message containing letters from `A-Z` is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message `"12"`, it could be decoded as `"AB"` (1 2) or `"L"` (12).

The number of ways decoding `"12"` is 2.

### 分析

跟第???节[Climbing Stairs](climbing-stairs.md)很类似，不过多加一些判断逻辑。

### 代码

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
// Decode Ways
// 动规，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int numDecodings(String s) {
        if (s.isEmpty() || s.charAt(0) == '0') return 0;

        int prev = 0;
        int cur = 1;
        // 长度为n的字符串，有 n+1个阶梯
        for (int i = 1; i <= s.length(); ++i) {
            if (s.charAt(i-1) == '0') cur = 0;

            if (i < 2 || !(s.charAt(i - 2) == '1' ||
                    (s.charAt(i - 2) == '2' && s.charAt(i - 1) <= '6')))
                prev = 0;

            int tmp = cur;
            cur = prev + cur;
            prev = tmp;
        }
        return cur;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Decode Ways
// 动规，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int numDecodings(const string &s) {
        if (s.empty() || s[0] == '0') return 0;

        int prev = 0;
        int cur = 1;
        // 长度为n的字符串，有 n+1个阶梯
        for (size_t i = 1; i <= s.size(); ++i) {
            if (s[i-1] == '0') cur = 0;

            if (i < 2 || !(s[i - 2] == '1' ||
                     (s[i - 2] == '2' && s[i - 1] <= '6')))
                prev = 0;

            int tmp = cur;
            cur = prev + cur;
            prev = tmp;
        }
        return cur;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Decode Ways
# Dynamic programming, time complexity O(n), space complexity O(1)
class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0

        prev = 0
        cur = 1
        # For a string of length n, there are n+1 steps
        for i in range(1, len(s) + 1):
            if s[i-1] == '0':
                cur = 0

            if i < 2 or not (s[i-2] == '1' or
                    (s[i-2] == '2' and s[i-1] <= '6')):
                prev = 0

            tmp = cur
            cur = prev + cur
            prev = tmp

        return cur
```

</TabItem>
</Tabs>

### 相关题目

- [Climbing Stairs](climbing-stairs.md)
