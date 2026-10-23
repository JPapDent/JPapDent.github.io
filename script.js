// ==========================================
// 1. KATEX MATH RENDERING INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    if (typeof renderMathInElement === "function") {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                            {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        });
    }
});

// ==========================================
// 2. YOUR OTHER CODE (Hue Slider, Login, etc.)
// ==========================================
const hueSlider = document.getElementById('hueSlider');

if (hueSlider) {
    hueSlider.addEventListener('input', (e) => {
        document.documentElement.style.setProperty('--hue', e.target.value);
    });
}
