import Progs from "./Progs";





const Prog = ({info}) => {
    return (
        <div className="  ">


            <h1 className=" mt-14 text-2xl font-bold ">Web Count {info.length} </h1>


            <div className=" flex justify-center items-center gap-36 mt-5">

              <h1 className=" text-xl font-bold text-slate-500"  >Title</h1>
              <h1  className=" text-xl font-bold text-slate-500"   >author</h1>
              
              
              
              
              
              </div>
              




             {

               info.map( info => <Progs key={info.id} info={info} ></Progs> )

             }

            
        </div>
    );
};

export default Prog;