function createCommonLinks() {
  // Create container with class for styling
  const linkContainer = document.createElement("nav");
  linkContainer.classList.add("common-links");

  // Define links as an array of objects for easier management
  const links = [
    { text: "Ilya's page", href: "https://gulkily.github.io" },
    { text: "Dima's page", href: "https://sirni4ek.github.io" },
    { text: "Solimia's page", href: "https://solomiia2098.github.io" },
    // Add more links with the same object structure
  ];

  // Create and append links using a more concise approach with destructuring
  links.forEach((link) => {
    const { text, href } = link; // Destructure text and href properties
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = href;
    linkContainer.appendChild(anchor);
  });

  // Append container to the body (or desired location if needed)
  document.body.appendChild(linkContainer);
}

// Call the function after DOM is loaded
window.addEventListener("DOMContentLoaded", createCommonLinks);
