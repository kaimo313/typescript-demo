// 定义蛇类
class Snake{
    // 表示蛇头所对应的元素
    head: HTMLElement;
    // 蛇的身体（包含蛇头）
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;
    constructor() {
        // 变量后使用 ！：表示类型推断排除null、undefined
        this.element = document.querySelector("#snake")!;
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div");
    }
    // 获取蛇头的X轴坐标
    get X() {
        return this.head.offsetLeft;
    }
    // 获取蛇头的Y轴坐标
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头的X轴坐标
    set X(value: number) {
        if(this.X === value) {
            return;
        }
        // 撞墙
        if(value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }

        // 修改x时，是在修改水平坐标， 蛇在左右移动，蛇在向左移动时，不能向右掉头, 反之亦然
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            console.log("水平方向发生了调头");
            value = value > this.X ? this.X - 10 : this.X + 10;
        }

        // 移动身体
        this.moveBody();
        this.head.style.left = `${value}px`;
        // 检查蛇头是否撞到身体
        this.checkHeadBody();
    }
    // 设置蛇头的Y轴坐标
    set Y(value: number) {
        if(this.Y === value) {
            return;
        }
        // 撞墙
        if(value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }
        // 修改y时，是在修改垂直坐标， 蛇在上下移动，蛇在向上移动时，不能向下掉头, 反之亦然
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            console.log("垂直方向发生了调头");
            value = value > this.Y ? this.Y - 10 : this.Y + 10;
        }

        // 移动身体
        this.moveBody();
        this.head.style.top = `${value}px`;
        // 检查蛇头是否撞到身体
        this.checkHeadBody();
    }
    // 蛇增加身体的方法
    addBody() {
        // 向element添加一个div
        // insertAdjacentElement 将一个给定的元素节点插入到相对于被调用的元素的给定的一个位置。
        // beforeend 只在该元素当中，在该元素最后一个子孩子后面。
        this.element.insertAdjacentElement("beforeend", document.createElement("div"));
    }

    // 蛇身体移动：将后边的身体设置为前边的身体的位置
    moveBody() {
        for(let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 将值赋值到当前的身体上面
            (this.bodies[i] as HTMLElement).style.left = `${X}px`;
            (this.bodies[i] as HTMLElement).style.top = `${Y}px`;
        }
    }
    // 检查蛇头是否撞到身体
    checkHeadBody() {
        // 检查所有身体是否和蛇头坐标发生重叠
        for(let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error("撞到自己了！");
            }
        }
    }
}

export default Snake;