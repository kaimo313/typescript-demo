import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;
    // 方向
    direction: String = "";
    // 是否结束
    isLive = true;
    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel(10, 1);

        this.init();
    }

    // 游戏初始化
    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }
    /**
     * 按下事件
     * ArrowUp Up
     * ArrowRight Right
     * ArrowDown Down
     * ArrowLeft Left
    */
    keydownHandler(event: KeyboardEvent) {
        console.log(event);
        // 检查是否合法
        this.direction = event.key;
    }
    // 控制蛇移动，根据方向移动
    run() {
        /**
         * ArrowUp Up：top -
         * ArrowRight Right：left +
         * ArrowDown Down：top +
         * ArrowLeft Left：left -
        */

        // 蛇现在的坐标
        let X = this.snake.X; 
        let Y = this.snake.Y;

        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
        }

        // 检查是否吃到食物
        this.checkEat(X, Y);
        
        // 修改XY
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e);
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1)*30);
    }

    // 检查是否吃到食物
    checkEat(X:number, Y:number) {
        if(X === this.food.X && Y === this.food.Y) {
            console.log("吃到食物了！");
            // 食物重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇增加一节
            this.snake.addBody();
        }
    }
}

export default GameControl;