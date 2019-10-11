import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import { axiosWithAuth } from "data/axiosAuth";
import { Card, Icon } from "semantic-ui-react";

const FriendsList = props => {
  const [friends, setFriends] = useState(null);
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(() => setErrors("Sorry. You have no friends."));
  }, [status]);

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        setFriends(res.data);
        setStatus("Looks like you lost a friend...😞");
      })
      .catch(() =>
        setErrors("Sorry. There was an error deleting this friend.")
      );
  };

  return (
    <>
      {" "}
      <AddForm setStatus={setStatus} setFriends={setFriends} />
      {errors && <div className="err">{errors}</div>}
      {status && <div className="warning">{status}</div>}
      <div className="friends-container">
        {friends &&
          friends.map(friend => (
            <Card key={friend.id} className="friend-card">
              <Card.Content>
                <h3>
                  {" "}
                  <Icon name="user" />
                  {friend.name}
                  <span className="edit-icons">
                    <Icon
                      className="edit"
                      name="pencil"
                      onClick={() => props.history.push(`/edit/${friend.id}`)}
                    />
                    <Icon
                      className="edit"
                      name="close"
                      onClick={() => deleteFriend(friend.id)}
                    />
                  </span>
                </h3>{" "}
              </Card.Content>{" "}
              <Card.Content>
                <p>
                  <strong>Age: </strong> {friend.age}
                </p>
                <p>
                  <strong>Email: </strong>
                  <a
                    className="e"
                    href={`mailto:${friend.email}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {friend.email}
                  </a>
                </p>
              </Card.Content>
            </Card>
          ))}
      </div>
    </>
  );
};

export default FriendsList;
