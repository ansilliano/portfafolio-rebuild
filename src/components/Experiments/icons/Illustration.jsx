/* eslint-disable max-len */
import React from 'react';

const Illustration = ({ color = '#343434' }) => (
  <svg
    width={114}
    height={113}
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0.399735 15.0754C0.399735 10.9152 0.424471 6.75507 0.375 2.59491C0.375 1.47761 0.795499 1.19235 1.95806 1.1448C6.45987 0.978396 10.937 0.574266 15.4388 0.431632C19.4212 0.312771 23.4035 0.40786 27.3859 0.479177C28.969 0.502949 29.6121 1.09726 29.6121 2.61869C29.6368 8.015 29.6368 13.4113 29.5131 18.8076C29.4389 21.6128 29.1668 24.3941 28.8948 27.1993C28.7463 28.792 28.2269 29.1486 26.5944 29.1961C18.778 29.3388 10.9864 29.5052 3.17008 29.624C0.943911 29.6478 0.622353 29.3388 0.622353 27.223C0.597617 23.1817 0.622353 19.1404 0.622353 15.0991C0.548147 15.0754 0.473941 15.0754 0.399735 15.0754ZM17.4423 15.5984C17.4423 15.5033 17.4176 15.3844 17.4176 15.2893C16.9476 15.2893 16.4777 15.2656 16.0324 15.2893C11.9016 15.6459 7.74611 16.0263 3.61532 16.3591C3.21955 16.3829 2.79906 16.1214 2.40329 15.9787C2.70011 15.6935 2.92273 15.2656 3.26903 15.1467C4.25844 14.7901 5.32205 14.5762 6.31146 14.3147C6.26199 13.1498 6.26199 13.126 7.30087 12.8646C8.73552 12.4842 10.1702 12.1752 11.8769 11.7473C10.1454 11.3431 9.37863 10.5824 9.57652 9.53643C9.72493 8.77571 10.096 8.03877 10.4423 7.13542C9.7744 7.13542 9.15602 7.20674 8.58711 7.11165C8.11714 7.01656 7.69664 6.70752 7.2514 6.49357C7.64717 6.25585 8.01819 5.87549 8.43869 5.80418C9.8486 5.56645 11.2585 5.44759 12.6932 5.30496C12.6932 5.1861 12.6684 5.09101 12.6684 4.97214C12.0748 4.99592 11.4564 5.09101 10.8628 5.06723C10.4423 5.04346 10.0465 4.85328 9.65072 4.75819C10.0218 4.4967 10.4175 3.99748 10.7885 4.02125C14.3504 4.04502 17.9123 4.14011 21.4742 4.25897C21.6968 4.25897 22.1668 4.80574 22.0926 4.9246C21.6226 5.89926 21.3752 7.08788 19.8416 7.06411C19.4706 7.06411 19.0749 7.23051 18.6791 7.30183C19.4459 7.49201 20.1632 7.37315 20.8805 7.39692C21.3505 7.39692 21.8205 7.61087 22.2904 7.72973C22.0678 8.11009 21.8452 8.49045 21.6226 8.84703C22.3399 9.25116 23.1067 9.67906 24.0466 10.2021C22.9088 11.462 21.1774 10.9628 19.9653 11.6997C21.4494 11.8186 22.9336 11.771 24.4177 11.8423C24.7887 11.8661 25.1597 12.1752 25.5308 12.3653C25.1845 12.5793 24.8382 12.9359 24.4424 12.9834C23.1314 13.1498 21.7957 13.1974 20.46 13.3162C19.248 13.4351 18.0607 13.6015 16.8734 13.7441C16.8734 13.863 16.8982 13.9819 16.8982 14.1007C17.3434 14.1007 17.8134 14.0769 18.2586 14.1007C21.0042 14.1958 23.7498 14.2433 26.4954 14.386C26.8665 14.4098 27.2128 14.7901 27.5591 15.0041C27.2128 15.2418 26.8912 15.5508 26.4954 15.6935C26.1986 15.8123 25.8276 15.7648 25.4813 15.8123C24.3187 15.955 23.1809 16.1214 22.0184 16.264C22.0184 16.3829 22.0431 16.5017 22.0431 16.6206C23.4035 16.6206 24.764 16.5968 26.1244 16.6443C26.3965 16.6681 26.6686 17.0247 26.9407 17.2387C26.6933 17.4051 26.4707 17.7141 26.1986 17.7379C25.2587 17.8805 24.3187 17.9043 23.3788 18.0231C21.9441 18.1895 20.5342 18.356 19.0996 18.5224C20.8805 18.9503 22.612 19.0691 24.3682 19.2831C24.764 19.3306 25.1103 19.6872 25.4566 19.9249C25.0855 20.1864 24.7392 20.5668 24.3187 20.6856C23.6509 20.8996 22.9088 20.9709 22.2162 21.0898C22.2904 21.1849 22.3894 21.3037 22.4636 21.3988C22.1173 21.8029 21.8452 22.3972 21.4 22.5399C20.0148 23.0391 18.5802 23.3719 17.1702 23.776C17.4671 23.99 17.8134 23.9424 18.0112 24.0851C18.3575 24.3466 18.8275 24.7507 18.8028 25.036C18.7533 25.5114 18.407 26.2721 18.0607 26.3435C15.7356 26.7951 13.732 26.1057 12.0995 24.4417C11.5801 23.9187 11.0112 23.4195 10.467 22.8965C9.89807 22.6825 9.18075 22.7538 8.46343 22.8014C6.80617 22.9678 5.12417 23.158 3.46691 23.2531C3.17008 23.2768 2.84853 22.9916 2.52697 22.8489C2.79906 22.5874 2.99694 22.2071 3.3185 22.0644C3.739 21.8743 4.2337 21.8505 4.70367 21.8029C7.57296 21.5414 10.4175 21.3037 13.2868 21.0185C15.1172 20.8283 16.9476 20.6143 19.0749 20.3528C18.6791 20.0913 18.6049 20.02 18.5554 20.02C13.2373 20.3528 7.94399 20.6381 2.62591 20.9234C1.85912 20.9709 1.73544 21.3988 1.76017 22.0169C1.80965 23.6334 1.88385 25.2499 1.78491 26.8427C1.7107 28.1026 2.20541 28.483 3.49164 28.4592C11.0854 28.2928 18.6791 28.1501 26.2728 28.0313C27.188 28.0075 27.6085 27.6985 27.658 26.8189C27.8311 24.0613 28.1774 21.3037 28.2516 18.5461C28.3753 13.3875 28.3506 8.25272 28.4001 3.09413C28.4001 2.07192 27.9548 1.62025 26.8417 1.64402C21.7215 1.76288 16.5766 1.81043 11.4317 1.95306C8.19134 2.04815 4.95102 2.30965 1.76017 2.49982C1.76017 7.5871 1.76017 12.6268 1.76017 17.6903C7.12773 16.9772 12.2974 16.2878 17.4423 15.5984ZM12.2232 18.142C9.3539 17.8567 2.27962 18.8789 1.56229 19.711C5.32205 19.1642 8.76025 18.665 12.2232 18.142Z'
      fill={color}
    />
  </svg>
);

export default Illustration;
