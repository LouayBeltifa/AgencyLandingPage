const btnHi = document.getElementById("BtnHi");
const Modal = document.getElementById("HiModal");
const overlay = document.getElementById("ModalOverlay");
const closeBtn = document.getElementById("CloseBtn");
const ContactUsBtn = document.getElementById("ContactUsBtn");
const sendBtn = document.getElementById("SendBtn");

const Username = document.getElementById("Username");
const Useremail = document.getElementById("Useremail");
const Userphone = document.getElementById("Userphone");
const Usersubject = document.getElementById("Usersubject");
const Usermessage = document.getElementById("Usermessage");

btnHi.addEventListener("click", () => {
    Modal.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    Modal.classList.remove("show");
    overlay.classList.remove("show");
});

closeBtn.addEventListener("click", () => {
    Modal.classList.remove("show");
    overlay.classList.remove("show");
});

ContactUsBtn.addEventListener("click", () => {
    Modal.classList.toggle("show");
    overlay.classList.toggle("show");
});

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    alert("Thanks for contacting us Mr " + Username.value +". We will get back to you soon!");
    Modal.classList.remove("show");
    overlay.classList.remove("show");
});