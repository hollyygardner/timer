let timerIntervals = process.argv.slice(2); 

for (let i of timerIntervals) {
  if ((typeof Number(i) === 'number') && Number(i) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("Beep")
    }, (Number(i) * 1000))
  }
}