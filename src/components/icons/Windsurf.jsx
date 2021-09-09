import React from 'react';

const Windsurf = ({ size = 32, color = '#343434' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.48 1C2.107 1 1 2.137 1 3.543v8.914C1 13.863 2.108 15 3.48 15h9.04c1.372 0 2.48-1.137 2.48-2.543V3.543C15 2.137 13.892 1 12.52 1H3.48zm.22.598h8.593c.562 0 1.1.23 1.498.636.397.408.62.96.62 1.536v8.454c.001.285-.053.568-.158.832-.106.264-.261.504-.457.706-.196.203-.43.363-.686.473-.257.11-.533.166-.81.167H3.7c-1.166 0-2.117-.975-2.117-2.172V3.77c0-1.196.951-2.172 2.118-2.172z'
        fill={color}
      />
      <path
        d='M12.831 11.916l-.67-.083c-1.658-.206-3.805-.34-5.787-.412v-.492l3.679-1.724a.15.15 0 00.08-.18l-1.477-4.77a.15.15 0 00-.129-.105l-2.153-.203v-.631a.15.15 0 10-.3 0v8.095a89.141 89.141 0 00-2.887-.052.15.15 0 00-.15.15v.684c0 .354.288.641.642.642h5.175c.794 0 1.586-.088 2.361-.26l1.63-.364a.15.15 0 00-.014-.295z'
        fill={color}
      />
    </svg>
  );
};

export default Windsurf;