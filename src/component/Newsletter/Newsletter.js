import React, { useRef} from 'react'
import Swal from 'sweetalert2';
function Newsletter() {
    const emailRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const formValue = emailRef.current.value;

        if (
            formValue.trim().length > 0 && formValue.includes("@") && formValue.includes(".") && formValue.includes("com")
        )
        {
            Swal.fire({
                title: "Successful!",
                text: "Your email has been added to our list.",
                icon: "success",
            });
            event.target.reset();
        } else {
            Swal.fire({
                title: "OOPS!",
                text: "Please input a valid email address.",
                icon: "error",
            });
        }
    };
    
    return (
        <>
            {/* OUR NEWSLETTER */}
            <section className="section newsletter">
                <div className="newsletter__container container">
                    <h2 className="section__title">Our Newsletter</h2>
                    <p className="newsletter__description">
                        Promotion new products and sales. Directly to your inbox
                    </p>

                    <form className="newsletter__form" onSubmit={onSubmitHandler}>
                        <input type="email" placeholder="Enter your email" className="newsletter__input" ref={emailRef}/>
                        <button type='submit'  className="button">Subscribe</button>
                    </form><br />
                </div>
            </section>
        </>
    )
}

export default Newsletter