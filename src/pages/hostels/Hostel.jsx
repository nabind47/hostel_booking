import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Hostel = () => {
  const params = useParams();
  const [hostel, setHostel] = useState({});

  const fetchHostel = async () => {
    const resposne = await axios.get(
      `http://localhost:8000/api/hostels/${params.hostel}`
    );
    setHostel(resposne.data);
  };
  useEffect(() => {
    fetchHostel();
  }, []);

  console.log(hostel);

  return (
    <div className="grid sm:grid-cols-4 gap-4">
      <div>
        {/* <img src={hostel.image} alt="" /> */}
        <img
          src={
            "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg"
          }
          className="rounded-md"
          alt=""
        />
        <h2>{hostel.name}</h2>
        <p>{hostel.location}</p>
      </div>
    </div>
  );
};

export default Hostel;
