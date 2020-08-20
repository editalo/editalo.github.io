//JavaScript source code
   //Business Web
   //Author: Eddie Ferreiro Romero
   //Date: 04 / 20 / 2020
   //Filename: script.js 



     function initMap(){
        var location = {lat: 27.9506, lng: -82.4572};
            var map = new google.maps.Map(document.getElementById("map"),{
            zoom: 4,
            center: location
            });
    }

/*google api key*/
/*AIzaSyBvsuNc50mV1_aCltWUiPbQI0JLLdbvev8*/

var userMenu = document.getElementsByClassName("menuBars");
var sideMenu = document.getElementsByClassName("sideMenu");
var activeLink = document.getElementsByClassName("activeLink");

$(userMenu[0]).click(function () {

    $(sideMenu[0]).slideToggle();
    $(userMenu).hide();
});

$(sideMenu[0]).click(function () {

    $(sideMenu[0]).hide();
    $(userMenu).css("display", "");    

});

 /* $(activeLink[0]).click(function(){
    $(activeLink[0]).css("background","red")
});  */
