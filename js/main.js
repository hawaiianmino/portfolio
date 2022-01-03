document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch,false);
  }

  function tabSwitch() {
    console.log(this);
    document.querySelector('.is-active').classList.remove('is-active');
    this.classList.add('is-active');
    document.querySelector('.is-show').classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.querySelectorAll('.tab-cnt')[index].classList.add('is-show');
  }

  const els = document.querySelectorAll('.js_delay');
  const cb = function(entries,observer) {
    entries.forEach((entry,i) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('inview');
        observer.unobserve(entry.target);
      }
    });
  }
  const options = {
    rootMargin: "0px 0px",
  }
  const io = new IntersectionObserver(cb, options);
  els.forEach(el => io.observe(el))

});


$(function () {
  //アコーディオン
  $(".works-main-ttl").on("click", function () {
    $(this).next('div').slideToggle();
    $(this).toggleClass("open");
  });
  // ページスクロール
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var header = $("header").height();
    var position = target.offset().top - header;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    setTimeout(() => {
      $("#drawer-check").prop("checked", false);
    }, 1000);
    return false;
  });
});