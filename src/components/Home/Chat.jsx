import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Chat.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([
    "Hey ask me anything about Shivansh",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // Auto-scroll exactly to the last message
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userInput = input;
    setLoading(true);
    setMessage((prev) => [...prev, userInput]);
    setInput("");

    try {
      const result = await axios.post(
        "https://visitorapis.vercel.app/api/room/ai",
        { message: userInput }
      );
      console.log(result);
      setMessage((prev) => [...prev, result.data.message]);
    } catch (error) {
      console.log(error);
      setMessage((prev) => [...prev, `Error: ${error.message}`]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-bg py-5">
      <Container className="chat-container rounded shadow-lg p-4">
        <h2 className="text-center mb-4 text-purple">Shivansh AI Assistant</h2>
        <div className="chat-box mb-4">
          {message.map((msg, index) => (
            <Row
              key={index}
              ref={index === message.length - 2 ? bottomRef : null}
            >
              <Col
                className={`justify-content-${
                  index % 2 === 1 ? "start" : "end"
                } mb-3`}
              >
                <div
                  className={`chat-bubble ${
                    index % 2 === 1 ? "left" : "right"
                  }`}
                >
                  <ReactMarkdown>{msg}</ReactMarkdown>
                </div>
              </Col>
            </Row>
          ))}
          {loading && (
            <Row className="justify-content-center">
              <div className="text-purple">Loading...</div>
            </Row>
          )}
        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <Row>
            <Col xs={9}>
              <Form.Control
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input-dark"
                disabled={loading}
              />
            </Col>
            <Col xs={3}>
              <Button
                type="submit"
                className="btn-purple w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Chat;
