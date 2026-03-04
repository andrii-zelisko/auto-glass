import React from "react";

function Map() {
  const mapSrc = "https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=%D0%90%D0%92%D0%A2%D0%9E%D0%A1%D0%9A%D0%9B%D0%9E%20%C2%AB%D0%97%D0%95%D0%9B%D0%95%D0%9D%D0%90%C2%BB%2C%20%D0%BC%2C%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%2C%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%2C%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0&maptype=roadmap";
  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="400"
      style={{border: 0}}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Location">
    </iframe>
  );
}

export default Map;