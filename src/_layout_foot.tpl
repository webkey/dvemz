<!-- >>> foot.tpl <<< -->
<!--footer-->
@@if(context.site === "dvemz") {
	@@include('_layout_footer.tpl')
}
@@if(context.site === "ea") {
	@@include('_layout_footer--ea.tpl')
}
<!--footer end-->

<!--Map-->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnFqiG7GVEuZZeE5XCILGj1Tqz1KOMye8&sensor=false&extension=.js&language=ru"></script>
<script src="js/jquery.min.js"></script>
<script src="js/libs.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>