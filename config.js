import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628984255066', 'Epenn Dong 美', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '628984255066'
global.packname = 'Epenn - MD by'
global.author = '© Epenn美'
global.namebot = '​Epenn - MD'
global.wm = '© Epenn By Epenn美'
global.stickpack = 'Epenn - MD by'
global.stickauth = '© Epenn美'
// Link Sosmed
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/DMaEPmgwKkc9OMFY8fpoKJ'
// Donasi
global.povo = '0898-4255-066'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})