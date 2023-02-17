const reducer = (patient = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    default:
      return patient;
  }
};

export default reducer;
