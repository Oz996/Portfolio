import clonesData from '../../db.json'
import CloneCard from '../components/CloneCard'

const Clones = () => {
  return (
    <section className="w-8/12 mx-auto">
      <div className="grid grid-cols-4 gap-5 mt-32 max-md:flex max-md:flex-col max-md:gap-12 max-xl:grid-cols-2 slide-up">
        {clonesData.clones.map((clone, index) => (
          <CloneCard key={index} clone={clone}/>
        ))}
      </div>
    </section>
  )
}

export default Clones