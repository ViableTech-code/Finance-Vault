
import { useState } from "react";
import { EntitySelector } from "@/components/EntitySelector";
import { EntityDashboard } from "@/components/EntityDashboard";

const Index = () => {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {!selectedEntity ? (
        <EntitySelector onSelectEntity={setSelectedEntity} />
      ) : (
        <EntityDashboard 
          entity={selectedEntity} 
          onBack={() => setSelectedEntity(null)} 
        />
      )}
    </div>
  );
};

export default Index;
