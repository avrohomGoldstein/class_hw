var a = 0,
    i;
for (i = 2; i < process.argv.length; i++) {
    a += +process.argv[i];
}
//console.log(process.argv);
console.log(a);