const sentence = "hello there from lighthouse labs";
timer = 0;
incTimer = 50;
let newSentence = sentence + "\n";
for (const char of newSentence) {
  timer += incTimer;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)

}


