import React,{useState} from 'react'
import {Modal,Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Add.css'
           function Add({handlemovie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setNewmovie] = useState({title:"",description:"",posterUrl:"",rating:0})
console.log(newmovie)
  
        


  
  return (
    <>
    <Container className="akel">
      <Button variant="primary" onClick={handleShow} style={{fontSize:'30px'}}>
         Add Movie
      </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div className='add'>
        <input type='text'placeholder='Enter title'onChange={e=>setNewmovie({...newmovie,title:e.target.value})}></input>
        <input type='text'placeholder='Enter description'onChange={e=>setNewmovie({...newmovie,description:e.target.value})}></input>
        <input type='text'placeholder='Enter posterUrl'onChange={e=>setNewmovie({...newmovie,posterUrl:e.target.value})}></input>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();handlemovie(newmovie)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


        

export default Add
