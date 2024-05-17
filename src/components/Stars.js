import React from "react";
import Star from "./Star";

const Stars = ({ count }) => {
    return count >= 1 && count <= 5 ? (
        <ul className="card-body-stars">
            {Array.from({ length: count }, (_, idx) => (
                <li key={idx}>
                    <Star />
                </li>
            ))}
        </ul>
    ) : null;
}

Stars.defaultProps = {
    count: 0
};

export default Stars;