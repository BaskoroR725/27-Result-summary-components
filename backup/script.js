async function loadSummary() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    const summaryContainer = document.getElementById('summary-items');

    summaryContainer.innerHTML = data.map(item => `
      <div class="summary-item" data-category="${item.category}">
        <div class="category">
          <img src="${item.icon}" alt="">
          <span>${item.category}</span>
        </div>
        <p class="item-score"><span>${item.score}</span> / 100</p>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading summary data:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadSummary);
