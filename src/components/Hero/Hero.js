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
        <img src={band?.image_url} className="hero--image" alt="band avatar" />

        <div className="hero--summary">
          <h1 className="hero--name">
            {band?.name}
            {/* TODO: Need "verified" data from the API */}
            <img
              src={verified}
              className="hero--verified"
              alt="verified symbol"
            />
          </h1>

          <p className="hero--details">
            {!!band?.tracker_count && (
              <span className="hero--followers">
                {band?.tracker_count?.toLocaleString("en-US")} Followers
              </span>
            )}

            {!!band?.upcoming_event_count && (
              <span className="hero--shows">
                {band?.upcoming_event_count?.toLocaleString("en-US")} Upcoming
                Shows
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="hero--actions">
        {/* TODO: What should the follow button do? */}
        <Button as="a" target="_blank" href={band?.url}>
          Follow
        </Button>
      </div>
    </div>
  );
}

export default Hero;
