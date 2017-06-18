$(function() {
	$.getJSON("temp/menu.json", function(data) {
		var temp = "<ul>";
		$.each(data.data, function(i, n) {
			/*
			var temp = "<a class=\"bar\" href=\""
				+n.url+"?index="+n.index
				+"\" target=\"_parent\">"
				+n.name
				+"</a>";*/
			temp+="<li><a class=\"bar\" href=\""
				+n.url+"?index="+n.index+"_"+n.id
				+"\">"+n.name+"</a>";
			var TEMP = false;
			$.each(n.child, function(j, m) {
				if (j==0) {
					temp+="<ul>";
					TEMP = true;
				}
				temp+="<li><a class=\"bar\" href=\""
					+m.url+"?index="+m.index+"_"+m.id
					+"\">"+m.name+"</a></li>";
			});
			if (TEMP) {
				temp+="</ul>";
			}
			temp+="</li>";
		});
		temp+="</ul></div>";
		$("#topbar").append("<div class=\"topbar2\">"+temp);
		$("#sidebar").append("<div class=\"sidebar2\">"+temp);
    });
});