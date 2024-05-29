"use client";

import { useState } from "react";
import { createComment } from "@/utils/actions";
import Modal from "./modal";

type Props = {
  carId: number;
};

export default function NewCommentForm({ carId }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="btn btn-blue" onClick={() => setShowModal(true)}>
        Add Comment
      </button>
      {showModal && (
        <Modal>
          <div>
            <h2 className="subtitle">New Comment</h2>
            <form
              action={async (formData) => {
                await createComment(formData);
                setShowModal(false);
              }}
              className="grid grid-cols-2 max-w-lg gap-x-2"
            >
              <input type="hidden" name="carId" value={carId} />
              <label htmlFor="name">Author name</label>
              <input
                type="text"
                name="name"
                required={true}
                id="nameInput"
                className="col-span-2 mb-2"
                placeholder="Michael Scott"
              />

              <label htmlFor="content">Content</label>
              <input
                type="text"
                name="content"
                required={true}
                id="contentInput"
                className="col-span-2 mb-4"
                placeholder="That's my car."
              />

              <button className="btn btn-blue" type="submit">
                Submit
              </button>

              <button
                className="btn btn-gray"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
