import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import CategoryCard from "./CategoryCard";


const Home = () => {
    const categorys = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    categorys.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Home;