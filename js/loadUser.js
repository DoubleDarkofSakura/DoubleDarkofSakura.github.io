function makeAction(action, name, url) {
	return "<a id=\"action_"+action+"\" class=\"bar\" href=\""+url+"\" target=\"_parent\">"+name+"</a>";
}

$(document).on("click","button#login",function(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	$.ajax({
		type: "post",
		url: config.url+"/DDoSblogAPI/user/login?randID="+Math.random(),
		data: {
			"username": username,
			"password": password
		},
		dataType:"json",
		error: function() {
			// alert('');
		},
		xhrFields: { withCredentials: true },
		success: function(data) {
			console.log("请求完成:<"+data.state+";"+data.msg+">");
			if (data.state=="success") {
				$.cookie('username', username);
				window.location.href="main.html";
			}else{
				alert(data.msg);
			}
		}
	});
});

$(document).on("click","button#logout",function(){
	$.ajax({
		type: "post",
		url: config.url+"/DDoSblogAPI/user/logout?randID="+Math.random(),
		dataType:"json",
		error: function() {
			// alert('');
		},
		xhrFields: { withCredentials: true },
		success: function(data) {
			console.log("请求完成:<"+data.state+";"+data.msg+">");
			window.location.href="main.html";
		}
	});
});

$(document).on("click","button#register",function(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var pass = document.getElementById("pass").value;
	var mail = document.getElementById("mail").value;
	if (password==pass) {
		$.ajax({
			type: "post",
			url: config.url+"/DDoSblogAPI/user/register?randID="+Math.random(),
			dataType:"json",
			data: {
				"username": username,
				"password": password,
				"data": mail
			},
			error: function() {
				// alert('');
			},
			xhrFields: { withCredentials: true },
			success: function(data) {
				console.log("请求完成:<"+data.state+";"+data.msg+">");
				if (data.state=="success") {
					window.location.href="main.html";
				}else{
					alert(data.msg);
				}
			}
		});
	}else{
		alert("请输入一致的密码");
	}
});

$(document).on("click","button#changePassword",function(){
	console.log("login username="+$.cookie('username'));
	var oldpass = document.getElementById("oldpass").value;
	var password = document.getElementById("password").value;
	var pass = document.getElementById("pass").value;
	if (password==pass) {
		$.ajax({
			type: "post",
			url: config.url+"/DDoSblogAPI/user/changePassword?randID="+Math.random(),
			data: {
				"oldPass": oldpass,
				"newPass": password,
			},
			dataType:"json",
			error: function() {
				// alert('');
			},
			xhrFields: { withCredentials: true },
			success: function(data) {
				console.log("请求完成:<"+data.state+">");
				console.log("请求完成:<"+data.msg+">");
				$("#result").append("islogin="+data);
				if (data.state=="success") {
					alert("修改成功！");
				}else{
					alert("修改失败！");
				}
				window.location.href="main.html";
			}
		});
	}else{
		alert("请输入一致的密码");
	}
});

$(document).on("click","button#home",function(){
	window.location.href="main.html";
});


$(function() {
	$.ajax({
		type: "post",
		url: config.url+"/DDoSblogAPI/user/name?randID="+Math.random(),
		dataType:"json",
		error: function() {
			// alert('');
		},
		xhrFields: { withCredentials: true },
		success: function(data) {
			console.log("请求完成:<"+data.state+">");
			console.log("请求完成:<"+data.msg+">");
			$("#result").append("islogin="+data);
			if (data.state=="success") {
				$("#headuser").append(""
					+"<div class=\"sidebar2\"><ul>"
					+"<li><a class=\"bar\" href=\"javascript:void(0);\">"+data.msg+" ,您好</a><ul>"
					+"<li><a class=\"bar\" href=\"changePassword.html\">修改密码</a></li>"
					+"<li><a class=\"bar\" href=\"blog.html?index=list_all\">我的博客</a></li>"
					+"<li><button class=\"bar\" id=\"logout\">退出</button>"
					+"</ul></li></ul></div>");
			}else{
				$("#headuser").append(""
					+makeAction("", "登录", "login.html")
					+makeAction("", "注册", "register.html")
					+"");
			}
		}
	});
});