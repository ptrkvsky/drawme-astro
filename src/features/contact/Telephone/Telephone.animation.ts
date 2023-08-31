export function splitTelephone() {
  const telephoneLink = document.getElementById("telephone");

  if (telephoneLink) {
    const phoneNumber = telephoneLink.textContent.trim();
    const phoneNumberParts = phoneNumber.split(".");

    telephoneLink.innerHTML = ""; // Clear the existing content

    phoneNumberParts.forEach((part, index) => {
      const div = document.createElement("div");
      div.textContent =
        index === phoneNumberParts.length - 1 ? part : part + ".";
      telephoneLink.appendChild(div);
    });
  }
}
