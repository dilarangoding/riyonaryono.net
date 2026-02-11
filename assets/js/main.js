document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a');
  const currentDomain = window.location.hostname;

  links.forEach(link => {
    const href = link.getAttribute('href');

    if (!href || href.startsWith('#')) return;

    if (href.startsWith('http://') || href.startsWith('https://')) {
      try {
        const linkDomain = new URL(href).hostname;
        if (linkDomain !== currentDomain) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      } catch (e) {
      }
    } else if (href.startsWith('mailto:')) {
      return;
    }
  });
});
