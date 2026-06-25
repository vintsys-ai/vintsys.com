/* ==========================================================================
   vinTsys Corporate Website Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-nav');
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta-btn, .hero-btn-primary, .hero-link-secondary, .scholarint-btn');

  const STICKY_NAV_HEIGHT = 65; // Matches approximate nav bar height in pixels

  /* ==========================================================================
     1. Scroll Shadow Activation
     ========================================================================== */
  const handleScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Run on load and add listener
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ==========================================================================
     2. Mobile Hamburger Toggle (ARIA compliant)
     ========================================================================== */
  const toggleMobileMenu = (forceState) => {
    const isOpening = forceState !== undefined ? forceState : !header.classList.contains('nav-open');
    
    if (isOpening) {
      header.classList.add('nav-open');
      mobileToggle.setAttribute('aria-expanded', 'true');
    } else {
      header.classList.remove('nav-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close menu when clicking outside header-nav
  document.addEventListener('click', (e) => {
    if (header.classList.contains('nav-open') && !header.contains(e.target)) {
      toggleMobileMenu(false);
    }
  });

  /* ==========================================================================
     3. Offset-aware Smooth Scroll for Anchor Links
     ========================================================================== */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Only handle internal anchor links
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Close mobile menu if open
        toggleMobileMenu(false);

        // Scroll to target element with offset
        if (href === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - STICKY_NAV_HEIGHT;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Update focus for screen readers and accessibility
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus({ preventScroll: true });
          }
        }
      }
    });
  });
});
