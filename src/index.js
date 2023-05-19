import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  console.log(inputText);
  //   alert(inputText);

  // div生成
  const div = document.createElement("div");
  // divにcssのclassNameを挿入する
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  // liにinputTextを格納する
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
/*add-buttonというidに対して*/ /*onClickAddというclickイベントを実行する*/
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
});
