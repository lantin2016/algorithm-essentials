---
title: Single Number II
---

### 描述

Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

### 分析

本题和上一题 Single Number，考察的是位运算。

方法 1：创建一个长度为`sizeof(int)`的数组`count[sizeof(int)]`，`count[i]`表示在在`i`位出现的 1 的次数。如果`count[i]`是 3 的整数倍，则忽略；否则就把该位取出来组成答案。

方法 2：用`one`记录到当前处理的元素为止，二进制 1 出现“1 次”（mod 3 之后的 1）的有哪些二进制位；用`two`记录到当前计算的变量为止，二进制 1 出现“2 次”（mod 3 之后的 2）的有哪些二进制位。当`one`和`two`中的某一位同时为 1 时表示该二进制位上 1 出现了 3 次，此时需要清零。即**用二进制模拟三进制运算**。最终`one`记录的是最终结果。

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
// Single Number II
// 方法1，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int singleNumber(int[] nums) {
        final int W = Integer.SIZE; // 一个整数的bit数，即整数字长
        int[] count = new int[W];  // count[i]表示在在i位出现的1的次数
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < W; j++) {
                count[j] += (nums[i] >> j) & 1;
                count[j] %= 3;
            }
        }
        int result = 0;
        for (int i = 0; i < W; i++) {
            result += (count[i] << i);
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Single Number II
// 方法1，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        const int W = sizeof(int) * 8; // 一个整数的bit数，即整数字长
        int count[W];  // count[i]表示在在i位出现的1的次数
        fill_n(&count[0], W, 0);
        for (int i = 0; i < nums.size(); i++) {
            for (int j = 0; j < W; j++) {
                count[j] += (nums[i] >> j) & 1;
                count[j] %= 3;
            }
        }
        int result = 0;
        for (int i = 0; i < W; i++) {
            result += (count[i] << i);
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Single Number II
# 方法1，时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        W = 32  # 一个整数的bit数，即整数字长
        count = [0] * W  # count[i]表示在在i位出现的1的次数
        for num in nums:
            for j in range(W):
                count[j] += (num >> j) & 1
                count[j] %= 3
        result = 0
        for i in range(W):
            result += (count[i] << i)
        return result
```

</TabItem>
</Tabs>

### 代码 2

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Single Number II
// 方法2，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int singleNumber(int[] nums) {
        int one = 0, two = 0, three = 0;
        for (int i : nums) {
            two |= (one & i);
            one ^= i;
            three = ~(one & two);
            one &= three;
            two &= three;
        }

        return one;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Single Number II
// 方法2，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int one = 0, two = 0, three = 0;
        for (int i : nums) {
            two |= (one & i);
            one ^= i;
            three = ~(one & two);
            one &= three;
            two &= three;
        }

        return one;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Single Number II
# 方法2，时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        one, two, three = 0, 0, 0
        for i in nums:
            two |= (one & i)
            one ^= i
            three = ~(one & two)
            one &= three
            two &= three
        return one
```

</TabItem>
</Tabs>

### 相关题目

- [Single Number](single-number.md)
