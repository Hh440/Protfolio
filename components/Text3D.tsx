import { Text3D,Float } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense} from "react"



const ThreeText=()=>{

    
    return(
        <Canvas>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 0, 5]} />
            <Suspense>
               <Float 
                rotationIntensity={0.5}  
                floatIntensity={0.5}  
                floatingRange={[0, 0.1]}  
        >
                    <Text3D
                    font={'font/fontwrite.json'}
                    scale={2.5}
                    height={1}
                    position={[-9,-1.4,0]}
                    curveSegments={22}
                    bevelEnabled
                    bevelSize={0.02} 
                    bevelOffset={0} 
                    bevelSegments={5} 
                    
                    >
                        HARSH
                        <meshStandardMaterial attach="material" color="#4169E1"/>



                    </Text3D>
                </Float>  
            </Suspense>

        </Canvas>
    )
}

export default ThreeText