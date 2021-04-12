var now = new Date();  // 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듬
var firstDay = new Date('2009-06-08'); // 처음 만난 날의 날짜 정보를 firstDat 객체로 만듬

var toNow = now.getTime();  // 오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime();  // 처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst;  // 처음 만난 날과 오늘 사이의 차이 (밀리초 값)

var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));
// 밀로초를 날짜 수로 변환한 후 반올림(Math.round)
// 1일 = 24시간 * 60분 * 60초 * 1000 밀리초

document.querySelector('#accent').textContent = passedDay + '일';


function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);
    
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    
document.querySelector('#date' + days).textContent = year + '년 ' + month + '월 ' + date + '일';
}

calcDate(100)
calcDate(200)
calcDate(365)
calcDate(500)
