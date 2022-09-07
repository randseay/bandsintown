import verified from "./verified.svg";
import "./Hero.css";

import Button from "../Button/Button";

function Hero({ band }) {
  return (
    <div className="hero">
      <div
        className="hero--bg"
        style={{ backgroundImage: `url(${band?.image_url})` }}
      />

      <div className="hero--info">
        <img src={band?.image_url} className="hero--image" alt="band-image" />

        <div className="hero--summary">
          <h1 className="hero--name">
            {band?.name}
            <img src={verified} alt="band-image" />
          </h1>

          <p className="hero--details">
            <span className="hero--followers">
              {band?.tracker_count} Followers
            </span>

            <span className="hero--shows">
              {band?.upcoming_event_count} Upcoming Shows
            </span>
          </p>
        </div>
      </div>

      <div className="hero--actions">
        <Button>Follow</Button>
      </div>
    </div>
  );
}

export default Hero;
