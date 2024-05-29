import prisma, { CarWithDeps } from "@/utils/db";
import SearchForm from "./search-form";
import CarItem from "./car-item";

type Props = {
    cars: CarWithDeps[];
  };

export default async function CarList({ cars }: Props) {
    return (
        <div className="divide-y divide-gray-300">
            { cars.map((car) => <CarItem key={car.id} car={car}/>)}
        </div>
    );
  }
  