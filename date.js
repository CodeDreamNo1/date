Date.prototype.format = function() { //时间戳转日期扩展
        var s = '';
        var mouth = (this.getMonth() + 1)>=10?(this.getMonth() + 1):('0'+(this.getMonth() + 1));
        var day = this.getDate()>=10?this.getDate():('0'+this.getDate());
        s += this.getFullYear() + '-'; // 获取年份。
        s += mouth + "-"; // 获取月份。
        s += day; // 获取日。
        return (s); // 返回日期。
    };
    function convertTimes( date ){ //日期转毫秒方法
        if(date==undefined){
            return false;
        }
        return + new Date(date);

    }//日期转换时间戳
    function getLastDay(year,month) { //获取上个月天数方法
        var new_year = year;    //取当前的年份
        var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）
        if(month>12) {
            new_month -=12;        //月份减
            new_year++;            //年份增
        }
        var new_date = new Date(new_year,new_month,1);                //取当年当月中的第一天
        return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期
    }
    function daynums(date,num,type="daynum") {//计算num个月之前的日期以及天数 type可以传daynum,date默认返回天数
        var month="";
        var nowdaynums=date.substr(8,2)*day;
        var nownums=convertTimes(date)-nowdaynums;
        for(var i=0;i<num;i++){
            if(date.substr(5,2)-1===0){
                month=12;
            }
            nownums-=getLastDay(date.substr(0,4),month?month:date.substr(5,2)-i)*day;
            if(i===num-1){
                nownums+=nowdaynums; //3个月之前的日期时间戳
            };
        }
        if(type==="date"){
            return new Date(nownums).format();
        }else if(type==="daynum"){
            return (convertTimes(date)-nownums)/day;
        }
    }
    function Zero(s) { //日期格式化补零
        return s < 10 ? '0' + s: s;
    }
    function getNextMonth(date) { //获取下个月今天的日期
        var arr = date.split('-');
        var year = arr[0]; //获取当前日期的年份
        var month = arr[1]; //获取当前日期的月份
        var day = arr[2]; //获取当前日期的日
        var days = new Date(year, month, 0);
        days = days.getDate(); //获取当前日期中的月的天数
        var year2 = year;
        var month2 = parseInt(month) + 1;
        if (month2 == 13) {
            year2 = parseInt(year2) + 1;
            month2 = 1;
        }
        var day2 = day;
        var days2 = new Date(year2, month2, 0);
        days2 = days2.getDate();
        if (day2 > days2) {
            day2 = days2;
        }
        if (month2 < 10) {
            month2 = '0' + month2;
        }

        var t2 = year2 + '-' + month2 + '-' + day2;
        return t2;
    };