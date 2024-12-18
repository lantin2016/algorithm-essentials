---
title: Candy Crush
---

### 描述

TODO

### 分析

TODO

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
// Candy Crush
// Time complexity: O((R*C)^2)
// Space complexity: O(1)
class Solution {
    public int[][] candyCrush(int[][] board) {
        int R = board.length, C = board[0].length;
        boolean todo = false;
        for (int r = 0; r < R; ++r) {
            for (int c = 0; c + 2 < C; ++c) {
                int v = Math.abs(board[r][c]);
                if (v != 0 && v == Math.abs(board[r][c+1]) && v == Math.abs(board[r][c+2])) {
                    board[r][c] = board[r][c+1] = board[r][c+2] = -v;
                    todo = true;
                }
            }
        }
        for (int r = 0; r + 2 < R; ++r) {
            for (int c = 0; c < C; ++c) {
                int v = Math.abs(board[r][c]);
                if (v != 0 && v == Math.abs(board[r+1][c]) && v == Math.abs(board[r+2][c])) {
                    board[r][c] = board[r+1][c] = board[r+2][c] = -v;
                    todo = true;
                }
            }
        }

        // gravity
        for (int c = 0; c < C; ++c) {
            int wr = R - 1;
            for (int r = R-1; r >= 0; --r)
                if (board[r][c] > 0)
                    board[wr--][c] = board[r][c];
            while (wr >= 0)
                board[wr--][c] = 0;
        }

        return todo ? candyCrush(board) : board;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
# Candy Crush
# Time complexity: O((R*C)^2)
# Space complexity: O(1)
def candyCrush(board):
    R, C = len(board), len(board[0])
    todo = False

    for r in range(R):
        for c in range(C-2):
            v = abs(board[r][c])
            if v != 0 and v == abs(board[r][c+1]) and v == abs(board[r][c+2]):
                board[r][c] = board[r][c+1] = board[r][c+2] = -v
                todo = True

    for r in range(R-2):
        for c in range(C):
            v = abs(board[r][c])
            if v != 0 and v == abs(board[r+1][c]) and v == abs(board[r+2][c]):
                board[r][c] = board[r+1][c] = board[r+2][c] = -v
                todo = True

    # gravity
    for c in range(C):
        wr = R - 1
        for r in range(R-1, -1, -1):
            if board[r][c] > 0:
                board[wr][c] = board[r][c]
                wr -= 1
        while wr >= 0:
            board[wr][c] = 0
            wr -= 1

    return candyCrush(board) if todo else board
```

</TabItem>
</Tabs>
