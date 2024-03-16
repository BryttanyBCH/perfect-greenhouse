import { useMemo } from "react";

import "./styles.css";

function ItemSelection({ items, className, onItemDblClick, onCountChanged }) {

   const handleCountChange = (itemName, newCount) => {
      onCountChanged(itemName, Math.max(Number(newCount), 1));
   };

   const sortedItems = useMemo(() => items.sort((a,b) => a.name.localeCompare(b.name)), [items]);

   return (
      <div className={className}>
         <ul>
            {sortedItems.map((item, index) => (
               <li key={index} onDoubleClick={() => onItemDblClick?.(item.name)}
                   className="item">
                  <div className="item-info">
                     <img src={require(`./img/${item.name.replace(/\s+/g, '')}.png`)} alt={item.name}/>
                     <span>{item.name}</span>
                  </div>
                  { className === 'items-selected' &&
                     <input
                        className="item-count"
                        type="number"
                        min="0"
                        value={item.count}
                        onChange={event => handleCountChange(item.name, event.target.value)}
                        onDoubleClick={(event) => event.stopPropagation()}
                     />
                  }
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemSelection;