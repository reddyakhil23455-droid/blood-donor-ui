import { useState } from "react";
import DonorService from "../services/DonorService";

function Register() {

    const [donor, setDonor] = useState({
        fullName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        phone: "",
        email: "",
        state: "",
        district: "",
        city: "",
        pincode: "",
        address: "",
        lastDonationDate: "",
        availability: "Available"
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

    setDonor({
        ...donor,
        [e.target.name]: e.target.value
    });

    setErrors({
        ...errors,
        [e.target.name]: false
    });
};
    const validate = () => {

    let newErrors = {};

    if (!donor.fullName.trim())
        newErrors.fullName = true;

    if (!donor.age)
        newErrors.age = true;

    if (!donor.gender)
        newErrors.gender = true;

    if (!donor.bloodGroup)
        newErrors.bloodGroup = true;

    if (!donor.phone.trim())
        newErrors.phone = true;

    if (!donor.email.trim())
        newErrors.email = true;

    if (!donor.state.trim())
        newErrors.state = true;

    if (!donor.district.trim())
        newErrors.district = true;

    if (!donor.city.trim())
        newErrors.city = true;

    if (!donor.pincode.trim())
        newErrors.pincode = true;

    if (!donor.address.trim())
        newErrors.address = true;

    if (!donor.lastDonationDate)
        newErrors.lastDonationDate = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};




    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!validate()) {
            alert("Please fill all required fields.");
            return;
        }

        try {

            await DonorService.registerDonor(donor);

            alert("🎉 Registered Successfully!");

            setDonor({
                fullName: "",
                age: "",
                gender: "",
                bloodGroup: "",
                phone: "",
                email: "",
                state: "",
                district: "",
                city: "",
                pincode: "",
                address: "",
                lastDonationDate: "",
                availability: "Available"
            });

        } catch (error) {

            alert("Registration Failed");
            console.log(error);

        }

    };

    return (

        <div className="register-page">

            <div className="register-card">

                <h1>❤️ Blood Donor Registration</h1>

                <form className="register-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        value={donor.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? "input-error" : ""}
                    />

                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={donor.age}
                        onChange={handleChange}
                        className={errors.age ? "input-error" : ""}
                    />

                    <select
                        name="gender"
                        value={donor.gender}
                        onChange={handleChange}
                        className={errors.gender ? "input-error" : ""}
                    >
                        <option value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <select
                        name="bloodGroup"
                        value={donor.bloodGroup}
                        onChange={handleChange}
                        className={errors.bloodGroup ? "input-error" : ""}
                    >
                        <option value="">Blood Group</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        value={donor.phone}
                        onChange={handleChange}
                        className={errors.phone ? "input-error" : ""}
                        
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={donor.email}
                        onChange={handleChange}
                        className={errors.email ? "input-error" : ""}
                    />

                    <input
                        type="text"
                        placeholder="State"
                        name="state"
                        value={donor.state}
                        onChange={handleChange}
                        className={errors.state ? "input-error" : ""}
                    />

                    <input
                        type="text"
                        placeholder="District"
                        name="district"
                        value={donor.district}
                        onChange={handleChange}
                        className={errors.district ? "input-error" : ""}
                    />

                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={donor.city}
                        onChange={handleChange}
                        className={errors.city ? "input-error" : ""}
                    />

                    <input
                        type="text"
                        placeholder="Pincode"
                        name="pincode"
                        value={donor.pincode}
                        onChange={handleChange}
                        className={errors.pincode ? "input-error" : ""}
                    />

                    <textarea
                        placeholder="Complete Address"
                        name="address"
                        value={donor.address}
                        onChange={handleChange}
                        className={errors.address ? "input-error" : ""}
                    />

                    <div className="date-row">

                        <label htmlFor="lastDonationDate">
                            🗓️ Last Donation Date
                        </label>

                        <input
                            type="date"
                            id="lastDonationDate"
                            name="lastDonationDate"
                            value={donor.lastDonationDate}
                            onChange={handleChange}
                            className={errors.lastDonationDate ? "input-error" : ""}
                        />

                    </div>

                    <button
                        type="submit"
                        className="register-btn"
                    >
                        ❤️ Register Donor
                    </button>

                </form>

            </div>

        </div>

    );
}

export default Register;