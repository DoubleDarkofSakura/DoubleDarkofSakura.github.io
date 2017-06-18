var exchangeContent = "<h1>404 Not Found</h1>";
var exchangeButton = "";

if (pageIndex=="add_markdown") {
	exchangeContent = ""
		+"<br />"
		+"标题："+addHTML("input","blogTitle","")
		+"<br />"
		+"类型："+addHTML("input","blogType","");
	exchangeButton = makeButton("add","提交");
}

if (pageIndex.split("_")[0]=="list") {
	exchangeContent = marked("# Hello\n> Hello");
	//exchangeButton = makeButton("talk","提交");
}

var blogText = "";
if (pageIndex.split("_")[0]=="markdown") {
	$.ajax({
		type: "post",
		url: config.url+"/DDoSblogAPI/blog/download?randID="+Math.random(),
		data: {
			"id": pageIndex.split("_")[1],
		},
		dataType:"json",
		error: function() {
			// alert('');
		},
		xhrFields: { withCredentials: true },
		success: function(data) {
			blogText = data.msg;
			if (data.state=="success") {
				//exchangeContent = marked(blogText);
				exchangeContent = simplemde.markdown(blogText);
				document.getElementById("blogContent").innerHTML = exchangeContent;
			}
		}
	});

	exchangeButton = makeButton("addBlog","载入")+makeButton("changeBlog","修改");
}

document.getElementById("blogContent").innerHTML = exchangeContent;
document.getElementById("blogButton").innerHTML = exchangeButton;

function addHTML(type, id, text) {
	return "<"+type+" id=\""+id+"\">"+text+"</"+type+">";
}

function makeButton(id, text) {
	return "<button class=\"bar\" id=\""+id+"\">"+text+"</button>";
}

$(document).on("click","button#add",function(){
	var text = document.getElementById("editor").value;
	$.ajax({
		type: "post",
		url: config.url+"/DDoSblogAPI/blog/upload?randID="+Math.random(),
		data: {
			"id": -1,
			"title": document.getElementById("blogTitle").value,
			"type": document.getElementById("blogType").value,
			"text": text,
		},
		dataType:"json",
		error: function() {
			// alert('');
		},
		xhrFields: { withCredentials: true },
		success: function(data) {
			console.log("请求完成:<"+data.state+";"+data.msg+">");
			if (data.state=="success") {
				alert("提交成功\n"+data.msg);
				window.location.href = "blog.html?index=list_all";
			}else{
				alert(data.msg);
			}
		}
	});
});

$(document).on("click","button#addBlog",function(){
	simplemde.value(blogText);
});

$(document).on("click","button#changeBlog",function(){
	var text = document.getElementById("editor").value;
	$.ajax({
		type: "post",
		url: config.url+"/DDoSblogAPI/blog/update?randID="+Math.random(),
		data: {
			"id": pageIndex.split("_")[1],
			"title": "",
			"type": "",
			"text": text,
		},
		dataType:"json",
		error: function() {
			// alert('');
		},
		xhrFields: { withCredentials: true },
		success: function(data) {
			console.log("请求完成:<"+data.state+";"+data.msg+">");
			if (data.state=="success") {
				alert("修改成功");
				window.location.href = "blog.html?index=list_all";
			}else{
				alert(data.msg);
			}
		}
	});
});