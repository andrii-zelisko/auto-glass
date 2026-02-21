import BuildIcon from "@mui/icons-material/Build";
import ConstructionIcon from "@mui/icons-material/Construction";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TimerIcon from "@mui/icons-material/Timer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SavingsIcon from "@mui/icons-material/Savings";

import Pilkington from "../assets/pilkington.png";
import SaintGobain from "../assets/saint_gobain.jpeg";
import Guardian from "../assets/guardian_glass.jpeg";
import AGC from "../assets/agc.png";
import Fuyao from "../assets/fuyao_glass.png";
import XYG from "../assets/xyg.jpg";


export const services = [
  {
    title: "Заміна автоскла",
    icon: BuildIcon,
    text: "Професійна заміна лобового, бокового та заднього скла з дотриманням заводських стандартів та гарантією герметичності."
  },
  {
    title: "Ремонт тріщин і сколів",
    icon: ConstructionIcon,
    text: "Швидке відновлення пошкодженого скла без демонтажу. Це економить кошти та запобігає поширенню тріщин."
  },
  {
    title: "Продаж скла",
    icon: StorefrontIcon,
    text: "Широкий вибір автоскла для всіх марок авто від провідних світових виробників."
  },
  {
    title: "Тонування скла",
    icon: AutoAwesomeIcon,
    text: "Професійне тонування з використанням якісних плівок, що захищають від сонця та підвищують комфорт."
  }
];

export const advantages = [
  {
    title: "Гарантована якість",
    icon: VerifiedIcon,
    text: "Ми використовуємо тільки перевірені матеріали та надаємо офіційну гарантію на всі виконані роботи."
  },
  {
    title: "Досвідчені майстри",
    icon: EngineeringIcon,
    text: "Наші спеціалісти мають багаторічний досвід роботи з автосклом будь-якої складності."
  },
  {
    title: "Швидке обслуговування",
    icon: TimerIcon,
    text: "Більшість робіт виконуються в день звернення без втрати якості."
  },
  {
    title: "Високі стандарти",
    icon: ThumbUpIcon,
    text: "Дотримуємося технологій виробників автомобілів і норм безпеки."
  },
  {
    title: "Чесні ціни",
    icon: SavingsIcon,
    text: "Прозоре ціноутворення без прихованих платежів та оптимальні пропозиції."
  }
];

export const galleryImages = [
  "/images/work1.jpg",
  "/images/work2.jpg",
  "/images/work3.jpg",
  "/images/work4.jpg",
  "/images/work5.jpg",
  "/images/work6.jpg"
];

export const glassCompanies = [
  {
    name: "Pilkington",
    image: Pilkington,
    description: "Світовий виробник автомобільного та архітектурного скла.",
    url: "https://www.pilkington.com"
  },
  {
    name: "Saint-Gobain Sekurit",
    image: SaintGobain,
    description: "Європейський лідер у виробництві OEM автоскла.",
    url: "https://www.sekurit.com"
  },
  {
    name: "Guardian Glass",
    image: Guardian,
    description: "Інноваційні рішення скла для авто та будівництва.",
    url: "https://www.guardianglass.com"
  },
  {
    name: "AGC Automotive",
    image: AGC,
    description: "Один із найбільших світових виробників автоскла.",
    url: "https://www.agc-automotive.com"
  },
  {
    name: "Fuyao Glass",
    image: Fuyao,
    description: "Глобальний постачальник скла для автовиробників.",
    url: "https://www.fuyaogroup.com"
  },
  {
    name: "XYG",
    image: XYG,
    description: "Китайський виробник автоскла міжнародного рівня.",
    url: "https://www.xyg.cn"
  }
];