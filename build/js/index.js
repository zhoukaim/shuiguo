"use strict";var scro=new BScroll("#scroll");btn.onclick=function(){box.classList="active"},save.onclick=function(){var t="";t+=" <dl>\n    <dt>分类名称："+ipt.value+"</dt>\n    <dd>添加时间 "+(new Date).getFullYear()+"年"+((new Date).getMonth()+1)+"月"+(new Date).getDate()+"日</dd>\n</dl>",dlbox.innerHTML+=t,ipt.value="",box.classList=""},quit.onclick=function(){box.classList=""};