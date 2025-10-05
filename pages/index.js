import Intro from '../components/Intro';
import UnitTable from '../components/UnitTable';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Intro />
      <main className="p-6">
        <UnitTable />
      </main>
    </div>
  );
}
