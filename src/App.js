import ItemSelection from './ItemSelection';

import "./styles.css"
import {useState} from "react";

function App() {
   const testItems = ["wheat", "corn", "rice", "taro"];

   const [itemsAvailable, setItemsAvailable] = useState(testItems);
   const [itemsSelected, setItemsSelected] = useState([])

   const handleItemAvailableDblClick = (item) => {
      setItemsAvailable(itemsAvailable.filter(available => available !== item));
      setItemsSelected([...itemsSelected, item]);
   };

   const handleItemSelectedDblClick = (item) => {
      setItemsSelected(itemsSelected.filter(selected => selected !== item));
      setItemsAvailable([...itemsAvailable, item]);
   };

   return (
      <div className="crop-calculator">
         <ItemSelection
            className="crops-available"
            items={itemsAvailable}
            onItemDblClick={handleItemAvailableDblClick}
         />
         <div className="right-column">
            <div className="diagram-result"></div>
            <div className="calculation-result"></div>
            <ItemSelection
               className="crops-selected"
               items={itemsSelected}
               onItemDblClick={handleItemSelectedDblClick}
            />
         </div>
      </div>
   )
}

export default App;
