'use client'
import { get, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from './firebaseConfig';
import Image from 'next/image';

export default function Home() {
 
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempRef = ref(database, 'Temp');
      try {
        const snapshot = await get(tempRef);
        if (snapshot.exists()) {
          const tempArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setTempData(tempArray);
        } else {
          console.log('No Data Available');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{backgroundColor:'azure'}}>
      <h1 style={{color:'green', fontSize:70, fontFamily:'-moz-initial',margin:50, padding:20}}>Data From Firebase</h1>
      <div>
      <img
    className="picture"
    src='https://cdn.britannica.com/24/189624-131-BAF1184D/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg ' width={300}
  />
    

        {tempData.map((temp) => (
          <div key={temp.id}>
            <pre style={{color:'red', fontSize:80, fontFamily:'sans-serif'}}>{JSON.stringify(temp, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
