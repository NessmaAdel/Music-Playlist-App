import React from "react";
import { Row, Container, Col, Card, Button,Dropdown,DropdownButton } from "react-bootstrap";
import ImagePlaylist from "../../assets/maxresdefault.jpg";
import styles from "./index.module.scss";
import Songs from "./Songs_List.json";
export default function Home() {
  return (
    <div className={styles.home_page}>
      <Container>
        <Row>
          <Col>
            <Card className={styles.home_card_container} bg="dark">
              <Card.Img
                variant="top"
                src={ImagePlaylist}
                className={styles.home_card_image}
              />
              <Card.Body className={styles.home_card_body}>
                <Card.Title>
                  <span className={styles.title_name}>PLAYLIST</span>
                  <h2 className={styles.title_header}>Driving</h2>
                </Card.Title>
                <Card.Text>
                  <span className={styles.playlist_name}>
                    Pop jams for the car
                  </span>
                  <span className={styles.total_sings}>
                    Created by <strong>Nessma Adel</strong> {Songs.length}{" "}
                    songs,1hr 38min
                  </span>
                </Card.Text>
                <Button className={styles.playBtn}>Play</Button>
                <DropdownButton
                  id="dropdown-item-button"
                  title="..."
                  className={styles.menuBtnModal}
                >
                  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
