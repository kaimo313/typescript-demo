# typescript-demo
尚硅谷TypeScript教程（李立超老师TS新课）学习笔记。

类型    |    例子           |        描述
|--|--|--|
number   |   `1,-33, 2.5`        |  任意数字
string   |   `'hi', "hi", hi`    |  任意字符串
boolean  |   `true、false`       |  布尔值true或false
字面量   |   其本身              |   限制变量的值就是该字面量的值
any      |   *                   |  任意类型
unknown  |   *                   |  类型安全的`any`
void     |   空值(`undefined`)   |  没有值(或`undefined`)
never    |   没有值              |  不能是任何值
object   |   `{name:'kaimo'}`    |  任意的JS对象
array    |   `[1,2,3]`           |  任意JS数组
tuple    |   `[4.5]`             |  元素，TS新增类型，固定长度数组
enum     |   `enum{A, B}`        |  枚举，TS中新增类型
