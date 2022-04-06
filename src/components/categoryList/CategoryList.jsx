import "./categoryList.scss";

const CategoryList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "categoryList active" : "categoryList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default CategoryList;
