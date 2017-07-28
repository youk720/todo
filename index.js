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
*list関数説明
*tasksに全て一覧がある
*filterで必要なものだけを抜き出す
*mapは各配列の要素に対して,タスク名を抽出して,新しい要素を作る
*/
function list(){
    return Array.from(tasks)
        .filter(isNotDone)
        .map(t => t[0]);
}

/**
* TODO を完了状態にする
* @param {string} task
*/

function done(task){
    if(tasks.has(task)){
      tasks.set(task, true);
      //タスクが存在してるかを確認して存在してるならば処理開始
      //存在してればなければ作成し、あれば更新
      //完了している、と更新
    }
}
/**
* 完了済みのタスクの一覧の配列を取得
* @return {array}
*/
function donelist(){
    return Array.from(tasks)
        .filter(isDone)
        .map(t => t[0]);
}

/**
* 項目削除
* @param {string} task
*/
function del(task){
    tasks.delete(task);
}


module.exports = {
  /**
  *別のブログラムファイルから関数を使えるようにする
  *{module.exports} に
  *todo: todoを入れる
  */
  todo: todo,
  list: list,
  done: done,
  donelist: donelist,
  del: del
};
