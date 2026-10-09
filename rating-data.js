/* File khusus data rating & komentar.
   Dibaca oleh cek-nilai-uts.html dan ditampilkan setelah siswa login.
   Format tiap item: {kode, nama, kelas, mapel, bintang (1-5), komen, waktu}
   mapel = dkgv / koding / uiux */

// URL Google Apps Script (lihat apps-script.gs). Kosongkan kalau belum dipasang.
window.RATING_API = "https://script.google.com/macros/s/AKfycbxeDuEu5eQyCEmsDF5pgHwfE1_GmqpD726V_RVgL6tKKgQjJ1U2iUV8XKU5yQUoyvQn/exec";

// Data rating. Kalau pakai Apps Script, data live diambil dari Google Sheet
// dan di sini boleh dibiarkan kosong (atau diisi hasil copy dari Sheet).
window.RATING_DATA = [
  // {"kode":"XIDKV1-001","nama":"Alvino","kelas":"XI DKV 1","mapel":"uiux","bintang":5,"komen":"Mantap","waktu":"2026-10-09T08:00:00Z"}
];
