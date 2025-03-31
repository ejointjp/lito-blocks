document.addEventListener('DOMContentLoaded', function () {
  const $menuBtn = document.querySelector('.nav-btn');

  // メニュー開いたらクラス名をつける
  if ($menuBtn) {
    $menuBtn.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  }
});
