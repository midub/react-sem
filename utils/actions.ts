"use server";

import { redirect } from "next/navigation";
import prisma from "./db";

const createCar = async (formData: FormData) => {
  const modelId = Number(formData.get("modelId"));
  const year = Number(formData.get("year"));
  const price = Number(formData.get("price"));
  const description = String(formData.get("description"));

  if (!modelId || !year || !price || !description) {
    throw new Error("Missing required fields");
  }

  const car = await prisma.car.create({
    data: {
      modelId,
      year,
      price,
      description,
    },
  });

  redirect(`/car/${car.id}`);
};

const createComment = async (formData: FormData) => {
  const carId = Number(formData.get("carId"));
  const content = String(formData.get("content"));
  const name = String(formData.get("name"));

  if (!carId || !content || !name) {
    throw new Error("Missing required fields");
  }

  await prisma.comment.create({
    data: {
      carId,
      content,
      name,
    },
  });

  redirect(`/car/${carId}`);
};

export { createCar, createComment };
