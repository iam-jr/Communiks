// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector("#dark-mode-toggle i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Image Preview
const fileInput = document.getElementById("file-upload");
const previewContainer = document.getElementById("preview-container");

fileInput.addEventListener("change", function () {
  previewContainer.innerHTML = "";
  const file = this.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Vista previa";
      img.style.maxWidth = "100%";
      img.style.borderRadius = "10px";
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

// Smooth Scroll (optional enhancement)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact Form Submission (simulated)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Simulated success feedback
  alert("¡Gracias por tu mensaje, " + name + "! Te responderemos pronto.");
  this.reset();
});
