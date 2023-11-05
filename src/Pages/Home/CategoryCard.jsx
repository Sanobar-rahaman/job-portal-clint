import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
    const{name,image} = category
  
    return (
        <div>
           <Link to={`/jobs/${name}`}>
           <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" w-32 h-32" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                </div>
            </div>
           </Link>
        </div>
    );
};

export default CategoryCard;