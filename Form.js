var v = new Vue({
    el: "#form",
    data:{
        check1:false,
        check2:false,
        check3:false,
        check4:false,
        total:0,
        ser1:300,
        ser2:400,
        ser3:250,
        ser4:220,
    },
    methods:{
        calcPrice:function(num){
            if(num==1)
            { 
                if (this.check1==true)
                this.total+=this.ser1;
                else 
                this.total-=this.ser1;
            }
            else if(num==2)
            { if (this.check2==true)
                this.total+=this.ser2;
              else 
                this.total-=this.ser2;
            }
            else if(num==3)
            { 
                if (this.check3==true)
                this.total+=this.ser3;
              else 
                this.total-=this.ser3;
            }
            else if(num==4)
            {
                 if (this.check4==true)
                this.total+=this.ser4;
                 else 
                this.total-=this.ser4;
            }
        },
        changeColor1:function(){
            if(this.check1==true)
            return "background-color: rgb(228, 72, 132)";
        },
        changeColor2:function(){
            if(this.check2==true)
            return "background-color: rgb(228, 72, 132)";
        },
        changeColor3:function(){
            if(this.check3==true)
            return "background-color: rgb(228, 72, 132)";
        },
        changeColor4:function(){
            if(this.check4==true)
            return "background-color: rgb(228, 72, 132)";
        }
    }       
});