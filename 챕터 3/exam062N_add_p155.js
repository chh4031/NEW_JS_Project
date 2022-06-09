var dat = new Date(2017, 4, 15, 11, 40);

console.log(dat.toLocaleDateString());
dat.setMonth(dat.getMonth() + 3);
console.log(dat.toLocaleDateString());
dat.setMonth(dat.getDate()-20);
console.log(dat.toLocaleDateString());