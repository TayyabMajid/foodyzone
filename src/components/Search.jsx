import { BASE_URL } from "../App";
import './Search.css'

const Search = ({ data }) => {
  return (
    <main>
        <section>
            {data?.map(({ name, image, text, price }) => {
                <div className="foodcard" key={name}>
         <div className="food-image">
          <img src={BASE_URL + image}></img>
         </div>
          <div className="food-info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>                
              </div>
              <button>${price.toFixed(2)}</button>

          </div>
         </div>
          
        })};
        </section>
    </main>

  );
};

export default Search