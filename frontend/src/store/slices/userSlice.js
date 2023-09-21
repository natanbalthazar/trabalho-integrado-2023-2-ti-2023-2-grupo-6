import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  login,
} from "../thunks/userThunks";

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
  status: "not_loaded",
  error: null,
  loggedUser: null,
  token: null,
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "loaded";
        userAdapter.setAll(state, action.payload);
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "saved";
        userAdapter.upsertOne(state, action.payload);
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "saved";
        userAdapter.addOne(state, action.payload);
      })

      .addCase(createUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(deleteUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "deleted";
        userAdapter.removeOne(state, action.payload);
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(login.pending, (state) => {
        state.status = "loading";
      })

      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.loggedUser = action.payload._doc;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload._doc));
        localStorage.setItem("token", action.payload.token);
      })

      .addCase(login.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  userAdapter.getSelectors((state) => state?.user);

export const selectUserThunksStatus = (state) => state?.user.status;

export const selectUserThunksError = (state) => state?.user.error;

export const selectLoggedUser = (state) => state?.user.loggedUser;

export const selectToken = (state) => state?.user.token;

export const { setStatus, setLoggedUser, setToken, logout } = userSlice.actions;

export default userSlice.reducer;
