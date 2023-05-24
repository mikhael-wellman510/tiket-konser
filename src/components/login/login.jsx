import React from "react";
import "../../css/style.css";
import { Input } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
const Login = () => {
  return (
    <div className="aa1">
      <Card>
        <CardBody>
          <div className="aa2">
            <div>
              <h1>Login</h1>
            </div>

            <div className="aa3">
              <div className="aa4">
                <h1>UserName</h1>
                <Input />
              </div>
              <div className="aa4">
                <h1>Password</h1>
                <Input />
              </div>
            </div>
            <div className="aa5">
              <Button colorScheme="blue">Login</Button>
              <Button colorScheme="red">cancel</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
