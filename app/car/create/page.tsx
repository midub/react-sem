import NewCarForm from "@/components/new-car-form";
import prisma from "@/utils/db";

const fetchMakes = async () =>
  await prisma.make.findMany({ include: { models: true } });

export default async function CreateCarPage() {
  const makes = await fetchMakes();

  return (
    <div className="flex flex-col min-h-screen items-center">
      <h1 className="title">New Car</h1>
      <NewCarForm makes={makes} />
    </div>
  );
}
