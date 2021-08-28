/* 전체 영역을 건드리지 않게 하기위한 모듈화 */
(function (window, document) {
    'use strict'; /* 이곳 범위에 작성하는 문법은 내가 엄격한 자바스크립트를 사용하겠다 명시  */

    const $toggles = document.querySelectorAll('.toggle'); // NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    /* resize가 실행될때 어떤 함수를 사용하겠다 */
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        /* toggles개수가 유동적으로 변경되는 것을 우려하여 갯수에 상관없이 사용하기위해 반복 */
        /* 반복의 개념 */
        [].forEach.call($toggles, function (toggle) {
            /* classList -> class를 제어해 주는 속성 */
            toggle.classList.toggle('on');
        });
    }
    
    function offElements(){
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }


})(window, document);