
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
      console.log("연결");
      db = e.target.result;
      console.log(db)
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
export function dbAdd(title, time , content){

  let tit = title;
  let tim = time
  let con = content;
  let cusDB = indexedDB.open('cusDB',1);
  let db;
  cusDB.onsuccess = e => {
    
      console.log(e)
      db = e.target.result;
      const transaction = db.transaction('todoList', 'readwrite');
      const objStore = transaction.objectStore('todoList');
      const addReq = objStore.add({
          title : tit,
          time: tim,
          content : con,
      });
      addReq.onsuccess =function(e){
          console.log(e);
      }
      addReq.onerror = e =>{
          console.log('error', e.name)
      }

  }
  cusDB.onerror = e =>{
      console.log("error", e.target.error)
  }
}


export function dbGetAll(){
  let cusDB = indexedDB.open('cusDB',1);
  let db;
  cusDB.onsuccess = (e)=>{
    db = e.target.result;

    const transaction = db.transaction('todoList','readonly');
    const objStore = transaction.objectStore('todoList');
    const dbCursor = objStore.openCursor();

    dbCursor.onsuccess = (e)=>{
      let cursor = e.target.result;
      if(cursor){
        console.log(cursor)
        console.log(cursor.value);
        cursor.continue();
      }else{
        console.log('end')
      }
      
    }

  }
}