$(document).ready(function(){function n(){$("html, body").animate({scrollTop:$(document).height()},50);$("ul#files li:nth-child("+e+")").fadeIn(50,function(){e++;if(e<=t){n()}else{$("#overlay-text").hide();$("#bottom-files").show();$("html, body").animate({scrollTop:$(document).height()},50)}})}var e=1,t=$("ul#files li").length;n()})