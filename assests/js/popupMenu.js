const popMenu = document.getElementById('popMenu');
        const openPopButton = document.getElementById('openPop');
        const closePopButton = document.getElementById('closePop');

        openPopButton.addEventListener('click', () => {
        popMenu.style.transform = 'translateX(0)'; // Slide in by changing the 'top' position
        });

        closePopButton.addEventListener('click', () => {
        popMenu.style.transform = 'translateX(100%)'; // Slide out by changing the 'top' position
        });