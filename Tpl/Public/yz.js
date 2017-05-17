function validate()
{
	var column=document.getElementById("one");
	var about=document.getElementById("about");
	var title=document.getElementById("title");
	var poster=document.getElementById("poster");
	var content=document.getElementById("content");
	

	if(column.value=="0"){
		window.alert("文章类型必选");
		return false;
	}else if(about.value==" "){
		window.alert("文章所属不能为空");
		return false;
	}else if(title.value==" "){
		window.alert("标题不能为空");
		return false;
	}else if(poster.value==" "){
		window.alert("发布人不能为空");
		return false;
	}else if(content.value==" "){
		window.alert("文章内容不能为空");
		return false;
	}else{
		return true;
	}
	
}