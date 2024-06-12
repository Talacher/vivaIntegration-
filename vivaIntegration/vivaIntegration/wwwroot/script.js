// Simulated function to like an item
function likeItem(itemId) {
    console.log("Item liked: " + itemId);
    // Here you can send a request to your backend to record the like
    // For demonstration, you can just log the action
}

// Function to render Viva Connections card
function renderVivaCard() {
    var cardContainer = document.getElementById('vivaCardContainer');
    var itemName = "Your Item Name"; // Replace with actual item name
    var itemDescription = "Description of the item..."; // Replace with actual item description
    var timestamp = "June 12, 2024"; // Replace with actual timestamp
    var itemId = "your_item_id"; // Replace with actual item ID

    var cardHTML = `
        <div class="viva-card">
            <h2>${itemName}</h2>
            <p>${itemDescription}</p>
            <p class="timestamp">Posted: ${timestamp}</p>
            <button onclick="likeItem('${itemId}')">Like</button>
        </div>
    `;

    cardContainer.innerHTML = cardHTML;
}

// Call the function to render the card when the page loads
renderVivaCard();
