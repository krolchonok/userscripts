// ==UserScript==
// @name           Download Images Button
// @description    Adds a download button to the page that allows downloading all images on the site
// @namespace      Ushastoe
// @version 1.0
// @match        http://*/*
// @match        https://*/*
// @grant          none
// ==/UserScript==

(function() {
    'use strict';

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    document.head.appendChild(link);

    var button = document.createElement('button');
    button.id = "download";
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '9999';
    button.className = "fa fa-download";
    button.style.height = "40px";
    button.style.width = "40px";
    button.style.background = "#141314";
    button.style.border = "0";
    button.style.borderRadius = "9999px";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.addEventListener('click', function() {
        var images = document.querySelectorAll('img');
        var link = document.createElement('a');

        Array.from(images).forEach(function(image, index) {
            fetch(image.src)
                .then(function(response) { return response.blob(); })
                .then(function(blob) {
                    link.href = URL.createObjectURL(blob);
                    link.download = 'image_' + (index + 1);
                    link.click();
                });
        });
    });
    document.body.appendChild(button);
})();
