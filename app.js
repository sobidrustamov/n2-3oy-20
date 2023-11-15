let savollar = [
  {
    savol:
      "G‘ildiraklarni yo‘l bilan ilashishi yo‘qolganda (kuchli yomg‘ir, sel yoki suv toshgan yo‘l qismlari) haydovchi:",
    togri: "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim",
    notogri1:
      "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim",
    notogri2: "Tezlikni oshirishi lozim",
    image: "images/testbox.svg",
  },
  {
    savol:
      "Kunning qorong‘i vaqtida aholi punktlarida yo‘lning yoritilgan qismida Siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?",
    notogri1: "Gabarit chiroqlardan",
    togri: "Yaqinni yorituvchi chiroqlardan",
    notogri2: "Yaqinni yoki uzoqni yorituvchi chiroqlardan",
    image: "images/testbox.svg",
  },
  {
    savol:
      "G‘ildiraklarni yo‘l bilan ilashishi yo‘qolganda (kuchli yomg‘ir, sel yoki suv toshgan yo‘l qismlari) haydovchi:",
    togri: "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim",
    notogri1:
      "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim",
    notogri2: "Tezlikni oshirishi lozim",
    image: "images/testbox.svg",
  },
  {
    savol:
      "Kunning qorong‘i vaqtida aholi punktlarida yo‘lning yoritilgan qismida Siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?",
    notogri1: "Gabarit chiroqlardan",
    togri: "Yaqinni yorituvchi chiroqlardan",
    notogri2: "Yaqinni yoki uzoqni yorituvchi chiroqlardan",
    image: "images/testbox.svg",
  },
  {
    savol:
      "G‘ildiraklarni yo‘l bilan ilashishi yo‘qolganda (kuchli yomg‘ir, sel yoki suv toshgan yo‘l qismlari) haydovchi:",
    togri: "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim",
    notogri1:
      "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim",
    notogri2: "Tezlikni oshirishi lozim",
    image: "images/testbox.svg",
  },
  {
    savol:
      "Kunning qorong‘i vaqtida aholi punktlarida yo‘lning yoritilgan qismida Siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?",
    notogri1: "Gabarit chiroqlardan",
    togri: "Yaqinni yorituvchi chiroqlardan",
    notogri2: "Yaqinni yoki uzoqni yorituvchi chiroqlardan",
    image: "images/testbox.svg",
  },
  {
    savol:
      "G‘ildiraklarni yo‘l bilan ilashishi yo‘qolganda (kuchli yomg‘ir, sel yoki suv toshgan yo‘l qismlari) haydovchi:",
    togri: "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim",
    notogri1:
      "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim",
    notogri2: "Tezlikni oshirishi lozim",
    image: "images/testbox.svg",
  },
  {
    savol:
      "Kunning qorong‘i vaqtida aholi punktlarida yo‘lning yoritilgan qismida Siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?",
    notogri1: "Gabarit chiroqlardan",
    togri: "Yaqinni yorituvchi chiroqlardan",
    notogri2: "Yaqinni yoki uzoqni yorituvchi chiroqlardan",
    image: "images/testbox.svg",
  },
  {
    savol:
      "G‘ildiraklarni yo‘l bilan ilashishi yo‘qolganda (kuchli yomg‘ir, sel yoki suv toshgan yo‘l qismlari) haydovchi:",
    togri: "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim",
    notogri1:
      "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim",
    notogri2: "Tezlikni oshirishi lozim",
    image: "images/testbox.svg",
  },
  {
    savol:
      "Kunning qorong‘i vaqtida aholi punktlarida yo‘lning yoritilgan qismida Siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?",
    notogri1: "Gabarit chiroqlardan",
    togri: "Yaqinni yorituvchi chiroqlardan",
    notogri2: "Yaqinni yoki uzoqni yorituvchi chiroqlardan",
    image: "images/testbox.svg",
  },
];

let savoll = document.querySelector(".savol");
let javob = document.querySelectorAll("li");
let a = document.querySelector(".a");
let b = document.querySelector(".a");
let c = document.querySelector(".b");
let img = document.querySelector("img");

javob.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 10 + 1);
  // let tasodifiySavol = savollar[random];
  console.log(savoll[random]);
  if (javob.textContent === tasodifiySavol.togri) {
    e.target.classList.add("bg-success");
  }
});
