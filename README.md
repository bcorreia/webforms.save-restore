# webforms.save-restore
![Bower version](https://img.shields.io/bower/v/webforms.save-restore.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/webforms.save-restore.svg?style=flat)](https://www.npmjs.com/package/webforms.save-restore)
[![Build Status](https://travis-ci.org/bcorreia/webforms.save-restore.svg?branch=master)](https://travis-ci.org/bcorreia/webforms.save-restore)

---
Save and Restore form values using HTML5 localStorage.<br />
[**Demo**](http://bcorreia.com/projects/webforms.save-restore/src/)

> Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
> Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
> Local storage is per domain. All pages, from one domain, can store and access the same data.

Additional reading<br />
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

## Getting started
You may install using package managers, or download project [archive](https://github.com/bcorreia/webforms.save-restore/archive/master.zip).
```bash
bower install webforms.save-restore
npm install webforms.save-restore

# webforms.save-restore.min.js (minified version)
```

## Usage
```javascript
$(function() {
    $("form")
    .on("click", ".save", webforms.save)            // save
    .on("click", ".restore", webforms.restore)      // restore
    .on("submit", function(event) {
        event.preventDefault();
        webforms.clean.call(this);                  // clean
       // do something else
    });
});
```

## Browser support
- Chrome
- Firefox
- Safari
- IE 10+

## License
This software is free to use under the <a href="https://github.com/bcorreia/webforms.save-restore/blob/master/license.md">MIT license</a>.
