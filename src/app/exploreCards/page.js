import ChandRaatCard from "../homecomponents/ChandRaatCard";
import ChandRaatCinematicCard from "../homecomponents/ChandRaatCinematicCard";
import CorporateEidCard from "../homecomponents/CorporateEidCard";
import EidiCard from "../homecomponents/EidiCard";
import WineCard from "../homecomponents/WineCard";

const ExploreCards = () => {
  return (
    <div className="flex justify-center items-center  lg:p-20 py-20 px-6 ">
      <div>

        <div className="text-center p-6">
          <h3 className="lg:text-lg">Eid Mubarak, But Make It Viral</h3>
          <h1 className="text-4xl w-full lg:max-w-3xl mx-auto lg:text-6xl text-yellow-400 font-extrabold py-2">
           Create Your Own Customized Eid Card
          </h1>
        </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20  lg:px-20">
            <div>
                <EidiCard/>
            </div>
              <div>
                <CorporateEidCard/>
            </div>
            <div>
                <WineCard/>
            </div>
          
            <div>
                <ChandRaatCard/>
            </div>
               <div>
                <ChandRaatCinematicCard/>
            </div>

         </div>



      </div>
    </div>
  );
};

export default ExploreCards;
