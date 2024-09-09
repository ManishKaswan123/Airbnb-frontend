// // Card.js
// import React from 'react';

// function Card({ title, host, status, image }) {
//   return (
//     <div className="overflow-hidden w-full max-w-xs hover:cursor-pointer">
//       <img src={image} alt={title} className="w-full h-72 object-cover rounded-lg" />
//       <div className="p-4">
//         <h3 className="text-sm  break-words truncate font-bold">{title}</h3>
//         <p className="text-sm text-gray-500 break-words truncate">Hosted by {host}</p>
//         <p className="text-sm text-gray-800 break-words truncate font-bold">{status}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React from 'react';

function Card({ title, host, status, image }) {
  return (
    <div className="overflow-hidden w-full hover:cursor-pointer">
      <div className="relative pt-[95%]">
        <img src={image} alt={title} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-sm break-words truncate font-bold">{title}</h3>
        <p className="text-sm text-gray-500 break-words truncate">Hosted by {host}</p>
        <p className="text-sm text-gray-800 break-words truncate font-bold">{status}</p>
      </div>
    </div>
  );
}

export default Card;