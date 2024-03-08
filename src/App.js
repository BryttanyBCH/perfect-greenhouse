import { useState } from "react";

import { crops } from './crops';
import ItemSelection from './ItemSelection';

import "./styles.css"

function App() {
   const cropsArray = Object.values(crops);

   const [itemsAvailable, setItemsAvailable] = useState(cropsArray);
   const [itemsSelected, setItemsSelected] = useState([])

   const findItem = (name) => cropsArray.find(item => item.name === name);

   const handleItemAvailableDblClick = (name) => {
      setItemsAvailable(itemsAvailable.filter(item => item.name !== name));
      setItemsSelected([...itemsSelected, findItem(name)]);
   };

   const handleItemSelectedDblClick = (name) => {
      setItemsSelected(itemsSelected.filter(item => item.name !== name));
      setItemsAvailable([...itemsAvailable, findItem(name)]);
   };

   return (
      <div className="crop-calculator">
         <div className="left-column">
            <ItemSelection
               className="items-available"
               items={itemsAvailable}
               onItemDblClick={handleItemAvailableDblClick}
            />
            <ItemSelection
               className="items-selected"
               items={itemsSelected}
               onItemDblClick={handleItemSelectedDblClick}
            />
         </div>
         <div className="right-column">
            <div className="diagram-result"></div>
            <div className="calculation-result"></div>
         </div>
      </div>
   )
}

export default App;
