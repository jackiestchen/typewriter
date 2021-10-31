const sentence = "hello there from lighthouse labs";
let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, delay);
  delay +=50;
  if (i === sentence.length - 1) {
    setTimeout(()=>{
      process.stdout.write("\n")
    }, delay);
  }
}

// process.stdout.write("\n");