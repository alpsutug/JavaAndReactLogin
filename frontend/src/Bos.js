import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Bos = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return <></>;
};

export default Bos;
