/**
 * Adds a class to the footer
 * @param className The class to add
 */
export function addClassToFooter(className: string) {
  // After the page loads, add a class to the footer
  document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    footer.classList.add(className);
  });
}
