import { FaFacebookF } from 'react-icons/fa'

const ShareButtonFacebook = ({ url }) => {
  const href = 'https://www.facebook.com/sharer/sharer.php?u=' + url

  return (
    <a className="share-btn-item" href={href} target="_blank" rel="nofollow noopener noreferrer">
      <FaFacebookF className="share-btn-icon share-btn-icon-facebook" />
      <span className="share-btn-label">シェア</span>
    </a>
  )
}

export default ShareButtonFacebook
