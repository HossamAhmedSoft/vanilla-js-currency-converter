# Vanilla JavaScript Currency Converter

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

A lightweight real-time bidirectional currency conversion tool built with **Vanilla JavaScript** demonstrating DOM event binding (`onkeyup`), bidirectional exchange rate calculation between Egyptian Pounds (EGP) and US Dollars (USD), and real-time input synchronization.

---

## Technical Overview

- **Real-Time Input Synchronization:** Binds `keyup` event handlers to both input fields to calculate instant reciprocal conversions without requiring form submit triggers.
- **Bi-Directional Currency Logic:**
  - USD ➔ EGP: `EGP = USD * Rate`
  - EGP ➔ USD: `USD = (EGP / Rate).toFixed(2)`
- **Zero Runtime Dependencies:** Pure HTML5 and vanilla JavaScript.

---

## File Structure

```
vanilla-js-currency-converter/
├── index.html     # Minimalist dual-input conversion markup
├── demo.js        # Event handlers & mathematical conversion logic
└── styles.css     # Base presentation styles
```

---

## Running Locally

Open `index.html` directly in any web browser, or serve locally:

```bash
# Using Python built-in server
python -m http.server 8080
```

---

## Author & License

- **Developer:** Hossam Ahmed ([@KabtinBandar](https://github.com/KabtinBandar))
- **License:** MIT
