const reducer = (patients = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    default:
      return patients;
  }
};

export default reducer;
