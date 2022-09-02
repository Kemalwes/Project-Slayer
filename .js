// ==UserScript==
// @name          	ㅤ
// @description     ㅤ
// @author			You
// @match           https://*.roblox.com/*
// @version         1.0
// @icon            https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/512px-Roblox_player_icon_black.svg.png
// ==/UserScript==
function e2(x) {
    return x.toString()
}
(function() {
    'use strict';
    //
    var a1 = true // Robux Sayacını Ayarlar
    var o3 = 25000000 //Robuxsu buraya yaz
    //
    if (a1 == true) {
        var o4 = "nil";
        var o5 = o3.toString();
        switch (o5.length) {
            case 0:
                console.log("Error, robux set to nothing");
                break;
            case 1:
            case 2:
            case 3:
                o4 = o5;
                break;
            case 4:
                o4 = o5.substring(0,1) + "K+";
                break;
            case 5:
                o4 = o5.substring(0,2) + "K+";
                break;
            case 6:
                o4 = o5.substring(0,3) + "K+";
                break;
            case 7:
                o4 = o5.substring(0,1) + "M+";
                break;
            case 8:
                o4 = o5.substring(0,2) + "M+";
                break;
            default:
                console.log("Error, robux set to more than 100 million");
        }
        var o7 = e2(o5) + " Robux";
        var e1 = setInterval(function() {
            var robuxt = document.getElementById("nav-robux-amount");
            if (robuxt !== null && robuxt.innerHTML !== o4) {
                robuxt.innerHTML = o4;
                // clearInterval(e1);
            }
        }, 0);
        var e3 = setInterval(function() {
            var robuxt1 = document.getElementById("nav-robux-balance");
            if (robuxt1 !== null && robuxt1 !== o7) {
                robuxt1.innerHTML = o7;
            }
        }, 0);
        if (window.location.href.indexOf("/transactions") !== -1) {
            var h3 = setInterval(function() {
                if (document.body.getElementsByClassName("balance-label icon-robux-container")) {
                    var h1 = document.body.getElementsByClassName("balance-label icon-robux-container")[0];
                    h1.children[0].innerHTML = "My Balance: <span class=\"icon-robux-16x16\"></span>" + e2(o5);
                }
            }, 0);
        }
    }

})();
