const $src = document.querySelector(".entry-content");

if ($src) {
  const $headings = $src.querySelectorAll(
    "h2:not(.toc-exclude), h3:not(.toc-exclude)",
  );
  const $toc = document.querySelectorAll(".toc");

  // 見出しの数が2以上なら目次を生成
  if ($headings.length > 1) {
    $toc.forEach((toc, index) => {
      // .tocにクラスを追加
      toc.classList.add("not-prose");

      // 目次のタイトルを作成
      const $tocTitle = document.createElement("h2");
      $tocTitle.classList.add("toc-title", "not-heading");
      $tocTitle.innerText = "目次";
      toc.appendChild($tocTitle);

      // 目次のリストを作成
      const $tocList = document.createElement("ol");
      $tocList.classList.add("toc-list");
      toc.appendChild($tocList);

      let i = 0; // h2に 1 みたいにつけるナンバー
      let j = 1; // h3に 1-1 みたいにつけるサブナンバー

      // 見出しをループで処理
      $headings.forEach(($heading) => {
        // 新しいコード：IDの取得または設定
        let anchorId;
        if ($heading.id) {
          // 既存のIDがあればそれを使う
          anchorId = $heading.id;
        } else {
          // IDがなければ新しいIDを生成して設定
          if ($heading.tagName === "H2") {
            i++;
            anchorId = "su-toc-item-" + i;
          } else {
            anchorId = "su-toc-item-" + `${i}-${j}`;
            j++;
          }
          $heading.id = anchorId;
        }

        // 目次内の見出しを作成
        const $tocItem = document.createElement("li");
        $tocItem.classList.add("toc-item");

        const $tocAnchor = document.createElement("a");
        const $tocLabel = document.createElement("span");

        $tocLabel.classList.add("toc-label");
        $tocLabel.innerText = $heading.innerText;
        $tocAnchor.appendChild($tocLabel);
        $tocItem.appendChild($tocAnchor);

        // 番号を付与
        const $tocNumber = document.createElement("span");
        $tocNumber.classList.add("toc-number");

        if ($heading.tagName === "H2") {
          $tocAnchor.classList.add("toc-a", "toc-a-h2");
          $tocAnchor.href = "#" + anchorId;
          $tocNumber.innerText = i + ".";
        } else {
          $tocAnchor.classList.add("toc-a", "toc-a-h3");
          $tocAnchor.href = "#" + anchorId;
          $tocNumber.innerText = `${i}-${j}.`;
        }

        $tocAnchor.insertBefore($tocNumber, $tocAnchor.firstChild);
        $tocList.appendChild($tocItem);
      });
    });
  }
}
