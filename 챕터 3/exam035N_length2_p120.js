var msg = '?��';
var len = msg.length;
var num = msg.split(/[\uD800-\uDBFF][uDC00-\uDFFF]/g).length - 1;
console.log(msg.length-num);
//console.log(String.fromCharCode(128169));
