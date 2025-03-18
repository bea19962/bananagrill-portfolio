import "../styles/_videoBackground.scss";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="/bananagrill-portfolio/ASCII-Art-Night-Sky.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
