# CSS Implementation Details - Code Reference

## 📌 TABLE OF CONTENTS
1. CSS Variables Setup
2. Theme Implementation
3. Animation Keyframes
4. Component Updates
5. Accessibility Features

---

## 1️⃣ CSS VARIABLES SETUP

### Modern Theme Variables (in `:root`)
```css
:root {
    /* Modern Dark Theme with Neon Colors (2025 Style) */
    --bg-main: #0f172a;                    /* Primary background */
    --bg-secondary: #1e293b;               /* Secondary background */
    --bg-card: #1e293b;                    /* Card backgrounds */
    --text-primary: #e2e8f0;               /* Primary text */
    --text-secondary: #94a3b8;             /* Secondary text */
    
    /* Primary Indigo Theme */
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --primary-glow: rgba(99, 102, 241, 0.4);
    
    /* Accent Pink Theme */
    --accent: #ec4899;
    --accent-dark: #db2777;
    --accent-glow: rgba(236, 72, 153, 0.35);
    
    /* Gradient for Headings */
    --gradient-heading: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
    
    /* Backward Compatibility Variables */
    --primary-color: #6366f1;
    --secondary-color: #a855f7;
    --accent-color: #ec4899;
    --text-color: #e2e8f0;
    --text-light: #94a3b8;
    --bg-color: #0f172a;
    --bg-tertiary: #334155;
    --card-bg: #1e293b;
    --border-color: #334155;
}
```

---

## 2️⃣ THEME IMPLEMENTATION

### Body Background (Dual Gradient)
```css
body {
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
    background-color: var(--bg-main);
    
    /* Layered background with gradients */
    background: 
        radial-gradient(
            circle at 20% 50%,
            rgba(99, 102, 241, 0.08) 0%,
            transparent 50%
        ),
        radial-gradient(
            circle at 80% 80%,
            rgba(236, 72, 153, 0.06) 0%,
            transparent 50%
        ),
        var(--bg-main);
    
    background-attachment: fixed;
    background-size: 100% 100%;
    line-height: 1.6;
    transition: var(--transition);
    overflow-x: hidden;
}
```

### Gradient Text for Headings
```css
h1 {
    font-size: 3rem;
    background: var(--gradient-heading);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px var(--primary-glow);
    animation: breathingGlow 4s ease-in-out infinite;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: var(--gradient-heading);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: softShine 3s ease-in-out infinite;
}
```

### Primary Button with Glow
```css
.btn-primary {
    background-color: var(--primary);
    color: white;
    box-shadow: 0 0 20px var(--primary-glow);
    transition: var(--transition);
}

.btn-primary:hover {
    background-color: var(--accent);
    transform: scale(1.04) translateY(-2px);
    box-shadow: 0 0 30px var(--accent-glow);
}
```

### Card Component with Glow & Animation
```css
.project-card {
    background-color: var(--bg-card);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
    transition: var(--transition);
    border: 1px solid rgba(99, 102, 241, 0.2);
    animation: fadeInUp 0.8s ease-out backwards;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }

.project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 0 30px var(--primary-glow), 0 0 15px var(--accent-glow);
    border-color: var(--accent);
}
```

### Navigation Bar with Glow
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: var(--bg-secondary);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: var(--transition);
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
}

.nav-links a:hover {
    color: var(--primary);
    transform: scale(1.05);
    box-shadow: 0 0 15px var(--primary-glow);
}
```

---

## 3️⃣ ANIMATION KEYFRAMES

### Breathing Glow (Headings)
```css
@keyframes breathingGlow {
    0%, 100% {
        transform: scale(1);
        text-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
    }
    50% {
        transform: scale(1.02);
        text-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
    }
}

h1 {
    animation: breathingGlow 4s ease-in-out infinite;
}
```

### Soft Shine (Gradient Text)
```css
@keyframes softShine {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

h2 {
    animation: softShine 3s ease-in-out infinite;
}
```

### Subtle Shine (Names & Titles)
```css
@keyframes subtleShine {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.85;
    }
}

.skill-name, .project-title {
    animation: subtleShine 2s ease-in-out infinite;
}
```

### Floating Glow (Background)
```css
@keyframes floatingGlow {
    0% {
        transform: translate(0, 0);
    }
    33% {
        transform: translate(30px, -30px);
    }
    66% {
        transform: translate(-20px, 20px);
    }
    100% {
        transform: translate(0, 0);
    }
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 30% 40%,
        rgba(99, 102, 241, 0.15) 0%,
        transparent 50%
    );
    animation: floatingGlow 25s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
}
```

### Fade In Up (Cards)
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-card {
    animation: fadeInUp 0.8s ease-out backwards;
}
```

### Staggered Delays for Cards
```css
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(n+4) { animation-delay: 0.4s; }
```

---

## 4️⃣ COMPONENT UPDATES

### Icon with Glow
```css
.contact-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
    box-shadow: 0 0 20px var(--primary-glow);
    transition: var(--transition);
}

.contact-icon:hover {
    box-shadow: 0 0 30px var(--accent-glow);
    transform: scale(1.1);
}
```

### Form Input with Focus Glow
```css
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--bg-card);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: var(--border-radius);
    color: var(--text-primary);
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 20px var(--primary-glow);
}
```

### Social Links with Gradient Hover
```css
.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 50%;
    font-size: 1.25rem;
    transition: var(--transition);
    color: var(--primary);
}

.social-links a:hover {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 0 20px var(--primary-glow);
    border-color: var(--primary);
}
```

### Tag/Badge Component
```css
.tag {
    padding: 0.25rem 0.75rem;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 20px;
    font-size: 0.85rem;
    color: var(--text-secondary);
    transition: var(--transition);
}

.tag:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(236, 72, 153, 0.3));
    border-color: var(--primary);
}
```

### Footer with Top Glow
```css
footer {
    background-color: var(--bg-secondary);
    background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(15, 23, 42, 0.8) 100%);
    padding: 3rem 0;
    border-top: 1px solid rgba(99, 102, 241, 0.2);
    position: relative;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    box-shadow: 0 0 20px var(--primary-glow);
}
```

---

## 5️⃣ ACCESSIBILITY FEATURES

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 📊 SUMMARY OF CHANGES

| Component | Before | After |
|-----------|--------|-------|
| Headings | Plain text | Gradient + animation + glow |
| Buttons | Solid color + shadow | Gradient + glow + scale |
| Cards | Subtle shadow | Border glow + animation |
| Navigation | Basic design | Glowing elements + effects |
| Forms | Basic inputs | Glow on focus |
| Links | Plain text | Glow + scale on hover |
| Background | Plain color | Dual gradient + floating glow |

---

**All changes are CSS-only. No HTML or JavaScript modifications required.**
**Fully backward compatible with existing markup and classes.**
