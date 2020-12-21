import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilPhoto from "./ComponentsInternal/Profile/ProfilePhoto.js";
import FullName from "./ComponentsInternal/Profile/FullName";
import Address from "./ComponentsInternal/Profile/Address";
import {Card, Button} from "react-bootstrap";

function App() {
  return (
    <div
      className=" d-flex justify-content-center"
      style={{ marginTop: "150px" }}>
    
      <Card style={{ width: "300px", borderRadius: "4px" }} className="shadow">
        <ProfilPhoto />
        <Card.Body>
          <FullName />
          <Address />
          <Button variant="info" className="btn-block">
            View profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
