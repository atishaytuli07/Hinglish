function displayContentBasedOnDevice() {
    const appContent = document.querySelector('.app');
    const nav = document.querySelector('.nav-container');
    const desktopMessage = document.getElementById('desktop-message');
  
    if (window.innerWidth <= 580) {
      appContent.style.display = 'block';
      nav.style.display = 'block';
      desktopMessage.style.display = 'none';
    } 
    
    else {
      appContent.style.display = 'none';
      nav.style.display = 'none';
      desktopMessage.style.display = 'flex';
    }
  }
  
  window.onload = displayContentBasedOnDevice;
  window.onresize = displayContentBasedOnDevice;