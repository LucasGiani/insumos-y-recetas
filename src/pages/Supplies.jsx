const Suplies = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Mis insumos
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <table className="table-auto w-full md:table-fixed border-se border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-600">Song</th>
                <th className="border border-slate-600">Artist</th>
                <th className="border border-slate-600">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-700">Malcolm Lockyer</td>
                <td className="border border-slate-700">1961</td>
              </tr>
              <tr>
                <td className="border border-slate-700">Witchy Woman</td>
                <td className="border border-slate-700">The Eagles</td>
                <td className="border border-slate-700">1972</td>
              </tr>
              <tr>
                <td className="border border-slate-700">Shining Star</td>
                <td className="border border-slate-700">
                  Earth, Wind, and Fire
                </td>
                <td className="border border-slate-700">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Suplies;
