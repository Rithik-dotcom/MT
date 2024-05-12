import { React, useState, useEffect } from 'react'

const Popuptwo = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []); // Runs only once after component mounts
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        
                        <h2>Popup Form</h2>
                        <form>
                            {/* Your form fields */}
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <button type="submit">Submit</button>
                        </form>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Popuptwo


