import React, { useEffect, useState } from "react";
import "./TextCom.css";
import axios from "axios";

export default function TextCom() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((item) => {
        console.log(item.data.results);
        setUsers(item.data.results);
        setState(item.data.results);
      })
      .catch((error) => {
        alert("Error While getting the Users Data");
      });
  }, []);

  return (
    <div>
      <div style={{ padding: "30px" }}>
        <h2>Text Component</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptate voluptates, veniam corrupti neque quo non placeat
          necessitatibus dolores blanditiis aperiam assumenda quasi
          exercitationem aut inventore nemo maxime animi dignissimos qui
          suscipit atque eos corporis distinctio. Consectetur unde ducimus,
          blanditiis id iusto ipsum itaque. Reprehenderit doloremque, accusamus
          magnam laudantium pariatur aspernatur omnis facere voluptatum tempore,
          nam iure illum eum illo at aliquam sequi quasi veritatis veniam ipsam!
          Exercitationem rerum laudantium corporis fugiat inventore odio qui
          nostrum aperiam. Aliquid optio corrupti exercitationem laboriosam
          cumque ipsam, iusto neque, ducimus nesciunt architecto eum, adipisci
          veritatis harum sequi eaque? Totam natus dolores ditemctus. A in fuga
          amet magnam unde alias, quia deserunt similique tenetur, natus, nisi
          quaerat. Fuga quam, molestias eligendi ut consequuntur, provident
          distinctio ipsum possimus eos perferendis ullam voluptate aperiam
          placeat libero. Eaque quaerat natus nihil vitae omnis reiciendis
          laborum nesciunt, ditemniti quidem pariatur perferendis assumenda
          recusandae hic neque, cum adipisci animi cumque modi! Officia sequi
          iure atque dolorem molestiae quos error cum illum asperiores libero,
          reprehenderit aut dicta consequatur tenetur mollitia consectetur quis.
          Suscipit beatae aliquid debitis repudiandae numquam maxime dicta
          minima, iusto, facilis minus recusandae atque dolor ipsa et tempore
          quidem, officiis dolorem modi? Nostrum repudiandae nesciunt excepturi
          mollitia quam.
        </p>

        <div
          style={{
            width: "500px",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "20px auto",
          }}
        >
          <div>
            <input
              type="radio"
              name="gender"
              value="all"
              defaultChecked
              onChange={() => {
                setUsers(state);
              }}
            />
            ALL
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={() => {
                setUsers(state.filter((data) => data.gender === "male"));
              }}
            />
            MALE
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={() => {
                setUsers(state.filter((data) => data.gender === "female"));
              }}
            />
            FEMALE
          </div>
        </div>
        <table width="100%" frame="box" rules="all">
          <thead>
            <tr style={{backgroundColor:'black',color:'white'}}>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>GENDER</th>
            </tr>
          </thead>

          <tbody align="center">
            {users.map((item) => {
              return (
                <tr>
                  <td>
                    <img src={item.picture.medium} width="100" height={100} />
                  </td>
                  <td>
                    {item.name.first}
                    {item.name.last}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
