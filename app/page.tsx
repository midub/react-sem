import prisma from "@/utils/db";
import SearchForm from "@/components/search-form";
import CarList from "@/components/car-list";
import Link from "next/link";

const getCars = async (search: string | null) => {
  return search
    ? await prisma.car.findMany({
        include: { model: { include: { make: true } } },
        where: {
          OR: [
            { description: { contains: search } },
            { model: { name: { contains: search } } },
            { model: { make: { name: { contains: search } } } },
          ],
        },
      })
    : await prisma.car.findMany({
        include: { model: { include: { make: true } } },
      });
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = searchParams?.search ? (searchParams.search as string) : null;
  const cars = await getCars(search);

  console.log(searchParams);

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
