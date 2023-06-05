document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}

$(document).ready(function () {

    // меню бургер
    $('.burger').click(function () {
        $('.menu').addClass('open');
        $('.close').show().css('transform', 'rotate(-90deg)');
    });

    $('.menu *').click(function () {
        $('.menu').removeClass('open');
        $('.close').css('transform', 'rotate(0deg)').hide();
    });

    $(".menu__item").on("click", function() {
        // удаляем класс "active" у предыдущего элемента
        $(".menu__item.active").removeClass("active");
        // добавляем класс "active" к текущему элементу
        $(this).addClass("active");
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 700) {
            $('.scroll-to-top').fadeIn().css('display','flex');
        } else {
            $('.scroll-to-top').fadeOut().css('display','none');
        }
    });

    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


// инициализация анимации
    new WOW({
        animateClass: 'animate__animated',
    }).init();
// прогресс бар

    $('.progress-anim-1, .progress-anim-2, .progress-anim-3, .progress-anim-4, .progress-anim-5, .progress-anim-6, .progress-anim-7, .progress-anim-8, .progress-anim-9').each(function () {
        let $progressBar = $(this).find('.progress-bar');
        let progressValue = $(this).attr('aria-valuenow');

        // задаем начальную ширину прогресс-бара равную 0%
        $progressBar.width(0);

        // запускаем анимацию прогресс-бара
        $progressBar.animate({
            width: progressValue + '%'
        }, {
            duration: 2000, // время анимации в миллисекундах
            easing: 'linear', // тип анимации
            step: function (now, fx) {
                // обновляем текст прогресса внутри .count-text
                $(this).closest('.skill__item').find('.count-text').text(Math.round(now));
            }
        });
    });

    // смена css стиля

    $(".button.mode").on('click', function () {
        let styleLinkMain = $("#main-theme");
        let hrefMain = styleLinkMain.attr("href");

        let styleLinkPortfolio = $("#portfolio-theme");
        let hrefPortfolio = styleLinkPortfolio.attr("href");

        let styleLinkSelectedEng = $("#selectedEng-theme");
        let hrefSelectedEng = styleLinkSelectedEng.attr("href");

        let styleLinkSelectedPortfolio = $("#selectedPortfolio-theme");
        let hrefSelectedPortfolio = styleLinkSelectedPortfolio.attr("href");

        if (hrefMain === "css/light-theme.min.css") {
            styleLinkMain.attr("href", "css/dark-theme.min.css");
            $("#mode-dark").hide();
            $("#mode-light").show();

        } else if (hrefMain === "css/dark-theme.min.css") {
            styleLinkMain.attr("href", "css/light-theme.min.css");
            $("#mode-light").hide();
            $("#mode-dark").show();
        }
        else if (hrefSelectedEng === "../css/dark-theme.min.css") {
            styleLinkSelectedEng.attr("href", "../css/light-theme.min.css");
            $("#mode-light").hide();
            $("#mode-dark").show();
        }
        else if (hrefSelectedEng === "../css/light-theme.min.css") {
            styleLinkSelectedEng.attr("href", "../css/dark-theme.min.css");
            $("#mode-light").show();
            $("#mode-dark").hide();
        }
        else if (hrefSelectedPortfolio === "../css/dark-theme.min.css") {
            styleLinkSelectedPortfolio.attr("href", "../css/light-theme.min.css");
            styleLinkPortfolio.attr("href", "css/light-theme.min.css");
            $("#mode-light").hide();
            $("#mode-dark").show();
        }
        else if (hrefSelectedPortfolio === "../css/light-theme.min.css") {
            styleLinkSelectedPortfolio.attr("href", "../css/dark-theme.min.css");
            styleLinkPortfolio.attr("href", "css/dark-theme.min.css");
            $("#mode-light").show();
            $("#mode-dark").hide();
        }

        localStorage.setItem('selectedMainTheme', styleLinkMain.attr("href"));
        localStorage.setItem('selectedEngTheme', styleLinkSelectedEng.attr("href"));
        localStorage.setItem('selectedPortfolioTheme', styleLinkSelectedPortfolio.attr("href"));

    });
    let selectedMainTheme = localStorage.getItem('selectedMainTheme');

    $(function() {

        if (selectedMainTheme) {
            $("#main-theme").attr("href", selectedMainTheme);
            if (selectedMainTheme === "css/dark-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/dark-theme.min.css");
                $('#main-theme').attr("href","css/dark-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/dark-theme.min.css");
                $('#portfolio-theme').attr("href","css/dark-theme.min.css");
            } else if (selectedMainTheme === "css/light-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/light-theme.min.css");
                $('#main-theme').attr("href","css/light-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/light-theme.min.css");
                $('#portfolio-theme').attr("href","css/light-theme.min.css");
            }
        }
    });

    $(function() {
        let selectedEngTheme = localStorage.getItem('selectedEngTheme');
        if (selectedEngTheme) {
            $("#main-theme").attr("href", selectedMainTheme);
            if (selectedEngTheme === "../css/dark-theme.min.css") {
                $('#main-theme').attr("href","css/dark-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/dark-theme.min.css");
                $('#selectedEng-theme').attr("href","../css/dark-theme.min.css");
                $('#portfolio-theme').attr("href","css/dark-theme.min.css");
            } else if (selectedEngTheme === "../css/light-theme.min.css") {
                $('#main-theme').attr("href","css/light-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/light-theme.min.css");
                $('#selectedEng-theme').attr("href","../css/light-theme.min.css");
                $('#portfolio-theme').attr("href","css/light-theme.min.css");
            }
        }
    });

    $(function() {
        let selectedPortfolioTheme = localStorage.getItem('selectedPortfolioTheme');
        if (selectedPortfolioTheme) {
            $("#main-theme").attr("href", selectedMainTheme);
            if (selectedPortfolioTheme === "../css/dark-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/dark-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/dark-theme.min.css");
                $('#main-theme').attr("href","css/dark-theme.min.css");
                $('#portfolio-theme').attr("href","css/dark-theme.min.css");
            } else if (selectedPortfolioTheme === "../css/light-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/light-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/light-theme.min.css");
                $('#main-theme').attr("href","css/light-theme.min.css");
                $('#portfolio-theme').attr("href","css/light-theme.min.css");
            }
        }
    });


    /*$(".button.mode").on('click', function () {
        let styleLinkMain = $("#main-theme");
        let hrefMain = styleLinkMain.attr("href");

        let styleLinkPortfolio = $("#portfolio-theme");
        let hrefPortfolio = styleLinkPortfolio.attr("href");

        let styleLinkSelectedEng = $("#selectedEng-theme");
        let hrefSelectedEng = styleLinkSelectedEng.attr("href");

        let styleLinkSelectedPortfolio = $("#selectedPortfolio-theme");
        let hrefSelectedPortfolio = styleLinkSelectedPortfolio.attr("href");

        if (hrefMain === "css/light-theme.min.css") {
            styleLinkMain.attr("href", "css/dark-theme.min.css");
            // styleLinkSelectedPortfolio.attr("href", "../css/dark-theme.min.css");
            // styleLinkPortfolio.attr("href", "css/dark-theme.min.css");
            $("#mode-dark").hide();
            $("#mode-light").show();

        } else if (hrefMain === "css/dark-theme.min.css") {
            styleLinkMain.attr("href", "css/light-theme.min.css");
            // styleLinkSelectedPortfolio.attr("href", "../css/light-theme.min.css");
            // styleLinkPortfolio.attr("href", "css/light-theme.min.css");
            $("#mode-light").hide();
            $("#mode-dark").show();
        }
        else if (hrefSelectedEng === "../css/light-theme.min.css") {
            styleLinkSelectedEng.attr("href", "../css/dark-theme.min.css");
            // styleLinkSelectedPortfolio.attr("href", "../css/dark-theme.min.css");
            // styleLinkPortfolio.attr("href", "css/dark-theme.min.css");
            $("#mode-light").show();
            $("#mode-dark").hide();
        }
        else if (hrefSelectedEng === "../css/dark-theme.min.css") {
            styleLinkSelectedEng.attr("href", "../css/light-theme.min.css");
            // styleLinkSelectedPortfolio.attr("href", "../css/light-theme.min.css");
            // styleLinkPortfolio.attr("href", "css/light-theme.min.css");
            $("#mode-light").hide();
            $("#mode-dark").show();
        }
        else if (hrefSelectedPortfolio === "../css/light-theme.min.css") {
            styleLinkSelectedPortfolio.attr("href", "../css/dark-theme.min.css");
            styleLinkPortfolio.attr("href", "css/dark-theme.min.css");
            $("#mode-light").show();
            $("#mode-dark").hide();
        }

        else if (hrefSelectedPortfolio === "../css/dark-theme.min.css") {
            styleLinkSelectedPortfolio.attr("href", "../css/light-theme.min.css");
            styleLinkPortfolio.attr("href", "css/light-theme.min.css");
            $("#mode-light").hide();
            $("#mode-dark").show();
        }


        localStorage.setItem('selectedMainTheme', styleLinkMain.attr("href"));
        localStorage.setItem('selectedEngTheme', styleLinkSelectedEng.attr("href"));
        localStorage.setItem('selectedPortfolioTheme', styleLinkSelectedPortfolio.attr("href"));
        // localStorage.setItem('portfolioTheme', styleLinkPortfolio.attr("href"));

    });

    $(function() {
        let selectedMainTheme = localStorage.getItem('selectedMainTheme');
        if (selectedMainTheme) {
            $("#main-theme").attr("href", selectedMainTheme);
            if (selectedMainTheme === "css/dark-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/dark-theme.min.css");
                // $('#main-theme').attr("href","css/dark-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/dark-theme.min.css");
                $('#portfolio-theme').attr("href","css/dark-theme.min.css");
            } else if (selectedMainTheme === "css/light-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/light-theme.min.css");
                // $('#main-theme').attr("href","css/light-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/light-theme.min.css");
                $('#portfolio-theme').attr("href","css/light-theme.min.css");
            }
        }
    });

    $(function() {
        let selectedEngTheme = localStorage.getItem('selectedEngTheme');
        if (selectedEngTheme) {
            $("#selectedEng-theme").attr("href", selectedEngTheme);
            if (selectedEngTheme === "../css/dark-theme.min.css") {
                $('#main-theme').attr("href","css/dark-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/dark-theme.min.css");
                // $('#selectedEng-theme').attr("href","../css/dark-theme.min.css");
                $('#portfolio-theme').attr("href","css/dark-theme.min.css");
            } else if (selectedEngTheme === "../css/light-theme.min.css") {
                $('#main-theme').attr("href","css/light-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/light-theme.min.css");
                // $('#selectedEng-theme').attr("href","../css/light-theme.min.css");
                $('#portfolio-theme').attr("href","css/light-theme.min.css");
            }
        }
    });

    $(function() {
        let selectedPortfolioTheme = localStorage.getItem('selectedPortfolioTheme');
        if (selectedPortfolioTheme) {
            $("#selectedPortfolio-theme").attr("href", selectedPortfolioTheme);
            if (selectedPortfolioTheme === "../css/dark-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/dark-theme.min.css");
                // $('#selectedPortfolio-theme').attr("href","../css/dark-theme.min.css");
                $('#portfolio-theme').attr("href","css/dark-theme.min.css");
                $('#main-theme').attr("href","css/dark-theme.min.css");
            } else if (selectedPortfolioTheme === "../css/light-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/light-theme.min.css");
                // $('#selectedPortfolio-theme').attr("href","../css/light-theme.min.css");
                $('#main-theme').attr("href","css/light-theme.min.css");
                $('#portfolio-theme').attr("href","css/light-theme.min.css");
            }
        }
    });*/

    /*$(function() {
        let portfolioTheme = localStorage.getItem('portfolioTheme');
        if (portfolioTheme) {
            $("#portfolio-theme").attr("href", portfolioTheme);
            if (portfolioTheme === "../css/dark-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/dark-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/dark-theme.min.css");
                // $('#portfolio-theme').attr("href","css/dark-theme.min.css");
                $('#main-theme').attr("href","css/dark-theme.min.css");
            } else if (portfolioTheme === "../css/light-theme.min.css") {
                $('#selectedEng-theme').attr("href","../css/light-theme.min.css");
                $('#selectedPortfolio-theme').attr("href","../css/light-theme.min.css");
                // $('#main-theme').attr("href","css/light-theme.min.css");
                $('#portfolio-theme').attr("href","css/light-theme.min.css");
            }
        }
    });*/


    // информация о проектах по нажатию на знак i
    let $portfolioImage = $('.portfolio__item-image img, .portfolio__item-image .info-icon');
    $portfolioImage.on('click', function () {
        $('body').addClass('noscroll');
        $(this).parent().parent().find('.portfolio__item-info').show().css('display', 'flex');
        $('.burger').css('opacity', '0');
    });

    // скрытие информации по нажатию на крестик
    $('.cancel').on('click', function () {
        $('body').removeClass('noscroll');
        $(this).parent().parent().parent().parent().parent().hide().css('display', 'none');
        $('.burger').css('opacity', '1');
    })
});
