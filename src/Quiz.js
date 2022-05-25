//import * as _ from 'assets/js/index.min.js?rev=@@hash'


const Quiz = () => {
	/**<script src="assets/js/viewport.js"></script>
    $('#popup6 .close, #popup7 .close').on('click', function () {
        $('#popup6, #popup7, ._floating_present, #popup8').remove();
    })

    document.addEventListener("mouseout", onMouseOut);


    $(document).ready(function () {
        $("#quiz").submit(function () {
            $.ajax({
                type: "POST",
                url: '/send',
                data: $(this).serialize()
            }).done(function () {
                popup(1);
                ym(85318552, 'reachGoal', 'quiz');
                if ($('[name="datePlace"]').length > 0) {
                    dataLayer.push({
                        'event': 'Order_engineer',
                        'eventAction': 'send'
                    });
                }
            });
            return false;
        });

        $("#popup4 form").submit(function () {
            $.ajax({
                type: "POST",
                url: ' /send',
                data: $(this).serialize()
            }).done(function () {
                popup(1);
                dataLayer.push({
                    'event': 'Order_engineer',
                    'eventAction': 'send'
                });
            });
            return false;
        });

        $("#popup7 form").submit(function () {
            $.ajax({
                type: "POST",
                url: ' /send',
                data: $(this).serialize()
            }).done(function () {
                if ($('#popup8'.length > 0)) {
                    popup(8);
                    $('#popup6, #popup7, ._floating_present').remove();
                }
                $('#popup7 .submit').attr('disabled', 'disabled');
                $('._floating_present').remove();
            });
            return false;
        });

        $("#popup_form").submit(function () {
            $.ajax({
                type: "POST",
                url: ' /send',
                data: $(this).serialize()
            }).done(function () {
                popup(3);
                ym(85318552, 'reachGoal', 'exit');
                dataLayer.push({
                    'event': 'Download',
                    'eventAction': 'send'
                });
            });
            return false;
        });

        $(".white_form form").submit(function () {
            $.ajax({
                type: "POST",
                url: ' /send',
                data: $(this).serialize()
            }).done(function () {
                popup(3);
                ym(85318552, 'reachGoal', 'download');
                dataLayer.push({
                    'event': 'Download',
                    'eventAction': 'send'
                });
            });
            return false;
        });
    });

    $('#submit').on('click', function () {
        $(this).parents('.content').find('.hidden').removeClass('hidden')
        $(this).remove();
    })

    jQuery(function ($) {
        $.mask.definitions['q'] = '[1,2,3,4,5,6,9]';
        $('input[type="tel"]').mask("+7(q99) 999-99-99");
    });

    $('.sertificates').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [{
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    })

    if (document.documentElement.clientWidth > 480) {
        var banner_timer = 0;

        $(window).on('scroll', function () {
            if (!$('body').hasClass('home')) {
                return false;
            }
            var fromTop = $(document).scrollTop();
            var fourth_sect = $('#showBanner').offset().top;

            var time_diff = Date.now() - banner_timer;
            if ((fromTop > fourth_sect) && time_diff > 30e3) {
                $('.banner_wrap').show();
                if ($('.banner_wrap').length > 0) {
                    $('body').addClass('open_banner');
                }
            } else {
                $('.banner_wrap').hide();
                $('body').removeClass('open_banner');
            }
        });
    }

    $('.slideDown').on('click', function () {
        $('.banner_wrap').slideToggle(300);
        $('body').removeClass('open_banner');
        banner_timer = Date.now();
    });
    $('.permanent_close').on('click', function () {
        $('body').removeClass('open_banner');
        $('.banner_wrap').remove();
        console.log('remove class')
    });


    // ПОПАП НА ВЫХОД
    function onMouseOut(event) {
        // If the mouse is near the top of the window, show the popup
        // Also, do NOT trigger when hovering or clicking on selects
        if (
            event.clientY < 50 &&
            event.relatedTarget == null &&
            event.target.nodeName.toLowerCase() !== 'select') {
            // Remove this event listener
            document.removeEventListener("mouseout", onMouseOut);

            // Show the popup
            popup(2)
        }
    }

    var startInterval = true;
    window.onload = function () {
        document.getElementById('popup-bg').onclick = function (e) {
            if (e.target != this) {
                return true;
            }
            popup(-1);
        }
    }

    function popup(nm, e) {
        popupElm = document.getElementById("popup-bg");
        if (nm == -1) {
            popupElm.classList.remove('visible');
            document.querySelector('body').style.overflow = 'auto';
        } else {
            elm = popupElm.getElementsByClassName('popup');
            if (typeof nm != 'undefined')
                for (var i = elm.length - 1; i >= 0; i--) {
                    if (elm[i].id == 'popup' + nm) {

                        if (typeof e !== 'undefined' && nm === 4) {
                            let good_name = $(e).parents('.product_card').find('.product_title').text();
                            $('#popup4 [name="comment"]').val('Подробнее => ' + good_name);
                        }

                        if (nm === 6) {
                            setTimeout(function () {
                                $('._avatars').slick({
                                    infinite: true,
                                    slidesToShow: 4,
                                    autoplay: true,
                                    autoplaySpeed: 1000,
                                })
                            }, 100)
                        }

                        if (nm === 7) {
                            $('#popup7 .countdown').html(`
                            <div className="ko-progress-circle__overlay">
                            <div>
                            <div id="hours"></div> : 
                            <div id="minutes"></div> : 
                            <div id="seconds"></div>
                            </div>
                            </div>
                            <div className="ko-progress-circle" data-progress="0">
                            <div className="ko-circle">
                            <div className="full ko-progress-circle__slice">
                            <div className="ko-progress-circle__fill"></div>
                            </div>
                            <div className="ko-progress-circle__slice">
                            <div className="ko-progress-circle__fill"></div>
                            <div className="ko-progress-circle__fill ko-progress-circle__bar"></div>
                            </div>
                            </div>

                            </div>`);


                            /* ПОДАРКИ *//*
                            window.randomize = function () {
                                $('.ko-progress-circle').attr('data-progress', 100);
                            }
                            setTimeout(window.randomize, 200);
                            $('.ko-progress-circle').click(window.randomize);
                            console.log(interval)
                            //console.log(timer2)
                            if (interval) {
                                clearInterval(interval);
                            }

                            timer2 = "3:00:00";
                            if (startInterval) {
                                var interval = setInterval(function () {
                                    timer = timer2.split(':');
                                    //by parsing integer, I avoid all extra string processing
                                    minutes = parseInt(timer[0], 10);
                                    seconds = parseInt(timer[1], 10);
                                    --seconds;
                                    minutes = (seconds < 0) ? --minutes : minutes;
                                    if (minutes == 0 && seconds == 1) {
                                        popup(-1);
                                        $('#popup6, #popup7, ._floating_present, #popup8').remove();
                                        clearInterval(interval);
                                    }
                                    seconds = (seconds < 0) ? 59 : seconds;
                                    seconds = (seconds < 10) ? '0' + seconds : seconds;
                                    //minutes = (minutes < 10) ?  minutes : minutes;
                                    //$('.countdown').html(minutes + ':' + seconds);
                                    $('#hours').html(minutes)
                                    $('#minutes').html(seconds)
                                    $('#seconds').html('00')
                                    timer2 = minutes + ':' + seconds;
                                }, 1000);
                                startInterval = false;
                            }
                            console.log(interval)

                            /* ПОДАРКИ *//*

                        }



                        elm[i].classList.add('visible');
                        popupElm.classList.add('visible');
                        document.querySelector('body').style.overflow = 'hidden';
                    } else {
                        elm[i].classList.remove('visible');
                    }
                }
            else {
                popupElm.classList.add('visible');
                document.querySelector('body').style.overflow = 'hidden';
            }
        }
    }

    $('.white_form .form_control').on('click', function () {
        $(this).parents('.radios').hide();
        $('.white_form .hidden').show();
    })*/



return (
<main id="main">
<div className="header">
    <p className="header_title">Подберите септик и закрепите скидку 80% на установку</p>
    <div className="progressBar">
        <div className="steps"><span id="current_step">1 </span> из 6</div>
        <div className="bar"></div>
    </div>
    <hr className="hr"/>
</div>


<div className="wrap">
    <form action=" http://192.168.31.192:5000/send" method="post" className="quiz" id="quiz">
        <div className="change_block active" data-step="1">
            <p className="question">
                <span className="img"><img src="assets/img/1.png"/></span>
                <span className="text">
                    <strong>Сколько человек будет проживать и пользоваться <br/> канализацией?</strong>
                    По количеству проживающих определяем суточный объём стоков.
                </span>
            </p>

            <div className="questions_block">
                <div className="col_left">

                    <div className="form_control inline_control">
                        <div className="answer_block makeSort">
                            <input type="radio" name="people_amount" className="people_amount"
                                id="people_amount_1" value="От 1 до 3 человек" data-min="1" data-people="3"/>
                            <label htmlFor="people_amount_1">От 1 до 3 человек</label>
                        </div>

                    </div>


                    <div className="form_control inline_control">
                        <div className="answer_block makeSort">
                            <input type="radio" name="people_amount" className="people_amount"
                                id="people_amount_2" value="4 - 6 человек" data-min="4" data-people="6"/>
                            <label htmlFor="people_amount_2">4 - 6 человек</label>
                        </div>
 
                    </div>


                    <div className="form_control inline_control">
                        <div className="answer_block makeSort">
                            <input type="radio" name="people_amount" className="people_amount"
                                id="people_amount_3" value="7 - 11 человек" data-min="7" data-people="11"/>
                            <label htmlFor="people_amount_3">7 - 11 человек</label>
                        </div>

                    </div>


                    <div className="form_control inline_control">
                        <div className="answer_block makeSort">
                            <input type="radio" name="people_amount" className="people_amount"
                                id="people_amount_4" value="Больше 12 человек" data-min="12"
                                data-people="12"/>
                            <label htmlFor="people_amount_4">Больше 12 человек</label>
                        </div>

                    </div>

                </div>
                <div className="col_center switch_image blue_image">
                    <div className="image_container">
                        <img src="assets/img/step1.png"/>
                        <p>Начните отвечать, чтобы <br/> система начала <br/> подбор септика</p>
                    </div>
                </div>
                <div className="col_right">
                    <div className="present_block">
                        <p>До результата теста <br/> и получения подарка <br/> осталось: <strong>6
                                вопросов</strong></p>
                        <img src="assets/img/present.png"/>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <a href="#x" className="goBack">Назад</a>
                <a onClick="ym(85318552, 'reachGoal', 'step2');" href="#x" className="goNext"
                    disabled="disabled">Следующий шаг {'>'} </a>
            </div>
            <div className="dev">

            </div> 
        </div>
        <div className="change_block nextInQueue" data-step="2">
            <p className="question">
                <span className="img"><img src="assets/img/2.png"/></span>
                <span className="text">
                    <strong>Укажите количество сантехнических точек </strong>
                    Определяем залповый сброс для вашей станции
                </span>
            </p>
            <div className="questions_block">
                <div className="col_left">
                    <div className="column mt15">
                        <p className="label">Ванна, (шт.)</p>
                        <div className="calc_block">
                            <span className="plus">+</span>
                            <span className="minus">-</span>
                            <input type="text" name="vanna" className="filled sizeInput santeh makeSort"
                                data-norma="200"/>
                        </div>

                        <p className="label">Душ, (шт.)</p>
                        <div className="calc_block">
                            <span className="plus">+</span>
                            <span className="minus">-</span>
                            <input type="text" name="dush" className="sizeInput santeh makeSort"
                                data-norma="80"/>
                        </div>


                        <p className="label">Унитаз, (шт.)</p>
                        <div className="calc_block">
                            <span className="plus">+</span>
                            <span className="minus">-</span>
                            <input type="text" name="unitaz" className="sizeInput santeh makeSort"
                                data-norma="20"/>
                        </div>


                        <p className="label">Раковина / мойка (шт.)</p>
                        <div className="calc_block">
                            <span className="plus">+</span>
                            <span className="minus">-</span>
                            <input type="text" name="rakovina" className="sizeInput santeh makeSort"
                                data-norma="30"/>
                        </div>


                        <p className="label">Стиральная / посудомоечная <br/> машина (шт.)</p>
                        <div className="calc_block">
                            <span className="plus">+</span>
                            <span className="minus">-</span>
                            <input type="text" name="stiralka" className="sizeInput santeh makeSort"
                                data-norma="30"/>
                        </div>


                        <div className="form_control inline_control">
                            <div className="answer_block noImg makeSort">
                                <input type="radio" name="sanTeh" id="sanTeh_1" value="Ещё не знаю"/>
                                <label htmlFor="sanTeh_1">Ещё не знаю</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col_center switch_image shadow_img">
                    <div className="image_header">
                        <p className="res">Промежуточный результат:</p>
                        <p className="podhodit">
                            Вам подходит станция BioDeka-3
                            П-600 <strong>и ещё <span>126</span> станций</strong>
                        </p>
                        <p className="continue">Продолжайте отвечать на вопросы!</p>
                    </div>
                    <div className="image_container ">
                        <span className="product_satus_helper"></span>
                        <img src="assets/img/qi.png"/>
                    </div>
                </div>
                <div className="col_right">
                    <div className="present_block">
                        <p>До результата теста <br/> и получения подарка <br/> осталось: <strong>5
                                вопросов</strong></p>
                        <img src="assets/img/present.png"/>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <a href="#x" className="goBack">Назад</a>
                <a href="#x" className="goNext" onClick="ym(85318552, 'reachGoal', 'step3');"
                    disabled="disabled">Следующий шаг {'>'} </a>
            </div>
            <div className="dev">
                
            </div> 
        </div>
        <div className="change_block " data-step="3">
            <p className="question">
                <span className="img three"><img src="assets/img/3_1.png"/></span>
                <span className="text">
                    <strong>Какой уровень грунтовых вод на вашем участке?</strong>
                    Определяем риск выдавливания станции из почвы.
                </span>
            </p>
            <div className="questions_block">
                <div className="col_left">
                    <div className="form_control inline_control">
                        <div className="info_parent">
                            <span className="info_icon">i</span>
                            <div className="inform_block" style="height: 70px !important;">
                                <div className="scroll">
                                    <p>- При низком уровне грунтовых вод, подбирается стандартная станция.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="answer_block noImg startPodbor randomGood">
                            <input className="hideImg" type="radio" name="uroven" id="uroven_1"
                                value="Низкий. Ниже 1,5 метра"/>
                            <label className="hideImg" htmlFor="uroven_1">Низкий. Ниже 1,5 метра</label>
                        </div>
                    </div>
                    <div className="form_control inline_control">
                        <div className="info_parent">
                            <span className="info_icon">i</span>
                            <div className="inform_block" style="height: 185px;">
                                <div className="scroll">
                                    <p>- Для участков с высоким уровнем грунтовых вод идеально подходят
                                        станции с большей площадью якорения.</p>
                                    <p>Расширенная площадь дна удерживает станцию на месте и не даёт
                                        грунтовым водам выдавить станцию из почвы.</p>
                                </div>
                            </div>
                        </div>
                        <div className="answer_block noImg startPodbor randomGood">
                            <input type="radio" name="uroven" id="uroven_2" value="Высокий. Выше 1,5 метра"
                                className="tall"/>
                            <label className="tall" htmlFor="uroven_2">Высокий. Выше 1,5 метра</label>
                        </div>
                    </div>
                    <div className="form_control inline_control">
                        <div className="answer_block noImg">
                            <input className="hideImg" type="radio" name="uroven" id="uroven_3" value="Не знаю"/>
                            <label className="hideImg" htmlFor="uroven_3">Не знаю</label>
                        </div>
                    </div>
                </div>
                <div className="col_center switch_image shadow_img">
                    <div className="image_header">
                        <p className="res">Промежуточный результат:</p>
                        <p className="podhodit">
                            Вам подходит станция BioDeka-3
                            П-600 <strong>и ещё <span>126</span> станций</strong>
                        </p>
                        <p className="continue">Продолжайте отвечать на вопросы!</p>
                    </div>
                    <div className="image_container ">
                        <span className="product_satus_helper"></span>
                        <img src="assets/img/qi.png"/>
                    </div>
                </div>
                <div className="col_right">
                    <div className="present_block">
                        <p>До результата теста <br/> и получения подарка <br/> осталось: <strong>4
                                вопроса</strong></p>
                        <img src="assets/img/present.png"/>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <a href="#x" className="goBack">Назад</a>
                <a onClick="ym(85318552, 'reachGoal', 'step4');" href="#x" className="goNext"
                    disabled="disabled">Следующий шаг {'>'} </a>
            </div>
            <div className="dev">
                
            </div> 
        </div>
        <div className="change_block " data-step="4">
            <p className="question">
                <span className="img four"><img src="assets/img/4.png"/></span>
                <span className="text">
                    <strong>Планируете использовать канализацию круглогодично?</strong>
                    Выясняем потребуется ли консервация станции на зиму
                </span>
            </p>
            <div className="questions_block">
                <div className="col_left">
                    <div className="form_control inline_control">
                        <div className="answer_block startPodbor randomGood">
                            <input className="hideImg_2" type="radio" name="ispolzovanie" id="ispolzovanie_1"
                                value="Проживаю круглый год"/>
                            <label className="hideImg_2" htmlFor="ispolzovanie_1">Проживаю круглый год</label>
                        </div>
                    </div>

                    <div className="form_control inline_control">
                        <div className="answer_block startPodbor randomGood">
                            <input type="radio" className="sezon" name="ispolzovanie" id="ispolzovanie_2"
                                value="Проживаю только летом. Зимой не пользуюсь канализацией"/>
                            <label className="sezon" htmlFor="ispolzovanie_2">Проживаю только летом. <br/> Зимой не
                                пользуюсь канализацией</label>
                        </div>
                    </div>

                    <div className="form_control inline_control">
                        <div className="answer_block startPodbor randomGood">
                            <input className="hideImg_2" type="radio" name="ispolzovanie" id="ispolzovanie_3"
                                value="Проживаю летом. Зимой пользуюсь канализацией один раз в 2 недели или чаще"/>
                            <label className="hideImg_2" htmlFor="ispolzovanie_3">Проживаю летом. <br/> Зимой
                                пользуюсь канализацией один раз в 2 недели или чаще</label>
                        </div>
                    </div>

                    <div className="form_control inline_control">
                        <div className="answer_block">
                            <input className="hideImg_2" type="radio" name="ispolzovanie" id="ispolzovanie_4"
                                value="Пока не решил"/>
                            <label className="hideImg_2" htmlFor="ispolzovanie_4">Пока не решил</label>
                        </div>
                    </div>
                </div>

                <div className="col_center switch_image shadow_img">
                    <div className="image_header">
                        <p className="res">Промежуточный результат:</p>
                        <p className="podhodit">
                            Вам подходит станция BioDeka-3
                            П-600 <strong>и ещё <span>126</span> станций</strong>
                        </p>
                        <p className="continue">Продолжайте отвечать на вопросы!</p>
                    </div>
                    <div className="image_container ">
                        <span className="product_satus_helper"></span>
                        <img src="assets/img/qi.png"/>
                    </div>
                </div>

                <div className="col_right">
                    <div className="present_block">
                        <p>До результата теста <br/> и получения подарка <br/> осталось: <strong>3
                                вопроса</strong></p>
                        <img src="assets/img/present.png"/>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <a href="#x" className="goBack">Назад</a>
                <a onClick="ym(85318552, 'reachGoal', 'step5');" href="#x" className="goNext"
                    disabled="disabled">Следующий шаг {'>'} </a>
            </div>
            <div className="dev">
                
            </div> 
        </div>
       
        <div className="change_block " data-step="5">
            <p className="question">
                <span className="img five"><img src="assets/img/5.png"/></span>
                <span className="text">
                    <strong>Куда будем отводить переработанные стоки?</strong>
                    Уточняем, какой необходим отвод стоков - принудительный или самотёчный
                </span>
            </p>
            
            <div className="questions_block">
                <div className="col_left">
                    <div className="form_control inline_control dib_control ">
                        <div className="info_parent">
                            <span className="info_icon">i</span>
                            <div className="inform_block" style="height: 90px">
                                <div className="scroll">
                                    <p>- Стоки отводятся на поверхность грунта. </p>
                                    <p>Необходима модель с принудительным сбросом</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="answer_block startPodbor noImg randomGood">
                            <input className="sortSbros" type="radio" name="otvod" id="otvod_1"
                                value="На грунт"/>
                            <label className="sortSbros" htmlFor="otvod_1">На грунт</label>
                        </div>
                        
                    </div>
                  

                    <div className="form_control inline_control dib_control ">
                        <div className="info_parent">
                            <span className="info_icon">i</span>
                            <div className="inform_block" style="height: 90px;">
                                <div className="scroll">
                                    <p>- Стоки отводятся в ливневую канализацию.</p>
                                    <p>Необходима модель с принудительным сбросом.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="answer_block startPodbor noImg randomGood">
                            <input className="sortSbros" type="radio" name="otvod" id="otvod_2"
                                value="Ливневая канава"/>
                            <label className="sortSbros" htmlFor="otvod_2">Ливневая канава</label>
                        </div>
                        
                    </div>
                  

                    <div className="form_control inline_control dib_control ">
                        <div className="info_parent">
                            <span className="info_icon">i</span>
                            <div className="inform_block">
                                <div className="scroll">
                                    <p>- Стоки отводятся в дренажный колодец.</p>
                                    <p>Необходимость принудительного сброса зависит от уровня грунтовых вод.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="answer_block startPodbor noImg randomGood">
                            <input className="sortSbros" type="radio" name="otvod" id="otvod_3"
                                value="Дренажный колодец"/>
                            <label className="sortSbros" htmlFor="otvod_3">Дренажный колодец</label>
                        </div>
                        
                    </div>
                  

                    <div className="form_control inline_control dib_control ">
                        <div className="info_parent">
                            <span className="info_icon">i</span>
                            <div className="inform_block" style="height: 75px;">
                                <div className="scroll">
                                    <p>- Стоки отводятся в овраг.</p>
                                    <p>Подходят станции без принудительного сброса.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="answer_block startPodbor noImg randomGood">
                            <input type="radio" name="otvod" id="otvod_4" value="Овраг"/>
                            <label htmlFor="otvod_4">Овраг</label>
                        </div>
                        
                    </div>
                  
                    <div className="form_control inline_control dib_control ">
                        <div className="info_parent">
<span className="info_icon">i</span>
<div className="inform_block" style="height: 75px;">
<div className="scroll">
<p>- Стоки отводятся в овраг.</p>
<p>Подходят станции без принудительного сброса.</p>
</div>
</div>
</div>
                        
                        <div className="answer_block startPodbor noImg randomGood">
                            <input type="radio" name="otvod" id="otvod_5" value="Рассасывающая траншея"/>
                            <label htmlFor="otvod_5">Рассасывающая траншея</label>
                        </div>
                        
                    </div>
                  
                    <div className="form_control inline_control">
                        <div className="answer_block">
                            <input type="radio" name="otvod" id="otvod_5" value="Не определился"/>
                            <label htmlFor="otvod_5">Не определился</label>
                        </div>
                        
                    </div>
                  

                </div>

                <div className="col_center switch_image shadow_img">
                    <div className="image_header">
                        <p className="res">Промежуточный результат:</p>
                        <p className="podhodit">
                            Вам подходит станция BioDeka-3
                            П-600 <strong>и ещё <span>126</span> станций</strong>
                        </p>
                        <p className="continue">Продолжайте отвечать на вопросы!</p>
                    </div>
                   
                    <div className="image_container ">
                        <span className="product_satus_helper"></span>
                        <img src="assets/img/qi.png"/>
                    </div>
                    
                </div>
                
                
                <div className="col_right">
                    <div className="present_block">
                        <p>До результата теста <br/> и получения подарка <br/> осталось: <strong>2
                                вопроса</strong></p>
                        <img src="assets/img/present.png"/>
                    </div>
                </div>
                
            </div>
            

            <div className="buttons">
                <a href="#x" className="goBack">Назад</a>
                <a onClick="ym(85318552, 'reachGoal', 'step6');" href="#x" className="goNext"
                    disabled="disabled">Следующий шаг {'>'} </a>
            </div>
            
            <div className="dev">
                
            </div> 
        </div>
       

        <div className="change_block " data-step="6">
            <p className="question">
                <span className="img six"><img src="assets/img/6.png"/></span>
                <span className="text">
                    <strong>Выберите себе подарок за прохождение теста</strong>
                    Выберите подарок, который вы получите, если решите заказать установку септика у нас.
                </span>
            </p>
            
            <div className="questions_block">
                <div className="col_left presents">
                    <div className="form_control switchPresent">
                        <div className="info_parent">
                            <span className="info_icon">i</span>
                            <div className="inform_block" style="height: 210px;">
                                <div className="scroll">
                                    <p>Компания “Точка решений” шефствует над содержанием енотов в
                                        Московском зоопарке. </p>
                                    <p>Вы можете принять участие и пожертвовать на корм животным.</p>
                                    <p>Если вы закажете установку септика в нашей компании, мы переведём эту
                                        сумму от вашего имени.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="img ">
                            <img src="assets/img/enot.jpg"/>
                        </div>
                        <div className="answer_block ">
                            <input type="radio" name="present" id="present_1"
                                value="Пожертвовать на содержание енота"/>
                            <label htmlFor="present_1">Покупая септик у нас, Вы помогаете енотам Московского
                                зоопарка.</label>
                        </div>
                        
                        <div className="footer" style="display: none">
                            <table>
                                <tr>
                                    <td>Стоимость:</td>
                                    <td>700 р.</td>
                                </tr>
                            </table>
                        </div>
                        <p className="present_desc">
                            Смотри описание в подсказке <br/> на фото
                        </p>
                    </div>
                  

                    <div className="form_control switchPresent">
                        <div className="img ">
                            <img src="assets/img/p3.png"/>
                        </div>
                        <div className="answer_block ">
                            <input type="radio" name="present" id="present_2"
                                value="Шланг поливочный MARKETHOT с распылителем"/>
                            <label htmlFor="present_2">Магнитный планер на холодильник</label>
                        </div>
                        
                        <div className="footer" style="display: none">
                            <table>
                                <tr>
                                    <td>Стоимость:</td>
                                    <td>700 р.</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                  

                    <div className="form_control presentBlock">
                        <div className="present_header">Ваш подарок</div>
                        <div className="img ">
                            <img src=""/>
                        </div>
                        <div className="present_name"></div>

                        <div className="one_step">
                            До результата теста: <strong>1 ШАГ</strong>
                        </div>
                    </div>
                  

                </div>
                

            </div>
            

            <div className="buttons">
                <a href="#x" className="goBack">Назад</a>
                <a onClick="ym(85318552, 'reachGoal', 'step7');" href="#x" className="goNext"
                    disabled="disabled">Следующий шаг {'>'} </a>
            </div>
            
            <div className="dev">
                
            </div> 

        </div>
       

        <div className="change_block  " data-step="6">
            <p className="weAreStarted">
                <span style="color:#000">Система сформировала каталог станций, которые вам подходят. </span>
                <small>Зарегистрируйтесь по номеру телефона, чтобы увидеть результат. </small>
            </p>
            <div className="quiz_line"></div>
            <p className="zakrep">
                Подарок и Скидка 80% на монтаж <br/> будет закреплена за вашим номером
            </p>
            <div className="startedFlex">
                <div className="started_col">
                    <p className="started_title">Как вам удобнее <br/> получить результат?</p>
                    <ul className="radio_list">
                        <li>
                            <input type="radio" name="messenger" id="messenger_1"
                                value="Пришлите на WhatsApp"/>
                            <label htmlFor="messenger_1">Пришлите на <strong>WhatsApp</strong></label>
                        </li>
                        <li>
                            <input type="radio" name="messenger" id="messenger_2" value="Пришлите в Viber"
                                checked=""/>
                            <label htmlFor="messenger_2">Пришлите в <strong>Viber</strong></label>
                        </li>
                        <li>
                            <input type="radio" name="messenger" id="messenger_3"
                                value="Пришлите в Telegram"/>
                            <label htmlFor="messenger_3">Пришлите в <strong>Telegram</strong></label>
                        </li>
                        <li>
                            <input type="radio" name="messenger" id="messenger_4"
                                value="Пришлите SMS с промокодом"/>
                            <label htmlFor="messenger_4">Пришлите <strong>SMS</strong> с промокодом</label>
                        </li>
                        <li>
                            <input type="radio" name="messenger" id="messenger_5"
                                value="Перезвоните мне, у меня остались вопросы"/>
                            <label htmlFor="messenger_5">Перезвоните мне, у меня остались вопросы</label>
                        </li>
                    </ul>
                </div>
                
                <div className="started_col">
                    <div className="form_control presentBlock">
                        <div className="present_header">Ваш подарок</div>
                        <div className="img ">
                            <img src=""/>
                        </div>
                        <div className="present_name"></div>

                        <div className="one_step">
                            <nobr>подарок будет забронирован <br/> за вашим номером</nobr>
                        </div>
                    </div>
                </div>
                
            </div>
            

            <div className="buttons phoneImg">
                <input type="tel" name="tel" className="top_phone" placeholder="_(___)___-__-__"/>
                <a href="#x" className="getResultBtn" disabled="disabled">Получить результат</a>
            </div>
            

            <div className="spinner_block tac">
                <div className="blue">
                    <p className="percentage">0%</p>
                </div>
                <div className="progress_round">
                    <div className="bar_round" data-name="SVG Skill" data-percent="100%">
                        <svg viewbox="-10 -10 220 220" stroke-width="20">
                            <g fill="none" stroke-width="9" transform="translate(100,100)">
                                <path stroke-width="20" d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                                    stroke="url(#cl1)"></path>
                                <path stroke-width="20" d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
                                    stroke="url(#cl2)"></path>
                                <path stroke-width="20" d="M 86.6,50 A 100,100 0 0,1 0,100"
                                    stroke="url(#cl3)"></path>
                                <path stroke-width="20" d="M 0,100 A 100,100 0 0,1 -86.6,50"
                                    stroke="url(#cl4)"></path>
                                <path stroke-width="20" d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                                    stroke="url(#cl5)"></path>
                                <path stroke-width="20" d="M -86.6,-50 A 100,100 0 0,1 0,-100"
                                    stroke="url(#cl6)"></path>
                            </g>
                        </svg>
                        <svg viewbox="-10 -10 220 220" stroke-width="20">
                            <path stroke-width="20"
                                d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                                stroke-dashoffset="629">
                            </path>
                        </svg>
                    </div>

                    <svg width="0" height="0" stroke-width="20">

                        <lineargradient id="cl1" gradientunits="objectBoundingBox" x1="0" y1="0" x2="1"
                            y2="1">
                            <stop stop-color="#f48a3e"></stop>
                            <stop offset="100%" stop-color="#f69c3d"></stop>
                        </lineargradient>
                        <lineargradient id="cl2" gradientunits="objectBoundingBox" x1="0" y1="0" x2="1"
                            y2="1">
                            <stop stop-color="#f48a3e"></stop>
                            <stop offset="100%" stop-color="#f69c3d"></stop>
                        </lineargradient>
                        <lineargradient id="cl2" gradientunits="objectBoundingBox" x1="0" y1="0" x2="0"
                            y2="1">
                            <stop stop-color="#f7a43d"></stop>
                            <stop offset="100%" stop-color="#fbca3c"></stop>
                        </lineargradient>
                        <lineargradient id="cl3" gradientunits="objectBoundingBox" x1="0" y1="0" x2="0"
                            y2="1">
                            <stop stop-color="#f7a43d"></stop>
                            <stop offset="100%" stop-color="#fbca3c"></stop>
                        </lineargradient>
                        <lineargradient id="cl4" gradientunits="objectBoundingBox" x1="1" y1="0" x2="0"
                            y2="1">
                            <stop stop-color="#fac23c"></stop>
                            <stop offset="100%" stop-color="#fac23c"></stop>
                        </lineargradient>
                        <lineargradient id="cl5" gradientunits="objectBoundingBox" x1="1" y1="0" x2="0"
                            y2="1">
                            <stop stop-color="#fac23c"></stop>
                            <stop offset="100%" stop-color="#feec3b"></stop>
                        </lineargradient>
                        <lineargradient id="cl6" gradientunits="objectBoundingBox" x1="1" y1="0" x2="0"
                            y2="1">
                            <stop stop-color="#fdde3c"></stop>
                            <stop offset="100%" stop-color="#feec3b"></stop>
                        </lineargradient>


                    </svg>
                </div>

            </div>


            <p className="primernaya tac">Каталог станций сформирован. <br/> Он откроется сразу после регистрации
            </p>

            <div className="dev">
                
            </div> 
        </div>
       


        <div className="change_block white_block " data-step="6">
            <div className="tac">
                <p className="white_title">
                    Каталог подходящих станций
                </p>
            </div>
            <p className="system">Система подобрала станции, которые для Вас подойдут</p>
            <ul className="tabs_list">
                <li data-id="1" className="active">Подходят идеально</li>
                <li data-id="2">Также подойдёт</li>
            </ul>

            <div className="tab_container">
                <div data-id="1" className="tab_content active">
                    <div className="catalog_slider_2"></div>
 
                    <div className="go_next_slide_2">
                        <span>Смотреть ещё</span>
                        <img src="assets/img/next_slide.png"/>
                    </div>
                    <div className="go_prev_slide_2">
                        <span>Смотреть ещё</span>
                        <img src="assets/img/next_slide.png"/>
                    </div>
                </div>

                <div data-id="2" className="tab_content">

                    <div className="catalog_slider"></div>

                    <div className="go_next_slide">
                        <span>Смотреть ещё</span>
                        <img src="assets/img/next_slide.png"/>
                    </div>
                    <div className="go_prev_slide">
                        <span>Смотреть ещё</span>
                        <img src="assets/img/next_slide.png"/>
                    </div>

                </div>

            </div>



            <p className="system system_2">Система подобрала станции по 5 параметрам</p>

            <div className="flex_form">
                <div className="col">
                    <p className="flex_form_title">Для более точного подбора нужно учесть такие <br/> факторы
                        как:</p>
                    <ul className="flex_form_list">
                        <li>- глубина выхода канализационной трубы</li>
                        <li>- расстояние от дома до места установки станции</li>
                        <li>- естественный уклон участка</li>
                        <li>- и другие</li>
                    </ul>

                </div>

                <div className="col">
                    <p className="zamer">Замеры сможет сделать наш выездной инженер.</p>
                    <p className="viezd_free">Выезд инженера БЕСПЛАТНЫЙ.</p>
                    <div className="doc_block">
                        <p className="doc_title">Вы получите: </p>
                        <ul className="doc_list">
                            <li>Cмету в максимально развёрнутом виде на 13-ти листах</li>
                            <li>Фиксированную стоимость станции и установки</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="new_blue_block">
                <p className="new_blue_block_title">Мы заботимся о вашей безопасности</p>
                <p className="new_blue_block_title_subtitle">В связи с пандемией коронавируса соблюдаем все меры
                    <br/> безопасности при замерах</p>
                <div className="_2_cols">
                    <div className="_col _man">
                        <div className="_img">
                            <img src="assets/img/_full_master.png" alt=""/>
                        </div>
                        <div className="_footer">
                            <p>Инженер-замерщик <br/> компании “Точка решений”</p>
                        </div>
                    </div>
                    <div className="_col _poloski">
                        <div className="forma" id="white_form">
                            <p className="form_title">Заказать бесплатный <br/> и безопасный выезд <br/> инженера
                            </p>
                            <p className="check_data">Проверьте номер телефона <br/> и Укажите адрес и удобную
                                дату</p>
                            <input type="tel" name="tel" required="" className="bottom_phone"
                                placeholder="7 (905) 111-22-33"/>
                            <div className="datePlace"></div>
                            <textarea name="datePlace" placeholder="Укажите адрес и удобную дату для выезда инженера"></textarea>
                            <button type="submit" className="submit">Заказать выезд инженера {'>>'} </button>
                        </div>
                    </div>
                </div>

                <p className="_blue_title">Инженер-замерщик:</p>
                <div className="_blue_list">
                    <div className="_block">
                        <p className="_number"><span>1</span></p>
                        <div className="_text">
                            <p className="_title">Соблюдает социальную <br/> дистанцию</p>
                            <p className="_info">Все работы по замерам <br/> проводятся на улице.</p>
                        </div>
                    </div>
                    <div className="_block">
                        <p className="_number"><span>2</span></p>
                        <div className="_text">
                            <p className="_title">Применяет средства <br/> индивидуальной защиты</p>
                            <p className="_info">На замерах инженер надевает <br/> защитную маску, перчатки и
                                <br/> обрабатывает руки <br/> антисептиком.</p>
                        </div>
                    </div>
                    <div className="_block">
                        <p className="_number"><span>3</span></p>
                        <div className="_text">
                            <p className="_title">Использует одноразовый <br/> пакет средств защиты</p>
                            <p className="_info">На каждый замер компания <br/> выдаёт инженеру пакет <br/>
                                одноразовых средств <br/> индивидуальной защиты.</p>
                        </div>
                    </div>
                </div>
                <div className="_letters">
                    <div className="_letter _letter_1">
                        <div className="_letter_img"><img src="assets/img/_letter_1.png" alt=""/></div>
                        <ul className="_letter_list">
                            <li>Отдельный пакет <br/> с номером заказа <br/> на замер</li>
                            <li>Один пакет <br/> на один заказ.</li>
                        </ul>
                    </div>
                    <div className="_letter _letter_2">
                        <div className="_letter_img"><img src="assets/img/_letter_2.png" alt=""/></div>
                        <ul className="_letter_list">
                            <li>Подготовили <br/> 300 одноразовых <br/> комплектов, чтобы <br/> каждый
                                выезд<br/> замерщика был <br/> защищён.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="devider"></div>
            <div className="lll"></div>
            <a href="https://www.instagram.com/tochkaresheny.ru/" target="_blank" className="subscribe_block">
                <img src="assets/img/ii.png" alt=""/>
                <p>Подписывайтесь на наш Instagram</p>
            </a>

            <p className="know_more">Узнайте больше информации о нашей компании <br/> на основном сайте</p>

            <a href="https://tochkaresheny.ru/" className="goToMain" target="_blank">перейти на основной
                сайт</a>



            <div className="dev">
                
            </div>

        </div>
        <input type="hidden" name="utm_medium" value=""/>
        <input type="hidden" name="utm_source" value=""/>
        <input type="hidden" name="utm_campaign" value=""/>
        <input type="hidden" name="utm_term" value=""/>
        <input type="hidden" name="utm_content" value=""/>
        <input type="hidden" name="yclid" value=""/>
    </form>
</div>
</main>


);
}

export default Quiz;