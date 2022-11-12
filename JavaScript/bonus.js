$(function() {
  var h = $(window).height();
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
//全ての読み込みが完了したら実行ローダー
$(window).load(function () { 
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

$('.hamburger').click(function () {
    $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
    }
});

//新しいアコーディオン
$(function () {
    $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
  });
});

window.onload = function(){
    $("#onemore,.card").addClass("disappear");
    }

  // ガチャデータを定義
  var card_1 = 10;
  var card_2 = 20;
  var card_3 = 30;
  var card_4 = 40;
  var card_5 = 50;
  var card_6 = 60;
  var card_7 = 70;
  const min = 1;
  const max = 70;

  function OneMoreOnButtonClick() {
      $("#app").addClass("disappear");
      $("#button-name,#glow").addClass("disappear");
      $("onemore").addClass("appear");   
      $("#card_1,#card_1 #holo,#card_2,#card_2 #holo,#card_3,#card_3 #holo,#card_4,#card_4 #holo,#card_5,#card_5 #holo,#card_6,#card_6 #holo,#card_7,#card_7 #holo").addClass("disappear");
      $("#card_1,#card_2,#card_3,#card_4,#card_5,#card_6,#card_7").removeClass("animated");
      $("#card_1 #glow2,#card_2 #glow2,#card_3 #glow2,#card_4 #glow2,#card_5 #glow2,#card_6 #glow2,#card_7 #glow2").addClass("active");

       const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
       console.log(randomNum);

       if(randomNum<=10){
           $("#card_1 #holo,#card_1").removeClass("disappear");
           $("#card_1").addClass("appear");
           $("#onemore").addClass("displayblock");
           var animation = setTimeout(function() {
           $("#card_1").addClass("animated");
           }, 1000);
       }
       else if(randomNum>=10&randomNum<=20){
            $("#card_2 #holo,#card_2").removeClass("disappear");
            $("#card_2").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_2").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=20&randomNum<=30){
            $("#card_3 #holo,#card_3").removeClass("disappear");
            $("#card_3").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_3").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=30&randomNum<=40){
            $("#card_4 #holo,#card_4").removeClass("disappear");
            $("#card_4").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_4").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=40&randomNum<=50){
            $("#card_5 #holo,#card_5").removeClass("disappear");
            $("#card_5").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_5").addClass("animated");
            }, 1000);
       }
       else if(randomNum>=50&randomNum<=60){
            $("#card_6 #holo,#card_6").removeClass("disappear");
            $("#card_6").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_6").addClass("animated");
            }, 1000);
       }
       else if(randomNum>=60&randomNum<=70){
            $("#card_7 #holo,#card_7").removeClass("disappear");
            $("#card_7").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_7").addClass("animated");
            }, 1000);
       }
  }
