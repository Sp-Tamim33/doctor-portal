import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const BookingModal = ({ item, date, setClick }) => {
    const { name, slots } = item;
    const [user] = useAuthState(auth);


    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.name.value);
        setClick(null)
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn bg-secondary border-0 btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">Booking for : <span className='text-secondary'>{name}</span></h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center py-3'>
                        <input type="text" readOnly disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" readOnly disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" readOnly disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Book" className=" w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary text-white border-0" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;