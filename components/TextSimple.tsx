import { Text,Float } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense} from "react"



const TextSimple=()=>{

    
    return(
        <Canvas>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 0, 5]} />
            <Suspense>
               <Float 
                rotationIntensity={0.2}  // No rotation
                floatIntensity={0.5}  // Vertical float intensity
                floatingRange={[0, 0.1]}  // Only float slightly on the Y-axis
        >
                   <Text
                    scale={9}
                    color="lightblue"
                    
                    >
                    HARSH
                    </Text>
                </Float>  
            </Suspense>

        </Canvas>
    )
}

export default TextSimple