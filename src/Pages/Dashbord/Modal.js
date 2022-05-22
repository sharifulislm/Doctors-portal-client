import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({deleteingdoctor,refetch,setDeleteingdoctor}) => {
    const {name,email}=deleteingdoctor;
    const hendleDelete = (email) => {
        fetch(`https://afternoon-bastion-83513.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    console.log(data);
                    toast.success(`Doctor: ${name} is deleted.`)
                    setDeleteingdoctor(null)
                    refetch();
                }
            })
    }
    return (
        <div>

    
        
     
        <input type="checkbox" id="deletemodal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Are you sure you want to delete {name} </h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
            <button onClick={()=> hendleDelete(email)} class="btn btn-xs btn-error">Delete</button>
              <label for="deletemodal" class="btn btn-xs">cancel</label>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Modal;