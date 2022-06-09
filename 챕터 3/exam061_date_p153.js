var dat = new Date(2010, 5, 25, 11, 37, 15, 999);
console.log(dat); //Fri Jun 25 11:37:15 UTC+0900 2010
console.log(dat.getFullYear()); // 2010
console.log(dat.getMonth()); // 5
console.log(dat.getDate()); // 35
console.log(dat.getDay()); // 5 (금요일)
console.log(dat.getHours()); // 11
console.log(dat.getMinutes()); // 37
console.log(dat.getSeconds()); //17
console.log(dat.getMilliseconds()); // 999
console.log(dat.getTime()); // 1277433435999
console.log(dat.getTimezoneOffset()); // -540
console.log(dat.getUTCFullYear()); // 2010
console.log(dat.getUTCMonth()); //5\
console.log(dat.getUTCDate()); // 25
console.log(dat.getUTCDay()); // 5 (금요일)
console.log(dat.getUTCHours()); // 2
console.log(dat.getUTCMinutes()); // 37
console.log(dat.getUTCSeconds()); //17
console.log(dat.getUTCMilliseconds()); // 999

var dat2 = new Date();
dat2.setFullYear(2011);
dat2.setMonth(7);
dat2.setDate(5);
dat2.setHours(11);
dat2.setMinutes(37);
dat2.setSeconds(15);
dat2.setMilliseconds(513);
console.log(dat2.toLocaleString()); // 2011년 8월 5일 금요일 오전 11:37:15
console.log(dat2.toGMTString()); // Fri, 5 Aug 2011 02:37:15 UTC
console.log(dat2.toUTCString()); // Fri, 5 Aug 2011 02:37:15 UTC
console.log(dat2.toDateString()); // Fri Aug 5 2011
console.log(dat2.toTimeString()); // 11:37:15 UTC+0900
console.log(dat2.toLocaleDateString()); // 2011년 8월 5일 금요일
console.log(dat2.toLocaleTimeString()); // 오전 11:37:15
console.log(Date.parse('2008/08/05')); // 1217862000000
console.log(Date.UTC(2008, 8, 5)); // 1220572800000