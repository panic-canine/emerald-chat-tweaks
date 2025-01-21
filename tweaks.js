function moveAside() {
  const asides = document.querySelectorAll('aside');
  const rightAside = Array.from(asides).find(aside => 
    aside.classList.contains('right') && aside.classList.contains('sideInfo')
  );
  
  const mainContainer = document.querySelector('[data-sentry-component="GroupChatLayout"]');
  
  if (rightAside && mainContainer) {
    // Store the original parent for potential restoration
    const originalParent = rightAside.parentElement;
    
    // Move the aside
    mainContainer.appendChild(rightAside);
    
    // Keep checking and re-moving if needed
    const keeper = setInterval(() => {
      if (rightAside.parentElement !== mainContainer) {
        mainContainer.appendChild(rightAside);
      }
    }, 500);
    
    // Stop after 30 seconds
    setTimeout(() => clearInterval(keeper), 30000);
  }
}

// Start checking after initial page load with a small delay
setTimeout(() => {
  moveAside();
  
  // Keep trying every second for 10 seconds
  const interval = setInterval(() => {
    moveAside();
  }, 1000);
  
  // Stop trying after 10 seconds
  setTimeout(() => clearInterval(interval), 10000);
}, 1000);
