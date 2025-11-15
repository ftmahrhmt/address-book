let contacts = [
  {
    nama: "Ananda Faturrahman",
    nomor: "0812-3344-5566",
    email: "nandafaturrahman@gmail.com",
    alamat: "Jl. Kenanga No. 14, Bogor",
  },
];

const list = document.getElementById("contact-list");
const formBox = document.getElementById("formContainer");

let editIndex = null;

// RENDER LIST
function renderContacts() {
  list.innerHTML = "";
  contacts.forEach((c, i) => {
    list.innerHTML += `
      <div class="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition">
        <h2 class="text-xl font-bold text-indigo-600">${c.nama}</h2>
        <p class="text-gray-700"><strong>Nomor:</strong> ${c.nomor}</p>
        <p class="text-gray-700"><strong>Email:</strong> ${c.email}</p>
        <p class="text-gray-700"><strong>Alamat:</strong> ${c.alamat}</p>

        <div class="flex gap-2 mt-4">
          <button class="bg-yellow-500 px-4 py-1.5 rounded-lg text-white hover:bg-yellow-600 transition"
            onclick="editContact(${i})">Edit</button>

          <button class="bg-red-600 px-4 py-1.5 rounded-lg text-white hover:bg-red-700 transition"
            onclick="deleteContact(${i})">Hapus</button>
        </div>
      </div>
    `;
  });
}

renderContacts();

// GET INPUT
function getInput() {
  return {
    nama: document.getElementById("nama").value,
    nomor: document.getElementById("nomor").value,
    email: document.getElementById("email").value,
    alamat: document.getElementById("alamat").value,
  };
}

// CLEAR FORM
function clearForm() {
  document.getElementById("nama").value = "";
  document.getElementById("nomor").value = "";
  document.getElementById("email").value = "";
  document.getElementById("alamat").value = "";
}

// TAMBAH
document.getElementById("btnTambah").onclick = function () {
  const data = getInput();

  if (!data.nama || !data.nomor || !data.email || !data.alamat) {
    alert("Lengkapi semua data!");
    return;
  }

  contacts.push(data);
  clearForm();
  renderContacts();
};

// HAPUS
function deleteContact(i) {
  if (confirm("Yakin ingin menghapus kontak ini?")) {
    contacts.splice(i, 1);
    renderContacts();
  }
}

// EDIT
function editContact(i) {
  editIndex = i;
  const c = contacts[i];

  document.getElementById("nama").value = c.nama;
  document.getElementById("nomor").value = c.nomor;
  document.getElementById("email").value = c.email;
  document.getElementById("alamat").value = c.alamat;

  document.getElementById("btnTambah").classList.add("hidden");
  document.getElementById("btnSimpan").classList.remove("hidden");
  document.getElementById("btnBatal").classList.remove("hidden");
}

// SIMPAN
document.getElementById("btnSimpan").onclick = function () {
  contacts[editIndex] = getInput();
  clearForm();
  renderContacts();

  // Tombol kembali ke mode tambah
  document.getElementById("btnTambah").classList.remove("hidden");
  document.getElementById("btnSimpan").classList.add("hidden");
  document.getElementById("btnBatal").classList.add("hidden");
};

// BATAL
document.getElementById("btnBatal").onclick = function () {
  clearForm();

  document.getElementById("btnTambah").classList.remove("hidden");
  document.getElementById("btnSimpan").classList.add("hidden");
  document.getElementById("btnBatal").classList.add("hidden");
};
