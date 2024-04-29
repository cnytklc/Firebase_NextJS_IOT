import Image from 'next/image';
import React from 'react';

export default function Image(){
    return(<div>
        <div
        className='weather--content'>
<h1 style={{color:"red"}}>WELCOME</h1>

<p>TEMPERATURE and HUMIDITY</p>
        </div>
<Image src="public/IMG_7781.PNG" alt="background image" className="bg-img"
//</div> width={1000} 
//height={1000}
fill = {true}

>



</Image>


    </div>
    )
}