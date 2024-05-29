"use client";
import { MakeWithModels } from "@/utils/db";
import { useMemo, useState } from "react";
import { createCar } from "@/utils/actions";

export default function NewCarForm({ makes }: { makes: MakeWithModels[] }) {
  const [makeId, setMakeId] = useState<number | undefined>(undefined);

  const filteredModels = useMemo(() => {
    return makes.find((make) => make.id === makeId)?.models;
  }, [makeId]);

  return (
    <div>
      <form action={createCar} className="grid grid-cols-3 max-w-lg space-y-4">
        <label className="mt-4" htmlFor="makeId">
          Make
        </label>
        <select
          className="col-span-2"
          name="makeId"
          id="makeIdInput"
          required={true}
          value={makeId}
          onChange={(e) => setMakeId(+e.target.value)}
        >
          <option value="">Select a make</option>
          {makes.map((make) => (
            <option key={make.id} value={make.id}>
              {make.name}
            </option>
          ))}
        </select>

        <label htmlFor="modelId">Model</label>
        <select
          className="col-span-2"
          name="modelId"
          id="modelIdInput"
          required={true}
        >
          <option value="">Select a model</option>
          {filteredModels?.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>

        <label htmlFor="year">Year</label>
        <input
          className="col-span-2"
          type="number"
          name="year"
          id="yearInput"
          required={true}
        />

        <label htmlFor="price">Price</label>
        <input
          className="col-span-2"
          type="number"
          name="price"
          id="priceInput"
          required={true}
        />

        <label htmlFor="description">Description</label>
        <textarea
          className="col-span-2"
          name="description"
          id="descriptionInput"
        />

        <button className="btn btn-blue col-span-2 col-start-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
