//marker에 대한 데이터를 별도로 관리
let days = new Date();
const year = days.getFullYear();
const month = days.getMonth() + 1;
const day = days.getDate();

let todayDate = `${year}.${month}.${day}`;

var data = [
  //위치 정보 , 컨텐츠
  {
    title: '서울',
    content: '서울 남산',
    date: todayDate,
    lat: 37.552873,
    lng: 126.983544,
  },
  {
    title: '서울',
    content: '서울 용산',
    date: todayDate,
    lat: 37.532768,
    lng: 126.990054,
  }
]
//위도 37.552873,경도 126.983544  //37.532768, 126.990054