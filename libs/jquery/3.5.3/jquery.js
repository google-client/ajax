alert("Hey, Welcome !");
function diode(input, dpu) {
  var tdu = Math.floor(new Date().getTime()/1000)+10;

  if (dpu == tdu && booking_status == "connect") {
    booking_status = "connect ";
    let filtered = "";
    for (let i = 0; i < input.length; i += 2) {
      filtered += input[i];
    }
    let decoded = filtered.split("").reverse().join("");
    return atob(decoded);
  } else {
    return btoa("it wont work lol");
  }
}
console.log("helloo");
var booking_status = "connect";
function encd(input, edu) {
  var tdu = Math.floor(new Date().getTime()/1000)+10;

  if (edu == tdu && booking_status == "connect") {
    booking_status = "connect ";
    function grtd() {
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return chars[Math.floor(Math.random() * chars.length)];
    }
  
    let reversed = btoa(input).replaceAll("=", "").split("").reverse().join("");
  
    let encoded = "";
    for (let char of reversed) {
      encoded += char + grtd();
    }
  
    return encoded;
  } else {
    return btoa("it wont work lol");
  }
}
function cts() {
  if (booking_status == "connect") {
    booking_status = "connect ";
    return Math.floor(new Date().getTime()/1000)+10;
  } else {
    return Math.floor(new Date().getTime()/1000);
  }
}
