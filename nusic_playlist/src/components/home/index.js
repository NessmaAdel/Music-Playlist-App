import React from "react";
import {
  Row,
  Container,
  Col,
  Card,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import ImagePlaylist from "../../assets/maxresdefault.jpg";
import styles from "./index.module.scss";
import Songs from "./Songs_List.json";
import SongsTable from '../song_table';
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
                <div className={styles.card_footer}>
                <Button className={styles.playBtn}>Play</Button>
                <Dropdown >
                  <Dropdown.Toggle
                    id="dropdown-custom-1"
                   className={styles.menuBtnModal}
                  >
                   ...
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={styles.menu_dropDown_modal}>
                    <Dropdown.Item as="button" disabled>
                      Go To Playlist Radio
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button" disabled>
                      Collaborative Playlist
                    </Dropdown.Item>
                    <Dropdown.Item as="button" disabled>
                      Make Secret
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button">Edit Details</Dropdown.Item>
                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button" disabled>
                      Create Similar Playlist
                    </Dropdown.Item>
                    <Dropdown.Item as="button" disabled>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item as="button" disabled>
                      Share
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <SongsTable Songs={Songs}/>
        </Row>
      </Container>
    </div>
  );
}
