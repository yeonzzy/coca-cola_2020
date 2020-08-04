 //location Icon 클릭 -> popmenu나타내기
 $('.location').on('click', locaPopFunc);

 function locaPopFunc() {
     $('.locationPop').css({
         'display': 'block'
     })
     $('.inner-locationPop').animate({
         'left': '0'
     });
 }
 //location Title 클릭 -> >ul>li 나타내기
 //North America
 $('.loca.northAmerica').on('click', northChildFunc);

 function northChildFunc() {
     $('.loca.northAmerica >ul >li.locaChild').slideToggle();
 }
 //Latin America
 $('.loca.latinAmerica').on('click', latinChildFunc);

 function latinChildFunc() {
     $('.loca.latinAmerica >ul >li.locaChild').slideToggle();
 }
 //Europe
 $('.loca.europe').on('click', europeChildFunc);

 function europeChildFunc() {
     $('.loca.europe >ul >li.locaChild').slideToggle();
 }
 //Eurasia
 $('.loca.eurasia').on('click', eurasiaChildFunc);

 function eurasiaChildFunc() {
     $('.loca.eurasia >ul >li.locaChild').slideToggle();
 }
 //Africa
 $('.loca.africa').on('click', africaChildFunc);

 function africaChildFunc() {
     $('.loca.africa >ul >li.locaChild').slideToggle();
 }
 //Asia
 $('.loca.asia').on('click', asiaChildFunc);

 function asiaChildFunc() {
     $('.loca.asia >ul >li.locaChild').slideToggle();
 }

 //Cloase 클릭 -> popmenu사라지게
 $('span.locaClose').on('click', locaCloseFunc);

 function locaCloseFunc() {
     $('.locationPop').css({
         'display': 'none'
     })
     $('.inner-locationPop').animate({
         'left': '-100%'
     });
 }