import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = () => {
    return (
        <ContentLoader
            style = {{margin: "20px 0"}} 
            speed={2}
            width={300}
            height={200}
            viewBox="0 0 300 200"
            backgroundColor="#e7e4e4"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="0" ry="0" width="300" height="200" />
        </ContentLoader>
    )
}
