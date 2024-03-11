import { useState } from "react";

import ItemSelection from './ItemSelection';
import Calculation from './Calculation';

import { crops } from './crops';

import "./styles.css"

function App() {
   const cropsArray = Object.values(crops).map(item => {
      return {...item, count: 1};
   });

   const [itemsAvailable, setItemsAvailable] = useState(cropsArray);
   const [itemsSelected, setItemsSelected] = useState([]);

   const findItem = (name) => cropsArray.find(item => item.name === name);

   const handleItemAvailableDblClick = (name) => {
      setItemsAvailable(itemsAvailable.filter(item => item.name !== name));
      setItemsSelected([...itemsSelected, findItem(name)]);
   };

   const handleItemSelectedDblClick = (name) => {
      setItemsSelected(itemsSelected.filter(item => item.name !== name));
      setItemsAvailable([...itemsAvailable, findItem(name)]);
   };

   const handleCountChanged = (itemName, newCount) => {
      setItemsSelected(
         itemsSelected.map(item =>
            item.name === itemName ? {...item, count: newCount } : item
         )
      );
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
               onCountChanged={handleCountChanged}
            />
         </div>
         <div className="right-column">
            <div className="diagram-result"></div>
            <Calculation
               items={itemsSelected}
            />
         </div>
      </div>
   )
}

export default App;
