// ==UserScript==
// @name         Messenger like Matrix and Skype external URLs
// @namespace    http://dluciv.name/
// @version      0.0.2
// @description  Intercept all external links to be handled by just-open scheme
// @author       Dmitry V. Luciv
// @match        http*://vector.im/beta/*
// @match        https://web.skype.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function url_domain(data) {
        var a = document.createElement('a');
        a.href = data;
        return a.hostname;
    }

    var updateLink = function(a) {
        if(a.target == '_blank' && a.href.indexOf("just-open:") !== 0 && url_domain(a.href) != url_domain(window.location.href)) {
            // unvisited external link
            a.setAttribute("onclick", function(evt){
                evt.preventDefault();
                evt.stopPropagation();
            });
            a.setAttribute("target", "_self");
            a.setAttribute("href", "just-open:" + a.href);
        }
    };

    window.onmouseover = function(evt) {
        if(evt.target.localName == "a")
            updateLink(evt.target);
    };
})();
