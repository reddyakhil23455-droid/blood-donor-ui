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

    const handleChange = (e) => {
        setDonor({
            ...donor,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

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

        <div className="register">

            <h1>❤️ Blood Donor Registration</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={donor.fullName}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={donor.age}
                    onChange={handleChange}
                />

                <select
                    name="gender"
                    value={donor.gender}
                    onChange={handleChange}
                >
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>

                <select
                    name="bloodGroup"
                    value={donor.bloodGroup}
                    onChange={handleChange}
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
                    placeholder="Phone"
                    name="phone"
                    value={donor.phone}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={donor.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={donor.state}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="District"
                    name="district"
                    value={donor.district}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={donor.city}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Pincode"
                    name="pincode"
                    value={donor.pincode}
                    onChange={handleChange}
                />

                <textarea
                    placeholder="Address"
                    name="address"
                    value={donor.address}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="lastDonationDate"
                    value={donor.lastDonationDate}
                    onChange={handleChange}
                />

                <button type="submit">
                    Register Donor
                </button>

            </form>

        </div>

    );

}

export default Register;