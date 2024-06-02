import CarDetail from "@/components/car-detail";
import prisma, { CarWithDeps } from "@/utils/db";
import { Suspense, lazy } from "react";

const Comments = lazy(() => import("@/components/comments"));

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
        <Suspense fallback={<div>Loading comments...</div>}>
          <Comments carId={car.id} />
        </Suspense>
      </div>
    </div>
  );
}
