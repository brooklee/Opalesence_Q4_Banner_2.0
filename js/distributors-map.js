webpackJsonp([24],{429:function(t,i,o){"use strict";$.fn.makeSticky=function(t){var i=$.extend(!0,{container:null,offset:{top:0,right:0,bottom:0,left:0}},t||{}),o=$(this);$("body");if(o=o.children().wrapAll('<div class="sticky-content" />'),i.container)var e=$(i.container);var s={offsetHeight:o[0].offsetHeight,offsetTop:o.offset().top,position:o.css("position"),top:o.css("top")},n=e?e[0].offsetHeight:0,r=e?e.offset().top:0,a=n+r;$(window).scroll(function(t){var e=a-i.offset.bottom-s.offsetHeight,n=$(t.target).scrollTop();0!==a&&e<=n?o.css({position:"fixed",top:e-n+i.offset.top}):s.offsetTop<=n+i.offset.top?o.css({position:"fixed",top:i.offset.top}):o.css({position:s.position,top:s.top})})}},637:function(t,i,o){t.exports=o(638)},638:function(t,i,o){"use strict";function e(t){if(null==t)$(".distributorList").children(":not(#noDistributors)").slideDown(500);else if(n!=t){var i=s;t.id&&(i=t.id.replace(/.*(region_[0-9a-z])/,"$1")),r.fadeOut(250,function(){r.removeClass().addClass(i).fadeIn(250)}),$("[id*="+n+"]").removeClass("current"),$("[id*="+i+"]").addClass("current"),n=i;var o=$(".distributorList").children(":not(h2)").slideUp(500).parent().find(i!==s?"."+i:"address");0!=o.length?o.slideDown(500):$("#noDistributors").slideDown(500),$("#distributorRegionIdentifier").text(i.replace("_"," "))}}o(429);var s="all",n=s,r=$("#currentRegion"),a=$(".distributorList:first"),f=$('<p id="mapInstructions"></p>').html("Click map to view available distributors for that area");a.find("address").hide(),a.prepend(f),$("#navigationBeta").makeSticky({container:"#page-content",offset:{top:16,bottom:16}}),$('#navigationBeta [id*="region"], .distributorMap [id*="region"], .view-all-distributors').each(function(){$(this).on("click",function(t){t.preventDefault(),e(this)}),$(this).one("click",function(){f.remove()})}),$('#navigationBeta [id*="region"]').gotoByScroll($(".distributorMap"))}},[637]);
//# sourceMappingURL=distributors-map.js.map