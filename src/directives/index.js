import Vue from 'vue'

Vue.directive('btn-spinner', {
  bind: (el)=> {
    let bgColor = getComputedStyle(el).backgroundColor;
    let newDiv = document.createElement('div');
    let spinner = el.appendChild(newDiv);
    el.style.position = 'relative';
    spinner.setAttribute('class', 'spinner');
    spinner.innerHTML = "<div class='rect1'></div><div class='rect2'></div><div class='rect3'></div><div class='rect4'></div><div class='rect5'></div>";

    (bgColor === 'rgba(0, 0, 0, 0)') ? (spinner.style.backgroundColor = '#ea7925') : spinner.style.backgroundColor = bgColor;
    el.onclick = function() {
        this.blur();
    }
  },
  update: (el, binding)=> {
    let spinner = el.lastChild;
    if(binding.value) {
      spinner.style.display = 'flex';
      el.setAttribute('disabled', true);
    }
    else {
      spinner.style.display = 'none';
      el.removeAttribute('disabled');
    }
  }
});
