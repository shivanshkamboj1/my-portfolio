import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function LeetcodeStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "shivanshukamboj";

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
        // console.log(data)
      })
      .catch((err) => {
        console.error("LeetCode fetch failed:", err);
        setLoading(false);
      });
  }, []);

  const circleTheme = (color) =>
    buildStyles({
      textColor: "#ffffff",
      pathColor: color,
      trailColor: "#2e2e2e",
    });

  return (
    <Container fluid className="leetcode-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">LeetCode</strong> Stats
        </h1>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        ) : stats && stats.status === "success" ? (
          <Row className="justify-content-center leetcode-circles">
            {[
              {
                label: "Easy",
                value: stats.easySolved,
                total: stats.totalEasy,
                color: "#00ff95",
              },
              {
                label: "Medium",
                value: stats.mediumSolved,
                total: stats.totalMedium,
                color: "#ffc300",
              },
              {
                label: "Hard",
                value: stats.hardSolved,
                total: stats.totalHard,
                color: "#ff4c60",
              },
              {
                label: "Total",
                value: stats.totalSolved,
                total: stats.totalQuestions,
                color: "#6c63ff",
              },
            ].map((item, idx) => (
              <Col md={3} xs={6} className="text-center  mt-4" key={idx}>
                <h5 className="purple mb-3">{item.label}</h5>
                <div style={{ width: 175, margin: "0 auto",color:"white" } }>
                  <CircularProgressbar
                    value={(item.value / item.total) * 100}
                    text={`${item.value}`}
                    styles={circleTheme(item.color)}
                  />
                  {/* {item.total} */}
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-danger text-center mt-4">Failed to fetch stats.</p>
        )}
      </Container>
    </Container>
  );
}

export default LeetcodeStats;
