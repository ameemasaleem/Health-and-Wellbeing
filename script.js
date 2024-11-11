// JavaScript to show a random wellbeing tip
function showRandomTip() {
    const tips = [
      "Drink plenty of water throughout the day.",
      "Get at least 30 minutes of exercise daily.",
      "Eat a balanced diet with plenty of vegetables and fruits.",
      "Practice mindfulness or meditation to reduce stress.",
      "Sleep at least 7-8 hours each night."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("random-tip").innerText = randomTip;
  }
  
  // Form submission handling
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("form-message").innerText = `Thank you, ${name}! We’ll be in touch soon.`;
  });
  