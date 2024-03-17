



const Progs = ({info}) => {

    const {title, author} = info


    return (
        <div className=" flex gap-10">
            
              <h1 className=" text-xl font-bold text-slate-400"> {title} </h1>

              <h1 className=" text-xl font-bold text-slate-400" > {author} </h1>


        </div>
    );
};

export default Progs;