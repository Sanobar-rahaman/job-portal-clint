import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import CategoryCard from "./CategoryCard";
import JobReview from "../../components/JobReview";


const Home = () => {
    const categorys = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl text-center bg-orange-500 mt-10">All Jobs</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    categorys.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>
            <div className=" mt-10">
            <JobReview></JobReview>
            </div>
        </div>
    );
};

export default Home;