/**
 * Converts an email address displayed as a link into a more structured format.
 * This function extracts the username and domain parts of the email and separates them with div elements.
 */
export function splitEmail() {
  // Get the email link element by its ID
  const emailLink = document.getElementById("mail");

  if (emailLink) {
    // Get the text content of the email link
    const emailText = emailLink.textContent.trim();

    // Find the position of the "@" symbol in the email
    const atIndex = emailText.indexOf("@");

    if (atIndex !== -1) {
      // Extract the username and domain parts of the email
      const username = emailText.substring(0, atIndex);
      const domain = emailText.substring(atIndex + 1);

      // Clear the existing content of the email link
      emailLink.innerHTML = "";

      // Create a div element for the username and add it to the email link
      const usernameDiv = document.createElement("div");
      usernameDiv.textContent = username;
      emailLink.appendChild(usernameDiv);

      // Create a div element for the "@" symbol and add it to the email link
      const atDiv = document.createElement("div");
      atDiv.textContent = "@";
      emailLink.appendChild(atDiv);

      // Create a div element for the domain and add it to the email link
      const domainDiv = document.createElement("div");
      domainDiv.textContent = domain;
      emailLink.appendChild(domainDiv);
    }
  }
}
