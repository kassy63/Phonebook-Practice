const initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  // switch (action.type) {
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            // name: action.payload.name,
            // phoneNumber: action.payload.phoneNumber,
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    // case "SEARCH_BY_USERNAME":
    //   return { ...state, keyword: payload.keyword };
    case "SEARCH_CONTACTS":
      return { ...state, keyword: payload.keyword };

    default:
      return { ...state };
  }
}

export default reducer;
