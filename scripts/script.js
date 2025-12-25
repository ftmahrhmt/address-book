let contacts = [
  { id: 1, nama: "Inggar Indraswari", nomor: "085722318891", email: "Inggarrr@gmail.com", alamat: "Jakarta Selatan" },
  { id: 2, nama: "Annisa Naysillah", nomor: "081355229011", email: "icapuyu@gmail.com", alamat: "Bandung" },
  { id: 3, nama: "Ananda Faturrahman", nomor: "082299883321", email: "nandaeman@gmail.com", alamat: "Depok" }
];

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
    alamat
  });
}

function updateContactByIndex(index, data) {
  contacts[index] = {
    ...contacts[index],
    ...data
  };
}

function deleteContactByIndex(index) {
  contacts.splice(index, 1);
}
