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
  },
  {
    id: 2,
    name: "Adolf Hitler",
    country: "Jerman Nazi",
    img: jerman,
  },
  {
    id: 3,
    name: "Benito Mussolini ",
    country: "Italia",
    img: italia,
  },
  {
    id: 4,
    name: "Josef Stalin",
    country: "Uni Soviet",
    img: unisoviet,
  },
  {
    id: 5,
    name: "Franklin D. Roosevelt",
    country: "Amerika Serikat",
    img: amerika,
  },
  {
    id: 6,
    name: "Winston Churchill",
    country: "Inggris",
    img: britania,
  },
  {
    id: 7,
    name: "Édouard Daladier",
    country: "Prancis",
    img: prancis,
  },
];

export default leader;
