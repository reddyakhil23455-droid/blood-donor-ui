import axios from "axios";

const API_URL = "https://ide-vol-corners-integrity.trycloudflare.com/api/donors";

class DonorService {

    getAllDonors() {
        return axios.get(API_URL);
    }

    registerDonor(donor) {
        return axios.post(API_URL, donor);
    }

    updateDonor(id, donor) {
        return axios.put(`${API_URL}/${id}`, donor);
    }

    deleteDonor(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new DonorService();