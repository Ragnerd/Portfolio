"useClient";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export const WorkSliderBtns = ({
  containerStyles,
  buttonStyles,
  iconStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};
