document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    
    // Functions
    function openSidebar() {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    function closeSidebar() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    // Event listeners
    if (openSidebarBtn) {
      openSidebarBtn.addEventListener('click', openSidebar);
    }
    
    if (closeSidebarBtn) {
      closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    
    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }
    
    // Filter buttons (for portfolio page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterBtns.length > 0 && portfolioItems.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Remove active class from all buttons
          filterBtns.forEach(b => b.classList.remove('active'));
          
          // Add active class to clicked button
          btn.classList.add('active');
          
          // Get filter value
          const filterValue = btn.getAttribute('data-filter');
          
          // Filter portfolio items
          portfolioItems.forEach(item => {
            if (filterValue === 'all') {
              item.style.display = '';
            } else {
              if (item.getAttribute('data-category') === filterValue) {
                item.style.display = '';
              } else {
                item.style.display = 'none';
              }
            }
          });
        });
      });
    }
    
    // Lightbox functionaliteit
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
  
    if (portfolioImages.length > 0 && lightbox) {
      portfolioImages.forEach(img => {
        img.addEventListener('click', () => {
          lightbox.style.display = 'block';
          lightboxImg.src = img.src;
          lightboxCaption.innerHTML = img.alt;
          document.body.style.overflow = 'hidden';
        });
      });
      
      lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      });
      
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
  });