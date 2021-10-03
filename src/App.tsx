import React from 'react';
import { Route, useHistory } from 'react-router';
import { getPhotoById } from './API/getPhotoById';
import { getPhotos } from './API/getPhotos';
import { Modal } from './components/Modal';
import { Loader } from './Loader';
import { useAppDispatch, useAppSelector } from './store/hooks/reduxHooks';


function App() {
  const [isModal, setModal] = React.useState<boolean>(false)
  const {photos, isLoading, error} = useAppSelector(state => state.photosStore)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(getPhotos("https://boiling-refuge-66454.herokuapp.com/images"))
  }, [])
  
  function handleImage(id: number) {
    dispatch(getPhotoById(id))
    setModal(true)
  }

  return (
    <div className="App">
        <Route path = "/">
          {isModal && <Modal setModal = {setModal}/>}
          <h1>TEST APP</h1>
          <div className = "photos">
            {isLoading ? 
              [...Array(6).fill(null)].map((el, index) => <Loader key = {index} />) : 
              photos.map(el => 
                <img
                  onClick = {() => handleImage(el.id)} 
                  key = {el.id} 
                  src = {el.url} 
                  alt = ""/>)}
          </div>
        </Route>
        
    </div>
  );
}

export default App;
