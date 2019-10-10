import React, { useState } from "react";
import AddForm from "./AddForm";
import { axiosWithAuth } from "data/axiosAuth";
import { Card, Icon } from "semantic-ui-react";

const FriendsList = () => {
  const [friends, setFriends] = useState(null);
  const [errors, setErrors] = useState(null);

  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => setFriends(res.data))
    .catch(err => setErrors("Sorry. You have no friends."));

  return (
    <>
      {" "}
      <AddForm />
      <div className="friends-container">
        {friends &&
          friends.map(friend => (
            <Card className="friend-card">
              <Card.Content>
                <h3>
                  {" "}
                  <Icon name="user" />
                  {friend.name}
                </h3>{" "}
              </Card.Content>{" "}
              <Card.Content>
                <p>Age: {friend.age}</p>
                <p>
                  <strong>Email: </strong>
                  <a
                    className="e"
                    href={`mailto:${friend.email}`}
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
