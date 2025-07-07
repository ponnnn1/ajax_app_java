function post (){
  // console.log("イベント発火");
 //リクエストを送信する処理
 const submit = document.getElementById("submit");
//  submit.addEventListener("click", () => {
submit.addEventListener("click", (e) => {
  // ブラウザからリクエストをサーバーに送らないようにする
  e.preventDefault();
  // フォームの要素を取得
  const form = document.getElementById("form");
  // フォームに入力された値を取得
  const formData = new FormData(form);
  // 非同期通信を行うためにXMLHttpRequestオブジェクトを生成
  const XHR = new XMLHttpRequest();
  // リクエストの内容を指定（POSTメソッド、パス、非同期ON）
  XHR.open("POST", "/posts", true);
  // レスポンスのデータフォーマット（＝型）にJSONを指定
  XHR.responseType = "json";
  // リクエストを送信
  XHR.send(formData);
 });
};

// ページが読み込まれたら実行される
window.addEventListener('load', post);