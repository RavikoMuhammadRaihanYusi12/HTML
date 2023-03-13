const datakelas = ["Ekonomi Boss" , "Mayan Boss" , "Mahal Boss, Senggol dong"]
const dataharga = ["20000" , "50000" , "100000"]

const cmbKelas = document.querySelector("#kelas")
const txtharga = document.querySelector('#harga')
const btnTotal = document.querySelector("#tombol-total")
const jmlPenumpang = document.querySelector("#jml-penumpang")
const txtTotal = document.querySelector("#total-harga")

datakelas.forEach(element => {
    let opt = document.createElement('option')
    opt.text = element
    opt.value = element
    cmbKelas.add(opt)
})

txtharga.value = dataharga[cmbKelas.selectedIndex]

cmbKelas.addEventListener('change' , function(){
    const idx = cmbKelas.selectedIndex
    const harga = dataharga[idx]
    txtharga.value = harga
})

btnTotal.addEventListener('click', function(){
    let hasil = txtharga.value * jmlPenumpang.value
    txtTotal.value = hasil
})