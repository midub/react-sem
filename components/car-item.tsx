import { Car } from '@prisma/client';

export default function CarItem({ car }: { car: Car }) {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold">{car.make}</h2>
            <h3 className="text-xl font-semibold">{car.model}</h3>
            <p className="text-lg">{car.year}</p>
            <p className="text-lg">{car.price}</p>
        </div>
    );
}