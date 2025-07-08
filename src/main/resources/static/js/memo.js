const buildHTML = (XHR) => {
  const item = XHR.response;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.createdAt}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
  // XHR.open("POST", "/post", true);  //「posts」→「post」にする
  // レスポンスのデータフォーマット（＝型）にJSONを指定
  XHR.responseType = "json";
  // リクエストを送信
  XHR.send(formData);
  // リクエストの送信に成功した場合の処理
  XHR.onload = () => {
    // console.log(XHR.response);
    // レスポンスが正常に帰ってこなかった場合
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.response.error}`);
      return null;
    };
    const list = document.getElementById("list");
    const formText = document.getElementById("content");
    // console.log(formText.value);
    // const item = XHR.response;
    // const html = `
    //   <div class="post">
    //     <div class="post-date">
    //       投稿日時：${item.createdAt}
    //     </div>
    //     <div class="post-content">
    //       ${item.content}
    //     </div>
    //   </div>`;
    // id=listの要素の直後にhtmlのHTMLを挿入
    // list.insertAdjacentHTML("afterend", html);
    list.insertAdjacentHTML("afterend", buildHTML(XHR));
    formText.value = "";
  };
 });
};

// ページが読み込まれたら実行される
window.addEventListener('load', post);