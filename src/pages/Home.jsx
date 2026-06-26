import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="home">

            <div className="card">

                <h1>❤️ Become a Donor</h1>

                <p>
                    Register yourself and become a lifesaver.
                    Your donation can save up to three lives.
                </p>

                <Link to="/register">

                    <button>
                        Register Now
                    </button>

                </Link>

            </div>

            <div className="card">

                <h1>🔍 Find Blood Donor</h1>

                <p>
                    Search blood donors by blood group
                    and contact them instantly.
                </p>

                <Link to="/dashboard">

                    <button>
                        Find Donor
                    </button>

                </Link>

            </div>

        </div>

    );

}

export default Home;