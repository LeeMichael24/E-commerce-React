import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";
import Hasbi from "../../../assets/hasbi.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1> Sales </h1>
          <p>
            Shop our e-commerce store for a diverse range of products, from
            clothing to electronics, with fast and reliable shipping options.
            Experience the convenience of online shopping today!
          </p>
          <div className="ctas">
            <div className="banner-cta"> Read More </div>
            <div className="banner-cta v2"> Shop Now </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
        {/* hasbi Pic */}
        {/* <img className="banner-img" src={Hasbi} alt="" /> */}
      </div>
    </div>
  );
};

export default Banner;
