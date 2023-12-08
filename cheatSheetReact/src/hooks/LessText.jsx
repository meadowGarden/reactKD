import { useState } from "react";

const LessText = () => {
  const [isHidden, setIsHidden] = useState(true);

  const changeVisibility = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <div>
      {!isHidden && (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          commodi, ea accusamus ullam eveniet tenetur? Iure, maxime autem
          voluptatibus nostrum nobis, atque excepturi adipisci quo sint iusto
          quia, veniam earum.
        </div>
      )}

      <div>
        <button onClick={changeVisibility}>
          read {isHidden ? "more" : "less"}
        </button>
      </div>
    </div>
  );
};

export default LessText;
