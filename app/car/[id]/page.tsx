import CarDetail from "@/components/car-detail";
import prisma, { CarWithDeps } from "@/utils/db";

type Params = {
    id: number;
};

const getCar = async (id: number): Promise<CarWithDeps> => 
    await prisma.car.findFirstOrThrow({
      include: { model: { include: { make: true}} },
      where: { id: Number(id) }
    });

export default async function CarDetailPage({params}: { params: Params } ) {
    const car = await getCar(params.id);

    return (
        <div className="min-h-screen">
            <CarDetail car={car}/>
        </div>
    );
}