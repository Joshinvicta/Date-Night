function revealLocation() {
    var address = document.getElementById("address");
    address.style.display = "block";  // Show the address when clicked

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Confetti library (using CDN)
(function() {
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
    document.head.appendChild(script);
})();
