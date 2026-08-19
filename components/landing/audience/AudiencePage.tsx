import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { AudienceHero } from "@/components/landing/audience/AudienceHero";
import { AudienceFeatures } from "@/components/landing/audience/AudienceFeatures";
import { AudienceHighlight } from "@/components/landing/audience/AudienceHighlight";
import { AudienceScenario } from "@/components/landing/audience/AudienceScenario";
import { AudienceCTA } from "@/components/landing/audience/AudienceCTA";
import type { AudienceConfig } from "@/lib/audienceContent";

export function AudiencePage({ config }: { config: AudienceConfig }) {
  return (
    <main>
      <Nav />
      <AudienceHero config={config} />
      <AudienceFeatures config={config} />
      <AudienceHighlight config={config} />
      <AudienceScenario config={config} />
      <AudienceCTA config={config} />
      <Footer />
    </main>
  );
}
