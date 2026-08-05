//Contact form for submitting the quote request
//In phase 7 this will send data to your back-end API

import { useState } from 'react';

//formData and onChange come from the parent(keeps all state in one place)

export default function QuoteForm({ quoteItems, onSubmitSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSumitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const[errors, setErrors] = useState({});

    //Update on field at a time
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        //clear the error for this field as user types
        if(errors[name]) {
            setErrors((prev) => ({...prev, [name]: ''}));
        }
    };

    //Simple validation - check required fields
    const validate = () => {
        const newErrors = {};
        if(!formData.name.trim()) newErrors.name = 'Name is required!';
        if(!formData.company.trim()) newErrors.company = 'Company is required';
        if(!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //stop page from refreshing
        //Run validation
        const foundErrors = validate();
        if(Object.keys(foundErrors).length > 0) {
            setErrors(foundErrors);
            return; //stop here if errors exist
        }
        setLoading(true);

        //Temporary: simulate sending(Phase 7 replace this
        // await fetch('/api/quote', { method: 'POST', body: ... })

        await new Promise((resolve) => setTimeout(resolve, 1200));

        setLoading(false);
        setSumitted(true);
        onSubmitSuccess(); // tell parent to clear the quote basket
    };

    //Success screen
    if(submitted) {
        return (
            <div className='quote-success'>
                <div className='quote-success__icon'>✅</div>
                <h2 className='quote-success__title'>Quote Request Sent!</h2>
                <p className='quote-success__text'>
                    Thank you, <strong>{formData.name}</strong>. We have received your
                    request and will reply to <strong>{formData.email}</strong> with
                    pricing and availability within 1 business day.
                </p>
            </div>
        );
    }
    //Form
    return (
        <div className='quote-form__wrap'>
            <h2 className='quote-form__title'>Your Details</h2>
            <p className='quote-form__subtitle'>
                Fill in your contact information and we will reply with a
                full quotation by email.
            </p>

            <form className='quote-form' onSubmit={handleSubmit}>
                {/**Row1: Name + Company */}
                <div className='form-row'>
                    <div className='form-field'>
                        <label className='form-label'>
                            Full Name <span className='required'>*</span>
                        </label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                            placeholder='John Smith'
                        />
                        {errors.name && (

                            <p className='form-error'>{errors.name}</p>
                        )}
                    </div>

                    <div className='form-field'
                    >
                        <label className='form-label'>
                            Company Name <span className='required'>*</span>
                        </label>
                        <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`form-input ${errors.company ? 'form-input--error' : ''}`}
                        placeholder='ABC Grocery Ltd.'/>

                        {errors.company && (
                            <p className='form-error'>{errors.company}</p>
                        )}
                    </div>
                </div>
                {/**Row2: email + phone */}
                <div className="form-row">
                    <div className='form-field'>
                        <label className='form-label'>
                            Email Address <span className='required'>*</span>
                        </label>
                        <input
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                        placeholder='john@abcgrocery.com'
                        />
                        {errors.email && (
                            <p className='form-error'>{errors.email}</p>
                        )}
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>Phone (optional)

                        </label>
                        <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='form-input'
                        placeholder='(905) 555-1234'
                        />
                    </div>
                 </div>
                 {/**Message */}
                 <div className='form-field'>
                    <label className='form-label'>Additional Notes (optional)</label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='form-input form-textarea'
                    placeholder='Minimum order quantites, delivery requirements, etc .'
                    rows={4}
                    />
                 </div>
                 {/**Submit */}
                 <button
                 type='submit'
                 className='btn-primary quote-form__submit'
                 disabled={loading}>
                    {loading ? 'Sending...' : 'Submit Quote Request →'}
                 </button>
            </form>
        </div>
    );

}