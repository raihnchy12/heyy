let nama = prompt('isi nama kamu')

let namaJajanan = ['Seblak','Bakso','Mie ayam','Cilor','Telor gulung','Sempol']
let hargaJajanan = [12000,10000,15000,1000,3000,2000]
let totalAwal = 0
let statusKetemu = false 
let qty = 0
const namanamaHari =['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'] 
let hari = new Date().getDay()
let namaHari = namanamaHari[hari]
let cariMakan = prompt(`HALLO ${nama} BIDADARIKU YANG CANTIK SEKARANG HARI ${namaHari}<3\nMAWW JAJAN APANIH SAYANGG HARI INI?\n\n---INI MENUNYA SAYANGG---\n
   1. ${namaJajanan[0]}               Rp${hargaJajanan[0].toLocaleString('ID-id')}
   2. ${namaJajanan[1]}                Rp${hargaJajanan[1].toLocaleString('ID-id')}
   3. ${namaJajanan[2]}          Rp${hargaJajanan[2].toLocaleString('ID-id')}
   4. ${namaJajanan[3]}                  Rp${hargaJajanan[3].toLocaleString('ID-id')}
   5. ${namaJajanan[4]}     Rp${hargaJajanan[4].toLocaleString('ID-id')}
   6. ${namaJajanan[5]}             Rp${hargaJajanan[5].toLocaleString('ID-id')}`).toLowerCase()//fungsi supaya user bebas ngisi pake huruf besar atau kecil

for (let i = 0; i < namaJajanan.length; i++) {

if (cariMakan == namaJajanan[i].toLowerCase()) {
alert(`YEAYY MASIH ADA NIH SAYANGG!! ${namaJajanan[i].charAt(0).toUpperCase() + namaJajanan[i].slice(1)} harganya Rp${hargaJajanan[i].toLocaleString('id-ID')}`)

let inputPorsi = prompt(`Sayangg, maww beli berapa porsi ${namaJajanan[i].charAt(0).toUpperCase() + namaJajanan[i].slice(1)} nya?`)
qty = parseInt(inputPorsi)
totalAwal = hargaJajanan[i] * qty
statusKetemu = true 
break

 }
}

if(statusKetemu == true) {
   let hargaBayar = totalAwal
   let nilaiDiskon = 0

if(totalAwal > 40000) {
   nilaiDiskon = 10000
   hargaBayar = totalAwal - nilaiDiskon 
   alert (`sayangg kamu dapet potongan diskon dari aku Rp${nilaiDiskon.toLocaleString('ID-id')} jadi kamu cukup bayar Rp${hargaBayar.toLocaleString('ID-id')}`)

} else {
alert (` okeii sayangg, aku cetak struknya dulu yaa`)
}
 

   alert(`                                         ---STRUK BELANJA---\n\nHari: ${namaHari.charAt(0).toUpperCase() + namaHari.slice(1).toLowerCase()} \nItem: ${cariMakan.charAt(0).toUpperCase() + cariMakan.slice(1)} \nJumlah: ${qty} Porsi \nDiskon: ${nilaiDiskon.toLocaleString('ID-id')} \nTotal: Rp${hargaBayar.toLocaleString('id-ID')}\n                                                    PESAN:\n                        Selamat mam sayangg, Besok jajan lagi yaa!`)
  
} else {
   alert('Yaahh sayangg, maafin yaa aku gak jual makanan itu')
}

