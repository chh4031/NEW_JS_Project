//쿼리정보 이스케이프 처리
var str = '!"#$%&()+_*/@~_|;:,.';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));