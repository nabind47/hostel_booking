import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hostels = () => {
  const [hostels, setHostels] = useState([]);

  const fetchHostels = async () => {
    const resposne = await axios.get(`http://localhost:8000/api/hostels`);
    setHostels(resposne.data);
  };
  useEffect(() => {
    fetchHostels();
  }, []);

  return (
    <div className="grid sm:grid-cols-4 gap-4">
      {hostels.map((hostel) => (
        <div key={hostel.id}>
          <Link to={`/hostels/${hostel.id}`}>
            <img
              src={
                "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg"
              }
              className="rounded-md"
              alt=""
            />
            {/* <img src={hostel.image} alt="" /> */}

            <h2>{hostel.name}</h2>
            <p>{hostel.location}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Hostels;
