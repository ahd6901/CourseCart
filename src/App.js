// import {Container, Row, Col
// } from 'reactstrap';
import React, { Component } from 'react';
import List from "./List";
class App extends Component {
    render() {
        return (
            <div>
              <label>xin chao</label>
                    {/*<Container>*/}
                    {/*    <Row>*/}
                    {/*        <Col>*/}
                    {/*            <p>*/}
                    {/*            <List/>*/}
                    {/*            </p>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Container>*/}
                    <List/>
            </div>
        );
    }
}

export default App;