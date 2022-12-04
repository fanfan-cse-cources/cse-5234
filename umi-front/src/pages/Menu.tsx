import {useEffect, useState} from "react"
import {Card, Container, Row} from "react-bootstrap";
import request from "umi-request";
import '../layouts/index.less';


export default function HomePage() {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductDetails().then()
  }, [])

  const getProductDetails = async () => {
    request
      .get('http://localhost:3000/inventory-management/inventory/')
      .then(async function (response) {
        setProductDetail(await response)
      })
      .catch(function (error) {
        console.log('Unable to retrieve data from API');
      });
  }

  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <h1>Welcome</h1>
      </Row>

      <div className="m-test-wrap mt-3">
        <Row sm={1} md={2} lg={3} className="g-4">
          {productDetail.map((_, index) => {
            return (
              <Card key={index}>
                <Card.Img variant="top" src={productDetail[index]['image']}/>
                <Card.Body>
                  <Card.Title>{productDetail[index]['name']}</Card.Title>
                  <Card.Text>
                    {productDetail[index]['description']}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{"$" + productDetail[index]['price']}</small>
                </Card.Footer>
              </Card>
            )
          })}
        </Row>
      </div>
    </Container>
  );
}
