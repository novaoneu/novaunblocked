function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}

document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
let coinCount = 0;
let autoClickRate = 0;
let autoClickCost = 100;

const coinElement = document.getElementById('coin');
const coinCountElement = document.getElementById('coin-count');
const autoClickUpgradeButton = document.getElementById('auto-click-upgrade');

coinElement.addEventListener('click', function() {
    coinCount++;
    updateCoinCount();
});

function updateCoinCount() {
    coinCountElement.textContent = coinCount;
}

autoClickUpgradeButton.addEventListener('click', function() {
    if (coinCount >= autoClickCost) {
        coinCount -= autoClickCost;
        autoClickRate++;
        updateCoinCount();
        autoClickUpgradeButton.disabled = true;
        startAutoClicking();
    }
});

function startAutoClicking() {
    setInterval(() => {
        coinCount += autoClickRate;
        updateCoinCount();
    }, 1000);
}
