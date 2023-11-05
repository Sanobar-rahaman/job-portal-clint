

const Banner = () => {
    return (
        <div>
            <div className=" relative">
                <img className=" w-full" src="https://i.ibb.co/zQpHXXz/1000-F-258550061-43hw-St-AIQf5b-Hwusn-HDQ0-Asa-Ng-DP111w.jpg" alt="" />
                <div className="absolute w-2/3 -mt-60 ml-48 flex ">
                    <input  className=" p-5 w-full" type="text" />
                     <div className="flex justify-center items-center">
                     <button className="btn btn-secondary text-center p-8 ml-4 rounded-xl">Search</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;