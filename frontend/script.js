const form = document.getElementById('weight-form');
const historyList = document.getElementById('history-list');
const apiUrl = 'http://localhost:3000/api/registros';

// Fetch and display existing entries
async function fetchEntries() {
    try {
        const response = await fetch(apiUrl);
        const entries = await response.json();
        historyList.innerHTML = ''; // Clear the list
        entries.forEach(entry => {
            addEntryToDOM(entry.date, entry.weight);
        });
    } catch (error) {
        console.error('Error fetching entries:', error);
    }
}

// Add a single entry to the DOM
function addEntryToDOM(date, weight) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${date}</span> <span>${weight} kg</span>`;
    historyList.appendChild(li);
}

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const weight = document.getElementById('weight').value;

    if (date && weight) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date, weight }),
            });

            if (response.ok) {
                form.reset();
                fetchEntries(); // Refresh the list
            } else {
                console.error('Failed to add entry');
            }
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', fetchEntries);
