$(document).ready(function(){
	//一级菜单切换
	$('.tabList a').click(function(){
		$(this).addClass('bkfff').parent().siblings().children('a').removeClass('bkfff');		
	});
	$('.Home').click(function(){
		$('.menuBox .homeMenuList').addClass('show').siblings().removeClass('show')
	});
	$('.carrierSolution').click(function(){
		$('.menuBox .carrierMenuList').addClass('show').siblings().removeClass('show')
	});
	$('.industryEnterprise').click(function(){
		$('.menuBox .industryInformationList').addClass('show').siblings().removeClass('show')
	});
	$('.onlineMall').click(function(){
		$('.menuBox .olineMallList').addClass('show').siblings().removeClass('show')
	})
	//二级菜单切换
	$('.menuList').children().children('li').mouseenter(function(){
		$(this).children('a').addClass('colorRed').parent().siblings().children('a').removeClass('colorRed');		
	});
	$('.menuList').children().children('li').mouseleave(function(){
		$(this).children('a').removeClass('colorRed');		
	});
	
	
	//tab切换
	var Show = true;
	console.log($('.homeMenuList').children().children('li').length)
	$('.homeMenuList').children().children('li').mouseenter(function(){
		$(this).children('.selectBox').show()
	});
	$('.homeMenuList').children().children('li').mouseleave(function(){
		$(this).children('.selectBox').hide()
	});
	$('.carrierMenuList').children().children('li').mouseenter(function(){
		$(this).children('.selectBox').show()
	});
	$('.carrierMenuList').children().children('li').mouseleave(function(){
		$(this).children('.selectBox').hide()
	});
	$('.industryInformationList').children().children('li').mouseenter(function(){
		$(this).children('.selectBox').show()
	});
	$('.industryInformationList').children().children('li').mouseleave(function(){
		$(this).children('.selectBox').hide()
	});
	
	
	//首页搜索
	$('.search').click(function(){
		$('#searchPage').fadeIn(10);	
	});
	$('.searchClose').click(function(){
		$('#searchPage').fadeOut(10);
	});
	$('.user').click(function(){
		$('#userPage').fadeIn(10);	
	});
	$('.userClose').click(function(){
		$('#userPage').fadeOut(10);
	});
	//语言切换
//	$('.en').click(function(){
//		$('.chooseLanguagePage').fadeIn("slow");	
//	});
//	$('.languageClose').click(function(){
//		$('.chooseLanguagePage').fadeOut("slow");	
//	});
	//首页小图片效果
	$('.smallBanner').mouseenter(function(){
		$(this).children('.smallBannerTitle').hide();
		$(this).children('.smallBannerMask').fadeIn("100");	
		$(this).children('.showBox').show();
	});
	$('.smallBanner').mouseleave(function(){
		$(this).children('.smallBannerTitle').show();
		$(this).children('.smallBannerMask').fadeOut("100");	
		$(this).children('.showBox').hide();
	});
	
	
	//回到顶部
	$('.backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
  	
  	//ALL下拉
	var Show = true;
    $('.all').click(function(event){
    	event.stopPropagation();
    	if(Show){
    		$('.newsSelect').fadeIn("500");
    	} else{
    		$('.newsSelect').fadeOut("500");
    	}
    	Show = !Show;
    });
	$('.newsSelect').children('p').click(function(){
		$('.newsSelect').fadeOut("500");
		//console.log($(this).html())
		$('.allWord').html($(this).html());
		Show = true;
		var i = $(this).index();
		$(this).css({'color':'#0b4da2'}).siblings().css({'color':'#000'});
		//console.log($('.tipsBox').children('.tips').eq(i))
		$('.tipsBox').children('.tips').eq(i).addClass('tipsShow').siblings().removeClass('tipsShow')
	});
	
	$(document).bind('click',function(){		
		$('.selectBox').hide();
		$('.newsSelect').hide();
		Show = true;

	});
	//播放视频
	var play = true;
	$(".playIcon").click(function(){
		if(play){
			$("video").trigger("play");
			$(this).hide();
		} else{
			$("video").trigger("pause");
			$(this).show();
		};
		play = !play;
	});
	$("video").click(function(){
		if(play){
			$("video").trigger("play");
			$('.playIcon').hide();
		} else{
			$("video").trigger("pause");
			$('.playIcon').show();
		};
		play = !play;
	});
	
//英文时间格式
var datestr = $('.industryTime').html();
var timestamp = Date.parse(new Date());
//var timestamp = Date.parse(datestr);
//var time = getMonthToEnglish(parseInt(timestamp.Format("MM")))
//导航添加样式	
var code =  localStorage.getItem("menuName");//获取b的值
if(code==null){
	code=1;
}
//alert(code);
switch(parseInt(code)){
	case 1: 
		$('.Home').children('a').addClass('bkfff');
		$('.Home').siblings().children('a').removeClass('bkfff');	
		$('.homeMenuList').addClass('show');//二级导航
		$('.homeMenuList').siblings().removeClass('show');	
		break;
	case 2: 
		$('.carrierSolution').children('a').addClass('bkfff');
		$('.carrierSolution').siblings().children('a').removeClass('bkfff');	
		$('.carrierMenuList').addClass('show');//二级导航
		$('.carrierMenuList').siblings().removeClass('show');	
		break;
	case 3: 
		$('.industryEnterprise').children('a').addClass('bkfff');
		$('.industryEnterprise').siblings().children('a').removeClass('bkfff');	
		$('.industryInformationList').addClass('show');//二级导航
		$('.industryInformationList').siblings().removeClass('show');
		break;
	/*case 4: 
		$('.homeproducts').children('a').addClass('bkfff');
		$('.homeproducts').siblings().children('a').removeClass('bkfff');		
		break;*/
	case 5: 
		$('.onlineMall').children('a').addClass('bkfff');
		$('.onlineMall').siblings().children('a').removeClass('bkfff');	
		$('.olineMallList').addClass('show');//二级导航
		$('.olineMallList').siblings().removeClass('show');	
		break;
}
var code2 =  localStorage.getItem("menuName2");//获取b的值
if(code2==null){
	code2=0;
}
console.log(code2)
switch(parseInt(code2)){
	case 11:
		$('.homeMenuList ul li').eq(0).children('a').css('color','#f15921');
		break;
	case 12:
		$('.homeMenuList ul li').eq(1).children('a').css('color','#f15921');
		break;
	case 13:
		$('.HomeProducts').children('a').css('color','#f15921');
		break;
	case 14:
		$('.HomeSupport').children('a').css('color','#f15921');
		break;
	case 15:
		$('.HomeAboutUs').children('a').css('color','#f15921');
		break;
	case 16:
		$('.homeMenuList ul li:last').children('a').css('color','#f15921');
		break;
	case 21:
		$('.carrierMenuList ul li').eq(0).children('a').css('color','#f15921');
		break;
	case 22:
		$('.carrierMenuList ul li').eq(1).children('a').css('color','#f15921');
		break;
	case 23:
		$('.carrierMenuList .HomeSupport').children('a').css('color','#f15921');
		break;
	case 31:
		$('.industryInformationList ul li').eq(0).children('a').css('color','#f15921');
		break;
	case 32:
		$('.industryInformationList ul li').eq(1).children('a').css('color','#f15921');
		break;
	case 33:
		$('.industryInformationList .industryInformationProducts').children('a').css('color','#f15921');
		break;
	case 34:
		$('.industryInformationList .HomeSupport').children('a').css('color','#f15921');
		break;
}
//产品load more
var num1=$('#tipsList li').length;
var num2=$('.SolutionsContentList li').length;
if(num1>0){
	$('#tipsList').height(550);
	$('#tipsList').css('overflow','hidden');
}else{
	$('#caseLoad').hide();
}
if(num2>0){
	$('.SolutionsContentList').height(450);
	$('.SolutionsContentList').css('overflow','hidden');
}else{
	$('#soLoad').hide();
}
$('#caseLoad').click(function(){
	$('#tipsList').height('auto');
	$('#tipsList').css('overflow','');
	$(this).hide();
})
$('#soLoad').click(function(){
	$('.SolutionsContentList').height('auto');
	$('.SolutionsContentList').css('overflow','');
	$(this).hide();
})
//events  booth加载
var nn=$('.carrierSolution2ContentBoxWord ul li').length;
if(nn>0){
	$('#eventsSolution ul').height(560);
	$('#eventsSolution ul').css('overflow','hidden');
}else{
	$('#eventsLoad').hide();
}
$('#eventsLoad').click(function(){
	$('#eventsSolution ul').height('auto');
	$('#eventsSolution ul').css('overflow','');
	$(this).hide();
})

//导航二级菜单样式
$('.menuBox ul li a').click(function(){
	$('.menuBox ul li a').removeClass('colorRed');
	$(this).addClass('colorRed')
})
//support页面product切换
var spnum = $('.serviceProductContentBox ul li').length;
for(var s=0;s<spnum;s++){
	var spnum1 = $('.serviceProductContentBox ul li').eq(s).find('.serviceProductListContentWord').length;
	if(spnum1<=3){
		$('.serviceProductContentBox ul li').eq(s).find('.fr').hide();
	}
}


localStorage.setItem("pageIndex",'');
})
function menunav(code,code2){
	//document.cookie="menuName="+code;
	//console.log(code);
	//alert(1111);
	localStorage.setItem("menuName",code);
	localStorage.setItem("menuName2",code2);
}
//二级菜单
function menunav2(code){
	//document.cookie="menuName="+code;
	//console.log(code);
	//alert(1111);
	localStorage.setItem("menuName2",code);
}
//语言点击
function enmenu(){
	localStorage.setItem("menuName",0);
	localStorage.setItem("menuName2",0);
}

//Facebook分享
function sharefb(){
	window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&amp;t='+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');
}
//Twitter分享
function sharett(){
	window.open('http://twitter.com/home?status='+encodeURIComponent(document.location.href)+' '+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');
}

//新闻加载更多
function loadMore(obj,str,url){
	var cids = str;
	var pageindex = $(obj).attr('pageindex');
	var oneid = $(obj).siblings('.industryContentBox').find('ul').children('li').eq(0).attr('oneid');
	var local = localStorage.getItem("pageIndex") ? localStorage.getItem("pageIndex"):oneid;
	$.ajax({
		 type:'post',
		 data:"cids="+cids+"&pageindex="+pageindex,
		 url:url,
		 //async:false,
		 dataType:'json',
		 success:function(res){
			if(res.List.length>0){
				var con = '';
				if(local!=res.List[0].id){
					for(var i=0;i<res.List.length;i++){					
						con+='<li class="clearfix">';
						con+='	<div class="industryListLeft fl">';
						con+='	<p class="industryListTop">'+res.List[i].catname+'</p>';
						con+='	<h4 class="industryListTitle"><a href="'+res.List[i].link_url+'">'+res.List[i].title+'</a></h4>';
						con+='	<p class="industryListTime">'+res.List[i].add_time+'</p>';
						con+='	<p class="industryListContent">'+res.List[i].zhaiyao+'</p>';
						con+='	</div>';
						con+='	<div class="industryListRightImg fr">';
						con+='		<img src="'+res.List[i].img_url+'" alt="" />';
						con+='	</div>';
						con+='</li>';
					}
					localStorage.setItem("pageIndex",res.List[0].id);
					$(obj).siblings('.industryContentBox').children('.industryList').children('ul').append(con);
					$(obj).attr('pageindex',parseInt(pageindex)+1);
				}else{
					$(obj).hide();
				}
			}
		 }
		
	})
	return false;
}

function loadMoreNews(obj,str,url){
	var cids = str;
	var pageindex = $(obj).attr('pageindex');
	var j = $(obj).siblings('.tipsList').children('ul').children('li').length;
	var idx = $(obj).index('.tipCheckMore');
	var oneid = $(obj).siblings('.tipsList').children('ul').eq(0).attr('oneid');
	var local = localStorage.getItem("pageIndex") ? localStorage.getItem("pageIndex"):oneid;
	$.ajax({
		 type:'post',
		 data:"cids="+cids+"&pageindex="+pageindex,
		 url:url,
		 //async:false,
		 dataType:'json',
		 success:function(res){
		 	console.log(res)
			if(res.List.length>0){
				var con = '';
				if(local!=res.List[0].id){
					for(var i=0;i<res.List.length;i++){	
						if((j+i+1)%3==1){
							con+='<ul class="clearfix">';
						}
						if((j+i+1)%3==0){
							con+='<li class="fl mr0">';
						}else{
							con+='<li class="fl">';
						}
						con+='<a href="'+res.List[i].link_url+'">';
						con+='	<div class="tipImg">';
						con+='		<img src="'+res.List[i].img_url+'" alt="tips" width="100%"/>';
						con+='	</div>';
						con+='	<div class="tipContent">';
						con+='		<p class="tipContentTop">'+res.List[i].catname+'</p>';
						if(getByteLen(res.List[i].title) > 45){
							con+='		<h5 class="tipTitle">'+res.List[i].title.substring(0,45)+'...</h5>';
						}else{
							con+='		<h5 class="tipTitle">'+res.List[i].title+'</h5>';
						}
						if(getByteLen(res.List[i].zhaiyao) > 200){
							con+='		<p class="tipP">'+res.List[i].zhaiyao.substring(0,200)+'...</p>';
						}else{
							con+='		<p class="tipP">'+res.List[i].zhaiyao+'</p>';
						}
						con+='	</div>';
						con+='</a>';
						con+='</li>';
						if((j+i+1)%3==0){
							con+='</ul>';
						}
					}
					localStorage.setItem("pageIndex",res.List[0].id);
					$(obj).siblings('.tipsList').append(con);
					$(obj).attr('pageindex',parseInt(pageindex)+1);
				}else{
					$(obj).hide();
				}
			}
		 }
		
	});
	return false;
}

//搜索
//搜索查询
$('#pageSearch').submit(function(){
	var send_url = "/en/searchlist.html";
	var divTgs = "#keywords";
	var str = $.trim($(divTgs).val());
	//alert($(divTgs).val());return false;
	if (str.length > 0) {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
})

/*function SiteSearch(send_url, divTgs) {
	
	var str = $.trim($(divTgs).val());
	//alert($(divTgs).val());return false;
	if (str.length > 0) {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
}*/
$('#pageSearch1').submit(function(){
	var send_url = "/en/searchlist.html";
	var divTgs = "#keywords1";
	var str = $.trim($(divTgs).val());
	//alert($(divTgs).val());return false;
	if (str.length > 0) {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
})
$('#errorSearch').submit(function(){
	var send_url = "/en/searchlist.html";
	var divTgs = "#keywords404";
	var str = $.trim($(divTgs).val());
	//alert($(divTgs).val());return false;
	if (str.length > 0) {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
})
/*function SiteSearch404(send_url, divTgs) {
	var str = $.trim($(divTgs).val());
	//alert($(divTgs).val());return false;
	if (str.length > 0) {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
}
function SiteSearch1(send_url, divTgs) {
	var str = $.trim($(divTgs).val());
	if (str.length > 0) {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
}*/

//搜索加载更多
function loadMoreSearch(obj,url,k){
	//防止多次点击重复加载
	$(obj).hide();
	$(obj).siblings('.resultCheckMore').show();
	var pageindex = $(obj).attr('pageindex');
	var oneid = $(obj).siblings('.resultList').find('ul').children('li').eq(0).attr('oneid');
	var local = localStorage.getItem("pageIndex") ? localStorage.getItem("pageIndex"):oneid;
	$.ajax({
		 type:'post',
		 data:"key="+k+"&pageindex="+pageindex,
		 url:url,
		 //async:false,
		 dataType:'json',
		 success:function(res){
		 	console.log(res)
			if(res.List.length>0){
				var con = '';
				if(local!=res.List[0].id){
					for(var i=0;i<res.List.length;i++){
						con+='<li>';
						con+='	<h4 class="resultListTitle"><a href="'+res.List[i].link_url+'"';
						if(res.List[i].parent_id==69){
							con+=' onclick="menunav(2,21)"';
						}else if(res.List[i].parent_id==65){
							con+=' onclick="menunav(3,31)"';
						}else if(res.List[i].parent_id==53){
							con+=' onclick="menunav(1,11)"';
						}else{
							con+=' onclick="menunav(1,12)"';
						}
						con+='>'+res.List[i].title+'</a></h4>';
						con+='	<p class="resultListTime">'+formatDates(res.List[i].add_time.replace("/Date(","").replace(")/",""))+'</p>';
						con+='	<p class="resultListContent">'+res.List[i].zhaiyao+'</p>	';
						con+='</li>';
					}
					localStorage.setItem("pageIndex",res.List[0].id);
					$(obj).siblings('.resultList').children('ul').append(con);
					$(obj).attr('pageindex',parseInt(pageindex)+1);
					$(obj).show();
					$(obj).siblings('.resultCheckMore').hide();
				}else{
					$(obj).hide();
					$(obj).siblings('.resultCheckMore').hide();
				}
			}
		 }
		
	});
	return false;
}

    function formatDates(st)   { 
    	var date = new Date(parseInt(st));
		Y = date.getFullYear() + '-';
		M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		D = date.getDate() <10 ? '0'+date.getDate() : date.getDate() + ' ';
		/*h = date.getHours() + ':';
		m = date.getMinutes() + ':';
		s = date.getSeconds();*/
		return Y+M+D
	  //return new Date(parseInt(nS)).toLocaleString().replace(/\//g, "-").substring(0,10);       
	}     
              
             
function ChangeDateFormat(cellval) {

        var date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));

        return date;
    }
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,                 //月份 
            "d+": this.getDate(),                    //日 
            "h+": this.getHours(),                   //小时 
            "m+": this.getMinutes(),                 //分 
            "s+": this.getSeconds(),                 //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds()             //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    function getMonthToEnglish(month)
    {
        switch (month)
        {
            case 1:
                returnValue = "Jan";
                break;
            case 2:
                returnValue = "Feb";
                break;
            case 3:
                returnValue = "Mar";
                break;
            case 4:
                returnValue = "Apr";
                break;
            case 5:
                returnValue = "May";
                break;
            case 6:
                returnValue = "Jun";
                break;
            case 7:
                returnValue = "Jul";
                break;
            case 8:
                returnValue = "Aug";
                break;
            case 9:
                returnValue = "Sep";
                break;
            case 10:
                returnValue = "Oct";
                break;
            case 11:
                returnValue = "Nov";
                break;
            case 12:
                returnValue = "Dec";
                break;
            default:
                break;
        }
        return returnValue;
    }
    //获取字符串长度（汉字算两个字符，字母数字算一个）
    function getByteLen(val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        return len;
    }
