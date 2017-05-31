$(function(){
    //一、表格中的复选框选择事件
    var ckall = document.getElementById("checkAll");
    var cks = document.getElementsByName("check");
    ckall.onclick = function(){
        for (var i = 0; i < cks.length; i++) {
            cks[i].checked = ckall.checked;
        }
    }
    for (var i = 0; i < cks.length; i++) {
        // 给每一个单个的复选框注册单击事件
        cks[i].onclick = function(){
            //先假设所有的单个复选框都打钩
            var flag = true;
            for (var j = 0; j < cks.length; j++) {
                if(!cks[j].checked){
                    flag = false;
                    break;
                }
            }
            //根据假设的结果对checkall进行打钩或者不打钩
            ckall.checked = flag;
        }
    }


})
