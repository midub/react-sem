import { CarWithDeps } from "@/utils/db";

type Props = {
  car: CarWithDeps;
};

export default function CarDetail({ car }: Props) {
  return (
    <div className="flex flex-col">
      <h2 className="subtitle">Car Details</h2>
      <div className="grid grid-cols-3 max-w-3xl gap-x-6 gap-y-2">
        <p className="font-light">Make</p>
        <p className="col-span-2">{car.model.make.name}</p>

        <hr className="divider col-span-3" />

        <p className="font-light">Model</p>
        <p className="col-span-2">{car.model.name}</p>

        <hr className="divider col-span-3" />

        <p className="font-light">Year</p>
        <p className="col-span-2">{car.year}</p>

        <hr className="divider col-span-3" />

        <p className="font-light">Price</p>
        <p className="col-span-2">{car.price.toLocaleString("cs")} Kč </p>

        <hr className="divider col-span-3" />

        <p className="font-light">Description</p>
        <p className="col-span-3 max-w-md">{car.description}</p>
      </div>
    </div>
  );
}
