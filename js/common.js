//
setTimeout(function() {
    var el = document.querySelector('.item1');
    el.style.width = '85%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item2');
    el.style.width = '85%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item3');
    el.style.width = '45%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item4');
    el.style.width = '60%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item5');
    el.style.width = '75%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item6');
    el.style.width = '65%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item7');
    el.style.width = '90%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item8');
    el.style.width = '85%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item9');
    el.style.width = '70%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item10');
    el.style.width = '80%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item11');
    el.style.width = '32%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item12');
    el.style.width = '60%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item13');
    el.style.width = '75%';
}, 1000);
//end skills

//scroll nav
$('[data-spy="scroll"]').each(function() {
    var $spy = $(this).scrollspy('refresh')
});
//end scroll nav
//scrolly title
$('.title').scroolly([{
    from: 'el-top = vp-bottom - 50px',
    to: 'el-bottom = vp-bottom - 70px',
    cssFrom: { opacity: '0.5' },
    cssTo: { opacity: '1' }
}, {
    from: 'el-top = vp-top + 50px',
    to: 'el-bottom = vp-top + 70px',
    cssFrom: { opacity: '1' },
    cssTo: { opacity: '0.5' }
}]);
//scrolly header
$('.header').scroolly([{

    to: 'el-bottom = vp-top',
    cssFrom: {

    },
    cssTo: {

    },
    onScroll: function(element, offset, length) {
        var progress = offset / length;

        element.css('background-position', 'center ' + $.scroolly.getTransitionFloatValue(0, 40, progress) + '%');
    }
}, {
    from: 'el-center = vp-top',
    to: 'el-bottom = vp-top',
    cssFrom: {

    },
    cssTo: {

    }
}]);
$('.wrap-header-info').scroolly([{
    from: 'con-top',
    to: 'con-bottom = top',
    cssFrom: {
        'text-shadow': '0 0 0px white',
        //'bottom': '100px',
        'transform': 'translateY(0px)',
        'opacity': '1'
    },

    cssTo: {
        'text-shadow': '0 0 30px white',
        // 'bottom': '10px',
        'transform': 'translateY(65px)',
        'opacity': '.1'
    }
}], $('.header'));
//effect title
$('.title').scroolly([{
    from: 'con-top = con-top + 100px',
    to: 'con-bottom = top',
    cssFrom: { 'margin-left': '0px' },
    cssTo: { 'margin-left': '20px' }
}, {
    from: 'con-top = con-bottom + 150px',
    to: 'con-bottom = bottom',
    cssFrom: { 'margin-left': '-30px' },
    cssTo: { 'margin-left': '0px' }

}]);
//parallax bg
(function() {

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;

    window.onscroll = function() {
        [].slice.call(parallax).forEach(function(el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "0%" + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

})();
//nav
(function() {
    [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
            setCurrent = function(ev) {
                ev.preventDefault();

                var item = ev.target.parentNode; // li

                // return if already current
                if (classie.has(item, 'active')) {
                    return false;
                }
                // remove current
                classie.remove(menu.querySelector('.active'), 'active');
                // set current
                classie.add(item, 'active');
            };

        [].slice.call(menuItems).forEach(function(el) {
            el.addEventListener('click', setCurrent);
        });
    });

    [].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
        link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
        new Clipboard(link);
        link.addEventListener('click', function() {
            classie.add(link, 'link-copy--animate');
            setTimeout(function() {
                classie.remove(link, 'link-copy--animate');
            }, 300);
        });
    });
})(window);
//scroll
$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 800);
    });
});
//tour site
jQuery(document).ready(function($) {
    //check if a .cd-tour-wrapper exists in the DOM - if yes, initialize it
    $('.cd-tour-wrapper').exists() && initTour();

    function initTour() {
        var tourWrapper = $('.cd-tour-wrapper'),
            tourSteps = tourWrapper.children('li'),
            stepsNumber = tourSteps.length,
            coverLayer = $('.cd-cover-layer'),
            tourStepInfo = $('.cd-more-info'),
            tourTrigger = $('#cd-tour-trigger');

        //create the navigation for each step of the tour
        createNavigation(tourSteps, stepsNumber);

        tourTrigger.on('click', function() {
            //start tour
            if (!tourWrapper.hasClass('active')) {
                //in that case, the tour has not been started yet
                tourWrapper.addClass('active');
                showStep(tourSteps.eq(0), coverLayer);
            }
        });

        //change visible step
        tourStepInfo.on('click', '.cd-prev', function(event) {
            //go to prev step - if available
            (!$(event.target).hasClass('inactive')) && changeStep(tourSteps, coverLayer, 'prev');
        });
        tourStepInfo.on('click', '.cd-next', function(event) {
            //go to next step - if available
            (!$(event.target).hasClass('inactive')) && changeStep(tourSteps, coverLayer, 'next');
        });

        //close tour
        tourStepInfo.on('click', '.cd-close', function(event) {
            closeTour(tourSteps, tourWrapper, coverLayer);
        });

        //detect swipe event on mobile - change visible step
        tourStepInfo.on('swiperight', function(event) {
            //go to prev step - if available
            if (!$(this).find('.cd-prev').hasClass('inactive') && viewportSize() == 'mobile') changeStep(tourSteps, coverLayer, 'prev');
        });
        tourStepInfo.on('swipeleft', function(event) {
            //go to next step - if available
            if (!$(this).find('.cd-next').hasClass('inactive') && viewportSize() == 'mobile') changeStep(tourSteps, coverLayer, 'next');
        });

        //keyboard navigation
        $(document).keyup(function(event) {
            if (event.which == '37' && !tourSteps.filter('.is-selected').find('.cd-prev').hasClass('inactive')) {
                changeStep(tourSteps, coverLayer, 'prev');
            } else if (event.which == '39' && !tourSteps.filter('.is-selected').find('.cd-next').hasClass('inactive')) {
                changeStep(tourSteps, coverLayer, 'next');
            } else if (event.which == '27') {
                closeTour(tourSteps, tourWrapper, coverLayer);
            }
        });
    }

    function createNavigation(steps, n) {
        var tourNavigationHtml = '<div class="cd-nav"><span><b class="cd-actual-step">1</b> из ' + n + '</span><ul class="cd-tour-nav"><li><a href="#0" class="cd-prev">&#171; Назад</a></li><li><a href="#0" class="cd-next">Вперед &#187;</a></li></ul></div><a href="#0" class="cd-close">Закрыть</a>';

        steps.each(function(index) {
            var step = $(this),
                stepNumber = index + 1,
                nextClass = (stepNumber < n) ? '' : 'inactive',
                prevClass = (stepNumber == 1) ? 'inactive' : '';
            var nav = $(tourNavigationHtml).find('.cd-next').addClass(nextClass).end().find('.cd-prev').addClass(prevClass).end().find('.cd-actual-step').html(stepNumber).end().appendTo(step.children('.cd-more-info'));
        });
    }

    function showStep(step, layer) {
        step.addClass('is-selected').removeClass('move-left');
        smoothScroll(step.children('.cd-more-info'));
        showLayer(layer);
    }

    function smoothScroll(element) {
        (element.offset().top < $(window).scrollTop()) && $('body,html').animate({ 'scrollTop': element.offset().top }, 100);
        (element.offset().top + element.height() > $(window).scrollTop() + $(window).height()) && $('body,html').animate({ 'scrollTop': element.offset().top + element.height() - $(window).height() }, 100);
    }

    function showLayer(layer) {
        layer.addClass('is-visible').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            layer.removeClass('is-visible');
        });
    }

    function changeStep(steps, layer, bool) {
        var visibleStep = steps.filter('.is-selected'),
            delay = (viewportSize() == 'desktop') ? 300 : 0;
        visibleStep.removeClass('is-selected');

        (bool == 'next') && visibleStep.addClass('move-left');

        setTimeout(function() {
            (bool == 'next') ? showStep(visibleStep.next(), layer): showStep(visibleStep.prev(), layer);
        }, delay);
    }

    function closeTour(steps, wrapper, layer) {
        steps.removeClass('is-selected move-left');
        wrapper.removeClass('active');
        layer.removeClass('is-visible');
    }

    function viewportSize() {
        /* retrieve the content value of .cd-main::before to check the actua mq */
        return window.getComputedStyle(document.querySelector('.cd-tour-wrapper'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    }
});

//check if an element exists in the DOM
jQuery.fn.exists = function() {
        return this.length > 0;
    }
    // копирование имейл
var copyEmailBtn = document.querySelector('.js-emailcopybtn');
copyEmailBtn.addEventListener('click', function(event) {
    // Выборка ссылки с электронной почтой
    var emailLink = document.querySelector('.js-emaillink');
    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
        // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    // Снятие выделения
    window.getSelection().removeAllRanges();
});
//copy button animation
var buttons7Click = Array.prototype.slice.call(document.querySelectorAll('#btn-click button')),
    buttons9Click = Array.prototype.slice.call(document.querySelectorAll('button.btn-8g')),
    totalButtons7Click = buttons7Click.length,
    totalButtons9Click = buttons9Click.length;

buttons7Click.forEach(function(el, i) {
    el.addEventListener('click', activate, false);
});
buttons9Click.forEach(function(el, i) {
    el.addEventListener('click', activate, false);
});

function activate() {
    var self = this,
        activatedClass = 'btn-activated';

    if (classie.has(this, 'btn-7h')) {
        // if it is the first of the two btn-7h then activatedClass = 'btn-error';
        // if it is the second then activatedClass = 'btn-success'
        activatedClass = buttons7Click.indexOf(this) === totalButtons7Click - 2 ? 'btn-error' : 'btn-success';
    } else if (classie.has(this, 'btn-8g')) {
        // if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
        // if it is the second then activatedClass = 'btn-error3d'
        activatedClass = buttons9Click.indexOf(this) === totalButtons9Click - 2 ? 'btn-success3d' : 'btn-error3d';
    }

    if (!classie.has(this, activatedClass)) {
        classie.add(this, activatedClass);
        setTimeout(function() {
            classie.remove(self, activatedClass)
        }, 1000);
    }
}

document.querySelector('.btn-7i').addEventListener('click', function() {
    classie.add(document.querySelector('#trash-effect'), 'trash-effect-active');
}, false);
