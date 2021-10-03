import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    "photos/getPhotos",
    async(url: string, thunkApi: any) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            return data
        } catch(e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)