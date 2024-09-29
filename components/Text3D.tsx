import { Text3D,Float } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState ,Suspense} from "react"
import * as THREE from "three"


const ThreeText=()=>{

    
    return(
        <Canvas>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 0, 5]} />
            <Suspense>
               <Float floatIntensity={1}>
                    <Text3D
                    font={'font/fontwrite.json'}
                    scale={2.5}
                    height={1}
                    position={[-11,-1,0]}
                    curveSegments={22}
                    bevelEnabled
                    bevelSize={0.02} 
                    bevelOffset={0} 
                    bevelSegments={5} 
                    >
                        Harsh
                        <meshStandardMaterial attach="material" color="#8C92A1"/>



                    </Text3D>
                </Float>  
            </Suspense>

        </Canvas>
    )
}

export default ThreeText