'use client'
import { onValue, ref, off } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from './firebaseConfig';
import Image from 'next/image';
import { CircularGaugeComponent, RangesDirective, Annotations, AnnotationsDirective, AnnotationDirective, RangeDirective, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Inject, GaugeTooltip } from '@syncfusion/ej2-react-circulargauge';
import React from 'react';


export default function Home() {

  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const tempRef = ref(database, '/test');

    const fetchData = async () => {
      try {
        // Verileri anlık olarak güncellemek için onValue dinleyicisini kullanın
        onValue(tempRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setTemperature(parseFloat(data.temperature));
            setHumidity(parseFloat(data.humidity));
          } else {
            console.log('No Data Available');
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Cleanup işlevi
    return () => {
      // Dinleyiciyi kaldırın
      off(tempRef);
    };
  }, []);


  return (
    <div style={{ backgroundImage: `url("/PJME2290.JPG")`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className='weather--content'>
        <h1 style={{ color: "red" }}>WELCOME</h1>
        <p style={{ color: 'blue', fontFamily: 'Roboto', fontSize: 50 }}>TEMPERATURE and HUMIDITY</p>
        <div style={{ position: 'relative' }}>
          <Image src="/PJME2290.JPG" alt="background image" className="bg-img" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ color: 'green', fontSize: 70, fontFamily: 'sans-serif', margin: 50, padding: 20 }}>Data From Firebase</h1>
          {temperature !== null && (
            <div>
              <h2 style={{color:"red"}}>Temperature: {temperature}°C</h2>
              <CircularGaugeComponent >
                <AxesDirective>
                  <AxisDirective startAngle={240} endAngle={120} radius='100%' minimum={0} maximum={100}
                    majorTicks={{ color: 'green', offset: -4, height: 10 }}
                    lineStyle={{ width: 5 }}
                    minorTicks={{ width: 2 }}
                    labelStyle={{ useRangeColor: true, font: { color: 'black', size: '15px', fontFamily: 'Roboto' } }}>

                    <PointersDirective>
                      <Inject services={[GaugeTooltip, Annotations]} />
                      <PointerDirective value={temperature} color='red' cap={{ radius: 10, border: { color: '#33BCBD', width: 5 } }} animation={{ enable: true }} />
                    </PointersDirective>
                    <RangesDirective>
                      <RangeDirective start={0} end={40} radius='102%' color='orange' startWidth={5} endWidth={10} />
                      <RangeDirective start={40} end={100} radius='102%' color='red' startWidth={10} endWidth={10} />
                    </RangesDirective>
                  </AxisDirective>
                </AxesDirective>
              </CircularGaugeComponent>
            </div>
          )}
          {humidity !== null && (
            <div>
              <h2>Humidity: {humidity}%</h2>
              <CircularGaugeComponent>
                <AxesDirective>
                  <AxisDirective startAngle={240} endAngle={120} radius='120%' minimum={0} maximum={100}
                    majorTicks={{ color: 'green', offset: -4, height: 10 }}
                    lineStyle={{ width: 5 }}
                    minorTicks={{ width: 2 }}
                    labelStyle={{ useRangeColor: true, font: { color: 'black', size: '15px', fontFamily: 'Roboto' } }}>

                    <PointersDirective>
                      <Inject services={[GaugeTooltip, Annotations]} />
                      <PointerDirective value={humidity} color='blue' cap={{ radius: 10, border: { color: 'green', width: 4 } }} animation={{ enable: true }} />
                    </PointersDirective>
                    <RangesDirective>
                      <RangeDirective start={0} end={80} radius='102%' color='black' startWidth={5} endWidth={10} />
                      <RangeDirective start={80} end={100} radius='102%' color='red' startWidth={10} endWidth={10} />
                    </RangesDirective>
                  </AxisDirective>
                </AxesDirective>
              </CircularGaugeComponent>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}