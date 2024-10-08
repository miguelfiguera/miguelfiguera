import React from "react";
import { Link } from "react-router-dom";

export default function LiLinks({ object }) {
  return (
    <div>
      <li>
        <Link
          to={object.link}
          className="text-decoration-none"
          style={{ color: "#CACACA" }}
        >
          {!object.link  ? (
            <>
            <strong>{object.text}.</strong>
            <br /></>
          ) : (
            <>
              <strong>{object.text}:</strong> <br /> {object.link}
            </>
          )}
        </Link>
      </li>
    </div>
  );
}