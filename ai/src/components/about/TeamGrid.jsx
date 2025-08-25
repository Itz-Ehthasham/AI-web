import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '@/data/teamData';

export default function TeamGrid() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
        Our Leadership Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}