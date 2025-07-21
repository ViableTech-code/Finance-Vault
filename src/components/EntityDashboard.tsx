import { useState } from "react";
import { ArrowLeft, Search, Plus, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DocumentCategories } from "@/components/DocumentCategories";
import { SmartDocumentGrid } from "@/components/SmartDocumentGrid";


interface EntityDashboardProps {
  entity: string;
  onBack: () => void;
}

const entityNames: Record<string, string> = {
  "riffle-inc": "Riffle Inc",
  "riffle-studio": "Riffle Studio Private Limited", 
  "deo-studios": "Deo Studios",
  "ember-labs": "Ember Labs"
};

export const EntityDashboard = ({ entity, onBack }: EntityDashboardProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  

  const entityName = entityNames[entity] || entity;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="px-8 py-6 border-b border-border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="hover:bg-muted"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Entities
              </Button>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-medium text-foreground">{entityName}</h1>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search documents across all categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base border-border bg-background"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-8 py-8">
          {!activeCategory ? (
            <DocumentCategories 
              entity={entity}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
            />
          ) : (
            <SmartDocumentGrid 
              entity={entity}
              category={activeCategory}
              searchQuery={searchQuery}
              onBack={() => setActiveCategory(null)}
            />
          )}
        </main>

      </div>
    </div>
  );
};