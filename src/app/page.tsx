import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="text-gray-900 h-screen bg-gray-900">
      <Header />
      <div className="py-8">
        <div className="max-w-screen-xl px-2 mx-auto">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left p-1 text-gray-50 pb-2 text-gray-100">&nbsp;</th>
                <th className="text-left p-1 text-gray-50 pb-2 text-gray-100"><abbr title="Clibes">Clube</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2"><abbr title="Pontos">Pts</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2"><abbr title="Partidas Jogadas">Pj</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2"><abbr title="Vitórias">VIT</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2"><abbr title="Empates">E</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2"><abbr title="Derrotas">DER</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2 hidden lg:table-cell"><abbr title="Gols a favor">GM</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2 hidden lg:table-cell"><abbr title="Gols contra">GC</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2"><abbr title="Saldo de gols">SG</abbr></th>
                <th className="text-center text-gray-100 p-1 pb-2 hidden md:table-cell"><abbr title="Gols em casa e fora de casa">Últimos 5</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-100 bg-opacity-30">
                <td className="text-left p-1 text-gray-50">1</td>
                <td className="text-left p-1 text-gray-50"><span className="hidden md:inline">Central</span><span className="md:hidden">Central</span></td>
                <td className="text-center text-gray-50 p-1">86</td>
                <td className="text-center text-gray-50 p-1">38</td>
                <td className="text-center text-gray-50 p-1">27</td>
                <td className="text-center text-gray-50 p-1">5</td>
                <td className="text-center text-gray-50 p-1">6</td>
                <td className="text-center text-gray-50 p-1 hidden lg:table-cell">83</td>
                <td className="text-center text-gray-50 p-1 hidden lg:table-cell">32</td>
                <td className="text-center text-gray-50 p-1">51</td>
                <td className="text-center text-gray-50 p-1 hidden md:table-cell">
                  <div className="flex items-center justify-center w-full">
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-red-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-red-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left p-1 text-gray-50">2</td>
                <td className="text-left p-1 text-gray-50"><span className="hidden md:inline">Vila Cardoso</span><span className="md:hidden">Vila C.</span></td>
                <td className="text-center text-gray-50 p-1">74</td>
                <td className="text-center text-gray-50 p-1">38</td>
                <td className="text-center text-gray-50 p-1">21</td>
                <td className="text-center text-gray-50 p-1">11</td>
                <td className="text-center text-gray-50 p-1">6</td>
                <td className="text-center text-gray-50 p-1 hidden lg:table-cell">73</td>
                <td className="text-center text-gray-50 p-1 hidden lg:table-cell">44</td>
                <td className="text-center text-gray-50 p-1">29</td>
                <td className="text-center text-gray-50 p-1 hidden md:table-cell">
                  <div className="flex items-center justify-center w-full">
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-red-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-red-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left p-1 text-gray-50">3</td>
                <td className="text-left p-1 text-gray-50"><span className="hidden md:inline">Morro do Chupé</span><span className="md:hidden">Morro C.</span></td>
                <td className="text-center text-gray-50 p-1">69</td>
                <td className="text-center text-gray-50 p-1">38</td>
                <td className="text-center text-gray-50 p-1">20</td>
                <td className="text-center text-gray-50 p-1">9</td>
                <td className="text-center text-gray-50 p-1">9</td>
                <td className="text-center text-gray-50 p-1 hidden lg:table-cell">68</td>
                <td className="text-center text-gray-50 p-1 hidden lg:table-cell">42</td>
                <td className="text-center text-gray-50 p-1">26</td>
                <td className="text-center text-gray-50 p-1 hidden md:table-cell">
                  <div className="flex items-center justify-center w-full">
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                    <div className="bg-green-500 h-4 w-4 mx-0.5 rounded-full"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
