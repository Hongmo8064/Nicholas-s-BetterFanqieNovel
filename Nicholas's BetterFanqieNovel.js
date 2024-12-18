// ==UserScript==
// @name         Nicholas's BetterFanqieNovel
// @name:zh-CN   更好的番茄小说
// @namespace    https://fanqienovel.com
// @version      0.1
// @description  让番茄变得更好
// @author       Nicholas_Hao
// @include      https://fanqienovel.com/*
// @license      AGPL-3.0
// @icon         https://p1-tt.byteimg.com/origin/novel-static/a3621391ca2e537045168afda6722ee9
// ==/UserScript==
(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') { // 右箭头触发下一页按钮
            var button = document.querySelector('.next'); 
            if (button) {
                button.click();
            }
        }
        if (event.key === 'ArrowLeft') { // 左箭头触发上一页按钮
            var button = document.querySelector('.last'); 
            if (button) {
                button.click();
            }
        }
    });
})();