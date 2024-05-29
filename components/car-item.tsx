import { CarWithDeps } from "@/utils/db";
import Link from "next/link";

export default function CarItem({ car }: { car: CarWithDeps }) {
  return (
    <div className="flex flex-col p-2">
      <Link className="font-light" href={`/car/${car.id}`}>
        <div className="flex items-end">
          <h2 className="text-2xl font-bold">
            {car.model.make.name} {car.model.name}
          </h2>
          <p className="text-lg pl-2">r. v. {car.year}</p>
        </div>
        <p className="text-lg">{car.price.toLocaleString("cs")} Kč</p>
      </Link>
    </div>
  );
}
