/* Detail tiap tempat.
   Isi: nama, kategori, lokasi, jam buka, harga/menu, deskripsi. */
var DATA_TEMPAT = {
  "tanjung-bajau": {
    nama: "Tanjung Bajau",
    kategori: "wisata",
    lokasi: "Kel. Sedau, Kec. Singkawang Selatan",
    jam: "Kawasan buka 24 jam, tiap wahana punya jam sendiri",
    labelHarga: "Tiket",
    harga: "Rp40.000 per orang",
    deskripsi: "Udah buka dari tahun 2007 dan sampai sekarang masih jadi salah satu tempat paling rame di Singkawang. Di dalamnya ada Pantai Pasir Pendek, akuarium, kebun binatang mini, sampai bukit Rindu Alam yang pas banget buat nunggu sunset. Kalau mau nginap, ada Hotel Bajau di kawasan yang sama, lengkap dengan kolam renang dan resto yang langsung menghadap laut."
  },
  "pasir-panjang": {
    nama: "Taman Pasir Panjang Indah",
    kategori: "wisata",
    lokasi: "Kel. Sedau, Kec. Singkawang Selatan",
    jam: "Buka 24 jam",
    labelHarga: "Tiket",
    harga: "Tanyakan di loket masuk",
    deskripsi: "Pantai andalan warga Singkawang, apalagi pas weekend. Selain main air, ada kolam renang, taman bermain anak, dan sirkuit motor yang sering dipakai komunitas otomotif buat bikin acara. Mau nginap dekat pantai juga bisa, karena di dalam kawasannya ada Palapa Beach Hotel."
  },
  "dayo-aek": {
    nama: "Dayo Aek Bagak Sahwa",
    kategori: "wisata",
    lokasi: "Jl. Maruho, Bagak Sahwa, Singkawang Timur",
    jam: "Setiap hari, 07.00–17.00 WIB",
    labelHarga: "Tiket",
    harga: "Tanyakan ke pengelola desa wisata",
    deskripsi: "Lokasinya di Desa Wisata Bagak Sahwa, kira-kira 20 menit dari pusat kota. Dalam bahasa Dayak Salako, \"dayo\" artinya atas dan \"aek\" artinya air. Airnya jernih, dingin, dan membentuk kolam-kolam kecil di antara batu yang enak buat berendam. Datang pagi atau sore biar nggak kepanasan, dan jangan lupa bawa baju ganti."
  },
  "bisa-camping": {
    nama: "Bisa Camping",
    kategori: "wisata",
    lokasi: "Jl. Pangmilang, Singkawang Selatan",
    jam: "Setiap hari, 11.00–19.00",
    labelHarga: "Tiket",
    harga: "Rp10.000 (hari biasa), Rp15.000 (akhir pekan)",
    deskripsi: "Buat kamu yang pengin camping tapi tetap nyaman. Tendanya berdiri di atas dek kayu dan udah ada kasur, kipas angin, plus meja kursi. Nggak mau tidur di tenda? Ada vila juga. Fasilitas lainnya ada kolam renang, kantin, mushola, dan kebun lengkeng yang buahnya bisa dipetik kalau lagi musim."
  },
  "rujak": {
    nama: "Rujak Singkawang",
    kategori: "kuliner",
    lokasi: "Jl. Kridasana No. 08, Pasiran, Singkawang Barat",
    jam: "Setiap hari, 09.00–22.00",
    labelHarga: "Harga",
    harga: "Beda-beda tiap penjual",
    deskripsi: "Isinya nanas, mangga, bengkuang, timun, dan pepaya. Yang bikin beda dari rujak daerah lain itu ebi yang dicampur ke bumbunya, jadi rasanya lebih gurih dan wangi. Salah satu yang paling lama jualan adalah Rujak Thai Phui Jie, udah ada dari tahun 1989. Level pedasnya bisa request sesuai selera."
  },
  "mie-asin": {
    nama: "Mie Asin Singkawang",
    kategori: "kuliner",
    lokasi: "Jl. Kridasana No. 33, Pasiran, Singkawang Barat",
    jam: "Setiap hari, 08.00–17.00",
    labelHarga: "Harga",
    harga: "Mie kering Rp13.500 / 400 gram",
    deskripsi: "Mienya sengaja dibuat panjang sebagai simbol umur panjang, makanya sering muncul pas ulang tahun dan Imlek. Cara makan paling umum ya sop mie asin, kuahnya bening dengan lauk yang banyak. Mie keringnya juga dijual di pasar, kopitiam, dan toko oleh-oleh, jadi bisa dimasak lagi di rumah."
  },
  "pasar-hongkong": {
    nama: "Kawasan Pasar Hongkong",
    kategori: "kuliner",
    lokasi: "Jl. Budi Utomo, Condong, Singkawang Tengah",
    jam: "Pasar pagi 05.00–12.00, penjual makanan juga buka malam hari",
    labelHarga: "Harga",
    harga: "Harga kaki lima",
    deskripsi: "Pagi hari isinya pasar, malamnya berubah jadi pusat jajan. Wajib coba kwetiau goreng, roti bakar, atau pisang goreng selai srikaya sambil minum kopi susu. Menjelang Imlek dan Cap Go Meh, jalanannya penuh lampion merah dan jadi salah satu spot foto paling ikonik di Singkawang. Catatan: sebagian penjual jual makanan non-halal, jadi tanya dulu sebelum pesan."
  },
  "skj-kopitiam": {
    nama: "San Kheu Jong Kopitiam",
    kategori: "kuliner",
    lokasi: "Jl. Budi Utomo, Condong, Singkawang Tengah",
    jam: "Setiap hari, 06.00–23.45",
    labelHarga: "Menu andalan",
    harga: "Kopi hitam SKJ, teh tarik, nasi lemak, dim sum",
    deskripsi: "Lantai bawahnya bernuansa oriental, lengkap dengan panggung berbentuk perahu buat live music tiap hari. Lantai atas ber-AC, cocok buat kumpul keluarga atau rapat organisasi. Ada paket hemat berdua juga, dan di sini kamu sekalian bisa beli oleh-oleh khas Singkawang."
  },
  "djaya": {
    nama: "Djaya Kopi Tiam",
    kategori: "cafe",
    lokasi: "Jl. Gusti Sulung Lelanang No. 45, Pasiran, Singkawang Barat",
    jam: "Setiap hari, 07.00–24.00",
    labelHarga: "Menu andalan",
    harga: "Kopi susu mentega, teh krisan, roti bakar srikaya",
    deskripsi: "Bisa pilih duduk di dalam atau di taman sambil dengerin gemericik air terjun buatan, vibes-nya adem banget. Semua menunya tanpa babi dan minyak babi, dan udah bersertifikat halal. Ada ruang meeting juga kalau mau bikin acara komunitas."
  },
  "tree-house": {
    nama: "Tree House",
    kategori: "cafe",
    lokasi: "Jl. Diponegoro, Pasiran, Singkawang Barat",
    jam: "Buka 24 jam",
    labelHarga: "Harga",
    harga: "Makanan utama mulai Rp25.000",
    deskripsi: "Interiornya dibikin kayak di tengah hutan, ada batang pohon raksasa, panggung rumah pohon, dan galeri seni kecil. Menu utamanya ayam dan ikan, digoreng atau dibakar, plus iga dan camilan kayak risol dan nugget. Karena buka 24 jam, tempat ini sering jadi andalan buat nongki tengah malam."
  },
  "weng": {
    nama: "Weng Coffee",
    kategori: "cafe",
    lokasi: "Jl. P. Diponegoro, Pasiran, Singkawang Barat",
    jam: "Buka 24 jam",
    labelHarga: "Menu andalan",
    harga: "Sea salt coffee, hakau, nasi ayam serai",
    deskripsi: "Rooftop-nya paling enak didatangi malam hari karena bisa lihat lampu kota. Kalau mau nugas atau kerja, ruang dalamnya lebih tenang dan ber-AC. Selain kopi, ada dim sum kayak hakau dan siomay, sampai makanan berat seperti nasi ayam serai dan fish and chips."
  },
  "hola": {
    nama: "Hola Cafe",
    kategori: "cafe",
    lokasi: "Jl. Yos Sudarso No. 38, Melayu, Singkawang Barat",
    jam: "Setiap hari, 10.00–23.00",
    labelHarga: "Menu andalan",
    harga: "Vietnamese egg coffee, bubble waffle",
    deskripsi: "Pilihan menunya banyak banget, mulai dari kopi, matcha, dan boba sampai burger, ramen, dan spageti. Cocok kalau datang rame-rame dan seleranya beda-beda. Ada WiFi dan ruangan ber-AC, jadi betah lama-lama."
  },
  "tahu": {
    nama: "Tahu Singkawang",
    kategori: "oleh",
    lokasi: "Pabrik Tahu Khatulistiwa (Jl. Diponegoro Gg. Khatulistiwa II, Pasiran), Pasar Turi, Pasar Beringin",
    jam: "Setiap hari, 05.00–17.00",
    labelHarga: "Harga",
    harga: "Tahu putih Rp1.000–1.500/potong, tahu sutra Rp5.000–15.000",
    deskripsi: "Ini oleh-oleh yang paling sering dibawa pulang dari Singkawang. Tahu putihnya berbentuk kotak, lembut di dalam dan tetap gurih walau cuma digoreng biasa. Ada juga tahu sutra yang dibuat tanpa dipres, teksturnya halus kayak puding. Beli pagi biar masih fresh, dan minta dikemas rapat kalau perjalanan pulangnya jauh."
  },
  "kue-bulan": {
    nama: "Kue Bulan",
    kategori: "oleh",
    lokasi: "Jl. Kridasana No. 08, Pasiran, Singkawang Barat",
    jam: "Setiap hari, 08.00–17.00",
    labelHarga: "Harga",
    harga: "Rp60.000–175.000 per kotak",
    deskripsi: "Festival Kue Bulan jatuh tiap tanggal 15 bulan kedelapan kalender Imlek, tapi kuenya bisa dibeli di luar waktu itu juga. Pembuatnya banyak dan rasanya beda-beda, jadi seru buat dibandingin. Ukuran kecil pas buat dimakan sendiri, kotak premium biasanya dipilih buat hadiah."
  },
  "limun": {
    nama: "Limun Cap Elang",
    kategori: "oleh",
    lokasi: "Jl. Hermansyah, Pasiran, Singkawang Barat",
    jam: "Senin–Sabtu 07.30–17.00, Minggu 08.00–12.00",
    labelHarga: "Harga",
    harga: "Rp8.000–12.000 per botol",
    deskripsi: "Soda lokal yang udah lama banget dikenal warga Singkawang. Ada tiga rasa: sarsi, kiamboy, dan jeruk. Sarsi rasanya mirip root beer dengan aroma rempah, kiamboy perpaduan manis, asam, dan asin. Tersedia botol kaca dan botol plastik, udah terdaftar BPOM dan bersertifikat halal."
  },
  "tenun": {
    nama: "Tenun Ikat Bu Rita",
    kategori: "oleh",
    lokasi: "Jl. Padang Pasir Gg. Sejati No. 96, Sedau, Singkawang Selatan",
    jam: "Setiap hari, 09.00–17.00",
    labelHarga: "Harga",
    harga: "Syal Rp150.000, kain Rp1.000.000–1.200.000",
    deskripsi: "Prosesnya panjang: benang diikat sesuai pola, dicelup warna sedikit demi sedikit, lalu ditenun pakai alat tenun bukan mesin. Karena itu, kain ukuran besar biasanya harus dipesan sekitar sebulan sebelumnya. Kalau mau mampir, kabari Bu Rita dulu biar bisa lihat koleksi yang ready."
  }
};

/* Nama kategori yang tampil di label pop-up */
var NAMA_KATEGORI = {
  wisata: "Destinasi Wisata",
  kuliner: "Kuliner",
  cafe: "Cafe",
  oleh: "Oleh-Oleh"
};

/* Class CSS untuk warna label tiap kategori */
var CLASS_LABEL = {
  wisata: "tag-alam",
  kuliner: "tag-kuliner",
  cafe: "tag-cafe",
  oleh: "tag-oleh"
};

/* FUNGSI-FUNGSI FITUR*/

/*  SAPAAN OTOMATIS*/
function aturSapaan() {
  var elSapaan = document.getElementById("sapaan");
  if (!elSapaan) return;

  var jam = new Date().getHours();   // 0 – 23

  if (jam < 11)      elSapaan.textContent = "Selamat pagi";
  else if (jam < 15) elSapaan.textContent = "Selamat siang";
  else if (jam < 18) elSapaan.textContent = "Selamat sore";
  else               elSapaan.textContent = "Selamat malam";
}


/* MENU  */
function aturMenuHP() {
  var tombol = document.getElementById("nav-toggle");
  var menu = document.getElementById("menu-utama");
  if (!tombol || !menu) return;

  // Buka/tutup menu saat tombol diklik
  tombol.addEventListener("click", function () {
    var terbuka = tombol.getAttribute("aria-expanded") === "true";
    tombol.setAttribute("aria-expanded", !terbuka);
    menu.classList.toggle("is-open", !terbuka);
  });

  // Tutup menu setelah link diklik
  var semuaLink = menu.querySelectorAll("a");
  for (var i = 0; i < semuaLink.length; i++) {
    semuaLink[i].addEventListener("click", function () {
      tombol.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  }
}


/*KAMUS MINI*/
function aturKamus() {
  var semuaKartu = document.querySelectorAll(".kamus-kartu");
  if (semuaKartu.length === 0) return;

  for (var i = 0; i < semuaKartu.length; i++) {
    semuaKartu[i].addEventListener("click", function () {
      // Tambah/hapus class "terbalik" → CSS yang memutar kartunya
      var terbalik = this.classList.toggle("terbalik");
      this.setAttribute("aria-pressed", terbalik);
    });
  }
}


/* FILTER KATEGORI + PENCARIAN*/
function aturFilterTempat() {
  var kolomCari = document.getElementById("cari");
  if (!kolomCari) return;

  var semuaKartu   = document.querySelectorAll(".card");
  var tombolFilter = document.querySelectorAll(".filter-btn");
  var teksJumlah   = document.getElementById("jumlah-hasil");
  var teksKosong   = document.getElementById("kosong");

  var kategoriAktif = "semua";
  var kataKunci = "";

  
  function terapkanFilter() {
    var jumlahTampil = 0;

    for (var i = 0; i < semuaKartu.length; i++) {
      var kartu = semuaKartu[i];
      var cocokKategori = kategoriAktif === "semua" || kartu.dataset.category === kategoriAktif;
      var cocokKata = kartu.textContent.toLowerCase().indexOf(kataKunci) !== -1;

      kartu.hidden = !(cocokKategori && cocokKata);
      if (!kartu.hidden) jumlahTampil++;
    }

    teksJumlah.textContent = "Menampilkan " + jumlahTampil + " tempat";
    teksKosong.hidden = jumlahTampil > 0;
  }

  for (var i = 0; i < tombolFilter.length; i++) {
    tombolFilter[i].addEventListener("click", function () {
      kategoriAktif = this.dataset.filter;

      for (var j = 0; j < tombolFilter.length; j++) {
        var aktif = tombolFilter[j] === this;
        tombolFilter[j].classList.toggle("is-active", aktif);
        tombolFilter[j].setAttribute("aria-pressed", aktif);
      }

      terapkanFilter();
    });
  }

  kolomCari.addEventListener("input", function () {
    kataKunci = kolomCari.value.trim().toLowerCase();
    terapkanFilter();
  });
}


/*POP-UP DETAIL TEMPAT*/
function aturPopupDetail() {
  var modal = document.getElementById("modal");
  if (!modal || typeof DATA_TEMPAT === "undefined") return;

  function bukaDetail(id, gambarKartu) {
    var data = DATA_TEMPAT[id];
    if (!data) return;

    document.getElementById("modal-judul").textContent       = data.nama;
    document.getElementById("modal-lokasi").textContent      = data.lokasi;
    document.getElementById("modal-jam").textContent         = data.jam;
    document.getElementById("modal-harga-label").textContent = data.labelHarga;
    document.getElementById("modal-harga").textContent       = data.harga;
    document.getElementById("modal-deskripsi").textContent   = data.deskripsi;

    var label = document.getElementById("modal-tag");
    label.textContent = NAMA_KATEGORI[data.kategori];
    label.className = "tag " + CLASS_LABEL[data.kategori];

    var gambar = document.getElementById("modal-gambar");
    gambar.src = gambarKartu.src;
    gambar.alt = data.nama;

    document.getElementById("modal-maps").href =
      "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(data.nama + " Singkawang");

    modal.showModal();
    document.body.classList.add("modal-open");
  }

  var tombolDetail = document.querySelectorAll(".btn-detail");
  for (var i = 0; i < tombolDetail.length; i++) {
    tombolDetail[i].addEventListener("click", function () {
      var gambarKartu = this.closest("article").querySelector("img");
      bukaDetail(this.dataset.id, gambarKartu);
    });
  }

  document.getElementById("modal-tutup").addEventListener("click", function () { modal.close(); });
  document.getElementById("modal-tutup-bawah").addEventListener("click", function () { modal.close(); });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) modal.close();
  });

  modal.addEventListener("close", function () {
    document.body.classList.remove("modal-open");
  });
}


/* HITUNG MUNDUR */
function aturHitungMundur() {
  var kotak = document.getElementById("hitung-mundur");
  if (!kotak) return;

  var waktuAcara = new Date(kotak.dataset.tanggal).getTime();   // dalam milidetik

  var elHari  = document.getElementById("hm-hari");
  var elJam   = document.getElementById("hm-jam");
  var elMenit = document.getElementById("hm-menit");
  var elDetik = document.getElementById("hm-detik");
  var elKet   = document.getElementById("hm-keterangan");

  function duaDigit(angka) {
    return angka < 10 ? "0" + angka : String(angka);
  }

  function perbarui() {
    var sisa = waktuAcara - Date.now();

    if (sisa <= 0) {
      elHari.textContent = "0";
      elJam.textContent = elMenit.textContent = elDetik.textContent = "00";
      elKet.textContent = "Acaranya sudah dimulai. Sampai jumpa tahun depan!";
      clearInterval(timer);  
      return;
    }

    var detik = Math.floor(sisa / 1000);
    elHari.textContent  = Math.floor(detik / 86400);             
    elJam.textContent   = duaDigit(Math.floor(detik % 86400 / 3600));
    elMenit.textContent = duaDigit(Math.floor(detik % 3600 / 60));
    elDetik.textContent = duaDigit(detik % 60);
  }

  var timer = setInterval(perbarui, 1000);   
  perbarui();                              
}


/* EFEK SAAT HALAMAN DIGULIR */
function aturEfekGulir() {
  var header = document.getElementById("header");
  var tombolAtas = document.getElementById("ke-atas");
  if (!header || !tombolAtas) return;

  function cekPosisi() {
    var posisi = window.scrollY;
    header.classList.toggle("tergulir", posisi > 10);
    tombolAtas.classList.toggle("tampil", posisi > 600);
  }

  window.addEventListener("scroll", cekPosisi);
  cekPosisi();

  tombolAtas.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* TAHUN DI FOOTER */
function aturTahunFooter() {
  var elTahun = document.getElementById("tahun");
  if (!elTahun) return;

  elTahun.textContent = new Date().getFullYear();
}

aturSapaan();
aturMenuHP();
aturKamus();
aturFilterTempat();
aturPopupDetail();
aturHitungMundur();
aturEfekGulir();
aturTahunFooter();