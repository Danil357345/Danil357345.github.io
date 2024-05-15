function createCommonLinks() {
  // Create container with class for styling
  const linkContainer = document.createElement("nav");
  linkContainer.classList.add("common-links");

  // Define links as an array of objects
  const links = [
    { text: "Ilya's page", href: "https://gulkily.github.io", color: "#007bff" }, // Blue
    { text: "Dima's page", href: "https://sirni4ek.github.io", color: "#ffc107" }, // Orange
    { text: "Solimia's page", href: "https://solomiia2098.github.io", color: "#28a745" }, // Green
    // Add more links with text, href, and optional color property
  ];

  // Create and style links using destructuring
  links.forEach((link) => {
    const { text, href, color = "#000" } = link; // Destructure with default color
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = href;
    anchor.style.color = color; // Set anchor color
    linkContainer.appendChild(anchor);
  });

  // Append container to the body
  document.body.appendChild(linkContainer);
}

// Call the function after DOM is loaded
window.addEventListener("DOMContentLoaded", createCommonLinks);

// Add CSS to style the container (optional)
// You can place this within a `<style>` tag in your HTML
.common-links {
  display: flex; // Arrange links horizontally
  justify-content: space-between; // Distribute links evenly
  margin: 1rem auto; // Add some margin
  padding: 0.5rem;
  border-radius: 5px; // Rounded corners
  background-color: #eee; // Light background
}

.common-links a {
  text-decoration: none; // Remove underline
  font-weight: bold; // Bold text
  transition: color 0.2s ease-in-out; // Smooth color transition on hover
}

.common-links a:hover {
  color: #999; // Change color on hover
}
