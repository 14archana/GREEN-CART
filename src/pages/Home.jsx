import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Home() {
const navigate = useNavigate();

const goToAddPage = () => {
navigate("/additem");
};

return (
<div
style={{
backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210311/pngtree-green-branch-golden-linear-draft-watercolor-background-image_584000.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
minHeight: "100vh",
}}
>
<Container className="text-center " >
<h1 className="display-3 text-center" style={{ fontSize: "6rem" ,color:"black "}}><br/><br/><strong>GREEN CART</strong></h1>
<p className="lead text-center " style={{ marginTop: "50px", color:"black" }}>
Welcome to our plant paradise! Discover a vast selection of stunning plants for every space and style. 
</p>
<p>Shop now and bring nature's beauty into your home..</p>
<div className="mt-4">
<div class="p-2 "><Link to="/login"><Button variant="outline-dark">Login</Button></Link></div>
</div>
</Container>
</div>
);
}
