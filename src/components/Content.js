import React, { useEffect, useState } from 'react';
import Card from './Card'; // Ensure the path is correct

function Content() {
  const [items, setItems] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  // Fetch items from the API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://airbnb-backend-1-iqk6.onrender.com/api/items'); // Adjust the URL to your API endpoint
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 850);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-[5%] ${isMobileView ? 'mt-[180px]' : 'mt-[300px]'}`}>
      {items.map((item, index) => (
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