



const Header = () => {
    return (
        <div className=" ml-10 mr-10">
            

            <div className="navbar bg-base-100 mt-10 ">
               <div className="flex-1">

                 <img className=" h-[50px] w-[50px]" src="../public/image/logo.png" alt="" />

                 <a className="btn btn-ghost text-2xl font-bold text-blue-500">Web Tech</a>
               </div>
               <div className="flex-none gap-2">
                 <div className="form-control">
                   <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                 </div>
                 <div className="dropdown dropdown-end">
                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                       <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/QKqQVyQ/logo.png" />
                     </div>
                   </div>
                   <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                     <li>
                       <a className="justify-between">
                         Profile
                         <span className="badge">New</span>
                       </a>
                     </li>
                     <li><a>Settings</a></li>
                     <li><a>Logout</a></li>
                   </ul>
                 </div>
               </div>
             </div>

        

         {/* banner */}

         <div className=" mt-10">


            
                     <div className="hero h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/zFLwsJf/banner.png)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                   <div className="hero-content text-center text-neutral-content">
                   <div className="">
                   <h1 className="mb-5 text-5xl font-bold">Any sufficiently advanced technology is indistinguishable from magic.</h1>
                   <p className="mb-5 text-xl font-bold text-white">You affect the world by what you browse.<br></br> Tim Berners-Lee
                   </p>
                  <button className="btn btn-primary text-xl">Tech Info</button>
                   </div>
                  </div>
                  </div>


         </div>

           <div className=" mt-16 text-center">


           
             <h1 className=" text-5xl font-bold">Our Tech information</h1>
             <p className=" text-xl font-bold text-slate-400 mt-5">Technological progress has merely provided us with more<br></br> efficient means for going backwards.
              </p>


           </div>


        </div>
    );
};

export default Header;