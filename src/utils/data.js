import jerman from "./../assets/leader/jerman.png";
import jepang from "./../assets/leader/jepang.png";
import italia from "./../assets/leader/italia.png";
import unisoviet from "./../assets/leader/unisoviet.png";
import amerika from "./../assets/leader/amerika.jpg";
import britania from "./../assets/leader/britania.webp";
import prancis from "./../assets/leader/prancis.jpg";

const leader = () => [
  {
    id: 1,
    name: "Hirohito",
    country: "Jepang",
    img: jepang,
    quotes:
      "Melalui semangat bangsa dan tekad untuk mencapai kemuliaan, kita akan membentuk masa depan yang gemilang untuk Jepang.",
  },
  {
    id: 2,
    name: "Adolf Hitler",
    country: "Jerman Nazi",
    img: jerman,
    quotes:
      "Saya percaya bahwa bangsa Aryan memiliki takdir besar, dan kita bertanggung jawab untuk mewujudkannya melalui kekuatan dan keuletan.",
  },
  {
    id: 3,
    name: "Benito Mussolini ",
    country: "Italia",
    img: italia,
    quotes:
      "Kekuatan sebuah bangsa terletak pada kedisiplinan, kesatuan, dan kehendak untuk mengatasi segala rintangan. Italia akan menjadi besar lagi, karena kita memiliki tekad untuk meraih kebesaran.",
  },
  {
    id: 4,
    name: "Josef Stalin",
    country: "Uni Soviet",
    img: unisoviet,
    quotes:
      "Kekuatan sejati tidak terletak pada kata-kata, melainkan pada tindakan. Kita harus bersatu dan bersiap untuk membela tanah air dengan setiap harga.",
  },
  {
    id: 5,
    name: "Franklin D. Roosevelt",
    country: "Amerika Serikat",
    img: amerika,
    quotes:
      "Hari yang akan hidup dalam ketidakberdayaan adalah hari yang akan hidup dalam ketidakbebasan. Kita tidak boleh menyerah, kita harus maju dengan keyakinan dan tekad.",
  },
  {
    id: 6,
    name: "Winston Churchill",
    country: "Inggris",
    img: britania,
    quotes:
      "Ketika kita menghadapi tantangan terbesar, tidak boleh ada kata menyerah. Kita akan berjuang di darat, di laut, dan di udara untuk mempertahankan kebebasan dan martabat kita.",
  },
  {
    id: 7,
    name: "Édouard Daladier",
    country: "Prancis",
    img: prancis,
    quotes:
      "Kemerdekaan tidak akan pernah diberikan, tetapi harus diraih. Kita akan mempertahankan kedaulatan dan martabat Prancis dengan setiap cara yang diperlukan.",
  },
];

export default leader;
