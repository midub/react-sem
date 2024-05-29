import prisma from "@/utils/db";
import SearchForm from "@/components/search-form";
import CarList from "@/components/car-list";
import Link from "next/link";

const getCars = async () => {
  return await prisma.car.findMany({
    include: { model: { include: { make: true } } },
  });
};

export default async function Home() {
  const cars = await getCars();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="title">Cars</h1>
      <div className="flex space-x-4 pb-6">
        <SearchForm />
        <Link className="btn btn-blue" href="/car/create">
          Add a car
        </Link>
      </div>
      <CarList cars={cars} />
    </main>
  );
}
