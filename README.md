# 算法思想

## 二分查找

- 概念：对具有指定左索引和右索引的连续序列进行操作。
- 如何工作的？引用 leetcode 官网的介绍：
  > 二分查找维护查找空间的左、右和中间指示符，并比较查找目标或将查找条件应用于集合的中间值；如果条件不满足或值不相等，则清除目标不可能存在的那一半，并在剩下的一半上继续查找，直到成功为止。如果查以空的一半结束，则无法满足条件，并且无法找到目标。
- 二分查找一般分为 3 部分：
  - **预处理** 如果要处理的集合没有排序，需要先排序。
  - **二分查找** 利用循环或者递归在每次比较后讲查找空间划分为两半。
  - **后处理** 在剩余的空间中确定可行的候选者。

[leetcode 之二分查找](https://leetcode-cn.com/leetbook/detail/binary-search/)

## 双指针

## 排序

# 数组

特点：

- 连续存储。
- 通过索引可以访问到

## 1. 前缀和

适用于快速、频繁的计算一个索引区间内元素的和。

## 2. 查分数组

# 链表

主要解题思想：

- 递归/迭代
- 双指针

1. 19. 删除链表的倒数第 N 个结点。(双指针)
2. 206. 反转链表。（递归）
3. 剑指 Offer 52. 两个链表的第一个公共节点。（双指针）
4. 141. 环形链表。（快慢指针）
5. 876. 链表的中间结点。（快慢指针）

# 二叉树

> 所有回溯、动归、分治算法，其实都是树 的问题，⽽树的问题就永远逃不开树的**递归遍历**

## 二叉树的遍历：

- 前序遍历(DLR)，
- 中序遍历(LDR)，
- 后序遍历(LRD).

**写递归算法的关键是要明确函数的「定义」是什么，然后相信这个定 义，利⽤这个定义推导最终结果，绝不要跳⼊递归的细节。**

写树相关的算法，简单说就是，**先搞清楚当前 root 节点「该做什么」以及「什么时候做」，然后根据函数 定义递归调⽤⼦节点**，递归调⽤会让孩⼦节点做相同的事情。

**所谓「该做什么」就是让你想清楚写什么代码能够实现题⽬想要的效果，所谓「什么时候做」，就是让你思考这段代码到底应该写在前序、中序还是后序遍历的代码位置上。**

**⼆叉树的问题难点在于，如何把题⽬的要求细化成每个节点需要做的事情。**

如果当前节点要做的事情需要通过左右⼦树的计算结果推导出来，就要⽤到后序遍历。**我们要尽可能避免递归函数中调⽤其他递归函数。**

- 226. 翻转⼆叉树（简单）---前序
- 114. ⼆叉树展开为链表（中等）---后序
- 116. 填充每个节点的下⼀个右侧节点指针（中等）--- 前序
- 654. 最⼤⼆叉树（中等）
- 105. 从前序与中序遍历序列构造⼆叉树（中等）
- 106. 从中序与后序遍历序列构造⼆叉树（中等）
- 1373. ⼆叉搜索⼦树的最⼤键值和（困难）

## 二叉树的序列化

⼆叉树结该是⼀个⼆维平⾯内的结构，⽽序列化出来的字符串是⼀个线性的⼀维结构。**所谓的序 列化不过就是把结构化的数据「打平」，其实就是在考察⼆叉树的遍历⽅式。**

> ⼀般语境下，单单前序遍历结果是不能还原⼆叉树结构的，因为缺少空指针的信息，⾄少要得到 前、中、后序遍历中的两种才能还原⼆叉树。

**反序列化过程也是⼀样，先确定根节点 root，然后遵循前序遍历的规则，递归⽣成左右⼦树即可。**

- 297. ⼆叉树的序列化和反序列化（困难）

## 二叉搜索树

BST 是⼀种特殊的⼆叉树，它的两个主要特点：

1、左⼩右⼤，即每个节点的左⼦树都⽐当前节点的值⼩，右⼦树都⽐当前节点的值⼤。

2、**中序遍历结果是有序的（升 序）。**

- 230. BST 第 K ⼩的元素（中等）
- 剑指 Offer 54. 二叉搜索树的第 k 大节点
- 538. ⼆叉搜索树转化累加树（中等）
- 1038. BST 转累加树（中等）
- 面试题 04.02 最小高度树。(二分法，数组里的中位数就是根节点，中位数左边的是左子树，右边的是右子树。)
- 530. 二叉树的最小差值。
- 530. 二叉搜索树的最小绝对差
- 783. 二叉搜索树节点最小距离

---

## 二叉树题目类型

### 遍历

> 二叉树的前中后三种遍历方式，根据前中遍历还原二叉树，根据中后遍历还原二叉树。二叉树的题目大部分思路主要是这三种遍历，搞清楚用哪一种遍历方式，先写出大概框架。

#### 前序遍历

#### 中序遍历

1. 94.二叉树的中序遍历

#### 后序遍历

#### 广度优先遍历（BFS）

1. 剑指 Offer 32 - II. 从上到下打印二叉树 II

```javascript
var levelOrder = function (root) {
  if (root === null) return [];
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let level = queue.length;
    let levelArr = [];
    for (let i = 0; i < level; i++) {
      let cur = queue.shift();
      levelArr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    result.push(levelArr);
  }
  return result;
};
```

2. 103. 二叉树的锯齿形层序遍历。（加一个 flag 值，记录是否从左->右）

#### 深度优先遍历（DFS）

### 序列化和反序列化

### 二叉树对称/镜像/相同

> 思路： 都是对比左右子树节点。

1. 100.相同的树

```js
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val != q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

2. 101.对称二叉树

```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return symmetric(root.left, root.right);

  function symmetric(node1, node2) {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }
    return (
      symmetric(node1.left, node2.right) && symmetric(node1.right, node2.left)
    );
  }
};
```

3. 剑指 Offer 27. 二叉树的镜像
4. 剑指 Offer 28. 对称的二叉树

### 二叉树深度系列

1. 检查平衡性。
2. 求二叉树的深度。
3. 110.平衡二叉树。
4. 111.二叉树的最小深度。
5. 剑指 Offer 55 - I. 二叉树的深度

### 公共祖先问题

> 思路：
>
> > 对于二叉搜索树,思路主要是利用左小右大的特点。给定两个节点 p,q
> >
> > > 1.  如果 p,q 都比当前节点小，那么应该在左子树里寻找。
> > > 2.  如果 p,q 都比当前节点大，那么应该在右子树里寻找。
> > > 3.  如果 p,q 一个比当前节点大，一个比当前节点小，那么当前节点就是他们最近的公共祖先。
> >
> >     对于一般的二叉树，

1. 235.二叉搜索树的最近公共祖先

```js
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;
  if (p.val > q.val) {
    // 这样做是要保证，参数二要始终小于参数三。
    return lowestCommonAncestor(root, q, p);
  }
  if (root.val >= p.val && root.val <= q.val) {
    // 找到了
    return root;
  }
  if (root.val > q.val) {
    //. 在左子树中找
    return lowestCommonAncestor(root.left, p, q);
  } else {
    // 在右子树找
    return lowestCommonAncestor(root.right, p, q);
  }
};
```

2. 236.二叉树的最近公共祖先
