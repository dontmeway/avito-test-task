import { createSlice } from "@reduxjs/toolkit";
import { getPhotoById } from "../../API/getPhotoById";
import { getPhotos } from "../../API/getPhotos";

const initialState: IState = {
    photos: [],
    isLoading: false,
    error: null,
    currentPhoto: {
        id: null,
        url: '',
        comments: []
    }
}
export interface IComment {
    id: number,
    text: string,
    date: number,
    name?: string
}

interface IPhoto {
    id: number,
    url: string
}
interface IState {
    photos: IPhoto[]
    isLoading: boolean,
    error: null | string,
    currentPhoto: ICurrentPhoto
}
export interface ICurrentPhoto {
    id: number | null;
    url: string,
    comments: IComment[]
}
interface IAction {
    payload: IPhoto[]
}
interface IError {
    payload: string
}
interface ICurrentPhotoAction {
    payload: ICurrentPhoto
}
export const photoSlice = createSlice({
    name: "photoSlice",
    initialState, 
    reducers: {
        addComment: (state: IState, {payload}) => {
            state.currentPhoto.comments = [...state.currentPhoto.comments, payload]
        }
    },
    extraReducers: {
        [String(getPhotos.pending)]: (state: IState) => {
            state.isLoading = true
        },
        [String(getPhotos.fulfilled)]: (state: IState, { payload }: IAction) => {
            state.isLoading = false;
            state.photos = payload
        },
        [String(getPhotos.rejected)]: (state: IState, { payload }: IError) => {
            state.error = payload
        },
        [String(getPhotoById.pending)]: (state: IState) => {
            state.isLoading = true
        },
        [String(getPhotoById.fulfilled)]: (state: IState, { payload} : ICurrentPhotoAction) => {
            state.isLoading = false;
            state.currentPhoto = payload
        }
    }
})
export const { addComment } = photoSlice.actions
export default photoSlice.reducer