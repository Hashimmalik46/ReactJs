import { combineReducers, createStore } from "redux";

const initialAccountState = {
  balance: 0,
  loan: 0,
  purpose: "",
};
const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        purpose: action.payload.purpose,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        purpose: "",
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
}
function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 300 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

store.dispatch(createCustomer("Hashim", "2345"));
console.log(store.getState())