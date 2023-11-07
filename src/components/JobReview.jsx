
const JobReview = () => {
    return (
        <div>
            <h2 className=" text-5xl text-center font-bold bg-orange-500 mb-6"> All Review</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {/* frist card */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className=" flex justify-center items-center">
                    <figure><img className=" rounded-full  h-36 w-36" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Work as a frontEnd Developer </h2>
                        <h2>Comany Name:Google</h2>
                        <p>I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some!</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                {/* 2nd card */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className=" flex justify-center items-center">
                    <figure><img className=" rounded-full w-36 h-36" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=3123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Work as a  query engineer </h2>
                        <h2>Comany Name:FaceBook</h2>
                        <p> have had many websites since the early 90s. Most were like pulling teeth to get developed. Not so with the Thrive team. These guys are true professionals in every aspect!</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                {/* 3rd card */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className=" flex justify-center items-center">
                    {/* <figure><img className=" rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure> */}
                    <figure><img className=" rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Work as a  Web Instructor </h2>
                        <h2>Comany Name:Google</h2>
                        <p>I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some!</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                {/* 4th card */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className=" flex justify-center items-center">
                    <figure><img  className=" rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Work as a Back-end Developer </h2>
                        <h2>Comany Name:Google</h2>
                        <p>I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some!</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobReview;