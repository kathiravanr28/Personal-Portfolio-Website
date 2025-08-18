export function opentab(tabName) {
  const tabContents = document.querySelectorAll('.tab-contents');
  const tabLinks = document.querySelectorAll('.tab-links');

  // Hide all tab contents
  tabContents.forEach(content => {
    content.classList.remove("active-tab");
  });

  // Remove active link from all
  tabLinks.forEach(link => {
    link.classList.remove("active-link");
  });

  // Show selected tab
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add("active-tab");
  }

  // Highlight active link
  const selectedLink = document.querySelector(`[data-tab="${tabName}"]`);
  if (selectedLink) {
    selectedLink.classList.add("active-link");
  }
}
