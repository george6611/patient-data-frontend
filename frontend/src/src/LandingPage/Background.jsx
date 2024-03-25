import React, { useEffect } from 'react';

const BackgroundChanger = ({ imageUrls }) => {
  useEffect(() => {
    const backgroundContainer = document.querySelector(".container1");

    // Function to change the background image
    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const randomImageUrl = imageUrls[randomIndex];
      backgroundContainer.style.backgroundImage = `url('${randomImageUrl}')`;
    };

    // Initial call to set a background image
    changeBackgroundImage();

    // Set interval to change the background image every 30 seconds
    const intervalId = setInterval(changeBackgroundImage, 20000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [imageUrls]);

  return (
    <div className="background-container">
      {/* Your content goes here */}
    </div>
  );
};

export default BackgroundChanger;
