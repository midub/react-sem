import CarDetail from "@/components/car-detail";
import Comments from "@/components/comments";
import prisma, { CarWithDeps } from "@/utils/db";

type Params = {
  id: number;
};

const getCar = async (id: number): Promise<CarWithDeps> =>
  await prisma.car.findFirstOrThrow({
    include: { model: { include: { make: true } } },
    where: { id: Number(id) },
  });

export default async function CarDetailPage({ params }: { params: Params }) {
  const car = await getCar(params.id);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6 p-6">
        <CarDetail car={car} />
        <Comments carId={car.id} />
      </div>
    </div>
  );
}
