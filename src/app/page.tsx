import {
  Header,
  HeroSection,
  MobileHeroForm,
  ElegantMarquee,
  ProblemSection,
  ChaptersSection,
  AuthoritySection,
  MethodSection,
  FAQSection,
  FinalCTA,
  InstagramSection,
  Footer,
  MobileFloatingCTA,
} from "@/components"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MobileHeroForm />
        <ElegantMarquee />
        <ProblemSection />
        <ChaptersSection />
        <AuthoritySection />
        <MethodSection />
        <FAQSection />
        <FinalCTA />
        <InstagramSection />
      </main>
      <Footer />
    </>
  )
}
