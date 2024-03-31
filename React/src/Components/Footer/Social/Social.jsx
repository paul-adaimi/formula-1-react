import React from "react";
import "./Social.css";

export const Social = () => {
  return (
    <div className={`social design-component-instance-node`}>
      <svg
        className={`facebook-1 icon-instance-node`}
        fill="none"
        height="24"
        viewBox="0 0 25 24"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          d="M24.2422 12C24.2422 5.3736 18.8686 0 12.2422 0C5.61578 0 0.242188 5.3736 0.242188 12C0.242188 17.628 4.11578 22.3488 9.34298 23.6472V15.6672H6.86858V12H9.34298V10.4208C9.34298 6.336 11.191 4.4424 15.2014 4.4424C15.9622 4.4424 17.2726 4.5912 17.8102 4.74V8.06399C17.527 8.03519 17.035 8.02079 16.423 8.02079C14.4574 8.02079 13.6966 8.76479 13.6966 10.704V12H17.6158L16.9414 15.6672H13.6966V23.9112C19.6366 23.1936 24.2422 18.1344 24.2422 12Z"
          fill="white"
        />
      </svg>
      <svg
        className={`twitter-1 icon-instance-node`}
        fill="none"
        height="24"
        viewBox="0 0 25 24"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="g" clipPath="url(#clip0_59_431)">
          <path
            className="path"
            d="M14.7265 10.1571L23.4645 0H21.3939L13.8067 8.81931L7.74687 0H0.757568L9.92123 13.3364L0.757568 23.9877H2.8283L10.8405 14.6742L17.2401 23.9877H24.2295L14.726 10.1571H14.7265ZM11.8904 13.4538L10.9619 12.1258L3.57441 1.55881H6.75493L12.7167 10.0867L13.6452 11.4147L21.3948 22.4998H18.2143L11.8904 13.4544V13.4538Z"
            fill="white"
          />
        </g>
        <defs className="defs">
          <clipPath className="clip-path" id="clip0_59_431">
            <rect
              className="rect"
              fill="white"
              height="24"
              transform="translate(0.757568)"
              width="23.4719"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        className={`instagram-glyph-1 icon-instance-node`}
        fill="none"
        height="24"
        viewBox="0 0 25 24"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="g" clipPath="url(#clip0_59_433)">
          <g className="g" clipPath="url(#clip1_59_433)">
            <mask
              className="mask"
              height="24"
              id="mask0_59_433"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
              width="25"
              x="0"
              y="0"
            >
              <path
                className="path"
                d="M12.2294 2.16186C15.4336 2.16186 15.8131 2.17386 17.0786 2.23165C18.2487 2.28503 18.8841 2.48031 19.3069 2.64477C19.8673 2.8626 20.2669 3.1223 20.6868 3.54223C21.1066 3.96216 21.3669 4.36183 21.5842 4.92212C21.7487 5.34493 21.944 5.98029 21.9974 7.15041C22.0551 8.41586 22.0672 8.79528 22.0672 11.9996C22.0672 15.2039 22.0552 15.5832 21.9974 16.8486C21.944 18.0187 21.7487 18.6541 21.5842 19.0769C21.3664 19.6373 21.1067 20.0369 20.6868 20.4568C20.2669 20.8766 19.8672 21.1369 19.3069 21.3543C18.8841 21.5187 18.2487 21.714 17.0786 21.7674C15.8132 21.8251 15.4337 21.8372 12.2294 21.8372C9.02516 21.8372 8.64584 21.8252 7.38039 21.7674C6.21027 21.714 5.5749 21.5187 5.15209 21.3543C4.59171 21.1363 4.19213 20.8766 3.7722 20.4568C3.35237 20.0369 3.0921 19.6372 2.87474 19.0769C2.71019 18.6541 2.51501 18.0187 2.46163 16.8486C2.40393 15.5833 2.39183 15.2038 2.39183 11.9996C2.39183 8.79538 2.40383 8.41596 2.46163 7.15041C2.51501 5.98029 2.71028 5.34493 2.87474 4.92212C3.09258 4.36173 3.35227 3.96216 3.7722 3.54223C4.19213 3.1224 4.5918 2.86212 5.15209 2.64477C5.5749 2.48031 6.21027 2.28503 7.38039 2.23165C8.64574 2.17443 9.02525 2.16186 12.2294 2.16186ZM12.2294 0C8.97043 0 8.56164 0.0139208 7.28179 0.0721003C6.00433 0.13028 5.13231 0.333332 4.36907 0.62999C3.57981 0.936824 2.91084 1.34715 2.24369 2.0142C1.57665 2.68134 1.16593 3.35031 0.859482 4.13958C0.562728 4.90292 0.359772 5.77532 0.301593 7.0523C0.243413 8.33224 0.229492 8.74104 0.229492 12C0.229492 15.2589 0.243413 15.6678 0.301593 16.9476C0.359772 18.2251 0.562824 19.0971 0.859482 19.8603C1.16632 20.6496 1.57665 21.3186 2.24369 21.9857C2.91084 22.6528 3.58029 23.0631 4.36907 23.3699C5.13241 23.6667 6.00481 23.8696 7.28179 23.9278C8.56164 23.986 8.97043 23.9999 12.2294 23.9999C15.4885 23.9999 15.8972 23.986 17.1771 23.9278C18.4546 23.8696 19.3266 23.6666 20.0898 23.3699C20.8791 23.063 21.5481 22.6528 22.2152 21.9857C22.8823 21.3186 23.2926 20.6491 23.5994 19.8603C23.8962 19.0971 24.0991 18.2246 24.1573 16.9476C24.2155 15.6678 24.2294 15.259 24.2294 12C24.2294 8.74094 24.2155 8.33215 24.1573 7.0523C24.0991 5.77484 23.8961 4.90282 23.5994 4.13958C23.2925 3.35031 22.8822 2.68134 22.2152 2.0142C21.5481 1.34715 20.8786 0.936824 20.0898 0.62999C19.3266 0.333236 18.4541 0.13028 17.1771 0.0721003C15.8973 0.0139208 15.4885 0 12.2294 0ZM12.2294 5.83792C8.82614 5.83792 6.06741 8.59664 6.06741 12C6.06741 15.4033 8.82614 18.1621 12.2294 18.1621C15.6328 18.1621 18.3916 15.4033 18.3916 12C18.3916 8.59664 15.6328 5.83792 12.2294 5.83792ZM12.2294 16.0002C10.0204 16.0002 8.22927 14.2096 8.22927 12C8.22927 9.79048 10.0204 7.99987 12.2294 7.99987C14.4384 7.99987 16.2296 9.79048 16.2296 12C16.2296 14.2096 14.4384 16.0002 12.2294 16.0002ZM18.6349 4.15455C17.8394 4.15455 17.195 4.79904 17.195 5.59454C17.195 6.39005 17.8394 7.03463 18.6349 7.03463C19.4305 7.03463 20.075 6.39005 20.075 5.59454C20.075 4.79904 19.4305 4.15455 18.6349 4.15455Z"
                fill="white"
              />
            </mask>
            <g className="g" mask="url(#mask0_59_433)">
              <rect
                className="rect"
                fill="white"
                height="37.4422"
                width="37.4422"
                x="-6.52222"
                y="-6.75171"
              />
            </g>
          </g>
        </g>
        <defs className="defs">
          <clipPath className="clip-path" id="clip0_59_433">
            <rect
              className="rect"
              fill="white"
              height="24"
              transform="translate(0.229492)"
              width="24"
            />
          </clipPath>
          <clipPath className="clip-path" id="clip1_59_433">
            <rect
              className="rect"
              fill="white"
              height="24"
              transform="translate(0.229492)"
              width="24"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        className={`youtube`}
        fill="none"
        height="24"
        viewBox="0 0 35 24"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          clipRule="evenodd"
          d="M34.5152 12.0071C34.5152 12.0071 34.5152 17.5802 33.7956 20.261C33.4006 21.7284 32.2436 22.8854 30.7621 23.2804C28.0955 24 17.3724 24 17.3724 24C17.3724 24 6.64924 24 3.98258 23.2804C2.5011 22.8854 1.34413 21.7284 0.949068 20.261C0.229491 17.5802 0.229492 12.0071 0.229492 12.0071C0.229492 12.0071 0.229491 6.41975 0.949068 3.75309C1.34413 2.2716 2.5011 1.11464 3.98258 0.719575C6.64924 -1.27829e-06 17.3724 0 17.3724 0C17.3724 0 28.0955 -1.27829e-06 30.7621 0.719575C32.2436 1.11464 33.4006 2.2716 33.7956 3.75309C34.5152 6.41975 34.5152 12.0071 34.5152 12.0071ZM22.8468 12.0071L13.9438 6.85714V17.1429L22.8468 12.0071Z"
          fill="white"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};