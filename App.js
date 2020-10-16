import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import { newContextComponents } from "@drizzle/react-components";

import Lottery from "./artifacts/Lottery.json";

const drizzleOptions = {
  contracts: [Lottery],
  events: {
    Lottery: ["LotterySet"],
  },
};

const { AccountData, ContractData, ContractForm } = newContextComponents;


const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => 
        {
          const {drizzle, drizzleState, initialized} = drizzleContext;

          if(!initialized) {
            return "Will be back soon.. "
          }

          return (
            <new drizzle={drizzle} drizzleState={drizzleState} />
            )
         }
         }
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;