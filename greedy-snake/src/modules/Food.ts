// 定义食物类
class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        // 变量后使用 ！：表示类型推断排除null、undefined
        this.element = document.getElementById("food")!;
    }
    // 定义一个获取食物的X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    // 定义一个获取食物的Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }
    // 修改食物位置
    change() {
        // 生成一个随机的位置
        // 食物的位置最小是0，最大是290，一格是10
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }
}

export default Food;