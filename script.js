function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

function handleChat() {
  const input = document.getElementById("chatInput").value;
  document.getElementById("chatResponse").innerText = "Archive is thinking... (demo response)";
}

function addNewCode() {
  const newCode = document.getElementById("newCode").value;
  let saved = JSON.parse(localStorage.getItem("legalSenseCode") || "[]");
  saved.push(newCode);
  localStorage.setItem("legalSenseCode", JSON.stringify(saved));
  updateCodeLibrary();
}

function updateCodeLibrary() {
  const saved = JSON.parse(localStorage.getItem("legalSenseCode") || "[]");
  const libraryDiv = document.getElementById("codeLibrary");
  libraryDiv.innerHTML = saved.map(code => `<pre>${code}</pre>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCodeLibrary();
  switchTab('chat');
});