import prisma from "@/utils/db";
import SingleComment from "./comment";
import { useState } from "react";
import Modal from "./modal";
import NewCommentForm from "./new-comment-form";

type Props = {
  carId: number;
};

export default async function Comments({ carId }: Props) {
  const comments = await prisma.comment.findMany({
    where: { carId },
  });

  return (
    <div className="flex flex-col">
      <h2 className="subtitle">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <SingleComment comment={comment} key={comment.id} />
        ))}
      </ul>
      <NewCommentForm carId={carId} />
    </div>
  );
}
