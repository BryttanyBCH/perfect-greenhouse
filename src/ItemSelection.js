import "./styles.css"

function ItemSelection({ items, className, onItemDblClick }) {
   return (
      <div className={className}>
         <ul>
            {items.map((item, index) => (
               <li key={index} onDoubleClick={() => onItemDblClick ? onItemDblClick(item.title) : undefined}>
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemSelection;