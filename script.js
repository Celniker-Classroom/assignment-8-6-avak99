// ----- Functions to implement -----

// 1) myFunc(): persistent counter
let count = 0;

function myFunc() {
  count++;
  return count;
}

// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max) {
  max = parseInt(max);

  if (isNaN(max) || max < 1) {
    return 0;
  }

  return Math.floor(Math.random() * max) + 1;
}

// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
  x = parseFloat(x);
  y = parseFloat(y);

  return x + y;
}

// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2) {
  x1 = parseFloat(x1);
  y1 = parseFloat(y1);
  x2 = parseFloat(x2);
  y2 = parseFloat(y2);

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  let disc = b * b - 4 * a * c;

  if (disc > 0) {
    let r1 = (-b + Math.sqrt(disc)) / (2 * a);
    let r2 = (-b - Math.sqrt(disc)) / (2 * a);
    return [r1, r2];
  } 
  else if (disc === 0) {
    return [-b / (2 * a)];
  } 
  else {
    let real = -b / (2 * a);
    let imag = Math.sqrt(-disc) / (2 * a);

    return [real + "+" + imag + "i", real + "-" + imag + "i"];
  }
}


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers -----

function onMyFuncClick() {
  setText('outMyFunc', myFunc());
}

function onRandomClick() {
  setText('outRandom', getRandomNum($('maxRand').value));
}

function onAdderClick() {
  setText('outAdder', myAdder($('addX').value, $('addY').value));
}

function onDistanceClick() {
  setText('outDistance', distance(
    $('x1').value,
    $('y1').value,
    $('x2').value,
    $('y2').value
  ));
}

function onQuadraticClick() {
  let roots = quadratic(
    $('qa').value,
    $('qb').value,
    $('qc').value
  );

  setText('outQuadratic', roots.join(', '));
}