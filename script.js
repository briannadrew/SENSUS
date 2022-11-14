"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //   COLOURS
  const redc = "rgb(219, 52, 64)";
  const bluec = "rgb(166, 243, 242)";
  const yellowc = "rgb(237, 187, 25)";
  //   SQUARES
  const a1 = document.getElementById("a1");
  const b1 = document.getElementById("b1");
  const c1 = document.getElementById("c1");
  const d1 = document.getElementById("d1");
  const a2 = document.getElementById("a2");
  const b2 = document.getElementById("b2");
  const c2 = document.getElementById("c2");
  const d2 = document.getElementById("d2");
  const b3 = document.getElementById("b3");
  const c3 = document.getElementById("c3");
  const d3 = document.getElementById("d3");
  const a4 = document.getElementById("a4");
  const b4 = document.getElementById("b4");
  const c4 = document.getElementById("c4");
  const d4 = document.getElementById("d4");
  //   SQUARE COLOUR ARRAYS
  let a1_col = [redc, bluec, yellowc];
  let b1_col = [bluec, yellowc, redc];
  let c1_col = [redc, bluec, yellowc];
  let d1_col = [redc, bluec, yellowc];
  let a2_col = [redc, bluec, yellowc];
  let b2_col = [yellowc, redc, bluec];
  let c2_col = [bluec, yellowc, redc];
  let d2_col = [bluec, yellowc, redc];
  let b3_col = [bluec, yellowc, redc];
  let c3_col = [yellowc, redc, bluec];
  let d3_col = [yellowc, redc, bluec];
  let a4_col = [yellowc, redc, bluec];
  let b4_col = [yellowc, redc, bluec];
  let c4_col = [bluec, yellowc, redc];
  let d4_col = [redc, bluec, yellowc];
  //   BOOLEANS
  let a1_bool = true;
  let b1_bool = true;
  let c1_bool = false;
  let d1_bool = false;
  let a2_bool = false;
  let b2_bool = false;
  let c2_bool = false;
  let d2_bool = false;
  let b3_bool = false;
  let c3_bool = false;
  let d3_bool = true;
  let a4_bool = false;
  let b4_bool = false;
  let c4_bool = true;
  let d4_bool = false;

  function correctCheck() {
    let bools = [
      a1_bool,
      b1_bool,
      c1_bool,
      d1_bool,
      a2_bool,
      b2_bool,
      c2_bool,
      d2_bool,
      b3_bool,
      c3_bool,
      d3_bool,
      a4_bool,
      b4_bool,
      c4_bool,
      d4_bool,
    ];
    let falsecount = 0;
    let truecount = 0;
    bools.forEach(function (square) {
      if (square == false) {
        falsecount++;
      } else if (square == true) {
        truecount++;
      }
    });
    if (falsecount == 0) {
      return true;
    } else {
      return false;
    }
  }

  a1.addEventListener("click", () => {
    let colour = a1_col.shift();
    a1_col.push(colour);
    a1.style.backgroundColor = colour;
    if (colour == yellowc) {
      a1_bool = true;
    } else {
      a1_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  b1.addEventListener("click", () => {
    let colour = b1_col.shift();
    b1_col.push(colour);
    b1.style.backgroundColor = colour;
    if (colour == redc) {
      b1_bool = true;
    } else {
      b1_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  c1.addEventListener("click", () => {
    let colour = c1_col.shift();
    c1_col.push(colour);
    c1.style.backgroundColor = colour;
    if (colour == redc) {
      c1_bool = true;
    } else {
      c1_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  d1.addEventListener("click", () => {
    let colour = d1_col.shift();
    d1_col.push(colour);
    d1.style.backgroundColor = colour;
    if (colour == bluec) {
      d1_bool = true;
    } else {
      d1_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  a2.addEventListener("click", () => {
    let colour = a2_col.shift();
    a2_col.push(colour);
    a2.style.backgroundColor = colour;
    if (colour == redc) {
      a2_bool = true;
    } else {
      a2_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  b2.addEventListener("click", () => {
    let colour = b2_col.shift();
    b2_col.push(colour);
    b2.style.backgroundColor = colour;
    if (colour == yellowc) {
      b2_bool = true;
    } else {
      b2_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  c2.addEventListener("click", () => {
    let colour = c2_col.shift();
    c2_col.push(colour);
    c2.style.backgroundColor = colour;
    if (colour == yellowc) {
      c2_bool = true;
    } else {
      c2_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  d2.addEventListener("click", () => {
    let colour = d2_col.shift();
    d2_col.push(colour);
    d2.style.backgroundColor = colour;
    if (colour == bluec) {
      d2_bool = true;
    } else {
      d2_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  b3.addEventListener("click", () => {
    let colour = b3_col.shift();
    b3_col.push(colour);
    b3.style.backgroundColor = colour;
    if (colour == bluec) {
      b3_bool = true;
    } else {
      b3_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  c3.addEventListener("click", () => {
    let colour = c3_col.shift();
    c3_col.push(colour);
    c3.style.backgroundColor = colour;
    if (colour == yellowc) {
      c3_bool = true;
    } else {
      c3_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  d3.addEventListener("click", () => {
    let colour = d3_col.shift();
    d3_col.push(colour);
    d3.style.backgroundColor = colour;
    if (colour == bluec) {
      d3_bool = true;
    } else {
      d3_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  a4.addEventListener("click", () => {
    let colour = a4_col.shift();
    a4_col.push(colour);
    a4.style.backgroundColor = colour;
    if (colour == yellowc) {
      a4_bool = true;
    } else {
      a4_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  b4.addEventListener("click", () => {
    let colour = b4_col.shift();
    b4_col.push(colour);
    b4.style.backgroundColor = colour;
    if (colour == yellowc) {
      b4_bool = true;
    } else {
      b4_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  c4.addEventListener("click", () => {
    let colour = c4_col.shift();
    c4_col.push(colour);
    c4.style.backgroundColor = colour;
    if (colour == redc) {
      c4_bool = true;
    } else {
      c4_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
  d4.addEventListener("click", () => {
    let colour = d4_col.shift();
    d4_col.push(colour);
    d4.style.backgroundColor = colour;
    if (colour == redc) {
      d4_bool = true;
    } else {
      d4_bool = false;
    }
    let isCorrect = correctCheck();
    if (isCorrect) {
      location.href = "https://www.youtube.com/watch?v=SC4xMk98Pdc";
    }
  });
});
