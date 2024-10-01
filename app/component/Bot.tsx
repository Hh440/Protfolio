;import { Canvas } from "@react-three/fiber";
import {  Suspense } from "react";
import Model from "./Model";
import { Environment, OrbitControls, Sky } from "@react-three/drei";


const Bot =()=>{
    return(
        <Canvas shadows camera={{position:[0,0,20], fov:75}} gl={{antialias:true}}>
          
            <OrbitControls
             enableZoom={false}
             enableDamping={true}
            />
            <ambientLight intensity={1}/>
            <Suspense>
                <Model/>
            </Suspense>
            <Environment preset="park"/>
        
            
        </Canvas>
    )

}


export default Bot