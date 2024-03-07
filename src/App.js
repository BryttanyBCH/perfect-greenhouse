import ItemSelection from './ItemSelection';

import "./styles.css"
import {useState} from "react";

function App() {
   const testItems = [
      { title: "wheat", image: "logo512.png" },
      { title: "corn", image: "logo512.png" },
      { title: "rice", image: "logo512.png" },
      { title: "taro", image: "logo512.png" }
   ];

   const [itemsAvailable, setItemsAvailable] = useState(testItems);
   const [itemsSelected, setItemsSelected] = useState([])

   const findItem = (title) => testItems.find(item => item.title === title);

   const handleItemAvailableDblClick = (title) => {
      setItemsAvailable(itemsAvailable.filter(item => item.title !== title));
      setItemsSelected([...itemsSelected, findItem(title)]);
   };

   const handleItemSelectedDblClick = (title) => {
      setItemsSelected(itemsSelected.filter(item => item.title !== title));
      setItemsAvailable([...itemsAvailable, findItem(title)]);
   };

   return (
      <div className="crop-calculator">
         <ItemSelection
            className="items-available"
            items={itemsAvailable}
            onItemDblClick={handleItemAvailableDblClick}
         />
         <div className="right-column">
            <div className="diagram-result"></div>
            <div className="calculation-result"></div>
            <ItemSelection
               className="items-selected"
               items={itemsSelected}
               onItemDblClick={handleItemSelectedDblClick}
            />
         </div>
      </div>
   )
}

export default App;
