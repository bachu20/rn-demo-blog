import createDataContext from "./createDataContext";

const sampleBlogs = new Array(2).fill("stuff").map((_, i) => ({
  id: i,
  title: `Blog Title #${i + 1}`,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et viverra felis, lacinia venenatis lorem.",
}));

const reducer = (state, action) => {
  let index;
  switch (action.type) {
    case "ADD_BLOG":
      return { ...state, blogs: [...state.blogs, action.payload] };

    case "EDIT_BLOG":
      index = state.blogs.findIndex((b) => b.id === action.payload.id);

      if (index === -1) return state;

      state.blogs[index] = action.payload;

      return { ...state, blogs: [...state.blogs] };

    case "DELETE_BLOG":
      index = state.blogs.findIndex((b) => b.id === action.payload);

      if (index === -1) return state;

      state.blogs.splice(index, 1);

      return { ...state, blogs: [...state.blogs] };

    default:
      return state;
  }
};

const actions = {
  addBlogPost: (dispatch) => (payload) =>
    dispatch({ type: "ADD_BLOG", payload }),

  editBlogPost: (dispatch) => (payload) =>
    dispatch({ type: "EDIT_BLOG", payload }),

  deleteBlogPost: (dispatch) => (payload) =>
    dispatch({ type: "DELETE_BLOG", payload }),
};

export const { Context, Provider } = createDataContext(reducer, actions, {
  blogs: sampleBlogs,
});
