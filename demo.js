
let txtEGP = document.getElementById('txtEGP');
let txtUSD = document.getElementById('txtUSD');
txtUSD.onkeyup =  function(){
txtEGP.value = txtUSD.value * 47;
console.log(txtEGP.value );
}
txtEGP.onkeyup = function() {
    txtUSD.value = (txtEGP.value / 47).toFixed(2);
    console.log(txtUSD.value);
}
  