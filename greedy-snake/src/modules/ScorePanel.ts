// 定义表示记分牌的类
class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 最高等级
    maxLevel: number;
    // 多少分升级
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置一个加分方法
    addScore() {
        this.scoreEle.innerHTML = `${++this.score}`;
        if(this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    // 提升等级
    levelUp() {
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = `${++this.level}`;
        }
    }
}

export default ScorePanel;