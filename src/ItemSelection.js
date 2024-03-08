import "./styles.css"

function ItemSelection({ items, className, onItemDblClick }) {
   return (
      <div className={className}>
         <ul>
            {items.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => (
               <li key={index} onDoubleClick={() => onItemDblClick ? onItemDblClick(item.name) : undefined}>
                  <img src={require(`./img/${item.name.replace(/\s+/g, '')}.png`)} alt={item.name} />
                  <span>{item.name}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemSelection;