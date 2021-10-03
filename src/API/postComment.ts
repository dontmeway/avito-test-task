interface ICommentprops {
    name: string | number,
    comment: string,
    id: number | null
}




export const postComment = async({id, name, comment}: ICommentprops) => {
    const date = Date.now()
    const obj = {
        name: name,
        comment: comment,
    }
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)})
    
}   