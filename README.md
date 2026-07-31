# jQuery Khmer Address Formatter

> A lightweight, zero-dependency jQuery plugin designed to automatically format Cambodian address strings. It intelligently converts Western Arabic numerals (`0-9`) into Khmer digits (`០-៩`) and adds standard Khmer word spacing between administrative divisions (ភូមិ, ឃុំ, ស្រុក, ខេត្ត, etc.).

[![npm version](https://img.shields.io/npm/v/jquery-khmer-address-formatter.svg?style=flat-square)](https://www.npmjs.com/package/jquery-khmer-address-formatter)
[![npm downloads](https://img.shields.io/npm/dm/jquery-khmer-address-formatter.svg?style=flat-square)](https://www.npmjs.com/package/jquery-khmer-address-formatter)
[![jsdelivr](https://data.jsdelivr.net/v1/package/npm/jquery-khmer-address-formatter/badge?style=flat-square)](https://www.jsdelivr.com/package/npm/jquery-khmer-address-formatter)
[![license](https://img.shields.io/npm/l/jquery-khmer-address-formatter.svg?style=flat-square)](LICENSE)
---

## Key Features

* 🇰🇭 **Khmer Digit Translation:** Automatically normalizes Western numerals (`0-9`) to official Khmer digits (`០-៩`).
* 📍 **Full Administrative Coverage:** Supports all 25 Provinces/Autonomous Municipalities, Districts/Khan, Communes/Sangkat, Villages, and major landmark zones across Cambodia.
* ⌨️ **Form Input Auto-Formatting:** Rebinds input events (`blur`, `change`, `keypress`) to clean up address entries dynamically.
* 📄 **Static Text View Support:** Effortlessly formats non-input elements (`<div>`, `<span>`, `<p>`, `<td>`) rendered from server-side templates (CodeIgniter, Laravel, WordPress).
* ⚡ **Performance Optimized:** Uses sorted Regex boundary matching to prevent nested string collisions.

---

## Installation

### Via npm
```bash
npm install jquery-khmer-address-formatter
```

### Via CDN (jsDelivr / unpkg)
```html
<!-- jsDelivr -->
<script src="[https://cdn.jsdelivr.net/npm/jquery-khmer-address-formatter@1.0.0/dist/jquery.khmer-address-formatter.min.js](https://cdn.jsdelivr.net/npm/jquery-khmer-address-formatter@1.0.0/dist/jquery.khmer-address-formatter.min.js)"></script>

<!-- unpkg -->
<script src="[https://unpkg.com/jquery-khmer-address-formatter@1.0.0/dist/jquery.khmer-address-formatter.min.js](https://unpkg.com/jquery-khmer-address-formatter@1.0.0/dist/jquery.khmer-address-formatter.min.js)"></script>
```

## Quick Start

```html
<input type="text" id="address" placeholder="ភូមិ6សង្កាត់4អូរត្រេះព្រះសីហនុ">

<script src="[https://code.jquery.com/jquery-3.6.0.min.js](https://code.jquery.com/jquery-3.6.0.min.js)"></script>
<script src="path/to/jquery.khmer-address-formatter.min.js"></script>
<script>
  $(document).ready(function() {
    $('#address').khmerAddressFormatter({
      spacing: 2,
      convertNumbers: true
    });
  });
</script>
```

## Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `event` | `string` | `'blur'` | Event that triggers formatting (`'blur'`, `'change'`). |
| `spacing` | `number` | `2` | Number of spaces to insert between divisions. |
| `convertNumbers` | `boolean` | `true` | Automatically converts Western digits (`0-9`) to Khmer digits (`០-៩`). |
| `onFormat` | `function` | `null` | Callback triggered after formatting (`function(formattedValue)`). |

## Utility Usage

You can also format address strings directly without binding to an input element:

```javascript
const result = $.formatKhmerAddress('ភូមិ1ឃុំបិតត្រាំងស្រុកព្រៃនប់', 2, true);
// Output: "ភូមិ ១  ឃុំ  បិតត្រាំង  ស្រុក  ព្រៃនប់"
```

## License
MIT