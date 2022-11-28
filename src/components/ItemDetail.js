const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <img src={item.img} alt="ServicioDiseño" />
    </div>
  );
};

export default ItemDetail;
