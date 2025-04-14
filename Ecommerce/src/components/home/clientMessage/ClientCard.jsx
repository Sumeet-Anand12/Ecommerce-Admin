import React from 'react'
import user1 from "../../../assets/Image/user/user1.jpg"

const ClientCard = () => {
    return (
        <div className='client-card'>
            <div className='card'>
                <div className='client-details'>
                    <div className='d-flex gap-4 align-items-center pb-3'>
                        <img src={user1} alt="" />
                        <div>
                            <h5>Patrick Goodman</h5>
                            <span>Manager</span>

                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text randomised words which dont look even slightly believable</p>
                </div>
            </div>
        </div>
    )
}

export default ClientCard