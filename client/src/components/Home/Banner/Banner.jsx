import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptatum accusamus adipisci sit odit. Nesciunt, eaque distinctio
            incidunt vel enim laudantium, necessitatibus qui fugit accusantium
            non totam repellat id quisquam eligendi voluptates. Eius odio
            dignissimos quos aliquid accusantium voluptas, atque soluta, id
            saepe ad quibusdam veniam numquam reiciendis mollitia tempore.
          </p>
          <div className="ctas">
            <div className="banner-cta"> Read More </div>
            <div className="banner-cta v2"> Shop Now </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
