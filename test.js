'use strict';
const todo = require('./index.js');
//requireでモジュール読込
const assert = require('assert');
//assertライブラリでテストが正しいかどうかを比較をする

//todoとlistのテスト扱い
todo.todo('ノート買う');
todo.todo('鉛筆買う');
assert.deepEqual(todo.list(), ['ノート買う', '鉛筆買う']);
/**assert.deepEqualは、
*与えられたオブジェクトや
*配列の中身まで比較してくれる
*equal関数
*追記;['']の中に入ってる文字列があればテストとおる
*/

console.log('テストが正常に完了');
