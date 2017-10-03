
function forLoop(array) {
  for (i = 0; i < 25; i++) {
    if (i == 1) {
      console.log("I am ${i} strange loop");
    }
    else console.log("I am ${i} strange loops");
  }
}

function whileLoop(i) {
  while (i > 0) {
    console.log(i--);
  }
    return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop()
  } while (array > 0 && maybeTrue())
}
