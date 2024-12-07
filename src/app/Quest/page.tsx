import QuestCard from '@/components/QuestCard';
import QuestDetails from '@/components/QuestDetails';
export default function Quest() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Card */}
        <div className="flex justify-center">
          <QuestCard />
        </div>

        {/* Right: Details */}
        <div>
          <QuestDetails />
        </div>
      </div>
    </div>
  );
}
