$("#types").mouseover(function() {
	$("#types a i:last").removeClass("fa-angle-down");
	$("#types a i:last").addClass("fa-angle-up");
});
$("#types").mouseout(function() {
	$("#types a i:last").removeClass("fa-angle-up");
	$("#types a i:last").addClass("fa-angle-down");
});
var count = 0;
$("i.fa-angle-down").click(function() {
	count++;
	if (count % 2 == 1) {
		$(this).removeClass("fa-angle-down");
		$(this).addClass("fa-angle-up");
		$(this).prev().css("-webkit-line-clamp", "none");
	} else {
		$(this).removeClass("fa-angle-up");
		$(this).addClass("fa-angle-down");
		$(this).prev().css("-webkit-line-clamp", "1");
	}
});
$("#UL li").mouseover(function() {
	$("li.on").removeClass("on");
	$(this).addClass("on");
});
$("#Money ul li").click(function() {
	$("#Money ul li a.border-danger").removeClass("border-danger");
	$(this).children("a").addClass("border-danger");
});
$("#Way ul li").click(function() {
	$("#Way ul li a.border-danger").removeClass("border-danger");
	$(this).children("a").addClass("border-danger");
});
function draw() {
	var canvas = document.getElementById('canvas');
	if (canvas.getContext){
	var ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.arc(30, 30, 30, 0, Math.PI * 2, true); // 绘制
	ctx.moveTo(50, 30);
	ctx.arc(30, 30, 20, 0, Math.PI, false);   // 口(顺时针)
	ctx.moveTo(22, 20);
	ctx.arc(20, 20, 4, 0, Math.PI * 2, true);  // 左眼
	ctx.moveTo(42, 20);
	ctx.arc(40, 20, 4, 0, Math.PI * 2, true);  // 右眼
	ctx.stroke();
  }
}
$("#sear_text").focus(function(){
	$("#sear_list").css("display","block");
});
$("#sear_text").blur(function(){
	$("#sear_list").css("display","none");
});
$("#sear_list li").mouseover(function(){
	$(this).addClass("bg-light");
});
$("#sear_list li").mouseout(function(){
	$(this).removeClass("bg-light");
});
$("#nav ul li a").not(".border-bottom").mouseover(function(){
	$(this).addClass("border-bottom border-info");
});
$("#nav ul li a").not(":eq(0)").mouseout(function(){
	$(this).removeClass("border-bottom border-info");
});
$("#nav ul li").click(function () {
	$("#nav ul li a.border-bottom").removeClass("border-bottom border-info");
	$(this).children().addClass("border-bottom border-info");
})