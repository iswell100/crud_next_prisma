// app/page.tsx

interface DataItem {
  Regu: string;
  Pbb: string;
  Pionering: string;
  HastaKarya: string;
  CerdasCermat: string;
  DanceSemaphore: string;
  SenamPramukaJilid2: string;
  YelYel: string;
  Sandi: string;
  P3k: string;
  Kim: string;
  Total: string;
}

export const dynamic = 'force-dynamic';

const fetchData = async (): Promise<DataItem[]> => {
  const url = 'https://script.google.com/macros/s/AKfycbwKTABQs8JOaHyQKPg6Ff5_1kVtBQv-T2Q1o420kxlpfm2_9_IDx92xfhR4cFLbpTUV/exec';
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Satuan = async () => {
  const datas = await fetchData();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Regu</th>
              <th>PBB</th>
              <th>Pionering</th>
              <th>Hasta Karya</th>
              <th>Cerdas Cermat</th>
              <th>Dance Semaphore</th>
              <th>Senam Pramuka</th>
              <th>Yel Yel</th>
              <th>Sandi</th>
              <th>P3K</th>
              <th>KIM</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {datas.length > 0 ? (
              datas.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.Regu}</td>
                  <td>{data.Pbb}</td>
                  <td>{data.Pionering}</td>
                  <td>{data.HastaKarya}</td>
                  <td>{data.CerdasCermat}</td>
                  <td>{data.DanceSemaphore}</td>
                  <td>{data.SenamPramukaJilid2}</td>
                  <td>{data.YelYel}</td>
                  <td>{data.Sandi}</td>
                  <td>{data.P3k}</td>
                  <td>{data.Kim}</td>
                  <td>{data.Total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Satuan;
