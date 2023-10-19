import { SiHatenabookmark } from 'react-icons/si'

const ShareButtonHatebu = ({ url }) => {
  const href = 'https://b.hatena.ne.jp/entry/' + url

  return (
    <a className="share-btn-item" href={href} target="_blank" rel="nofollow noopener noreferrer">
      <SiHatenabookmark className="share-btn-icon share-btn-icon-hatebu" />
      <span className="share-btn-label">ブックマーク</span>
    </a>
  )
}

export default ShareButtonHatebu
