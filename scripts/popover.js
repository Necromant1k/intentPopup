"use strict";$(document).ready(function(){function o(o,n,e){o.addEventListener?o.addEventListener(n,e,!1):o.attachEvent&&o.attachEvent("on"+n,e)}o(document,"mouseout",function(o){null==o.toElement&&null==o.relatedTarget&&("block"===$("#popover_unlock").css("display")||($("#initial_popover").slideDown(),$(".blur-background").css("display","block")))}),$(".close").on("click",function(o){o.preventDefault(),$(".popover-box").slideUp(),$(".blur-background").css("display","none")}),$(".button-close").on("click",function(o){o.preventDefault(),$("#initial_popover").slideUp(),$(".blur-background").css("display","none")}),$("#initial_popover .button-unlock").on("click",function(o){o.preventDefault(),$("#initial_popover").slideUp(),$("#popover_unlock").slideDown(),$(".blur-background").css("display","block")}),$("#popover_unlock .button-unlock").on("click",function(){void 0===$("#email").value||($("#popover_unlock").slideUp(),$(".blur-background").css("display","none"))})});