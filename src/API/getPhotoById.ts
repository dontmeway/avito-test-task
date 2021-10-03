import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotoById = createAsyncThunk(
    "photos/getPhotosById",
    async(id: number, thunkApi: any) => {
        try {
            const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            const data = await response.json()
            return data
        } catch(e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)