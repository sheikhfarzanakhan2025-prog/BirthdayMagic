// GSAP Initial Load Animation
gsap.from(".glass-card", { 
    duration: 1.2, 
    opacity: 0, 
    y: 100, 
    ease: "expo.out" 
});

gsap.from(".hero-title", { 
    duration: 1, 
    delay: 0.4, 
    opacity: 0, 
    scale: 0.8, 
    ease: "back.out(1.7)" 
});

// Custom Cursor Tracker
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(outline, { x: e.clientX, y: e.clientY, duration: 0.3 });
});

// The Main Magic Function
function startMagic() {
    const name = document.getElementById('userName').value;
    
    // Validating input with a shake effect
    if(!name) {
        gsap.to(".input-wrapper", { x: 10, repeat: 5, yoyo: true, duration: 0.05 });
        return;
    }

    // Triggering the Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0055', '#00f2ff', '#ffffff']
    });

    // Content Switching with GSAP
    gsap.to("#inputView", { 
        duration: 0.6, 
        opacity: 0, 
        y: -20, 
        ease: "power2.in", 
        onComplete: () => {
            document.getElementById('inputView').style.display = 'none';
            document.getElementById('resultView').style.display = 'block';
            document.getElementById('displayName').innerText = name;
            
            // Animating in the results
            gsap.to("#resultView", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" });
            gsap.from(".dynamic-name", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out(2)" });
        }
    });
}
