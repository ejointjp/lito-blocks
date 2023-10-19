const $src = document.querySelector("body");

if ($src) {
  const $headings = $src.querySelectorAll(
    "h2:not(.toc-exclude), h3:not(.toc-exclude)",
  );
  const $toc = document.querySelectorAll(".toc");

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

      $headings.forEach(($heading) => {
        console.log("i", i);
        console.log("J", j);
        // const $heading = $headings[i]

        const numberH3 = `${i}-${j}`;
        console.log("tagNzme", $heading.tagName === "H3");

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
        $tocAnchor.insertBefore($tocNumber, $tocAnchor.firstChild);
        $tocList.appendChild($tocItem);

        if ($heading.tagName === "H2") {
          i++;
          j = 1;
          $tocAnchor.classList.add("toc-a", "toc-a-h2");
          $tocAnchor.href = "#su-toc-item-" + i;
          $tocNumber.innerText = i + ".";
          console.log("i", i);
        } else {
          $tocAnchor.classList.add("toc-a", "toc-a-h3");
          $tocAnchor.href = `#su-toc-item-${numberH3}`;
          $tocNumber.innerText = numberH3 + ".";
          j++;
        }

        // 記事内の見出しにアンカーをつける
        if (index === 0) {
          const $anchor = document.createElement("span");
          if ($heading.tagName === "H2") {
            $anchor.id = "su-toc-item-" + i;
          } else {
            $anchor.id = "su-toc-item-" + numberH3;
          }
          $anchor.classList.add("su-toc-anchor");
          $heading.parentNode.insertBefore($anchor, $heading);
        }
      });
    });
  }
}
