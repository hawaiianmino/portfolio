document.addEventListener('DOMContentLoaded', function() {
  //タブ切り替えアニメーション
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

  //フワッと表示アニメーション
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
  
  $('#form').submit(function(e) {

    var formData = $('#form').serialize();
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScSt0mnysdtRtjM1pnLXLN7UxUluLkgICPUKEB5IHB_t6OE2Q/formResponse',
      data: formData,
      type: 'POST',
      dataType: "xml",
      statusCode: {
        0: function() {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          // window.location.href = ("thanks.html");
        },
        200: function() {
          $(".false-message").slideDown();
        }
      }
    });
    e.preventDefault();
  });

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