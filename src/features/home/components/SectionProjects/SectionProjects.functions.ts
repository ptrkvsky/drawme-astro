import { isMobile } from "@helpers/isMobile";

export function setIllustrationsLagAndSpeed() {
  // Sélectionner l'élément avec la classe "illustration" et l'attribut "data-speed"
  const illustrations: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    ".illustration[data-speed]"
  );

  illustrations.forEach((illustration) => {
    // Modifier la valeur de l'attribut "data-speed" en fonction de l'appareil
    if (isMobile) {
      illustration.dataset.speed = "0";
      illustration.dataset.lag = "0";
    }
  });
}

export function setTextsLagAndSpeed() {
  // Sélectionner l'élément avec la classe "illustration" et l'attribut "data-speed"
  const texts: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    ".sub-title[data-speed]"
  );

  texts.forEach((text) => {
    // Modifier la valeur de l'attribut "data-speed" en fonction de l'appareil
    if (isMobile) {
      text.dataset.speed = "0.95";
      text.dataset.lag = "0.05";
    }
  });
}

export function hideImages() {
  const images: NodeListOf<HTMLImageElement> | null =
    document.querySelectorAll(".canva-holder img");
  if (!images.length) return;
  images.forEach((image) => {
    image.classList.remove("d-none");
  });
}
