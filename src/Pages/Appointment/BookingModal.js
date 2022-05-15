import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const BookingModal = ({ item, date }) => {
    const { name, slots } = item;
    const [user] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn bg-secondary border-0 btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg">Booking for : <span className='text-secondary'>{name}</span></h3>
                    <form className='grid grid-cols-1 gap-3 justify-items-center py-3'>
                        <input type="text" readOnly disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" readOnly disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                        <input type="email" readOnly disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Book" class=" w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary text-white border-0" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;