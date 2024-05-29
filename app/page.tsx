import prisma from "@/utils/db";
import SearchForm from "@/components/search-form";
import CarList from "@/components/car-list";

const getCars = async () => {
  return await prisma.car.findMany({
    include: { model: { include: { make: true}} }
  });
}

export default async function Home() {
  const cars = await getCars();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold pb-6">Cars</h1>
      <div className="flex space-x-4 pb-6">
        <SearchForm />
        <div>
          <button className="btn btn-blue">Add a car</button>
        </div>
      </div>
      <CarList cars={cars} />
    </main>
  );
}
