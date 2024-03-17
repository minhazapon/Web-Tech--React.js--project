



const Techs = ({tech, handleInfo}) => {
        
     const {images, title, author} = tech

    return (
        <div className=" ml-10 mr-10">


            <div className="card w-[300px] bg-base-100 shadow-xl">
              <figure><img src={images} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title"> {author} </h2>
                <p> {title} </p>
                <div className="card-actions justify-end">
                  <button onClick={ () => handleInfo(tech)} className="btn btn-primary">Read more</button>
                </div>
              </div>
            </div>


            
        </div>
    );
};

export default Techs;