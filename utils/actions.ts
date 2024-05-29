"use server";

import prisma from "./db";

const createCar = async (formData: FormData) => {
  const modelId = Number(formData.get("modelId"));
  const year = Number(formData.get("year"));
  const price = Number(formData.get("price"));
  const description = String(formData.get("description"));

  if (!modelId || !year || !price || !description) {
    throw new Error("Missing required fields");
  }

  await prisma.car.create({
    data: {
      modelId,
      year,
      price,
      description,
    },
  });
};

export { createCar };
