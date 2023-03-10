//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

// .env  (environment)  - gitignore
// const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`

const getNews = async () => {
    const API_KEY = "e2a4cac7b4f74c1f907c802cdd739022"
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e2a4cac7b4f74c1f907c802cdd739022`
  
    try {
      const res = await fetch(URL)
      if (!res.ok) {
        throw new Error("Smething went wrong")
      }
      const data = await res.json()
      console.log(data.articles)
    } catch (error) {
      renderError(error)
    }
  }
  
  const renderError = (err) => {
    console.log(err)
    
  }
  
  getNews()
  