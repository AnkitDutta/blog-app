import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddBlog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button onClick={handleShow} className='flex items-center justify-center text-yellow-400 font-bold tracking-wider mt-4 p-3 button'>
            NEW BLOGGO
        </button>

      <Modal 
      show={show} 
      onHide={handleClose} 
      backdrop="static" 
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='editmodal'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Blog Genre"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Blog Title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Created By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Created By"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='bg-black hover:bg-slate-600 text-white py-2 px-3 rounded-lg'>
            Cancel
          </button>
          <button form='editmodal' className='bg-amber-400 hover:bg-yellow-400 text-black  py-2 px-4 rounded-lg'>
            Add Blog
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBlog;