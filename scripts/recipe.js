// Import the FLDyDx library
const FLDyDx = require('FLDyDx');
 
// Import the UniMintV3 library
const UniMintV3 = require('UniMintV3');
 
// Import the DFSSell library and the UniV3WrapperV3 library
const DFSSell = require('DFSSell');
const UniV3WrapperV3 = require('UniV3WrapperV3');
 
// Import the UniWithdrawV3 library
const UniWithdrawV3 = require('UniWithdrawV3');
 
// Import the SendToken library
const SendToken = require('SendToken');
 
// Import the Recipe object
const Recipe = require('Recipe');
 
async function executeRecipe() {
  // Create instances of each action with the necessary parameters
  const action1 = new FLDyDx({tokenAddr, amount, from });
  const action2 = new UniMintV3({token0,
    token1,
    fee,
    tickLower,
    tickUpper,
    amount0Desired,
    amount1Desired,
    amount0Min,
    amount1Min,
    recipient,
    deadline,
    from, });
  const action3 = new DFSSell({functionData, proxy, regAddr}, UniV3WrapperV3);
  const action4 = new UniWithdrawV3({tokenId,
    liquidity,
    deadline,
    recipient,
    MAX_UINT128,
    MAX_UINT128,
    recipient,});
  const action5 = new SendToken({tokenAddr, amount, to});
 
  // Put the actions in an array in the order you want to execute them
  const actions = [action1, action2, action3, action4, action5];
 
  // Create a new Recipe object with the array of actions
  const recipe = new Recipe(actions);
 
  // Execute the recipe
  const functionData = recipe.encodeForDsProxyCall();
   
  await executeAction('RecipeExecutor', functionData[1], proxy);  
}
 
executeRecipe ();
