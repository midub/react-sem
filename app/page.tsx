import Image from "next/image";
import prisma from "@/utils/db";
import CarItem from "@/components/car-item";

export default async function Home() {
  const cars = await prisma.car.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      { cars.map((car) => <CarItem car={car}/>)}
    </main>
  );
}
