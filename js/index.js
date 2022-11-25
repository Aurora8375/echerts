// 故障监控切换
var choseTab = document.getElementsByClassName('choseTab');
var showTab = document.getElementsByClassName('showTab');
(function () {
    for (var i = 0; i < choseTab.length; i++) {
        choseTab[i].setAttribute('index_', i)
        choseTab[i].onclick = function () {
            var num = this.getAttribute('index_')
            for (var j = 0; j < choseTab.length; j++) {
                choseTab[j].classList.remove('active')
                showTab[j].style.display = 'none'
            }
            showTab[num].style.display = 'block'
            choseTab[num].classList.add('active')
        }
    }
})();

