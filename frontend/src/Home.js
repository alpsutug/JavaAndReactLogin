import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { format } from "date-fns"; // date-fns kütüphanesini içe aktar

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      navigate("/login");
    }

    async function getArabalar() {
      try {
        const response = await axios.get("http://localhost:9834/araba/");
        console.log(response);

        // Tarih formatını düzenleme
        const formattedData = response.data.map((item) => ({
          ...item,
          yil: format(new Date(item.yil), "yyyy-MM-dd"), // yil alanını istediğiniz formata dönüştür
        }));

        setData(formattedData);
      } catch (error) {
        console.error(error);
      }
    }

    getArabalar();
  }, [navigate]);

  let tableRows = [];

  if (data) {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      tableRows[index] = (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.marka}</td>
          <td>{item.model}</td>
          <td>{item.yil}</td>
          <td>{item.fiyat}</td>
          <td>{item.renk}</td>
        </tr>
      );
    }
  }

  return (
    <div>
      <nav className="navbar">
        <Link to="/hesap" className="hesap-link">
          Hesap Makinesi
        </Link>
      </nav>
      <br></br>
      <br></br>
      <strong>
        <h2 id="tblaraba">Araba Tablosu</h2>
      </strong>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Yıl</th>
            <th>Fiyat</th>
            <th>Renk</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Home;
