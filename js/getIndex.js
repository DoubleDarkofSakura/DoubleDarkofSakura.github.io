urlinfo=window.location.href; //获取当前页面的url
len=urlinfo.length;//获取url的长度
offset=urlinfo.indexOf("?"); //设置参数字符串开始的位置
//取出参数字符串这里会获得类似“id=1”这样的字符串
newsidinfo=urlinfo.substr(offset+1,len);
newsids=newsidinfo.split("=");
//key=newsids[0];//得到参数名字
//value=newsids[1];//得到参数值
pageIndex = newsids[1];