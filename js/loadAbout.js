$(function() {
    $.getJSON("temp/about.json", function(data) {
        //console.log(data);
        var str = "<ul>";
        $.each(data.data, function(i, n) {
            str += "<br />";
            str += "<li>" + n.date + " - " + n.title + "</li>";
            str += "<li>author:" + n.author + "</li>";
            str += "<li> note :" + n.content + "</li>";
        })
        str += "</ul>";
        $("#kfrz").append(str);
        //alert(str)
    });
});