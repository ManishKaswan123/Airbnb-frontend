// import React, { useEffect, useState } from 'react';
// import Card from './Card'; // Ensure the path is correct

// function Content() {
//   const items = [
//     { 
//       title: "Join a living room session with Doja Cat", 
//       host: "Doja Cat", 
//       status: "Coming October", 
//       image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
//     },
//     { 
//       title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
//       host: "Wendy and Lisa", 
//       status: "Coming September", 
//       image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
//     },
//     { 
//       title: "Sleepover at Polly Pocket’s Compact", 
//       host: "Polly Pocket", 
//       status: "Sold out", 
//       image: "https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp" 
//     },
//     { 
//       title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
//       host: "Wendy and Lisa", 
//       status: "Coming September", 
//       image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
//     },
//     { 
//       title: "Join a living room session with Doja Cat", 
//       host: "Doja Cat", 
//       status: "Coming October", 
//       image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
//     },
//     { 
//         title: "Join a living room session with Doja Cat", 
//         host: "Doja Cat", 
//         status: "Coming October", 
//         image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
//       },
//       { 
//         title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
//         host: "Wendy and Lisa", 
//         status: "Coming September", 
//         image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
//       },
//       { 
//         title: "Sleepover at Polly Pocket’s Compact", 
//         host: "Polly Pocket", 
//         status: "Sold out", 
//         image: "https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp" 
//       },
//       { 
//         title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
//         host: "Wendy and Lisa", 
//         status: "Coming September", 
//         image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
//       },
//       { 
//         title: "Join a living room session with Doja Cat", 
//         host: "Doja Cat", 
//         status: "Coming October", 
//         image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
//       },
//       { 
//         title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
//         host: "Wendy and Lisa", 
//         status: "Coming September", 
//         image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
//       },
//       { 
//         title: "Sleepover at Polly Pocket’s Compact", 
//         host: "Polly Pocket", 
//         status: "Sold out", 
//         image: "https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp" 
//       },
//       { 
//         title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
//         host: "Wendy and Lisa", 
//         status: "Coming September", 
//         image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
//       },
//     // Add more items as needed
//   ];
//   const [isMobileView, setIsMobileView] = useState(false);
//   const handleResize = () => {
//     setIsMobileView(window.innerWidth < 850);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  px-[5%] ${isMobileView ? 'mt-[180px]' : 'mt-[300px]'}`}>
//       {items.map((item, index) => (
//         <Card 
//           key={index} 
//           title={item.title} 
//           host={item.host} 
//           status={item.status} 
//           image={item.image} 
//         />
//       ))}
//     </div>
//   );
// }

// export default Content;




import React, { useEffect, useState } from 'react';
import Card from './Card'; // Ensure the path is correct

function Content() {
  const itemsArray = [
    { 
      title: "Join a living room session with Doja Cat", 
      host: "Doja Cat", 
      status: "Coming October", 
      image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
    },
    { 
      title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
      host: "Wendy and Lisa", 
      status: "Coming September", 
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
    },
    { 
      title: "Sleepover at Polly Pocket’s Compact", 
      host: "Polly Pocket", 
      status: "Sold out", 
      image: "https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp" 
    },
    { 
      title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
      host: "Wendy and Lisa", 
      status: "Coming September", 
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
    },
    { 
      title: "Join a living room session with Doja Cat", 
      host: "Doja Cat", 
      status: "Coming October", 
      image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
    },
    { 
        title: "Join a living room session with Doja Cat", 
        host: "Doja Cat", 
        status: "Coming October", 
        image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
      },
      { 
        title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
        host: "Wendy and Lisa", 
        status: "Coming September", 
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
      },
      { 
        title: "Sleepover at Polly Pocket’s Compact", 
        host: "Polly Pocket", 
        status: "Sold out", 
        image: "https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp" 
      },
      { 
        title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
        host: "Wendy and Lisa", 
        status: "Coming September", 
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
      },
      { 
        title: "Join a living room session with Doja Cat", 
        host: "Doja Cat", 
        status: "Coming October", 
        image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
      },
      { 
        title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
        host: "Wendy and Lisa", 
        status: "Coming September", 
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
      },
      { 
        title: "Sleepover at Polly Pocket’s Compact", 
        host: "Polly Pocket", 
        status: "Sold out", 
        image: "https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp" 
      },
      { 
        title: "Stay in Prince’s Purple Rain house kajjdgnajgdfnjk kagndjfnkgjn klangkdfngn", 
        host: "Wendy and Lisa", 
        status: "Coming September", 
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
      },
    // Add more items as needed
  ];

  const [items, setItems] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 850);
  };

  useEffect(() => {
    // Fetch items from the server
    const fetchItems = async () => {
      try {
        const response = await fetch('https://airbnb-backend-1-iqk6.onrender.com/api/items'); // Adjust the endpoint as necessary
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-[5%] ${isMobileView ? 'mt-[180px]' : 'mt-[300px]'}`}>
      {itemsArray?.map((item, index) => (
        <Card 
          key={index} 
          title={item.title} 
          host={item.host} 
          status={item.status} 
          image={item.image} 
        />
      ))}
    </div>
  );
}

export default Content;