// ==UserScript==
// @name         Messenger like Matrix and Skype external URLs
// @namespace    http://dluciv.name/
// @version      0.0.3
// @description  Intercept all external links to be handled by just-open scheme
// @author       Dmitry V. Luciv
// @match        http*://vector.im/beta/*
// @match        http*://vector.im/develop/*
// @match        https://web.skype.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.onclick = function(evt) {
        if(evt.path && evt.target.localName == 'a' && evt.target.target == '_blank') {
            var hr = evt.target.href;
            if(hr) {
                window.location.assign("just-open:" + hr);
                return false;
            }
        }
    };
})();
