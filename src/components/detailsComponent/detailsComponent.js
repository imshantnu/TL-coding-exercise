import * as React from "react";
import { AppContext } from "../../context/appContext";

const DetailsComponent = props => {
  const appContext = React.useContext(AppContext);

  return (
    <div className={props.className}>{JSON.stringify(appContext.selected)}</div>
  );
};

export default DetailsComponent;
