// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  const array = [];
  let i = 0;
  while (facts.length > i) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = [];
  let i = 0;
  do {
    array.push(`I love the Beatles!`)
  } while (n.length > i);
  return array
  function incrementNumber(n) {
    i = i + 1;
    return i;
  }
  return array
}
