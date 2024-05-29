import { Comment } from "@prisma/client";

type Props = {
  comment: Comment;
};

export default function SingleComment({ comment }: Props) {
  return (
    <div className="flex flex-col rounded-md bg-gray-100 shadow-sm px-4 py-2 w-56 mb-3">
      <p className="text-xs font-light pb-2">{comment.name}</p>
      <p className="text-sm">{comment.content}</p>
    </div>
  );
}
