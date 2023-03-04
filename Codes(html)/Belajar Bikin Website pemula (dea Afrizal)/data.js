const nama = ("RaihanSussy.");
let usia = 20;
generatebiodata();
function generatebiodata() {
    if (usia > 10 && usia < 19){
        console.log(`anda remaja`);
    } else if (usia > 1 && usia < 10) {
        console.log(`lu masi bocil haha`);
    } else { 
        console.log(`pasti dah tua nih`);
    }
}