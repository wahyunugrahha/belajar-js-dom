document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen DOM
  const form = document.getElementById("feedbackForm");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const status = document.getElementById("formStatus");
  const feedbackList = document.getElementById("feedbackList");

  // Event saat form disubmit
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    // Validasi input kosong
    if (!name || !message) {
      status.textContent = "Please fill in all fields.";
      status.className = "error";
      return;
    }

    // Tampilkan status sukses
    status.textContent = "Feedback submitted successfully!";
    status.className = "success";

    // Buat elemen feedback baru
    const newFeedback = document.createElement("div");
    newFeedback.classList.add("feedback-item");

    // Tampilkan nama dan pesan, serta tombol delete
    newFeedback.innerHTML = `
      <strong>${name}</strong>: ${message}
      <button class="deleteBtn">Delete</button>
    `;

    // Tambahkan ke feedback list
    feedbackList.appendChild(newFeedback);

    // Reset form input
    form.reset();

    // Event tombol delete
    newFeedback.querySelector(".deleteBtn").addEventListener("click", () => {
      feedbackList.removeChild(newFeedback);
    });
  });

  // Batasi karakter input
  nameInput.setAttribute("maxlength", "50");
  messageInput.setAttribute("maxlength", "200");
});
