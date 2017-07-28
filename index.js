'use strict';
//key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();


/**
* TODO を追加
* @param {string} task
*/
function todo(task){
  tasks.set(task, false);
}


/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
* @param {array} taskAndIsDonePair
* @return {boolean} 完了したかどうか
*(taskAndIsDonePair) について
*taskが与えられ,keyとvalueのペアが与えられるから
*配列の'0番目'にタスク名 '1番目'に
*/
function isDone(taskAndIsDonePair){
    return taskAndIsDonePair[1];
}

/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了していないかを返す
* @param {array} taskAndIsDonePair
* @return {boolean} 完了していないかどうか
*
*/
function isNotDone(taskAndIsDonePair){
    return !isDone(taskAndIsDonePair);
}

/**
* TODOの一覧の配列を取得する
* @return {array}
*/



function list(){
    return Array.form(tasks)
        .filter(isNotDone)
        .map(t => t[0]);
}


module.exports = {
  /**
  *別のブログラムファイルから関数を使えるようにする
  *{module.exports} に
  *todo: todoを入れる
  */
  todo: todo,
  list: list
};
