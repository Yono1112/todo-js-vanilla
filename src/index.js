import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  // divにcssのclassNameを挿入する
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  // liにinputTextを格納する
  li.innerText = inputText;

  // ボタンタグ(完了)を生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    // 指定された要素を削除する関数
    deleteFromIncompleteList(addTarget);
    // 完了、削除ボタンのタグを削除する
    addTarget.removeChild(completeButton);
    addTarget.removeChild(deleteButton);

    // 戻すボタンのタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      // 押された戻すボタンの親たぐ(div)を未完了リストから削除
      document.getElementById("complete-list").removeChild(deleteTarget);
      // 戻すボタンのタグを削除する
      deleteTarget.removeChild(backButton);
      // 完了と削除ボタンを生成
      deleteTarget.appendChild(completeButton);
      deleteTarget.appendChild(deleteButton);
      // 未完了のTODOリストに追加
      document.getElementById("incomplete-list").appendChild(deleteTarget);
    });
    addTarget.appendChild(backButton);
    // 完了したTODOリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // ボタンタグ(削除)を生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

/*add-buttonというidに対して*/ /*onClickAddというclickイベントを実行する*/
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
});
