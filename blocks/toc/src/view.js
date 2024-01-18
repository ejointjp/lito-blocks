document.addEventListener('DOMContentLoaded', function () {
  const $src = document.querySelector('.entry-content');

  if ($src) {
    const $headings = $src.querySelectorAll('h2:not(.toc-exclude), h3:not(.toc-exclude)');
    const $tocBlocks = document.querySelectorAll('.wp-block-lito-toc');

    if ($headings.length > 1) {
      $tocBlocks.forEach((toc) => {
        const isHideIfOtherExists = toc.dataset.hideIfOtherExists === 'true';

        // hide-if-other-existsがtrueで他にtocブロックが存在する場合、このブロックを非表示にする
        if (isHideIfOtherExists && $tocBlocks.length > 1) {
          toc.style.display = 'none';
          return; // このブロックの処理をスキップ
        }

        const $tocTitle = document.createElement('h2');
        $tocTitle.classList.add('wp-block-lito-toc-title');
        $tocTitle.innerText = '目次';
        toc.appendChild($tocTitle);

        const $tocList = document.createElement('ol');
        $tocList.classList.add('wp-block-lito-toc-list');
        toc.appendChild($tocList);

        let i = 1; // h2のナンバリングを1から始めます。
        let j = 0; // h3のナンバリング用

        $headings.forEach(($heading) => {
          if ($heading.tagName === 'H2') {
            j = 1; // h2を見つけたらh3のナンバリングを1にリセット
            const anchorHref = $heading.id ? $heading.id : 'litob-toc-item-' + i;
            $heading.id = anchorHref;
            // 目次項目を作成
            createTocItem($tocList, $heading, anchorHref, i + '.', 'h2');
            i++;
          } else if ($heading.tagName === 'H3') {
            const anchorHref = $heading.id ? $heading.id : 'litob-toc-item-' + (i - 1) + '-' + j;
            $heading.id = anchorHref;
            // 目次項目を作成
            createTocItem($tocList, $heading, anchorHref, `${i - 1}-${j}.`, 'h3');
            j++;
          }
        });
      });
    }
  }
});

function createTocItem($tocList, $heading, anchorHref, numberText, headingLevel) {
  const $tocItem = document.createElement('li');
  $tocItem.classList.add('wp-block-lito-toc-item');

  const $tocAnchor = document.createElement('a');
  $tocAnchor.href = '#' + anchorHref;
  $tocAnchor.classList.add('wp-block-lito-toc-a', `wp-block-lito-toc-${headingLevel}`);

  const $tocNumber = document.createElement('span');
  $tocNumber.classList.add('wp-block-lito-toc-number');
  $tocNumber.innerText = numberText;

  const $tocLabel = document.createElement('span');
  $tocLabel.classList.add('toc-label');
  $tocLabel.innerText = $heading.innerText;

  $tocAnchor.appendChild($tocNumber);
  $tocAnchor.appendChild($tocLabel);
  $tocItem.appendChild($tocAnchor);
  $tocList.appendChild($tocItem);
}
