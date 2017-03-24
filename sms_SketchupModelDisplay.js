<html><head>
<script type="text/javascript" src="../../ClientGlobalContext.js.aspx"></script>

<meta>

<script type="text/javascript">
  document.onreadystatechange = function () {
   if (document.readyState == "complete") {
                 var Xrm = window.parent.Xrm;
		 var modelURL = Xrm.Page.getAttribute("sms_sketchup3dmodelurl");
		 if(modelURL){
                        document.write("Please click on below image to view in 3D<br>");
                        vals = modelURL.getValue().split("id=");
		        document.write("<iframe src=\"https://3dwarehouse.sketchup.com/embed.html?mid=");
                        document.write(vals[1]);
                        document.write("&amp;width=580&amp;height=326\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" width=\"580\" height=\"326\" allowfullscreen=\"\"></iframe>");
		 }
    }
   }
</script>
<meta><meta><meta></head><body style="word-wrap: break-word;"></body></html>