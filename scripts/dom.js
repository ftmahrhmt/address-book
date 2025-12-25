const form = document.getElementById("contactForm");
const nama = document.getElementById("nama");
const nomor = document.getElementById("nomor");
const email = document.getElementById("email");
const alamat = document.getElementById("alamat");
const searchInput = document.getElementById("searchInput");

const btnTambah = document.getElementById("btnTambah");
const btnSimpan = document.getElementById("btnSimpan");
const btnBatal = document.getElementById("btnBatal");

let indexEdit = -1;

function validate() {
  if (!nama.value || !nomor.value || !email.value || !alamat.value) {
    alert("Semua field wajib diisi!");
    return false;
  }
  return true;
}

function renderContacts() {
  const list = document.getElementById("contact-list");
  list.innerHTML = "";

  const filtered = contacts.filter(c =>
    c.nama.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty-state col-span-3">Tidak ada data ditemukan...</div>`;
    return;
  }

  filtered.forEach((c, i) => {
    const card = document.createElement("div");
    card.className = "bg-white p-5 rounded-2xl soft-shadow border";

    card.innerHTML = `
      <h3 class="text-xl font-bold text-[#50806B] mb-1">${c.nama}</h3>
      <p class="text-gray-700 text-sm">📞 ${c.nomor}</p>
      <p class="text-gray-700 text-sm">📧 ${c.email}</p>
      <p class="text-gray-700 text-sm mb-3">📍 ${c.alamat}</p>

      <div class="flex justify-between mt-3">
        <button class="px-4 py-2 rounded-xl bg-[#50806B] text-white hover:bg-[#3a5e50]" onclick="editContact(${i})">Edit</button>
        <button class="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-700" onclick="deleteContact(${i})">Hapus</button>
      </div>
    `;

    list.appendChild(card);
  });
}

form.addEventListener("submit", e => e.preventDefault());

btnTambah.addEventListener("click", () => {
  if (!validate()) return;

  addContact(nama.value, nomor.value, email.value, alamat.value);

  clearForm();
  renderContacts();
});

function editContact(i) {
  indexEdit = i;

  nama.value = contacts[i].nama;
  nomor.value = contacts[i].nomor;
  email.value = contacts[i].email;
  alamat.value = contacts[i].alamat;

  toggleButtons(true);
}

btnSimpan.addEventListener("click", () => {
  if (!validate()) return;

  updateContactByIndex(indexEdit, {
    nama: nama.value,
    nomor: nomor.value,
    email: email.value,
    alamat: alamat.value
  });

  clearForm();
  toggleButtons(false);
  renderContacts();
});

function deleteContact(i) {
  if (confirm("Yakin ingin menghapus?")) {
    deleteContactByIndex(i);
    renderContacts();
  }
}

function toggleButtons(editMode) {
  btnTambah.classList.toggle("hidden", editMode);
  btnSimpan.classList.toggle("hidden", !editMode);
  btnBatal.classList.toggle("hidden", !editMode);
}

btnBatal.addEventListener("click", () => {
  clearForm();
  toggleButtons(false);
});

function clearForm() {
  nama.value = "";
  nomor.value = "";
  email.value = "";
  alamat.value = "";
}

searchInput.addEventListener("input", renderContacts);

document.addEventListener("DOMContentLoaded", () => {
  renderContacts();
});
