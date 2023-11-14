import { FaTwitter } from "react-icons/fa";

const ShareButtonTwitter = ({ title, url, via, hashtags }) => {
  const params = {
    text: title,
    url: url,
    via: via,
    hashtags: hashtags,
  };

  const queryString = new URLSearchParams(params).toString();
  const href = "https://twitter.com/intent/tweet?" + queryString;

  return (
    <a
      className="share-btn-item"
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <FaTwitter className="share-btn-icon share-btn-icon-twitter" />
      <span className="share-btn-label">ツイート</span>
    </a>
  );
};

export default ShareButtonTwitter;
