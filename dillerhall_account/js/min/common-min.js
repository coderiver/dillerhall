$(document).ready(function(){$(document).on("click",function(){$(".js-menu").removeClass("is-active")}),$("body").on("click",".js-add-btn",function(){var t=$(this).attr("data-hidden"),o=$("."+t).html();return $(this).parent().before(o),!1}),$(".js-select-single").length&&$(".js-select-single").each(function(){$(this).multiselect({multiple:!1,selectedList:1,show:["fade",200],hide:["fade",200],beforeclose:function(){if($(this).hasClass("js-select-border")){var o=$(this);t(o)}}})});var t=function(t){var o=t.find("option"),e=t.parents(".select"),n=t.multiselect("widget").find(":radio:checked"),i=n.parents("li").index(),s=o.eq(i).attr("data-border-color");void 0!==s?e.attr("data-border-color",s):e.attr("data-border-color","")};$(".js-select-border").length&&$(".js-select-border").each(function(){var t=$(this).find("option:selected").attr("data-border-color");$(this).parent(".select").attr("data-border-color",t)}),$(".js-menu").on("click",function(t){$(this).toggleClass("is-active"),t.stopPropagation()}),$(".js-sort-link").on("click",function(t){$(this).toggleClass("is-active"),$(this).parent().find('input[type="checkbox"]').trigger("click"),t.stopPropagation()}),$(".account .link-more").on("click",function(t){t.preventDefault();var o=$(this).text(),e=$(this).data("text");$(this).siblings(".account__item-more").slideToggle(),$(this).text(e),$(this).data("text",o)});var o=function(){var t=$(".js-panel"),o=t.offset().top,e=t.width(),n=t.height();$(window).on("scroll",function(){o-$(window).scrollTop()<=0?(t.css({position:"fixed",top:"0",zIndex:"1000",width:e}),$("body").css("margin-top",n)):(t.css({position:"",top:"",zIndex:"",width:""}),$("body").css("margin-top",""))})};$(".js-panel").length&&o();var e=function(){function t(){return $(window).height()-a.height()}function o(){return $(window).scrollTop()-s.offset().top+d}function e(){var t=0;return t="fixed"==s.attr("position")?$(window).scrollTop()+d+s.outerHeight():$(window).scrollTop()-s.offset().top+s.outerHeight()}function n(){return c.offset().top-d-$(window).scrollTop()}function i(){return c.offset().top+c.outerHeight()-$(window).scrollTop()}var s=$(".js-account"),c=s.parent(),r=s.outerWidth(),l=s.outerHeight(),a=$(".js-panel"),d=a.height();console.log(c.offset().top),s.outerHeight()<t()&&$(window).on("scroll",function(){console.log("sctollTop ["+$(window).scrollTop()+"]"),console.log("el.top ["+o()+"]"),console.log("el.bottom ["+e()+"]"),console.log("topPoint ["+n()+"]"),console.log("bottomPoint ["+i()+"]"),o()>=n()&&s.css({position:"fixed",zIndex:"10",top:d,width:r}),e()>=i()&&s.css({position:"absolute",top:"auto",bottom:"0"}),o()<n()&&s.css({position:"",top:"",bottom:"",width:""})})};$(".js-account").length&&e(),$(".js-add-field").on("click",function(t){t.preventDefault();var o=$(this).parents(".b-input"),e=o.find("input"),n=e.attr("type"),i=e.attr("class");e.length<=5&&$("<input />",{type:n,"class":i}).insertBefore($(this).parent())})});