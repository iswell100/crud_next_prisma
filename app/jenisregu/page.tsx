import { PrismaClient } from "@prisma/client";
import AddJenisRegu from "./addJenisRegu";
import UpdateJenisRegu from "./updateJenisRegu";

const prisma = new PrismaClient();

const getJenisRegu = async () => {
  const res = await prisma.jenisRegu.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return res;
}

const JenisRegu = async () => {
  const jenisregu = await getJenisRegu();

  return (
    <div>
      <div className="mb-2">
        <AddJenisRegu jenisregu={jenisregu} />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jenis</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jenisregu.map((jenisregu, index) => (
              <tr key={jenisregu.id}>
                <td>{index + 1}</td>
                <td>{jenisregu.name}</td>
                <td className="flex justify-center space-x-1">
                  <UpdateJenisRegu jenisregu={jenisregu} />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export const revalidate = 10;

export default JenisRegu;
