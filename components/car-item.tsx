import { CarWithDeps } from '@/utils/db';

export default function CarItem({ car }: { car: CarWithDeps}) {
    return (
        <div className="flex items-center justify-center p-4 space-x-6">
            <h2 className="text-2xl font-bold">{car.model.make.name}</h2>
            <h3 className='text-xl font-bold'>{car.model.name}</h3>
            <p className="text-lg">{car.year}</p>
            <p className="text-lg">{car.price}</p>
        </div>
    );
}