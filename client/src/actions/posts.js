import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
    }
}

