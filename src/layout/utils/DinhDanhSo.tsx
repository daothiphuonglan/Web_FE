
function dinhDangSo (x:number|undefined){
       if(x===undefined){
            return 0;
       }
       if((isNaN(x))){
         return 0;
       }

       // Su dung ham toLocaleString de dinh dang so 

       return x.toLocaleString("vi-VN");
}

export default dinhDangSo;