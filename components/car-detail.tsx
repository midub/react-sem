import { CarWithDeps } from "@/utils/db";

type Props = {
  car: CarWithDeps;
};

export default function CarDetail({ car }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="title">Car Detail</h1>

      <div className="grid grid-cols-2 max-w-xl">
        <p>Make</p>
        <p>{car.model.make.name}</p>

        <p>Model</p>
        <p>{car.model.name}</p>

        <p>Year</p>
        <p>{car.year}</p>

        <p>Price</p>
        <p>{car.price}</p>

        <p>Description</p>
        <p>{car.description}</p>
      </div>
    </div>
  );
}
