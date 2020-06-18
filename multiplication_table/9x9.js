//通过生成一个表格，在每个格子里面输出
document.write("<table>");   
//运用2层for循环来进行
for (var x = 1; x <= 9; x++)  
{  
    document.write("<tr>");  
    for (var y = 1; y <= x; y++)  
    {  
        document.write("<th>"+y+"*"+x+"="+y*x+"</th>");  
		 
    }  
}  
document.write("</table>");