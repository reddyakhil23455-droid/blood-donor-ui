function DonorCard({ donor }) {

    return (

        <div className="donor-card">

            <div className="avatar">
                👤
            </div>

            <h2>{donor.fullName}</h2>

            <span className="badge">
                🩸 {donor.bloodGroup}
            </span>

            <div className="details">

                <p>📞 <b>Phone :</b> {donor.phone}</p>

                <p>📧 <b>Email :</b> {donor.email}</p>

                <p>🏙 <b>City :</b> {donor.city}</p>

                <p>🌍 <b>District :</b> {donor.district}</p>

                <p>📍 <b>State :</b> {donor.state}</p>

                <p>🏠 <b>Address :</b> {donor.address}</p>

                <p>🎂 <b>Age :</b> {donor.age}</p>

                <p>🚻 <b>Gender :</b> {donor.gender}</p>

                <p>📦 <b>Pincode :</b> {donor.pincode}</p>

                <p>❤️ <b>Last Donation :</b> {donor.lastDonationDate}</p>

            </div>

            <div style={{marginTop:"20px"}}>

                <span
                    style={{
                        background:
                            donor.availability === "Available"
                                ? "#2ecc71"
                                : "#e74c3c",

                        color:"white",

                        padding:"8px 20px",

                        borderRadius:"30px",

                        fontWeight:"600"
                    }}
                >
                    🟢 {donor.availability}
                </span>

            </div>

        </div>

    );

}

export default DonorCard;