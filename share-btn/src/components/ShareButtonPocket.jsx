import { FaGetPocket } from 'react-icons/fa'

const ShareButtonPocket = ({ url }) => {
  const href = 'https://getpocket.com/save?url=' + url

  return (
    <a className="share-btn-item" href={href} target="_blank" rel="nofollow noopener noreferrer">
      <FaGetPocket className="share-btn-icon share-btn-icon-pocket" />
      <span className="share-btn-label">Pocket</span>
    </a>
  )
}

export default ShareButtonPocket
