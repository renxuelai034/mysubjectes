  function showImg(){
        let count = 0;
        setInterval(function(){
            let num = count;
            count++;
            if(count>$("#box img").length-1){
                count = 0;
            }

            //循环所有的图片
            $("#box img").each(function(){
                $("#box img").css("display","none");
            })
            //对两张图片进行淡入淡出
                $("#box img").eq(num).fadeOut("slow","linear");
                $("#box img").eq(count).fadeIn("slow","linear");
        },5000);
}



    
