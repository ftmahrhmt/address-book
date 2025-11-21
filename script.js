let contacts = [
    {
    nama: "Inggar Indraswari",
    nomor: "0857-2231-8891",
    email: "Inggarrr@gmail.com",
    alamat: "Jakarta Selatan"
  },
  {
    nama: "Annisa Naysillah Pramesta Putri",
    nomor: "0813-5522-9011",
    email: "icapuyu@gmail.com",
    alamat: "Bandung, Jawa Barat"
  },
  {
    nama: "Ananda Faturrahman",
    nomor: "0822-9988-3321",
    email: "nandaeman@gmail.com",
    alamat: "Depok, Jawa Barat"
  }
];
let indexEdit = -1;

const nama = document.getElementById("nama");
const nomor = document.getElementById("nomor");
const email = document.getElementById("email");
const alamat = document.getElementById("alamat");

const searchInput = document.getElementById("searchInput");

function renderContacts() {
  const list = document.getElementById("contact-list");
  list.innerHTML = "";

  const filtered = contacts.filter(c => 
    c.nama.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  
  filtered.forEach((c, i) => {
    list.innerHTML += `
      <div class="bg-white p-5 rounded-xl soft-shadow border">
        <h3 class="font-bold text-lg text-[#50806B]">${c.nama}</h3>
        <p class="text-gray-600 text-sm">📞 ${c.nomor}</p>
        <p class="text-gray-600 text-sm">📧 ${c.email}</p>
        <p class="text-gray-600 text-sm">📍 ${c.alamat}</p>

        <div class="flex gap-2 mt-4">
          <button onclick="editContact(${i})" class="px-4 py-1 bg-[#50806B] text-white rounded-lg hover:bg-[#3a5e50] transition">Edit</button>
          <button onclick="deleteContact(${i})" class="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Hapus</button>
        </div>
      </div>
    `;
  });
}

document.getElementById("btnTambah").addEventListener("click", () => {
  if (!nama.value) return alert("Nama wajib diisi!");

  contacts.push({
    nama: nama.value,
    nomor: nomor.value,
    email: email.value,
    alamat: alamat.value
  });

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

document.getElementById("btnSimpan").addEventListener("click", () => {
  contacts[indexEdit] = {
    nama: nama.value,
    nomor: nomor.value,
    email: email.value,
    alamat: alamat.value
  };

  clearForm();
  toggleButtons(false);
  renderContacts();
});

function deleteContact(i) {
  if (confirm("Yakin mau hapus?")) {
    contacts.splice(i, 1);
    renderContacts();
  }
}

function toggleButtons(edit) {
  document.getElementById("btnTambah").classList.toggle("hidden", edit);
  document.getElementById("btnSimpan").classList.toggle("hidden", !edit);
  document.getElementById("btnBatal").classList.toggle("hidden", !edit);
}

document.getElementById("btnBatal").addEventListener("click", () => {
  clearForm();
  toggleButtons(false);
});

function clearForm() {
  nama.value = nomor.value = email.value = alamat.value = "";
}

searchInput.addEventListener("input", renderContacts);
renderContacts();