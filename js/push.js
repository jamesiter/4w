$(document).ready(function(){
	getmsg("when","rst_when");
	getmsg("who","rst_who");
	getmsg("where","rst_where");
	getmsg("do_what","rst_do_what");
});

function getmsg(cid,toel) {
	$.get("http://" + MYDOMAIN + "/sub?id=" + cid,null,function(response){
	        $("#" + toel).append("</br>" + response);
		getmsg(cid,toel);
	});
}

function pushmsg(cid,the_el) {
	$.post("http://" + MYDOMAIN + "/pub?id=" + cid,$("#" + the_el).val());
	$("#" + the_el).val(null);
};
