import React from 'react'
import { postComment } from '../API/postComment'
import { Loader } from '../Loader'
import { useAppDispatch, useAppSelector } from '../store/hooks/reduxHooks'
import { addComment } from '../store/slices/photoSlice'
import { getDateFn } from '../utils/getDateFn'

export const Modal = ({setModal}: any) => {
    const { currentPhoto, isLoading } = useAppSelector(state => state.photosStore)
    const [name, setName] = React.useState<string>('')
    const [comment, setComment] = React.useState<string>('')
    const dispatch = useAppDispatch()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        postComment({id: currentPhoto.id, name, comment})
        dispatch(addComment({id: currentPhoto.id, name, text: comment, date: Date.now()}))
        setName('')
        setComment('')
    }

    return (
        <div className = "modalWrapper">
            <div className = "modalContent">
                <i
                    onClick = {() => setModal(false)} 
                    className="bi bi-x-lg"></i>
                <div className = "modalLeft">
                    {isLoading ? <Loader /> : <img
                        style = {{marginBottom: 30}}  
                        src = {currentPhoto.url} 
                        alt = ""/>}
                    <form onSubmit = {handleSubmit}>
                        <input 
                            placeholder = "Ваше имя"
                            onChange = {(e) => setName(e.target.value)} 
                            value = {name} 
                            required/>
                        <input 
                            placeholder = "Ваш комментарий"
                            onChange = {(e) => setComment(e.target.value)} 
                            value = {comment} 
                            required/>
                        <button type = "submit">Оставить комментарий</button>
                    </form>
                </div>
                <div className = "modalRight">
                    {currentPhoto.comments.length !== 0 ? 
                        currentPhoto.comments.map((el, index) => 
                            <div key = {index} style = {{marginBottom: "15px"}}>
                                <p style = {{color: "grey", marginBottom: "10px"}}>
                                    {getDateFn(el.date)}
                                </p>
                                <b>{el.name || "Без имени"}</b><br/>
                                {el.text}
                            </div>) : 
                            <h4>Комментариев нет</h4>}
                </div>
            </div>
        </div>
    )
}
