import { useState } from "react";
import styles from "./tabs.module.css";
// const checkedLeftColumn = array.filter((item) => obj[item]);
// console.log(checkedLeftColumn);

//1 checkItems = Object
//2 if nothing selected button - disabled

const Tabs = () => {
  const [leftColumn, setLeftColumn] = useState([1, 2, 3, 4]);
  const [rightColumn, setRightColumn] = useState([5, 6, 7, 8]);
  const [checkedItems, setCheckedItems] = useState({});
  console.log(checkedItems);

  const handleCheckbox = (el) => {
    if (checkedItems[el]) {
      delete checkedItems[el];
      setCheckedItems({ ...checkedItems });
    } else setCheckedItems({ ...checkedItems, [el]: true });
  };

  const moveRight = () => {
    const checkedLeftColumn = leftColumn.filter((item) => checkedItems[item]);
    console.log(`checkedLeftColumn ${checkedLeftColumn}`);

    setLeftColumn(leftColumn.filter((item) => !checkedItems[item]));
    console.log(`leftColumn ${leftColumn}`);

    setRightColumn([...rightColumn, ...checkedLeftColumn]);
    setCheckedItems({});
  };

  const moveLeft = () => {
    const checkedRightColumn = rightColumn.filter((item) => checkedItems[item]);
    setRightColumn(rightColumn.filter((item) => !checkedItems[item]));
    setLeftColumn([...leftColumn, ...checkedRightColumn]);
    setCheckedItems({});
  };
  const isMoveRightDisabled = !leftColumn.some((item) => checkedItems[item]);
  const isMoveLeftDisabled = !rightColumn.some((item) => checkedItems[item]);
  return (
    <div className="container">
      <div className={styles.tab_container}>
        <div className={styles.box}>
          {leftColumn.map((el) => {
            return (
              <div
                key={el}
                onClick={() => handleCheckbox(el)}
                style={{
                  border: `1px solid ${
                    checkedItems[el] ? "#608284" : "#e0d7a9"
                  }`,
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                {el}
              </div>
            );
          })}
          <button
            className={styles.button}
            onClick={moveRight}
            disabled={isMoveRightDisabled}
          >
            move right
          </button>
        </div>
        <div className={styles.box}>
          {rightColumn.map((el) => {
            return (
              <div
                key={el}
                onClick={() => handleCheckbox(el)}
                style={{
                  border: `1px solid ${
                    checkedItems[el] ? "#608284" : "#e0d7a9"
                  }`,
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                {el}
              </div>
            );
          })}
          <button
            className={styles.button}
            onClick={moveLeft}
            disabled={isMoveLeftDisabled}
          >
            move left
          </button>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
