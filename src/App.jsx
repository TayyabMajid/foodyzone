import { useEffect, useState } from 'react';
import './Index.css'
import Search from './components/Search';


 export const BASE_URL = "http://localhost:9000"

const App = () => {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");


  useEffect (() =>{

    const fetchFoodData =async () => {
      setLoading(true);
      try {
        
        const response = await fetch(BASE_URL);
        const json = await response.json();
        
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } 
        catch (error) {
        setError("Unable to fetch data");
      }
     
    }
     
     fetchFoodData();
     
console.log(data);

  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if(searchValue == ""){
      setFilteredData(null);
    }
  
    const filter = data?.filter((food) =>{
      food.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    setFilteredData(filter);
  };

  const filterFood = (type) => {
  
    if (type == "") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
      
    }
     
      const filter = data?.filter((food) =>
       food.type.toLowerCase().includes(type.toLowerCase()));
        setFilteredData(filter);
        setSelectedBtn(type);
  };
  // we can  make diffferent tyoes of button by using this method 
const filterBtns = [
  {
    name: "All",
    type: "all", 
  },
  {
    name: "Breakfast",
    type: "breakfast", 
  },

  {
    name: "Lunch",
    type: "lunch", 
  },
  {
    name: "Dinner",
    type: "dinner", 
  },
  {
    name: "MidMeal",
    type: "midmeal", 
  },

]

 if(error) return <div>{error}</div>;

 if(loading) return <div>{loading}</div>;


  return (  
  <main className='main-work'>
    <section >
          <nav className="nav-btn ">
          <h1>KhanQadeer</h1>
      
      <div className="search">
        <input onChange={searchFood} placeholder="Search Food "  />
      </div>
      
      <div className="all-btn">
      {filterBtns.map(value=>
        <button
        isselected = {selectedBtn == value.type}
         key={value.name} onChange={() =>filterFood(value.type)} >{value.name}</button>
      )}
      </div>
      </nav>
      
    <div className='bg1-image'>
    <Search data={filteredData}/>
    </div>

    </section>
    
  </main>
  );

};

export default App;

// const MainContainer = styled.div``;
// const TopSection = styled.section``;