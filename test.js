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

//done, 及び donelist のテスト
todo.done('鉛筆買う');
assert.deepEqual(todo.list(), ['ノート買う']);
//上のだけが未完了に？
assert.deepEqual(todo.donelist(), ['鉛筆買う']);
//上のだけが完了に？

console.log('テストが正常に完了');
