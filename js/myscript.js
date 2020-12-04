 $(function(){

            const loading = $('.loading');

            $(window).on('load',function(){
                loading.remove()
            })
           // 54. 로딩 이후에 세로 스크롤 다시 생기도록 설정
           $(window).on('pageshow',function(){
                $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
                $('body').css('overflow','visible');
            })

           // 19.캐로셀 옵션 설정
           $('.carousel').carousel({
           	   interval : 3000
           })

           // 38. animatescroll plugin 동작구문

           $('.navbar li:nth-child(1) a').click(function(){
           		$('#top').animatescroll();
           })
           $('.navbar li:nth-child(2) a').click(function(){
           		$('#product').animatescroll();
           })
           $('.navbar li:nth-child(3) a').click(function(){
           		$('#about').animatescroll();
           })
           $('.navbar li:nth-child(4) a').click(function(){
           		$('#tasting').animatescroll({padding:70});
           })
           $('.navbar li:nth-child(5) a').click(function(){
           		$('#effort').animatescroll({padding:70});
           })
           $('.navbar li:nth-child(6) a').click(function(){
           		$('#cf').animatescroll({padding:60});
           })
           $('.navbar li:nth-child(7) a').click(function(){
           		$('#contact').animatescroll({padding:70});
           })
           $('.bi-arrow-up-square-fill').click(function(){
              $('#top').animatescroll();
           })

           // 재활용페이지 버튼
           $('.re-btn2').hide();
           $('.re-btn1').click(function(){
              $('.re').css('opacity',1);
              $('#cf').css('margin-top',0);
              $('.re-btn_text').css('opacity',0);
              $(this).hide();
              $('.re-btn2').show();
           })
           $('.re-btn2').click(function(){
              $('.re').css('opacity',0);
              $('#cf').css({'margin-top':-780,'z-index':99999});
              $(this).hide();
              $('.re-btn_text').css('opacity',1);
              $('.re-btn1').show();
           })

           // top 버튼 
           var topbtn= document.getElementById("myBtn");
           window.onscroll = function() {scrollFunction()};
           function scrollFunction() {
              if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                topbtn.style.display = "block";
              } else {
                topbtn.style.display = "none";
              }
            }

           // 65. waypoint plugin 동작구문

           // -------------------------------------------------------------product page
          $('.wp1').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp1').addClass('animate__animated animate__fadeInUp')
              }
          },{
              offset:'70%'
          })
          $('.wp1').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp1').removeClass('animate__animated animate__fadeInUp')
              }
          },{
              offset:'100%'
          })

          $('.wp2').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp2').addClass('animate__animated animate__fadeInDown')
              }
          },{
              offset:'70%'
          })
          $('.wp2').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp2').removeClass('animate__animated animate__fadeInDown')
              }
          },{
              offset:'100%'
          })

          // -------------------------------------------------------------effort page
          $('.wp3').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp3').addClass('animate__animated animate__slideInDown')
              }
          },{
              offset:'70%'
          })
          $('.wp3').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp3').removeClass('animate__animated animate__slideInDown')
              }
          },{
              offset:'200%'
          })

          $('.wp4').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp4').addClass('animate__animated animate__zoomIn')
              }
          },{
              offset:'70%'
          })
          $('.wp4').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp4').removeClass('animate__animated animate__zoomIn')
              }
          },{
              offset:'200%'
          })

          $('.wp5').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp5').addClass('animate__animated animate__slideInLeft')
              }
          },{
              offset:'70%'
          })
          $('.wp5').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp5').removeClass('animate__animated animate__slideInLeft')
              }
          },{
              offset:'200%'
          })
          $('.wp9').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp9').addClass('animate__animated animate__slideInRight')
              }
          },{
              offset:'60%'
          })
          $('.wp9').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp9').removeClass('animate__animated animate__slideInRight')
              }
          },{
              offset:'200%'
          })

          // -------------------------------------------------------------about page
          $('.wp6').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp6').addClass('animate__animated animate__fadeIn')
              }
          },{
              offset:'80%'
          })
          $('.wp6').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp6').removeClass('animate__animated animate__fadeIn')
              }
          },{
              offset:'100%'
          })
          $('.wp15').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp15').addClass('animate__animated animate__fadeIn')
              }
          },{
              offset:'60%'
          })
          $('.wp15').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp15').removeClass('animate__animated animate__fadeIn')
              }
          },{
              offset:'100%'
          }) 
          $('.wp7').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp7').addClass('animate__animated animate__zoomIn')
              }
          },{
              offset:'80%'
          })
          $('.wp7').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp7').removeClass('animate__animated animate__zoomIn')
              }
          },{
              offset:'100%'
          })  

          // -------------------------------------------------------------tasting page     
          $('.wp8').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp8').addClass('animate__animated animate__fadeIn')
              }
          },{
              offset:'70%'
          })
          $('.wp8').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp8').removeClass('animate__animated animate__fadeIn')
              }
          },{
              offset:'100%'
          })
          // -------------------------------------------------------------effort page 추가  
          $('.wp10').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp10').addClass('animate__animated animate__fadeInRight')
              }
          },{
              offset:'70%'
          })
          $('.wp10').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp10').removeClass('animate__animated animate__fadeInRight')
              }
          },{
              offset:'100%'
          })
          $('.wp11').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp11').addClass('animate__animated animate__fadeInRight')
              }
          },{
              offset:'70%'
          })
          $('.wp11').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp11').removeClass('animate__animated animate__fadeInRight')
              }
          },{
              offset:'100%'
          })
          $('.wp12').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp12').addClass('animate__animated animate__fadeInLeft')
              }
          },{
              offset:'70%'
          })
          $('.wp12').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp12').removeClass('animate__animated animate__fadeInLeft')
              }
          },{
              offset:'100%'
          })
          $('.wp13').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp13').addClass('animate__animated animate__fadeInLeft')
              }
          },{
              offset:'70%'
          })
          $('.wp13').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp13').removeClass('animate__animated animate__fadeInLeft')
              }
          },{
              offset:'100%'
          })
          // -------------------------------------------------------------contact page
          $('.wp14').waypoint(function(direction){
              if(direction==='down'){
                  $('.wp14').addClass('animate__animated animate__fadeInUp')
              }
          },{
              offset:'70%'
          })
          $('.wp14').waypoint(function(direction){
              if(direction==='up'){
                  $('.wp14').removeClass('animate__animated animate__fadeInUp')
              }
          },{
              offset:'100%'
          })
        })

