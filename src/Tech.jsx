import { useEffect } from "react";
import { useState } from "react";
import Techs from "./Techs";




const Tech = ({handleInfo}) => {


     const [tech, setTech] = useState([])


     useEffect(() => {

            fetch('tech.json')
            .then(res => res.json())
            .then(data => setTech(data))

     } , [])




    return (
        <div className=" mt-16 grid grid-cols-2 gap-5">


        


            {

                 tech.map( tech => <Techs key={tech.id} tech={tech} handleInfo={handleInfo}  >  </Techs>  )


            }


          
              


            
        </div>
    );
};

export default Tech;