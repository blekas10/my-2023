
import React, { useContext, useState } from "react";


export default function BillingForm(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        cardExpiration: '',
        cardCvv: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // do something with the form data
      };

    return(
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
           <div className="flex flex-col md:flex-row">
                <div className="mb-4 md:mb-0 md:mr-4"> 
                
                    <h2 className="text-xl font-medium mb-4">Billing information</h2>

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block font-medium mb-1">First name</label>
                        <input type="text" name="firstName" id="firstName" className="form-input w-full" value={formData.firstName} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block font-medium mb-1">Last name</label>
                        <input type="text" name="lastName" id="lastName" className="form-input w-full" value={formData.lastName} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input type="email" name="email" id="email" className="form-input w-full" value={formData.email} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block font-medium mb-1">Address</label>
                        <input type="text" name="address" id="address" className="form-input w-full" value={formData.address} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="city" className="block font-medium mb-1">City</label>
                        <input type="text" name="city" id="city" className="form-input w-full" value={formData.city} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="state" className="block font-medium mb-1">State</label>
                        <input type="text" name="state" id="state" className="form-input w-full" value={formData.state} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="zip" className="block font-medium mb-1">Zip code</label>
                        <input type="text" name="zip" id="zip" className="form-input w-full" value={formData.zip} onChange={handleInputChange} />
                    </div>

                    <hr className="my-6" /></div>
                
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-medium mb-4">Payment information</h2>

                    <div className="mb-4">
                        <label htmlFor="cardName" className="block font-medium mb-1">Name on card</label>
                        <input type="text" name="cardName" id="cardName" className="form-input w-full" value={formData.cardName} onChange={handleInputChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block font-medium mb-1">Card number</label>
                        <input type="text" name="cardNumber" id="cardNumber" className="form-input w-full" value={formData.cardNumber} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cardExpiration" className="block font-medium mb-1">Expiration date</label>
                        <input type="text" name="cardExpiration" id="cardExpiration" className="form-input w-full" value={formData.cardExpiration} onChange={handleInputChange} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cardCvv" className="block font-medium mb-1">CVV</label>
                        <input type="text" name="cardCvv" id="cardCvv" className="form-input w-full" value={formData.cardCvv} onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded">Submit</button>
                </div>
            </div>
            

               
        </form>
    )
}

