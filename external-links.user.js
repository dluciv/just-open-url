// ==UserScript==
// @name         Messenger like Matrix and Skype external URLs
// @namespace    http://dluciv.name/
// @version      0.0.1
// @description  Intercept all external links to be handled by just-open scheme
// @author       Dmitry V. Luciv
// @match        http*://vector.im/beta/*
// @match        https://web.skype.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.onclick = function(evt) {
        if(evt.path && evt.path[0].localName == 'a' && evt.path[0].target == '_blank') {
            var hr = evt.path[0].href;
            if(hr) {
                evt.preventDefault();
                window.location.assign("just-open:" + hr);
            }
        }
    };
})();
