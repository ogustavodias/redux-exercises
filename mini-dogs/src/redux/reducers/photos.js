// Helper function
import { createCustomSlice } from "../helper/createCustomSlice";

const photos = createCustomSlice({
  name: "photos",
  initialState: {
    list: [],
    pages: 0,
    more: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.pages++;
      if (!action.payload.length) state.more = false;
    },

    clear(state) {
      state.data = null;
      state.list = [];
      state.pages = 0;
    },
  },

  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

const fetchPhotos = photos.asyncFetch;
export const clearPhotos = photos.logout;
const { addPhotos } = photos.actions;

export const loadPhotos =
  (page = 1) =>
  async (dispatch) => {
    const { payload } = await dispatch(fetchPhotos(page));
    dispatch(addPhotos(payload));
  };

export default photos.reducer;
