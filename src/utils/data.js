
export function dbSet (){
  // db 시작
  let cusDB = indexedDB.open('cusDB',1);
  let db;



if(!window.indexedDB){
  // 브라우저가 indexedDB를 지원하지 않을 시;
  window.alert("현재 브라우저는 indexedDB를 지원하지 않습니다.");
} else {
  //성공
  cusDB.onsuccess = e => {
      db = e.target.result;

  }
  // 에러
  cusDB.onerror = e =>{
      console.log("error", e)
  }
  // 업데이트가 필요할 경우 (버전이 다를 시)
  cusDB.onupgradeneeded = e => {
    // db에 이벤트 값 받아오기
      db = e.target.result;
      if(!db.objectStoreNames.contains('todoList')){
          db.createObjectStore('todoList', {keyPath: 'id',autoIncrement:true} )
          console.log('생성');
      };
  }
}

// db 끝
}

// db 데이터 추가
export function dbAdd(title, timeH,timeM , content){

  return new Promise((resolve, reject)=>{

    let tit = title;
    let timH = timeH
    let timM = timeM
    let con = content;
    let cusDB = indexedDB.open('cusDB',1);
    let db;
    cusDB.onsuccess = e => {

        db = e.target.result;
        const transaction = db.transaction('todoList', 'readwrite');
        const objStore = transaction.objectStore('todoList');
        const addReq = objStore.add({
            title : tit,
            time: timH +":"+timM,
            content : con,
        });
        addReq.onsuccess =function(e){
            resolve(e)

        }
        addReq.onupgradeneeded =function(e){
          console.log(e);
  
      }
      addReq.onerror = function (e) {
        reject(new Error('Error adding item to IndexedDB'));
      };
  
    }
    cusDB.onerror = (e) => {
      reject(new Error('Error opening IndexedDB'));
    };

  })

};



// 2023.08.10 에 커밋했던 처리시간때문에 못받아오던 리턴값을 promise를 사용해서 해결
// 블로그에 업로드 해보기
// 해결완

export function dbGetAll(){
  return new Promise ((resolve) =>{
    let cusDB = indexedDB.open('cusDB',1);
  let db;
  let ret = [];
  cusDB.onsuccess = (e)=>{
    db = e.target.result;

    const transaction = db.transaction('todoList','readonly');
    const objStore = transaction.objectStore('todoList');
    const dbCursor = objStore.openCursor();
    
    dbCursor.onsuccess = (e)=>{
      let cursor = e.target.result;
      if(cursor){
        // console.log(cursor)
        ret = [...ret, cursor.value]
        cursor.continue();
      }else{

        resolve(ret)
      }
    }
  }
  })
}