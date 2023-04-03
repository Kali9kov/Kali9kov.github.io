document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
  
      // Remove the 'active' class from all links
      document.querySelectorAll('nav a').forEach(navLink => {
        navLink.classList.remove('active');
      });
  
      // Add the 'active' class to the clicked link
      e.target.classList.add('active');
  
      const targetSectionId = e.target.getAttribute('href');
      const targetSection = document.querySelector(targetSectionId);
  
      document.querySelectorAll('.terminal-content').forEach(section => {
        section.style.display = 'none';
      });
  
      targetSection.style.display = 'block';
  
      // Reset terminal height when switching sections
      const terminalBody = document.querySelector('.terminal-body');
      terminalBody.style.height = defaultHeight;
      terminalBody.style.overflowY = 'hidden';
    });
  });
  
  const defaultHeight = '300px';

  document.querySelector('nav a').click(); // Trigger the initial section display
  
  // Green button functionality
  document.querySelector('.terminal-button.green').addEventListener('click', () => {
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody.style.height === defaultHeight) {
      terminalBody.style.height = '400px';
      if (terminalBody.scrollHeight > terminalBody.clientHeight) {
        terminalBody.style.overflowY = 'scroll';
      }
    } else {
      terminalBody.style.height = defaultHeight;
      terminalBody.style.overflowY = 'hidden';
    }
  });

  // Red button functionality
  document.querySelector('.terminal-button.red').addEventListener('click', () => {
    const homeLink = document.querySelector('nav a[href="#home"]');
    homeLink.click();
  });
  
  document.querySelector('.terminal-button.yellow').addEventListener('click', () => {
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody.style.height === defaultHeight) {
    terminalBody.style.height = '0';
    } else {
    terminalBody.style.height = defaultHeight;
    }
  });

  const terminalSections = document.querySelectorAll('.terminal-content');
