// Open external links in new tab
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a');
  const currentDomain = window.location.hostname;

  links.forEach(link => {
    const href = link.getAttribute('href');

    // Skip if no href or it's an anchor link
    if (!href || href.startsWith('#')) return;

    // Check if it's an external link
    if (href.startsWith('http://') || href.startsWith('https://')) {
      try {
        const linkDomain = new URL(href).hostname;
        if (linkDomain !== currentDomain) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      } catch (e) {
        // Invalid URL, skip
      }
    } else if (href.startsWith('mailto:')) {
      // Don't modify mailto links
      return;
    }
  });
});
