import Header from './components/Header';
import Hero from './components/Hero';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <div  className='bg-gradient-to-br from-slate-700 to-black'>
      <Header />
      <main className='max-w-4xl mx-auto px-5'>
        <Hero />
        <SkillSection />
        <ProjectSection />
      </main>
    </div>
  );
}

export default App;
