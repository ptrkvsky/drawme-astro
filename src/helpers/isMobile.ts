// Vérifier si l'appareil est un mobile
export const isMobile =
  /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
    navigator.userAgent
  );
