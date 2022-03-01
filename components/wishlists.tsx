import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const Wishlists = () => (
  <ul>
    <li>
      <a
        href="https://www.amazon.jp/hz/wishlist/ls/1ZGQXE8MOZ3BM?ref_=wl_share"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faAmazon} /> Tools
      </a>
    </li>
    <li>
      <a
        href="https://www.amazon.jp/hz/wishlist/ls/10NBRCXBA42XF?ref_=wl_share"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faAmazon} /> Foods
      </a>
    </li>
  </ul>
);

export default Wishlists;
