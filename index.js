alert("Kaldanov Tolegen, CS-2110s");
function know_current() {
  var myDate=new Date();
  var myFullDate=myDate.getFullYear();
  document.getElementById("year").innerHTML="Year: "+myFullDate;
}{
  const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const a=new Date();
  let day=days.[a.getDay()];
  document.getElementById("day_of_week").innerHTML="Today is:" + day;
}{
  const a = new Date();
  document.getElementById("date").innerHTML ="Date: " + a.getDate();
  }{
  const a = new Date();
  document.getElementById("month").innerHTML ="Month: " + (a.getMonth()+1);
  }{
  const a = new Date();
  document.getElementById("time").innerHTML ="Current time is: " +a.getHours()+":"+ a.getMinutes()+":" + a.getSeconds();
  }
  }
  function days_left(){
  var date1=new Date();
  var date2=new Date("05/31/2024");
  var time_diff=date2.getTime() - date1.getTime();
  var time_diff_days=time_diff/(1000 * 3600 * 24);
  document.getElementById("days_left").innerHTML= time_diff_days + " days left until the freedom!";
  }
  function multiply()
  {
          first_num = document.getElementById("1stNumber").value;
          second_num = document.getElementById("2ndNumber").value;
          document.getElementById("result").innerHTML = "Result is: " + (num1 * num2);
  }

  function divide()
  {
          num1 = document.getElementById("1stNumber").value;
          num2 = document.getElementById("2ndNumber").value;
  document.getElementById("result").innerHTML ="Result is: " +(num1 / num2);
  }
