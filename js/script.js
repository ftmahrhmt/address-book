let contacts = [
    {
    id: 1,
    nama: "Inggar Indraswari",
    nomor: "0857-2231-8891",
    email: "Inggarrr@gmail.com",
    alamat: "Jakarta Selatan"
  },
  {
    id: 2,
    nama: "Annisa Naysillah Pramesta Putri",
    nomor: "0813-5522-9011",
    email: "icapuyu@gmail.com",
    alamat: "Bandung, Jawa Barat"
  },
  {
    id: 3,
    nama: "Ananda Faturrahman",
    nomor: "0822-9988-3321",
    email: "nandaeman@gmail.com",
    alamat: "Depok, Jawa Barat"
  }
];

function displayContact() {
  console.log("===== DAFTAR KONTAK =====");
  for (const contact of contacts) {
    console.log(`
🆔 : ${contact.id}
🧑‍🦱 : ${contact.nama}
📱 : ${contact.nomor}
✉️ : ${contact.email}
📍 : ${contact.alamat}
    `);
  }
}

function getLastId() {
  if (contacts.length === 0) return 1;
  return contacts[contacts.length - 1].id + 1;
}

function addContact(nama, nomor, email, alamat) {
  contacts.push({
    id: getLastId(),
    nama,
    nomor,
    email,
    alamat,
  });

  console.log(`✔️ Kontak "${nama}" berhasil ditambahkan!`);
}

function filterContact(keyword) {
  const filtered = contacts.filter((c) =>
    c.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  if (filtered.length === 0) {
    console.log("❌ Tidak ada kontak ditemukan.");
    return;
  }

  console.log("===== HASIL FILTER =====");
  filtered.forEach((contact) => {
    console.log(`
🆔 : ${contact.id}
🧑‍🦱 : ${contact.nama}
📱 : ${contact.nomor}
📍 : ${contact.alamat}
✉️ : ${contact.email}
    `);
  });
}

function deleteContact(id) {
  const index = contacts.findIndex((c) => c.id === id);

  if (index === -1) {
    console.log("❌ ID tidak ditemukan.");
    return;
  }

  const deleted = contacts.splice(index, 1);
  console.log(`✔️ Kontak "${deleted[0].nama}" berhasil dihapus.`);
}


function updateContact(id, newData) {
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    console.log("❌ ID tidak ditemukan.");
    return;
  }

  if (newData.nama) contact.nama = newData.nama;
  if (newData.nomor) contact.nomor = newData.nomor;
  if (newData.email) contact.email = newData.email;
  if (newData.alamat) contact.alamat = newData.alamat;

  console.log(`✔️ Kontak ID ${id} berhasil diupdate.`);
}

// TEST (CONTOH PEMAKAIAN)
// ============================

addContact("Intan Nur Khoiriyah", "08967543776", "intan@gmail.com", "Jakarta");
filterContact("Intan");
updateContact(1, { nomor: "081200000000" });