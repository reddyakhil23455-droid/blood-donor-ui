import { useEffect, useState } from "react";
import DonorService from "../services/DonorService";
import DonorCard from "../components/DonorCard";

function Dashboard() {

    const [donors, setDonors] = useState([]);
    const [filteredDonors, setFilteredDonors] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadDonors();
    }, []);

    const loadDonors = () => {
        DonorService.getAllDonors()
            .then((response) => {
                setDonors(response.data);
                setFilteredDonors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const searchDonor = () => {

        if (search === "") {
            setFilteredDonors(donors);
            return;
        }

        const result = donors.filter((donor) =>
            donor.bloodGroup.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredDonors(result);
    };

    const availableCount = filteredDonors.filter(
        donor => donor.availability === "Available"
    ).length;

    return (

        <div className="dashboard">

            <h1 className="dashboard-title">
                📊 Blood Donor Dashboard
            </h1>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search Blood Group (O+, A+, B+, AB+...)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button onClick={searchDonor}>
                    🔍 Search
                </button>

            </div>

            <div className="stats">

                <div className="stat-card">

                    <h2>{filteredDonors.length}</h2>

                    <p>Total Donors</p>

                </div>

                <div className="stat-card">

                    <h2>{availableCount}</h2>

                    <p>Available Donors</p>

                </div>

            </div>

            <div className="donor-grid">

                {
                    filteredDonors.length > 0 ?

                        filteredDonors.map((donor) => (

                            <DonorCard
                                key={donor.id}
                                donor={donor}
                            />

                        ))

                        :

                        <h2>No Donors Found</h2>
                }

            </div>

        </div>

    );

}

export default Dashboard;