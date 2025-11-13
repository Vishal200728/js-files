// 1️⃣ Index file
document.getElementById("btnHtml").onclick = () => {
  const html = `
    <h2>Index File</h2>
    <button onclick="document.body.innerHTML += '<p>📖 This is text from the Index File.</p>'">Read</button>`;
  const blob = new Blob([html], { type: "text/html" });
  window.open(URL.createObjectURL(blob));
};

// 2️⃣ PNG file
document.getElementById("btnPng").onclick = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, 200, 200);
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "image.png";
  a.click();
};

// 3️⃣ PDF file
document.getElementById("btnPdf").onclick = async () => {
  if (typeof window.jspdf === "undefined")
    await import("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("📄 This is a simple PDF file created with jsPDF.", 20, 30);
  doc.save("file.pdf");
};

// 4️⃣ Utilities file
document.getElementById("btnUtils").onclick = () => {
  const html = `
    <h2>Utilities File</h2>
    <button onclick="document.body.innerHTML += '<p>⚙ Utilities File: Read button text displayed here.</p>'">Read</button>`;
  const blob = new Blob([html], { type: "text/html" });
  window.open(URL.createObjectURL(blob));
};
