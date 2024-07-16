import { CDN_URL } from '../utils/constants';

const ItemList = ({ items , dummy}) => {
  
console.log(dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-full">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

       {/* item-image */}
       
  <div className="w-3/12 p-4">
      <div className="absolute">
  <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                >
                Add +
              </button>
            </div>
              <img src={CDN_URL + item?.card?.info?.imageId} className="rounded-xl"/>
              </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;