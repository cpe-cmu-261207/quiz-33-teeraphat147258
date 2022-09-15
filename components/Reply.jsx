import React from "react";
import { comments } from "../libs/comments";
export default function Reply(props) {
  return (
    <div>
      {comments.map((x) => (
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src={x.replies.userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {x.replies.username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{x.replies.replyText}</span>
            <span className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{x.replies.likeNum}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
