function insertCommonLinks() {
  // Create the container element (optional)
  const linkContainer = document.createElement("nav");
  linkContainer.classList.add("common-links"); // Add a class for styling

  // Define your links as objects with text and href properties
  const links = [
    { text: "Ilya's page", url: "https://gulkily.github.io" },
    { text: "Dima's page", href: "https://sirni4ek.github.io" },
    { text: "Solimia's page", href: "https://solomiia2098.github.io" },
    // Add more links as needed
  ];

  // Loop through links and create anchor elements
  for (const link of links) {
    const anchor = document.createElement("a");
    anchor.textContent = link.text;
    anchor.href = link.href;

    // Optionally add target="_blank" for opening links in a new tab
    // anchor.target = "_blank";

    linkContainer.appendChild(anchor);
  }

  // Append the container to the body (or desired location)
  document.body.appendChild(linkContainer);
}

// Call the function after the DOM is loaded (ensures elements exist)
window.addEventListener("DOMContentLoaded", insertCommonLinks);
