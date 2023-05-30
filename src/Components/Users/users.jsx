import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        name: "Andrey",
        photoUrl: "https://www.rewizor.ru/files/238346ks54.jpg",
        followed: true,
        userid: 1,
        status: "Cherryboy",
        location: { city: "Kursk", country: "Russsia" },
      },
      {
        name: "Egor",
        photoUrl: "https://www.rewizor.ru/files/238346ks54.jpg",
        followed: false,
        userid: 2,
        status: "Soplya",
        location: { city: "Kishinev", country: "Moldovia" },
      },
      {
        name: "Vanya",
        photoUrl: "https://www.rewizor.ru/files/238346ks54.jpg",
        followed: false,
        userid: 3,
        status: "Kachok",
        location: { city: "Tula", country: "Russia" },
      },
      {
        name: "Nastya",
        photoUrl: "https://www.rewizor.ru/files/238346ks54.jpg",
        followed: true,
        userid: 4,
        status: "Perfect",
        location: { city: "Pripyat", country: "Ucrain" },
      },
    ]);
  }
  return (
    <div>
      {" "}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
