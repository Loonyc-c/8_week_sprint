console.log(one); // undefined
var one = 1;

let two = 2;
console.log(two); // ❌ ReferenceError

function run(num) {
  const three = num + num;
  console.log(three); // ❌ TDZ error
}
run(4);

// First console log
// Var huvisagchiig zarlagdahaas umnu console.log hiihed undefined garj ugj bga ni context
// first phase buyu buh huvisagchdiig anhnii utgaar ni memoryd hadgalah uil yvts(creation of the memory) executed buyu
//guitsetgegdsen uchir undefined baina. Var huvisagch ni anhnii utgaa undefined turluur avdag.
//
// Second console log
// Ene tohioldold mun adil ehnii context phase yvhad const bolon let ni anhnii utga ni baidaggui(null bish) buyu daragdaj esvel
//nevtreh erhgui zahialgat shiree shig baidaltai bdg buyu blank huvisagch.
//
// Thired console log
// let bolon const 2 iin anhnii utga ijilhen uchir adil aldaa zaana
